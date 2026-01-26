
import React from "react";
import { motion, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ChromeText from "@/components/ui/chrome-text";

interface HeroProps {
  mousePosition: { x: number; y: number };
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ mousePosition, opacity, scale }) => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto text-center z-10 relative"
        style={{ opacity, scale }}
      >
        {/* Floating orbs in background */}
        <div className="absolute top-1/4 -right-20 w-40 h-40 bg-[#fd4444]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-[#ff6b6b]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#fd4444]/30 to-[#ff6b6b]/30 text-[var(--white)] text-sm font-medium border border-[#fd4444]/20">
            The Future of AI Development
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ChromeText 
            as="h1" 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
              backgroundSize: "200% 200%"
            }}
          >
            AI Cloud + DX Platform
          </ChromeText>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Build, deploy, and scale AI applications with unmatched speed and efficiency.
            From development to production, Hanzo provides everything you need.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-[#fd4444] hover:bg-[#e03e3e] border-none"
            onClick={() => navigate('/signup')}
          >
            Start Building <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-white/20 bg-[var(--black)]/50 backdrop-blur-sm hover:bg-[var(--white)]/10"
            onClick={() => navigate('/pricing')}
          >
            View Pricing
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 sm:mt-32"
        >
          <div className="flex justify-center">
            <ArrowRight className="h-10 w-10 text-[var(--white)]/50 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
