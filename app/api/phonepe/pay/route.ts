import { NextResponse } from "next/server";
import { getPhonePeAccessToken } from "@/lib/phonepeAuth";

export async function POST(req: Request) {
  const { amount, merchantOrderId } = await req.json();

  if (!merchantOrderId) {
    return NextResponse.json({ error: "merchantOrderId missing" }, { status: 400 });
  }

  const token = await getPhonePeAccessToken();

  const payload = {
    merchantOrderId,
    amount: amount * 100,
    paymentFlow: {
      type: "PG_CHECKOUT",
      message: "Fitness Fest Registration",
      merchantUrls: {
        redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status`,
      },
    },
  };

  const response = await fetch(process.env.PHONEPE_CHECKOUT_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `O-Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  return NextResponse.json({
    redirectUrl: data.redirectUrl,
  });
}
