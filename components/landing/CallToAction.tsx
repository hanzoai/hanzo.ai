'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, Github } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gray-900 border border-white/10 rounded-2xl p-10 relative z-10"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
            Ready to Build the Future with AI?
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Join thousands of developers using Hanzo to build powerful, 
            transparent AI applications that users love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="sm"
              className="bg-[var(--white)] text-black hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] border border-transparent rounded-full transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="sm"
              variant="outline"
              className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 rounded-full"
            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
