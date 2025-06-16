import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Zap } from "lucide-react";

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
        <div className="w-[80vh] h-[80vh] rounded-full border border-white/10 animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[60vh] h-[60vh] rounded-full border border-white/20 animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute w-[40vh] h-[40vh] rounded-full border border-white/30 animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto z-10 relative text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">
              Frontier AI for Developers.
            </span>
            <br />
            <span className="text-neutral-300">
              Open Source. Free Forever.
            </span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-4xl mx-auto mb-10">
            Build with <strong className="text-white">Zen</strong>, our flagship MoDE architecture LLM, and <strong className="text-white">Sho</strong>, our next-gen diffusion model. Deploy anywhere with our open-source platform or scale instantly on our AI cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/ai">
              <Button 
                size="lg"
                variant="outline"
                className="text-white border-white/10 bg-transparent hover:bg-white/5 h-12 min-w-[160px]"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Our models
              </Button>
            </Link>
            <Link to="/zen">
              <Button 
                size="lg"
                className="bg-white text-black border border-gray-300 hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300 h-12 min-w-[160px]"
              >
                <Zap className="mr-2 h-5 w-5" />
                Our principles
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;