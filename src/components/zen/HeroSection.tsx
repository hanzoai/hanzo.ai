
import React from "react";
import { motion } from "framer-motion";
import TaijiSymbol from "./svg/TaijiSymbol";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto z-10"
      >
        <div className="inline-block mb-8">
          <TaijiSymbol size={80} className="text-white mx-auto" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
          The Zen of Hanzo
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8"
        >
          Ancient wisdom meets modern engineering — 88 principles to guide AI innovation
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#principles" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded-md text-white bg-gray-900/50 hover:bg-gray-800/70 transition-all"
          >
            Explore Principles
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gray-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gray-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
