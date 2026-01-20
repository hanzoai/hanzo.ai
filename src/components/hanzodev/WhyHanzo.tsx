import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Server, FileText } from "lucide-react";

const BRAND_COLOR = "#fd4444";

const REASONS = [
  {
    icon: Users,
    title: "Multi-agent parallelism and consensus",
    description:
      "Run multiple agents on the same task. Compare implementations. Ship the best one based on diff quality and test results.",
  },
  {
    icon: ShieldCheck,
    title: "Policy, approvals and audit baked in",
    description:
      "Define policies for what agents can do. Require approvals at key gates. Full audit trail for compliance.",
  },
  {
    icon: Server,
    title: "Self-host and air-gapped options",
    description:
      "Run entirely on your infrastructure. Keep code and data within your security perimeter. No external dependencies required.",
  },
  {
    icon: FileText,
    title: "Evidence-driven output",
    description:
      "Every change comes with diffs, test logs, and execution traces. Review artifacts, not promises.",
  },
];

const WhyHanzo = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Hanzo
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Built for teams that need speed without sacrificing control.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${BRAND_COLOR}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-neutral-400">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHanzo;
