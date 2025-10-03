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
    throw new Error("Secret is not setup in the env variable");
}
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, role, createdAt, updatedAt } = req.body;
    const alreadyUser = yield User.findOne({ email });
    if (alreadyUser)
        return res.json({ status: 400, message: "User Already Exists" });
    const hashPass = yield bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPass, role });
    yield newUser.save();
    const token = jwt.sign({ id: newUser._id, email: newUser.email, role: newUser.role }, SECRET);
    // for pro sameSite : 'none' and secure : true
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 3600000,
        secure: false
    });
    // res.cookie('role' , newUser.role , {
    //     httpOnly : false,
    //     sameSite : 'lax',
    //     path : '/',
    //     maxAge : 3600000,
    //     secure : false
    // })
    return res.json({ status: 200, message: "User Registered Successfully", token });
}));
export default router;
