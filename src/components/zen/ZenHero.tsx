
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TaijiSymbol from "./svg/TaijiSymbol";

const ZenHero = () => {
  const [currentPrinciple, setCurrentPrinciple] = useState(0);
  const principles = [
    "Before code, there is concept.",
    "Simplicity is the ultimate sophistication.",
    "The way is in training.",
    "Build with purpose, not with haste.",
    "In silence, find clarity.",
    "Each line of code should be necessary."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrinciple((prev) => (prev + 1) % principles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 70%)"
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <TaijiSymbol size={80} className="mx-auto mb-8" animate={true} />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
              The Way of Hanzo
            </span>
          </h1>
          
          <motion.div
            key={currentPrinciple}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="h-12 flex items-center justify-center"
          >
            <p className="text-xl text-gray-400 italic">"{principles[currentPrinciple]}"</p>
          </motion.div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mt-8">
            Build software with enlightened engineering. Hanzo's platform embodies 
            88 principles that guide the creation of resilient, scalable systems.
          </p>
        </motion.div>
        
        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="outline" 
              className="bg-black/50 border border-white/10 text-white hover:bg-white/10"
            >
              Explore Platform
            </Button>
            <Button 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              Learn Principles
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-gray-600 mt-16"
          >
            <a href="#principles" className="flex flex-col items-center">
              <span className="mb-2 text-sm">Discover more</span>
              <ArrowDown className="animate-bounce w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ZenHero;
