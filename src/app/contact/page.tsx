"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2, ShieldCheck } from "lucide-react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    solutionType: "Adaptive Driving Controls",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Galaxy System Bengaluru",
    "url": "https://galaxysystem.in/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Galaxy System",
      "telephone": "+919845056726",
      "email": "info@galaxysystem.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Shankar Mutt, Nagapura, Rajajinagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560010",
        "addressCountry": "IN",
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="bg-gradient-to-br from-[#d4e5f4] via-[#e5eff8] to-[#f0f6fc] border-b border-navy/15 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-4">
          <Badge variant="default">Contact & Consultation</Badge>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-navy">
            Speak With Our Engineering Team
          </h1>
          <p className="text-base text-body max-w-2xl leading-relaxed">
            Get personalized guidance, vehicle compatibility reviews, and transparent advice regarding adaptive mobility solutions.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-mist border-b border-navy/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Map Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-sky-light border border-sky text-[0.7rem] font-bold uppercase tracking-wider text-sky-dark">
                  Workshop & Office Location
                </span>
                <h2 className="text-2xl font-medium text-navy">Rajajinagar, Bengaluru</h2>
              </div>

              <Card className="p-6 bg-white space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy">Office & Workshop Address</h4>
                    <p className="text-xs text-body leading-relaxed mt-1">
                      Near Shankar Mutt, Nagapura, Rajajinagar, Bengaluru, Karnataka 560010
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-navy/10 pt-3">
                  <Phone className="h-5 w-5 text-sky shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy">Direct Phone</h4>
                    <a href="tel:+919845056726" className="text-xs text-body hover:text-sky transition-colors font-semibold">
                      +91 98450 56726
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-navy/10 pt-3">
                  <Mail className="h-5 w-5 text-sky shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy">Email Enquiries</h4>
                    <a href="mailto:shiv.galaxysystem@gmail.com" className="text-xs text-body hover:text-sky transition-colors">
                      shiv.galaxysystem@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-navy/10 pt-3">
                  <Clock className="h-5 w-5 text-sky shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-navy">Working Hours</h3>
                    <p className="text-xs text-body">Mon to Sat: 9:30 AM to 5:00 PM</p>
                    <p className="text-[0.7rem] text-slate-400">Sunday Closed</p>
                  </div>
                </div>
              </Card>

              <div className="p-6 bg-navy-dark text-white border border-white/10 space-y-3">
                <Badge variant="dark">Consultation Promise</Badge>
                <h4 className="text-base font-medium text-white">No-Obligation Mobility Guidance</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We evaluate your individual physical requirements and explain options clearly before any modification begins.
                </p>
              </div>
            </div>

            {/* Right: Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <Card className="p-6 lg:p-8 bg-white border border-navy/20">
                {!submitted ? (
                  <>
                    <CardHeader className="p-0 mb-6 space-y-2">
                      <CardTitle className="text-2xl font-medium text-navy">
                        Book A Free Mobility Assessment
                      </CardTitle>
                      <CardDescription className="text-xs text-body">
                        Fill in your details below. Our team will contact you within 24 hours.
                      </CardDescription>
                    </CardHeader>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                          Full Name *
                        </label>
                        <Input
                          required
                          placeholder="e.g. Ramesh V"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                            Phone Number *
                          </label>
                          <Input
                            required
                            type="tel"
                            placeholder="+91 98450 00000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                          Solution Category
                        </label>
                        <select
                          className="w-full h-11 border border-navy/20 bg-white px-4 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-sky rounded-none"
                          value={formData.solutionType}
                          onChange={(e) => setFormData({ ...formData, solutionType: e.target.value })}
                        >
                          <option value="Adaptive Driving Controls">Adaptive Driving Hand Controls</option>
                          <option value="Electronic Clutch Systems">Electronic Auto-Clutch Systems</option>
                          <option value="Left Foot Accelerator">Left Foot Accelerator Setup</option>
                          <option value="Ring Accelerator Systems">Steering Wheel Ring Accelerators</option>
                          <option value="Prosthetic & Orthotic Limbs">Custom Prosthetic & Orthotic Limbs</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                          Vehicle Model / Details
                        </label>
                        <Textarea
                          rows={4}
                          placeholder="Specify your vehicle make, model, or your specific mobility assistance requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <div className="pt-2">
                        <Button type="submit" disabled={loading} variant="default" className="w-full">
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              Submitting Request...
                            </>
                          ) : (
                            "Submit Consultation Request"
                          )}
                        </Button>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-[0.7rem] text-slate-400 pt-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-sky" />
                        Your contact details are strictly confidential.
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="h-16 w-16 bg-sky-light border border-sky text-sky-dark flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-medium text-navy">Consultation Booked Successfully</h3>
                    <p className="text-sm text-body max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-navy">{formData.name}</span>. Our workshop team in Rajajinagar will get in touch with you shortly.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => setSubmitted(false)} variant="default">
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
