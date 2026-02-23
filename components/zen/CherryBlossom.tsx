'use client'


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CherryBlossomProps {
  count?: number;
  className?: string;
}

const CherryBlossom: React.FC<CherryBlossomProps> = ({ 
  count = 20,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Generate random petals
  const petals = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 10, // 10-20px
    x: Math.random() * 100, // 0-100%
    delay: Math.random() * 10, // 0-10s delay
    duration: Math.random() * 10 + 15, // 15-25s duration
    rotation: Math.random() * 360, // initial rotation
  }));

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: "-50px",
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
          initial={{ y: "-10%", rotateZ: petal.rotation }}
          animate={{
            y: "130vh",
            rotateZ: petal.rotation + 360,
            x: [
              0,
              Math.sin((petal.id % 5) * Math.PI * 2 / 5) * 100,
              Math.sin((petal.id % 5) * Math.PI * 4 / 5) * 50,
              Math.sin((petal.id % 5) * Math.PI * 6 / 5) * 100,
              0
            ]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            style={{ 
              filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))" 
            }}
          >
            <path
              d="M50 0 C60 30 70 50 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0Z"
              fill="rgba(255, 192, 203, 0.7)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default CherryBlossom;
