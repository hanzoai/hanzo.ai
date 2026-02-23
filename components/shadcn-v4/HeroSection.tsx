'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, Github, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 border border-white/30 text-white/70 text-sm font-medium">
            New Release
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
            Shadcn/UI with Tailwind v4 & React 19
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            The complete guide to using shadcn/ui components with Tailwind v4 and React 19.
            Get started with the latest features and improvements.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <Button 
            size="lg"
            className="bg-white hover:bg-[#cccccc] text-white rounded-md py-6"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:border-white/30/50 rounded-md py-6"
          >
            <Code2 className="mr-2 h-5 w-5" /> View Demo
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-gray-700 text-white hover:bg-white/10 rounded-md py-6"
          >
            <Github className="mr-2 h-5 w-5" /> Star on GitHub
          </Button>
        </motion.div>
        
        <div className="bg-black/30 border border-white/10 rounded-xl p-6 mx-auto max-w-4xl backdrop-blur-sm">
          <code className="text-sm text-neutral-300 block overflow-x-auto">
            <span className="text-white">npm</span> <span className="text-white/70">install</span> @shadcn/ui <span className="text-white/70">--force</span>
          </code>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
