
import React from "react";
import { motion } from "framer-motion";
import { Hexagram } from "./data/zenHexagrams";

interface HexagramCardProps {
  hexagram: Hexagram;
  index: number;
}

const HexagramCard: React.FC<HexagramCardProps> = ({ hexagram, index }) => {
  const Icon = hexagram.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-[var(--black)]/30 backdrop-blur-sm border border-[#fd4444]/10 rounded-lg p-8 flex flex-col h-full hover:border-[#fd4444]/30 transition-all"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mr-4">
          <Icon className="h-6 w-6 text-[#fd4444]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-[var(--white)]">{hexagram.id}. {hexagram.title}</h3>
            <span className="text-xl text-[#ff6b6b]">{hexagram.chineseTitle}</span>
          </div>
          <p className="text-[#ff6b6b] text-sm">{hexagram.pinyin} • {hexagram.category}</p>
        </div>
      </div>
      
      <p className="text-neutral-300 mb-6">{hexagram.description}</p>
      
      <div className="space-y-4 flex-1">
        {hexagram.principles.map((principle, i) => (
          <div key={i} className="text-neutral-300 flex items-start">
            <span className="text-[#fd4444] mr-2">•</span> 
            <span>{principle}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HexagramCard;
