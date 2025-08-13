'use client'
import React, { useState } from "react";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    amount: "",
    purpose: "",
    buyer_name: "",
    email: "",
    phone: "",
    currency: "INR",
  });

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.payment_request?.longurl) {
        // Redirect to Instamojo payment page
        window.location.href = data.payment_request.longurl;
      } else {
        alert("Payment request failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating payment request");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Make Payment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="buyer_name"
          placeholder="Your Name"
          value={formData.buyer_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
