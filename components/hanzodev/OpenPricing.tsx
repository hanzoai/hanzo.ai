'use client'

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const BRAND_COLOR = "#ffffff";

const GATEWAY_FEATURES = [
  "Choose from more than 60 providers",
  "Use more than 500 models",
  "Pay the exact list price of Anthropic, OpenAI, and Google",
  "No commission or hidden fees, we make money on Teams/Enterprise",
  "Pay as you go, no subscriptions, no waste",
  "No need to wait for a daily reset, no slow pool, no rate limits!",
  "Get Hanzo Pass - Get up to 50% bonus free credits",
];

const ALTERNATIVE_FEATURES = [
  "Other Gateways (OpenRouter, Vercel, Requesty)",
  "Managed Services (AWS Bedrock, Azure OpenAI, Google AI Studio)",
  "Free, stealth, and budget models (Llama, Mistral, etc.)",
  "Fallback when you hit a quota limit with our virtual provider",
  "Bring your own API keys (BYOK) for any provider/subscription",
  "Run models locally (Ollama, LM Studio)",
];

const OpenPricing = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/50 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open Pricing
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Run AI where you want and pay as you go
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hanzo Gateway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                Recommended
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Hanzo Gateway
            </h3>
            <p className="text-neutral-400 mb-6">Open & transparent</p>

            <ul className="space-y-3 mb-8">
              {GATEWAY_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/pricing"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm w-full justify-center"
              style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
            >
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Alternatives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Or use any alternative
            </h3>
            <p className="text-neutral-400 mb-6">For AI inference</p>

            <ul className="space-y-3 mb-8">
              {ALTERNATIVE_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-400">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://docs.hanzo.ai/byok"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-800 text-sm text-white w-full justify-center"
            >
              Learn about BYOK
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenPricing;
