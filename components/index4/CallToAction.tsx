'use client'


import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@hanzo/ui";

const CallToAction = () => {
  return (
    <section className="max-w-4xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-gradient-to-b from-zinc-900/40 to-zinc-900/80 border border-zinc-800/50 rounded-2xl p-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-[var(--white)]">
          Start building today
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers who are creating the next generation of applications on our platform.
        </p>
        <Button 
          size="lg" 
          className="h-12 px-8 bg-[var(--white)] hover:bg-zinc-200 text-black transition-colors duration-300"
        >
          Deploy your first project <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
