
import React from "react";
import { motion } from "framer-motion";

interface AITunnelGridProps {
  mousePosition: { x: number; y: number };
}

const AITunnelGrid: React.FC<AITunnelGridProps> = ({ mousePosition }) => {
  // Generate grid lines
  const gridSize = 8; // 8x8 grid
  const gridLines = [];
  
  // Create horizontal and vertical grid lines
  for (let i = 0; i <= gridSize; i++) {
    const position = (i / gridSize) * 100;
    
    // Horizontal lines
    gridLines.push(
      <motion.div
        key={`h-${i}`}
        className="absolute h-[1px] w-full bg-purple-500/10"
        style={{ top: `${position}%` }}
        animate={{
          opacity: [0.2, 0.1, 0.2],
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.2,
        }}
      />
    );
    
    // Vertical lines
    gridLines.push(
      <motion.div
        key={`v-${i}`}
        className="absolute w-[1px] h-full bg-purple-500/10"
        style={{ left: `${position}%` }}
        animate={{
          opacity: [0.2, 0.1, 0.2],
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.2,
        }}
      />
    );
  }
  
  // Create perspective lines
  const perspectiveLines = [];
  for (let i = 0; i < 4; i++) {
    const corner = {
      x: i % 2 === 0 ? 0 : 100,
      y: i < 2 ? 0 : 100,
    };
    
    perspectiveLines.push(
      <motion.div
        key={`p-${i}`}
        className="absolute bg-purple-500/5"
        style={{
          width: "1px",
          height: "1px",
          left: `${corner.x}%`,
          top: `${corner.y}%`,
          transformOrigin: `${corner.x}% ${corner.y}%`,
        }}
        animate={{
          width: ["1px", "200%"],
          height: ["1px", "200%"],
        }}
        transition={{
          duration: 0.01, // Instant expansion
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
    );
  }
  
  // Create 3D tunnel segments
  const tunnelSegments = [];
  for (let i = 1; i <= 5; i++) {
    tunnelSegments.push(
      <motion.div
        key={`tunnel-${i}`}
        className="absolute border border-purple-500/10 w-[90%] h-[90%]"
        style={{
          top: "5%",
          left: "5%",
          transform: `translateZ(${-i * 200}px)`,
          boxSizing: "border-box",
        }}
        animate={{
          rotateX: [0, mousePosition.y * 5],
          rotateY: [0, mousePosition.x * 5],
          translateZ: [(-i * 200) - 10, (-i * 200) + 10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    );
  }
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Grid lines */}
      {gridLines}
      
      {/* Perspective lines */}
      {perspectiveLines}
      
      {/* Tunnel segments */}
      {tunnelSegments}
      
      {/* Glowing center point */}
      <motion.div
        className="absolute w-2 h-2 bg-purple-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm"
        style={{ transform: "translateZ(-1000px)" }}
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
