
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Our Journey
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            History and Evolution of <span className="text-purple-400">Hanzo Industries</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12">
            From startup to AI powerhouse, our journey of transformation, innovation, and purpose.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium"
            >
              <a href="#timeline" className="flex items-center">
                Explore Our Timeline
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-600 text-[var(--white)] hover:bg-purple-600/10 px-8 py-6 rounded-lg text-lg font-medium"
            >
              <a href="/zen" className="flex items-center">
                The Zen of Hanzo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
