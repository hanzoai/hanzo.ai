'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const BRAND_COLOR = "#ffffff";

const FooterCTA = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Start building today
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Web, desktop, local, or decentralized. Choose your way.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://hanzo.app"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Open hanzo.app
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/download"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white text-lg border border-neutral-700 hover:bg-neutral-900 transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Download desktop
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
