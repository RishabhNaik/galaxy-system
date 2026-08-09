import React from "react"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24 bg-mist">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-8">
        <div className="space-y-3">
          <Badge variant="default">Legal Policy</Badge>
          <h1 className="text-3xl sm:text-4xl font-medium text-navy">Privacy Policy</h1>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            Last Updated: January 2026 · Galaxy System Bengaluru
          </p>
        </div>

        <div className="p-8 bg-white border border-navy/15 space-y-6 text-xs text-body leading-relaxed">
          <h3 className="text-base font-bold text-navy">1. Information We Collect</h3>
          <p>
            When you request a consultation, assessment, or vehicle modification quote at Galaxy System, we collect information provided by you, such as your full name, phone number, email address, vehicle model, and mobility modification requirements.
          </p>

          <h3 className="text-base font-bold text-navy">2. Use of Information</h3>
          <p>
            Your information is strictly utilized to evaluate your vehicle adaptation requirements, schedule workshop consultations, communicate technical specifications, and provide customer support.
          </p>

          <h3 className="text-base font-bold text-navy">3. Information Sharing & Confidentiality</h3>
          <p>
            We do NOT sell, rent, or trade your personal data or medical mobility information to third-party marketers. Information is disclosed only to authorized engineers and staff directly involved in your vehicle fitting.
          </p>

          <h3 className="text-base font-bold text-navy">4. Contact Us</h3>
          <p>
            For questions regarding our privacy practices, please contact Galaxy System, Near Shankar Mutt, Nagapura, Rajajinagar, Bengaluru, KA 560010, or call +91 98450 56726.
          </p>
        </div>
      </div>
    </section>
  )
}
