"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Check,  } from "lucide-react"
import Link from "next/link"

import Pricing from "@/components/pricing"   // ← YOUR PRICING COMPONENT

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-1">

        {/* Hero Section */}
<section
  className="min-h-[60vh] bg-cover bg-center py-20 pt-52 flex items-center relative"
  style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-80"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        Get Your Tickets
      </h1>
    </div>
  </div>
</section>



       {/* Event Details */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg border border-red-100">
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT – EVENT DETAILS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Event Details
            </h2>

            <ul className="space-y-4">

              {/* DATE */}
              <li className="flex items-start">
                <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#EA4A3E]" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-800">
                    WHEN IS THE EVENT :
                  </span>
                  <span className="text-gray-600">(Saturday & Sunday)</span><br />
                  <span className="text-gray-600">21 & 22 February 2026</span>
                </div>
              </li>

              {/* TIME */}
              <li className="flex items-start">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#EA4A3E]" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-800">
                    TIME
                  </span>
                  <span className="text-gray-600">11:00 AM – 9:00 PM</span>
                </div>
              </li>

              {/* LOCATION */}
              <li className="flex items-start">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#EA4A3E]" />
                </div>

                <div>
                  <span className="font-semibold block text-gray-800">
                    WHERE IS THE EVENT :
                  </span>
                  <span className="text-gray-600">
                    KARNATAKA TRADE PROMOTION ORGANISATION (KTPO)
                  </span>
                  <span className="text-gray-600 block">
                    Whitefield, Bengaluru, Karnataka 560066
                  </span>
                </div>
              </li>

            </ul>
          </div>

          {/* RIGHT – WHAT TO EXPECT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              What to Expect
            </h2>

            <ul className="space-y-3">

              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Full-day Expo Access</span>
              </li>

              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Zumba • HIIT • Yoga • CrossFit Demos</span>
              </li>

              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Fitness Challenges & Live Workouts</span>
              </li>

              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Healthy Food & Nutrition Zone</span>
              </li>

              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Workshops (Diet • Injury Prevention • Running • Women’s Fitness)</span>
              </li>

              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Fitness Goodie Bag & Wristband</span>
              </li>

              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Digital Participation Certificate</span>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


        {/* Pricing Section Replaced */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <Pricing /> {/* ✔ PRICING INCLUDED HERE */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 bg-gradient-to-r from-[#EA4A3E] to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Fitness Fest 2026?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Don't miss out on the biggest fitness event of the year. Limited seats available!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/competitions">
              <Button className="bg-white text-[#EA4A3E] hover:bg-gray-100 px-6 py-2 font-semibold rounded-full">
                View Schedule
              </Button>
            
            </Link>
         <Link href="/register">
                   <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#EA4A3E] px-6 py-2 font-semibold rounded-full cursor-pointer">
                Contact Us
              </Button>
              </Link>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}


// "use client";

// import Pricing from "@/components/pricing";

// export default function TicketsPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* hero + event details */}

//       <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
//         <div className="container mx-auto px-4">
//           <Pricing />
//         </div>
//       </section>
//     </div>
//   );
// }
