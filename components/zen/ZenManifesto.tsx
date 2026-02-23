'use client'


import React from "react";
import { motion } from "framer-motion";
import JapaneseWave from "./JapaneseWave";

interface Principle {
  title: string;
  description: string;
  japaneseSymbol?: string;
}

const principles: Principle[] = [
  {
    title: "Orthogonality",
    japaneseSymbol: "直交性",
    description: "Do one thing exceptionally. Components that stand alone, yet integrate effortlessly."
  },
  {
    title: "Smallness",
    japaneseSymbol: "小型",
    description: "Break complexity into simplicity. The tiniest modules scale infinitely."
  },
  {
    title: "Completeness",
    japaneseSymbol: "完全性",
    description: "No half-measures. Batteries always included. Meticulously crafted to empower creators."
  },
  {
    title: "Dimensionality",
    japaneseSymbol: "次元性",
    description: "Layers of abstraction that vanish complexity yet never block depth."
  },
  {
    title: "Clarity",
    japaneseSymbol: "明晰",
    description: "Complexity is the enemy. APIs should whisper, not shout. Clear thinking fuels innovation."
  },
  {
    title: "Accessibility",
    japaneseSymbol: "アクセス性",
    description: "Democratize access to data, models, and knowledge. Transparency drives rapid iteration."
  },
  {
    title: "Composability",
    japaneseSymbol: "構成性",
    description: "Small components combine into infinite possibility. Every piece purposeful, every connection intuitive."
  },
  {
    title: "Scalability",
    japaneseSymbol: "拡張性",
    description: "Build for tomorrow's traffic, today. We architect for exponential growth."
  },
  {
    title: "Velocity",
    japaneseSymbol: "速度",
    description: "Iteration at the speed of thought. Rapid experimentation is how magic becomes method."
  },
  {
    title: "Longevity",
    japaneseSymbol: "長寿",
    description: "Invest in future-proof designs. We build systems that evolve. Durability by design."
  }
];

const ZenManifesto: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10 top-0 left-0 right-0 h-full">
        <JapaneseWave
          color="#ffffff"
          height={300}
          opacity={0.05}
          speed={30}
          className="absolute top-1/4"
        />
        <JapaneseWave
          color="#cccccc"
          height={300}
          delay={1}
          opacity={0.03}
          speed={35}
          className="absolute top-2/3"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--white)]">Our AI Engineering Manifesto</h2>
          <p className="text-neutral-300 md:text-lg max-w-3xl mx-auto">
            Hanzo began as a spark—an intuition that AI was the next great leverage. Since then, 
            we've honed our craft: a fusion of relentless experimentation, bold creativity, and disciplined 
            engineering, forging principles that guide our quest for radical innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-[#ffffff]/20 rounded-lg p-6"
            >
              <div className="flex items-center mb-3">
                <div className="text-3xl text-[#ffffff] font-semibold mr-3">{principle.japaneseSymbol}</div>
                <h3 className="text-xl text-[var(--white)] font-bold">{principle.title}</h3>
              </div>
              <p className="text-neutral-300">{principle.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-[var(--black)]/30 backdrop-blur-sm border border-[#ffffff]/20 rounded-lg">
            <h3 className="text-xl text-[var(--white)] font-bold mb-2">Crafted by Innovators, Proven by Scale</h3>
            <p className="text-neutral-300">
              The Zen of Hanzo is our battle-tested ethos. Born from the crucible of high-stakes launches,
              explosive successes, and daring experiments. We are AI engineers, cypherpunk innovators, 
              and relentless optimists who believe technology is a lever to amplify human creativity and enterprise.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ZenManifesto;
