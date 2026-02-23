'use client'


import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { OperatorModel } from "./operatorModelData";

interface ModelCardProps {
  model: OperatorModel;
  index: number;
}

const ModelCard = ({ model, index }: ModelCardProps) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        bg-gray-900/30 border rounded-xl p-6 hover:bg-gray-900/50 transition-colors relative
        ${model.recommended ? 'border-white/50' : 'border-gray-800'}
      `}
    >
      {model.recommended && (
        <span className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 bg-primary text-[var(--white)] text-xs font-semibold rounded-full">
          Recommended
        </span>
      )}
      
      <h3 className="text-xl font-semibold text-[var(--white)] mb-1">{model.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">by {model.provider}</p>
      
      <ul className="space-y-2 mb-6">
        {model.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-foreground mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-foreground/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="pt-2 mt-auto">
        <p className="text-sm text-muted-foreground font-mono">{model.command}</p>
      </div>
    </motion.div>
  );
};

export default ModelCard;
