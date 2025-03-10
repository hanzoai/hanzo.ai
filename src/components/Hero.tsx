
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
  const [featuresVisible, setFeaturesVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    // Check if features should be visible based on viewport height
    const checkFeaturesVisibility = () => {
      if (featuresRef.current && containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        // Hide features if viewport is too small
        setFeaturesVisible(viewportHeight >= containerHeight - 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkFeaturesVisibility);
    
    // Initial check
    checkFeaturesVisibility();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkFeaturesVisibility);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Architectural grid background with minimal opacity */}
      <GridLines spacing={50} opacity={0.03} />
      
      {/* Blueprint lines with minimal opacity */}
      <BlueprintLine orientation="horizontal" position="15%" color="rgba(255, 255, 255, 0.03)" />
      <BlueprintLine orientation="horizontal" position="85%" color="rgba(255, 255, 255, 0.03)" />
      <BlueprintLine orientation="vertical" position="15%" color="rgba(255, 255, 255, 0.03)" />
      <BlueprintLine orientation="vertical" position="85%" color="rgba(255, 255, 255, 0.03)" />
      
      {/* Background subtle gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <ArchitecturalBox 
          className="text-center bg-transparent p-6 sm:p-8 md:p-10"
          showCorners={true}
          showGrid={false}
          cornerSize={40}
          cornerColor="rgba(255, 255, 255, 0.05)"
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
        </ArchitecturalBox>
      </div>

      <div 
        ref={featuresRef} 
        className="fixed left-0 right-0 bottom-6 z-50 transition-opacity duration-300 px-4"
        style={{ opacity: featuresVisible ? 1 : 0 }}
      >
        <HeroFeatures titleAnimationComplete={titleAnimationComplete} />
      </div>
    </div>
  );
};

export default Hero;
