'use client'


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

const OperativeDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section className="py-24 relative overflow-hidden" id="demo">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-gray-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
              See Operative in Action
            </h2>
            <p className="text-xl text-foreground/80">
              Watch as Hanzo Operative uses multimodal AI to router interfaces, 
              complete tasks, and solve problems autonomously.
            </p>
          </motion.div>
        </div>
        
        <div className="relative mx-auto w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 to-gray-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--white)] mb-4">Demo Video</h3>
              <Button 
                size="lg"
                className="rounded-full bg-[var(--white)]/20 backdrop-blur-sm hover:bg-[var(--white)]/30 text-[var(--white)]"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
              </Button>
              
              <div className="absolute bottom-6 w-full max-w-sm flex items-center justify-center space-x-4">
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-[var(--white)]">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <div className="w-full bg-gray-700/30 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-1/3 rounded-full"></div>
                </div>
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-[var(--white)]">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://docs.hanzo.ai/operative/examples"
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            View more examples →
          </a>
        </div>
      </div>
    </section>
  );
};

export default OperativeDemo;
