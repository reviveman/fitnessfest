export async function getPhonePeAccessToken() {
  const response = await fetch(process.env.PHONEPE_OAUTH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.PHONEPE_CLIENT_ID!,
      client_secret: process.env.PHONEPE_CLIENT_SECRET!,
      client_version: process.env.PHONEPE_CLIENT_VERSION!, // 🔴 REQUIRED
      grant_type: "client_credentials",
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("PhonePe OAuth Error:", data);
    throw new Error("OAuth failed");
  }

  return data.access_token;
}
