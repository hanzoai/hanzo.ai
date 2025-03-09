
import React from "react";
import { motion } from "framer-motion";
import { ScanPointType } from "./types";

interface BackgroundGridProps {
  scanPoints: ScanPointType[];
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({ scanPoints }) => {
  // Create pairs of scan points for connection lines
  const activePoints = scanPoints.filter(point => point.active);
  const connectionPairs: {from: ScanPointType, to: ScanPointType}[] = [];
  
  // Create connections between some active points
  if (activePoints.length >= 2) {
    for (let i = 0; i < activePoints.length; i++) {
      // Connect each point to 1-2 other points
      const numConnections = Math.floor(Math.random() * 2) + 1;
      for (let j = 0; j < numConnections; j++) {
        // Find a different point to connect to
        const targetIndex = (i + j + 1 + Math.floor(Math.random() * (activePoints.length - 2))) % activePoints.length;
        if (targetIndex !== i) {
          connectionPairs.push({
            from: activePoints[i],
            to: activePoints[targetIndex]
          });
        }
      }
    }
  }
  
  return (
    <>
      {/* Grid points */}
      {scanPoints.map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1 w-1 rounded-full bg-blue-500/20"
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
      
      {/* Connection lines with animated traffic */}
      {connectionPairs.map((pair, idx) => (
        <React.Fragment key={`connection-${idx}`}>
          {/* Static connection line */}
          <div
            className="absolute h-px bg-blue-400/10"
            style={{
              left: `${pair.from.x}%`,
              top: `${pair.from.y}%`,
              width: `${Math.sqrt(Math.pow(pair.to.x - pair.from.x, 2) + Math.pow(pair.to.y - pair.from.y, 2))}%`,
              transform: `rotate(${Math.atan2(pair.to.y - pair.from.y, pair.to.x - pair.from.x)}rad)`,
              transformOrigin: 'left center'
            }}
          />
          
          {/* Animated traffic pulse */}
          <motion.div
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-400/50"
            style={{
              left: `${pair.from.x}%`,
              top: `${pair.from.y}%`,
            }}
            animate={{
              left: [`${pair.from.x}%`, `${pair.to.x}%`],
              top: [`${pair.from.y}%`, `${pair.to.y}%`],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2, // Random duration between 2-5 seconds
              repeat: Infinity,
              repeatDelay: Math.random() * 2, // Random delay between pulses
              ease: "linear"
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default BackgroundGrid;
