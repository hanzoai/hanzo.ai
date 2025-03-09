
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SenseiMethodSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Sensei Method</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 mb-10"
        >
          <p className="text-gray-300 md:text-lg leading-relaxed mb-6">
            Our principles come alive through the Sensei Method, a repeatable framework distilled from our 
            experience launching over 100 high-impact products. It combines scientific rigor, rapid iteration, 
            and disciplined execution to scale businesses and deliver tangible growth.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-md text-white transition-colors"
            >
              <span>Explore case studies</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SenseiMethodSection;
