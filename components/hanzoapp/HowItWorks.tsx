'use client'

import React from "react";
import { motion } from "framer-motion";
import { Download, Settings, Rocket, ArrowRight } from "lucide-react";

const BRAND_COLOR = "#ffffff";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install or open",
    description: "Download the desktop app, open hanzo.app in your browser, or install via CLI.",
    code: "curl -fsSL hanzo.sh | sh",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure your mode",
    description: "Choose web, desktop, local AI, or node mode. Connect your accounts and preferences.",
    code: "hanzo config --mode local --model qwen3-32b",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start building",
    description: "Create, code, and ship with AI assistance. Your work syncs across all devices.",
    code: "hanzo dev \"Build a payment API with Stripe\"",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get started in minutes
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Three steps to productive AI-assisted development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={isEven ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <span className="text-sm font-bold" style={{ color: BRAND_COLOR }}>
                        {step.number}
                      </span>
                    </div>
                    <Icon className="w-5 h-5 text-neutral-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-400 mb-4">{step.description}</p>
                </div>

                <div className={isEven ? "lg:order-1" : ""}>
                  <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-xs text-neutral-500 font-mono">terminal</span>
                    </div>
                    <div className="font-mono text-sm">
                      <span className="text-neutral-500">$ </span>
                      <span className="text-green-400">{step.code}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
