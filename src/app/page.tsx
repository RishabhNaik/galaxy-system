"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ConsultationModal } from "@/components/consultation-modal"
import { ReelCarousel } from "@/components/reel-carousel"
import {
  Car,
  Settings,
  Footprints,
  Circle,
  Activity,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  Award,
  Sparkles,
  UserCheck,
  HeartHandshake,
  Star,
  Quote,
  MapPin,
  Navigation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const reviewsContainerRef = React.useRef<HTMLDivElement>(null)

  const scrollReviews = (direction: "left" | "right") => {
    if (reviewsContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360
      reviewsContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const solutions = [
    {
      title: "Push and Pull Control",
      desc: "Custom mechanical push-pull hand control levers enabling full acceleration (pull) and braking (push) for lower limb mobility.",
      icon: Car,
      link: "/solutions/adaptive-mobility",
      tag: "Automotive Services",
      image: "/assets/services/hand-operated-controls.png",
      linkLabel: "Learn Technical Details",
    },
    {
      title: "Automatic Electronic Clutch",
      desc: "Automated clutch management for manual vehicles that eliminates left-leg clutch pedal stress during dense city traffic.",
      icon: Settings,
      link: "/solutions/adaptive-mobility",
      tag: "Automotive Services",
      image: "/assets/services/electronic-auto-clutch.png",
      linkLabel: "Learn Technical Details",
    },
    {
      title: "Left Foot Accelerator",
      desc: "Precision quick-release pedal transfer mechanism engineered for drivers requiring left-side throttle control.",
      icon: Footprints,
      link: "/solutions/adaptive-mobility",
      tag: "Automotive Services",
      image: "/assets/services/left-foot-accelerator.png",
      linkLabel: "Learn Technical Details",
    },
    {
      title: "One Hand Steering",
      desc: "Ergonomic steering knobs, spinners, and quick-attach steering attachments designed for single-handed wheel rotation.",
      icon: Car,
      link: "/solutions/adaptive-mobility",
      tag: "Automotive Services",
      image: "/assets/services/transmitter-one-hand-control.png",
      linkLabel: "Learn Technical Details",
    },
    {
      title: "Ring Accelerator & Right Hand Brake",
      desc: "Under/over steering wheel electronic ring throttle combined with a comfortable right-hand lever brake for dual-hand steering control.",
      icon: Circle,
      link: "/solutions/adaptive-mobility",
      tag: "Automotive Services",
      image: "/assets/services/ring-accelerator-and-right-hand-brake.png",
      linkLabel: "Learn Technical Details",
    },
    {
      title: "Prosthetics & Orthotics",
      desc: "Custom-fitted artificial limbs, lower/upper limb prostheses, and AFO/KAFO orthotic calipers engineered for anatomical alignment.",
      icon: Footprints,
      link: "/solutions/prosthetics",
      tag: "Mobility Support",
      image: "/assets/prosthetics_card.png",
      linkLabel: "View Prosthetic Lineup",
    },
  ]

  const faqs = [
    {
      q: "Can adaptive driving controls be installed in any vehicle model?",
      a: "Yes. Galaxy System custom fits controls for hatchbacks, sedans, SUVs, and automatic or manual transmissions. Each installation is customized based on your vehicle's mechanical specifications and personal ergonomic needs.",
    },
    {
      q: "What is an Electronic Clutch System and how does it help?",
      a: "An Electronic Auto-Clutch allows you to drive a manual car without pressing the foot clutch pedal. A sensor on the gear stick automatically engages and releases the clutch when shifting gears.",
    },
    {
      q: "Are vehicle modifications reversible if I sell the car later?",
      a: "Most of our adaptive hand control and left-foot accelerator installations preserve original chassis brackets, allowing clean restoration back to factory settings whenever required.",
    },
    {
      q: "Do I need a preliminary assessment before installing hand controls?",
      a: "Yes! We strongly recommend a complimentary consultation at our Rajajinagar workshop where our engineering team evaluates your movement range and vehicle type to ensure maximum safety.",
    },
    {
      q: "Do you offer custom prosthetic and orthotic fitting in Bengaluru?",
      a: "Yes, our team manufactures custom-fitted prosthetic limbs, AFO/KAFO calipers, and modular orthotic support devices designed around individual anatomy.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  }

  const testimonials = [
    {
      name: "Nagaraj M.",
      location: "Bengaluru",
      vehicle: "Hyundai Creta",
      system: "Push-Pull Controls & Auto Clutch",
      quote: "After my accident, driving felt impossible. Dr. Shiva Prasad and the team at Galaxy System modified my Creta with custom hand controls. Now I drive to work daily with complete independence!",
      rating: 5,
    },
    {
      name: "Suresh Kumar",
      location: "Mysuru",
      vehicle: "Maruti Swift Dzire",
      system: "Left Foot Accelerator System",
      quote: "The left-foot accelerator fitting was precise and smooth. RTO endorsement was seamless thanks to their official certification. Highly recommend Galaxy System for any driver.",
      rating: 5,
    },
    {
      name: "Anita Rao",
      location: "Hubballi",
      vehicle: "Prosthetic Limb Fitting",
      system: "Endoskeletal Modular Prosthesis",
      quote: "Extremely comfortable custom socket fitting. They analyzed my walking gait and personalized every detail. Excellent service and compassionate medical care.",
      rating: 5,
    },
    {
      name: "Rajesh Gowda",
      location: "Tumakuru",
      vehicle: "Kia Seltos",
      system: "One Hand Steering & Ring Brake",
      quote: "The one-hand steering spinner and ring accelerator setup are incredibly responsive. The vehicle control feels natural, safe, and effortless on highways.",
      rating: 5,
    },
    {
      name: "Dr. Priya V.",
      location: "Mangaluru",
      vehicle: "Honda City",
      system: "Automatic Electronic Auto Clutch",
      quote: "As a practicing physician, daily commuting was getting painful. The automatic electronic clutch system installed by Galaxy System completely eliminated foot fatigue.",
      rating: 5,
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. Hero Section (Centered Blueprint Engineering Theme with Background Image) ── */}
      <section className="relative overflow-hidden border-b border-navy/15 text-white pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 bg-navy">
        
        {/* Full-Bleed Background Image with Modern Dark Gradients & Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-workshop.png"
            alt="Galaxy System Modification Workshop Floor"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/85 to-navy-dark/95" />
          <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
        </div>



        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          
          {/* Centered Content Column */}
          <div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
            

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.98] text-white">
                EMPOWERING <span className="text-sky font-bold">PHYSICAL INDEPENDENCE</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                Custom adaptive vehicle controls and prosthetic & orthotic systems engineered to restore personal freedom, confidence, and mobility for people with physical challenges.
              </p>
            </div>
            {/* Action Buttons (Centered) */}
            <div className="flex flex-col justify-center items-center gap-4">
              <Button
                asChild
                variant="default"
                size="lg"
                className="w-full sm:w-auto bg-sky text-white border-sky hover:bg-sky-dark"
              >
                <Link href="#services">Explore Solutions</Link>
              </Button>
            </div>

            {/* Technical Specifications Highlights (Horizontal Strip) */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="space-y-1">
                <span className="block text-2xl sm:text-3xl font-bold tracking-tight text-white">12,000+</span>
                <span className="text-[0.65rem] sm:text-xs text-slate-300 font-semibold uppercase tracking-wider">Lives Empowered</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl sm:text-3xl font-bold tracking-tight text-white">15+ Yrs</span>
                <span className="block text-[0.65rem] uppercase tracking-widest text-slate-400 font-semibold">Custom Engineering</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl sm:text-3xl font-bold tracking-tight text-white">100%</span>
                <span className="block text-[0.65rem] uppercase tracking-widest text-slate-400 font-semibold">Safety Certified</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-navy-dark/85 border border-white/10 text-[0.65rem] font-bold uppercase tracking-widest text-sky shadow-lg backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky"></span>
              </span>
              RTO-APPROVED ADAPTIVE MOBILITY
            </div>
          </div>

          

        </div>
      </section>

      {/* ── 2. Services Grid Section ───────────────────────────────── */}
      <section id="services" className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                Our Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
                Engineered Around Real-Life Independence
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-sm text-body max-w-md hidden lg:block">
                Every system is personalized after assessing your physical movement range, vehicle type, and daily travel routines.
              </p>
              <Button asChild variant="outline" size="sm" className="border-navy/20 text-navy hover:bg-navy hover:text-white shrink-0">
                <Link href="/services" className="flex items-center gap-2">
                  View All Services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => {
              const IconComp = item.icon
              return (
                <Card key={idx} className="flex flex-col justify-between bg-white hover:border-sky transition-all duration-300 card-hover-lift overflow-hidden p-0 group">
                  {/* Modern Image Container */}
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden border-b border-navy/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3.5 px-2.5 py-1 bg-navy/90 border border-white/20 text-[0.65rem] font-bold uppercase tracking-wider text-sky shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <CardHeader className="p-0 space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 border border-navy/20 bg-mist flex items-center justify-center text-sky">
                          <IconComp className="h-4 w-4" />
                        </div>
                        <CardTitle className="text-lg font-medium text-navy group-hover:text-sky transition-colors">
                          {item.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-xs text-body leading-relaxed pt-1">
                        {item.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-0 pt-3 border-t border-navy/10">
                      <Link
                        href={item.link}
                        className="text-xs font-bold uppercase tracking-wider text-navy hover:text-sky flex items-center gap-1 transition-colors"
                      >
                        {item.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </CardFooter>
                  </div>
                </Card>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="default" size="lg">
              <Link href="/services" className="inline-flex items-center gap-2">
                View All Services & Technical Specifications <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 3. Video Reel Showcase Carousel (9:16 Orientation) ──── */}
      <ReelCarousel />

      {/* ── 3.5 Testimonials Carousel Section (Directly After Visual Demonstration Reels) ── */}
      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
          
          {/* Header Row with Navigation Arrows */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-white border border-navy/20 text-[0.7rem] font-bold uppercase tracking-wider text-navy">
                Real Driver Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
                Trusted By Over 12,000+ Empowered Drivers
              </h2>
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollReviews("left")}
                aria-label="Scroll reviews left"
                className="h-11 w-11 flex items-center justify-center border border-navy/20 bg-white text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollReviews("right")}
                aria-label="Scroll reviews right"
                className="h-11 w-11 flex items-center justify-center border border-navy/20 bg-white text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Reviews Carousel Deck */}
          <div
            ref={reviewsContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 pb-4 scroll-smooth scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[300px] sm:w-[360px] p-6 bg-white border border-navy/15 shadow-sm card-hover-lift flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-navy/20" />
                  </div>
                  <p className="text-sm text-body leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-navy/10 space-y-1">
                  <h4 className="text-sm font-bold text-navy">{t.name}</h4>
                  <p className="text-xs text-sky-dark font-semibold">{t.vehicle} · {t.system}</p>
                  <p className="text-[0.65rem] text-slate-400 uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows (Below Carousel Deck on Right Side) */}
          <div className="flex justify-end items-center gap-3 pt-2 md:hidden">
            <button
              onClick={() => scrollReviews("left")}
              aria-label="Scroll reviews left"
              className="h-10 w-10 flex items-center justify-center border border-navy/20 bg-white text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollReviews("right")}
              aria-label="Scroll reviews right"
              className="h-10 w-10 flex items-center justify-center border border-navy/20 bg-white text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ── 5. FAQ Section ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
              Everything You Need To Know
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8 pt-4">
            <p className="text-xs text-body mb-4">Have more specific questions regarding your car model or mobility need?</p>
            <Button asChild variant="outline" size="sm">
              <Link href="/faq">View All FAQs & Technical Answers</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* ── 5.5 Workshop Location & Map Section (Above Footer & Bottom CTA) ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                <MapPin className="h-3.5 w-3.5" />
                Visit Our Workshop
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
                Bengaluru Fitting & Assessment Center
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Galaxy+System+Shankar+Mutt+Rajajinagar+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-sky transition-colors cursor-pointer shrink-0"
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Workshop Address & Hours Card */}
            <div className="lg:col-span-4 p-8 bg-[#08121e] text-white border border-navy/20 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">Galaxy System</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Custom Adaptive Driving Modifications & Prosthetic Center
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-sky shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white uppercase tracking-wider text-[0.65rem] mb-0.5">Address</p>
                      <p className="text-slate-300 leading-normal">
                        Near Shankar Mutt, Nagapura, Rajajinagar, Bengaluru, Karnataka 560010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-sky shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white uppercase tracking-wider text-[0.65rem] mb-0.5">Operating Hours</p>
                      <p className="text-slate-300">Mon to Sat: 9:30 AM to 5:00 PM</p>
                      <p className="text-slate-400 text-[0.65rem]">Sunday Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall className="h-4 w-4 text-sky shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white uppercase tracking-wider text-[0.65rem] mb-0.5">Helpline</p>
                      <a href="tel:+919845056726" className="text-sky hover:underline font-bold">
                        +91 98450 56726
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setModalOpen(true)}
                variant="default"
                size="lg"
                className="w-full bg-sky text-navy hover:bg-white font-bold"
              >
                Schedule Assessment Visit
              </Button>
            </div>

            {/* Google Map Embedded Iframe */}
            <div className="lg:col-span-8 min-h-[380px] border border-navy/20 bg-slate-900 shadow-md relative overflow-hidden">
              <iframe
                title="Galaxy System Workshop Location Map"
                src="https://maps.google.com/maps?q=Galaxy%20System%20Shankar%20Mutt%20Rajajinagar%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. Bottom Call to Action Banner ────────────────────────── */}
      <section className="py-16 bg-navy text-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center space-y-6">
          <Badge variant="dark" className="mx-auto">Empowering Independent Travel</Badge>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white max-w-2xl mx-auto">
            Ready To Restore Complete Driving & Mobility Independence?
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Contact our engineering team today for transparent guidance, vehicle compatibility reviews, and custom fitting assessments.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => setModalOpen(true)}
              variant="accent"
              size="lg"
            >
              Book Consultation Now
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-navy"
            >
              <a href="tel:+919845056726">Call +91 98450 56726</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
