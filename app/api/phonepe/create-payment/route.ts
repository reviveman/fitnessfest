import { NextResponse } from "next/server";
import crypto from "crypto";

// ✅ Ensure store exists
if (!global.paymentStore) {
  global.paymentStore = new Map<string, any>();
}

const paymentStore = global.paymentStore;

export async function POST(req: Request) {
  const body = await req.json();

  const {
    amount,
    mobileNumber,
    meta, // registration + event data
  } = body;

  const merchantTransactionId = `TXN_${Date.now()}`;

  // ✅ Save meta temporarily
  paymentStore.set(merchantTransactionId, meta);

  const payload = {
    merchantId: process.env.PHONEPE_MERCHANT_ID!,
    merchantTransactionId,
    merchantUserId: merchantTransactionId,
    amount: amount * 100, // paise
    redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status`,
    redirectMode: "POST",
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status`,
    mobileNumber,
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const base64Payload = Buffer
    .from(JSON.stringify(payload))
    .toString("base64");

  const checksum =
    crypto
      .createHash("sha256")
      .update(
        base64Payload +
          "/pg/v1/pay" +
          process.env.PHONEPE_SALT_KEY
      )
      .digest("hex") +
    "###" +
    process.env.PHONEPE_SALT_INDEX;

  const response = await fetch(
    `${process.env.PHONEPE_BASE_URL}/pg/v1/pay`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      body: JSON.stringify({ request: base64Payload }),
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
