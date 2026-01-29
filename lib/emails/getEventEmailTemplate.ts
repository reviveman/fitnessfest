/* ======================================================
   GLOBAL EVENT CONFIG
====================================================== */

const EVENT_NAME =
  process.env.EVENT_NAME || "Bengaluru Fitness Festival";

const EVENT_DATE =
  process.env.EVENT_DATE || "March 28–29, 2026";

const EVENT_VENUE =
  process.env.EVENT_VENUE ||
  "Bhoruka Tech Park Ground, Whitefield, Bengaluru, Karnataka 560066";

const EVENT_WEBSITE =
  process.env.EVENT_WEBSITE || "https://www.fitnessfest.in/";

const EVENT_EMAIL =
  process.env.EVENT_EMAIL || "info@fitnessfest.in";

const EVENT_MOBILE =
  process.env.EVENT_MOBILE || "+91 91483 19993";

/* ======================================================
   TYPES
====================================================== */

type TemplateProps = {
  name: string;
  registrationId?: string;
  tshirtSize?: string;
  category?: string;
  participationType?: string;
  teamName?: string;
  teamSize?: string;
};

/* ======================================================
   EVENT TYPE RESOLVER (SAFE & COMPLETE)
====================================================== */

function resolveEventType(event: string) {
  const e = event.toLowerCase();

  if (e.includes("5k")) return "5k";
  if (e.includes("saree")) return "saree";
  if (e.includes("strength endurance")) return "strength";
  if (e.includes("functional")) return "functional";
  if (e.includes("deadlift")) return "deadlift";
  if (e.includes("push") || e.includes("plank")) return "push";
  if (e.includes("calisthenics")) return "calisthenics";
  if (e.includes("powerlifting")) return "powerlifting";
  if (e.includes("battle of gyms") || e.includes("team")) return "team";

  return "default"; // 🔒 SAFETY NET
}

/* ======================================================
   MAIN EMAIL TEMPLATE (COMMON WRAPPER)
====================================================== */

export function getEventEmailTemplate(event: string, props: TemplateProps) {
  const firstName = props.name.split(" ")[0];
  const content = getEventSpecificContent(event, props);

  return `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Segoe UI,Tahoma,Verdana,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:14px;overflow:hidden;">

<tr>
<td>
<img src="https://res.cloudinary.com/dlkuk7rok/image/upload/v1767265809/mould-tech/br4ygaiiz8mgxpf7crvr.jpg" style="width:100%;" />
</td>
</tr>

<tr>
<td style="padding:36px;color:#1e1e1e;">
<p><strong>Dear ${firstName},</strong></p>
${content}
</td>
</tr>

<tr>
<td style="background:#f7f7f7;padding:28px;text-align:center;">
<p style="font-weight:700;color:#EA4A3E;">${EVENT_NAME}</p>
<p>${EVENT_VENUE}</p>

<p>
📧 <a href="mailto:${EVENT_EMAIL}">${EVENT_EMAIL}</a><br/>
📞 ${EVENT_MOBILE}
</p>

<div style="margin-top:14px;">
  <a href="https://www.instagram.com/fitnessfestindia">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="24" />
  </a>
  <a href="https://www.facebook.com/fitnessfestindia">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="24" />
  </a>
  <a href="https://www.linkedin.com/company/fitnessfestindia">
    <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="24" />
  </a>
</div>
</td>
</tr>

<tr>
<td style="background:#EA4A3E;color:#fff;text-align:center;padding:14px;font-size:12px;">
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
   EVENT CONTENT SWITCH
====================================================== */

function getEventSpecificContent(event: string, p: TemplateProps) {
  switch (resolveEventType(event)) {
    case "5k":
      return FIVE_K_EMAIL(p);
    case "saree":
      return SAREE_RUN_EMAIL(p);
    case "strength":
      return STRENGTH_ENDURANCE_EMAIL(p);
    case "functional":
      return FUNCTIONAL_ELIMINATIONS_EMAIL(p);
    case "deadlift":
      return DEADLIFT_HEATS_EMAIL(p);
    case "push":
      return PUSH_PLANK_EMAIL(p);
    case "calisthenics":
      return CALISTHENICS_EMAIL(p);
    case "powerlifting":
      return POWERLIFTING_EMAIL(p);
    case "team":
      return BATTLE_OF_GYMS_EMAIL(p);
    default:
      return DEFAULT_EMAIL(event, p);
  }
}

/* ======================================================
   EXACT EVENT CONTENT (UNCHANGED)
====================================================== */

const FIVE_K_EMAIL = (p: TemplateProps) => `
<p>
Thank you for registering for the
<strong>Bengaluru Fitness Festival – 5K Run</strong> 🏃‍♂️🏃‍♀️<br/>
We are excited to confirm that your registration has been successfully completed.
</p>

<hr style="margin:18px 0;" />

<p><strong>🏁 Event Details</strong></p>
<p>
<strong>Event:</strong> 5K Run – Bengaluru Fitness Festival<br/>
<strong>Date:</strong> ${EVENT_DATE}<br/>
<strong>Reporting Time:</strong> To be announced<br/>
<strong>Venue:</strong> ${EVENT_VENUE}
</p>

<hr style="margin:18px 0;" />

<p><strong>🧾 Registration Summary</strong></p>
<p>
<strong>Registration ID:</strong> ${p.registrationId || "—"}<br/>
<strong>T-Shirt Size:</strong> ${p.tshirtSize || "—"}
</p>

<p>Please keep this email safely for future reference.</p>

<hr style="margin:18px 0;" />

<p><strong>🎽 What You Will Receive</strong></p>
<ul>
  <li>Official 5K Run T-Shirt</li>
  <li>Bib Number & Timing Chip</li>
  <li>Participation Medal</li>
  <li>Refreshments</li>
  <li>E-Certificate (post-event)</li>
</ul>

<hr style="margin:18px 0;" />

<p><strong>📍 Next Steps</strong></p>
<ul>
  <li>Bib & T-shirt collection details will be shared via Email & WhatsApp closer to the event</li>
  <li>Please carry a valid photo ID on race day</li>
  <li>Reach the venue at least <strong>60 minutes before</strong> the start time</li>
</ul>

<hr style="margin:18px 0;" />

<p>
We look forward to seeing you at the starting line!<br/>
<strong>Let’s run for fitness, fun, and a healthier Bengaluru 💪</strong>
</p>

<p style="font-size:12px;color:#666;">
This is an auto-generated email. Please do not reply.
</p>
`;


const SAREE_RUN_EMAIL = (p: TemplateProps) => `
<p>🎉 <strong>Congratulations! Your registration is confirmed.</strong></p>

<p>
Thank you for registering for the
<strong>Bengaluru Fitness Festival – Saree Run</strong>.
We’re delighted to have you be part of this unique celebration of
<strong>fitness, womanhood, and tradition</strong>.
</p>

<p>
<strong>Date:</strong> ${EVENT_DATE}<br/>
<strong>Venue:</strong> ${EVENT_VENUE}<br/>

</p>

<hr style="margin:18px 0;" />

<p><strong>🎁 What You Will Receive</strong></p>
<ul>
  <li>Bib Number</li>
  <li>Finisher Medal</li>
  <li>Refreshments</li>
  <li>E-Certificate (post event)</li>
</ul>

<hr style="margin:18px 0;" />

<p><strong>⚠️ Important Instructions</strong></p>
<ul>
  <li>Saree must be worn in a comfortable and safe manner for walking or running</li>
  <li>Bib & kit collection details will be shared via Email & WhatsApp</li>
  <li>Please carry a valid photo ID on event day</li>
  <li>Arrive at least <strong>60 minutes early</strong> for smooth check-in</li>
</ul>

<hr style="margin:18px 0;" />

<p><strong>💃 Celebrate Fitness with Grace</strong></p>
<p>
This Saree Run is <strong>not about speed</strong> — it’s about participation,
confidence, and community.<br/>
Come dressed in your finest saree and be part of a powerful movement that
celebrates strength with elegance.
</p>
`;


const STRENGTH_ENDURANCE_EMAIL = (p: TemplateProps) => `
<p>🎉 Your registration is confirmed!</p>
<p>You are registered for <strong>Strength Endurance Circuit – Qualifiers</strong>.</p>

<ul>
<li>Muscular strength</li>
<li>Cardiovascular endurance</li>
<li>Functional fitness capacity</li>
<li>Mental grit & consistency</li>
</ul>

<p>Arrive at least <strong>60 minutes early</strong>.</p>
`;

const FUNCTIONAL_ELIMINATIONS_EMAIL = (p: TemplateProps) => `
<p>You are entered into <strong>Functional Fitness Challenge – Eliminations</strong>.</p>
<p>Only top performers advance to finals.</p>
`;

const DEADLIFT_HEATS_EMAIL = (p: TemplateProps) => `
<p>Registered for <strong>Deadlift Championship – Heats</strong>.</p>
<p>Follow judges’ commands strictly.</p>
`;

const PUSH_PLANK_EMAIL = (p: TemplateProps) => `
<p>Registered for <strong>Push-Up & Plank Endurance Battle – Qualifiers</strong>.</p>
<p>Strict judging standards apply.</p>
`;

const CALISTHENICS_EMAIL = (p: TemplateProps) => `
<p>Registered for <strong>Calisthenics Amateur Battles – Qualifiers</strong>.</p>
<p>Showcase your strength & control 💪</p>
`;

const POWERLIFTING_EMAIL = (p: TemplateProps) => `
<p>Registered for <strong>Powerlifting King / Queen – Heats</strong> 👑</p>
<p>Lift heavy. Lift fair.</p>
`;

const BATTLE_OF_GYMS_EMAIL = (p: TemplateProps) => `
<p>Your team is registered for <strong>Battle of Gyms – Team Round</strong>.</p>
<p>Ensure all athletes report on time.</p>
`;

const DEFAULT_EMAIL = (event: string, p: TemplateProps) => `
<p>🎉 Your registration for <strong>${event}</strong> is confirmed!</p>
<p><strong>Date:</strong> ${EVENT_DATE}<br/>
<strong>Venue:</strong> ${EVENT_VENUE}</p>
<p><strong>Registration ID:</strong> ${p.registrationId}</p>
`;
