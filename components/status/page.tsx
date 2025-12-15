"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle, Loader2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentStatusPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const transactionId = searchParams.get("transactionId");
    
    if (!transactionId) {
      setStatus("failed");
      setError("No transaction ID found");
      return;
    }

    // Simulate checking payment status
    // In a real app, you would check with your backend
    const timer = setTimeout(() => {
      // For demo purposes, we'll assume payment is successful
      // You should replace this with actual API call to check payment status
      setStatus("success");
      setPaymentDetails({
        transactionId,
        amount: "699",
        type: "Ticket Purchase",
        reference: "1-Day Pass",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <Loader2 className="w-12 h-12 text-[#EA4A3E] animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing Payment</h2>
          <p className="text-gray-600 mb-4">Please wait while we process your payment...</p>
          <div className="animate-pulse text-sm text-gray-500">
            Do not close or refresh this page
          </div>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for your payment. Your tickets have been booked successfully.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold text-gray-900 mb-3">Payment Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-medium text-sm">{paymentDetails?.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-bold text-green-600">₹{paymentDetails?.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">{paymentDetails?.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reference:</span>
                <span className="font-medium">{paymentDetails?.reference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-[#EA4A3E] hover:bg-[#D03F34] text-white">
              <Link href="/tickets">
                View Tickets
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <Link href="/">
                Go to Homepage
              </Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-12 h-12 text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Payment Failed
        </h1>
        
        <p className="text-gray-600 mb-6">
          {error || "Payment could not be processed. Please try again."}
        </p>

        <div className="space-y-3">
          <Button asChild className="w-full bg-[#EA4A3E] hover:bg-[#D03F34] text-white">
            <Link href="/tickets">
              Try Again
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          If the amount was deducted, it will be refunded within 5-7 business days.
        </p>
      </div>
    </div>
  );
}