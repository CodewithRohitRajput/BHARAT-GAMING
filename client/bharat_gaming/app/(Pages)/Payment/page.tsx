"use client"

import { useState } from "react"
import Script from "next/script"

export default function Payment() {
  const [busy, setBusy] = useState(false)

  async function handlePay() {
    if (busy) return
    setBusy(true)
    try {
      // 1. Ask backend to create order (amount in rupees here; backend multiplies by 100)
      const res = await fetch("http://localhost:5000/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1 })
      })
      if (!res.ok) throw new Error("Order create failed")
      const order = await res.json()

      // 2. Ensure Razorpay SDK is loaded
      const R = (window as any).Razorpay
      if (!R) {
        alert("Razorpay not ready. Reload page.")
        return
      }

      // 3. Open checkout
      const rzp = new R({
        key: "rzp_test_R594dnJS3AC7Vu",
        order_id: order.id,
        amount: order.amount, // in paise from backend
        currency: "INR",
        name: "BHARAT GAMING",
        description: "Tournament Fee",
        notes: { platform: "BHARAT_GAMING" },
        handler: (resp: any) => {
          alert("Success: " + resp.razorpay_payment_id)
          // Later: POST to /payment/verify with order.id, resp.razorpay_payment_id, resp.razorpay_signature
        },
        theme: { color: "#0ea5e9" }
      })

      rzp.on("payment.failed", (err: any) => {
        alert("Failed: " + err.error.description)
      })

      rzp.open()
    } catch (e: any) {
      alert(e.message || "Error")
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-900 text-white">
      {/* Razorpay script auto-loads after the page becomes interactive */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <h1 className="text-3xl font-bold">Simple Payment</h1>
      <button
        onClick={handlePay}
        disabled={busy}
        className={`px-6 py-3 rounded-md font-semibold ${
          busy ? "bg-gray-600 cursor-not-allowed" : "bg-cyan-600 hover:bg-cyan-500"
        }`}
      >
        {busy ? "Please wait..." : "Pay ₹1"}
      </button>
      <p className="text-xs text-gray-400">This is the minimal version.</p>
    </main>
  )
}