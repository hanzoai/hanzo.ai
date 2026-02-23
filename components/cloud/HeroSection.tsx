'use client'


import React, { useState, useEffect, useRef } from "react";
import { Button } from "@hanzo/ui";
import { motion } from "framer-motion";
import { Server, Globe, Zap } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--black)]" />
      
      {/* Enhanced background with subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/15 via-[#ff6b6b]/10 to-black opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(253,68,68,0.12),transparent_50%)] opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#ffffff]/20 border border-[#ffffff]/30 text-[#ffffff] text-sm font-medium mb-6">
            Hanzo Cloud - Built for Production
          </div>
          <ChromeText as="h1" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            A High-Performance Cloud 
            <span className="block mt-2">Optimized for AI Workloads</span>
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Powering over 100 award-winning AI products with global infrastructure that scales from prototype to planet-scale. Deploy in seconds with zero configuration and scale limitlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-[#ffffff] to-[#ff6b6b] hover:from-[#cccccc] hover:to-[#ffffff] border-none">
            <a href="https://dashboard.hanzo.cloud">Deploy Now</a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="text-lg px-8 text-[var(--white)] border-[#ffffff]/30 hover:bg-[#ffffff]/10"
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
          <div className="bg-gray-900/30 border border-[#ffffff]/20 rounded-xl p-6 text-center">
            <Server className="h-8 w-8 text-[#ffffff] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Global Infrastructure</h3>
            <p className="text-neutral-400 text-sm">35+ regions worldwide for ultra-low latency at the edge</p>
          </div>
          
          <div className="bg-gray-900/30 border border-[#ffffff]/20 rounded-xl p-6 text-center">
            <Zap className="h-8 w-8 text-[#ffffff] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant Deployment</h3>
            <p className="text-neutral-400 text-sm">Deploy in seconds with push-button simplicity</p>
          </div>
          
          <div className="bg-gray-900/30 border border-[#ffffff]/20 rounded-xl p-6 text-center">
            <Globe className="h-8 w-8 text-[#ffffff] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Optimized</h3>
            <p className="text-neutral-400 text-sm">Purpose-built for complex AI workloads and inference</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-6 text-center"
        >
          <a href="#security" className="text-neutral-400 hover:text-[var(--white)] transition-colors">Security</a>
          <a href="#infra-log" className="text-neutral-400 hover:text-[var(--white)] transition-colors">Infra Log</a>
          <a href="https://docs.hanzo.cloud" className="text-neutral-400 hover:text-[var(--white)] transition-colors">Docs</a>
          <a href="https://community.hanzo.cloud" className="text-neutral-400 hover:text-[var(--white)] transition-colors">Community</a>
          <a href="https://status.hanzo.cloud" className="text-neutral-400 hover:text-[var(--white)] transition-colors">Status</a>
          <a href="/pricing" className="text-neutral-400 hover:text-[var(--white)] transition-colors">Pricing</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
