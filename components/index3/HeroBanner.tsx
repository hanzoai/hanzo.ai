'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowDown } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const HeroBanner = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/30 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <ChromeText 
            as="h1" 
            className="text-4xl md:text-6xl font-bold mb-6"
            preHeading="AI-Native Platform for Building the Future"
          >
            Accelerate your vision.<br />Scale without limits.
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mt-6">
            Hanzo is the AI-native platform purpose-built to power innovative software companies. 
            From ideation to deployment, Hanzo delivers everything you need to streamline product
            development, accelerate growth, and scale effortlessly.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-white hover:bg-[#cccccc] border-none">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
            Learn More
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <a href="#platform" className="text-neutral-400 hover:text-[var(--white)] transition-colors flex items-center justify-center">
            Scroll to explore
            <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
