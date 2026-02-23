'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { Github, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff]/10 to-[#ff6b6b]/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black/50 border border-[#ffffff]/20 rounded-lg p-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Upgrade your projects to Tailwind v4 and React 19 today and take advantage
            of the latest features and improvements.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#ffffff] hover:bg-[#cccccc] text-white"
            >
              Get Started Guide
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => window.open("https://ui.shadcn.com", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
