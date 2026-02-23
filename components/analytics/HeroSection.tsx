'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, LineChart } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--black)] z-0" />
      
      {/* Animated dots/points background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array(20).fill(0).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/30 text-white/70 text-sm font-medium mb-6">
            AI-Powered Analytics for Next-Generation Growth
          </div>
          <ChromeText as="h1" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hanzo Analytics
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Precise, real-time insights into user behavior, product performance, and business outcomes, 
            enabling you to optimize faster, smarter, and at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-white hover:bg-[#cccccc] border-none">
            <a href="#start-free-trial">Start Free Trial</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            <a href="#request-demo" className="flex items-center">
              Request Demo <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-5xl mx-auto relative"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
              <div className="flex items-center">
                <LineChart className="h-5 w-5 text-white mr-2" />
                <span className="text-[var(--white)] font-medium">Hanzo Analytics Dashboard</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-gray-800/50 rounded-lg p-4 h-64">
                {/* Animated chart lines */}
                <div className="h-full w-full relative">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-700"></div>
                  <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-700"></div>
                  
                  {/* Chart line */}
                  <svg className="h-full w-full" viewBox="0 0 100 50">
                    <motion.path
                      d="M0,50 L10,40 L20,45 L30,35 L40,38 L50,25 L60,30 L70,20 L80,15 L90,10 L100,5"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M0,50 L10,42 L20,40 L30,38 L40,30 L50,32 L60,25 L70,28 L80,20 L90,18 L100,15"
                      fill="none"
                      stroke="#ff6b6b"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 h-[30%]">
                  <div className="text-sm text-neutral-400">Users</div>
                  <motion.div 
                    className="text-2xl font-bold text-[var(--white)] mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    127,543
                  </motion.div>
                  <div className="text-white/70 text-xs mt-1">+12.4% vs last week</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 h-[30%]">
                  <div className="text-sm text-neutral-400">Conversion Rate</div>
                  <motion.div 
                    className="text-2xl font-bold text-[var(--white)] mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    4.87%
                  </motion.div>
                  <div className="text-white/70 text-xs mt-1">+0.8% vs last week</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 h-[30%]">
                  <div className="text-sm text-neutral-400">Revenue</div>
                  <motion.div 
                    className="text-2xl font-bold text-[var(--white)] mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    $45,892
                  </motion.div>
                  <div className="text-white/70 text-xs mt-1">+15.2% vs last week</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
