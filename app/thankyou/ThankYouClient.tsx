"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Status = "processing" | "success" | "failed";

export default function ThankYouClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [merchantOrderId, setMerchantOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("processing");

  // ✅ GET ORDER ID ON FIRST RENDER
  useEffect(() => {
    const fromUrl = searchParams.get("merchantOrderId");
    const fromStorage = localStorage.getItem("merchantOrderId");

    const finalId = fromUrl || fromStorage;

    console.log("🆔 Using merchantOrderId:", finalId);
    setMerchantOrderId(finalId);
  }, [searchParams]);

  // ✅ START POLLING
  useEffect(() => {
    if (!merchantOrderId) return;
    if (status !== "processing") return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `/api/registrations/status?merchantOrderId=${merchantOrderId}`,
          { cache: "no-store" }
        );

        const data = await res.json();
        console.log("🔍 Payment status response:", data);

        if (data.status === "SUCCESS") {
          setStatus("success");
          clearInterval(interval);
          localStorage.removeItem("merchantOrderId");

          setTimeout(() => router.push("/"), 8000);
        }

        if (data.status === "FAILED") {
          setStatus("failed");
          clearInterval(interval);
          localStorage.removeItem("merchantOrderId");

          setTimeout(() => router.push("/"), 8000);
        }
      } catch (e) {
        console.error("❌ Poll error", e);
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
            <p>Please wait while we confirm your payment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-2">
              Thank You 🎉
            </h1>
            <p>Your registration is confirmed.</p>
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
      </div>
    </div>
  );
}
