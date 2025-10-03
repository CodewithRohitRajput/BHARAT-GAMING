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
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const router = express.Router();
dotenv.config();
const SECRET = process.env.SECRET;
if (!SECRET) {
    throw new Error('Secret is not setup in the env variable');
}
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const isUser = yield User.findOne({ email });
    if (!isUser)
        return res.json({ success: 400, message: "Email not found" });
    const chkPass = yield bcrypt.compare(password, isUser.password);
    if (!chkPass)
        return res.json({ success: 400, message: "Incorrect Password" });
    const token = jwt.sign({ id: isUser._id, email: isUser.email, role: isUser.role }, SECRET);
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        path: '/',
        maxAge: 3600000
    });
    // res.cookie('role' , isUser.role , {
    //     httpOnly : false,
    //     sameSite : 'lax',
    //     secure : false,
    //     path : '/',
    //     maxAge : 3600000
    // })
    return res.json({ message: "User LoggedIn", token });
}));
export default router;
