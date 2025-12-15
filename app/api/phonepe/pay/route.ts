// import crypto from "crypto"
// import { NextResponse } from "next/server"

// export const dynamic = "force-dynamic"

// export async function POST(req: Request) {
//   try {
//     const { type, referenceId, amount, meta } = await req.json()

//     if (!amount || amount <= 0) {
//       return NextResponse.json(
//         { success: false, message: "Invalid amount" },
//         { status: 400 }
//       )
//     }

//     const merchantId = process.env.PHONEPE_MERCHANT_ID!
//     const saltKey = process.env.PHONEPE_SALT_KEY!
//     const saltIndex = process.env.PHONEPE_SALT_INDEX!

//     const merchantTransactionId = "TXN_" + Date.now() + Math.random().toString(36).substr(2, 9)

//     const payload = {
//       merchantId,
//       merchantTransactionId,
//       merchantUserId: "USER_" + Date.now(),
//       amount: amount * 100, // Convert to paise
//       redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/status`,
//       redirectMode: "REDIRECT",
//       callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/callback`,
//       paymentInstrument: { type: "PAY_PAGE" },
//       metadata: {
//         type: type || "EVENT",
//         referenceId: referenceId || "",
//         ...meta,
//       },
//     }

//     const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64")

//     // Generate checksum
//     const stringToHash = base64Payload + "/pg/v1/pay" + saltKey
//     const sha256Hash = crypto.createHash("sha256").update(stringToHash).digest("hex")
//     const checksum = sha256Hash + "###" + saltIndex

//     const response = await fetch(
//       "https://api.phonepe.com/apis/hermes/pg/v1/pay",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-VERIFY": checksum,
//         },
//         body: JSON.stringify({ request: base64Payload }),
//       }
//     )

//     const result = await response.json()

//     if (result.success && result.data?.instrumentResponse?.redirectInfo?.url) {
//       return NextResponse.json({
//         success: true,
//         redirectUrl: result.data.instrumentResponse.redirectInfo.url,
//         transactionId: merchantTransactionId,
//       })
//     } else {
//       console.error("PhonePe API Error:", result)
//       return NextResponse.json(
//         { 
//           success: false, 
//           message: result.message || "Payment initiation failed",
//           details: result 
//         },
//         { status: 500 }
//       )
//     }
//   } catch (err: any) {
//     console.error("PhonePe Error:", err)
//     return NextResponse.json(
//       { 
//         success: false, 
//         message: "Payment initiation failed",
//         error: err.message 
//       },
//       { status: 500 }
//     )
//   }
// }


import crypto from "crypto"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const { type, referenceId, amount, meta } = await req.json()
    
    console.log("📱 PhonePe Payment Request:", { 
      type, 
      referenceId, 
      amount,
      meta: meta || "No meta data"
    })

    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      console.error("❌ Invalid amount:", amount)
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid amount. Please provide a valid positive number.",
          amountProvided: amount 
        },
        { status: 400 }
      )
    }

    // Get environment variables
    const merchantId = process.env.PHONEPE_MERCHANT_ID || "PGTESTPAYUAT"
    const saltKey = process.env.PHONEPE_SALT_KEY || "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"
    const saltIndex = process.env.PHONEPE_SALT_INDEX || "1"
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    console.log("🔧 Environment:", { 
      merchantId: merchantId ? "Set" : "Not set",
      saltKey: saltKey ? "Set" : "Not set",
      saltIndex,
      baseUrl 
    })

    // Generate unique transaction ID
    const merchantTransactionId = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`
    
    // Convert amount to paise (PhonePe requirement)
    const amountInPaise = Math.round(amount * 100)
    
    // Create payload according to PhonePe documentation
    const payload = {
      merchantId: merchantId,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: `USER${Date.now()}`,
      amount: amountInPaise,
      redirectUrl: `${baseUrl}/payment/status?transactionId=${merchantTransactionId}&amount=${amount}&type=${type}&referenceId=${referenceId}`,
      redirectMode: "POST",
      callbackUrl: `${baseUrl}/api/phonepe/callback`,
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE"
      },
      metadata: meta || {}
    }

    console.log("📦 PhonePe Payload:", JSON.stringify(payload, null, 2))

    // Convert to base64
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64")
    console.log("🔐 Base64 Payload:", base64Payload)

    // Generate checksum (SHA256)
    const stringToHash = base64Payload + "/pg/v1/pay" + saltKey
    const sha256Hash = crypto.createHash("sha256").update(stringToHash).digest("hex")
    const checksum = sha256Hash + "###" + saltIndex
    
    console.log("🔑 Checksum:", checksum)

    // PhonePe sandbox API URL
    const phonePeUrl = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
    console.log("🌐 PhonePe API URL:", phonePeUrl)

    // Make API call to PhonePe
    const response = await fetch(phonePeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "accept": "application/json",
      },
      body: JSON.stringify({
        request: base64Payload
      }),
    })

    const responseText = await response.text()
    console.log("📨 PhonePe Raw Response:", responseText)
    
    let result
    try {
      result = JSON.parse(responseText)
      console.log("📊 PhonePe Parsed Response:", JSON.stringify(result, null, 2))
    } catch (parseError) {
      console.error("❌ Failed to parse PhonePe response:", parseError, "Raw:", responseText)
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid JSON response from PhonePe",
          rawResponse: responseText.substring(0, 500) // First 500 chars
        },
        { status: 500 }
      )
    }

    // Check for successful response
    if (result.success === true && result.data?.instrumentResponse?.redirectInfo?.url) {
      const redirectUrl = result.data.instrumentResponse.redirectInfo.url
      console.log("✅ Payment initiated successfully!")
      console.log("🔗 Redirect URL:", redirectUrl)
      
      return NextResponse.json({
        success: true,
        redirectUrl: redirectUrl,
        transactionId: merchantTransactionId,
        message: "Payment initiated successfully"
      })
    } else {
      console.error("❌ PhonePe API Error:", result)
      
      // Try to extract error message
      let errorMessage = "Payment initiation failed"
      if (result.message) errorMessage = result.message
      if (result.data?.message) errorMessage = result.data.message
      
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage,
          code: result.code || "UNKNOWN_ERROR",
          details: result.data || result
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error("🔥 Unhandled Payment Error:", error)
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error while processing payment",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}