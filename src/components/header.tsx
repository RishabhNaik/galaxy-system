"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationModal } from "@/components/consultation-modal"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Adaptive Mobility", href: "/solutions/adaptive-mobility" },
    { name: "Prosthetics", href: "/solutions/prosthetics" },
    { name: "About Us", href: "/about" },
    // { name: "Stories", href: "/stories" },
    // { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-navy/15 bg-mist/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:py-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/galaxy_system_logo.svg"
              alt="Galaxy System Logo"
              width={180}
              height={45}
              className="h-9 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 xl:flex">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                      isActive
                        ? "bg-white text-navy border-navy"
                        : "border-transparent text-body hover:text-navy hover:border-navy/20 hover:bg-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>

            <Button
              onClick={() => setModalOpen(true)}
              variant="default"
              size="sm"
              className="flex items-center gap-2"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 xl:hidden">
            <Button
              onClick={() => setModalOpen(true)}
              variant="default"
              size="sm"
              className="hidden sm:flex text-[0.65rem] px-3 py-1.5"
            >
              Book Consultation
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center border border-navy/20 bg-white text-navy transition-colors hover:bg-slate-100"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Solid High-Contrast Geometry) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#08121e] p-6 text-white animate-in fade-in duration-200 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
            <Image
              src="/galaxy_system_logo.svg"
              alt="Galaxy System Logo"
              width={140}
              height={35}
              className="h-8 w-auto invert brightness-0 text-white"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="h-10 w-10 flex items-center justify-center border border-white/20 bg-white/10 text-white hover:bg-white/20"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2.5 overflow-y-auto py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider border border-white/15 bg-[#0f2136] hover:border-sky hover:bg-sky/25 transition-all text-white flex items-center justify-between"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
            <Button
              onClick={() => {
                setMobileMenuOpen(false)
                setModalOpen(true)
              }}
              variant="accent"
              size="lg"
              className="w-full justify-center"
            >
              Book Free Assessment
            </Button>
            <a
              href="tel:+919845056726"
              className="flex items-center justify-center gap-2 py-3 border border-white/20 text-slate-300 text-xs font-semibold uppercase tracking-wider hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call +91 98450 56726
            </a>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
