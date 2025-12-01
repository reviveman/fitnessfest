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



import Hero from "@/components/Homehero";
import EventInfoSection from "@/components/event-info-section";
import Timer from "@/components/timer";
import HomeClient from "./home-client";
import HomeRegistration from "@/components/HomeRegistration";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Hero />
        <Timer />
      </div>

      <EventInfoSection />
      <HomeRegistration />


      {/* Everything heavy loads in client */}
      <HomeClient />
      
    </main>
  );
}
