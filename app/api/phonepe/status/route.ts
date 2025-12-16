import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let body: any = {};
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    }

    console.log("📥 PhonePe Redirect Callback:", body);

    /**
     * IMPORTANT:
     * - Do NOT verify payment here
     * - Just redirect user
     * - Webhook will handle actual confirmation
     */

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=processing`,
      { status: 303 }
    );
  } catch (error) {
    console.error("❌ PhonePe status error:", error);

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=error`,
      { status: 303 }
    );
  }
}
