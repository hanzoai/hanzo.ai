import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Monitor, Apple } from "lucide-react";

const BRAND_COLOR = "#fd4444";

const DownloadHero = () => {
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
            background: `radial-gradient(circle, #8b5cf6 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, #3b82f6 0%, transparent 70%)`,
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
            style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
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
            <span className="text-white">Everything you love,</span>
            <br />
            <span className="text-neutral-400">across every app.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto"
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
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
            >
              <Apple className="mr-2 h-4 w-4" />
              Download (Apple Silicon)
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
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
            className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50"
          >
            <div className="relative pb-[56.25%] h-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: `${BRAND_COLOR}15` }}
                >
                  <Monitor className="h-12 w-12" style={{ color: BRAND_COLOR }} />
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
