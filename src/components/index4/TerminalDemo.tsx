
import React from "react";
import { motion } from "framer-motion";
import { ArchitecturalBox } from "@/components/ui/architectural-elements";

const TerminalDemo = () => {
  return (
    <section className="max-w-4xl mx-auto mb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ArchitecturalBox
          className="backdrop-blur-lg bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden"
          showGrid={true}
          gridColor="rgba(255,255,255,0.03)"
          gridSpacing={30}
          gridOpacity={0.1}
        >
          <div className="flex items-center border-b border-zinc-800/70 px-4 py-3">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-mono text-zinc-400">terminal</span>
            </div>
          </div>
          
          <div className="p-6 font-mono text-sm">
            <div className="flex items-start mb-4">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-zinc-300">hanzo deploy</span>
            </div>
            
            <div className="pl-4 text-zinc-500 space-y-1">
              <p>Initializing deployment...</p>
              <p>Building application <span className="text-zinc-400">v2.3.5</span></p>
              <p className="text-zinc-400">Installing dependencies...</p>
              <p className="text-zinc-400">Running build command...</p>
              <p className="text-green-400">✓ Build successful</p>
              <p className="text-zinc-400">Uploading artifacts...</p>
              <p className="text-green-400">✓ Deployment complete</p>
            </div>
            
            <div className="mt-6 flex items-start">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-zinc-300">_</span>
            </div>
          </div>
        </ArchitecturalBox>
      </motion.div>
    </section>
  );
};

export default TerminalDemo;
