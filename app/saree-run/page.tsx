"use client"
import SareeHeroSection from "@/components/saree-run/hero-section"
import SareeEventDetails from "@/components/saree-run/event-details"
import SareeDistanceOptions from "@/components/saree-run/distance-options"
import SareeEmpowermentSection from "@/components/saree-run/empowerment-section"
import SareeFAQSection from "@/components/saree-run/faq-section"
import SareeRegistrationCTA from "@/components/saree-run/registration-cta"

export default function SareeRunPage() {
  return (
    <main className="bg-gradient-to-b from-[#0f172a] to-[#1a1f3a] text-white">
      <SareeHeroSection />
      <SareeEventDetails />
      <SareeDistanceOptions />
      <SareeEmpowermentSection />
      <SareeFAQSection />
      <SareeRegistrationCTA />
    </main>
  )
}
