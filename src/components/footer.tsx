import React from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 text-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/galaxy_system_logo.svg"
                alt="Galaxy System Logo"
                width={160}
                height={40}
                className="h-9 w-auto invert brightness-0 text-white"
              />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-sm">
              Adaptive mobility solutions & custom vehicle modifications for physically challenged drivers. Certified engineering, precision craftsmanship, and safety focused.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/galaxy_system_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Galaxy System on Instagram"
                className="h-9 w-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky hover:border-sky transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Galaxy-System/61590076568473/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Galaxy System on Facebook"
                className="h-9 w-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky hover:border-sky transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@GalaxySystem-offical"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Galaxy System on YouTube"
                className="h-9 w-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky hover:border-sky transition-all"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-[0.65rem] font-bold uppercase tracking-wider text-sky">
                Bengaluru, Karnataka · India
              </span>
            </div>
          </div>

          {/* Core Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky">
              Adaptive Solutions
            </h3>
            <ul className="space-y-2 text-xs text-slate-200 font-medium">
              <li>
                <Link href="/solutions/adaptive-mobility" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Hand-Operated Driving Controls <ArrowUpRight className="h-3 w-3 opacity-80" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/adaptive-mobility" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Electronic Auto-Clutch Systems <ArrowUpRight className="h-3 w-3 opacity-80" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/adaptive-mobility" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Left-Foot Accelerator Mods <ArrowUpRight className="h-3 w-3 opacity-80" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/prosthetics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Advanced Prosthetic Limbs <ArrowUpRight className="h-3 w-3 opacity-80" />
                </Link>
              </li>

            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-200 font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Galaxy System</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ & Guidance</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Consultation</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact & Workshop Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky">
              Locations & Contact
            </h3>
            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-sky mt-0.5" />
                <div>
                  <span className="block font-bold text-white uppercase tracking-wider text-[0.6rem]">Office (Consultation)</span>
                  <span>Near Shankar Mutt, Nagapura, Rajajinagar, Bengaluru, KA 560010</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-sky mt-0.5" />
                <div>
                  <span className="block font-bold text-white uppercase tracking-wider text-[0.6rem]">Fitting Workshop</span>
                  <span>Rajajinagar, Bengaluru, KA 560010</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="h-4 w-4 shrink-0 text-sky" />
                <a href="tel:+919845056726" className="hover:text-white transition-colors">+91 98450 56726</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-sky" />
                <a href="mailto:shiv.galaxysystem@gmail.com" className="hover:text-white transition-colors">shiv.galaxysystem@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Clock className="h-4 w-4 shrink-0 text-sky" />
                <span>Mon to Sat: 9:30 AM to 5:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-normal">
          <p>© {new Date().getFullYear()} Galaxy System. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
