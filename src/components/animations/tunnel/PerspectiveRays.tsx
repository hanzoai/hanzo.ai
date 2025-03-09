
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
    
    perspectiveLines.push(
      <motion.div
        key={`ray-${i}`}
        className="absolute bg-purple-500/10"
        style={{
          height: "1px",
          width: "1px",
          left: `${centerX}%`,
          top: `${centerY}%`,
          transformOrigin: "0 0",
          transform: `rotate(${angle}rad) scale(150)`,
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
  
  return <>{perspectiveLines}</>;
};

export default PerspectiveRays;
