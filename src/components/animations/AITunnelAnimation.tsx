
import React, { useRef } from "react";
import AITunnelGrid from "./AITunnelGrid";
import AITunnelParticles from "./AITunnelParticles";
import AITunnelContent from "./AITunnelContent";
import TunnelContainer from "./tunnel/TunnelContainer";

interface AITunnelAnimationProps {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

const AITunnelAnimation: React.FC<AITunnelAnimationProps> = ({
  title = "Accelerating AI Future",
  subtitle = "The platform for modern AI applications",
  showButtons = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden bg-black"
      style={{ border: "none" }} // Explicitly remove any border
    >
      {/* 3D Container */}
      <TunnelContainer>
        {/* Background Grid */}
        <AITunnelGrid mousePosition={{ x: 0.5, y: 0.5 }} />
        
        {/* Floating Particles */}
        <AITunnelParticles />
        
        {/* Centered Content */}
        <AITunnelContent 
          title={title}
          subtitle={subtitle}
          showButtons={showButtons}
        />
      </TunnelContainer>
    </div>
  );
};

export default AITunnelAnimation;
