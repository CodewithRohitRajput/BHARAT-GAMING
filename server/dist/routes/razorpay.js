"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const razorpay_1 = __importDefault(require("razorpay"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// config.dotenv();
const router = express_1.default.Router();
const razorpay = new razorpay_1.default({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});
router.post('/create-order', async (req, res) => {
    const { amount } = req.body;
    const options = {
        amount: amount * 100,
        currency: 'INR',
        receipt: "receipt_" + Date.now(),
        payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
});
exports.default = router;
