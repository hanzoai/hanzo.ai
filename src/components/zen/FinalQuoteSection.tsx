
import React from "react";
import { motion } from "framer-motion";
import TaijiSymbol from "./svg/TaijiSymbol";

const FinalQuoteSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm border border-gray-800 rounded-lg relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <TaijiSymbol size={48} className="text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">The Zen of Hanzo</h3>
            <p className="text-gray-400 md:text-lg leading-relaxed">
              "Before code, there is concept. Before concept, there is principle. 
              Before principle, there is emptiness. From emptiness, all possibility."
            </p>
            <p className="text-gray-500 mt-4 text-sm italic">
              — Where ancient wisdom meets modern engineering
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalQuoteSection;
