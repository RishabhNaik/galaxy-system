"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Loader2, Phone, ShieldCheck } from "lucide-react"

interface ConsultationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    solutionType: "Adaptive Driving Controls",
    message: "",
  })

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: "",
      phone: "",
      email: "",
      solutionType: "Adaptive Driving Controls",
      message: "",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border border-navy/20">
        {!submitted ? (
          <>
            <DialogHeader>
              <Badge variant="default" className="w-fit mb-2">
                Quick Inquiry & Message
              </Badge>
              <DialogTitle>Send a Message</DialogTitle>
              <DialogDescription>
                Reach out to our engineering team in Rajajinagar, Bengaluru.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                  Full Name *
                </label>
                <Input
                  required
                  placeholder="e.g. Rajesh Kumar"
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
                  Solution Interest
                </label>
                <select
                  className="w-full h-11 border border-navy/20 bg-white px-4 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-sky rounded-none"
                  value={formData.solutionType}
                  onChange={(e) => setFormData({ ...formData, solutionType: e.target.value })}
                >
                  <option value="Adaptive Driving Controls">Adaptive Driving Hand Controls</option>
                  <option value="Electronic Clutch Systems">Electronic Clutch Systems</option>
                  <option value="Left Foot Accelerator">Left Foot Accelerator</option>
                  <option value="Ring Accelerator Systems">Steering Wheel Ring Accelerators</option>
                  <option value="Prosthetic & Orthotic Limbs">Custom Prosthetic & Orthotic Limbs</option>
                  <option value="General Mobility Consultation">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                  Your Message
                </label>
                <Textarea
                  rows={3}
                  placeholder="Tell us about your requirements, vehicle model or specific mobility needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <Button type="submit" disabled={loading} variant="default" className="w-full">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[0.7rem] text-slate-400 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-sky" />
                Strict Privacy Guaranteed. No unsolicited marketing calls.
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="h-14 w-14 bg-sky-light border border-sky text-sky-dark flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-medium text-navy">Request Sent!</h3>
            <p className="text-sm text-body leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-navy">{formData.name}</span>. Your consultation request has been emailed to our team. We'll reach out to you at <span className="font-semibold text-navy">{formData.phone}</span> within 24 hours.
            </p>
            <p className="text-xs text-slate-400">
              Need urgent help? Call us at <a href="tel:+919845056726" className="text-sky font-semibold">+91 98450 56726</a>
            </p>
            <div className="pt-4 border-t border-navy/10">
              <Button onClick={handleReset} variant="default" className="w-full">
                Back to Website
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
