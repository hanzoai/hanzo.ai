'use client'

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const BRAND_COLOR = "#ffffff";

const features = [
  { name: "Multi-agent parallelism + consensus", hanzo: "full", others: "none", desc: "Best patch wins" },
  { name: "Policy / approvals / audit by default", hanzo: "full", others: "none", desc: "Humans + agents" },
  { name: "Self-host and air-gapped options", hanzo: "full", others: "partial", desc: "On-prem ready" },
  { name: "Evidence-driven output", hanzo: "full", others: "partial", desc: "Diffs + tests + traces, not screenshots" },
  { name: "Long-running sandboxes", hanzo: "full", others: "partial", desc: "Install, refactor, iterate" },
];

const renderStatus = (status: string) => {
  switch (status) {
    case "full":
      return (
        <div className="flex items-center justify-center">
          <Check className="w-5 h-5 text-white/70" />
        </div>
      );
    case "partial":
      return (
        <div className="flex items-center justify-center">
          <Minus className="w-5 h-5 text-white/60" />
        </div>
      );
    case "none":
      return (
        <div className="flex items-center justify-center">
          <X className="w-5 h-5 text-neutral-600" />
        </div>
      );
    default:
      return null;
  }
};

const UseCasesSection = () => {
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
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Comparison
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Why Hanzo vs agents + glue
          </h2>
          <p className="text-lg text-neutral-400">
            Production software needs more than autocomplete.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-neutral-800 overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-neutral-900 border-b border-neutral-800">
            <div className="text-sm font-medium text-neutral-500">Capability</div>
            <div className="text-sm font-medium text-center" style={{ color: BRAND_COLOR }}>Hanzo</div>
            <div className="text-sm font-medium text-neutral-500 text-center">Others</div>
          </div>

          {/* Rows */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`grid grid-cols-3 gap-4 p-4 ${
                index !== features.length - 1 ? "border-b border-neutral-800" : ""
              } hover:bg-neutral-900/50 transition-colors`}
            >
              <div>
                <div className="text-sm text-white font-medium">{feature.name}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{feature.desc}</div>
              </div>
              <div className="flex justify-center items-center">{renderStatus(feature.hanzo)}</div>
              <div className="flex justify-center items-center">{renderStatus(feature.others)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-white/70" />
            <span className="text-xs text-neutral-500">Full support</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="w-4 h-4 text-white/60" />
            <span className="text-xs text-neutral-500">Partial / varies</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-neutral-600" />
            <span className="text-xs text-neutral-500">Not available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
