
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hexagram } from "./data/zenHexagrams";

interface HexagramCardProps {
  hexagram: Hexagram;
  index: number;
}

const HexagramCard: React.FC<HexagramCardProps> = ({ hexagram, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = hexagram.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/30 backdrop-blur-sm border border-purple-500/10 rounded-lg p-8 flex flex-col h-full hover:border-purple-500/30 transition-all cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
          <Icon className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{hexagram.title}</h3>
          <p className="text-purple-300 text-sm">{hexagram.category}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6">{hexagram.description}</p>
      
      <div className={`space-y-4 flex-1 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-32'}`}>
        {hexagram.principles.map((principle, i) => {
          const [title, details] = principle.split(': ');
          
          return (
            <div key={i} className="text-gray-300">
              <span className="text-purple-400 font-medium">{title}:</span> {details}
            </div>
          );
        })}
      </div>
      
      {!isExpanded && (
        <div className="text-purple-400 text-sm mt-4 text-center">
          Click to expand
        </div>
      )}
    </motion.div>
  );
};

export default HexagramCard;
