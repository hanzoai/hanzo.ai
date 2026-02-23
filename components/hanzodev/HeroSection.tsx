'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx hanzo-dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main content - centered */}
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
          >
            Get up to 50% free credits with Hanzo Pass
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-foreground">Move at Hanzo Speed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Build, ship, and iterate faster with the most popular open source coding agent.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Link
              href="/get-started"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

            >
              Get Started with Hanzo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
            >
              Talk to an Expert
            </Link>
          </motion.div>

          {/* Install command */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary border border-border">
              <code className="text-sm font-mono text-foreground/80">
                npx hanzo-dev
              </code>
              <button
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-foreground/70" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
