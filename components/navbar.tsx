"use client"

import {
  Menu, X, Phone, Mail,
  Instagram, Youtube, Twitter, Linkedin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative group text-white font-medium text-sm transition-colors"
              >
                {label}
                <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-[#EA4A3E] transition-transform duration-500 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4 cursor-pointer">
            <Button
              onClick={() => router.push("/tickets")}
              className="cursor-pointer bg-[#EA4A3E] hover:bg-red-600 text-white px-3 sm:px-5 py-2 rounded-md font-semibold text-xs sm:text-sm"
            >
              BUY TICKETS
            </Button>
            <button
              className="lg:hidden text-white hover:text-red-500 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col space-y-3 px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-red-500 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
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
