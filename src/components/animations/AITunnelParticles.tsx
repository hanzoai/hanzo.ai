
import React from "react";
import { motion } from "framer-motion";

const AITunnelParticles: React.FC = () => {
  // Create hyper speed trails
  const trails = [];
  const trailCount = 80; // Increased number of trails for denser effect
  
  for (let i = 0; i < trailCount; i++) {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const startZ = -2000;
    
    const endX = 50 + (Math.random() * 20 - 10); // Converging toward center
    const endY = 50 + (Math.random() * 20 - 10); // Converging toward center
    const endZ = 500;
    
    // Calculate length based on distance from center to create a star-field effect
    const distanceFromCenter = Math.sqrt(
      Math.pow((startX - 50), 2) + 
      Math.pow((startY - 50), 2)
    );
    
    const length = 100 + distanceFromCenter * 2; // Longer trails
    const opacity = 0.2 + Math.random() * 0.6; // Brighter trails
    const width = Math.random() * 2 + 0.5; // Varying widths
    
    trails.push(
      <motion.div
        key={`trail-${i}`}
        className="absolute"
        style={{
          width: `${width}px`,
          height: `${length}px`,
          background: `linear-gradient(to bottom, rgba(155, 135, 245, ${opacity}) 0%, rgba(155, 135, 245, 0) 100%)`,
          left: `${startX}%`,
          top: `${startY}%`,
          transform: `translateZ(${startZ}px) rotateX(90deg)`,
        }}
        animate={{
          left: [`${startX}%`, `${endX}%`],
          top: [`${startY}%`, `${endY}%`],
          translateZ: [startZ, endZ],
          opacity: [opacity, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: i * 0.05,
        }}
      />
    );
  }
  
  // Create bright particles that fly through the tunnel
  const particles = [];
  const particleCount = 40; // More particles
  
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const z = -2000 - (Math.random() * 1000);
    const size = Math.random() * 2 + 1;
    const brightness = 0.8 + Math.random() * 0.2; // Brighter particles
    
    particles.push(
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `rgba(255, 255, 255, ${brightness})`,
          boxShadow: `0 0 ${size * 4}px rgba(255, 255, 255, ${brightness * 0.8})`,
          left: `${x}%`,
          top: `${y}%`,
          transform: `translateZ(${z}px)`,
        }}
        animate={{
          translateZ: [z, z + 2500],
          scale: [1, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: i * 0.1,
        }}
      />
    );
  }
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {trails}
      {particles}
    </div>
  );
};

export default AITunnelParticles;
