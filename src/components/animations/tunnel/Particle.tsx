
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
  // All particles should move toward the center (vanishing point)
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
      }}
      animate={{
        translateZ: [z, z + 2500],
        scale: [1, 0.2],
        left: [`${x}%`, `50%`],
        top: [`${y}%`, `50%`],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: index * 0.1,
      }}
    />
  );
};

export default Particle;
