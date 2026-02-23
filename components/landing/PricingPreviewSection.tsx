'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const freeFeatures = [
  "100K API calls / month",
  "1GB vector storage",
  "10GB file storage",
  "Community support",
  "All core features",
  "Unlimited projects",
];

const PricingPreviewSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: "#ffffff", borderColor: "rgba(253, 68, 68, 0.3)" }}
          >
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Scale forever
          </h2>
          <p className="text-lg text-neutral-400">
            No credit card required. Upgrade when you're ready.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-20"
            style={{ background: "linear-gradient(135deg, #ffffff, #ffffff)" }}
          />

          <div className="relative p-8 md:p-12 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Free tier info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">Free Forever</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  $0<span className="text-lg font-normal text-neutral-500">/month</span>
                </h3>
                <p className="text-neutral-400 mb-6">
                  Everything you need to start building. No strings attached.
                </p>

                <ul className="space-y-3">
                  {freeFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTAs */}
              <div className="flex flex-col items-center md:items-end gap-4">
                <a
                  href="https://iam.hanzo.ai/sign-up"
                  className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full font-medium text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>

                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  View all plans
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-xs text-neutral-600 text-center md:text-right mt-4">
                  No credit card required
                  <br />
                  Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-neutral-500">
            Need custom limits, SLAs, or dedicated support?{" "}
            <Link
              href="/enterprise"
              className="text-white hover:underline"
            >
              Talk to sales
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
