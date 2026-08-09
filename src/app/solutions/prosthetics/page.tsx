"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationModal } from "@/components/consultation-modal"
import { Activity, CheckCircle2, ArrowRight } from "lucide-react"

export default function ProstheticsPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const items = [
    {
      title: "Foot Orthoses (FOs)",
      tag: "Orthoses",
      desc: "Shoe inserts and custom orthotic footwear engineered to correct foot posture, relieve pressure pain, and distribute weight evenly across the foot.",
      specs: ["Custom heel cup & arch contouring", "Pressure relief for diabetic/metabolic feet", "Fits standard & athletic footwear"],
      image: "/assets/solution-prosthetics.png",
    },
    {
      title: "Ankle-Foot Orthoses (AFOs)",
      tag: "Orthoses",
      desc: "Devices extending from the calf to the foot, commonly prescribed to treat drop foot, post-stroke gait weakness, and stabilize the ankle joint.",
      specs: ["Dynamic carbon-fiber spring assist", "Rigid or hinged ankle options", "Custom thermoplastic moulding"],
      image: "/assets/normal_prosthetic.png",
    },
    {
      title: "Knee Orthoses (KOs) & KAFOs",
      tag: "Orthoses",
      desc: "Knee braces (KOs) or comprehensive devices spanning hip to foot (KAFOs) to protect ligaments, reduce joint pain, or support weak limb muscles.",
      specs: ["Drop-lock or automatic knee joints", "Post-polio mobility support", "Lightweight structural composite shell"],
      image: "/assets/normal_prosthetic.png",
    },
    {
      title: "Spinal Orthoses",
      tag: "Orthoses",
      desc: "Back and neck braces (including cervical orthoses and TLSOs) utilized to immobilize the spine, correct scoliosis curvature, and protect against fractures.",
      specs: ["TLSO scoliosis correction jackets", "Cervical collar stabilization", "Breathable inner foam lining"],
      image: "/assets/solution-prosthetics.png",
    },
    {
      title: "Upper-Limb Orthoses",
      tag: "Orthoses",
      desc: "Wrist-hand orthoses (WHOs) or arm splints used to relieve conditions like carpal tunnel syndrome, joint strain, or immobilize joints post-surgery.",
      specs: ["Anatomical wrist & thumb spica immobilizers", "Post-operative elbow positioners", "Adjustable tension straps"],
      image: "/assets/prosthetics_card.png",
    },
    {
      title: "Lower-Limb Prostheses",
      tag: "Prostheses",
      desc: "Artificial legs customized by amputation level: transtibial (below-knee), transfemoral (above-knee), and hip disarticulation.",
      specs: ["Anatomical custom socket fabrication", "Energy-storing carbon fiber feet", "Hydraulic & pneumatic knee joint units"],
      image: "/assets/prosthetics_card.png",
    },
    {
      title: "Upper-Limb Prostheses",
      tag: "Prostheses",
      desc: "Artificial arms, hands, and fingers ranging from cosmetic/passive devices to body-powered hooks and myoelectric (bionic) arms using muscle signals.",
      specs: ["Myoelectric muscle sensor control", "Body-powered cable suspension", "Custom silicone cosmetic skin covers"],
      image: "/assets/prosthetics_card.png",
    },
    {
      title: "Exoskeletal vs. Endoskeletal Designs",
      tag: "Design Options",
      desc: "Exoskeletal prostheses feature a hard, rigid outer shell shaped like a limb. Endoskeletal models feature a central, adjustable inner skeleton covered by soft skin-like material.",
      specs: ["Exoskeletal: High durability & heavy work resistance", "Endoskeletal: Lightweight, highly adjustable & modular", "Cosmetic foam cover customization"],
      image: "/assets/prosthetics_card.png",
    },
  ]

  const prostheticsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Galaxy System Orthotics & Prosthetics Center",
    "medicalSpecialty": ["Orthopedics", "PhysicalTherapy"],
    "provider": {
      "@type": "MedicalOrganization",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Prosthetic & Orthotic Devices",
      "itemListElement": items.map((i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalDevice",
          "name": i.title,
          "description": i.desc,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prostheticsSchema) }}
      />

      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-navy/15 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Orthotics & Prosthetics</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-navy">
            Custom Prosthetic Limbs & Orthotic Bracing
          </h1>
          <p className="text-base text-body max-w-2xl leading-relaxed">
            Custom-molded endoskeletal limbs, carbon-fiber orthoses, and mobility calipers tailored to body geometry for active independence.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {items.map((item, idx) => (
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
                    {item.tag}
                  </span>
                </div>

                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 border border-navy/20 bg-mist flex items-center justify-center text-sky shrink-0">
                        <Activity className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl font-medium text-navy">{item.title}</CardTitle>
                    </div>

                    <CardDescription className="text-xs text-body leading-relaxed">
                      {item.desc}
                    </CardDescription>

                    <div className="pt-2 space-y-2 border-t border-navy/10">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-navy">
                          <CheckCircle2 className="h-4 w-4 text-sky shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button onClick={() => setModalOpen(true)} variant="default" className="w-full">
                      Book Fitting Assessment <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-8 bg-navy-dark text-white border border-white/10 text-center space-y-4">
            <Badge variant="dark" className="mx-auto">Anatomical Socket Casting & Fitting</Badge>
            <h3 className="text-2xl font-medium text-white">Schedule A Personal Evaluation</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Our orthotic technicians provide individualized anatomical fitting evaluations at our Bengaluru center.
            </p>
            <div className="pt-2 flex justify-center">
              <Button onClick={() => setModalOpen(true)} variant="accent">
                Book Consultation Now
              </Button>
            </div>
          </div>

        </div>
      </section>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
