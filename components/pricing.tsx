"use client"

import { Button } from "@/components/ui/button"

export default function Pricing() {
  const pricingPlans = [
    {
      name: "EARLY BIRD",
      price: "₹1,999",
      description: "Get your pass at the best early-bird price before tickets run out.",
      progress: 65,
      available: "325 / 500",
      note: "All prices exclude 18% GST.",
    },
    {
      name: "GOLD",
      price: "₹5,999",
      description: "Enjoy premium seating and access to exclusive sessions.",
      progress: 80,
      available: "200 / 250",
      note: "All prices exclude 18% GST.",
      featured: true,
    },
    {
      name: "PLATINUM",
      price: "₹3,999",
      description: "Best value for attendees who want more than just the basics.",
      progress: 88,
      available: "352 / 400",
      note: "All prices exclude 18% GST.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-2">
          <h6 className="text-[#EA4A3E] text-sm font-semibold mb-2">PRICING TABLE</h6>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">GET YOUR TICKET !!</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Choose the plan that fits you best and secure your spot at the festival.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl shadow-lg transition-transform duration-300 ${
                plan.featured ? " " : ""
              } hover:scale-105 bg-white text-gray-900`}
            >
              {/* Badge (fixed) */}
              {plan.featured && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#EA4A3E] text-white px-4 py-1 text-xs font-semibold rounded shadow-md">
                  EXCLUSIVE OFFER!
                </div>
              )}

              <div className="flex flex-col h-full p-8 text-center">
                <h6 className="text-[#EA4A3E] text-sm font-semibold mb-2">{plan.name}</h6>
                <h2 className="text-4xl font-bold mb-4">{plan.price}</h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base">{plan.description}</p>
                <p className="text-xs text-gray-500 mb-6">{plan.note}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2 text-gray-700">
                    <span>Seat booked</span>
                    <span>{plan.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#EA4A3E] h-2 rounded-full"
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-6">( {plan.available} ) Available seats</p>

                {/* Button at bottom */}
                <div className="mt-auto">
                  <Button className="w-full bg-[#EA4A3E] hover:bg-orange-600 text-white py-3 rounded-md cursor-pointer">
                    BUY TICKET
                  </Button>
                </div>
              </div>

              {/* Decorative Wave */}
              <div className="absolute bottom-0 left-0 w-full">
                <svg className="w-full h-6" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path
                    d="M0 20 Q5 0 10 20 T20 20 T30 20 T40 20 T50 20 T60 20 T70 20 T80 20 T90 20 T100 20 V20 H0 Z"
                    fill="#111827"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
