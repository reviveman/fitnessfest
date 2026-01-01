const EVENT_NAME =
  process.env.EVENT_NAME || "Bengaluru Fitness Festival";

const EVENT_DATE =
  process.env.EVENT_DATE || "March 28–29, 2026";

const EVENT_VENUE =
  process.env.EVENT_VENUE ||
  "KTPO, Whitefield, Bengaluru, Karnataka 560066";

const EVENT_WEBSITE =
  process.env.EVENT_WEBSITE || "https://www.fitnessfest.in/";

const EVENT_EMAIL =
  process.env.EVENT_EMAIL || "info@fitnessfest.in";

const EVENT_MOBILE =
  process.env.EVENT_MOBILE || "+91 91483 19993";

type TemplateProps = {
  name: string;
  registrationId?: string;
  tshirtSize?: string;
};

export function getEventEmailTemplate(
  event: string,
  props: TemplateProps
) {
  const firstName = props.name.split(" ")[0];

  const content = getEventSpecificContent(event, props);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${event} Confirmation</title>
</head>

<body style="margin:0;padding:0;background:#f5f5f5;font-family:Segoe UI,Tahoma,Verdana,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.1);">

<!-- Banner -->
<tr>
<td>
<img
  src="https://res.cloudinary.com/dlkuk7rok/image/upload/v1758083354/fitness_banner_gax5tv.jpg"
  alt="Bengaluru Fitness Festival"
  style="width:100%;display:block;"
/>
</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:40px 32px;color:#1e1e1e;">
<p style="font-size:16px;">
<strong>Dear ${firstName},</strong>
</p>

${content}

<div style="margin-top:30px;padding:18px;background:#fff6e0;border-left:5px solid #fdb714;border-radius:8px;">
Visit our
<a href="${EVENT_WEBSITE}" style="font-weight:600;color:#00214d;text-decoration:none;">
official website
</a>
for schedules, updates & announcements.
</div>
</td>
</tr>

<!-- Footer -->
<tr>
<td style="background:#f7f7f7;padding:28px;text-align:center;">
<p style="font-weight:700;color:#EA4A3E;">${EVENT_NAME}</p>

<p>
<a href="${EVENT_WEBSITE}" style="color:#fdb714;text-decoration:none;">
${EVENT_WEBSITE}
</a>
</p>

<p style="font-size:14px;color:#666;">
Support:
<br />
<a href="mailto:${EVENT_EMAIL}" style="color:#EA4A3E;text-decoration:none;">
${EVENT_EMAIL}
</a>
<br />
<a href="tel:+919148319993" style="color:#EA4A3E;text-decoration:none;">
${EVENT_MOBILE}
</a>
</p>
</td>
</tr>

<tr>
<td style="background:#EA4A3E;color:#fff;padding:18px;text-align:center;font-size:12px;">
© 2026 ${EVENT_NAME}. All rights reserved.
</td>
</tr>

</table>

</td>
</tr>
</table>
</body>
</html>
`;
}

/* ======================================================
   EVENT-WISE CONTENT BLOCKS
====================================================== */

function getEventSpecificContent(event: string, props: TemplateProps) {
  if (event.toLowerCase().includes("5k")) {
    return `
<p>
Thank you for registering for the
<strong>Bengaluru Fitness Festival – 5K Run</strong> 🏃‍♂️🏃‍♀️  
Your registration has been successfully completed.
</p>

<h3>🏁 Event Details</h3>
<p>
<strong>Date:</strong> ${EVENT_DATE}<br/>
<strong>Venue:</strong> ${EVENT_VENUE}
</p>

<h3>🧾 Registration Summary</h3>
<p>
<strong>Registration ID:</strong> ${props.registrationId}<br/>
<strong>T-Shirt Size:</strong> ${props.tshirtSize || "—"}
</p>

<h3>🎽 What You Will Receive</h3>
<ul>
<li>Official 5K Run T-Shirt</li>
<li>Bib Number & Timing Chip</li>
<li>Participation Medal</li>
<li>Refreshments</li>
<li>E-Certificate (post-event)</li>
</ul>

<p>
Please reach the venue at least
<strong>60 minutes before</strong> the start time.
</p>
`;
  }

  if (event.toLowerCase().includes("push")) {
    return `
<p>
🎉 Your registration for <strong>${event}</strong> is confirmed!
</p>

<h3>💪 Event Details</h3>
<p>
<strong>Date:</strong> ${EVENT_DATE}<br/>
<strong>Venue:</strong> ${EVENT_VENUE}
</p>

<h3>🧾 Registration ID</h3>
<p>${props.registrationId}</p>

<h3>🔥 What to Expect</h3>
<ul>
<li>Strict judging standards</li>
<li>Endurance & strength testing</li>
<li>Bib / Athlete ID</li>
<li>Refreshments</li>
<li>E-Certificate</li>
</ul>

<p>
Arrive at least <strong>60 minutes early</strong> and carry a valid photo ID.
</p>
`;
  }

  /* DEFAULT */
  return `
<p>
🎉 Your registration for <strong>${event}</strong> is confirmed!
</p>

<p>
<strong>Date:</strong> ${EVENT_DATE}<br/>
<strong>Venue:</strong> ${EVENT_VENUE}
</p>

<p>
<strong>Registration ID:</strong> ${props.registrationId}
</p>

<p>
We look forward to seeing you perform your best 💪🔥
</p>
`;
}
