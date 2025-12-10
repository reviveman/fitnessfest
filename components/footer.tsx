"use client"

import { useState } from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white py-16"
      style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* 🔹 Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Logo + Description */}
          <div>
            <img
              src="/images/fitlogo.png"
              alt="Fitness Fest Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm mb-5 text-gray-300">
              Empowering healthier lifestyles through movement, community, and inspiration.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/BengaluruFitnessFest/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EA4A3E] p-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/BlrFitnessFest"
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EA4A3E] p-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/bengaluru_fitness_fest/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EA4A3E] p-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EA4A3E] p-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about">About the Festival</a></li>
              <li><a href="/event">Schedule</a></li>
              <li><a href="#">Wellness Updates</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          {/* Column 3: Other Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OTHER PAGES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Support</a></li>
              <li><a href="/register">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/about/maxx">Organiser</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">JOIN OUR NEWSLETTER</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to receive the latest updates, event news, and exclusive fitness tips straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email.."
                required
                className="w-full rounded-full px-4 py-3 mb-3 text-gray-900 bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#EA4A3E] hover:bg-pink-700 rounded-full  cursor-pointer px-4 py-3 font-semibold text-white transition-colors"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "SUBSCRIBE NOW"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-400 mt-3"> Thank you for subscribing!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-3">❌ Something went wrong. Try again.</p>
            )}
          </div>
        </div>

        {/* 🔹 Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms & Condition</a>
            <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
            <a href="/refund-policy" className="hover:text-white">Refund-Policy</a>
          </div>
          <div>
            © 2026 <span className="font-semibold">Maxx Business Media Pvt. Ltd.</span> All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
