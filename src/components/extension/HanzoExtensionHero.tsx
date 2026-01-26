
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome, Globe } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const HanzoExtensionHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fd4444]/10 to-[#ff6b6b]/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fd4444]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hanzo <span className="text-[#fd4444]">Extension</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12">
            Access Hanzo AI directly in your browser
            <br />for a seamless web experience
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#fd4444] to-[#ff6b6b] hover:from-[#e03e3e] hover:to-[#fd4444] text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium"
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
              className="border-[#fd4444] text-[var(--white)] hover:bg-[#fd4444]/10 px-8 py-6 rounded-lg text-lg font-medium"
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
              <img 
                src="/placeholder.svg" 
                alt="Hanzo Extension Preview" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoExtensionHero;
