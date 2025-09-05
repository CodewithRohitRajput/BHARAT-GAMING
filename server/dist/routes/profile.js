"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_js_1 = __importDefault(require("../models/User.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
dotenv_1.default.config();
const SECRET = process.env.SECRET;
if (!SECRET) {
    throw new Error("no secret");
}
router.get('/', async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "NO token" });
    }
    const decoded = jsonwebtoken_1.default.verify(token, SECRET);
    //   console.log("Decoed " , decoded)
    const userId = decoded.id;
    const Profile = await User_js_1.default.findById(userId);
    res.json({ token: !!token, Profile });
});
exports.default = router;
