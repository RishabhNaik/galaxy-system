"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import { Award, ShieldCheck, Users, Car, CheckCircle2, ArrowRight } from "lucide-react"

export default function AchievementsPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const milestones = [
    {
      year: "2010",
      title: "Workshop Established in Bengaluru",
      desc: "Founded with a mission to develop customized, safe adaptive driving hand controls for polio survivors and amputees.",
    },
    {
      year: "2015",
      title: "1,000+ Vehicle Fittings Milestone",
      desc: "Empowered over 1,000 drivers across Karnataka, Tamil Nadu, Andhra Pradesh, and Kerala with custom controls.",
    },
    {
      year: "2018",
      title: "Electronic Auto-Clutch System Launch",
      desc: "Introduced micro-controlled auto-clutch technology, rendering manual cars accessible without left pedal effort.",
    },
    {
      year: "2023",
      title: "Prosthetics & Orthotics Division Integration",
      desc: "Expanded into custom-molded endoskeletal limbs, carbon-fiber orthotic bracing, and AFO/KAFO calipers.",
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-[#0c1a29]/15 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Company Milestones</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0c1a29]">
            Our Achievements & Legacy
          </h1>
          <p className="text-base text-[#475569] max-w-2xl leading-relaxed">
            15+ years of adaptive mobility innovation, precision engineering, and dedicated service to physically challenged individuals.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#eef5fa] border-b border-[#0c1a29]/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white space-y-2 text-center">
              <p className="text-4xl font-bold text-[#4B9DCD]">1,200+</p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c1a29]">Vehicles Fitted</h4>
              <p className="text-xs text-[#475569]">Across Karnataka & South India</p>
            </Card>
            <Card className="p-6 bg-white space-y-2 text-center">
              <p className="text-4xl font-bold text-[#4B9DCD]">15+ Yrs</p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c1a29]">Engineering Experience</h4>
              <p className="text-xs text-[#475569]">Custom fitting & engineering</p>
            </Card>
            <Card className="p-6 bg-white space-y-2 text-center">
              <p className="text-4xl font-bold text-[#4B9DCD]">100%</p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c1a29]">Safety Record</h4>
              <p className="text-xs text-[#475569]">Strict mechanical load testing</p>
            </Card>
            <Card className="p-6 bg-white space-y-2 text-center">
              <p className="text-4xl font-bold text-[#4B9DCD]">Rajajinagar</p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c1a29]">Workshop Hub</h4>
              <p className="text-xs text-[#475569]">Dedicated demo vehicle facility</p>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-[#0c1a29] border-b border-[#0c1a29]/15 pb-3">Key Milestones</h2>
            <div className="space-y-4">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#0c1a29]/15 flex flex-col sm:flex-row gap-6 items-start">
                  <span className="px-4 py-2 bg-[#0c1a29] text-white font-bold text-base shrink-0">
                    {m.year}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium text-[#0c1a29]">{m.title}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-[#0b1522] text-white border border-white/10 text-center space-y-4">
            <Badge variant="dark" className="mx-auto">Consult With Our Experts</Badge>
            <h3 className="text-2xl font-medium text-white">Experience Galaxy Engineering Precision</h3>
            <div className="pt-2 flex justify-center">
              <Button onClick={() => setModalOpen(true)} variant="accent">
                Book A Consultation <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
