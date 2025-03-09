
import React from "react";
import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  scanPoints: Array<{ x: number; y: number; active: boolean }>;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ scanPoints }) => {
  return (
    <>
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      
      {/* Background grid points */}
      {scanPoints.map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-purple-500/40"
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%` 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: point.active ? [0, 0.7, 0.5] : 0,
            scale: point.active ? [0, 1.2, 1] : 0
          }}
          transition={{ 
            duration: 2,
            repeat: point.active ? Infinity : 0,
            repeatType: "loop",
            repeatDelay: 3
          }}
        />
      ))}
    </>
  );
};

export default BackgroundEffects;
