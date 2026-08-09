"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import { BookOpen, ArrowRight, UserCheck, Heart } from "lucide-react"

export default function StoriesPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const articles = [
    {
      title: "Understanding Adaptive Driving Controls: A Beginner's Guide",
      category: "Adaptive Driving",
      date: "Bengaluru · Mobility Guide",
      summary: "Explore how push-pull hand controls, electronic auto-clutch systems, and left-foot accelerators help persons with lower-limb challenges drive independently.",
      image: "/assets/story-1.png",
      href: "/stories",
    },
    {
      title: "How Electronic Auto-Clutch Reduces Driving Fatigue in City Traffic",
      category: "Clutch Automation",
      date: "Technical Insights",
      summary: "Struggling with heavy clutch pedal pressure in stop-and-go Bengaluru traffic? Learn how microprocessor auto-clutches operate automatically.",
      image: "/assets/story-2.png",
      href: "/stories",
    },
    {
      title: "Choosing the Right Prosthetic & Caliper Support for Daily Mobility",
      category: "Prosthetics & Orthotics",
      date: "Rehabilitation Engineering",
      summary: "A practical guide to custom endoskeletal modular leg fittings, carbon-fiber orthoses, and AFO/KAFO calipers designed for daily life.",
      image: "/assets/story-3.png",
      href: "/solutions/prosthetics",
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-navy/15 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Mobility Insights & Articles</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-navy">
            Mobility Stories & Educational Guides
          </h1>
          <p className="text-base text-body max-w-2xl leading-relaxed">
            Resources, technical guides, and real-life experiences helping individuals and families understand adaptive mobility solutions.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((item, idx) => (
              <Card key={idx} className="flex flex-col justify-between bg-white overflow-hidden p-0 group">
                <div className="relative h-56 bg-slate-900 border-b border-navy/10 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-navy/90 border border-white/20 text-[0.65rem] font-bold uppercase tracking-wider text-sky">
                    {item.category}
                  </span>
                </div>
                <CardHeader className="p-6 space-y-2 flex-grow">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-[0.65rem] font-bold uppercase text-slate-400">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg font-medium text-navy leading-snug">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-body leading-relaxed">
                    {item.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button onClick={() => setModalOpen(true)} variant="outline" size="sm" className="w-full">
                    Read Story / Consult Team <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="p-8 bg-navy-dark text-white border border-white/10 text-center space-y-4">
            <Badge variant="dark" className="mx-auto">Have Questions About Driving Mods?</Badge>
            <h3 className="text-2xl font-medium text-white">Get Personalized Guidance From Our Engineers</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Every driver's needs are unique. Speak directly with our technical team in Rajajinagar for tailored recommendations.
            </p>
            <div className="pt-2 flex justify-center">
              <Button onClick={() => setModalOpen(true)} variant="accent">
                Book Free Consultation
              </Button>
            </div>
          </div>

        </div>
      </section>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
