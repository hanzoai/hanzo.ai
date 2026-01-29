
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import HeroTitle from "@/components/hero/HeroTitle";
import HeroDescription from "@/components/hero/HeroDescription";
import HeroButtons from "@/components/hero/HeroButtons";
import HeroFeatures from "@/components/hero/HeroFeatures";
import { GridLines, BlueprintLine, ArchitecturalBox } from "@/components/ui/architectural-elements";

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
      <div className="absolute inset-0 bg-[var(--black)]" />

      {/* Architectural grid background with minimal opacity */}
      <GridLines spacing={50} opacity={0.03} />
      
      {/* Blueprint lines with minimal opacity */}
      <BlueprintLine orientation="horizontal" position="15%" color="rgba(200, 200, 200, 0.03)" />
      <BlueprintLine orientation="horizontal" position="85%" color="rgba(200, 200, 200, 0.03)" />
      <BlueprintLine orientation="vertical" position="15%" color="rgba(200, 200, 200, 0.03)" />
      <BlueprintLine orientation="vertical" position="85%" color="rgba(200, 200, 200, 0.03)" />
      
      {/* Background subtle gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-red-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <ArchitecturalBox 
          className="text-center bg-transparent p-4 sm:p-6 md:p-8 mx-auto"
          showCorners={true}
          showGrid={false}
          cornerSize={40}
          cornerColor="rgba(200, 200, 200, 0.05)"
        >
          <HeroTitle 
            mousePosition={mousePosition}
            containerRef={containerRef}
            onAnimationComplete={() => setAnimationComplete(true)}
            animationComplete={animationComplete}
            onTitleAnimationComplete={() => setTitleAnimationComplete(true)}
          />

          <HeroDescription titleAnimationComplete={titleAnimationComplete} />

          <div className="flex justify-center">
            <HeroButtons titleAnimationComplete={titleAnimationComplete} />
          </div>
          
          <div className="mt-12">
            <HeroFeatures titleAnimationComplete={titleAnimationComplete} />
          </div>
        </ArchitecturalBox>
      </div>
    </div>
  );
};

export default Hero;
