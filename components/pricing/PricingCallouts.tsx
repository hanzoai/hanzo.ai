"use client"

import { motion } from "framer-motion"
import { Gift, Heart, ArrowRight } from "lucide-react"

export default function PricingCallouts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Referral Program */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-secondary/50 border border-border rounded-xl p-8 overflow-hidden hover:border-neutral-600 transition-colors"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
              <Gift className="h-5 w-5 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Earn While You Build
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              $20 in AI credits for every developer you refer. Unlock revenue share up to 7.5% at Partner tier.
            </p>
            <a
              href="/referral"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-white transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Open Source Fund */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative bg-secondary/50 border border-border rounded-xl p-8 overflow-hidden hover:border-neutral-600 transition-colors"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
              <Heart className="h-5 w-5 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              25% Goes to Open Source
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              A quarter of all platform revenue goes directly to the open source developers whose work powers Hanzo infrastructure.
            </p>
            <a
              href="/open-source-fund"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-white transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
