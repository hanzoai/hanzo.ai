'use client'


import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@hanzo/ui";
import { createAnimationVariant, curves, timing } from "@/components/ui/animation-variants";
import { BlueprintLine } from "@/components/ui/architectural-elements";

const fadeInAnimation = createAnimationVariant("fadeIn", {
  duration: timing.medium,
  curve: curves.snappy
});

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto mb-32 relative">
      <BlueprintLine orientation="horizontal" position="20%" color="rgba(255,255,255,0.04)" />
      <BlueprintLine orientation="vertical" position="15%" color="rgba(255,255,255,0.04)" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-[var(--white)]">
          Infrastructure for the<br />modern world
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Build, deploy, and scale applications effortlessly with our developer-focused platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="sm" 
            className="bg-[var(--white)] hover:bg-zinc-200 text-primary-foreground transition-colors duration-300"
          >
            Start building <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="border-zinc-800 bg-transparent hover:bg-zinc-900 transition-colors duration-300"
          >
            Documentation
          </Button>
        </div>
        
        <div className="text-sm text-zinc-500 flex items-center justify-center gap-2">
          No credit card required <span className="mx-2">•</span> Cancel anytime
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
