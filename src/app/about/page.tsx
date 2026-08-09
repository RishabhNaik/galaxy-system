"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import {
  Award,
  ShieldCheck,
  Wrench,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Users,
  MapPin,
  Clock,
  HeartHandshake,
} from "lucide-react"

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const awards = [
    {
      title: "Karma Veera Puraskara",
      subtitle: "Social Contribution Award, 2014",
      icon: Award,
    },
    {
      title: "Honorary Doctorate",
      subtitle: "Social Service Recognition",
      icon: GraduationCap,
    },
    {
      title: "Railway Committee Member",
      subtitle: "South Western Railway",
      icon: ShieldCheck,
    },
  ]

  const pillars = [
    {
      title: "Government Authorized",
      desc: "Officially licensed by Karnataka Government to perform legal, RTO-compliant adaptive vehicle modifications.",
      icon: ShieldCheck,
    },
    {
      title: "3,000–4,000+ Served",
      desc: "Over 15 years of dedicated service to differently abled drivers, families, and institutions across India.",
      icon: Users,
    },
    {
      title: "Fully Personalized",
      desc: "Every solution is custom assessed, designed, and fitted around individual mobility needs for a perfect personal fit.",
      icon: UserCheck,
    },
    {
      title: "Established Since 1994",
      desc: "Three decades of technical excellence in Bengaluru built entirely on trust and real-life outcomes.",
      icon: HeartHandshake,
    },
  ]

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Galaxy System & Founder Dr. Shiva Prasad Y B",
    "url": "https://galaxysystem.in/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Dr. Shiva Prasad Y B",
      "jobTitle": "Founder & Director",
      "worksFor": {
        "@type": "Organization",
        "name": "Galaxy System",
      },
      "description": "Karma Veera Puraskara Honoree, Kivi Italy Trained Specialist, Polio Survivor and Lead Adaptive Mobility Engineer in Bengaluru.",
      "award": ["Karma Veera Puraskara (2014)", "Honorary Doctorate in Social Service"],
      "knowsAbout": ["Adaptive Driving Controls", "Electronic Clutch Systems", "Left-Foot Accelerator Mods", "Prosthetics & Calipers"],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── Header Banner ────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-navy/15 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-3">
          <Badge variant="default">Our Story & Leadership</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-navy">
            Driven by Purpose, Built on Empathy
          </h1>
          <p className="text-base text-body max-w-2xl leading-relaxed">
            Founded by someone who lived the mobility challenge firsthand, turning personal experience into driving freedom for thousands across India.
          </p>
        </div>
      </section>

      {/* ── 1. About the Founder Section ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-navy/15 bg-dot-pattern bg-mesh-glow relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Biography & Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                The Founder
              </span>

              <div>
                <h2 className="text-3xl sm:text-4xl font-medium text-navy">
                  Dr. Shiva Prasad Y B
                </h2>
                <p className="text-sm font-semibold text-sky mt-1">
                  Founder & Director, Galaxy System
                </p>
              </div>

              <div className="space-y-4 text-sm text-body leading-relaxed">
                <p>
                  Dr. Shiva Prasad Y B is the founder and driving force behind Galaxy System. A right lower-limb polio survivor himself, he has experienced firsthand the frustration of navigating a world not designed for differently abled individuals, and discovering the profound freedom that the right adaptive solution can unlock.
                </p>
                <p>
                  His turning point came in <strong className="text-navy">2008</strong> when he purchased a Hyundai Verna and found virtually no safe, technically reliable, or RTO-compliant adaptive vehicle modification providers in India. He decided to be the solution. In <strong className="text-navy">2009</strong>, he redirected Galaxy System, which had initially operated in computers and peripherals since <strong className="text-navy">1994</strong>, entirely toward adaptive mobility.
                </p>
                <p>
                  Determined to bring world-class quality to India, Dr. Shiva Prasad pursued international training in <strong className="text-navy">2011</strong> with <strong className="text-navy">Kivi Mobility Freedom SRL in Italy</strong>, a leading European manufacturer of adaptive driving systems. This gave Galaxy System the technical foundation to serve customers with European-standard precision, safety, and care.
                </p>
                <p>
                  His selfless service has been nationally recognized with the <strong className="text-navy">Karma Veera Puraskara (2014)</strong> for outstanding social contribution and an <strong className="text-navy">Honorary Doctorate in Social Service</strong>. He continues to personally consult every customer who visits Galaxy System.
                </p>
              </div>

              {/* Awards Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-navy/10">
                {awards.map((award, i) => {
                  const Icon = award.icon
                  return (
                    <div key={i} className="p-4 bg-mist border border-navy/15 space-y-1">
                      <Icon className="h-5 w-5 text-sky mb-2" />
                      <h4 className="text-xs font-bold text-navy">{award.title}</h4>
                      <p className="text-[0.65rem] text-body">{award.subtitle}</p>
                    </div>
                  )
                })}
              </div>

              <div className="pt-2">
                <Button onClick={() => setModalOpen(true)} variant="default">
                  Book A Personal Consultation With Founder <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right: Founder Card & International Certification (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Founder Profile Visual Block */}
              <div className="border border-navy/20 bg-white overflow-hidden shadow-md group">
                <div className="relative h-[580px] sm:h-[640px] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src="/assets/founder.png"
                    alt="Dr. Shiva Prasad Y B - Founder of Galaxy System"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-navy/90 border border-white/20 text-[0.65rem] font-bold uppercase tracking-wider text-sky">
                    Founder & Director
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-medium text-white">Dr. Shiva Prasad Y B</h3>
                    <p className="text-xs text-sky font-semibold">30+ Years Adaptive Engineering & Leadership</p>
                  </div>
                </div>
                <div className="p-6 bg-white border-t border-navy/10 space-y-2">
                  <p className="text-xs text-body leading-relaxed italic">
                    "Mobility is not a privilege; it is the fundamental foundation of personal independence and human dignity."
                  </p>
                </div>
              </div>

              {/* Kivi Italy Certification Card */}
              <div className="p-6 bg-navy-dark text-white border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 border border-white/20 bg-white/10 flex items-center justify-center text-sky">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Kivi Mobility Freedom SRL</h4>
                    <p className="text-[0.65rem] text-sky uppercase font-bold tracking-wider">Italy-Certified Training</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Technically trained in Italy to manufacture and fit European-standard adaptive driving controls.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 2. About the Team & Workshop Engineers Section ─────────── */}
      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
              Our Engineering Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
              Skilled Technicians & Rehabilitation Specialists
            </h2>
            <p className="text-sm text-body leading-relaxed">
              Our engineering team works directly under Dr. Shiva Prasad's personal supervision. Every technician at Galaxy System is specialized in custom metal engineering, mechanical linkages, electronic auto-clutch calibration, and anatomical orthotic casting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white space-y-4">
              <div className="h-12 w-12 border border-navy/20 bg-mist flex items-center justify-center text-sky">
                <Wrench className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-medium text-navy">
                Engineering & Alignment Specialists
              </CardTitle>
              <CardDescription className="text-xs text-body leading-relaxed">
                Expert craftsmen specializing in non-destructive bracket mounting, push-pull hand control linkages, and pedal guards.
              </CardDescription>
            </Card>

            <Card className="p-6 bg-white space-y-4">
              <div className="h-12 w-12 border border-navy/20 bg-mist flex items-center justify-center text-sky">
                <UserCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-medium text-navy">
                Personalized Assessment Specialists
              </CardTitle>
              <CardDescription className="text-xs text-body leading-relaxed">
                Technicians dedicated to evaluating individual arm reach, leg strength, and seating height for custom driver setup.
              </CardDescription>
            </Card>

            <Card className="p-6 bg-white space-y-4">
              <div className="h-12 w-12 border border-navy/20 bg-mist flex items-center justify-center text-sky">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-medium text-navy">
                RTO & Safety Testing Team
              </CardTitle>
              <CardDescription className="text-xs text-body leading-relaxed">
                Ensuring every vehicle modification complies fully with Karnataka RTO norms and insurance endorsement requirements.
              </CardDescription>
            </Card>
          </div>

          <div className="relative h-80 border border-navy/20 bg-slate-900 overflow-hidden">
            <Image
              src="/assets/hero-workshop.png"
              alt="Galaxy System Engineering Team Workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent flex items-end p-8 text-white">
              <div>
                <h4 className="text-xl font-medium text-white">Rajajinagar Engineering & Fitting Workshop</h4>
                <p className="text-xs text-slate-300">Dedicated alignment jigs, demo vehicle setups, and precision engineering equipment.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. About Galaxy System Section ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                About Galaxy System
              </span>

              <h2 className="text-3xl sm:text-4xl font-medium text-navy">
                Bengaluru's Premier Adaptive Mobility Specialist
              </h2>

              <div className="space-y-4 text-sm text-body leading-relaxed">
                <p>
                  Galaxy System is a Bengaluru-based mobility solutions provider with over 15 years of specialized experience in custom adaptive driving modifications and advanced prosthetic and orthotic limbs for differently abled individuals across India.
                </p>
                <p>
                  We are <strong className="text-navy">officially authorized by the Government of Karnataka</strong> to conduct vehicle modifications for disabled persons, ensuring every modification we carry out is fully legal, RTO-compliant, and covered by motor insurance without issue.
                </p>
                <p>
                  Unlike dealers who sell pre-packaged, generic equipment, Galaxy System works <strong className="text-navy">directly with each individual customer</strong>. Dr. Shiva Prasad personally assesses every client and customizes each solution to their specific disability profile, vehicle make, and daily driving needs.
                </p>
                <p>
                  We operate from two locations: our <strong className="text-navy">Nagapura office</strong> (consultation and assessment, near Shankar Mutt) and our <strong className="text-navy">Rajajinagar garage & engineering workshop</strong> (vehicle modification and fitting). We serve customers from across Karnataka and neighboring states.
                </p>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon
                return (
                  <div key={idx} className="p-6 bg-mist border border-navy/15 space-y-3">
                    <div className="h-10 w-10 border border-navy/20 bg-white flex items-center justify-center text-sky">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy">{p.title}</h3>
                    <p className="text-xs text-body leading-relaxed">{p.desc}</p>
                  </div>
                )
              })}
            </div>

          </div>

          {/* Bottom Banner */}
          <div className="p-8 bg-navy-dark text-white border border-white/10 text-center space-y-4">
            <Badge variant="dark" className="mx-auto">Schedule A Consultation</Badge>
            <h3 className="text-2xl font-medium text-white">Ready To Explore Custom Adaptive Solutions?</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Dr. Shiva Prasad and the Galaxy System team are available at the Rajajinagar workshop to personally guide you.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button onClick={() => setModalOpen(true)} variant="accent">
                Book Consultation With Dr. Shiva Prasad
              </Button>
            </div>
          </div>

        </div>
      </section>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
