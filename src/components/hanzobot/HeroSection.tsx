
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Star, ArrowRight } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-black"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-900/30 border border-purple-500/50 text-purple-300 text-sm font-medium">
            Multi-Agent Simulation Framework
          </div>
          
          <ChromeText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hanzo Bot
          </ChromeText>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            A powerful framework for creating, deploying, and managing autonomous AI agents.
            Build intelligent systems that can interact across multiple platforms while maintaining 
            consistent personalities and knowledge.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 bg-white/5 hover:bg-white/10"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
              <div className="ml-2 flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-gray-300 text-sm">Star</span>
              </div>
            </Button>
          </div>
          
          <div className="text-gray-500 text-sm">
            As seen powering 
            <a href="https://twitter.com/DegenSpartanAI" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 mx-1">@DegenSpartanAI</a> 
            and 
            <a href="https://twitter.com/aixvc_agent" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 mx-1">@aixvc_agent</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
