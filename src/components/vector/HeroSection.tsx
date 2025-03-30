
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import AnimatedSection, { AnimatedHeading, AnimatedStaggerContainer } from "@/components/ui/animated-section";
import { createAnimationVariant, curves, buttonAnimation } from "@/components/ui/animation-variants";

const fadeInUpVariant = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15,
  blur: 8
});

const HeroSection = () => {
  return (
    <AnimatedSection className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-violet-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"></div>
      
      <AnimatedStaggerContainer className="max-w-5xl mx-auto text-center relative z-10" delayFactor={0.07}>
        <AnimatedHeading>
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
            Vector Database for AI
          </div>
        </AnimatedHeading>
        
        <AnimatedHeading>
          <ChromeText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            Blazing Fast Vector Search
          </ChromeText>
        </AnimatedHeading>
        
        <motion.p variants={fadeInUpVariant} className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
          Hanzo Vector is a high-performance vector database designed for AI applications,
          with advanced similarity search and seamless integrations with popular ML frameworks.
        </motion.p>
        
        <motion.div 
          variants={buttonAnimation}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-indigo-600 hover:to-indigo-400 border-none">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Documentation
          </Button>
        </motion.div>
      </AnimatedStaggerContainer>
    </AnimatedSection>
  );
};

export default HeroSection;
