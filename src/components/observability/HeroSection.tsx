
import React from "react";
import { motion } from "framer-motion";
import { LineChart, BarChart4, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      {/* Gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent opacity-70"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-r from-violet-600 to-blue-600 p-3 rounded-lg">
              <Activity className="h-8 w-8 text-[var(--white)]" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Unified Intelligence for AI Applications
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto"
          >
            Hanzo Observability provides end-to-end visibility and proactive insights designed specifically for debugging, optimizing, and improving your AI applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-[var(--white)] border-none px-8 py-6 rounded-md text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800/50 px-8 py-6 rounded-md text-lg">
              View Documentation
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-20 bottom-0"></div>
          <div className="bg-gradient-to-br from-gray-900 to-black p-2 rounded-xl border border-gray-800/50 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-3 p-4 bg-[var(--black)]/60 rounded-lg">
              <div className="col-span-1 space-y-4">
                <div className="h-8 bg-gray-800 rounded-md"></div>
                <div className="h-8 bg-gray-800/60 rounded-md"></div>
                <div className="h-8 bg-gray-800/60 rounded-md"></div>
                <div className="h-8 bg-gray-800/60 rounded-md"></div>
                <div className="h-8 bg-gray-800/60 rounded-md"></div>
                <div className="h-32 bg-gray-800/40 rounded-md mt-8"></div>
              </div>
              <div className="col-span-4 space-y-4">
                <div className="h-12 bg-gray-800/60 rounded-md"></div>
                <div className="h-64 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-40">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
                      <path
                        d="M0,150 L0,40 Q125,10 250,40 T500,40 L500,150 Z"
                        fill="rgba(124, 58, 237, 0.5)"
                      ></path>
                      <path
                        d="M0,150 L0,60 Q125,30 250,60 T500,60 L500,150 Z"
                        fill="rgba(37, 99, 235, 0.4)"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-violet-500"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-gray-800/40 rounded-lg"></div>
                  <div className="h-32 bg-gray-800/40 rounded-lg"></div>
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
