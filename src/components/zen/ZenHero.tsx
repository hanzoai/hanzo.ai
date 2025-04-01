
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZenHero = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex justify-center mb-8 space-x-8">
            <Code className="w-12 h-12 text-neutral-500" />
            <Database className="w-12 h-12 text-neutral-500" />
            <Server className="w-12 h-12 text-neutral-500" />
            <Cpu className="w-12 h-12 text-neutral-500" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
            The Zen of Hanzo
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Engineering enlightenment through our AI Cloud and Developer Experience platform.
            Guided by ancient wisdom, powered by cutting-edge technology.
          </p>
          
          <motion.div 
            className="w-20 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              variant="outline"
              className="border-gray-800 text-neutral-400 hover:text-white hover:border-gray-700"
            >
              <a href="https://github.com/hanzo-io/platform" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button 
              className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white"
            >
              Explore AI Cloud
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center"
        >
          <a 
            href="#principles" 
            className="group flex items-center gap-2 px-4 py-2 rounded-full text-neutral-400 hover:text-white transition-colors"
          >
            <span>Explore Principles</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 4L12 20M12 20L18 14M12 20L6 14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ZenHero;
