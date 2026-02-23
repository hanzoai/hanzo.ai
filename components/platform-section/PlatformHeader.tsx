'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import ChromeText from "@/components/ui/chrome-text";

const PlatformHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-white/30 text-foreground text-sm font-medium">
            AI Engineering Platform
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ChromeText 
            as="h2" 
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Your AI future belongs to you
          </ChromeText>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Pioneer the next wave of intelligence with an integrated ecosystem that gives you full control over your AI journey.
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 md:mt-0"
      >
        <Button size="lg" variant="outline" className="text-[var(--white)]">
          <a href="/solutions">Explore Solutions</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default PlatformHeader;
