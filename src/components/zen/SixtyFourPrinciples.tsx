
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHexagram from "./InteractiveHexagram";
import HexagramDetail from "./HexagramDetail";
import { ichingPrinciples } from "./data/ichingPrinciples";
import { HexagramDetails } from "./types/hexagram";

interface SixtyFourPrinciplesProps {
  title?: string;
  description?: string;
}

const SixtyFourPrinciples: React.FC<SixtyFourPrinciplesProps> = ({
  title = "The 64 Hexagrams",
  description = "Ancient wisdom for modern engineering"
}) => {
  const [selectedHexagram, setSelectedHexagram] = useState<HexagramDetails | null>(null);
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());
  
  // Create a grid of 8x8 = 64 hexagrams
  const rows = 8;
  const columns = 8;
  
  const handleHexagramClick = (hexagram: HexagramDetails, index: number) => {
    // Toggle flipped state
    const newFlipped = new Set(flippedIndices);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
      setSelectedHexagram(null);
    } else {
      newFlipped.clear(); // Only one can be flipped at a time
      newFlipped.add(index);
      setSelectedHexagram(hexagram);
    }
    setFlippedIndices(newFlipped);
  };
  
  return (
    <div className="py-16" id="sixty-four-principles">
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
                  const hexagram = index < ichingPrinciples.length ? ichingPrinciples[index] : {
                    id: `empty-${index}`,
                    name: `Principle ${index + 1}`,
                    chineseName: "未定义",
                    lines: [
                      { type: "solid" }, { type: "solid" }, { type: "solid" },
                      { type: "broken" }, { type: "broken" }, { type: "broken" }
                    ],
                    meaning: "Principle to be defined",
                    principle: "Engineering principle to be determined"
                  };
                  
                  return (
                    <InteractiveHexagram 
                      key={`hexagram-${hexagram.id}`}
                      hexagram={hexagram}
                      index={index}
                      onClick={() => handleHexagramClick(hexagram, index)}
                      isSelected={flippedIndices.has(index)}
                      isFlipped={flippedIndices.has(index)}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-neutral-500">
          Click on a hexagram to reveal its meaning and principle
        </div>
      </div>
    </div>
  );
};

export default SixtyFourPrinciples;
