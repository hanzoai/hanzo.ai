
import React from "react";
import { motion } from "framer-motion";

interface PerspectiveRaysProps {
  lineCount?: number;
}

const PerspectiveRays: React.FC<PerspectiveRaysProps> = ({ lineCount = 24 }) => {
  const perspectiveLines = [];
  const centerX = 50;
  const centerY = 50;
  
  // Create rays emanating from the center (vanishing point)
  for (let i = 0; i < lineCount; i++) {
    const angle = (i / lineCount) * Math.PI * 2;
    const distance = 100; // Distance from center to edge
    
    // Calculate end point coordinates based on angle
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;
    
    perspectiveLines.push(
      <motion.div
        key={`ray-${i}`}
        className="absolute bg-purple-500/10"
        style={{
          height: "1px",
          width: "0", // Start with zero width, will animate to full length
          left: `${centerX}%`,
          top: `${centerY}%`,
          transformOrigin: "left center",
          transform: `rotate(${angle}rad)`,
        }}
        animate={{
          width: "150%", // Extend beyond the viewport
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
  
  return <>{perspectiveLines}</>;
};

export default PerspectiveRays;
