"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare, Send } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.phone || !formData.package) {
      toast.error("Please fill in all required fields")
      return
    }

    // Construct WhatsApp message
    const message = `
*New Website Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email || "Not provided"}
*Phone:* ${formData.phone}
*Package:* ${formData.package}

*Message:*
${formData.message || "No additional message"}
    `.trim()

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "2348061719533"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    // Show success message
    toast.success("Redirecting to WhatsApp...")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      package: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Secure your slot before December 31st. Limited spots available for this special offer.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Get Your Quote</h3>
              <p className="text-sm text-muted-foreground">We'll reach out to you via WhatsApp</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="package">
                  Select Package <span className="text-destructive">*</span>
                </Label>
                <select
                  id="package"
                  className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  required
                >
                  <option value="">Choose a package</option>
                  <option value="1 Page Website - ₦100,000">1 Page Website - ₦100,000</option>
                  <option value="2-3 Page Website - ₦115,000">2-3 Page Website - ₦115,000</option>
                  <option value="5-6 Page Website - ₦125,000">5-6 Page Website - ₦125,000</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project, preferred colors, content you need, etc."
                className="min-h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" size="lg" className="w-full group">
              <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              Send via WhatsApp
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you'll be redirected to WhatsApp to complete your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
