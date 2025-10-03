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
// import cookieParser from 'cookie-parser'
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET;
if (!SECRET)
    throw new Error("env not setup");
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.token;
    if (!token)
        return res.json({ success: 400 });
    const decoded = jwt.verify(token, SECRET);
    // const role = req.cookies.role || null;
    return res.json({ role: decoded.role || null });
}));
export default router;
