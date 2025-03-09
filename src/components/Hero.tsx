
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
      <div className="absolute inset-0 bg-black" />

      {/* Architectural grid background */}
      <GridLines spacing={50} opacity={0.15} />
      
      {/* Blueprint lines */}
      <BlueprintLine orientation="horizontal" position="15%" />
      <BlueprintLine orientation="horizontal" position="85%" />
      <BlueprintLine orientation="vertical" position="15%" />
      <BlueprintLine orientation="vertical" position="85%" />
      
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <ArchitecturalBox 
          className="text-center bg-black/0 p-8"
          showCorners={true}
          showGrid={false}
          cornerSize={40}
          cornerColor="rgba(147, 51, 234, 0.3)"
        >
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
        </ArchitecturalBox>
      </div>
    </div>
  );
};

export default Hero;
