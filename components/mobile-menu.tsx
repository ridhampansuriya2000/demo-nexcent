"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="text-[#263238] hover:text-[#4caf4f] py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#" className="text-[#263238] hover:text-[#4caf4f] py-2" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="#" className="text-[#263238] hover:text-[#4caf4f] py-2" onClick={() => setIsOpen(false)}>
              Community
            </Link>
            <Link href="#" className="text-[#263238] hover:text-[#4caf4f] py-2" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="#" className="text-[#263238] hover:text-[#4caf4f] py-2" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <button className="bg-[#4caf4f] text-white px-4 py-2 rounded-md text-sm w-full mt-2">Register Now →</button>
          </nav>
        </div>
      )}
    </div>
  )
}
