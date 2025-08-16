import express from 'express'
import Razorpay from 'razorpay'
import dotenv from 'dotenv'

dotenv.config();
// config.dotenv();

const router = express.Router();

const razorpay = new Razorpay({
  key_id : process.env.RAZORPAY_API_KEY as string,
  key_secret : process.env.RAZORPAY_API_SECRET as string,
})


router.post('/create-order' , async(req , res)=>{
    const {amount} = req.body;
    const options = {
      amount : amount * 100,
      currency : 'INR',
      receipt : "receipt_" + Date.now(),
      payment_capture : 1,
    }

    const order = await razorpay.orders.create(options);
    res.json(order);



})

export default router;