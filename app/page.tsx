// import Hero from "@/components/Homehero"
// import EventInfoSection from "@/components/event-info-section"
// import WhyAttend from "@/components/why-attend"
// import Speakers from "@/components/speakers"
// import Schedule from "@/components/schedule"
// import Pricing from "@/components/pricing"
// import Timer from "@/components/timer"

// export default function Home() {
//   return (
//     <main className="">
//       {/* Hero Section with Timer overlay */}
//       <div className="relative">
//         <Hero />
//         <Timer />
//       </div>
//       <EventInfoSection />
//       <WhyAttend />
//       {/* <Speakers /> */}
//       <Schedule />
//       <Pricing />
//     </main>
//   )
// }



// import Hero from "@/components/Homehero";
// import EventInfoSection from "@/components/event-info-section";
// import Timer from "@/components/timer";
// import HomeClient from "./home-client";
// import HomeRegistration from "@/components/HomeRegistration";

// export default function Home() {
//   return (
//     <main>
//       <div className="relative">
//         <Hero />
//         <Timer />
//       </div>

//       <EventInfoSection />
//       <HomeRegistration />


//       {/* Everything heavy loads in client */}
//       <HomeClient />
      
//     </main>
//   );
// }


"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-28 md:pt-32">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/image1.jpg"
          alt="FitnessFest Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[#EA4A3E]/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
          FITNESS<span className="text-[#EA4A3E]">FEST</span>
        </h1>

        <div className="w-20 h-1 bg-[#EA4A3E] mx-auto my-6"></div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Website Under Construction
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10">
          We’re building something powerful for the ultimate fitness & wellness experience.
          Stay tuned — we’ll be launching soon!
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="https://www.instagram.com/bengaluru_fitness_fest/" target="_blank">
            <Button className="bg-[#EA4A3E] hover:bg-red-600 text-white px-8 py-6 rounded-full text-lg">
              Notify Me
            </Button>
          </Link>

          <Link href="https://www.instagram.com/bengaluru_fitness_fest/" target="_blank">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 rounded-full text-lg"
            >
              Follow Us
            </Button>
          </Link>
        </div>
      </div>

    </main>
  )
}