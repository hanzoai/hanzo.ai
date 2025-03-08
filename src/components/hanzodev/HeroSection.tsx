
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Full-Stack AI DX Platform and AI workforce for 
            <span className="text-gradient-steel block mt-2">high growth Startups</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
          <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10">
            <a href="#watch">Watch the Agent Work</a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400 mb-6">The best engineering teams use AI Agents</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* We would add company logos here */}
            <div className="h-8 w-24 bg-gray-800/50 rounded-md"></div>
            <div className="h-8 w-28 bg-gray-800/50 rounded-md"></div>
            <div className="h-8 w-20 bg-gray-800/50 rounded-md"></div>
            <div className="h-8 w-26 bg-gray-800/50 rounded-md"></div>
          </div>
        </motion.div>
      </div>

      {/* Instead of using <style jsx>, we'll use a regular <style> tag */}
      <style>
        {`
        .text-gradient-steel {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 6s ease infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
