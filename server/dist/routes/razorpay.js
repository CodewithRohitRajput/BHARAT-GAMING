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
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();
// config.dotenv();
const router = express.Router();
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});
router.post('/create-order', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = req.body;
    const options = {
        amount: amount * 100,
        currency: 'INR',
        receipt: "receipt_" + Date.now(),
        payment_capture: 1,
    };
    const order = yield razorpay.orders.create(options);
    res.json(order);
}));
export default router;
