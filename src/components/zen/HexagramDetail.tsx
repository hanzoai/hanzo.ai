
import React from "react";
import { motion } from "framer-motion";
import IChingHexagram from "./svg/IChingHexagram";
import { HexagramDetails } from "./types/hexagram";

interface HexagramDetailProps {
  hexagram: HexagramDetails;
}

const HexagramDetail: React.FC<HexagramDetailProps> = ({ hexagram }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
    >
      <div className="flex items-start">
        <div className="mr-4 flex flex-col items-center">
          <IChingHexagram lines={hexagram.lines} size={64} className="text-white mb-2" />
          <div className="text-sm text-neutral-500">{hexagram.id}</div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{hexagram.name}</h3>
          <div className="text-sm text-neutral-400 mb-4">
            {hexagram.chineseName}
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-neutral-300 mb-1">Meaning</h4>
              <p className="text-neutral-400">{hexagram.meaning}</p>
            </div>
            
            {hexagram.principle && (
              <div>
                <h4 className="text-sm font-medium text-neutral-300 mb-1">Engineering Principle</h4>
                <p className="text-neutral-400">{hexagram.principle}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HexagramDetail;
