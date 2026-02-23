'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, Chrome, Globe } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const HanzoExtensionHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hanzo <span className="text-white">Extension</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12">
            Access Hanzo AI directly in your browser
            <br />for a seamless web experience
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-white to-white/10 hover:from-[#cccccc] hover:to-white text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium"
            >
              <a href="#browsers" className="flex items-center">
                <Chrome className="mr-2 h-5 w-5" />
                Add to Chrome
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-[var(--white)] hover:bg-white/10 px-8 py-6 rounded-lg text-lg font-medium"
            >
              <a href="#browsers" className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Get Firefox Add-on
              </a>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <div className="h-[360px] md:h-[440px] w-full bg-gradient-to-br from-white/25 via-black/40 to-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_50%)]" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs uppercase tracking-widest text-neutral-400">Extension Preview</div>
                    <div className="text-2xl font-semibold text-[var(--white)] mt-2">Browser-native AI</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoExtensionHero;
