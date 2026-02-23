'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, Github } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future with AI?
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Join thousands of developers and start building powerful AI applications today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="sm"
              className="bg-white hover:bg-[#cccccc] text-[var(--white)] rounded-full"
            >
              Get Started Free
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
          
          <p className="text-neutral-400 mt-8">
            No credit card required. Start with our free tier.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
