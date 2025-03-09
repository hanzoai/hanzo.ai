
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Hanzo Cloud - Built For Developers
          </div>
          <ChromeText as="h1" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            A Public Cloud Built For
            <span className="block mt-2">Developers Who Ship</span>
          </ChromeText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over 100 award winning, best selling products have launched on Hanzo Cloud, leveraging global load-balancing, zero-config private networking, hardware isolation, and instant WireGuard VPN connections, with push-button deployments scaling to thousands of instances.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 border-none">
            <a href="https://dashboard.hanzo.cloud">Dashboard</a>
          </Button>
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
