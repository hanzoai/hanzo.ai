
import React from "react";
import { motion } from "framer-motion";
import { ScanPointType } from "./types";

interface BackgroundGridProps {
  scanPoints: ScanPointType[];
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({ scanPoints }) => {
  return (
    <>
      {scanPoints.map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1 w-1 rounded-full bg-purple-500/20"
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%` 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: point.active ? [0, 0.5, 0.3] : 0,
            scale: point.active ? [0, 1, 1] : 0
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

export default BackgroundGrid;
