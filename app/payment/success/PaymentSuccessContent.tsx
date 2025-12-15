"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {isSuccess ? (
        <>
          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful 🎉
          </h1>
          <p className="mt-3 text-gray-600 text-center">
            Thank you for purchasing your ticket.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-600">
            Payment Failed ❌
          </h1>
          <p className="mt-3 text-gray-600 text-center">
            Your payment was not completed. Please try again.
          </p>
        </>
      )}
    </div>
  );
}
