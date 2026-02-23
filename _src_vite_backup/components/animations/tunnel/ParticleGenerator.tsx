
import React from "react";
import Particle from "./Particle";

interface ParticleGeneratorProps {
  particleCount: number;
}

const ParticleGenerator: React.FC<ParticleGeneratorProps> = ({ particleCount }) => {
  const particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    // Spread particles throughout the viewport with bias toward edges
    const angle = Math.random() * Math.PI * 2;
    const distance = 30 + Math.random() * 70; // Keep away from center initially
    
    const x = 50 + Math.cos(angle) * distance;
    const y = 50 + Math.sin(angle) * distance;
    
    const z = -2000 - (Math.random() * 1000);
    const size = 1 + Math.random() * 3; // Slightly larger particles
    const brightness = 0.7 + Math.random() * 0.3; // Brighter particles
    
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
