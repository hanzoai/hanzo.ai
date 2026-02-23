import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Lock, Puzzle, Code } from "lucide-react";
import { Link } from "react-router-dom";

const UnifiedAISection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-[#030014] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 3D Visual - Would be replaced with actual 3D cube */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-[500px] mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-[400px] max-h-[400px] rounded-2xl border border-[#fd4444]/20 rotate-45 transform-gpu" />
              <div className="absolute w-[90%] h-[90%] rounded-2xl border border-[#ff6b6b]/20 rotate-[30deg] transform-gpu" />
              <div className="absolute w-[80%] h-[80%] rounded-2xl border border-neutral-500/20 rotate-[15deg] transform-gpu" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-gradient-to-r from-[#fd4444]/10 to-[#ff6b6b]/10 rounded-xl blur-lg" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
                <div className="bg-[#030014]/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 w-full max-w-[300px] flex items-center">
                  <div className="p-2 rounded-lg bg-[#fd4444]/20 mr-3">
                    <Layers className="h-5 w-5 text-[#fd4444]" />
                  </div>
                  <span className="text-white">AI Cloud</span>
                </div>
                <div className="bg-[#030014]/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 w-full max-w-[300px] flex items-center">
                  <div className="p-2 rounded-lg bg-[#ff6b6b]/20 mr-3">
                    <Code className="h-5 w-5 text-[#ff6b6b]" />
                  </div>
                  <span className="text-white">Developer Tools</span>
                </div>
                <div className="bg-[#030014]/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 w-full max-w-[300px] flex items-center">
                  <div className="p-2 rounded-lg bg-neutral-500/20 mr-3">
                    <Puzzle className="h-5 w-5 text-neutral-400" />
                  </div>
                  <span className="text-white">Human Ops & Workflow</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              The Unified AI Ecosystem
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-2 flex items-center">
                  <div className="p-1 rounded-lg bg-[#fd4444]/20 mr-2 flex items-center justify-center">
                    <Puzzle className="h-4 w-4 text-[#fd4444]" />
                  </div>
                  Human + AI Collaboration
                </h3>
                <p className="text-neutral-400">
                  Seamless synergy between automated intelligence and human creativity,
                  enabling teams to achieve more together than either could alone.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-2 flex items-center">
                  <div className="p-1 rounded-lg bg-[#ff6b6b]/20 mr-2 flex items-center justify-center">
                    <Layers className="h-4 w-4 text-[#ff6b6b]" />
                  </div>
                  Modular & Open
                </h3>
                <p className="text-neutral-400">
                  Use only the layers you need; scale effortlessly as your requirements evolve.
                  Our platform grows with your ambitions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-2 flex items-center">
                  <div className="p-1 rounded-lg bg-neutral-500/20 mr-2 flex items-center justify-center">
                    <Lock className="h-4 w-4 text-neutral-400" />
                  </div>
                  APIs for Everything
                </h3>
                <p className="text-neutral-400">
                  Advertising, e-commerce, payments, messaging, authentication, and more—all
                  through consistent, developer-friendly interfaces.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/platform"
                className="inline-flex items-center text-[#fd4444] hover:text-[#ff6b6b] font-medium transition-colors"
              >
                Explore the Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedAISection;
