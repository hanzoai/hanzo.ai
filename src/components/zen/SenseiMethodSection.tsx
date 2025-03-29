
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SenseiMethodSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Sensei Method</h2>
          <div className="h-px w-20 bg-purple-500 mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/20 backdrop-blur-sm border border-purple-500/10 rounded-lg p-10 mb-10"
        >
          <p className="text-gray-300 md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Our principles come alive through the Sensei Method, a framework distilled from our 
            experience launching over 100 high-impact products. It combines scientific rigor, mindful design,
            and disciplined execution to deliver products that embody the harmony of form and function.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <a 
              href="https://hanzo.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-purple-900/30 to-purple-700/20 hover:from-purple-800/40 hover:to-purple-600/30 rounded-lg text-white transition-all group"
            >
              <div>
                <h3 className="text-xl font-medium mb-2">Hanzo Agency</h3>
                <p className="text-sm text-gray-300">AI-powered creative & marketing</p>
              </div>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-green-900/30 to-green-700/20 hover:from-green-800/40 hover:to-green-600/30 rounded-lg text-white transition-all group"
            >
              <div>
                <h3 className="text-xl font-medium mb-2">Sensei Group</h3>
                <p className="text-sm text-gray-300">Enterprise transformation experts</p>
              </div>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SenseiMethodSection;
