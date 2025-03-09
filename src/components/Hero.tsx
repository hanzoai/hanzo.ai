
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import AITunnelAnimation from "@/components/animations/AITunnelAnimation";
import HeroTitle from "@/components/hero/HeroTitle";
import HeroDescription from "@/components/hero/HeroDescription";
import HeroButtons from "@/components/hero/HeroButtons";
import HeroFeatures from "@/components/hero/HeroFeatures";
import HeroStyles from "@/components/hero/HeroStyles";

const Hero = () => {
  const { toast } = useToast();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* AI Tunnel Animation */}
      <AITunnelAnimation 
        title="Accelerating AI"
        subtitle="For a Better Future"
        showButtons={false}
      />

      <HeroStyles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center bg-black/0">
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
      </div>
    </div>
  );
};

export default Hero;
