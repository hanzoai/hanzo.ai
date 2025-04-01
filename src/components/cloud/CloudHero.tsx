
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Server, Globe, Zap } from "lucide-react";
import IChingHexagram from "@/components/zen/svg/IChingHexagram";
import { HexagramLine } from "@/components/zen/types/hexagram";

const CloudHero = () => {
  // Hexagram for Water (坎 / kǎn) - Principle of Adaptability
  const adaptabilityHexagram: HexagramLine[] = [
    { type: "broken" as const }, { type: "solid" as const }, { type: "broken" as const },
    { type: "broken" as const }, { type: "solid" as const }, { type: "broken" as const }
  ];

  return (
    <section className="relative py-32 px-4 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Cloud SVG pattern - subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cloud-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M10,20 Q15,10 20,20 Q30,10 40,20 Q50,10 60,20 Q65,10 70,20 L70,40 Q65,50 60,40 Q50,50 40,40 Q30,50 20,40 Q15,50 10,40 Z" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cloud-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center"
            >
              <IChingHexagram 
                lines={adaptabilityHexagram} 
                size={42} 
                className="text-[var(--white)]/80 mr-4" 
              />
              <div className="text-sm text-neutral-500">
                <div>坎 · kǎn</div>
                <div>The Abysmal Water</div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
                Flow like water.<br />Scale like clouds.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 text-lg mb-8"
            >
              Hanzo Cloud embodies the principle of adaptability. Like water, it conforms to any container, 
              scaling seamlessly from prototype to planet-scale deployment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                className="bg-[var(--white)]/5 hover:bg-[var(--white)]/10 border border-white/10 text-[var(--white)]"
              >
                Deploy Now
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-800 text-neutral-400 hover:text-[var(--white)] hover:border-gray-700"
              >
                Learn Principles
              </Button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Cloud Platform Visualization */}
              <svg width="100%" height="320" viewBox="0 0 440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                {/* Background gradient */}
                <rect width="440" height="320" rx="16" fill="url(#heroGradient)" />
                
                {/* Connection lines */}
                <path d="M160,120 C220,120 220,80 280,80" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M160,160 C220,160 220,200 280,200" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M160,200 C220,200 220,240 280,240" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* Server cluster (left) */}
                <rect x="80" y="100" width="80" height="120" rx="8" fill="rgba(30,30,30,0.5)" stroke="rgba(80,80,80,0.8)" strokeWidth="1" />
                <rect x="95" y="120" width="50" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="95" y="140" width="50" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="95" y="160" width="50" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="95" y="180" width="50" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
                
                {/* Cloud nodes (right) */}
                <rect x="280" y="60" width="100" height="40" rx="6" fill="rgba(138,43,226,0.2)" stroke="rgba(138,43,226,0.4)" strokeWidth="1" />
                <rect x="280" y="180" width="100" height="40" rx="6" fill="rgba(64,224,208,0.2)" stroke="rgba(64,224,208,0.4)" strokeWidth="1" />
                <rect x="280" y="240" width="100" height="40" rx="6" fill="rgba(70,130,180,0.2)" stroke="rgba(70,130,180,0.4)" strokeWidth="1" />
                
                {/* Animated data flow */}
                <circle className="animate-ping opacity-70" cx="200" cy="120" r="2" fill="rgba(138,43,226,0.8)" />
                <circle className="animate-ping opacity-70" cx="240" cy="160" r="2" fill="rgba(64,224,208,0.8)" />
                <circle className="animate-ping opacity-70" cx="220" cy="200" r="2" fill="rgba(70,130,180,0.8)" />
                
                {/* Text labels */}
                <text x="290" y="85" fontSize="12" fill="rgba(255,255,255,0.8)">Global Edge</text>
                <text x="290" y="205" fontSize="12" fill="rgba(255,255,255,0.8)">Auto-scaling</text>
                <text x="290" y="265" fontSize="12" fill="rgba(255,255,255,0.8)">IaC Deployments</text>
                <text x="90" y="110" fontSize="12" fill="rgba(255,255,255,0.6)">Hanzo Core</text>
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="heroGradient" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(20,20,30,0.9)" />
                    <stop offset="100%" stopColor="rgba(40,40,60,0.7)" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="mt-6 p-4 border border-gray-800/50 bg-gray-900/80 rounded-lg backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-[var(--black)]/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Server className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-[var(--white)] text-sm font-medium mb-1">Infrastructure as Code</h3>
                      <p className="text-neutral-500 text-xs">Declarative deployments aligned with principle 34: "Form follows intention."</p>
                    </div>
                  </div>
                  
                  <div className="bg-[var(--black)]/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Globe className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-[var(--white)] text-sm font-medium mb-1">Global Edge Network</h3>
                      <p className="text-neutral-500 text-xs">Embodies principle 53: "The wise engineer brings computation to data, not data to computation."</p>
                    </div>
                  </div>
                  
                  <div className="bg-[var(--black)]/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Zap className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-[var(--white)] text-sm font-medium mb-1">Auto-scaling</h3>
                      <p className="text-neutral-500 text-xs">Following principle 12: "Systems should grow and contract like breathing, without conscious effort."</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-800/50 text-xs text-neutral-600 italic text-center">
                  "The cloud is not the destination, but the path."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudHero;
