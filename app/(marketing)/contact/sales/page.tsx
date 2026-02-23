"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Mail,
  MapPin,
  MessageSquare,
  ArrowLeft,
  ExternalLink,
  Building2,
  Zap,
  Users,
  Clock,
} from "lucide-react"
import { Button } from "@hanzo/ui";

const ENTERPRISE_BENEFITS = [
  {
    icon: Building2,
    title: "Custom AI Solutions",
    description: "AI solutions tailored to your business needs.",
  },
  {
    icon: Zap,
    title: "Dedicated Infrastructure",
    description: "Private cloud with priority support.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Direct access to AI engineers.",
  },
  {
    icon: Clock,
    title: "Priority Support",
    description: "24/7 enterprise support.",
  },
]

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-8 px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Contact
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                Talk to Sales
              </h1>
              <p className="text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                Book a call to discuss your needs. We&apos;ll help you find the right solution for your team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cal.com Embed */}
        <section className="pb-12 px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden"
            >
              <iframe
                src="https://cal.com/hanzo?embed=true&theme=dark&hideEventTypeDetails=false&layout=month_view"
                width="100%"
                height="700"
                frameBorder="0"
                className="w-full bg-transparent"
                style={{
                  minHeight: "700px",
                  border: "none",
                  background: "transparent",
                }}
                title="Schedule a call with Hanzo"
                allow="payment"
              />
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12 px-4 md:px-8 lg:px-12 border-t border-neutral-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="mailto:enterprise@hanzo.ai"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="text-white font-medium">enterprise@hanzo.ai</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="text-white font-medium">995 Market St, San Francisco</p>
                </div>
              </motion.div>

              <motion.a
                href="https://discord.gg/hanzo"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MessageSquare className="w-5 h-5 text-neutral-400 group-hover:text-white/70 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Community</p>
                  <p className="text-white font-medium">Join Discord</p>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 ml-auto" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-neutral-900/20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">
                Enterprise Solutions
              </h2>
              <p className="text-neutral-400">
                Transform your business with our enterprise AI platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ENTERPRISE_BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-xl border border-neutral-800 bg-neutral-900 text-center"
                  >
                    <Icon className="w-6 h-6 text-white mx-auto mb-3" />
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {benefit.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
