'use client'

import React from "react";
import { motion } from "framer-motion";

export interface ZenPrinciple {
  number: string;
  title: string;
  japaneseSymbol: string;
  description: string;
  emoji: string;
  discipline?: string;
}

interface ZenPrincipleCardProps {
  principle: ZenPrinciple;
  index: number;
}

const ZenPrincipleCard: React.FC<ZenPrincipleCardProps> = ({ principle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-border rounded-lg p-6 relative overflow-hidden group"
    >
      {principle.discipline && (
        <div className="absolute top-2 right-2 text-xs text-foreground/30 opacity-50 group-hover:opacity-100 transition-opacity">
          {principle.discipline}
        </div>
      )}
      <div className="flex items-center mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-foreground mr-3">
          {principle.emoji || principle.number}
        </div>
        <h3 className="text-xl text-[var(--white)] font-bold">{principle.title}</h3>
      </div>
      <div className="text-sm text-foreground font-mono mb-2">{principle.japaneseSymbol}</div>
      <p className="text-foreground/80">{principle.description}</p>
      <div className="absolute bottom-2 right-2 text-xs text-foreground/30">
        #{principle.number}/64
      </div>
    </motion.div>
  );
};

export default ZenPrincipleCard;