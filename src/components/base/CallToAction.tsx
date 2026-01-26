
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-neutral-950/30">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6 leading-tight">
            Get Started Today
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Launch your next-generation project instantly or request a custom demo to explore 
            Hanzo Base's powerful capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" radius="full" className="text-lg px-8 bg-[#fd4444] hover:bg-[#e03e3e] text-[var(--white)]">
              <span className="py-1 leading-relaxed">Start Building</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" radius="full" className="text-lg px-8 text-[var(--white)]">
              <span className="py-1 leading-relaxed">Read Docs</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
