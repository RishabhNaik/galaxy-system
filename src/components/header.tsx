"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Calendar, Instagram, Facebook, Youtube } from "lucide-react"
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
      <header className="fixed top-0 z-50 w-full border-b border-navy/15 bg-white shadow-sm transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:py-4 lg:px-8">
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
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors border ${
                      isActive
                        ? "bg-navy text-white border-navy"
                        : "border-transparent text-navy hover:text-navy hover:border-navy/30 hover:bg-slate-100"
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
              className="inline-flex h-10 w-10 items-center justify-center border border-navy/30 bg-slate-100 text-navy transition-colors hover:bg-slate-200"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Slides from Left to Right 75% Width) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Black Backdrop Overlay (Clicking closes menu) */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* 75% Width Left Drawer Panel (Slides from left to right) */}
          <div className="relative z-10 w-[78%] max-w-[340px] h-full bg-white p-6 text-navy shadow-2xl flex flex-col border-r border-navy/20 animate-in slide-in-from-left duration-300 ease-out overflow-y-auto">
            <div className="flex items-center justify-between border-b border-navy/15 pb-4 mb-6">
              <Image
                src="/galaxy_system_logo.svg"
                alt="Galaxy System Logo"
                width={130}
                height={32}
                className="h-8 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="h-9 w-9 flex items-center justify-center border border-navy/20 bg-slate-100 text-navy hover:bg-slate-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2.5 overflow-y-auto py-2 flex-grow">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-3.5 text-xs font-bold uppercase tracking-wider border transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-navy text-white border-navy"
                        : "bg-slate-50 border-navy/15 text-navy hover:bg-navy hover:text-white hover:border-navy"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-navy/15 flex flex-col gap-3">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setModalOpen(true)
                }}
                variant="default"
                size="lg"
                className="w-full justify-center text-xs font-bold"
              >
                Book Free Assessment
              </Button>
              <a
                href="tel:+919845056726"
                className="flex items-center justify-center gap-2 py-2.5 border border-navy/20 bg-slate-50 text-navy text-[0.7rem] font-bold uppercase tracking-wider hover:bg-slate-100"
              >
                <Phone className="h-3.5 w-3.5 text-sky-dark" />
                Call +91 98450 56726
              </a>

              {/* Mobile Drawer Social Links */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/galaxy_system_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-8 w-8 rounded-full border border-navy/20 bg-mist flex items-center justify-center text-navy hover:bg-sky hover:text-white hover:border-sky transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/people/Galaxy-System/61590076568473/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-8 w-8 rounded-full border border-navy/20 bg-mist flex items-center justify-center text-navy hover:bg-sky hover:text-white hover:border-sky transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@GalaxySystem-offical"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="h-8 w-8 rounded-full border border-navy/20 bg-mist flex items-center justify-center text-navy hover:bg-sky hover:text-white hover:border-sky transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
