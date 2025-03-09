
import React from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
  index: number;
}

const Particle: React.FC<ParticleProps> = ({
  x,
  y,
  z,
  size,
  brightness,
  index
}) => {
  // Create laser-like particles that converge to the center (vanishing point)
  return (
    <motion.div
      key={`particle-${index}`}
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `rgba(255, 255, 255, ${brightness})`,
        boxShadow: `0 0 ${size * 4}px rgba(255, 255, 255, ${brightness * 0.8})`,
        left: `${x}%`,
        top: `${y}%`,
        transform: `translateZ(${z}px)`,
        // Add a trail effect with a gradient
        background: `radial-gradient(circle, rgba(255, 255, 255, ${brightness}) 0%, rgba(160, 120, 255, ${brightness * 0.5}) 70%, rgba(100, 80, 255, 0) 100%)`,
      }}
      animate={{
        translateZ: [z, z + 2500],
        scale: [1, 0.1],
        left: [`${x}%`, `50%`],
        top: [`${y}%`, `50%`],
        opacity: [1, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeIn",
        delay: index * 0.05,
      }}
    />
  );
};

export default Particle;
