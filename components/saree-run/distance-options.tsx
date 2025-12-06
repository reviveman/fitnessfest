"use client"
import { useState } from "react"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function SareeDistanceOptions() {
  const [selectedDistance, setSelectedDistance] = useState("3 KM")
  const [isFormOpen, setIsFormOpen] = useState(false)

  const distances = [
    {
      distance: "1 KM",
      label: "Start",
      perks: ["Great for beginners", "Celebrate at your pace", "Family-friendly", "Low intensity"],
    },
    {
      distance: "3 KM",
      label: "Feel the Flow",
      perks: ["Balance & endurance", "Feel the community", "Medium intensity", "Achievable challenge"],
    },
    {
      distance: "5 KM",
      label: "Full Glory",
      perks: ["Ultimate challenge", "Personal best moment", "High energy vibes", "Conquer & celebrate"],
    },
  ]

  const currentSelection = distances.find((d) => d.distance === selectedDistance)

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required").min(3, "Name must be at least 3 characters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    distance: Yup.string().required("Distance selection is required"),
  })

  const handleSubmit = (values: any) => {
    console.log("[v0] Form submitted with values:", values)
    // Handle form submission here
    setIsFormOpen(false)
  }

  return (
    <section className="py-20 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Choose Your Distance</h2>
        <p className="text-gray-300 text-center mb-16 text-lg">
          Run, walk, or jog from 1 KM to 5 KM—pick your starting point and go as far as you can!
        </p>

        <div className="rounded-2xl bg-gradient-to-br from-[#EA4A3E]/20 to-[#d4a574]/20 border border-[#EA4A3E] overflow-hidden shadow-[0_0_30px_rgba(234,74,62,0.3)]">
          <div className="relative h-64 w-full">
            <Image src="/images/saree.png" alt="Saree distance run" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/90"></div>
          </div>

          <div className="p-10">
            {/* Distance Journey Visualization */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">Your Running Journey</h3>
              <div className="flex items-center justify-between gap-4">
                {distances.map((d, idx) => (
                  <div key={idx} className="flex-1">
                    <button
                      onClick={() => setSelectedDistance(d.distance)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedDistance === d.distance
                          ? "bg-[#EA4A3E] border-[#EA4A3E] text-white shadow-lg scale-105"
                          : "bg-white/5 border-white/20 text-gray-300 hover:border-[#EA4A3E] hover:bg-white/10"
                      }`}
                    >
                      <div className="text-xl font-bold">{d.distance}</div>
                      <div className="text-xs text-gray-200 mt-1">{d.label}</div>
                    </button>
                    {idx < distances.length - 1 && (
                      <div className="hidden md:block absolute mt-3 ml-[calc(25%-8px)] w-16 h-1 bg-gradient-to-r from-[#EA4A3E] to-white/20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits based on selected distance */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#FFC91F] mb-4">Benefits at {selectedDistance}</h4>
              <ul className="space-y-3">
                {currentSelection?.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#EA4A3E] flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Register Button */}
            <Button
              onClick={() => setIsFormOpen(true)}
              className="w-full py-4 rounded-lg font-semibold text-lg bg-[#EA4A3E] hover:bg-orange-600 text-white transition-all duration-300"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="bg-[#0f172a] border border-[#EA4A3E]/50">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Register for {selectedDistance}</DialogTitle>
            <button
              onClick={() => setIsFormOpen(false)}
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
                {/* Full Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#EA4A3E] focus:bg-white/20 transition-all"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#EA4A3E] focus:bg-white/20 transition-all"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Enter 10-digit phone number"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#EA4A3E] focus:bg-white/20 transition-all"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Selected Distance Display */}
                <div className="bg-white/5 p-4 rounded-lg border border-[#FFC91F]">
                  <p className="text-gray-400 text-sm">Selected Distance:</p>
                  <p className="text-2xl font-bold text-[#FFC91F]">{values.distance}</p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-semibold bg-[#EA4A3E] hover:bg-orange-600 text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Registering..." : "Complete Registration"}
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </section>
  )
}
