'use client'

import React from "react";
import { motion } from "framer-motion";

interface Principle {
  title: string;
  hexagram: string;
  chinese: string;
  pinyin: string;
  iching: string;
  description: string;
  index: number; // position in the 64 (0-based)
}

const principles: Principle[] = [
  {
    title: "Orthogonality",
    hexagram: "䷀",
    chinese: "乾",
    pinyin: "Qián",
    iching: "Heaven — The Creative",
    description: "Each component does one thing completely. No hidden coupling. Pure creative force, self-sufficient and composable. Reason about it in isolation. Replace it freely.",
    index: 0,
  },
  {
    title: "Smallness",
    hexagram: "䷺",
    chinese: "渙",
    pinyin: "Huàn",
    iching: "Dispersion — Dissolving Rigidity",
    description: "Disassemble rigid structures into their smallest correct form. The fewest concepts that solve the problem completely. Small modules compose into arbitrary complexity.",
    index: 58,
  },
  {
    title: "Completeness",
    hexagram: "䷼",
    chinese: "中孚",
    pinyin: "Zhōng Fú",
    iching: "Inner Truth — Integrity",
    description: "No half-measures. If you ship it, ship something that works — real cases, not just the happy path. Integrity at the foundation. Half-measures create debt immediately.",
    index: 60,
  },
  {
    title: "Dimensionality",
    hexagram: "䷽",
    chinese: "小過",
    pinyin: "Xiǎo Guò",
    iching: "Small Exceeding — Precise Attention",
    description: "Address the small things precisely. Layers of abstraction that vanish complexity yet never block depth. The difference is in the details that don't look like differences.",
    index: 61,
  },
  {
    title: "Clarity",
    hexagram: "䷻",
    chinese: "節",
    pinyin: "Jié",
    iching: "Limitation — Constraints Enable",
    description: "Establish the right constraints and creativity follows. Complexity that serves no purpose is waste. An API that requires reading the implementation to use correctly is a bad API.",
    index: 59,
  },
  {
    title: "Accessibility",
    hexagram: "䷹",
    chinese: "兌",
    pinyin: "Duì",
    iching: "Joy — Open Exchange",
    description: "Democratize access to data, models, and knowledge. Open exchange creates positive outcomes for everyone. Transparency drives rapid iteration. Access is infrastructure.",
    index: 57,
  },
  {
    title: "Composability",
    hexagram: "䷸",
    chinese: "巽",
    pinyin: "Xùn",
    iching: "Wind — Gentle Penetration",
    description: "Small, clear, complete, orthogonal components combine into systems of indefinite capability. The fundamental leverage point: finite complexity composing into infinite complexity.",
    index: 56,
  },
  {
    title: "Scalability",
    hexagram: "䷡",
    chinese: "大壯",
    pinyin: "Dà Zhuàng",
    iching: "Great Power — Strength Through Structure",
    description: "Build for exponential growth from the start. The architecture that handles ten requests handles ten million — if it was designed that way. Strength comes from correct structure.",
    index: 33,
  },
  {
    title: "Velocity",
    hexagram: "䷾",
    chinese: "既濟",
    pinyin: "Jì Jì",
    iching: "Already Complete — Prepare the Next Cycle",
    description: "Recognize completion and move immediately to the next cycle. Iteration at the speed of thought. Rapid experimentation is how method replaces magic.",
    index: 62,
  },
  {
    title: "Longevity",
    hexagram: "䷿",
    chinese: "未濟",
    pinyin: "Wèi Jì",
    iching: "Not Yet Complete — Navigate Transitions",
    description: "Every system is always in transition. Navigate carefully. Build for the next decade, not the next sprint. Durability by design — systems that evolve without breaking.",
    index: 63,
  },
];

// All 64 I-Ching hexagrams (U+4DC0–U+4DFF)
const ALL_64 = Array.from({ length: 64 }, (_, i) =>
  String.fromCodePoint(0x4DC0 + i)
);

const activeIndices = new Set(principles.map((p) => p.index));

const ZenManifesto: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--white)]">The Zen of Hanzo</h2>
          <p className="text-foreground/50 text-sm font-mono tracking-widest uppercase mb-2">
            易經 · I-Ching · 64 hexagrams
          </p>
          <p className="text-foreground/60 max-w-xl mx-auto text-sm">
            Ancient pattern language for systems that last.
            Ten principles. Ten hexagrams. One framework.
          </p>
        </motion.div>

        {/* All 64 hexagrams grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-8 gap-1 max-w-sm mx-auto">
            {ALL_64.map((glyph, i) => {
              const isActive = activeIndices.has(i);
              const principle = principles.find((p) => p.index === i);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.01 }}
                  title={principle ? `${principle.chinese} — ${principle.title}` : `Hexagram ${i + 1}`}
                  className={`
                    flex items-center justify-center w-9 h-9 rounded text-xl leading-none cursor-default transition-all duration-300
                    ${isActive
                      ? "text-white bg-white/10 border border-white/20 scale-110"
                      : "text-foreground/20 hover:text-foreground/50"
                    }
                  `}
                >
                  {glyph}
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-foreground/30 text-xs font-mono mt-4 tracking-widest">
            10 of 64 active · hover to identify
          </p>
        </motion.div>

        {/* 10 Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-900/20 backdrop-blur-sm border border-border rounded-lg p-6 group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="text-5xl leading-none text-foreground/40 group-hover:text-foreground/80 transition-colors font-light select-none">
                  {principle.hexagram}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg text-foreground/70 font-medium">{principle.chinese}</span>
                    <span className="text-xs text-foreground/40 font-mono">{principle.pinyin}</span>
                  </div>
                  <div className="text-xs text-foreground/40 font-mono mt-0.5">{principle.iching}</div>
                  <h3 className="text-lg text-[var(--white)] font-bold mt-1">{principle.title}</h3>
                </div>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/30 text-xs font-mono tracking-widest">
            ䷀ · patterns that recur across every scale · ䷿
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default ZenManifesto;
