
import React from "react";
import { motion } from "framer-motion";

const FinalQuoteSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">The Zen of Hanzo</h3>
            <p className="text-gray-300 md:text-lg leading-relaxed">
              "Before code, there is concept. Before concept, there is principle. 
              Before principle, there is emptiness. From emptiness, all possibility."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalQuoteSection;
