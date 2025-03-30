
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Server, Globe, Zap } from "lucide-react";
import IChingHexagram from "@/components/zen/svg/IChingHexagram";

const CloudHero = () => {
  // Hexagram for Water (坎 / kǎn) - Principle of Adaptability
  const adaptabilityHexagram = [
    { type: "broken" }, { type: "solid" }, { type: "broken" },
    { type: "broken" }, { type: "solid" }, { type: "broken" }
  ];

  return (
    <section className="relative py-32 px-4 min-h-screen flex flex-col justify-center">
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
                className="text-white/80 mr-4" 
              />
              <div className="text-sm text-gray-500">
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
              className="text-gray-400 text-lg mb-8"
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
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white"
              >
                Deploy Now
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
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
              className="p-1 border border-gray-800/80 rounded-xl bg-gradient-to-br from-gray-900/30 to-black"
            >
              <div className="bg-gray-950 border border-gray-900/50 rounded-lg p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-black/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Server className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">Infrastructure as Code</h3>
                      <p className="text-gray-500 text-xs">Declarative deployments aligned with principle 34: "Form follows intention."</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Globe className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">Global Edge Network</h3>
                      <p className="text-gray-500 text-xs">Embodies principle 53: "The wise engineer brings computation to data, not data to computation."</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Zap className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">Auto-scaling</h3>
                      <p className="text-gray-500 text-xs">Following principle 12: "Systems should grow and contract like breathing, without conscious effort."</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-800/50 text-xs text-gray-600 italic text-center">
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
