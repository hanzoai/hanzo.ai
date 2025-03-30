
import React from "react";
import { motion } from "framer-motion";
import { HexagramDetails } from "./InteractiveHexagram";
import IChingHexagram from "./svg/IChingHexagram";

interface HexagramDetailProps {
  hexagram: HexagramDetails;
}

const HexagramDetail: React.FC<HexagramDetailProps> = ({ hexagram }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900/40 border border-gray-800/70 rounded-lg p-6 backdrop-blur-sm"
    >
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <IChingHexagram lines={hexagram.lines} size={64} className="text-white" />
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-white">{hexagram.name}</h3>
            <span className="text-xl text-gray-400">{hexagram.chineseName}</span>
            <span className="text-sm text-gray-500">{hexagram.pinyin}</span>
          </div>
          <div className="text-gray-400 text-sm">Hexagram {hexagram.id}</div>
        </div>
      </div>
      
      <div className="mt-4 mb-6 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      
      <p className="text-gray-300 mb-4">{hexagram.description || hexagram.principle}</p>
      
      <div className="mt-4 text-sm text-gray-500">
        Click on any hexagram in the grid to view its details
      </div>
    </motion.div>
  );
};

export default HexagramDetail;
