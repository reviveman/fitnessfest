"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SareeFAQSection() {
  const faqs = [
    {
      question: "What time should I report?",
      answer:
        "Report at 6:00 AM for a 6:30 AM flag-off. We recommend arriving early to settle in and soak in the pre-run energy with fellow participants.",
    },
    {
      question: "Can I walk instead of run?",
      answer:
        "Walk, jog, or run at your own pace. This is a celebration, not a competition. Everyone moves at their comfort level.",
    },
    {
      question: "Are girl children welcome?",
      answer:
        "Yes! Girl children are warmly welcome. They must wear sarees and be accompanied by parents/guardians at all times.",
    },
    {
      question: "Are boys or men allowed?",
      answer:
        "No. This event is exclusively for women and girl children to create a safe, supportive, all-women's space.",
    },
    {
      question: "What about elderly women?",
      answer:
        "Elderly women are absolutely welcome! We recommend they be accompanied by someone for safety, and they can walk the distance at their own pace.",
    },
    {
      question: "Will there be water and medical support?",
      answer:
        "Yes! Multiple water/hydration stations along the route and first aid support teams stationed throughout the event.",
    },
    {
      question: "Can I carry a large bag?",
      answer:
        "We don't have a baggage counter. Please avoid carrying large bags. Keep essentials minimal—just bring what you need.",
    },
    {
      question: "Is parking available?",
      answer:
        "Limited parking at the venue. We recommend carpooling with fellow participants to reduce traffic and carbon footprint!",
    },
    {
      question: "Will there be refreshments after the run?",
      answer: "Yes! Light, healthy refreshments will be available post-run to celebrate your achievement.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "This is a celebration-focused, non-competitive event. There are no prizes—only the joy of running together and memories to cherish.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-300 text-center mb-12 text-lg">Have questions? We've got answers.</p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 hover:border-[#EA4A3E] transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-[#EA4A3E] transition-colors duration-200 py-4">
                <span className="text-lg font-semibold text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-gradient-to-r from-[#EA4A3E]/10 to-[#d4a574]/10 border border-[#EA4A3E]/30 rounded-xl p-8 text-center backdrop-blur-md">
          <p className="text-white text-lg">
            Still have questions? <span className="font-bold text-[#EA4A3E]">Reach out to us!</span>
          </p>
          <p className="text-gray-300 mt-2">Email: info@fitnessfest.in | Phone: +91 91483 19993</p>
        </div>
      </div>
    </section>
  )
}
