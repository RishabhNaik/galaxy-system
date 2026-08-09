"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import { Quote, Star, ArrowRight, CheckCircle2 } from "lucide-react"

export default function SuccessStoriesPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const stories = [
    {
      name: "Srinivas R.",
      location: "Bengaluru · Software Professional",
      vehicle: "Hyundai Creta (Automatic)",
      mod: "Push-Pull Driving Hand Controls",
      quote: "After my spinal cord injury, I thought driving was out of the question. Galaxy System custom engineered hand controls for my Creta. Now I commute to office daily without depending on anyone.",
      image: "/assets/hero-main-user.jpg",
    },
    {
      name: "Dr. Ananya Rao",
      location: "Mysuru · Medical Practitioner",
      vehicle: "Maruti Swift (Manual)",
      mod: "Electronic Auto-Clutch System",
      quote: "Heavy clutch pressure in city traffic was causing severe knee strain. The auto-clutch installed by Galaxy System allows seamless gear shifts with zero foot effort. Game changer!",
      image: "/assets/adaptive_driving_card.png",
    },
    {
      name: "Karthik M.",
      location: "Bengaluru · Entrepreneur",
      vehicle: "Honda City (Automatic)",
      mod: "Left-Foot Accelerator Transfer",
      quote: "Right leg nerve weakness made throttle control difficult. Galaxy System installed a quick-release left-foot accelerator pedal setup. Highly professional work and safety focus.",
      image: "/assets/hero-workshop.png",
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-[#0c1a29]/15 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Client Success Stories</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0c1a29]">
            Real Drivers, Real Independence
          </h1>
          <p className="text-base text-[#475569] max-w-2xl leading-relaxed">
            Discover how customized adaptive driving controls and vehicle modifications have enabled over 1,200 drivers across Karnataka to regain independence.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#eef5fa] border-b border-[#0c1a29]/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <Card key={idx} className="p-6 bg-white flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#4B9DCD]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-[#4B9DCD]/40" />

                  <p className="text-xs text-[#475569] leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0c1a29]/10 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-bold text-[#0c1a29]">{story.name}</h4>
                      <p className="text-[0.65rem] text-[#94a3b8] uppercase font-bold">{story.location}</p>
                    </div>
                  </div>
                  <div className="bg-[#eef5fa] p-3 text-[0.7rem] space-y-1 border border-[#0c1a29]/10">
                    <p><span className="font-bold text-[#0c1a29]">Vehicle:</span> {story.vehicle}</p>
                    <p><span className="font-bold text-[#4B9DCD]">Solution:</span> {story.mod}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-8 bg-[#0b1522] text-white border border-white/10 text-center space-y-4">
            <Badge variant="dark" className="mx-auto">Start Your Mobility Journey</Badge>
            <h3 className="text-2xl font-medium text-white">Let Us Custom Engineer A Setup For You</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Book a complimentary consultation at our Rajajinagar workshop to test hand controls and auto-clutch demo units.
            </p>
            <div className="pt-2 flex justify-center">
              <Button onClick={() => setModalOpen(true)} variant="accent">
                Book Consultation Now <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
