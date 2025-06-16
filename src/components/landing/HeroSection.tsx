import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] py-16 md:py-24 px-4 relative flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 70%)"
        }}
      />
      
      {/* 3D Visual Placeholder - would be replaced with actual 3D scene */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[80vh] h-[80vh] rounded-full border border-purple-500/20 animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[60vh] h-[60vh] rounded-full border border-blue-500/20 animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute w-[40vh] h-[40vh] rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto z-10 relative text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
              Build with Intelligence.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
              Scale with Unity.
            </span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-10">
            A comprehensive AI ecosystem designed for collaboration, development, and exponential growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-[var(--white)] text-black border border-gray-300 hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] transition-all duration-300"
            >
              Get Started Free
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="bg-transparent border border-white/20 text-white hover:bg-white/10"
            >
              Explore Our Cloud
            </Button>
            <Link
              to="/contact"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Talk to an Architect
            </Link>
          </div>
          
          <div className="mt-8">
            <Link
              to="https://republic.com/hanzo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-white border border-white/10 transition-colors"
            >
              Invest in Hanzo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;