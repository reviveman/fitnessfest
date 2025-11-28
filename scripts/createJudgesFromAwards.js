// scripts/createJudgesFromAwards.js

require("ts-node/register"); // Allows requiring .ts files
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

// Load awards.ts (your awardCategories)
const { awardCategories } = require("../data/awards");

const prisma = new PrismaClient();

async function createJudges() {
  try {
    console.log("🚀 Creating judges for all award categories...\n");

    for (const category of awardCategories) {
      const slug = category.slug;
      const title = category.title;

      // Auto-generate judge email
      const email = `judge.${slug.replace(/-/g, "")}@fitnessfest.com`;
      const password = "judge123"; // default judge password

      const hashedPassword = await bcrypt.hash(password, 10);

      // Check if judge already exists
      const existingJudge = await prisma.user.findUnique({
        where: { email },
      });

      if (existingJudge) {
        console.log(`⚠️ Judge already exists for category: ${slug}`);
        await prisma.user.update({
          where: { email },
          data: {
            name: `Judge – ${title}`,
            role: "judge",
            password: hashedPassword,
            assignedCategories: [slug],
          },
        });
        console.log(`   ✔ Updated → ${email}`);
      } else {
        console.log(`➕ Creating new judge for category: ${slug}`);

        await prisma.user.create({
          data: {
            name: `Judge – ${title}`,
            email,
            password: hashedPassword,
            role: "judge",
            assignedCategories: [slug],
          },
        });

        console.log(`   ✔ Created → ${email}`);
      }

      console.log(`   🎯 Assigned Category → ${slug}\n`);
    }

    console.log("🎉 ALL JUDGES CREATED SUCCESSFULLY!");
    console.log("Default password for all judges: judge123");
  } catch (error) {
    console.error("❌ Error creating judges:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createJudges();
