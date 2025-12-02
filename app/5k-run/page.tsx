"use client"
import HeroSection from "@/components/5k-run/hero-section"
import EventDetails from "@/components/5k-run/event-details"
import BenefitsSection from "@/components/5k-run/benefits-section"
import FAQSection from "@/components/5k-run/faq-section"
import RegistrationCTA from "@/components/5k-run/registration-cta"

export default function FiveKRunPage() {
  return (
    <main className="bg-[#0f172a] text-white overflow-hidden">
      <HeroSection />
      <EventDetails />
      <BenefitsSection />
      <FAQSection />
      <RegistrationCTA />
    </main>
  )
}
