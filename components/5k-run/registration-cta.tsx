"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function RegistrationCTA() {
  return (
    <section
      id="registration"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA4A3E]/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff7b54]/10 rounded-full blur-3xl -ml-48 -mb-48" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-[#EA4A3E]/20 to-[#ff7b54]/20 border border-[#EA4A3E]/40 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Ready to Run?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of fitness enthusiasts on February 21, 2026. Register now to secure your spot and become
              part of the Bengaluru Fitness Fest movement.
            </p>

            {/* Key highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Limited Slots", value: "First Come, First Serve" },
                { label: "Early Bird Price", value: "₹1,298 (Inclusive GST)" },
                { label: "Includes", value: "Full Runner Experience" },
              ].map((highlight, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">{highlight.label}</p>
                  <p className="text-lg font-bold text-[#EA4A3E]">{highlight.value}</p>
                </div>
              ))}
            </div>

            {/* Terms checkbox */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-[#EA4A3E] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">
                    I agree to the terms and conditions, including the waiver. I understand I participate at my own risk
                    and will consult a doctor if needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Register button */}
            <Button
              size="lg"
              className="bg-[#EA4A3E] hover:bg-[#d63a2e] text-white px-12 py-7 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Register for 5K Run - ₹1,298
            </Button>

            <p className="mt-6 text-sm text-gray-400">
              Questions? Contact us at{" "}
              <span className="text-[#EA4A3E] font-semibold">contact@bengalurufitnessfest.in</span> or{" "}
              <span className="text-[#EA4A3E] font-semibold">+91 91483 19993</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
