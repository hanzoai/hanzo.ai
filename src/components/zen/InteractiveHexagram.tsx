
import React from "react";
import { motion } from "framer-motion";
import { HexagramDetails } from "./types/hexagram";

interface InteractiveHexagramProps {
  hexagram: HexagramDetails;
  index: number;
  onClick: (hexagram: HexagramDetails) => void;
  isSelected?: boolean;
  isFlipped?: boolean;
}

const InteractiveHexagram: React.FC<InteractiveHexagramProps> = ({
  hexagram,
  index,
  onClick,
  isSelected = false,
  isFlipped = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotateY: isFlipped ? 180 : 0
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.01,
        rotateY: { duration: 0.6 }
      }}
      className={`
        aspect-square 
        flex flex-col items-center justify-center 
        cursor-pointer 
        rounded-md
        bg-gray-900/50
        backdrop-blur-sm
        border
        p-1 
        ${isSelected ? 'border-purple-500' : 'border-gray-800/50'}
        ${isSelected ? 'shadow-glow' : ''}
        preserve-3d
        perspective-1000
      `}
      onClick={() => onClick(hexagram)}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <div className="relative w-full h-full" style={{ 
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s"
      }}>
        {/* Front side */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden">
          <div className="flex flex-col gap-1 items-center justify-center">
            {hexagram.lines.map((line, lineIndex) => (
              <div 
                key={`${hexagram.id}-line-${lineIndex}`} 
                className={`
                  ${line.type === "solid" ? "w-full h-1" : "flex justify-between w-full"}
                  ${isSelected ? "bg-purple-500" : "bg-gray-400"}
                `}
              >
                {line.type === "broken" && (
                  <>
                    <div className={`w-[45%] h-1 ${isSelected ? "bg-purple-500" : "bg-gray-400"}`}></div>
                    <div className={`w-[45%] h-1 ${isSelected ? "bg-purple-500" : "bg-gray-400"}`}></div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-1 text-[8px] text-center text-gray-400">
            {hexagram.id}
          </div>
        </div>
        
        {/* Back side */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden"
          style={{ transform: "rotateY(180deg)" }}>
          <div className="text-[8px] font-bold text-center text-purple-300 line-clamp-2 p-1">
            {hexagram.name}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveHexagram;
