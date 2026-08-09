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
          <div className="flex items-center gap-3">
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
                className="snap-start shrink-0 w-[280px] sm:w-[320px] h-[480px] sm:h-[540px] relative border border-navy/20 bg-navy text-white shadow-lg overflow-hidden group transition-all duration-300 hover:border-sky"
              >
                {/* Instagram Iframe Element - Always loaded for native cover/thumbnail and player */}
                <div className="w-full h-full bg-black overflow-hidden relative">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.instagramId}/embed`}
                    className="absolute top-0 left-0 w-full h-[106%] border-0"
                    scrolling="no"
                    allowFullScreen
                  />
                </div>

                {/* Top Controls Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-end z-20 pointer-events-none">
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <a
                      href="https://www.instagram.com/galaxy_system_official/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider bg-black/75 border border-white/25 text-white hover:bg-sky transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      View Profile
                    </a>
                    <button
                      onClick={() => setExpandedReel(reel)}
                      className="h-8 w-8 flex items-center justify-center bg-black/70 border border-white/20 text-white hover:bg-[#4B9DCD] transition-colors cursor-pointer"
                      aria-label="Expand video"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Expanded Lightbox Reel Modal */}
      {expandedReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-0 sm:p-4 animate-in fade-in">
          <button
            onClick={() => setExpandedReel(null)}
            className="absolute top-4 right-4 z-40 h-10 w-10 rounded-full border border-white/20 bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative w-full max-w-[420px] aspect-[9/16] max-h-screen sm:max-h-[92vh] bg-black shadow-2xl overflow-hidden flex items-center justify-center border border-white/10 sm:rounded-xl">
            {expandedReel.isInstagram ? (
              <iframe
                src={`https://www.instagram.com/reel/${expandedReel.instagramId}/embed`}
                className="w-full h-full border-0"
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
      )}
    </section>
  )
}
