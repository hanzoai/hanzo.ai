
import React from "react";
import { motion } from "framer-motion";

interface AITunnelGridProps {
  mousePosition: { x: number; y: number };
}

const AITunnelGrid: React.FC<AITunnelGridProps> = ({ mousePosition }) => {
  // Create perspective lines pointing to a vanishing point
  const perspectiveLines = [];
  const centerX = 50;
  const centerY = 50;
  const lineCount = 16; // More lines for a denser effect
  
  // Create rays emanating from the center (vanishing point)
  for (let i = 0; i < lineCount; i++) {
    const angle = (i / lineCount) * Math.PI * 2;
    const endX = 50 + Math.cos(angle) * 150; // Extend beyond viewport
    const endY = 50 + Math.sin(angle) * 150; // Extend beyond viewport
    
    perspectiveLines.push(
      <motion.div
        key={`ray-${i}`}
        className="absolute bg-purple-500/10"
        style={{
          height: "1px",
          width: "1px",
          left: `${centerX}%`,
          top: `${centerY}%`,
          transformOrigin: `0 0`,
          transform: `rotate(${angle}rad) scale(100)`,
        }}
        animate={{
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.1,
        }}
      />
    );
  }
  
  // Create tunnel segments (rings that move toward the viewer)
  const tunnelSegments = [];
  for (let i = 1; i <= 8; i++) {
    const size = 90 - i * 10; // Gets smaller as it approaches vanishing point
    
    tunnelSegments.push(
      <motion.div
        key={`tunnel-${i}`}
        className="absolute bg-transparent"
        style={{
          width: `${size}%`,
          height: `${size}%`,
          boxSizing: "border-box",
          top: `${(100 - size) / 2}%`,
          left: `${(100 - size) / 2}%`,
          boxShadow: `0 0 10px 1px rgba(149, 76, 233, 0.1)`,
          borderRadius: "50%",
        }}
        animate={{
          scale: [1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 1,
          ease: "linear"
        }}
      />
    );
  }
  
  // Create stars/particles that move toward the vanishing point
  const stars = [];
  for (let i = 0; i < 40; i++) {
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const speed = Math.random() * 5 + 3;
    
    stars.push(
      <motion.div
        key={`star-${i}`}
        className="absolute bg-white rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${initialX}%`,
          top: `${initialY}%`,
          opacity: 0,
        }}
        animate={{
          left: [
            `${initialX}%`, 
            `${centerX + (initialX - centerX) * 0.1}%`
          ],
          top: [
            `${initialY}%`, 
            `${centerY + (initialY - centerY) * 0.1}%`
          ],
          opacity: [0, 0.7, 0],
          scale: [1, 0.2],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 0.2,
          ease: "linear"
        }}
      />
    );
  }
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Perspective rays */}
      {perspectiveLines}
      
      {/* Moving tunnel rings */}
      {tunnelSegments}
      
      {/* Stars flowing to center */}
      {stars}
      
      {/* Glowing center point (vanishing point) */}
      <motion.div
        className="absolute w-3 h-3 bg-purple-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-md"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default AITunnelGrid;
