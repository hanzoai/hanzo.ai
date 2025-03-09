
import React from "react";
import { motion } from "framer-motion";
import ZenPrincipleCard, { ZenPrinciple } from "./ZenPrincipleCard";

// Define the principles data
const principles: ZenPrinciple[] = [
  {
    number: "1",
    title: "Orthogonality",
    japaneseSymbol: "直交性",
    description: "Every tool does one thing exceptionally well. No overlap. No redundancy. Pure clarity."
  },
  {
    number: "2",
    title: "Smallness",
    japaneseSymbol: "小型",
    description: "Minimal components, maximum flexibility. Composable units unlock limitless creativity."
  },
  {
    number: "3",
    title: "Completeness",
    japaneseSymbol: "完全性",
    description: "\"Batteries included.\" Robust solutions, fully integrated and ready for immediate use."
  },
  {
    number: "4",
    title: "Dimensionality",
    japaneseSymbol: "次元性",
    description: "Abstraction without loss of power. Accessible simplicity backed by hidden depth."
  },
  {
    number: "5",
    title: "Clarity",
    japaneseSymbol: "明晰",
    description: "Clear code, concise design, intuitive APIs. No fluff, no friction—just effectiveness."
  },
  {
    number: "6",
    title: "Composability",
    japaneseSymbol: "構成性",
    description: "Design for recombination. Our tools amplify each other, creating exponential outcomes."
  },
  {
    number: "7",
    title: "Accessibility",
    japaneseSymbol: "アクセス性",
    description: "Open innovation is fastest innovation. Shared data, open code, and transparent practices empower exponential growth."
  },
  {
    number: "8",
    title: "Longevity",
    japaneseSymbol: "長寿",
    description: "Build things that last. Think decades, not quarters—robust solutions scale and evolve gracefully."
  },
  {
    number: "9",
    title: "Interoperability",
    japaneseSymbol: "相互運用性",
    description: "Seamlessly connect with existing systems. We integrate, never isolate—enabling frictionless collaboration."
  },
  {
    number: "10",
    title: "Concurrency",
    japaneseSymbol: "並行性",
    description: "Autonomy and collaboration in balance. Fewer roadblocks, no bureaucracy—maximum productivity through trust."
  },
  {
    number: "11",
    title: "Adaptability",
    japaneseSymbol: "適応性",
    description: "Pivot purposefully. Failure is feedback. Rapid experimentation and fearless iteration forge progress."
  },
  {
    number: "12",
    title: "Customer-centrism",
    japaneseSymbol: "顧客中心主義",
    description: "Coach clients like a Sensei. Our success is measured by the success we unlock for others."
  }
];

const ManifestoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Manifesto</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
            The Zen of Hanzo is not just philosophy—it's our operating system. Our guiding principles 
            are practical laws born from rigorous experimentation, engineered to create profound impact 
            and exponential growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <ZenPrincipleCard key={principle.title} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
