


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UserDetailsModal({ open, onClose, amount }: any) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

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
        amount,
        mobileNumber: mobile,
      }),
    });

    const data = await res.json();
    console.log("PhonePe response:", data);

    // ✅ STANDARD CHECKOUT v2 RESPONSE
    const redirectUrl = data?.redirectUrl;

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error("No redirect URL from PhonePe:", data);
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />

        <Button onClick={handleSubmit}>
          {loading ? "Processing..." : `Pay ₹${amount}`}
        </Button>
      </div>
    </div>
  );
}
