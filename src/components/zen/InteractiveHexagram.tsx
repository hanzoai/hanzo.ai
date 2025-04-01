
import React from "react";
import { motion } from "framer-motion";
import IChingHexagram from "./svg/IChingHexagram";
import { HexagramDetails } from "./types/hexagram";

interface InteractiveHexagramProps {
  hexagram: HexagramDetails;
  index: number;
  onClick: (hexagram: HexagramDetails) => void;
  isSelected: boolean;
}

const InteractiveHexagram: React.FC<InteractiveHexagramProps> = ({ 
  hexagram, 
  index, 
  onClick, 
  isSelected 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: (index % 24) * 0.02 }}
      className={`flex flex-col items-center justify-center aspect-square cursor-pointer group transition-all
        ${isSelected 
          ? 'bg-gray-800/70 border-gray-700 shadow-lg' 
          : 'bg-gray-900/40 border-gray-800/50 hover:bg-gray-800/40 hover:border-gray-800'
        } border rounded-md p-1`}
      onClick={() => onClick(hexagram)}
    >
      <div className="text-xs text-neutral-500 mb-1">{hexagram.id}</div>
      <IChingHexagram 
        lines={hexagram.lines} 
        size={28} 
        className={`${isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-300'} transition-colors`} 
      />
      <div className="mt-1 text-[10px] text-center text-neutral-500 group-hover:text-neutral-400 transition-colors overflow-hidden truncate w-full">
        {hexagram.chineseName}
      </div>
    </motion.div>
  );
};

export default InteractiveHexagram;
