'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const BRAND_COLOR = "#ffffff";

const AboutHero = () => {
  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, #ffffff 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Journey
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-foreground">History of</span>
            <br />
            <span className="text-muted-foreground">Hanzo Industries.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            From startup to AI powerhouse, our journey of transformation, innovation, and purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#timeline"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: BRAND_COLOR, color: "#000000" }}
            >
              Explore Our Timeline
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              href="/zen"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-accent text-sm text-foreground"
            >
              The Zen of Hanzo
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
