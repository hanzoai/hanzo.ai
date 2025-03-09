
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HanzoCodeCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/placeholder.svg" 
            alt="Hanzo Code Logo" 
            className="w-24 h-24 mx-auto mb-8"
          />
          
          <h2 className="text-3xl font-bold mb-8">Try Hanzo Code Now</h2>
          
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:hi@hanzo.ai" className="text-gray-300 hover:text-white transition-colors">
              hi@hanzo.ai
            </a>
            
            <p className="text-sm text-gray-500 mb-8">SOC 2 Certified</p>
            
            <p className="text-sm text-gray-400">
              Made by
              <span className="font-semibold ml-2">Anysphere</span>
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Downloads</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Forum</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoCodeCTA;
