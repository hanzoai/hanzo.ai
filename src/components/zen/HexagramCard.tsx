
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/30 backdrop-blur-sm border border-purple-500/10 rounded-lg p-8 flex flex-col h-full"
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
      
      <ul className="space-y-4 flex-1">
        {hexagram.principles.map((principle, i) => {
          const [title, details] = principle.split(': ');
          
          return (
            <li key={i} className="text-gray-300">
              <span className="text-purple-400 font-medium">{title}:</span> {details}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default HexagramCard;
