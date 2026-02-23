'use client'

import React from "react";
import { motion } from "framer-motion";

interface CompatibilityItem {
  name: string;
  compatible: string;
}

const ecosystemItems: CompatibilityItem[] = [
  { name: "Analytics", compatible: "PostHog" },
  { name: "Web Analytics", compatible: "Umami" },
  { name: "Experiments", compatible: "GrowthBook" },
  { name: "Engage", compatible: "Dittofeed" },
  { name: "Automations", compatible: "Activepieces" },
  { name: "PubSub", compatible: "NATS" },
  { name: "Tasks", compatible: "Temporal" },
  { name: "CX", compatible: "Chatwoot" },
];

const EcosystemBadge: React.FC<{ item: CompatibilityItem; index: number }> = ({
  item,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(253, 68, 68, 0.08)" }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 cursor-default transition-colors"
    >
      <span className="text-sm font-medium text-white">{item.name}</span>
      <span className="text-xs text-neutral-500">
        ({item.compatible}-compatible)
      </span>
    </motion.div>
  );
};

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
            Ecosystem
          </h2>
          <p className="text-neutral-400 text-sm">
            Drop-in compatible, unified experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {ecosystemItems.map((item, index) => (
            <EcosystemBadge key={item.name} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
