'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#ffffff";

const plans = [
  {
    name: "Pro",
    highlight: false,
    description: "Hanzo Dev is included in your Pro plan. Perfect for short coding sprints in small codebases with access to both Sonnet 4.5 and Opus 4.5.",
    price: "$17",
    period: "Per month with annual subscription discount ($200 billed up front). $20 if billed monthly.",
    features: [
      "Access to Sonnet 4.5 and Opus 4.5",
      "Terminal, IDE, and web access",
      "Codebase context understanding",
      "Standard usage limits",
    ],
  },
  {
    name: "Max 5x",
    highlight: true,
    description: "Hanzo Dev is included in your Max plan. Great value for everyday use in larger codebases.",
    price: "$100",
    period: "Per person billed monthly",
    features: [
      "Everything in Pro",
      "5x more usage",
      "Large codebase support",
      "Priority model access",
      "Slack integration",
    ],
  },
  {
    name: "Max 20x",
    highlight: false,
    description: "Even more Hanzo Dev included in your Max plan. Great value for power users with the most access to Hanzo models.",
    price: "$200",
    period: "Per person billed monthly",
    features: [
      "Everything in Max 5x",
      "20x more usage",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Choose your plan
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Start building with Hanzo Dev today. Scale as your needs grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-white/20 to-transparent border-2"
                  : "bg-neutral-900/50 border"
              } border-neutral-800`}
              style={plan.highlight ? { borderColor: BRAND_COLOR } : {}}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium text-black"
                  style={{ backgroundColor: BRAND_COLOR }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-neutral-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-xs text-neutral-500 mt-2">{plan.period}</p>
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.highlight
                    ? "text-black"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
                style={plan.highlight ? { backgroundColor: BRAND_COLOR } : {}}
                asChild
              >
                <Link href="/signup">
                  Try Hanzo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-neutral-500 mt-8"
        >
          Extra usage limits apply. Prices shown don't include applicable tax.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
