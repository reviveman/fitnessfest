"use client"

import React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FieldArray, Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
}

const initialValues = {
  fullName: "",
  age: "",
  gender: "Female",
  phone: "",
  email: "",
  city: "",
  emergencyContact: "",
  participatedBefore: "",
  heardFrom: [] as string[],
  heardFromOther: "",
  waiver: false,
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required").min(3, "Enter at least 3 characters"),
  age: Yup.number().required("Age is required").min(12, "Minimum age 12").max(120, "Enter valid age"),
  gender: Yup.string().oneOf(["Female", "Others"]).required("Gender is required"),
  phone: Yup.string().required("Phone is required").matches(/^[0-9]{10}$/, "Enter 10 digit phone"),
  email: Yup.string().required("Email is required").email("Enter a valid email"),
  city: Yup.string().nullable(),
  emergencyContact: Yup.string().required("Emergency contact is required"),
  participatedBefore: Yup.string().oneOf(["Yes", "No"]).required("Field required"),
  heardFrom: Yup.array().min(1, "Select at least one"),
  waiver: Yup.boolean().oneOf([true], "You must accept the declaration"),
})

export default function SareeRunForm({ open, setOpen }: Props) {
  // Replace with your actual Apps Script Web App URL after deployment
  const GOOGLE_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/YOUR_DEPLOY_ID/exec"

  const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    try {
      // Assemble a payload that's friendly for Google Sheets (you can modify order)
      const payload = {
        timestamp: new Date().toISOString(),
        fullName: values.fullName,
        age: values.age,
        gender: values.gender,
        phone: values.phone,
        email: values.email,
        city: values.city,
        emergencyContact: values.emergencyContact,
        participatedBefore: values.participatedBefore,
        heardFrom: values.heardFrom.join(", "),
        heardFromOther: values.heardFromOther || "",
        waiver: values.waiver ? "Accepted" : "Not accepted",
      }

      const res = await fetch("/api/saree-run", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});


      // Expect JSON response from Apps Script (CORS enabled below)
      if (!res.ok) {
        console.error("Submission failed", await res.text())
        alert("Submission failed. Please try again.")
      } else {
        const json = await res.json()
        if (json.success) {
          alert("Thank you! Your registration was received. See you at the start line!")
          resetForm()
          setOpen(false)
        } else {
          console.error("Script returned failure", json)
          alert("Submission failed. Please try again later.")
        }
      }
    } catch (err) {
      console.error("Submission error", err)
      alert("Submission failed. Check console or try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl bg-[#0f172a] text-white border border-[#EA4A3E] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Saree Run – Free Registration</DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <p className="text-sm text-gray-300 mb-4">
            Bengaluru Fitness Festival 2026 — Run Date: 29 March 2026 • Reporting: 6:00 AM • Start: 6:30 AM • Venue: Bhoruka Tech Park Ground,
            Whitefield
          </p>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, values, setFieldValue }) => (
              <Form className="space-y-4">
                {/* Section 1: Participant Info */}
                <div>
                  <label className="block text-sm">Full Name *</label>
                  <Field name="fullName" className="w-full px-3 py-2 rounded bg-white/5" />
                  <div className="text-red-400 text-sm"><ErrorMessage name="fullName" /></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm">Age *</label>
                    <Field name="age" type="number" className="w-full px-3 py-2 rounded bg-white/5" />
                    <div className="text-red-400 text-sm"><ErrorMessage name="age" /></div>
                  </div>

                  <div>
                    <label className="block text-sm">Gender *</label>
                    <Field as="select" name="gender" className="w-full px-3 py-2 rounded bg-white/5">
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </Field>
                    <div className="text-red-400 text-sm"><ErrorMessage name="gender" /></div>
                  </div>

                  <div>
                    <label className="block text-sm">Mobile Number *</label>
                    <Field name="phone" className="w-full px-3 py-2 rounded bg-white/5" />
                    <div className="text-red-400 text-sm"><ErrorMessage name="phone" /></div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm">Email Address *</label>
                  <Field name="email" type="email" className="w-full px-3 py-2 rounded bg-white/5" />
                  <div className="text-red-400 text-sm"><ErrorMessage name="email" /></div>
                </div>

                <div>
                  <label className="block text-sm">City / Area</label>
                  <Field name="city" className="w-full px-3 py-2 rounded bg-white/5" />
                </div>

                <div>
                  <label className="block text-sm">Emergency Contact (Name – Number) *</label>
                  <Field as="textarea" name="emergencyContact" className="w-full px-3 py-2 rounded bg-white/5" />
                  <div className="text-red-400 text-sm"><ErrorMessage name="emergencyContact" /></div>
                </div>

                {/* Section 2: Event Info */}
                <div>
                  <label className="block text-sm">Have you participated in Saree Run before? *</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="participatedBefore" value="Yes" checked={values.participatedBefore === "Yes"} onChange={() => setFieldValue("participatedBefore", "Yes")} />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="participatedBefore" value="No" checked={values.participatedBefore === "No"} onChange={() => setFieldValue("participatedBefore", "No")} />
                      No
                    </label>
                  </div>
                  <div className="text-red-400 text-sm"><ErrorMessage name="participatedBefore" /></div>
                </div>

                <div>
                  <label className="block text-sm">How did you hear about the Saree Run? *</label>
                  <FieldArray name="heardFrom">
                    {() => (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {["Instagram", "Facebook", "Friends / Family", "Gym", "Bengaluru Fitness Fest Website"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              value={opt}
                              checked={values.heardFrom.includes(opt)}
                              onChange={(e) => {
                                const checked = e.target.checked
                                const value = e.target.value
                                if (checked) setFieldValue("heardFrom", [...values.heardFrom, value])
                                else setFieldValue("heardFrom", values.heardFrom.filter((v: string) => v !== value))
                              }}
                            />
                            {opt}
                          </label>
                        ))}

                        <div className="col-span-full mt-2">
                          <label className="block text-sm">Other (specify)</label>
                          <Field name="heardFromOther" className="w-full px-3 py-2 rounded bg-white/5" placeholder="If other, mention here" />
                        </div>
                      </div>
                    )}
                  </FieldArray>
                  <div className="text-red-400 text-sm"><ErrorMessage name="heardFrom" /></div>
                </div>

               {/* Section 3: Waiver */}
<div className="bg-white/5 p-4 rounded">
  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      checked={values.waiver}
      onChange={(e) => setFieldValue("waiver", e.target.checked)}
    />
    <span className="text-sm leading-relaxed">
      I confirm that I am voluntarily participating in the Saree Run at Bengaluru Fitness Festival 2026.
      I am medically fit to participate. I understand that the organizers are not responsible for any injury,
      loss, or damage. I agree to follow event rules and allow the use of event photos/videos for promotional
      purposes.
      <br />
      <a
        href="/saree-run-terms"
        target="_blank"
        className="text-blue-400 underline hover:text-blue-300 ml-1"
      >
        Read Full Terms & Conditions
      </a>
    </span>
  </label>
  <div className="text-red-400 text-sm mt-1">
    <ErrorMessage name="waiver" />
  </div>
</div>


                {/* Submit */}
                <div className="flex gap-3">
                  <Button type="submit" className="bg-[#EA4A3E] px-6 py-2" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                  <Button variant="outline" className="px-6 py-2" onClick={() => setOpen(false)}>Cancel</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  )
}
