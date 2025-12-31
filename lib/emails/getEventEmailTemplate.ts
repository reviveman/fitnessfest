type EmailPayload = {
  name: string;
  registrationId: string;
  tshirtSize?: string;
  category?: string;
};

export function getEventEmailTemplate(
  eventTitle: string,
  data: EmailPayload
) {
  const title = eventTitle.toLowerCase();

  if (title.includes("5k")) return fiveKRunEmail(data);
  if (title.includes("saree")) return sareeRunEmail(data);
  if (title.includes("strength endurance")) return strengthEnduranceEmail(data);
  if (title.includes("functional fitness")) return functionalFitnessEmail(data);
  if (title.includes("deadlift")) return deadliftEmail(data);
  if (title.includes("push-up") || title.includes("plank"))
    return pushupPlankEmail(data);
  if (title.includes("calisthenics")) return calisthenicsEmail(data);
  if (title.includes("powerlifting")) return powerliftingEmail(data);
  if (title.includes("battle of gyms")) return battleOfGymsEmail(data);

  return genericEventEmail(data);
}

/* ================= EMAIL TEMPLATES ================= */

function fiveKRunEmail({ name, registrationId, tshirtSize }: EmailPayload) {
  return `
Dear ${name},

Thank you for registering for the Bengaluru Fitness Festival – 5K Run! 🏃‍♂️🏃‍♀️

🧾 Registration ID: ${registrationId}
🎽 T-Shirt Size: ${tshirtSize || "NA"}

Date: 28–29 March 2026
Venue: KTPO, Whitefield, Bengaluru

We look forward to seeing you at the starting line!

Team Bengaluru Fitness Festival
This is an auto-generated email.
`;
}

function sareeRunEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

🎉 Your registration for the Saree Run is confirmed!

Registration ID: ${registrationId}

Celebrate fitness with grace and confidence 🌸

Team Bengaluru Fitness Festival
`;
}

function strengthEnduranceEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

Your registration for Strength Endurance Circuit – Qualifiers is confirmed 💪

Registration ID: ${registrationId}

Prepare to test your strength and stamina.

Team Bengaluru Fitness Festival
`;
}

function functionalFitnessEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

You are confirmed for Functional Fitness Challenge – Eliminations 🔥

Registration ID: ${registrationId}

Only the strongest advance.

Team Bengaluru Fitness Festival
`;
}

function deadliftEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

Deadlift Championship – Heats registration confirmed 🏋️

Registration ID: ${registrationId}

Lift strong. Lift fair.

Team Bengaluru Fitness Festival
`;
}

function pushupPlankEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

Push-Up & Plank Endurance Battle – Qualifiers confirmed 💥

Registration ID: ${registrationId}

Push beyond limits.

Team Bengaluru Fitness Festival
`;
}

function calisthenicsEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

Calisthenics Amateur Battles – Qualifiers confirmed 🤸

Registration ID: ${registrationId}

Showcase strength & control.

Team Bengaluru Fitness Festival
`;
}

function powerliftingEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

Powerlifting King / Queen – Heats confirmed 👑

Registration ID: ${registrationId}

Lift heavy. Lift proud.

Team Bengaluru Fitness Festival
`;
}

function battleOfGymsEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

Your team is confirmed for Battle of Gyms – Team Round 🏆

Registration ID: ${registrationId}

Represent your gym with pride.

Team Bengaluru Fitness Festival
`;
}

function genericEventEmail({ name, registrationId }: EmailPayload) {
  return `
Dear ${name},

Your registration is confirmed.

Registration ID: ${registrationId}

Team Bengaluru Fitness Festival
`;
}
