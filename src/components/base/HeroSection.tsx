
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--black)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            Open Source • Self-Hostable • Scalable
          </div>
          <ChromeText as="h1" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hanzo Base
          </ChromeText>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Build Any App. Scale to Millions.
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto">
            Hanzo Base is the open-source alternative to Firebase and PocketBase that developers trust. 
            Rapidly launch scalable, secure projects with integrated Postgres databases, Authentication, 
            APIs, Edge Functions, Realtime Subscriptions, Storage, Vector Embeddings, and comprehensive 
            PocketBase-style features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 border-none">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Request Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
