
import React from "react";
import { motion } from "framer-motion";

interface TrailProps {
  index: number;
}

const Trail: React.FC<TrailProps> = ({ index }) => {
  // Calculate random starting positions that avoid the center
  const angle = Math.random() * Math.PI * 2;
  const distance = 35 + Math.random() * 65; // Keep away from center initially
  
  const startX = 50 + Math.cos(angle) * distance;
  const startY = 50 + Math.sin(angle) * distance;
  
  // Color variations for trails
  const colors = [
    "rgba(155, 135, 245, 0.6)", // Purple
    "rgba(125, 105, 215, 0.6)", // Darker purple
    "rgba(185, 165, 255, 0.6)", // Lighter purple
  ];
  
  const color = colors[Math.floor(Math.random() * colors.length)];
  const length = 20 + Math.random() * 40; // Trail length
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${2 + Math.random() * 1}px`,
        height: `${2 + Math.random() * 1}px`,
        backgroundColor: color,
        left: `${startX}%`,
        top: `${startY}%`,
        filter: "blur(1px)",
        opacity: 0.5 + Math.random() * 0.5,
        boxShadow: `0 0 8px ${color}`,
      }}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: [1, 0.1],
        left: [`${startX}%`, "50%"],
        top: [`${startY}%`, "50%"],
        opacity: [0.8, 0.2],
        boxShadow: [`0 0 8px ${color}`, `0 0 2px ${color}`],
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeIn",
        delay: index * 0.03,
      }}
    />
  );
};

export default Trail;
