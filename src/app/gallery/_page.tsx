"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ConsultationModal } from "@/components/consultation-modal"
import { Eye, X, Filter } from "lucide-react"

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const items = [
    {
      title: "Custom Push-Pull Hand Control Setup",
      category: "hand-controls",
      src: "/assets/gallery-1.png",
      desc: "Precision mechanical hand control lever installed cleanly beside the steering column.",
    },
    {
      title: "Electronic Auto-Clutch Servo Assembly",
      category: "hand-controls",
      src: "/assets/gallery-2.png",
      desc: "Microprocessor-driven actuator system calibrated for smooth gear shifting.",
    },
    {
      title: "Left-Foot Accelerator Transfer Unit",
      category: "vehicles",
      src: "/assets/gallery-3.png",
      desc: "Quick-release dual pedal transfer mechanism featuring right pedal guard block.",
    },
    {
      title: "Endoskeletal Modular Leg Prosthesis",
      category: "prosthetics",
      src: "/assets/gallery-4.png",
      desc: "Anatomically contoured carbon-fiber leg socket with energy-return foot.",
    },
    {
      title: "90-Degree Swivel Passenger Seat Transfer",
      category: "vehicles",
      src: "/assets/gallery-5.png",
      desc: "Swivel seat base allowing smooth outward rotation for wheelchair entry.",
    },
    {
      title: "Rajajinagar Workshop Precision Fitting Bay",
      category: "workshop",
      src: "/assets/gallery-6.png",
      desc: "Dedicated engineering bay equipped with laser alignment jigs and trial setups.",
    },
  ]

  const categories = [
    { id: "all", label: "All Modifications" },
    { id: "vehicles", label: "Adaptive Vehicles" },
    { id: "hand-controls", label: "Hand Controls" },
    { id: "prosthetics", label: "Prosthetic Limbs" },
    { id: "workshop", label: "Workshop Setup" },
  ]

  const filteredItems = activeCategory === "all"
    ? items
    : items.filter((item) => item.category === activeCategory)

  return (
    <>
      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-navy/15 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Modification Showcase</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-navy">
            Modifications & Work Gallery
          </h1>
          <p className="text-base text-body max-w-2xl leading-relaxed">
            Inspect real vehicle installations, hand control mechanisms, swivel seat setups, and prosthetic fittings developed at Galaxy System.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
          
          {/* Category Filter Tabs (Square Badges) */}
          <div className="flex flex-wrap items-center gap-2 border-b border-navy/15 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-navy mr-2 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" /> Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy border-navy/20 hover:border-navy"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item.src)}
                className="group border border-navy/20 bg-white overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 bg-slate-900 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/40 bg-black/50 text-xs font-semibold uppercase tracking-wider">
                      <Eye className="h-4 w-4" /> View Full Image
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  <Badge variant="secondary">{item.category}</Badge>
                  <h3 className="text-lg font-medium text-navy pt-1">{item.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-navy-dark text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-medium text-white">Want To See Control Fits For Your Specific Car?</h3>
              <p className="text-xs text-slate-300">Visit our Rajajinagar workshop to test demo vehicle controls in person.</p>
            </div>
            <Button onClick={() => setModalOpen(true)} variant="accent" size="lg">
              Book Workshop Demo
            </Button>
          </div>

        </div>
      </section>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-2 bg-navy border border-white/20">
            <div className="relative h-[70vh] w-full">
              <Image
                src={selectedImage}
                alt="Enlarged View"
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
