"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize2, X, Sparkles, Instagram } from "lucide-react"

interface ReelItem {
  id: number
  title: string
  tag: string
  poster: string
  videoSrc?: string
  instagramId?: string
  duration: string
  views: string
  isInstagram?: boolean
}

const reelsData: ReelItem[] = [
  {
    id: 1,
    title: "Official Car Modification Showcase",
    tag: "Hand Controls",
    poster: "/assets/collage_1.jpg",
    instagramId: "DamoGt3CQIV",
    duration: "Reel",
    views: "Follow Us",
    isInstagram: true,
  },
  {
    id: 2,
    title: "Adaptive Mobility Solutions Demonstration",
    tag: "Auto Modification",
    poster: "/assets/collage_2.png",
    instagramId: "DYmLG2_Atr4",
    duration: "Reel",
    views: "Follow Us",
    isInstagram: true,
  },
  {
    id: 3,
    title: "Push-Pull Clutch Control Operations",
    tag: "Driving Controls",
    poster: "/assets/collage_3.png",
    instagramId: "DZ92AdvlKDb",
    duration: "Reel",
    views: "Follow Us",
    isInstagram: true,
  },
]

export function ReelCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expandedReel, setExpandedReel] = useState<ReelItem | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-navy/15">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
              Visual Demonstration Reels
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-navy">
              Adaptive Controls In Real-World Operation
            </h2>
          </div>
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-11 w-11 flex items-center justify-center border border-navy/20 bg-mist text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-11 w-11 flex items-center justify-center border border-navy/20 bg-mist text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Reel Deck */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 pb-6 scroll-smooth scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reelsData.map((reel) => {
            return (
              <div
                key={reel.id}
                className="snap-start shrink-0 w-[300px] sm:w-[328px] h-[480px] sm:h-[520px] relative overflow-hidden bg-black border border-navy/15 shadow-md"
              >
                <iframe
                  src={`https://www.instagram.com/reel/${reel.instagramId}/embed`}
                  className="w-full h-full border-0"
                  scrolling="no"
                  allowFullScreen
                />
              </div>
            )
          })}
        </div>

        {/* Mobile Navigation Controls (Positioned Below Embeds Deck on Right Side) */}
        <div className="flex justify-end items-center gap-3 pt-4 md:hidden">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="h-11 w-11 flex items-center justify-center border border-navy/20 bg-mist text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="h-11 w-11 flex items-center justify-center border border-navy/20 bg-mist text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>

      {/* Expanded Lightbox Reel Modal */}
      {expandedReel && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 animate-in fade-in">
          <div className="relative w-full max-w-[440px] bg-[#08121e] border border-white/20 shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header Bar */}
            <div className="p-4 bg-[#0c1a29] border-b border-white/15 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-sky" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  @galaxy_system_official
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.instagram.com/reel/${expandedReel.instagramId}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider bg-sky text-navy hover:bg-white transition-colors"
                >
                  Open in Instagram
                </a>
                <button
                  onClick={() => setExpandedReel(null)}
                  className="h-8 w-8 flex items-center justify-center border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
              {expandedReel.isInstagram ? (
                <iframe
                  src={`https://www.instagram.com/reel/${expandedReel.instagramId}/embed`}
                  className="absolute -top-[56px] -left-[1%] w-[102%] h-[calc(100%+114px)] border-0"
                  scrolling="no"
                  allowFullScreen
                />
              ) : (
                <video
                  src={expandedReel.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
