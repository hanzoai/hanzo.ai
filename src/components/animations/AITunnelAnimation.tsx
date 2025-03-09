
import React, { useRef } from "react";
import { motion } from "framer-motion";
import AITunnelGrid from "./AITunnelGrid";
import AITunnelParticles from "./AITunnelParticles";
import AITunnelContent from "./AITunnelContent";

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
    >
      {/* 3D Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        animate={{ 
          rotateX: [0, 3, 0, -3, 0],
          rotateY: [0, -3, 0, 3, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
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
      </motion.div>
    </div>
  );
};

export default AITunnelAnimation;
