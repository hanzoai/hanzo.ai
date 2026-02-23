'use client'


import React from "react";
import { motion } from "framer-motion";
import { ScanPointType } from "./types";

interface BackgroundGridProps {
  scanPoints: ScanPointType[];
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({ scanPoints }) => {
  // Create pairs of scan points for connection lines - reduced number for performance
  const activePoints = scanPoints.filter(point => point.active).slice(0, 15); // Limit to 15 active points
  const connectionPairs: {from: ScanPointType, to: ScanPointType}[] = [];
  
  // Create connections between some active points - fewer connections
  if (activePoints.length >= 2) {
    for (let i = 0; i < activePoints.length; i += 2) { // Process every other point
      // Connect each point to 1 other point instead of 1-2
      const numConnections = 1;
      for (let j = 0; j < numConnections; j++) {
        // Find a different point to connect to
        const targetIndex = (i + j + 1) % activePoints.length;
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
      {/* Grid points - reduced opacity */}
      {scanPoints.map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1 w-1 rounded-full bg-primary/10" // Reduced opacity
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%`,
            willChange: "opacity, transform" // Performance optimization
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: point.active ? [0, 0.3, 0.2] : 0, // Reduced opacity
            scale: point.active ? [0, 1, 1] : 0
          }}
          transition={{ 
            duration: 2.5, // Slower animation
            repeat: point.active ? Infinity : 0,
            repeatType: "loop",
            repeatDelay: 4 // Longer delay between animations
          }}
        />
      ))}
      
      {/* Connection lines with animated traffic - reduced opacity */}
      {connectionPairs.map((pair, idx) => (
        <React.Fragment key={`connection-${idx}`}>
          {/* Static connection line - more subtle */}
          <div
            className="absolute h-px bg-primary/5" // Reduced opacity
            style={{
              left: `${pair.from.x}%`,
              top: `${pair.from.y}%`,
              width: `${Math.sqrt(Math.pow(pair.to.x - pair.from.x, 2) + Math.pow(pair.to.y - pair.from.y, 2))}%`,
              transform: `rotate(${Math.atan2(pair.to.y - pair.from.y, pair.to.x - pair.from.x)}rad)`,
              transformOrigin: 'left center'
            }}
          />
          
          {/* Animated traffic pulse - less frequent */}
          <motion.div
            className="absolute h-1 w-1 rounded-full bg-primary/30" // Smaller and reduced opacity
            style={{
              left: `${pair.from.x}%`,
              top: `${pair.from.y}%`,
              willChange: "left, top, opacity" // Performance optimization
            }}
            animate={{
              left: [`${pair.from.x}%`, `${pair.to.x}%`],
              top: [`${pair.from.y}%`, `${pair.to.y}%`],
              opacity: [0, 0.5, 0] // Reduced peak opacity
            }}
            transition={{
              duration: Math.random() * 4 + 3, // Slower animation (3-7s)
              repeat: Infinity,
              repeatDelay: Math.random() * 3 + 2, // Longer delay (2-5s)
              ease: "linear"
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default BackgroundGrid;
