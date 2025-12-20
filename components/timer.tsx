"use client"
import { useState, useEffect } from "react"

export default function Timer() {
const eventDate = new Date("2026-03-28T00:00:00+05:30"); // 🎯 Event Start Date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // 🔹 Helper: calculate difference
  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = eventDate.getTime() - now.getTime()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()) // initial
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="
        absolute 
        bottom-[-4rem] 
        left-1/2 
        -translate-x-1/2 
        lg:left-auto 
        lg:right-45 
        lg:translate-x-0 
        z-10 
        w-[90%] 
        max-w-xl
      "
    >
      <div className="bg-white rounded-[40px] shadow-2xl px-6 py-10">
        <div className="grid grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-5xl font-extrabold text-[#EA4A3E]">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Days</div>
          </div>
          <div>
            <div className="text-2xl sm:text-5xl font-extrabold text-[#EA4A3E]">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Hours</div>
          </div>
          <div>
            <div className="text-2xl sm:text-5xl font-extrabold text-[#EA4A3E]">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Minutes</div>
          </div>
          <div>
            <div className="text-2xl sm:text-5xl font-extrabold text-[#EA4A3E]">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}
