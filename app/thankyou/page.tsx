import { Suspense } from "react";
import ThankYouClient from "./ThankYouClient";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ThankYouClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2">Processing ⏳</h1>
        <p className="text-gray-600">Please wait...</p>
      </div>
    </div>
  );
}
