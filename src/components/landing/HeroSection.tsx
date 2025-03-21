
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-purple-900/20 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
        }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-blue-900/20 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{
          animationDelay: "1s",
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px' 
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            Open Source AI Engineering Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Build AI Applications
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400">
              With Complete Control
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            A complete platform for developers to build, deploy, and scale AI applications
            with enterprise-grade reliability and open-source transparency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-7 text-lg"
            onClick={() => navigate('/signup')}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-gray-700 hover:bg-white/10 rounded-full px-8 py-7 text-lg"
            onClick={() => window.open('https://github.com/hanzoai', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            Star on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
