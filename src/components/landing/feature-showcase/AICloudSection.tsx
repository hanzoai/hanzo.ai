
import React from "react";
import { motion } from "framer-motion";
import { ProductItem } from "@/components/navigation/products-menu/types";
import { Cloud, Globe, Zap } from "lucide-react";

interface AICloudSectionProps {
  products: ProductItem[];
}

const AICloudSection: React.FC<AICloudSectionProps> = ({ products }) => {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
          AI Cloud
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Scalable Infrastructure for AI Applications
        </h2>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Build high-performance AI applications with our suite of cloud services designed for AI workloads.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[var(--black)]/80 border border-blue-900/20 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
        >
          <Cloud className="h-10 w-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Global Infrastructure</h3>
          <p className="text-neutral-400">
            Deploy anywhere with our global network of data centers optimized for AI workloads.
            Low-latency inference at the edge, closer to your users.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--black)]/80 border border-blue-900/20 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
        >
          <Zap className="h-10 w-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Instant Scaling</h3>
          <p className="text-neutral-400">
            Automatic scaling from zero to planet-scale. Only pay for what you use,
            with burst capacity for handling traffic spikes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[var(--black)]/80 border border-blue-900/20 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
        >
          <Globe className="h-10 w-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">AI-Optimized</h3>
          <p className="text-neutral-400">
            Purpose-built for complex AI workloads with specialized hardware, optimized for
            inference, training, and fine-tuning.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AICloudSection;
