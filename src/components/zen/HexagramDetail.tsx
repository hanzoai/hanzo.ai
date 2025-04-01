
import React from "react";
import { motion } from "framer-motion";
import { HexagramDetails } from "./types/hexagram";

interface HexagramDetailProps {
  hexagram: HexagramDetails;
}

const HexagramDetail: React.FC<HexagramDetailProps> = ({ hexagram }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg"
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="shrink-0 w-20 h-24 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-1.5 items-center justify-center">
            {hexagram.lines.map((line, lineIndex) => (
              <div 
                key={`detail-${hexagram.id}-line-${lineIndex}`} 
                className={`
                  ${line.type === "solid" ? "w-16 h-1.5" : "flex justify-between w-16"}
                  bg-purple-400
                `}
              >
                {line.type === "broken" && (
                  <>
                    <div className="w-[45%] h-1.5 bg-purple-400"></div>
                    <div className="w-[45%] h-1.5 bg-purple-400"></div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs text-center text-purple-400 font-mono">
            {hexagram.id}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[var(--white)] mb-2 flex items-center">
            {hexagram.name}
            <span className="text-sm font-normal text-purple-400 ml-2">
              {hexagram.chineseName} {hexagram.pinyin && `(${hexagram.pinyin})`}
            </span>
          </h3>
          
          <div className="mb-4 text-neutral-300 text-sm">
            <strong className="text-purple-300">Meaning:</strong> {hexagram.meaning}
          </div>
          
          <div className="text-neutral-300">
            <strong className="text-purple-300">Engineering Principle:</strong> {hexagram.principle}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HexagramDetail;
