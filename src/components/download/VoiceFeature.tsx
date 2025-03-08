
import React from "react";
import { motion } from "framer-motion";
import { Mic, Command } from "lucide-react";

const VoiceFeature = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative pb-[120%] h-0 bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400">Voice input preview</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Hold command anywhere to talk
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Control apps, dictate content, and ask questions completely hands-free
            </p>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <Command className="h-6 w-6 text-purple-500" />
              <span>Use system-wide keyboard shortcuts</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-400 mt-3">
              <Mic className="h-6 w-6 text-purple-500" />
              <span>Seamless voice recognition</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceFeature;
