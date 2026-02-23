
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, Eye, Cpu, MousePointer, Keyboard } from "lucide-react";

const OperativeHero = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fd4444]/20 to-transparent"></div>
      <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-[#fd4444]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#fd4444]/20 border border-[#fd4444]/30 text-[#ff6b6b] text-sm font-medium mb-6">
              AI Engineering Framework
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--white)] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#ff6b6b]">
              Hanzo Operative
            </h1>

            <p className="mt-6 text-xl text-neutral-300 max-w-3xl mx-auto">
              A framework that enables multimodal AI models to operate a computer using the same inputs and 
              outputs as a human operator, viewing the screen and executing mouse and keyboard actions to achieve objectives.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <a href="#get-started">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
                <a href="https://docs.hanzo.ai/operative" className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  View Docs
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-lg bg-[#fd4444]/20 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-[#fd4444]" />
              </div>
              <p className="text-sm font-medium text-neutral-300">Screen Vision</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-lg bg-[#fd4444]/20 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-[#fd4444]" />
              </div>
              <p className="text-sm font-medium text-neutral-300">Multimodal Models</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-lg bg-[#fd4444]/20 flex items-center justify-center mb-4">
                <MousePointer className="h-6 w-6 text-[#fd4444]" />
              </div>
              <p className="text-sm font-medium text-neutral-300">Cursor Control</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-lg bg-[#fd4444]/20 flex items-center justify-center mb-4">
                <Keyboard className="h-6 w-6 text-[#fd4444]" />
              </div>
              <p className="text-sm font-medium text-neutral-300">Keyboard Actions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperativeHero;
