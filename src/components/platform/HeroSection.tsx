
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hanzo Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            For too long, deploying cloud infrastructure has been the most painful part of the developer toolchain.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We're working at the intersection of distributed systems engineering and interface design to rebuild every layer of the stack for speed and developer experience.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            With instant deployments and effortless scale, a better way to deploy applications is now boarding.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <a href="https://dashboard.hanzo.cloud">Build and Deploy</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
