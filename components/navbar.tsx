"use client"

import {
  Menu, X, Phone, Mail,
  Instagram, Youtube, Twitter, Linkedin,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAwardsOpen, setIsAwardsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socialLinks = [
    { href: "https://x.com/BlrFitnessFest", label: "Twitter / X", icon: Twitter },
    { href: "#", label: "YouTube", icon: Youtube },
    { href: "https://www.instagram.com/bengaluru_fitness_fest/", label: "Instagram", icon: Instagram },
    { href: "https://www.linkedin.com/company/bengaluru-fitness-fest/", label: "LinkedIn", icon: Linkedin },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      {/* TOP BAR */}
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

          {/* Social Icons */}
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

      {/* MAIN NAV */}
      <div className="bg-black w-full">
        <div
          className={`max-w-6xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "py-3" : "py-6"
          }`}
        >

          {/* Logo */}
          <Link href="/" passHref>
            <img
              src="/images/fitlogo.png"
              alt="Fitness Fest Logo"
              className={`w-auto cursor-pointer transition-all duration-300 ${
                isScrolled ? "h-12 sm:h-14 md:h-14" : "h-16 sm:h-20 md:h-24"
              }`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center space-x-8">

            <Link href="/" className="relative group text-white font-medium text-sm">
              HOME
              <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-[#EA4A3E] transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>

            <Link href="/about" className="relative group text-white font-medium text-sm">
              ABOUT US
              <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-[#EA4A3E] transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>

            <Link href="/event" className="relative group text-white font-medium text-sm">
              EVENTS
              <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-[#EA4A3E] transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>

            {/* AWARDS */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white font-medium text-sm cursor-pointer">
                AWARDS
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              {/* Dropdown */}
              <div
                className="
                  absolute top-full left-0 pt-2
                  hidden group-hover:block 
                  bg-black/95 border border-gray-700 rounded-md 
                  w-48 shadow-xl z-20
                "
              >
                <Link href="/awards" className="block px-4 py-2 text-sm text-white hover:bg-[#EA4A3E]">
                  Award Categories
                </Link>

                <Link href="/awards/vote" className="block px-4 py-2 text-sm text-white hover:bg-[#EA4A3E]">
                  Vote Now
                </Link>
              </div>
            </div>

            <Link href="/competitions" className="relative group text-white font-medium text-sm">
              COMPETITIONS
              <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-[#EA4A3E] transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>

                        <Link href="/5k-run" className="relative group text-white font-medium text-sm">
              5K RUN
              <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-[#EA4A3E] transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>

            {/* ✅ UPDATED PATH */}
            <Link href="/register" className="relative group text-white font-medium text-sm">
              CONTACT US
              <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-[#EA4A3E] transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              onClick={() => router.push("/tickets")}
              className="bg-[#EA4A3E] hover:bg-red-600 text-white px-4 sm:px-5 py-2 rounded-md font-semibold text-xs sm:text-sm"
            >
              BUY TICKETS
            </Button>

            <button
              className="lg:hidden text-white hover:text-red-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col px-4 py-4 space-y-3">

            <Link 
              href="/" 
              className="text-white font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>

            <Link 
              href="/about" 
              className="text-white font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>

            <Link 
              href="/event" 
              className="text-white font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EVENTS
            </Link>

            {/* Mobile Awards Accordion */}
            <div>
              <button
                className="text-white font-medium py-2 flex justify-between w-full"
                onClick={() => setIsAwardsOpen(!isAwardsOpen)}
              >
                AWARDS
                <ChevronDown className={`w-5 h-5 transition ${isAwardsOpen ? "rotate-180" : ""}`} />
              </button>

              {isAwardsOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">

                  <Link 
                    href="/awards" 
                    className="text-gray-300 text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Award Categories
                  </Link>

                  <Link 
                    href="/awards/vote" 
                    className="text-gray-300 text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Vote Now
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/competitions" 
              className="text-white font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COMPETITIONS
            </Link>

            {/* ✅ UPDATED PATH */}
            <Link 
              href="/register" 
              className="text-white font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>

          </nav>
        </div>
      )}

    </header>
  )
}
