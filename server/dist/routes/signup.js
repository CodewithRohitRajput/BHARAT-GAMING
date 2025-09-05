"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_js_1 = __importDefault(require("../models/User.js"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const router = express_1.default.Router();
dotenv_1.default.config();
const SECRET = process.env.SECRET;
if (!SECRET) {
    throw new Error("Secret is not setup in the env variable");
}
router.post('/', async (req, res) => {
    const { username, email, password, role, createdAt, updatedAt } = req.body;
    const alreadyUser = await User_js_1.default.findOne({ email });
    if (alreadyUser)
        return res.json({ status: 400, message: "User Already Exists" });
    const hashPass = await bcryptjs_1.default.hash(password, 10);
    const newUser = new User_js_1.default({ username, email, password: hashPass, role });
    await newUser.save();
    const token = jsonwebtoken_1.default.sign({ id: newUser._id, email: newUser.email, role: newUser.role }, SECRET);
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
});
exports.default = router;
