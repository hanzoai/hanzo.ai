'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { Github, ArrowRight } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Start building locally today
          </ChromeText>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12">
            Join our community of developers building the future of AI applications with open source tools.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-white to-white/10 hover:from-[#cccccc] hover:to-white text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              <a href="https://github.com/hanzo/platform">Get on GitHub</a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 px-8 py-6 text-lg rounded-lg font-medium flex items-center"
            >
              <span className="flex-1">Read the Docs</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 text-neutral-400 text-sm">
            Need enterprise features? <a href="/cloud" className="text-white hover:text-white/70 underline">Check out Hanzo Cloud</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
