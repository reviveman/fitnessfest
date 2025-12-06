"use client"

import { useState } from "react"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

/* -------------------------------------------
   ✔️ THIS COMPONENT NOW ACCEPTS PROPS
------------------------------------------- */
interface SareeRunFormProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function SareeDistanceOptions({ open, setOpen }: SareeRunFormProps) {
  const [selectedDistance, setSelectedDistance] = useState("3 KM")

  const distances = [
    { distance: "1 KM", label: "Start", perks: ["Great for beginners", "Family-friendly", "Low intensity"] },
    { distance: "3 KM", label: "Feel the Flow", perks: ["Balance & endurance", "Medium intensity"] },
    { distance: "5 KM", label: "Full Glory", perks: ["Ultimate challenge", "High energy vibes"] },
  ]

  const currentSelection = distances.find((d) => d.distance === selectedDistance)

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Must be 10 digits").required("Required"),
    distance: Yup.string().required("Required"),
  })

  const handleSubmit = (values: any) => {
    console.log("FORM SUBMITTED:", values)
    setOpen(false)
  }

  return (
    <>
      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#0f172a] border border-[#EA4A3E]/50 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Register – {selectedDistance}</DialogTitle>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogHeader>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              distance: selectedDistance,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white mb-1">Full Name</label>
                  <Field name="fullName" className="input-field" />
                  <ErrorMessage name="fullName" className="text-red-400 text-sm" component="div" />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white mb-1">Email</label>
                  <Field name="email" className="input-field" />
                  <ErrorMessage name="email" className="text-red-400 text-sm" component="div" />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white mb-1">Phone</label>
                  <Field name="phone" className="input-field" />
                  <ErrorMessage name="phone" className="text-red-400 text-sm" component="div" />
                </div>

                {/* Selected Distance */}
                <div className="p-4 rounded-lg border border-[#FFC91F] bg-white/5">
                  <p className="text-gray-400 text-sm">Selected Distance</p>
                  <p className="text-2xl text-[#FFC91F] font-bold">{values.distance}</p>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#EA4A3E] hover:bg-orange-600 text-white"
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* Input style */
const inputField =
  "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#EA4A3E] focus:bg-white/20 transition-all"
