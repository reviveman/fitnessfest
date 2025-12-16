// import { NextResponse } from "next/server";
// import { getPhonePeAccessToken } from "@/lib/phonepeAuth";

// export async function POST(req: Request) {
//   const { amount } = await req.json();

//   const token = await getPhonePeAccessToken();
//   const merchantOrderId = `ORD_${Date.now()}`;

//   const payload = {
//     merchantOrderId,
//     amount: amount * 100, // paise
//     paymentFlow: {
//       type: "PG_CHECKOUT",
//       message: "Ticket payment",
//       merchantUrls: {
//         redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status`,
//       },
//     },
//   };

// const response = await fetch(process.env.PHONEPE_CHECKOUT_URL!, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `O-Bearer ${token}`, // 🔴 MUST be O-Bearer
//   },
//   body: JSON.stringify(payload),
// });


//   const data = await response.json();
//   console.log("PhonePe create payment response:", data);

//   return NextResponse.json(data);
// }


import { NextResponse } from "next/server";
import { getPhonePeAccessToken } from "@/lib/phonepeAuth";

export async function POST(req: Request) {
  const body = await req.json();
  const { amount, mobileNumber } = body;

  const token = await getPhonePeAccessToken();

  const payload = {
    merchantOrderId: "ORD_" + Date.now(),
    amount: amount * 100, // paise
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
      Authorization: `O-Bearer ${token}`, // ✅ correct
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  console.log("PhonePe create payment response:", data);

  // ✅ ALWAYS RETURN redirectUrl at top-level
  return NextResponse.json({
    redirectUrl: data.redirectUrl,
    orderId: data.orderId,
    state: data.state,
  });
}
