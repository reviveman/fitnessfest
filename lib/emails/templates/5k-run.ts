export function fiveKRunEmail({
  name,
  registrationId,
  tshirtSize,
}: any) {
  return `
Dear ${name},

Thank you for registering for the Bengaluru Fitness Festival – 5K Run! 🏃‍♂️🏃‍♀️  
Your registration has been successfully completed.

🏁 Event Details  
Event: 5K Run – Bengaluru Fitness Festival  
Date: 28–29 March 2026  
Venue: KTPO, Whitefield, Bengaluru

🧾 Registration Summary  
• Registration ID: ${registrationId}  
• Category: 5K Run  
• T-Shirt Size: ${tshirtSize || "NA"}

🎽 What You Will Receive  
✔ Official 5K Run T-Shirt  
✔ Bib Number & Timing Chip  
✔ Participation Medal  
✔ Refreshments  
✔ E-Certificate (post-event)

📍 Next Steps  
• Bib & T-shirt collection details will be shared via Email & WhatsApp  
• Carry a valid photo ID  
• Reach venue 60 minutes early  

Warm regards,  
Team Bengaluru Fitness Festival  
Organised by Maxx Business Media Pvt. Ltd.

This is an auto-generated email. Please do not reply.
`;
}
