
import React from "react";
import { motion } from "framer-motion";
import { ProductItem } from "@/components/navigation/products-menu/types";
import { Code, Terminal, Layers } from "lucide-react";

interface DXPlatformSectionProps {
  products: ProductItem[];
}

const DXPlatformSection: React.FC<DXPlatformSectionProps> = ({ products }) => {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
          Developer Experience Platform
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tools That Make AI Development a Joy
        </h2>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          A complete toolkit for AI engineers to deliver production-ready AI systems with unprecedented speed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[var(--black)]/80 border border-purple-900/20 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
        >
          <Code className="h-10 w-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">AI-Native SDKs</h3>
          <p className="text-neutral-400">
            Comprehensive libraries for all major languages and frameworks.
            Optimized for AI workloads with type safety and excellent DX.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--black)]/80 border border-purple-900/20 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
        >
          <Terminal className="h-10 w-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Powerful CLI</h3>
          <p className="text-neutral-400">
            Deploy, monitor, and manage your AI applications from the command line.
            Seamless integration with your existing workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[var(--black)]/80 border border-purple-900/20 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
        >
          <Layers className="h-10 w-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Comprehensive Observability</h3>
          <p className="text-neutral-400">
            Full visibility into your AI systems with built-in monitoring, logging,
            and tracing designed specifically for AI workloads.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DXPlatformSection;
