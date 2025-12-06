"use client"

import DetailedSchedule from "@/components/detailed-schedule"



export default function EventPage() {


  return (
    <>
      <section className="min-h-[75vh] bg-cover bg-center py-20 flex items-center relative" style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}>
  <div
  className="absolute inset-0 bg-black opacity-80"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      {/* Header */}
        <div className="mt-50 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Festival Schedule</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Timings: 11:00 AM – 9:00 PM | Experience workouts, competitions, and wellness sessions
          </p>
        </div>
    </div>
  </div>
</section>
    <DetailedSchedule />
    </>

  )
}
