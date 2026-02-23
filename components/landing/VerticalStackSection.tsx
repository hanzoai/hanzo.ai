'use client'

import React from "react";
import { motion } from "framer-motion";
import { Shield, Database, Brain, Rocket } from "lucide-react";

const layers = [
  {
    name: "Identity & Control Plane",
    icon: Shield,
    items: ["Hanzo Team", "Hanzo ID", "IAM", "KMS", "Audit"],
  },
  {
    name: "Data Plane",
    icon: Database,
    items: ["Vector", "SQL", "KV", "Streaming", "Workflows"],
  },
  {
    name: "AI Plane",
    icon: Brain,
    items: ["Models", "Inference", "Agents (Hanzo Dev)", "Evaluation"],
  },
  {
    name: "Deployment Plane",
    icon: Rocket,
    items: ["Local", "Kubernetes", "Cloud", "Edge"],
  },
];

const BRAND_COLOR = "#ffffff";

const VerticalStackSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${BRAND_COLOR} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            The vertically integrated stack
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Identity to production in one platform.
          </p>
        </motion.div>

        {/* Vertical Stack Diagram */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0"
            style={{ backgroundColor: `${BRAND_COLOR}30` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Layer Cards */}
          <div className="relative z-10 flex flex-col gap-6">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isLast = index === layers.length - 1;

              return (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connection dot */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 -top-3 w-3 h-3 rounded-full border-2 bg-black z-20"
                    style={{ borderColor: BRAND_COLOR }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative p-6 rounded-xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300"
                    whileHover={{
                      boxShadow: `0 0 40px -10px ${BRAND_COLOR}40`,
                      borderColor: `${BRAND_COLOR}40`,
                    }}
                  >
                    {/* Layer Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${BRAND_COLOR}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {layer.name}
                      </h3>
                    </div>

                    {/* Items */}
                    <div className="flex flex-wrap gap-2 ml-16">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Flow arrow indicator */}
                    {!isLast && (
                      <motion.div
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-neutral-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="rotate-180"
                        >
                          <path
                            d="M6 0L12 8H0L6 0Z"
                            fill={BRAND_COLOR}
                            fillOpacity="0.5"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom endpoint */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-4 h-4 rounded-full z-20"
            style={{ backgroundColor: BRAND_COLOR }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-500 text-sm">
            From identity management to edge deployment, every layer works together seamlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalStackSection;
