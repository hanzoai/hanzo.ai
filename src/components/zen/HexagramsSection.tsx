
import React, { useState } from "react";
import { motion } from "framer-motion";
import { hexagramsData } from "./data/zenHexagrams";
import HexagramCard from "./HexagramCard";

const categories = [
  "All",
  "The Foundation",
  "The Method", 
  "The Experience",
  "The Implementation",
  "The Growth",
  "The Perspective",
  "The Integration",
  "The Evolution"
];

const HexagramsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredHexagrams = activeCategory === "All" 
    ? hexagramsData 
    : hexagramsData.filter(hexagram => hexagram.category === activeCategory);

  return (
    <section id="principles" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The 64 Principles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An I Ching-inspired framework of wisdom to guide creative, design, and engineering endeavors.
          </p>
          <div className="h-px w-20 bg-purple-500 mx-auto mt-8"></div>
        </motion.div>
        
        <div className="overflow-x-auto mb-12">
          <div className="flex space-x-4 min-w-max py-4 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredHexagrams.map((hexagram, index) => (
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
