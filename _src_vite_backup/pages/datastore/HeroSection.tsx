
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/30 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fd4444]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#fd4444]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#fd4444]/20 border border-[#fd4444]/30 text-[#fd4444] text-sm font-medium mb-6">
            Hanzo Datastore
          </div>
          <ChromeText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            The Fastest Open-Source Planet Scale Datastore
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mt-6">
            Hanzo Datastore is a column-oriented data store that enables its users to generate powerful analytics, 
            using SQL queries, in real-time.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-[#fd4444] to-[#ff6b6b] hover:from-[#e03e3e] hover:to-[#fd4444] border-none">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
            Documentation
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <a href="#features" className="text-neutral-400 hover:text-[var(--white)] transition-colors flex items-center justify-center">
            Scroll to explore
            <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
