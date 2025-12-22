// import { NextResponse } from "next/server";
// import { getPhonePeAccessToken } from "@/lib/phonepeAuth";

// export async function POST(req: Request) {
//   const { amount, merchantOrderId } = await req.json();

//   if (!merchantOrderId) {
//     return NextResponse.json({ error: "merchantOrderId missing" }, { status: 400 });
//   }

//   const token = await getPhonePeAccessToken();

//   const payload = {
//     merchantOrderId,
//     amount: amount * 100,
//     paymentFlow: {
//       type: "PG_CHECKOUT",
//       message: "Fitness Fest Registration",
//       merchantUrls: {
//         redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status`,
//       },
//     },
//   };

//   const response = await fetch(process.env.PHONEPE_CHECKOUT_URL!, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `O-Bearer ${token}`,
//     },
//     body: JSON.stringify(payload),
//   });

//   const data = await response.json();

//   return NextResponse.json({
//     redirectUrl: data.redirectUrl,
//   });
// }


import { NextResponse } from "next/server";
import { getPhonePeAccessToken } from "@/lib/phonepeAuth";

export async function POST(req: Request) {
  try {
    const { amount, merchantOrderId } = await req.json();

    if (!merchantOrderId) {
      return NextResponse.json(
        { error: "merchantOrderId missing" },
        { status: 400 }
      );
    }

    const token = await getPhonePeAccessToken();

    const payload = {
      merchantOrderId,
      amount: amount * 100, // PhonePe expects paise
      paymentFlow: {
        type: "PG_CHECKOUT",
        message: "Fitness Fest Registration",
        merchantUrls: {
          // 🔥 CRITICAL FIX — PASS merchantOrderId IN URL
          redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status?merchantOrderId=${merchantOrderId}`,
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

    if (!data?.redirectUrl) {
      console.error("❌ PhonePe error:", data);
      return NextResponse.json(
        { error: "Failed to create PhonePe payment" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      redirectUrl: data.redirectUrl,
    });
  } catch (err) {
    console.error("❌ PhonePe Pay Error:", err);
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}
