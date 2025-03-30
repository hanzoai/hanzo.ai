
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import IChingHexagram from "./svg/IChingHexagram";

const PrinciplesPreview = () => {
  // Sample hexagrams to display
  const previewHexagrams = [
    {
      id: "1",
      name: "Creative Force",
      chineseName: "乾",
      pinyin: "qián",
      principle: "Initiate with clear vision",
      lines: [
        { type: "solid" }, { type: "solid" }, { type: "solid" },
        { type: "solid" }, { type: "solid" }, { type: "solid" }
      ]
    },
    {
      id: "2",
      name: "Receptive Force",
      chineseName: "坤",
      pinyin: "kūn",
      principle: "Nurture with patience",
      lines: [
        { type: "broken" }, { type: "broken" }, { type: "broken" },
        { type: "broken" }, { type: "broken" }, { type: "broken" }
      ]
    },
    {
      id: "63",
      name: "After Completion",
      chineseName: "既济",
      pinyin: "jì jì",
      principle: "Balance attained leads to new beginnings",
      lines: [
        { type: "solid" }, { type: "broken" }, { type: "solid" },
        { type: "broken" }, { type: "solid" }, { type: "broken" }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 relative" id="principles">
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,20,1) 100%)"
        }}
      />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
            The 88 Principles
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ancient wisdom reimagined for modern engineering. Each principle guides a different 
            aspect of building remarkable software.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewHexagrams.map((hexagram, index) => (
            <motion.div
              key={hexagram.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-white/5 rounded-md p-6 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <IChingHexagram lines={hexagram.lines} size={32} className="text-white mr-4" />
                <div>
                  <h3 className="text-white text-lg font-medium">{hexagram.name}</h3>
                  <div className="text-gray-500 text-sm">
                    {hexagram.chineseName} · {hexagram.pinyin}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">{hexagram.principle}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/zen" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <span>Explore all principles</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesPreview;
