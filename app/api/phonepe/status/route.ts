import { NextResponse } from "next/server";

export async function POST() {
  // later you can verify payment here
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?status=success`,
    302
  );
}
