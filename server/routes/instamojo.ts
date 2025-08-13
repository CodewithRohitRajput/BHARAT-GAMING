import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const router = express.Router();

const INSTAMOJO_API_KEY = process.env.INSTAMOJO_API_KEY || "";
const INSTAMOJO_AUTH_TOKEN = process.env.INSTAMOJO_AUTH_TOKEN || "";

router.post("/", async (req, res) => {
  try {
    const { amount, purpose, buyer_name, email, phone } = req.body;

    const response = await fetch("https://test.instamojo.com/api/v2/payment-requests/", {
      method: "POST",
      headers: {
        "X-Api-Key": INSTAMOJO_API_KEY,
        "X-Auth-Token": INSTAMOJO_AUTH_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        purpose,
        buyer_name,
        email,
        phone,
        send_email: true,
        send_sms: true,
        allow_repeated_payments: false,
        redirect_url: "http://localhost:3000/Payment", // or your success page
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment request failed" });
  }
});

export default router;
