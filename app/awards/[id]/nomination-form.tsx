"use client"

import React, { useMemo } from "react"
import { useState } from "react"
import { Send, User, Building, Upload, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useFormik } from "formik"
import * as Yup from "yup"

interface NominationFormProps {
  awardTitle: string
  awardId: string
}

interface FormField {
  id: string
  label: string
  type: "text" | "email" | "tel" | "date" | "select" | "textarea" | "file" | "radio"
  required: boolean
  placeholder?: string
  options?: string[]
  accept?: string
  multiple?: boolean
}

interface CategoryFields {
  [key: string]: FormField[]
}

/* ---------- Keep your field definitions (same as before) ---------- */
const commonFields: FormField[] = [
  { id: "fullName", label: "Full Name", type: "text", required: true },
  { id: "dateOfBirth", label: "Date of Birth", type: "date", required: true },
  {
    id: "gender",
    label: "Gender",
    type: "select",
    required: true,
    options: ["Male", "Female", "Other", "Prefer not to say"],
  },
  { id: "contactNumber", label: "Contact Number", type: "tel", required: true },
  { id: "email", label: "Email Address", type: "email", required: true },
  { id: "cityArea", label: "City & Area", type: "text", required: true, placeholder: "e.g., Koramangala, Bengaluru" },
  { id: "organization", label: "Organization/Studio (if applicable)", type: "text", required: false },
  { id: "designation", label: "Designation", type: "text", required: true },
  { id: "profilePhoto", label: "Upload Profile Photo (Headshot)", type: "file", required: true, accept: "image/*" },
]

const categorySpecificFields: CategoryFields = {
  "fitness-trainer-of-the-year": [
    { id: "yearsExperience", label: "Years of Experience", type: "text", required: true },
    {
      id: "certificationsList",
      label: "List of Certifications",
      type: "textarea",
      required: true,
      placeholder: "List all your fitness certifications...",
    },
    {
      id: "certificationsUpload",
      label: "Upload Certifications",
      type: "file",
      required: true,
      accept: ".pdf,.jpg,.jpeg,.png",
      multiple: true,
    },
    {
      id: "transformationStories",
      label: "Describe your key transformation stories",
      type: "textarea",
      required: true,
      placeholder: "Share detailed stories of client transformations...",
    },
    {
      id: "beforeAfterResults",
      label: "Upload before/after results",
      type: "file",
      required: true,
      accept: "image/*",
      multiple: true,
    },
    {
      id: "communityInitiatives",
      label: "Community initiatives",
      type: "textarea",
      required: true,
      placeholder: "Describe your community involvement and initiatives...",
    },
    {
      id: "clientTestimonials",
      label: "Client Testimonials",
      type: "textarea",
      required: true,
      placeholder: "Share client testimonials and feedback...",
    },
  ],
  "nutritionist-dietitian-of-the-year": [
    {
      id: "educationalQualifications",
      label: "Educational Qualifications & Certifications",
      type: "textarea",
      required: true,
      placeholder: "List your educational background and certifications...",
    },
    { id: "yearsPractice", label: "Years of Practice", type: "text", required: true },
    {
      id: "nutritionPhilosophy",
      label: "Describe nutrition philosophy and methodology",
      type: "textarea",
      required: true,
      placeholder: "Explain your approach to nutrition and dietary counseling...",
    },
    {
      id: "mealPlansUpload",
      label: "Upload sample meal plans / case studies",
      type: "file",
      required: true,
      accept: ".pdf,.doc,.docx",
      multiple: true,
    },
    {
      id: "clientTestimonials",
      label: "Client Testimonials",
      type: "textarea",
      required: true,
      placeholder: "Share client success stories and testimonials...",
    },
    {
      id: "publicOutreach",
      label: "Public awareness/outreach contributions",
      type: "textarea",
      required: true,
      placeholder: "Describe your public education and outreach activities...",
    },
  ],
  "yoga-coach-of-the-year": [
    {
      id: "yogaLineage",
      label: "Yoga Lineage/Style(s)",
      type: "textarea",
      required: true,
      placeholder: "Describe your yoga lineage and styles you teach...",
    },
    { id: "yearsTeaching", label: "Years of Teaching", type: "text", required: true },
    {
      id: "yogaCertifications",
      label: "Yoga Certifications",
      type: "textarea",
      required: true,
      placeholder: "List all your yoga certifications and training...",
    },
    {
      id: "teachingLocations",
      label: "Teaching Locations (Studio/Online/Events)",
      type: "textarea",
      required: true,
      placeholder: "Describe where and how you teach yoga...",
    },
    {
      id: "classPhotos",
      label: "Upload Class/Workshop Photos",
      type: "file",
      required: true,
      accept: "image/*",
      multiple: true,
    },
    {
      id: "studentTestimonials",
      label: "Student Testimonials",
      type: "textarea",
      required: true,
      placeholder: "Share testimonials from your yoga students...",
    },
    {
      id: "therapeuticContributions",
      label: "Any outreach or therapeutic contributions",
      type: "textarea",
      required: true,
      placeholder: "Describe any therapeutic or community outreach work...",
    },
  ],
  "best-group-class-instructor": [
    {
      id: "classTypes",
      label: "Class Types Conducted (Zumba, HIIT, etc.)",
      type: "textarea",
      required: true,
      placeholder: "List all types of group classes you conduct...",
    },
    {
      id: "certifications",
      label: "Certification(s)",
      type: "textarea",
      required: true,
      placeholder: "List your group fitness certifications...",
    },
    { id: "yearsGroupExperience", label: "Years of Group Class Experience", type: "text", required: true },
    {
      id: "classStyle",
      label: "Describe your class style/energy",
      type: "textarea",
      required: true,
      placeholder: "Describe your teaching style and class atmosphere...",
    },
    {
      id: "classVideo",
      label: "Upload Class Video Clip (optional but encouraged)",
      type: "file",
      required: false,
      accept: "video/*",
    },
    {
      id: "testimonials",
      label: "Testimonials",
      type: "textarea",
      required: true,
      placeholder: "Share participant testimonials and feedback...",
    },
    {
      id: "eventParticipation",
      label: "Participation in events/community classes",
      type: "textarea",
      required: true,
      placeholder: "Describe your involvement in fitness events and community classes...",
    },
  ],
}

const socialMediaFields: FormField[] = [
  { id: "instagramHandle", label: "Instagram Handle", type: "text", required: false, placeholder: "@yourusername" },
  { id: "facebookPage", label: "Facebook Page", type: "text", required: false, placeholder: "Facebook page URL" },
  {
    id: "youtubeWebsite",
    label: "YouTube Channel / Website",
    type: "text",
    required: false,
    placeholder: "YouTube or website URL",
  },
  {
    id: "mediaMentions",
    label: "Press / Media Mentions (if any)",
    type: "textarea",
    required: false,
    placeholder: "List any press coverage or media mentions...",
  },
]

/* ---------------------- Helper: build Yup schema --------------------- */
const buildValidationSchema = (fields: FormField[]) => {
  const shape: Record<string, any> = {}

  fields.forEach((f) => {
    switch (f.type) {
      case "email":
        shape[f.id] = f.required ? Yup.string().email("Invalid email").required("Required") : Yup.string().email("Invalid email")
        break
      case "tel":
        shape[f.id] = f.required ? Yup.string().required("Required") : Yup.string()
        break
      case "date":
        shape[f.id] = f.required ? Yup.date().required("Required") : Yup.date().nullable()
        break
      case "select":
      case "text":
      case "textarea":
        shape[f.id] = f.required ? Yup.string().required("Required") : Yup.string().nullable()
        break
      case "file":
        // For files, we store File or FileList in formik value. Make a custom test to check presence if required
        if (f.required) {
          shape[f.id] = Yup.mixed().test("file-required", `${f.label} is required`, (value) => {
            if (!value) return false
            if (value instanceof FileList) return value.length > 0
            if (Array.isArray(value)) return value.length > 0
            return value instanceof File
          })
        } else {
          shape[f.id] = Yup.mixed().nullable()
        }
        break
      case "radio":
        shape[f.id] = f.required ? Yup.string().required("Required") : Yup.string().nullable()
        break
      default:
        shape[f.id] = f.required ? Yup.string().required("Required") : Yup.string().nullable()
    }
  })

  // Terms checkbox
  shape["agreeToTerms"] = Yup.boolean().oneOf([true], "You must accept terms")

  return Yup.object().shape(shape)
}

/* ---------------------- Component --------------------- */
export default function NominationForm({ awardTitle, awardId }: NominationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const categoryFields = categorySpecificFields[awardId] || []
  const allFields = [...commonFields, ...categoryFields, ...socialMediaFields]

  const validationSchema = useMemo(() => buildValidationSchema(allFields), [awardId])

  const initialValues = useMemo(() => {
    const v: Record<string, any> = {}
    allFields.forEach((f) => {
      // file fields start as null
      v[f.id] = f.type === "file" ? null : ""
    })
    v.agreeToTerms = false
    v.awardTitle = awardTitle
    v.awardId = awardId
    return v
  }, [awardId, awardTitle])

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)

      try {
        const form = new FormData()
        // append metadata fields
        form.append("awardTitle", awardTitle)
        form.append("awardId", awardId)

        // append text fields
        Object.keys(values).forEach((key) => {
          const val = values[key]
          if (val === null || val === undefined) return
          // file fields are handled below
          const fieldDef = allFields.find((f) => f.id === key)
          if (fieldDef?.type === "file") return
          if (key === "agreeToTerms") {
            form.append(key, val ? "true" : "false")
            return
          }
          // other values
          form.append(key, typeof val === "string" ? val : JSON.stringify(val))
        })

        // handle files: each file input may be File or FileList
        allFields
          .filter((f) => f.type === "file")
          .forEach((f) => {
            const val = (values as any)[f.id]
            if (!val) return
            if (val instanceof FileList) {
              Array.from(val).forEach((file) => {
                form.append(f.id, file)
              })
            } else if (Array.isArray(val)) {
              val.forEach((file: File) => form.append(f.id, file))
            } else if (val instanceof File) {
              form.append(f.id, val)
            }
          })

        const res = await fetch("/api/nominations", {
          method: "POST",
          body: form,
        })

        const result = await res.json()
        if (res.ok && result.success) {
          alert("Nomination submitted successfully! You will receive a confirmation email shortly.")
          formik.resetForm()
        } else {
          console.error(result)
          alert(result.message || "Something went wrong. Please try again.")
        }
      } catch (err) {
        console.error(err)
        alert("Server error occurred.")
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  /* ---------------------- render helpers ---------------------- */
  const renderField = (field: FormField) => {
    const error = (formik.touched as any)[field.id] && (formik.errors as any)[field.id]
    const commonProps = {
      id: field.id,
      name: field.id,
    }

    switch (field.type) {
      case "select":
        return (
          <div>
            <Select
              onValueChange={(value) => formik.setFieldValue(field.id, value)}
              value={formik.values[field.id] || ""}
              required={field.required}
            >
              <SelectTrigger>
                <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>
        )

      case "textarea":
        return (
          <>
            <Textarea
              {...commonProps}
              value={formik.values[field.id] || ""}
              onChange={(e) => formik.setFieldValue(field.id, e.target.value)}
              placeholder={field.placeholder}
              rows={4}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </>
        )

      case "file":
        return (
          <div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              {/* Hidden native input */}
              <input
                {...commonProps}
                type="file"
                accept={field.accept}
                multiple={field.multiple}
                onChange={(e) => {
                  const files = e.currentTarget.files
                  // Set FileList or single file in formik
                  if (!files) return
                  if (field.multiple) {
                    formik.setFieldValue(field.id, files)
                  } else {
                    formik.setFieldValue(field.id, files[0])
                  }
                }}
                className="hidden"
                id={field.id}
              />
              <label htmlFor={field.id} className="cursor-pointer">
                <span className="text-sm text-gray-600">
                  Click to upload {field.label.toLowerCase()}
                  {field.multiple && " (multiple files allowed)"}
                </span>
              </label>
              {/* selected file count / name */}
              {formik.values[field.id] && (
                <p className="text-sm text-green-600 mt-2">
                  {field.multiple
                    ? `${(formik.values[field.id] as FileList).length} file(s) selected`
                    : `File selected: ${(formik.values[field.id] as File).name}`}
                </p>
              )}
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>
        )

      case "radio":
        return (
          <>
            <RadioGroup
              onValueChange={(value) => formik.setFieldValue(field.id, value)}
              value={formik.values[field.id] || ""}
            >
              {field.options?.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${field.id}-${option}`} />
                  <Label htmlFor={`${field.id}-${option}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </>
        )

      default:
        return (
          <>
            <Input
              {...commonProps}
              type={field.type}
              value={formik.values[field.id] || ""}
              onChange={(e) => formik.setFieldValue(field.id, e.target.value)}
              placeholder={field.placeholder}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </>
        )
    }
  }

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-[#fa0368] to-[#dc5044] text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Send className="h-20 w-6" />
          Submit Nomination for {awardTitle}
        </CardTitle>
        <CardDescription className="text-white/90">
          Fill out the form below to nominate a deserving candidate for this award.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }} className="space-y-8">
          {/* Nominee Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
              <User className="h-6 w-6" />
              Nominee Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {commonFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id} className="flex items-center gap-1">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </Label>
                  {renderField(field)}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Category specific */}
          {categoryFields.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
                <Award className="h-6 w-6" />
                Professional Details
              </h3>
              <div className="space-y-6">
                {categoryFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id} className="flex items-center gap-1">
                      {field.label}
                      {field.required && <span className="text-red-500">*</span>}
                    </Label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-8" />

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
              <Building className="h-6 w-6" />
              Social Media & Visibility (Optional)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {socialMediaFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id} className="flex items-center gap-1">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </Label>
                  {renderField(field)}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Terms and Submit */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formik.values.agreeToTerms}
                onCheckedChange={(checked) => formik.setFieldValue("agreeToTerms", checked)}
              />
              <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                I agree to the terms and conditions and confirm that all information provided is accurate.
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !formik.values.agreeToTerms}
              className="w-full bg-gradient-to-r from-[#fa0368] to-[#dc5044] hover:from-[#dc5044] hover:to-[#fa0368] text-white py-4 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Submitting Nomination...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Submit Nomination
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
