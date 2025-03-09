
import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Code, Database, Network, Zap, BarChart, CloudLightning } from "lucide-react";

const AITunnelParticles: React.FC = () => {
  // Generate random particles
  const particles = [];
  const particleCount = 30;
  
  // List of available icons
  const icons = [Brain, Cpu, Code, Database, Network, Zap, BarChart, CloudLightning];
  
  for (let i = 0; i < particleCount; i++) {
    const IconComponent = icons[Math.floor(Math.random() * icons.length)];
    const size = Math.floor(Math.random() * 20) + 10; // 10-30px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const z = Math.random() * -2000;
    const rotateSpeed = (Math.random() * 20) - 10; // -10 to 10
    const opacity = Math.random() * 0.5 + 0.1; // 0.1-0.6
    
    // Random data visualization elements
    const particleType = Math.floor(Math.random() * 3);
    
    if (particleType === 0) {
      // Icon
      particles.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translateZ(${z}px)`,
            color: `rgba(155, 135, 245, ${opacity})`,
          }}
          animate={{
            translateZ: [z, z + 1500],
            scale: [1, 0.2],
            rotateX: [0, rotateSpeed * 180],
            rotateY: [0, rotateSpeed * 180],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <IconComponent size={size} />
        </motion.div>
      );
    } else if (particleType === 1) {
      // Data point
      particles.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translateZ(${z}px)`,
            opacity,
          }}
          animate={{
            translateZ: [z, z + 1500],
            scale: [1, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      );
    } else {
      // Binary number
      particles.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute text-[8px] font-mono"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translateZ(${z}px)`,
            color: `rgba(155, 135, 245, ${opacity})`,
          }}
          animate={{
            translateZ: [z, z + 1500],
            scale: [1, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      );
    }
  }
  
  // Create glowing light trails
  const trails = [];
  for (let i = 0; i < 5; i++) {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const startZ = -2000;
    
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;
    const endZ = 500;
    
    trails.push(
      <motion.div
        key={`trail-${i}`}
        className="absolute w-[1px] h-[150px] bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0"
        style={{
          left: `${startX}%`,
          top: `${startY}%`,
          transform: `translateZ(${startZ}px) rotateX(90deg)`,
        }}
        animate={{
          left: [`${startX}%`, `${endX}%`],
          top: [`${startY}%`, `${endY}%`],
          translateZ: [startZ, endZ],
        }}
        transition={{
          duration: 8 + Math.random() * 7,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: i * 2,
        }}
      />
    );
  }
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {particles}
      {trails}
    </div>
  );
};

export default AITunnelParticles;
