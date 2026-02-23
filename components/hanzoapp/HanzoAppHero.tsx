'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight } from "lucide-react";

const HanzoAppHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/10 to-[#ff6b6b]/5 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ffffff]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build LLM Apps <span className="text-[#ffffff]">Easily</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12">
            Build. Deploy. Scale.
          </p>
          
          <div className="mb-12">
            <p className="text-neutral-400 text-lg mb-4">Trusted and used by teams around the globe</p>
          </div>
          
          <div className="max-w-xl mx-auto bg-gray-900/30 border border-gray-800 rounded-xl p-6 mb-12">
            <h3 className="text-2xl font-semibold mb-4">Iterate, fast</h3>
            <p className="text-neutral-300 mb-6">
              Developing LLM apps takes countless iterations. With AI engineering approach, we enable quick iterations to go from testing to production
            </p>
            
            <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-neutral-300 text-left mb-6">
              <pre>
                $ npm install -g flowise<br/>
                $ npx flowise start
              </pre>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#ffffff] to-[#ff6b6b] hover:from-[#cccccc] hover:to-[#ffffff] text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium"
            >
              <a href="#" className="flex items-center">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoAppHero;
