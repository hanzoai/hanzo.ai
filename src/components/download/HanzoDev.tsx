
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, ArrowUp } from "lucide-react";

const HanzoDev = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-30"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            For Developers
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Install Hanzo Dev directly in your terminal and supercharge your development workflow.
          </p>
          
          <div className="flex justify-center mb-10">
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 flex items-center">
              <Terminal className="h-5 w-5 text-purple-500 mr-3" />
              <code className="text-gray-300 font-mono">pip install hanzo-dev</code>
              <Button variant="ghost" size="sm" className="ml-4 text-gray-400 hover:text-white">
                Copy
              </Button>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <a href="/hanzodev">Learn More About Hanzo Dev</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoDev;
