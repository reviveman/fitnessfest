"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function FiveKRunForm({ open, setOpen }: any) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    age: Yup.number().required("Required").min(10).max(80),
    gender: Yup.string().required("Required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    city: Yup.string(),
    emergency: Yup.string().required("Required"),
    tshirt: Yup.string().required("Required"),
    participatedBefore: Yup.string().required("Required"),
    heardFrom: Yup.array().min(1, "Select at least 1 source"),
    paymentScreenshot: Yup.mixed().required("Payment screenshot required"),
  })

  const GOOGLE_SCRIPT_URL = "YOUR_WEB_APP_URL"

  const handleSubmit = async (values: any) => {
    const reader = new FileReader()
    reader.onload = async () => {
      const base64Image = reader.result

      const payload = {
        ...values,
        paymentScreenshot: base64Image,
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        mode: "no-cors",
      })

      alert("Registration successful!")
      setOpen(false)
    }

    reader.readAsDataURL(values.paymentScreenshot)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#0f172a] text-white border border-[#EA4A3E] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">5K RUN – Registration Form</DialogTitle>
        </DialogHeader>

        <Formik
          initialValues={{
            fullName: "",
            age: "",
            gender: "",
            phone: "",
            email: "",
            city: "",
            emergency: "",
            tshirt: "",
            participatedBefore: "",
            heardFrom: [],
            paymentScreenshot: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-6">
              {/* Full Name */}
              <div>
                <label>Full Name</label>
                <Field name="fullName" className="input" />
                <ErrorMessage component="div" className="error" name="fullName" />
              </div>

              {/* Age */}
              <div>
                <label>Age</label>
                <Field name="age" className="input" />
                <ErrorMessage component="div" className="error" name="age" />
              </div>

              {/* Gender */}
              <div>
                <label>Gender</label>
                <Field as="select" name="gender" className="input">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Field>
                <ErrorMessage component="div" className="error" name="gender" />
              </div>

              {/* Phone */}
              <div>
                <label>Phone</label>
                <Field name="phone" className="input" />
                <ErrorMessage component="div" className="error" name="phone" />
              </div>

              {/* Email */}
              <div>
                <label>Email</label>
                <Field name="email" className="input" />
                <ErrorMessage component="div" className="error" name="email" />
              </div>

              {/* T-shirt size */}
              <div>
                <label>T-shirt Size</label>
                <Field as="select" name="tshirt" className="input">
                  <option value="">Select</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </Field>
                <ErrorMessage component="div" className="error" name="tshirt" />
              </div>

              {/* Emergency Contact */}
              <div>
                <label>Emergency Contact Name & Number</label>
                <Field as="textarea" name="emergency" className="input" />
                <ErrorMessage component="div" className="error" name="emergency" />
              </div>

              {/* Payment Screenshot */}
              <div>
                <label>Upload Payment Screenshot</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setFieldValue("paymentScreenshot", e.currentTarget.files![0])
                  }}
                  className="text-white"
                />
                <ErrorMessage component="div" className="error" name="paymentScreenshot" />
              </div>

              <Button type="submit" className="w-full bg-[#EA4A3E]">
                Submit Registration
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}
