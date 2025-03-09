
import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  scanPoints: Array<{ x: number; y: number; active: boolean }>;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ scanPoints }) => {
  // Generate fewer connection lines between active points for cleaner look
  const connections = useMemo(() => {
    const result = [];
    const activePoints = scanPoints.filter(p => p.active);
    
    if (activePoints.length >= 2) {
      // Only create a few strategic connections
      const maxConnections = Math.min(8, Math.floor(activePoints.length / 2));
      
      for (let i = 0; i < maxConnections; i++) {
        const sourceIndex = Math.floor(i * (activePoints.length / maxConnections));
        const targetIndex = (sourceIndex + Math.floor(activePoints.length / 2)) % activePoints.length;
        
        result.push({
          id: `conn-${sourceIndex}-${targetIndex}`,
          source: activePoints[sourceIndex],
          target: activePoints[targetIndex],
          speed: Math.random() * 2 + 3 // Random speed between 3-5 seconds
        });
      }
    }
    
    return result;
  }, [scanPoints]);
  
  return (
    <>
      {/* Background blur elements - subtle blue/cyan */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-900/5 rounded-full blur-3xl"></div>
      
      {/* Grid pattern - very subtle */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(rgba(100, 150, 200, 0.1) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}></div>
      
      {/* Background grid points - less of them */}
      {scanPoints.filter((_, idx) => idx % 2 === 0).map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/30"
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%` 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: point.active ? [0, 0.5, 0.3] : 0,
            scale: point.active ? [0, 1.1, 1] : 0
          }}
          transition={{ 
            duration: 2,
            repeat: point.active ? Infinity : 0,
            repeatType: "loop",
            repeatDelay: 4
          }}
        />
      ))}
      
      {/* Limit connection lines for cleaner display */}
      {connections.slice(0, 5).map((conn) => (
        <React.Fragment key={conn.id}>
          {/* Static connection line - more transparent */}
          <div
            className="absolute h-px bg-blue-400/5"
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
            className="absolute h-1 w-1.5 rounded-full bg-blue-400/50 shadow-sm shadow-blue-300/30"
            style={{
              left: `${conn.source.x}%`,
              top: `${conn.source.y}%`,
            }}
            animate={{
              left: [`${conn.source.x}%`, `${conn.target.x}%`],
              top: [`${conn.source.y}%`, `${conn.target.y}%`],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: conn.speed,
              repeat: Infinity,
              repeatDelay: Math.random() * 3 + 1, // Longer delay between pulses for less clutter
              ease: "linear"
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default BackgroundEffects;
