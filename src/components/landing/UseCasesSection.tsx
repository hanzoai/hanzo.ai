import React from "react";
import { motion } from "framer-motion";
import { Check, AlertCircle, X } from "lucide-react";

const features = [
  { name: "Multi-agent parallelism", hanzo: "full", copilot: "none", claudeCode: "partial" },
  { name: "Multi-model routing", hanzo: "full", copilot: "none", claudeCode: "partial" },
  { name: "On-prem / air-gapped", hanzo: "full", copilot: "none", claudeCode: "partial" },
  { name: "Policy + approvals + audit", hanzo: "full", copilot: "none", claudeCode: "none" },
  { name: "Evidence-based output (tests/diffs)", hanzo: "full", copilot: "none", claudeCode: "partial" },
];

const renderStatus = (status: string) => {
  switch (status) {
    case "full":
      return <Check className="w-5 h-5 text-green-500" />;
    case "partial":
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    case "none":
      return <X className="w-5 h-5 text-neutral-600" />;
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
            style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
          >
            Why Hanzo
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Built for enterprise agent work
          </h2>
          <p className="text-lg text-neutral-400">
            More than autocomplete. Real software engineering at scale.
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
          <div className="grid grid-cols-4 gap-4 p-4 bg-neutral-900 border-b border-neutral-800">
            <div className="text-sm font-medium text-neutral-500">Capability</div>
            <div className="text-sm font-medium text-[#fd4444] text-center">Hanzo</div>
            <div className="text-sm font-medium text-neutral-500 text-center">Copilot</div>
            <div className="text-sm font-medium text-neutral-500 text-center">Claude Code</div>
          </div>

          {/* Rows */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`grid grid-cols-4 gap-4 p-4 ${
                index !== features.length - 1 ? "border-b border-neutral-800" : ""
              } hover:bg-neutral-900/50 transition-colors`}
            >
              <div className="text-sm text-white">{feature.name}</div>
              <div className="flex justify-center">{renderStatus(feature.hanzo)}</div>
              <div className="flex justify-center">{renderStatus(feature.copilot)}</div>
              <div className="flex justify-center">{renderStatus(feature.claudeCode)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-xs text-neutral-500">Full support</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-500" />
            <span className="text-xs text-neutral-500">Partial</span>
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
