"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  baseAmount: number;
};

export default function UserDetailsModal({
  open,
  onClose,
  baseAmount,
}: Props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  // ✅ GST logic ONLY here
  const GST_RATE = 0.18;
  const gstAmount = Math.round(baseAmount * GST_RATE);
  const totalAmount = baseAmount + gstAmount;

  const handleSubmit = async () => {
    if (!name || mobile.length !== 10) {
      alert("Enter valid name and mobile number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/phonepe/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,       // ✅ FINAL AMOUNT
          mobileNumber: mobile,
          userName: name,
        }),
      });

      const data = await res.json();
      console.log("PhonePe response:", data);

      const redirectUrl = data?.redirectUrl;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert("Payment initiation failed");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong");
    } finally {
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
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Mobile Number"
          maxLength={10}
          className="w-full border rounded px-3 py-2"
          onChange={(e) => setMobile(e.target.value)}
        />

        {/* 💰 PRICE BREAKUP */}
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
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#EA4A3E] text-white"
        >
          {loading ? "Processing..." : `Pay ₹${totalAmount}`}
        </Button>

        <Button
          variant="outline"
          onClick={onClose}
          className="w-full"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
