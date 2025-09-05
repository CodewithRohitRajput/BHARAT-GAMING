"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cookieParser from 'cookie-parser'
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET = process.env.SECRET;
if (!SECRET)
    throw new Error("env not setup");
router.get('/', async (req, res) => {
    const token = req.cookies.token;
    if (!token)
        return res.json({ success: 400 });
    const decoded = jsonwebtoken_1.default.verify(token, SECRET);
    // const role = req.cookies.role || null;
    return res.json({ role: decoded.role || null });
});
exports.default = router;
