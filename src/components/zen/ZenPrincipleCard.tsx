
import React from "react";
import { motion } from "framer-motion";

export interface ZenPrinciple {
  number: string;
  title: string;
  japaneseSymbol: string;
  description: string;
}

interface ZenPrincipleCardProps {
  principle: ZenPrinciple;
  index: number;
}

const ZenPrincipleCard: React.FC<ZenPrincipleCardProps> = ({ principle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6"
    >
      <div className="flex items-center mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 mr-3">
          {principle.number}
        </div>
        <h3 className="text-xl text-white font-bold">{principle.title}</h3>
      </div>
      <div className="text-sm text-purple-400 font-mono mb-2">{principle.japaneseSymbol}</div>
      <p className="text-gray-300">{principle.description}</p>
    </motion.div>
  );
};

export default ZenPrincipleCard;
