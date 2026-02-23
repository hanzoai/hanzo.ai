'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Ready to transform your AI applications?
          </ChromeText>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
            Join thousands of developers building faster, more accurate AI-powered experiences with Hanzo Vector
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-white to-white/10 hover:from-[#cccccc] hover:to-white text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
            >
              Join the Community
            </Button>
          </div>
          
          <p className="text-muted-foreground mt-8">
            Have questions? Contact us at <a href="mailto:vector@hanzo.ai" className="text-foreground hover:text-foreground/70">vector@hanzo.ai</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
