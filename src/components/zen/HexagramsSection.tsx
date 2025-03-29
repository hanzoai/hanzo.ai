
import React from "react";
import { motion } from "framer-motion";
import { hexagramsData } from "./data/zenHexagrams";
import HexagramCard from "./HexagramCard";

const HexagramsSection: React.FC = () => {
  return (
    <section id="principles" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The 64 Principles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our philosophy distilled into 8 categories of wisdom, each containing 8 principles
            that guide our approach to creating technology.
          </p>
          <div className="h-px w-20 bg-purple-500 mx-auto mt-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hexagramsData.map((hexagram, index) => (
            <HexagramCard 
              key={hexagram.id} 
              hexagram={hexagram} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HexagramsSection;
