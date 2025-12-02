import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { v2 as cloudinary } from "cloudinary"
import { sendNominationEmails } from "@/lib/mail/sendNominationEmails"

// ------------------ CLOUDINARY CONFIG ------------------ //
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

// ------------------ ZOD VALIDATION ------------------ //
const nominationSchema = z.object({
  awardTitle: z.string().min(1),
  awardId: z.string().min(1),
  fullName: z.string().min(1),
  dateOfBirth: z.string().min(1),
  gender: z.string().min(1),
  contactNumber: z.string().min(1),
  email: z.string().email(),
  cityArea: z.string().min(1),
  organization: z.string().optional(),
  designation: z.string().min(1),
  agreeToTerms: z.boolean().refine((v) => v === true, {
    message: "You must accept terms",
  }),
})

// Convert File to Buffer
async function convertFileToBuffer(file: File) {
  const arrayBuffer = await file.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

// Upload file to Cloudinary
async function uploadToCloudinary(file: File, folder: string) {
  const buffer = await convertFileToBuffer(file)

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
      },
      (err, result) => {
        if (err) reject(err)
        else resolve(result)
      }
    )
    uploadStream.end(buffer)
  })
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const data: Record<string, any> = {}
    const files: Record<string, File[]> = {}

    // Extract form fields
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        if (!files[key]) files[key] = []
        files[key].push(value)
      } else {
        data[key] = key === "agreeToTerms" ? value === "true" : value
      }
    }

    // Validate main fields
    const validated = nominationSchema.parse(data)

    // Unique Cloudinary folder
    const folder = `nominations/${Date.now()}-${validated.fullName}`

    const uploadedFiles: Record<string, string[]> = {}

    // Upload each file
    for (const [fieldName, fileList] of Object.entries(files)) {
      uploadedFiles[fieldName] = []

      for (const file of fileList) {
        const uploadResult: any = await uploadToCloudinary(file, folder)
        uploadedFiles[fieldName].push(uploadResult.secure_url)
      }
    }

    // Save to DB
    const nomination = await prisma.nomination.create({
      data: {
        awardTitle: validated.awardTitle,
        awardId: validated.awardId,
        fullName: validated.fullName,
        dateOfBirth: new Date(validated.dateOfBirth),
        gender: validated.gender,
        contactNumber: validated.contactNumber,
        email: validated.email,
        cityArea: validated.cityArea,
        organization: data.organization || "",
        designation: validated.designation,
        professionalData: data,
        socialMediaData: {
          instagramHandle: data.instagramHandle || null,
          facebookPage: data.facebookPage || null,
          youtubeWebsite: data.youtubeWebsite || null,
          mediaMentions: data.mediaMentions || null,
        },
        uploadedFiles,
        status: "PENDING",
      },
    })

    // -------------------------
    //  📩 SEND EMAILS (Nominee + Admin)
    // -------------------------
    await sendNominationEmails(
      {
        ...validated,
        ...data,
        uploadedFiles,
      },
      files
    )

    return NextResponse.json({
      success: true,
      message: "Nomination submitted successfully",
      nominationId: nomination.id,
    })

  } catch (error) {
    console.error(error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation error", errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 }
    )
  }
}
