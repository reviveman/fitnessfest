"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Status = "processing" | "success" | "failed";

export default function ThankYouClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const merchantOrderId = searchParams.get("merchantOrderId");
  const initialStatus = searchParams.get("status") as Status | null;

  const [status, setStatus] = useState<Status>(
    initialStatus || "processing"
  );

  useEffect(() => {
    if (status !== "processing") return;

    let interval: NodeJS.Timeout;

    interval = setInterval(async () => {
      if (!merchantOrderId) return;

      try {
        const res = await fetch(
          `/api/registrations/status?merchantOrderId=${merchantOrderId}`
        );
        const data = await res.json();

        if (data.status === "SUCCESS") {
          setStatus("success");
          clearInterval(interval);

          setTimeout(() => router.push("/"), 8000);
        }

        if (data.status === "FAILED") {
          setStatus("failed");
          clearInterval(interval);

          setTimeout(() => router.push("/"), 8000);
        }
      } catch (err) {
        console.error("Status check failed", err);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [merchantOrderId, status, router]);

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

        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-2">
              Thank You 🎉
            </h1>
            <p className="text-gray-600">
              Payment successful! Your registration is confirmed.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              A confirmation email has been sent.
            </p>
          </>
        )}

        {status === "failed" && (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              Payment Failed ❌
            </h1>
            <p>Please contact support.</p>
          </>
        )}

        <p className="mt-4 text-sm text-gray-400">
          Redirecting to home…
        </p>
      </div>
    </div>
  );
}
