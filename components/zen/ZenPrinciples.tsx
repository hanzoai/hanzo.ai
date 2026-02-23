'use client'


import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Orthogonality",
    japanese: "直交性",
    description: "Components that stand alone, yet integrate effortlessly. Each piece precise, purposeful, and independent."
  },
  {
    title: "Smallness",
    japanese: "小型",
    description: "Break complexity into simplicity. The tiniest modules scale infinitely; minimalism multiplied becomes power."
  },
  {
    title: "Completeness",
    japanese: "完全性",
    description: "No half-measures. Batteries always included. Meticulously crafted to empower ambitious creators instantly."
  },
  {
    title: "Dimensionality",
    japanese: "次元性",
    description: "Layers of abstraction that vanish complexity yet never block depth. Simplicity at the surface, depth underneath."
  },
  {
    title: "Clarity",
    japanese: "明晰",
    description: "Complexity is the enemy. APIs should whisper, not shout. Documentation should guide, not obscure."
  }
];

const ZenPrinciples: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {principles.map((principle, index) => (
        <motion.div
          key={principle.title}
          className="bg-[var(--black)]/30 backdrop-blur-sm border border-border rounded-lg p-6 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-4xl text-foreground mb-2 font-bold">{principle.japanese}</div>
          <h3 className="text-xl font-bold mb-2 text-[var(--white)]">{principle.title}</h3>
          <p className="text-foreground/80">{principle.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ZenPrinciples;
