
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroTitle from "@/components/hero/HeroTitle";

interface HeroSectionProps {
  onAnimationComplete: () => void;
  animationComplete: boolean;
  onTitleAnimationComplete: () => void;
  titleAnimationComplete: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onAnimationComplete,
  animationComplete,
  onTitleAnimationComplete,
  titleAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

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

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <section ref={containerRef} className="pt-32 pb-20 px-4 md:px-8 min-h-[90vh] flex flex-col justify-center relative">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-6xl mx-auto text-center"
      >
        <HeroTitle 
          mousePosition={mousePosition}
          containerRef={containerRef}
          onAnimationComplete={onAnimationComplete}
          animationComplete={animationComplete}
          onTitleAnimationComplete={onTitleAnimationComplete}
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 mb-8 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
        >
          Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, private, transparent, and trusted AI solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-[var(--white)] px-8 py-6 text-lg"
            onClick={handleGetStarted}
          >
            Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-purple-500/30 hover:border-purple-500/70 text-[var(--white)] hover:text-[var(--white)] px-8 py-6 text-lg"
            onClick={() => navigate('/platform')}
          >
            Explore Platform
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
