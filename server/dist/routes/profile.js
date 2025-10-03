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
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
const router = express.Router();
dotenv.config();
const SECRET = process.env.SECRET;
if (!SECRET) {
    throw new Error("no secret");
}
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "NO token" });
    }
    const decoded = jwt.verify(token, SECRET);
    //   console.log("Decoed " , decoded)
    const userId = decoded.id;
    const Profile = yield User.findById(userId);
    res.json({ token: !!token, Profile });
}));
export default router;
