
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import IChingHexagram from "./svg/IChingHexagram";
import TaijiSymbol from "./svg/TaijiSymbol";
import { ichingPrinciples } from "./data/ichingPrinciples";

interface IChingPrinciplesGridProps {
  title?: string;
  description?: string;
}

const IChingPrinciplesGrid: React.FC<IChingPrinciplesGridProps> = ({ 
  title = "The 88 Principles of AI", 
  description = "I Ching-inspired framework for AI engineering and design" 
}) => {
  // Create an 8x11 grid (88 principles)
  const rows = 11;
  const columns = 8;
  
  return (
    <div className="mt-16 mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--white)]">{title}</h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="h-px w-20 bg-gray-700 mx-auto mt-6"></div>
      </motion.div>
      
      <div className="relative">
        <div className="absolute left-4 top-4">
          <TaijiSymbol size={60} className="text-[var(--white)]" />
        </div>
        
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 gap-4 min-w-[800px] p-8 bg-gray-900/30 border border-gray-800 rounded-lg">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {Array.from({ length: columns }).map((_, colIndex) => {
                  const index = rowIndex * columns + colIndex;
                  const hexagram = ichingPrinciples[index] || null;
                  
                  if (!hexagram) return <div key={`empty-${index}`} className="aspect-square"></div>;
                  
                  return (
                    <motion.div
                      key={`hexagram-${hexagram.id}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index % 16) * 0.05 }}
                      className="flex flex-col items-center justify-center p-2 border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 rounded-md transition-all aspect-square cursor-pointer group"
                      title={`${hexagram.id}. ${hexagram.name} (${hexagram.chineseName}${hexagram.pinyin ? ` - ${hexagram.pinyin}` : ''}): ${hexagram.principle}`}
                    >
                      <div className="mb-2 text-xs text-neutral-500">{hexagram.id}</div>
                      <IChingHexagram lines={hexagram.lines} size={32} className="text-[var(--white)] mb-2" />
                      <div className="text-center text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                        {hexagram.chineseName}
                      </div>
                    </motion.div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-neutral-500">
          Hover over each hexagram to see its principle
        </div>
      </div>
    </div>
  );
};

export default IChingPrinciplesGrid;
