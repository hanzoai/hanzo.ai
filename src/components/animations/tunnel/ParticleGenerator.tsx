
import React from "react";
import Particle from "./Particle";

interface ParticleGeneratorProps {
  particleCount: number;
}

const ParticleGenerator: React.FC<ParticleGeneratorProps> = ({ particleCount }) => {
  const particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const z = -2000 - (Math.random() * 1000);
    const size = Math.random() * 2 + 1;
    const brightness = 0.8 + Math.random() * 0.2; // Brighter particles
    
    particles.push(
      <Particle
        key={`particle-generator-${i}`}
        x={x}
        y={y}
        z={z}
        size={size}
        brightness={brightness}
        index={i}
      />
    );
  }
  
  return <>{particles}</>;
};

export default ParticleGenerator;
