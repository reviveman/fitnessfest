// Run this in your browser console to test the payment API
async function testPayment() {
  try {
    console.log("🧪 Testing Payment API...");
    
    const response = await fetch('/api/phonepe/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: "TEST",
        referenceId: "TEST_1DAY_PASS",
        amount: 699,
        meta: {
          test: true,
          description: "1-Day Pass Test"
        }
      })
    });
    
    const result = await response.json();
    console.log("📊 API Response:", result);
    
    if (result.success && result.redirectUrl) {
      console.log("✅ SUCCESS! Redirect URL:", result.redirectUrl);
      // Uncomment to auto-redirect:
      // window.location.href = result.redirectUrl;
    } else {
      console.error("❌ FAILED:", result.message);
    }
  } catch (error) {
    console.error("🔥 ERROR:", error);
  }
}

// Run the test
testPayment();