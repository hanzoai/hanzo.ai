
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-4xl mx-auto text-center relative z-10 space-y-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          The Zen of <span className="text-purple-400">Hanzo</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          "Simplicity is the ultimate sophistication. In code as in life, 
          remove until you cannot remove any more."
        </p>

        <div className="pt-20 flex flex-col sm:flex-row gap-8 justify-center">
          <a 
            href="https://hanzo.agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-md text-white transition-colors text-lg group"
          >
            <span>Hanzo Agency</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://sensei.group" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-md text-white transition-colors text-lg group"
          >
            <span>Sensei Group</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <Link 
          to="#principles" 
          className="text-gray-400 hover:text-white transition-colors animate-bounce"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
