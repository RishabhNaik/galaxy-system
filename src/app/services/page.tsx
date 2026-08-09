"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import {
  Car,
  Settings,
  Footprints,
  Activity,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  Circle,
} from "lucide-react"

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const mobilityServices = [
    {
      title: "Push and Pull Control",
      desc: "Custom mechanical push-pull hand control levers enabling full acceleration (pull) and braking (push) without foot pedal usage.",
      tag: "Hand Controls",
      icon: Car,
      image: "/assets/services/hand-operated-controls.png",
      href: "/solutions/adaptive-mobility",
    },
    {
      title: "Automatic Electronic Clutch",
      desc: "Micro-sensor automated clutch control for manual vehicles, eliminating left-leg knee stress and clutch operation in city traffic.",
      tag: "Auto-Clutch",
      icon: Settings,
      image: "/assets/services/electronic-auto-clutch.png",
      href: "/solutions/adaptive-mobility",
    },
    {
      title: "Left Foot Accelerator",
      desc: "Quick-release pedal transfer mechanism enabling smooth left-leg throttle control while safely blocking the original right pedal.",
      tag: "Pedal Transfer",
      icon: Footprints,
      image: "/assets/services/left-foot-accelerator.png",
      href: "/solutions/adaptive-mobility",
    },
    {
      title: "One Hand Steering",
      desc: "Ergonomic steering knobs, spinners, and quick-attach steering attachments designed for effortless single-handed vehicle control.",
      tag: "Steering Assist",
      icon: Circle,
      image: "/assets/services/transmitter-one-hand-control.png",
      href: "/solutions/adaptive-mobility",
    },
    {
      title: "Ring Accelerator & Right Hand Brake",
      desc: "Under/over steering wheel electronic ring throttle combined with a comfortable right-hand lever brake for intuitive driving.",
      tag: "Ring Controls",
      icon: Circle,
      image: "/assets/services/ring-accelerator-and-right-hand-brake.png",
      href: "/solutions/adaptive-mobility",
    },
  ]

  const orthosesServices = [
    {
      title: "Foot Orthoses (FOs)",
      desc: "Custom shoe inserts and orthotic footwear engineered to correct foot posture, relieve pressure pain, and distribute body weight evenly.",
      tag: "Foot Support",
      icon: ShieldCheck,
      image: "/assets/solution-prosthetics.png",
      href: "/solutions/prosthetics",
    },
    {
      title: "Ankle-Foot Orthoses (AFOs)",
      desc: "Anatomically contoured devices extending from calf to foot, commonly prescribed to treat foot drop and stabilize the ankle joint.",
      tag: "Ankle & Foot",
      icon: ShieldCheck,
      image: "/assets/normal_prosthetic.png",
      href: "/solutions/prosthetics",
    },
    {
      title: "Knee Orthoses (KOs) & KAFOs",
      desc: "Knee braces (KOs) or full-leg calipers spanning hip to foot (KAFOs) to protect ligaments, reduce joint pain, or support weak muscles.",
      tag: "Leg Calipers",
      icon: ShieldCheck,
      image: "/assets/normal_prosthetic.png",
      href: "/solutions/prosthetics",
    },
    {
      title: "Spinal Orthoses",
      desc: "Back and neck braces (cervical orthoses, TLSOs) designed to immobilize the spine, correct scoliosis alignment, and protect against fractures.",
      tag: "Spine & Neck",
      icon: ShieldCheck,
      image: "/assets/solution-prosthetics.png",
      href: "/solutions/prosthetics",
    },
    {
      title: "Upper-Limb Orthoses",
      desc: "Wrist-hand orthoses (WHOs) and arm splints engineered to relieve conditions like carpal tunnel syndrome or immobilize joints post-surgery.",
      tag: "Arm & Hand",
      icon: ShieldCheck,
      image: "/assets/prosthetics_card.png",
      href: "/solutions/prosthetics",
    },
  ]

  const prosthesesServices = [
    {
      title: "Lower-Limb Prostheses",
      desc: "Custom artificial legs categorized by amputation level: transtibial (below-knee), transfemoral (above-knee), and hip disarticulation.",
      tag: "Artificial Legs",
      icon: Activity,
      image: "/assets/prosthetics_card.png",
      href: "/solutions/prosthetics",
    },
    {
      title: "Upper-Limb Prostheses",
      desc: "Artificial arms, hands, and fingers ranging from passive cosmetic devices to body-powered hooks and bionic myoelectric limbs.",
      tag: "Artificial Arms",
      icon: Activity,
      image: "/assets/prosthetics_card.png",
      href: "/solutions/prosthetics",
    },
    {
      title: "Exoskeletal vs. Endoskeletal Designs",
      desc: "Options between rigid outer shell exoskeletal limbs or modern modular endoskeletal systems with inner skeletons and soft cosmetic covers.",
      tag: "Design Options",
      icon: Activity,
      image: "/assets/prosthetics_card.png",
      href: "/solutions/prosthetics",
    },
  ]

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Galaxy System Automotive Modifications, Orthoses & Prostheses",
    "description": "RTO-approved adaptive vehicle modifications, orthotic braces, and custom prostheses in Bengaluru.",
    "itemListElement": [
      ...mobilityServices.map((s, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": s.title,
        "description": s.desc,
        "url": `https://galaxysystem.in${s.href}`,
      })),
      ...orthosesServices.map((s, idx) => ({
        "@type": "ListItem",
        "position": mobilityServices.length + idx + 1,
        "name": s.title,
        "description": s.desc,
        "url": `https://galaxysystem.in${s.href}`,
      })),
      ...prosthesesServices.map((s, idx) => ({
        "@type": "ListItem",
        "position": mobilityServices.length + orthosesServices.length + idx + 1,
        "name": s.title,
        "description": s.desc,
        "url": `https://galaxysystem.in${s.href}`,
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ── Hero Banner Section ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy text-white pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-navy/15">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-workshop.png"
            alt="Galaxy System Workshop Floor"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/85 to-navy-dark/95" />
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-navy-dark/85 border border-white/10 text-[0.65rem] font-bold uppercase tracking-widest text-sky backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky"></span>
              </span>
              Comprehensive Engineering Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Adaptive Mobility & <span className="text-sky font-bold">Prosthetic Services</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore our full spectrum of RTO-approved vehicle modifications and custom anatomical prosthetics & orthotics. Designed and fitted for personal independence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 1: Adaptive Automotive Services ─────────────── */}
      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                RTO-Approved Vehicle Modifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
                Automotive Mobility Services
              </h2>
            </div>
            <p className="text-sm text-body max-w-md">
              Every vehicle adaptation preserves OEM chassis safety guidelines while configuring controls around individual ergonomics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobilityServices.map((item, idx) => {
              const IconComp = item.icon
              return (
                <Card key={idx} className="flex flex-col justify-between bg-white hover:border-sky transition-all overflow-hidden p-0 group">
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden border-b border-navy/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 px-2 py-0.5 bg-navy/90 border border-white/20 text-[0.6rem] font-bold uppercase tracking-wider text-sky">
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

                    <div className="pt-4 border-t border-navy/10">
                      <Button asChild variant="outline" size="sm" className="w-full justify-between group-hover:border-sky">
                        <Link href={item.href}>
                          Detailed Specifications <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 2: Types of Orthoses ─────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                Clinical Support & Orthotics
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
                Types of Orthoses
              </h2>
            </div>
            <p className="text-sm text-body max-w-md">
              Orthoses are generally grouped by the body region they support or their functional design, aiding posture, alignment, and muscle weakness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orthosesServices.map((item, idx) => {
              const IconComp = item.icon
              return (
                <Card key={idx} className="flex flex-col justify-between bg-white hover:border-sky transition-all overflow-hidden p-0 group">
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden border-b border-navy/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 px-2 py-0.5 bg-navy/90 border border-white/20 text-[0.6rem] font-bold uppercase tracking-wider text-sky">
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

                    <div className="pt-4 border-t border-navy/10">
                      <Button asChild variant="outline" size="sm" className="w-full justify-between group-hover:border-sky">
                        <Link href={item.href}>
                          Explore Orthoses <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Prostheses Division ───────────────────────── */}
      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                Limb Restoration
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
                Artificial Limbs & Prostheses
              </h2>
            </div>
            <p className="text-sm text-body max-w-md">
              Lower-limb and upper-limb artificial device solutions custom-fitted around body geometry and amputation level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prosthesesServices.map((item, idx) => {
              const IconComp = item.icon
              return (
                <Card key={idx} className="flex flex-col justify-between bg-white hover:border-sky transition-all overflow-hidden p-0 group">
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden border-b border-navy/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 px-2 py-0.5 bg-navy/90 border border-white/20 text-[0.6rem] font-bold uppercase tracking-wider text-sky">
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

                    <div className="pt-4 border-t border-navy/10">
                      <Button asChild variant="outline" size="sm" className="w-full justify-between group-hover:border-sky">
                        <Link href={item.href}>
                          Explore Prostheses <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Bottom Call To Action ──────────────────────── */}
      <section className="py-16 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center space-y-6">
          <Badge variant="dark" className="mx-auto">Expert Guidance & Assessment</Badge>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Have Questions About Vehicle Modification or Limb Fitting?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Reach out directly to our engineering team in Rajajinagar, Bengaluru for transparent advice and compatibility reviews.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              variant="accent"
              size="lg"
            >
              <a href="tel:+919845056726" className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" /> Call +91 98450 56726
              </a>
            </Button>
            <Button
              onClick={() => setModalOpen(true)}
              variant="secondary"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10"
            >
              Send a Message
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
