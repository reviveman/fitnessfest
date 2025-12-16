import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("🔔 PhonePe Webhook Received:", body);

    /**
     * Example payload fields (may vary slightly):
     * body.orderId
     * body.state → COMPLETED | FAILED | PENDING
     * body.amount
     * body.merchantOrderId
     */

    const {
      merchantOrderId,
      orderId,
      state,
      amount,
    } = body;

    if (!merchantOrderId || !state) {
      console.error("❌ Invalid webhook payload");
      return NextResponse.json({ success: false }, { status: 400 });
    }

    /**
     * 🔐 IMPORTANT:
     * Check DB first to avoid duplicate processing
     */

    // const existing = await db.payment.findUnique({ where: { merchantOrderId }});
    // if (existing?.status === "SUCCESS") return NextResponse.json({ ok: true });

    if (state === "COMPLETED") {
      console.log("✅ Payment SUCCESS:", merchantOrderId);

      // ✅ Save success to DB
      // await db.payment.update({ ... })

      // ✅ Trigger email / ticket / confirmation

    } else if (state === "FAILED") {
      console.log("❌ Payment FAILED:", merchantOrderId);

      // ❌ Save failed state
    } else {
      console.log("⏳ Payment PENDING:", merchantOrderId);
    }

    /**
     * PhonePe expects 200 OK
     */
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Webhook Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
