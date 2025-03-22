
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";
import { Server, Globe, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {/* Enhanced background with subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-repeat opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Hanzo Cloud - Built for Production
          </div>
          <ChromeText as="h1" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            A High-Performance Cloud 
            <span className="block mt-2">Optimized for AI Workloads</span>
          </ChromeText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powering over 100 award-winning AI products with global infrastructure that scales from prototype to planet-scale. Deploy in seconds with zero configuration and scale limitlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 border-none">
            <a href="https://dashboard.hanzo.cloud">Deploy Now</a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="text-lg px-8 text-white border-purple-500/30 hover:bg-purple-900/20"
          >
            <a href="/platform">Try Open Source</a>
          </Button>
        </motion.div>
        
        {/* Added feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/30 border border-purple-500/20 rounded-xl p-6 text-center">
            <Server className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Global Infrastructure</h3>
            <p className="text-gray-400 text-sm">35+ regions worldwide for ultra-low latency at the edge</p>
          </div>
          
          <div className="bg-gray-900/30 border border-purple-500/20 rounded-xl p-6 text-center">
            <Zap className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant Deployment</h3>
            <p className="text-gray-400 text-sm">Deploy in seconds with push-button simplicity</p>
          </div>
          
          <div className="bg-gray-900/30 border border-purple-500/20 rounded-xl p-6 text-center">
            <Globe className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Optimized</h3>
            <p className="text-gray-400 text-sm">Purpose-built for complex AI workloads and inference</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-6 text-center"
        >
          <a href="#security" className="text-gray-400 hover:text-white transition-colors">Security</a>
          <a href="#infra-log" className="text-gray-400 hover:text-white transition-colors">Infra Log</a>
          <a href="https://docs.hanzo.cloud" className="text-gray-400 hover:text-white transition-colors">Docs</a>
          <a href="https://community.hanzo.cloud" className="text-gray-400 hover:text-white transition-colors">Community</a>
          <a href="https://status.hanzo.cloud" className="text-gray-400 hover:text-white transition-colors">Status</a>
          <a href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
