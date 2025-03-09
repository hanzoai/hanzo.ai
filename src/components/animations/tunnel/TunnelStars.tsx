
import React from "react";
import { motion } from "framer-motion";

interface TunnelStarsProps {
  starCount?: number;
}

const TunnelStars: React.FC<TunnelStarsProps> = ({ starCount = 60 }) => {
  const stars = [];
  const centerX = 50;
  const centerY = 50;
  
  for (let i = 0; i < starCount; i++) {
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
  
  return <>{stars}</>;
};

export default TunnelStars;
