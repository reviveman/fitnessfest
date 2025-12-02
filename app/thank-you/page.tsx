"use client";

import { Suspense } from "react";
import ThankYouComponentWrapper from "@/components/thankYou/ThankYouComponentWrapper";

export default function ThankYouRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouComponentWrapper />
    </Suspense>
  );
}
