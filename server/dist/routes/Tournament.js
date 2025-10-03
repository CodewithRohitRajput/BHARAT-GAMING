var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import User from '../models/User.js';
import Tournament from '../models/Tournament.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
const router = express.Router();
dotenv.config();
const SECRET = process.env.SECRET;
if (!SECRET) {
    throw new Error('Secret is not setup in the env variable');
}
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass } = req.body;
    const newTournament = new Tournament({ tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass });
    yield newTournament.save();
    return res.json({ success: 200, message: "Tournament Created Successfully" });
}));
// edit
router.put('/:id/edit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass } = req.body;
    const EditedTournament = yield Tournament.findByIdAndUpdate(id, { tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass }, { new: true });
    return res.status(200).json({ message: 'Tournamnet Edited Succesfully' });
}));
router.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allTournaments = yield Tournament.find();
    return res.json({ success: 200, allTournaments });
}));
router.get('/get/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const singleTournament = yield Tournament.findById(id);
    return res.json({ success: 200, singleTournament });
}));
router.get('/isAdmin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.token;
    if (!token)
        return res.json({
            adminUser: false,
            message: 'No authentication token'
        });
    const decoded = jwt.verify(token, SECRET);
    const userId = decoded.id;
    const isAdmin = yield User.findOne({ _id: userId, role: 'admin' });
    if (!isAdmin)
        return res.json({
            adminUser: false
        });
    else {
        return res.json({
            adminUser: true
        });
    }
}));
export default router;
