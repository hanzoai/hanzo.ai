'use client'


import React from "react";
import { motion } from "framer-motion";
import { Activity, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@hanzo/ui";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-red-900/30 border border-[#ffffff]/30 mb-6"
        >
          <Activity className="h-4 w-4 text-[#ffffff] mr-2" />
          <span className="text-sm text-[#ff6b6b]">Get Started Today</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6"
        >
          Build Real-time Experiences in Minutes
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-300 mb-8"
        >
          Join thousands of developers building with Hanzo Realtime.
          No credit card required to get started.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-[#ffffff] hover:bg-[#cccccc] text-[var(--white)] px-8 py-6 text-lg w-full sm:w-auto"
          >
            Start Building <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-700 text-[var(--white)] hover:bg-gray-800 px-8 py-6 text-lg w-full sm:w-auto"
          >
            <a href="https://docs.hanzo.ai" className="flex items-center">
              Documentation <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
