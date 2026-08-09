"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import { Car, Settings, Footprints, CheckCircle2, ArrowRight, Circle } from "lucide-react"

export default function AdaptiveMobilityPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const solutions = [
    {
      title: "Push and Pull Control",
      desc: "Custom mechanical push-pull controls giving complete accelerator (pull action) and brake (push action) management from a single ergonomic lever mounted near the steering column.",
      features: [
        "Heavy-duty steel linkages with zero electronic lag",
        "Preserves factory foot pedals for secondary non-disabled drivers",
        "Optional integrated indicator and horn button controls",
      ],
      icon: Car,
      image: "/assets/services/hand-operated-controls.png",
    },
    {
      title: "Automatic Electronic Clutch",
      desc: "Automated clutch management for manual transmission cars. A micro-sensor on the gear stick triggers a servo motor to operate the clutch automatically during shifts.",
      features: [
        "Eliminates left-leg knee and hip joint fatigue in city traffic",
        "Dashboard toggle switch allows instant switching to standard foot clutch mode",
        "Calibrated anti-stall creep control for stop-and-go driving",
      ],
      icon: Settings,
      image: "/assets/services/electronic-auto-clutch.png",
    },
    {
      title: "Left Foot Accelerator",
      desc: "Quick-release pedal transfer unit designed for drivers with right-side lower limb immobility or stroke recovery.",
      features: [
        "Includes right pedal safety block guard to prevent accidental engagement",
        "Quick-release pin detaches assembly in seconds",
        "Exact OEM throttle response and sensitivity feel",
      ],
      icon: Footprints,
      image: "/assets/services/left-foot-accelerator.png",
    },
    {
      title: "One Hand Steering",
      desc: "Ergonomic steering wheel spinner knobs, counter-weights, and quick-attach steering attachments designed for single-handed wheel rotation.",
      features: [
        "Smooth ball-bearing rotational motion for effortless maneuvering",
        "Quick-release mechanism for easy removal",
        "Compatible with all vehicle steering wheel diameters",
      ],
      icon: Circle,
      image: "/assets/services/transmitter-one-hand-control.png",
    },
    {
      title: "Ring Accelerator & Right Hand Brake",
      desc: "Under-wheel or over-wheel electronic accelerator ring paired with a smooth right-hand brake lever for dual-hand steering control.",
      features: [
        "Squeeze or push actions to control throttle seamlessly",
        "Preserves factory steering wheel airbag safety systems",
        "Quick toggle between ring control and standard foot pedals",
      ],
      icon: Circle,
      image: "/assets/services/ring-accelerator-and-right-hand-brake.png",
    },
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Adaptive Vehicle Modification & Hand Controls",
    "provider": {
      "@type": "AutomotiveBusiness",
      "name": "Galaxy System",
      "telephone": "+919845056726",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Shankar Mutt, Nagapura, Rajajinagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560010",
        "addressCountry": "IN",
      },
    },
    "areaServed": "Karnataka, India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Adaptive Vehicle Modifications",
      "itemListElement": solutions.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-navy/15 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Vehicle Modifications</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-navy">
            Adaptive Driving & Vehicle Mobility
          </h1>
          <p className="text-base text-body max-w-2xl leading-relaxed">
            Custom-engineered driving controls, auto-clutch systems, and left-foot accelerators designed around individual independence.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="bg-white space-y-0 flex flex-col justify-between overflow-hidden group">
                  {/* Modern Image Container with Hover Zoom & Gradient Overlay */}
                  <div className="relative h-72 sm:h-80 w-full bg-slate-900 overflow-hidden border-b border-navy/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 bg-navy/90 border border-white/20 text-[0.65rem] font-bold uppercase tracking-wider text-sky">
                      {item.title}
                    </span>
                  </div>

                  <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 border border-navy/20 bg-mist flex items-center justify-center text-sky shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl font-medium text-navy">{item.title}</CardTitle>
                      </div>

                      <CardDescription className="text-xs text-body leading-relaxed">
                        {item.desc}
                      </CardDescription>

                      <div className="pt-2 space-y-2 border-t border-navy/10">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-navy">
                            <CheckCircle2 className="h-4 w-4 text-sky shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button onClick={() => setModalOpen(true)} variant="default" className="w-full">
                        Book Assessment For This Solution <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="p-8 bg-navy-dark text-white border border-white/10 text-center space-y-4">
            <Badge variant="dark" className="mx-auto">Rajajinagar Workshop Facility</Badge>
            <h3 className="text-2xl font-medium text-white">Test Controls In Our Demo Vehicle</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Visit our Rajajinagar workshop in Bengaluru to physically test hand controls, auto-clutch setups, and pedal transfers.
            </p>
            <div className="pt-2 flex justify-center">
              <Button onClick={() => setModalOpen(true)} variant="accent">
                Book Workshop Demo Visit
              </Button>
            </div>
          </div>

        </div>
      </section>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
