"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Github,
  Linkedin,
  Send,
  ArrowRight,
  ExternalLink,
  Calendar,
  Facebook,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: MessageSquare,
    label: "Join our Discord Community",
    href: "https://discord.gg/hanzo",
    color: "#5865F2",
  },
  {
    icon: Github,
    label: "Follow us on GitHub",
    href: "https://github.com/hanzoai",
    color: "#ffffff",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "Follow us on Twitter",
    href: "https://x.com/hanzoai",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    href: "https://linkedin.com/company/hanzoai",
    color: "#0A66C2",
  },
  {
    icon: Facebook,
    label: "Like us on Facebook",
    href: "https://facebook.com/hanzoai",
    color: "#1877F2",
  },
  {
    icon: Instagram,
    label: "Follow on Instagram",
    href: "https://instagram.com/hanzoai",
    color: "#E4405F",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
            >
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto"
            >
              Have a question or want to learn more about Hanzo? Our team is here to help you.
            </motion.p>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="pb-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-semibold text-white mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="p-8 rounded-xl border border-white/20 bg-white/5 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-white/70" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Right Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <a
                      href="mailto:hello@hanzo.ai"
                      className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-sm text-neutral-400">hello@hanzo.ai</p>
                      </div>
                    </a>

                    <a
                      href="tel:+14155551234"
                      className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Phone className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p className="text-sm text-neutral-400">+1 (415) 555-1234</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900">
                      <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-neutral-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-sm text-neutral-400">
                          995 Market Street<br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sales CTA */}
                <div className="p-6 rounded-xl border border-white/30 bg-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-white" />
                    <h3 className="font-semibold text-white">Talk to Sales</h3>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">
                    Interested in enterprise solutions? Schedule a call with our sales team.
                  </p>
                  <Button asChild className="w-full bg-white text-black hover:bg-neutral-200">
                    <Link href="/contact/sales">
                      Schedule a Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Connect With Us */}
        <section className="py-16 px-4 md:px-8 lg:px-12 border-t border-neutral-800 bg-neutral-900/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">
                Connect With Us
              </h2>
              <p className="text-neutral-400">
                Follow us on social media or join our community platforms to stay updated.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 hover:border-neutral-700 transition-all group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `${social.color}15` }}
                    >
                      {typeof Icon === "function" ? (
                        <Icon />
                      ) : (
                        <Icon
                          className="w-5 h-5 transition-colors"
                          style={{ color: social.color }}
                        />
                      )}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {social.label}
                    </span>
                    <ExternalLink className="w-4 h-4 text-neutral-500 ml-auto" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
