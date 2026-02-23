'use client'

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Check } from "lucide-react";

interface ModelData {
  name: string;
  provider: string;
  features: string[];
  description?: string;
}

interface ModelCategoryCardProps {
  model: ModelData;
  modelIndex: number;
  categoryIndex: number;
}

const ModelCategoryCard = ({ model, modelIndex, categoryIndex }: ModelCategoryCardProps) => {
  // Use monochrome styling for frontier AI models, subtle color for others
  const isFrontierAI = categoryIndex === 0;
  const cardClasses = isFrontierAI 
    ? "bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-colors"
    : "bg-[var(--black)]/30 border border-gray-800/30 rounded-xl p-6 hover:border-gray-700/30 transition-colors";
    
  const iconColor = isFrontierAI ? "text-muted-foreground" : "text-muted-foreground";
  const checkColor = isFrontierAI ? "text-muted-foreground" : "text-muted-foreground";

  return (
    <motion.div
      key={modelIndex}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: modelIndex * 0.1 }}
      className={cardClasses}
    >
      <div className="flex items-center mb-3">
        <Cpu className={`h-5 w-5 ${iconColor} mr-2`} />
        <h4 className="text-xl font-semibold text-[var(--white)]">{model.name}</h4>
      </div>
      
      {model.description && (
        <p className="text-sm text-muted-foreground mb-4 italic">{model.description}</p>
      )}
      
      <p className="text-sm text-muted-foreground mb-4">via {model.provider}</p>
      
      <ul className="space-y-2 mb-6">
        {model.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className={`h-5 w-5 ${checkColor} mr-2 flex-shrink-0 mt-0.5`} />
            <span className="text-foreground/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ModelCategoryCard;