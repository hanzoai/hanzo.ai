
import React from "react";
import TrailGenerator from "./tunnel/TrailGenerator";
import ParticleGenerator from "./tunnel/ParticleGenerator";

const AITunnelParticles: React.FC = () => {
  // Configuration values - increased for more dramatic effect
  const trailCount = 250; // More trails for denser laser-like effect
  const particleCount = 180; // More particles
  
  return (
    <div className="absolute inset-0 w-full h-full">
      <TrailGenerator trailCount={trailCount} />
      <ParticleGenerator particleCount={particleCount} />
    </div>
  );
};

export default AITunnelParticles;
