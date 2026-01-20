import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

const FooterCTA = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Ship faster. Keep control.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
        >
          All coding agents in one workspace. Parallel execution, evidence-driven output,
          and policies you control.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Link
            to="/get-started"
            className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base"
            style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
          >
            Start free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=hanzo.hanzo-dev"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
          >
            Install VS Code extension
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </motion.div>

        {/* Install command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800">
            <code className="text-sm font-mono text-neutral-300">
              curl -fsSL hanzo.sh | sh
            </code>
            <button
              onClick={handleCopy}
              className="text-neutral-500 hover:text-white transition-colors"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://docs.hanzo.ai/dev"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            Read the documentation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
