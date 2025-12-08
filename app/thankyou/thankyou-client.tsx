"use client";

import ThankYouPage from "@/components/thankYou/ThankYouPage";
import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const params = useSearchParams();
  const type = (params.get("type") ?? "visitor").toLowerCase();

  return <ThankYouPage type={type} />;
}
