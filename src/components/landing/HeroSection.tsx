
import React, { useState, useRef, useEffect } from "react";
import { HeroTitle, HeroDescription, HeroButtons, HeroFeatures } from "./hero";

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[var(--black)]" />
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-purple-900/20 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
        }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-blue-900/20 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{
          animationDelay: "1s",
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      />
      
      {/* Cloud visualization in background - subtle SVG pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cloud-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,40 Q30,20 40,40 Q55,20 70,40 Q85,20 100,40 L100,70 Q85,90 70,70 Q55,90 40,70 Q30,90 20,70 Z" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cloud-pattern)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <HeroTitle 
          mousePosition={mousePosition}
          containerRef={containerRef}
          onAnimationComplete={() => setAnimationComplete(true)}
          animationComplete={animationComplete}
          onTitleAnimationComplete={() => setTitleAnimationComplete(true)}
        />
        
        <HeroDescription titleAnimationComplete={titleAnimationComplete} />
        
        <HeroButtons titleAnimationComplete={titleAnimationComplete} />
        
        <HeroFeatures titleAnimationComplete={titleAnimationComplete} />
      </div>
    </section>
  );
};

export default HeroSection;
