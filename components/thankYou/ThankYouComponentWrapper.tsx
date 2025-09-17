"use client";

import ThankYouPage from "@/components/thankYou/ThankYouPage";
import { useSearchParams } from "next/navigation";

const ThankYouComponentWrapper = () => {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") ?? "visitor").toLowerCase();

  return <ThankYouPage type={type} />;
};

export default ThankYouComponentWrapper;
