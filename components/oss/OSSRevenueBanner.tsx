'use client'

import { motion } from "framer-motion"
import { ArrowRight, Link2, GitFork } from "lucide-react"
import Link from "next/link"

interface OSSRevenueBannerProps {
  upstreamName?: string
  compact?: boolean
}

export function OSSRevenueBanner({ upstreamName, compact = false }: OSSRevenueBannerProps) {
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-5xl px-4 py-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link2 className="w-4 h-4 text-foreground flex-shrink-0" />
            <span>
              25% of compute revenue goes to open source contributors.
              Connect your GitHub &amp; wallet to earn.
            </span>
          </p>
          <Link
            href="/oss/connect"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors whitespace-nowrap"
          >
            Connect &amp; Earn
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    )
  }

  const contributorDescription = upstreamName
    ? `Contributors to ${upstreamName} earn a share of compute revenue`
    : "Contributors to the open source projects powering this product earn a share of compute revenue"

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="border border-border rounded-xl bg-gradient-to-r from-secondary/30 to-secondary/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Left content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border mb-4">
                <GitFork className="w-3.5 h-3.5 text-foreground" />
                <span className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
                  Open Source Revenue Sharing
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                25% of compute goes back to open source
              </h3>

              <p className="text-muted-foreground text-sm md:text-base">
                Every deployment is SBOM-verified. {contributorDescription} — transparent,
                on-chain, and customizable by the community.
              </p>
            </div>

            {/* Right buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <Link
                href="/oss/connect"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-foreground text-background font-medium rounded-full text-sm transition-colors hover:bg-foreground/90"
              >
                Connect &amp; Earn
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/open-source"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-border hover:border-foreground/30 text-foreground font-medium rounded-full text-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default OSSRevenueBanner
