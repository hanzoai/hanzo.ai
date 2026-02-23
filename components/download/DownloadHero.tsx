'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { Download, Monitor, Apple } from "lucide-react";

const DownloadHero = () => {
  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
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
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, #a3a3a3 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
          >
            <Download className="w-3.5 h-3.5" />
            Desktop App
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-foreground">Everything you love,</span>
            <br />
            <span className="text-muted-foreground">across every app.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Your AI workspace for building AI products and AI-powered companies.
            Available on PC and Mac. Mobile coming soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <button
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

            >
              <Apple className="mr-2 h-4 w-4" />
              Download (Apple Silicon)
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
            >
              <Apple className="mr-2 h-4 w-4" />
              Download (Intel Mac)
            </button>
          </motion.div>

          {/* Video preview placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border bg-secondary/50"
          >
            <div className="relative pb-[56.25%] h-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
                >
                  <Monitor className="h-12 w-12" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadHero;
