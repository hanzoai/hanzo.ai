
import React, { useState, useRef, useEffect } from "react";
import { HeroTitle, HeroDescription, HeroButtons } from "./hero";

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
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px' 
        }} />
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
      </div>
    </section>
  );
};

export default HeroSection;
