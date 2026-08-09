"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ConsultationModal } from "@/components/consultation-modal"
import { Search, HelpCircle, PhoneCall, ArrowRight } from "lucide-react"

export default function FAQPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const faqData = [
    {
      category: "Adaptive Vehicle Controls",
      items: [
        {
          q: "Can adaptive driving controls be installed in any car model?",
          a: "Yes. Galaxy System custom designs and fits hand control assemblies for hatchbacks, sedans, compact SUVs, and automatic or manual transmission cars across major brands (Maruti, Hyundai, Tata, Honda, Mahindra, Toyota, etc.).",
        },
        {
          q: "Is training required after installing hand controls?",
          a: "While our push-pull hand controls are intuitive, familiarization practice in a controlled space or off-road area is recommended to build muscle memory and confidence before driving on public highways.",
        },
        {
          q: "Can non-disabled family members still drive the vehicle?",
          a: "Absolutely! Our hand control installations preserve original foot accelerator and brake pedals, allowing conventional driving by family members without removing the adaptive system.",
        },
        {
          q: "Are adaptive driving modifications reversible?",
          a: "Yes. Most hand control setups use non-destructive mounting brackets that can be cleanly uninstalled when selling or exchanging the vehicle.",
        },
      ],
    },
    {
      category: "Electronic Auto-Clutch Systems",
      items: [
        {
          q: "What is an Electronic Clutch System?",
          a: "An Electronic Auto-Clutch automates clutch actuation in manual cars. A micro-sensor embedded on the gear lever activates a heavy-duty servo motor when shifting gears, removing the need to depress the left foot clutch pedal.",
        },
        {
          q: "Does auto-clutch cause engine stalling in heavy traffic?",
          a: "No. The microprocessor is calibrated to sense engine RPM and vehicle speed, providing smooth creep functionality during stop-and-go city traffic without stalling.",
        },
        {
          q: "Can I switch back to normal foot clutch driving anytime?",
          a: "Yes. A dashboard toggle switch lets you switch between Electronic Auto-Clutch mode and standard manual foot-clutch operation instantaneously.",
        },
      ],
    },
    {
      category: "Prosthetics & Clinical Support",
      items: [
        {
          q: "Do you manufacture custom prosthetic and orthotic limbs?",
          a: "Yes! Our orthotics division engineers custom endoskeletal modular prosthetic legs, carbon-fiber orthoses, AFO/KAFO calipers, and supportive spinal bracing.",
        },
        {
          q: "How long does a custom fitting consultation take?",
          a: "Initial assessment takes approximately 45 to 60 minutes at our Rajajinagar workshop. We evaluate physical movement range, review vehicle specifications, and provide a clear technical roadmap.",
        },
      ],
    },
  ]

  const allFaqs = faqData.flatMap((cat) => cat.items)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-navy/15 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Knowledge Base & FAQ</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-navy">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-body max-w-2xl leading-relaxed">
            Detailed answers regarding vehicle compatibility, hand control mechanics, electronic clutch operation, and custom prosthetic fittings.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search FAQ keywords (e.g. clutch, pedal, reverse, fitting)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-11 pr-4 bg-white border border-navy/20 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-sky rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-12">
          
          {faqData.map((cat, catIdx) => {
            const filteredItems = cat.items.filter(
              (item) =>
                item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.a.toLowerCase().includes(searchQuery.toLowerCase())
            )

            if (filteredItems.length === 0) return null

            return (
              <div key={catIdx} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-navy/15 pb-3">
                  <HelpCircle className="h-5 w-5 text-sky" />
                  <h2 className="text-xl font-medium text-navy">{cat.category}</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {filteredItems.map((item, itemIdx) => (
                    <AccordionItem key={itemIdx} value={`cat-${catIdx}-item-${itemIdx}`}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          })}

          {/* Direct Support Card */}
          <div className="p-8 bg-navy-dark text-white border border-white/10 text-center space-y-4 mt-12">
            <Badge variant="dark" className="mx-auto">Still Have Questions?</Badge>
            <h3 className="text-2xl font-medium text-white">Speak Directly With Our Workshop Team</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Our engineers are available Monday through Saturday to answer specific questions regarding your vehicle make, model, or physical adaptation needs.
            </p>
            <div className="pt-2 flex justify-center gap-4">
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
