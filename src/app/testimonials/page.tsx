"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import { Quote, Star, ArrowRight } from "lucide-react"

export default function TestimonialsPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const reviews = [
    {
      name: "Prashanth Shetty",
      role: "Bank Officer, Mangaluru",
      comment: "The hand control system fitted on my Baleno is robust and extremely smooth. Drives on coastal highways feel completely safe and effortless.",
      rating: 5,
    },
    {
      name: "Meenakshi Sundaram",
      role: "Teacher, Bengaluru",
      comment: "Galaxy System custom fitted push-pull hand controls in our automatic hatchback. Driving to school daily is now extremely easy and comfortable.",
      rating: 5,
    },
    {
      name: "Vikram Reddy",
      role: "Civil Engineer, Ballari",
      comment: "Left foot accelerator modification was done within 2 days at their Rajajinagar workshop. Highly reliable installation and neat finishing.",
      rating: 5,
    },
    {
      name: "Dharmesh Shah",
      role: "Business Owner, Hubballi",
      comment: "Auto-clutch system works seamlessly in heavy traffic. Great technical advice and transparent guidance from the team.",
      rating: 5,
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-[#0c1a29]/15 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Client Testimonials</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0c1a29]">
            Customer Reviews & Words of Trust
          </h1>
          <p className="text-base text-[#475569] max-w-2xl leading-relaxed">
            Read what physically challenged drivers and families across Karnataka say about Galaxy System's vehicle modifications and service.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#eef5fa] border-b border-[#0c1a29]/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <Card key={i} className="p-6 bg-white space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#4B9DCD]">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-[#4B9DCD]/40" />
                  <p className="text-xs text-[#475569] leading-relaxed italic">
                    "{r.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#0c1a29]/10">
                  <h4 className="text-sm font-bold text-[#0c1a29]">{r.name}</h4>
                  <p className="text-[0.65rem] font-semibold text-[#94a3b8] uppercase">{r.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-8 bg-[#0b1522] text-white border border-white/10 text-center space-y-4">
            <Badge variant="dark" className="mx-auto">Ready To Experience Independent Driving?</Badge>
            <h3 className="text-2xl font-medium text-white">Book A Free Assessment With Our Team</h3>
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
