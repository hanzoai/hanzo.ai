
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fd4444]/15 to-[#ff6b6b]/15 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fd4444]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Start building on Hanzo Cloud
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Join thousands of developers building and scaling applications on Hanzo's global infrastructure.
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#fd4444] to-[#ff6b6b] hover:from-[#e03e3e] hover:to-[#fd4444] text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <a href="https://dashboard.hanzo.cloud">Get Started Free →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
