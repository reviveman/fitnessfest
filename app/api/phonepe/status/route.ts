import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // PhonePe sends data as form-data or JSON
    let body: any;

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    }

    console.log("📥 PhonePe status callback:", body);

    const merchantTransactionId =
      body.merchantTransactionId ||
      body.transactionId ||
      body.merchantTransactionReference;

    if (!merchantTransactionId) {
      console.error("❌ Missing merchantTransactionId");
      return NextResponse.json({ success: false });
    }

    // 🔐 STEP 1: Verify payment with PhonePe
    const verifyResponse = await fetch(
      `${process.env.PHONEPE_PG_BASE_URL}/pg/checkout/v2/status/${process.env.PHONEPE_MERCHANT_ID}/${merchantTransactionId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PHONEPE_ACCESS_TOKEN!}`,
          "X-CLIENT-VERSION": process.env.PHONEPE_CLIENT_VERSION!,
          Accept: "application/json",
        },
      }
    );

    const verifyData = await verifyResponse.json();

    console.log("✅ PhonePe verified status:", verifyData);

    // 🧠 STEP 2: Decide result
    const paymentState = verifyData?.data?.state;

    if (paymentState === "COMPLETED") {
      // ✅ Payment success
      // TODO: Save to DB
      // TODO: Send confirmation mail
      // TODO: Generate ticket

      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=success`,
        { status: 303 }
      );
    }

    if (paymentState === "FAILED") {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=failed`,
        { status: 303 }
      );
    }

    // ⏳ Pending / unknown
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=pending`,
      { status: 303 }
    );
  } catch (err) {
    console.error("❌ PhonePe status error:", err);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=error`,
      { status: 303 }
    );
  }
}
