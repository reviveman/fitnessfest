"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  baseAmount: number;
  passTitle: string;
};

export default function UserDetailsModal({
  open,
  onClose,
  baseAmount,
  passTitle,
}: Props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const GST_RATE = 0.18;
  const gstAmount = Math.round(baseAmount * GST_RATE);
  const totalAmount = baseAmount + gstAmount;

const handlePay = async () => {
  if (!name || mobile.length !== 10 || !email) {
    alert("Enter valid name, email, and 10-digit mobile number");
    return;
  }

  setLoading(true);

  try {
    /**
     * 1️⃣ SAVE TICKET REGISTRATION
     */
    const saveRes = await fetch("/api/tickets/initiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        mobile,
        email,
        passTitle,
        amount: totalAmount,
      }),
    });

    const saveData = await saveRes.json();
    if (!saveData?.merchantOrderId) {
      throw new Error("Failed to create ticket order");
    }

    // ✅ 🔥 THIS IS THE FIX
    localStorage.setItem("merchantOrderId", saveData.merchantOrderId);

    /**
     * 2️⃣ START PHONEPE PAYMENT
     */
    const payRes = await fetch("/api/phonepe/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalAmount,
        merchantOrderId: saveData.merchantOrderId,
      }),
    });

    const payData = await payRes.json();

    if (payData?.redirectUrl) {
      window.location.href = payData.redirectUrl;
    } else {
      throw new Error("Payment initiation failed");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
    setLoading(false);
  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Complete Payment</h2>

        <input
          placeholder="Full Name"
          className="w-full border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email Address"
          type="email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Mobile Number"
          maxLength={10}
          className="w-full border rounded px-3 py-2"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Base Amount</span>
            <span>₹{baseAmount}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span>₹{gstAmount}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>

        <Button
          onClick={handlePay}
          disabled={loading}
          className="w-full bg-[#EA4A3E] text-white"
        >
          {loading ? "Processing..." : `Pay ₹${totalAmount}`}
        </Button>

        <Button variant="outline" onClick={onClose} className="w-full">
          Cancel
        </Button>
      </div>
    </div>
  );
}
