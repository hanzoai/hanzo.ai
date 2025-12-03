
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--black)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Hanzo - AI App Platform backed by Techstars
          </div>
          <ChromeText
            as="h1"
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            gradient="from-purple-400 to-pink-400"
          >
            Full-Stack AI DX Platform and AI workforce for high growth Startups
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Accelerate your release schedule and ship daily improvements. Hanzo is the AI Coding Agent built to act like another team member, getting work done.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 border-none">
            <a href="#start">Start Clearing Tasks</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
            <a href="#watch">Watch the Agent Work</a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-neutral-400 mb-6">The best engineering teams use AI Agents</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* We would add company logos here */}
            <div className="h-8 w-24 bg-gray-800/50 rounded-md"></div>
            <div className="h-8 w-28 bg-gray-800/50 rounded-md"></div>
            <div className="h-8 w-20 bg-gray-800/50 rounded-md"></div>
            <div className="h-8 w-26 bg-gray-800/50 rounded-md"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
