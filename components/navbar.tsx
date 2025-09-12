"use client"

import { 
  Menu, Phone, Mail,
  Instagram, Youtube, Twitter, Linkedin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/event", label: "EVENTS" },
    { href: "/awards", label: "AWARDS" },
    { href: "/competitions", label: "COMPETITIONS" },
    { href: "/contact", label: "CONTACT US" },
  ]

  const socialLinks = [
    { href: "https://x.com/BlrFitnessFest", label: "Twitter / X", icon: Twitter },
    { href: "#", label: "YouTube", icon: Youtube },
    { href: "https://www.instagram.com/bengaluru_fitness_fest/", label: "Instagram", icon: Instagram },
    { href: "https://www.linkedin.com/company/bengaluru-fitness-fest/", label: "LinkedIn", icon: Linkedin },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      
      {/* 🔹 Top Bar (desktop only) */}
      <div className="hidden md:block text-white py-2 max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#EA4A3E] rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-300">PHONE</p>
                <p className="text-sm">+91 91483 19993</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#EA4A3E] rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-300">EMAIL</p>
                <p className="text-sm">info@fitnessfest.in</p>
              </div>
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="flex space-x-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="bg-black w-full">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-5 flex justify-between items-center">
          {/* Logo */}
          <img
            src="/images/fitlogo.png"
            alt="Fitness Fest Logo"
            className="h-10 sm:h-12 md:h-14 w-auto"
          />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-red-500 font-medium text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              onClick={() => router.push("/tickets")}
              className="bg-[#EA4A3E] hover:bg-red-600 text-white px-3 sm:px-5 py-2 rounded-md font-semibold text-xs sm:text-sm"
            >
              BUY TICKETS
            </Button>
            <button
              className="lg:hidden text-white hover:text-red-500 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col space-y-3 px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-red-500 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-700 mt-3 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-white">+91 91483 19993</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-white">info@fitnessfest.in</p>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex space-x-4 pt-4 border-t border-gray-700 mt-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
