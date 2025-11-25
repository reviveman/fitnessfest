"use client"

import dynamic from "next/dynamic";

const Schedule = dynamic(() => import("@/components/schedule"), {
  loading: () => <div className="text-center py-10">Loading schedule...</div>,
  ssr: false,
});

const Pricing = dynamic(() => import("@/components/pricing"), {
  loading: () => <div className="text-center py-10">Loading pricing...</div>,
  ssr: false,
});

const WhyAttend = dynamic(() => import("@/components/why-attend"), {
  loading: () => <div className="text-center py-10">Loading...</div>,
  ssr: false,
});

export default function HomeClient() {
  return (
    <>
      <WhyAttend />
      <Schedule />
      <Pricing />
    </>
  );
}
