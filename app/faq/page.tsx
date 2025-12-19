"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  category: string;
  questions: { q: string; a: string }[];
}

const faqs: FAQ[] = [
  {
    category: "🎟️ Tickets & Registration",
    questions: [
      {
        q: "How can I buy tickets for the Bengaluru Fitness Festival?",
        a: "Tickets can be purchased online through our official website. We also have on-site registration counters at the venue (subject to availability).",
      },
      {
        q: "Do I need to carry a printed ticket?",
        a: "No. A digital ticket (QR code on your phone) is sufficient for entry.",
      },
      {
        q: "Are group bookings available?",
        a: "Yes, we offer special discounts for group registrations. Please contact our support team for details.",
      },
      {
        q: "Can I transfer my ticket to someone else?",
        a: "Yes, tickets are transferable but must be updated in the system before the event begins.",
      },
    ],
  },
  {
    category: "📍 Venue & Event Information",
    questions: [
      {
        q: "Where is the Bengaluru Fitness Festival happening?",
        a: "The festival will be held at [ KTPO Convention Centre, Whitefield, Bengaluru].",
      },
      {
        q: "What are the event dates and timings?",
        a: "The Bengaluru Fitness Festival 2026 is scheduled for 28–29 March 2026, from 10:00 AM – 7:00 PM on both days.",
      },
      {
        q: "Is parking available at the venue?",
        a: "Yes, paid parking is available at the venue. We recommend arriving early as slots fill up quickly.",
      },
      {
        q: "Is the event child-friendly?",
        a: "Yes, families are welcome. However, certain fitness competitions may have age restrictions.",
      },
    ],
  },
  {
    category: "🏋️ Activities & Participation",
    questions: [
      {
        q: "What kind of activities will be there?",
        a: "The festival features fitness workshops, yoga sessions, Zumba, strength competitions, nutrition talks, fitness tech exhibits, and more.",
      },
      {
        q: "Do I need to pre-register for workshops or competitions?",
        a: "Some workshops and competitions have limited seats and require pre-registration. Check the schedule on our website for details.",
      },
      {
        q: "Can beginners join the activities?",
        a: "Absolutely! The festival is open to all fitness levels—from beginners to professionals.",
      },
      {
        q: "Will there be certified trainers and experts?",
        a: "Yes, all workshops and sessions are conducted by certified trainers, nutritionists, and wellness experts.",
      },
    ],
  },
  {
    category: "👕 What to Bring & Facilities",
    questions: [
      {
        q: "What should I wear to the festival?",
        a: "Comfortable workout attire and sports shoes are recommended.",
      },
      {
        q: "Do I need to bring my own yoga mat or equipment?",
        a: "Yoga mats will be provided, but participants are welcome to bring their own. For specialized competitions, please check the equipment guidelines.",
      },
      {
        q: "Are food and drinks available at the venue?",
        a: "Yes, healthy food stalls, hydration points, and nutrition counters will be available. Outside food and beverages are not allowed.",
      },
      {
        q: "Is there a cloakroom or locker facility?",
        a: "Yes, lockers and cloakrooms will be available on a first-come-first-serve basis.",
      },
    ],
  },
  {
    category: "🛡️ Safety & Medical",
    questions: [
      {
        q: "Will there be medical support available?",
        a: "Yes, trained medical staff and an emergency ambulance will be stationed at the venue.",
      },
      {
        q: "Is the event insured?",
        a: "The organizers ensure standard safety protocols. Participants are encouraged to be mindful of their health and consult a doctor before engaging in strenuous activities.",
      },
      {
        q: "What COVID-19 precautions are in place?",
        a: "All safety guidelines as per government protocols at the time of the festival will be followed. Sanitization stations will be available across the venue.",
      },
    ],
  },
  {
    category: "💼 Exhibitors & Sponsors",
    questions: [
      {
        q: "How can I participate as an exhibitor?",
        a: "You can apply through the Exhibitor Registration section on our website or contact our sales team.",
      },
      {
        q: "Are sponsorship opportunities available?",
        a: "Yes, we offer multiple sponsorship packages. Contact our partnerships team for details.",
      },
      {
        q: "What facilities do exhibitors receive?",
        a: "Exhibitors receive booth space, branding visibility, exhibitor passes, and access to networking sessions.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (q: string) => {
    setOpenIndex(openIndex === q ? null : q);
  };

  return (
    <main className=" mt-16 md:mt-24 min-h-screen bg-gray-50 p-6 md:p-12 lg:p-24 pt-28 md:pt-24">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="mt-2 text-gray-600">
            Welcome to the Bengaluru Fitness Festival FAQ page. We’ve put
            together answers to the most common questions to help you prepare
            for the event.
          </p>
        </header>

        {/* FAQ Sections */}
        <div className="space-y-10">
          {faqs.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-indigo-700 mb-4">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, j) => {
                  const isOpen = openIndex === faq.q;
                  return (
                    <div
                      key={j}
                      className="rounded-lg border bg-white shadow-sm"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.q)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left"
                      >
                        <span className="font-medium text-gray-900">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-gray-700">{faq.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 rounded-2xl bg-indigo-50 p-6 text-center">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">
            📞 Still Have Questions?
          </h2>
          <p className="text-gray-700">
            If your query isn’t listed here, feel free to reach out:
          </p>
          <div className="mt-2 space-y-1 text-gray-800">
            <p>📧 Email: info@fitnessfest.in</p>
            <p>📞 Phone: +91 91483 19993</p>
            <p>📱 Social Media: [Insert Festival Social Handles]</p>
          </div>
        </div>
      </div>
    </main>
  );
}
