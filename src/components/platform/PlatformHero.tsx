import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Terminal, Code, Database, Server } from "lucide-react";
import IChingHexagram from "@/components/zen/svg/IChingHexagram";

const PlatformHero = () => {
  // Hexagram for Thunder (震 / zhèn) - Principle of Initiative and Power
  const thunderHexagram = [
    { type: "solid" }, { type: "broken" }, { type: "broken" },
    { type: "solid" }, { type: "broken" }, { type: "broken" }
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
                lines={thunderHexagram} 
                size={42} 
                className="text-white/80 mr-4" 
              />
              <div className="text-sm text-neutral-500">
                <div>震 · zhèn</div>
                <div>The Arousing Thunder</div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
                Open Source.<br />Own Your Stack.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 text-lg mb-8"
            >
              Hanzo Platform embodies the principle of sovereignty. Like thunder, it awakens possibility, 
              giving developers complete control over their AI infrastructure.
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
                <Github className="mr-2 h-4 w-4" />
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-800 text-neutral-400 hover:text-white hover:border-gray-700"
              >
                <Terminal className="mr-2 h-4 w-4" />
                Quick Install
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
                    <Code className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">Local Development</h3>
                      <p className="text-neutral-500 text-xs">Following principle 8: "The wise engineer begins with the end in mind."</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Database className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">Data Sovereignty</h3>
                      <p className="text-neutral-500 text-xs">Embodying principle 19: "True security comes from understanding, not obscurity."</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/80 border border-gray-800/50 rounded-lg p-4 flex items-start">
                    <Server className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">Self-Hosting</h3>
                      <p className="text-neutral-500 text-xs">Honoring principle 26: "Independence is the foundation of true innovation."</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-800/50">
                  <div className="text-xs text-neutral-600 font-mono text-center mb-2">
                    $ npx @hanzo/cli create my-app
                  </div>
                  <div className="text-xs text-neutral-600 italic text-center">
                    "Freedom is not given, it is built."
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;