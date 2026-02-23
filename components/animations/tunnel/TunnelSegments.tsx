'use client'


import React from "react";
import { motion } from "framer-motion";

const TunnelSegments: React.FC = () => {
  const tunnelSegments = [];
  
  for (let i = 1; i <= 10; i++) {
    const size = 90 - i * 8; // Gets smaller as it approaches vanishing point
    
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
  
  return <>{tunnelSegments}</>;
};

export default TunnelSegments;
