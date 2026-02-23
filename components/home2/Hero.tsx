'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/20 to-black"></div>
      
      {/* Animated orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ffffff]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              The AI Engineering Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-300 mb-10">
              Build, deploy, and scale AI applications with unprecedented speed
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#ffffff] hover:bg-[#cccccc] text-[var(--white)] px-8 py-6 text-lg rounded-full"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 px-8 py-6 text-lg rounded-full"
              >
                See Demo
              </Button>
            </div>
            
            <div className="mt-16 text-sm text-neutral-400 flex flex-wrap justify-center gap-x-8 gap-y-2">
              <div>3.2B+ Downloads</div>
              <div>47k+ GitHub Stars</div>
              <div>900+ Contributors</div>
              <div>10k+ Active Developers</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
