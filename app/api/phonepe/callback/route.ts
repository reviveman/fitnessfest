import crypto from "crypto"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const receivedChecksum = req.headers.get("x-verify") || ""

    const saltKey = process.env.PHONEPE_SALT_KEY!
    
    // Verify checksum
    const expectedChecksum = crypto
      .createHash("sha256")
      .update(body + saltKey)
      .digest("hex") + "###" + process.env.PHONEPE_SALT_INDEX

    if (receivedChecksum !== expectedChecksum) {
      console.error("Checksum verification failed")
      return NextResponse.json({ success: false }, { status: 401 })
    }

    const data = JSON.parse(body)
    
    // Log payment data
    console.log("PhonePe Callback Received:", {
      transactionId: data.data?.merchantTransactionId,
      amount: data.data?.amount,
      status: data.data?.state,
      metadata: data.data?.metadata,
      timestamp: new Date().toISOString()
    })

    // TODO: Save to database
    // Example: await savePaymentToDB(data.data)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Callback error:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}