import React from "react"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24 bg-mist">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-8">
        <div className="space-y-3">
          <Badge variant="default">Terms of Service</Badge>
          <h1 className="text-3xl sm:text-4xl font-medium text-navy">Terms & Conditions</h1>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            Last Updated: January 2026 · Galaxy System Bengaluru
          </p>
        </div>

        <div className="p-8 bg-white border border-navy/15 space-y-6 text-xs text-body leading-relaxed">
          <h3 className="text-base font-bold text-navy">1. Custom Engineering & Modifications</h3>
          <p>
            All adaptive vehicle controls, hand controls, left-foot accelerators, and electronic auto-clutch systems installed by Galaxy System are customized based on individual assessment and user specifications.
          </p>

          <h3 className="text-base font-bold text-navy">2. Familiarization & Practice</h3>
          <p>
            Users agree to undertake familiarization and practice in off-highway or controlled locations before operating modified vehicles on public roadways.
          </p>

          <h3 className="text-base font-bold text-navy">3. Inspection & Warranty</h3>
          <p>
            Modifications installed at our Rajajinagar workshop include ongoing inspection support. Any unauthorized structural alterations by third parties void mechanical warranties.
          </p>
        </div>
      </div>
    </section>
  )
}
