"use client"

// import Schedule from "@/components/events"
import Schedule from "@/components/schedule"

export default function EventPage() {


  return (
    <>
      <section className="min-h-[75vh] bg-cover bg-center py-20 flex items-center relative" style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}>
  <div
  className="absolute inset-0 bg-black opacity-80"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
   <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-white">
  Events
</h1>
    </div>
  </div>
</section>
    <Schedule />
    </>

  )
}
