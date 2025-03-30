
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHexagram, { HexagramDetails } from "./InteractiveHexagram";
import HexagramDetail from "./HexagramDetail";
import { ichingPrinciples } from "./data/ichingPrinciples";

interface HexagramsGridProps {
  title?: string;
  description?: string;
}

const HexagramsGrid: React.FC<HexagramsGridProps> = ({
  title = "The 64 Hexagrams",
  description = "Ancient wisdom for modern engineering"
}) => {
  const [selectedHexagram, setSelectedHexagram] = useState<HexagramDetails | null>(null);
  
  // Create a grid of 8x8 = 64 hexagrams
  const rows = 8;
  const columns = 8;
  
  const handleHexagramClick = (hexagram: HexagramDetails) => {
    setSelectedHexagram(hexagram);
  };
  
  return (
    <div className="py-16" id="hexagrams">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="h-px w-20 bg-gray-800 mx-auto mt-6"></div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {selectedHexagram && (
          <div className="mb-10 max-w-3xl mx-auto px-4">
            <HexagramDetail hexagram={selectedHexagram} />
          </div>
        )}
      </AnimatePresence>
      
      <div className="relative px-4">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2 md:gap-3 min-w-[320px] p-4 md:p-6 bg-gray-900/20 border border-gray-800/50 rounded-lg mx-auto max-w-5xl">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {Array.from({ length: columns }).map((_, colIndex) => {
                  const index = rowIndex * columns + colIndex;
                  const hexagram = ichingPrinciples[index] || null;
                  
                  if (!hexagram) return <div key={`empty-${index}`} className="aspect-square"></div>;
                  
                  return (
                    <InteractiveHexagram 
                      key={`hexagram-${hexagram.id}`}
                      hexagram={hexagram}
                      index={index}
                      onClick={handleHexagramClick}
                      isSelected={selectedHexagram?.id === hexagram.id}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Click on a hexagram to view its meaning and principle
        </div>
      </div>
    </div>
  );
};

export default HexagramsGrid;
