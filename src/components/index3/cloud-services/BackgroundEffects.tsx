
import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  scanPoints: Array<{ x: number; y: number; active: boolean }>;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ scanPoints }) => {
  // Generate connection lines between active points
  const connections = useMemo(() => {
    const result = [];
    const activePoints = scanPoints.filter(p => p.active);
    
    if (activePoints.length >= 2) {
      // Create connections between some active points
      for (let i = 0; i < activePoints.length; i++) {
        // Connect each point to 1-2 other points
        const numConnections = 1; // Limit to 1 connection per point to avoid overcrowding
        for (let j = 0; j < numConnections; j++) {
          // Find a different point to connect to
          const targetIndex = (i + 1 + Math.floor(Math.random() * (activePoints.length - 1))) % activePoints.length;
          if (targetIndex !== i) {
            result.push({
              id: `conn-${i}-${targetIndex}`,
              source: activePoints[i],
              target: activePoints[targetIndex],
              speed: Math.random() * 3 + 2 // Random speed between 2-5 seconds
            });
          }
        }
      }
    }
    
    return result;
  }, [scanPoints]);
  
  return (
    <>
      {/* Background blur elements - changed from purple to blue/cyan */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-900/5 rounded-full blur-3xl"></div>
      
      {/* Grid pattern - changed from purple to blue */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(rgba(100, 150, 200, 0.15) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}></div>
      
      {/* Background grid points - changed from purple to blue */}
      {scanPoints.map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/40"
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
      
      {/* Connection lines */}
      {connections.map((conn) => (
        <React.Fragment key={conn.id}>
          {/* Static connection line */}
          <div
            className="absolute h-px bg-blue-400/10"
            style={{
              left: `${conn.source.x}%`,
              top: `${conn.source.y}%`,
              width: `${Math.sqrt(Math.pow(conn.target.x - conn.source.x, 2) + Math.pow(conn.target.y - conn.source.y, 2))}%`,
              transform: `rotate(${Math.atan2(conn.target.y - conn.source.y, conn.target.x - conn.source.x)}rad)`,
              transformOrigin: 'left center'
            }}
          />
          
          {/* Animated network packet */}
          <motion.div
            className="absolute h-1 w-2 rounded-full bg-blue-400/70 shadow-sm shadow-blue-300/50"
            style={{
              left: `${conn.source.x}%`,
              top: `${conn.source.y}%`,
            }}
            animate={{
              left: [`${conn.source.x}%`, `${conn.target.x}%`],
              top: [`${conn.source.y}%`, `${conn.target.y}%`],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: conn.speed,
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

export default BackgroundEffects;
