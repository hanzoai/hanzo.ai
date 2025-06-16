import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import Features from "@/components/platform/Features";
import TrustedBy from "@/components/platform/TrustedBy";
import DeveloperLove from "@/components/platform/DeveloperLove";
import Usage from "@/components/platform/Usage";
import CallToAction from "@/components/platform/CallToAction";
import ZenBackground from "@/components/zen/ZenBackground";
import ZenQuoteSection from "@/components/zen/ZenQuoteSection";
import { motion } from "framer-motion";
import { Github, Code, Server, Database, Cloud } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--white)]">Platform vs Cloud</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Choose the right solution for your needs, with seamless migration between them.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Github className="h-8 w-8 text-neutral-400 mr-4" />
              <h3 className="text-2xl font-bold text-[var(--white)]">Hanzo Platform</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">100% Free & Open Source</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Self-hosted on your hardware</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Full data sovereignty</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Perfect for local development</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Community support</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-600 mr-3">○</span>
                <span className="text-neutral-500">Limited by your hardware</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-600 mr-3">○</span>
                <span className="text-neutral-500">Manual scaling and maintenance</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <a href="https://github.com/hanzoai/platform" className="inline-block px-6 py-3 bg-[var(--white)]/10 hover:bg-[var(--white)]/20 text-[var(--white)] rounded-lg font-medium transition-colors border border-gray-800">
                Get Started Free
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Cloud className="h-8 w-8 text-neutral-400 mr-4" />
              <h3 className="text-2xl font-bold text-[var(--white)]">Hanzo Cloud</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Fully managed infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Global deployment in 35+ regions</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Automatic scaling with demand</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Enterprise-grade security & compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">24/7 professional support</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">High-performance GPU access</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-400 mr-3">✓</span>
                <span className="text-neutral-300">Pay only for what you use</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <a href="/cloud" className="inline-block px-6 py-3 bg-[var(--white)]/10 hover:bg-[var(--white)]/20 text-[var(--white)] rounded-lg font-medium transition-colors border border-gray-800">
                Explore Cloud
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OpenSourcePlatform = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[var(--black)]/50 border border-gray-800/50 text-neutral-300 text-sm font-medium mb-4">
            100% Open Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--white)]">Complete AI Engineering Stack</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Everything you need to build and deploy AI applications, free and open source.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-colors"
          >
            <Code className="h-10 w-10 text-neutral-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Local LLM Runner</h3>
            <p className="text-neutral-400 mb-4">Run optimized language models locally for development and testing.</p>
            <div className="text-sm text-neutral-500">MIT Licensed</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-colors"
          >
            <Database className="h-10 w-10 text-neutral-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Vector Database</h3>
            <p className="text-neutral-400 mb-4">High-performance vector storage and search for embeddings and RAG applications.</p>
            <div className="text-sm text-neutral-500">Apache 2.0 Licensed</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-colors"
          >
            <Server className="h-10 w-10 text-neutral-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Inference Engine</h3>
            <p className="text-neutral-400 mb-4">Fast, efficient model inference with batch processing and caching.</p>
            <div className="text-sm text-neutral-500">MIT Licensed</div>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/hanzoai/platform" className="text-neutral-400 hover:text-[var(--white)] underline transition-colors">
            View all components on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

const Platform = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      <ZenBackground />
      <Navbar />
      <main>
        <PlatformHero />
        <Features />
        <ZenQuoteSection 
          quote="The wise engineer owns their tools, lest their tools own them."
          attribution="Principle 14"
        />
        <ComparisonSection />
        <OpenSourcePlatform />
        <TrustedBy />
        <DeveloperLove />
        <Usage />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;