'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import AnimatedSection, { AnimatedHeading, AnimatedStaggerContainer } from "@/components/ui/animated-section";
import { buttonAnimation, createAnimationVariant, curves } from "@/components/ui/animation-variants";
import ChromeText from "@/components/ui/chrome-text";

const fadeInUpVariant = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15,
  blur: 8
});

const HeroSection = () => {
  return (
    <AnimatedSection className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ffffff]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ffffff]/10 rounded-full blur-3xl"></div>

      <AnimatedStaggerContainer className="max-w-5xl mx-auto text-center relative z-10" delayFactor={0.07}>
        <AnimatedHeading>
          <div className="inline-block px-4 py-1 rounded-full bg-red-900/30 border border-[#ffffff]/30 text-[#ff6b6b] text-sm font-medium mb-6">
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
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-[#ffffff] to-[#ff6b6b] hover:from-[#cccccc] hover:to-[#ffffff] border-none">
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
