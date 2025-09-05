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
    throw new Error('Secret is not setup in the env variable');
}
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const isUser = await User_js_1.default.findOne({ email });
    if (!isUser)
        return res.json({ success: 400, message: "Email not found" });
    const chkPass = await bcryptjs_1.default.compare(password, isUser.password);
    if (!chkPass)
        return res.json({ success: 400, message: "Incorrect Password" });
    const token = jsonwebtoken_1.default.sign({ id: isUser._id, email: isUser.email, role: isUser.role }, SECRET);
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
});
exports.default = router;
