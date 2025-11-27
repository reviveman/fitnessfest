const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

async function createJudgeUser() {
  try {
    console.log("Creating judge user...")

    const judgeEmail = "judge@fitnessfest.com"
    const judgePassword = "judge123" // change if needed

    // Check if judge already exists
    const existingJudge = await prisma.user.findUnique({
      where: { email: judgeEmail },
    })

    if (existingJudge) {
      console.log("Judge user already exists!")
      console.log("Email :", existingJudge.email)
      console.log("Role  :", existingJudge.role)

      // Update password if needed
      const hashedPassword = await bcrypt.hash(judgePassword, 10)

      await prisma.user.update({
        where: { email: judgeEmail },
        data: { password: hashedPassword, role: "judge" },
      })

      console.log(`Password updated → ${judgePassword}`)
      return
    }

    // Create new judge
    const hashedPassword = await bcrypt.hash(judgePassword, 10)

    const user = await prisma.user.create({
      data: {
        name: "Judge User",
        email: judgeEmail,
        password: hashedPassword,
        role: "judge",
      },
    })

    console.log("🎉 Judge user created successfully!")
    console.log("Email   :", judgeEmail)
    console.log("Password:", judgePassword)
    console.log("Role    :", user.role)
  } catch (error) {
    console.error("Error creating judge user:", error)
  } finally {
    await prisma.$disconnect()
  }
}

createJudgeUser()
