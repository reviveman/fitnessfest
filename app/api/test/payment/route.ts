import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Payment API is working",
    env: {
      merchantId: process.env.PHONEPE_MERCHANT_ID ? "Set" : "Not Set",
      saltKey: process.env.PHONEPE_SALT_KEY ? "Set" : "Not Set",
      saltIndex: process.env.PHONEPE_SALT_INDEX ? "Set" : "Not Set",
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    },
    timestamp: new Date().toISOString(),
  });
}