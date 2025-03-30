
import React from "react";
import { motion } from "framer-motion";
import TaijiSymbol from "./svg/TaijiSymbol";

const FinalQuoteSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative p-12 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-lg border border-gray-800/50 rounded-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <TaijiSymbol size={64} className="text-white/90" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">The Zen of Hanzo</h3>
            <p className="text-gray-300 md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              "Before code, there is concept. Before concept, there is principle. 
              Before principle, there is emptiness. From emptiness, all possibility."
            </p>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-6"></div>
            
            <p className="text-gray-500 text-sm italic">
              Ancient wisdom meets modern engineering
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalQuoteSection;
