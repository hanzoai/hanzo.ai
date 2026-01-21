import React from "react";
import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BRAND_COLOR = "#fd4444";

const SolutionsHero: React.FC = () => {
  return (
    <div className="relative pb-16 overflow-hidden">
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
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
        >
          <Rocket className="w-3.5 h-3.5" />
          Enterprise Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-white">AI Solutions</span>
          <br />
          <span className="text-neutral-400">for every industry.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10"
        >
          Hanzo delivers a unified ecosystem of AI Cloud infrastructure, developer platforms,
          and expert consulting to transform how enterprises build, deploy, and scale
          next-generation applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
            style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
          >
            Talk to Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/solutions/capabilities"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
          >
            Explore Capabilities
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsHero;
