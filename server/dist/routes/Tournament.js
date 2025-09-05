"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_js_1 = __importDefault(require("../models/User.js"));
const Tournament_js_1 = __importDefault(require("../models/Tournament.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
dotenv_1.default.config();
const SECRET = process.env.SECRET;
if (!SECRET) {
    throw new Error('Secret is not setup in the env variable');
}
router.post('/create', async (req, res) => {
    const { tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass } = req.body;
    const newTournament = new Tournament_js_1.default({ tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass });
    await newTournament.save();
    return res.json({ success: 200, message: "Tournament Created Successfully" });
});
// edit
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass } = req.body;
    const EditedTournament = await Tournament_js_1.default.findByIdAndUpdate(id, { tournamentname, game, description, startDate, endDate, startTime, registrationDeadline, maxTeams, rules, prize, status, roomId, roomPass }, { new: true });
    return res.status(200).json({ message: 'Tournamnet Edited Succesfully' });
});
router.get('/get', async (req, res) => {
    const allTournaments = await Tournament_js_1.default.find();
    return res.json({ success: 200, allTournaments });
});
router.get('/get/:id', async (req, res) => {
    const { id } = req.params;
    const singleTournament = await Tournament_js_1.default.findById(id);
    return res.json({ success: 200, singleTournament });
});
router.get('/isAdmin', async (req, res) => {
    const token = req.cookies.token;
    if (!token)
        return res.json({
            adminUser: false,
            message: 'No authentication token'
        });
    const decoded = jsonwebtoken_1.default.verify(token, SECRET);
    const userId = decoded.id;
    const isAdmin = await User_js_1.default.findOne({ _id: userId, role: 'admin' });
    if (!isAdmin)
        return res.json({
            adminUser: false
        });
    else {
        return res.json({
            adminUser: true
        });
    }
});
exports.default = router;
