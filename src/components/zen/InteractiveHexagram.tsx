
import React, { useState } from "react";
import { motion } from "framer-motion";
import IChingHexagram from "./svg/IChingHexagram";

export interface HexagramDetails {
  id: string;
  name: string;
  chineseName: string;
  pinyin: string;
  lines: { type: 'solid' | 'broken' }[];
  principle: string;
  description?: string;
}

interface InteractiveHexagramProps {
  hexagram: HexagramDetails;
  index: number;
  onClick: (hexagram: HexagramDetails) => void;
  isSelected?: boolean;
}

const InteractiveHexagram: React.FC<InteractiveHexagramProps> = ({
  hexagram,
  index,
  onClick,
  isSelected = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className={`p-3 border ${isSelected ? 'border-[#fd4444]/50 bg-red-900/20' : 'border-gray-800/50 bg-gray-900/30'}
                 rounded-md cursor-pointer hover:bg-gray-800/40 transition-all duration-200 flex flex-col items-center justify-center`}
      onClick={() => onClick(hexagram)}
      whileHover={{ y: -2 }}
    >
      <div className="text-xs text-neutral-500 mb-1">{hexagram.id}</div>
      <IChingHexagram 
        lines={hexagram.lines} 
        size={32} 
        className={`${isSelected ? 'text-[#fd4444]' : 'text-[var(--white)]/80'} mb-2`} 
      />
      <div className="text-center text-xs text-neutral-400">
        {hexagram.chineseName}
      </div>
    </motion.div>
  );
};

export default InteractiveHexagram;
