"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Timer() {
  return (
   <div
  className="relative min-h-[70vh] lg:min-h-[60vh] xl:min-h-[90vh] 2xl:min-h-[50vh] 
             flex items-center bg-white pt-28 md:pt-40"
  style={{
    backgroundImage: "url('/images/image1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderBottomLeftRadius: "10%",
    borderBottomRightRadius: "10%",
  }}
>

      {/* ✅ Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}

      {/* Hero Content */}
      <div className="relative w-full h-full pt-25 2xl:pt-60 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="relative order-1 flex justify-center">
            <div className="relative lg:w-full">
              <Image
                src="/images/29.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="hidden md:block text-white order-2 pb-25 pt-10">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-4xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                 
                </h1>
                <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold leading-tight text-[#EA4A3E]">
                  The Ultimate Fitness & Wellness 
                </h1>
                <h1 className="text-4xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                  Experience
                </h1>
                <div className="w-16 h-1 bg-white mx-auto mt-3"></div>
              </div>

              <p className="text-center sm:text-lg text-gray-300 max-w-md mx-auto">
                Unleash Your Potential!
Join a vibrant celebration where strength meets spirit, and wellness takes center stage. From fitness challenges to expert talks — discover, move, and thrive with the community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link href="/tickets">
                    <Button className="bg-[#EA4A3E] hover:bg-red-600 text-white px-8 py-6 rounded-full font-medium text-lg cursor-pointer">
                  BOOK NOW
                </Button>
                </Link>

                <Link href={"/schedule"}>
                        <Button
                  variant="outline"
                  className="cursor-pointer bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-6 rounded-full font-medium text-lg"
                >
                  VIEW SCHEDULE
                </Button>
                
                </Link>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
