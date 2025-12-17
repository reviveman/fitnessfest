"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ThankYouClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow text-center max-w-md">
        {status === "processing" && (
          <>
            <h1 className="text-2xl font-bold mb-2">
              Payment Processing ⏳
            </h1>
            <p className="text-gray-600">
              Please wait while we confirm your payment.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              Payment Failed ❌
            </h1>
            <p>Please contact support.</p>
          </>
        )}

        {!status && (
          <>
            <h1 className="text-2xl font-bold mb-2">
              Thank You 🎉
            </h1>
            <p className="text-gray-600">
              Your registration is complete.
            </p>
          </>
        )}

        <p className="mt-4 text-sm text-gray-400">
          Redirecting to home…
        </p>
      </div>
    </div>
  );
}
