
import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, GitMerge, Database, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const InfrastructureComponents = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">
            Infrastructure Components
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            The building blocks of the Hanzo Platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vector DB */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-[var(--white)]">Vector DB</h3>
            </div>
            <p className="text-neutral-300 mb-6">
              High-performance vector database designed for AI applications with local and distributed modes.
            </p>
            <div className="flex items-center justify-between text-sm text-neutral-400 mb-5">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>3.4k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-4 w-4 mr-1" />
                <span>410 forks</span>
              </div>
              <div className="flex items-center">
                <GitMerge className="h-4 w-4 mr-1" />
                <span>Rust</span>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-green-600/70 hover:bg-green-600"
            >
              <a href="https://github.com/hanzoai/vector-db" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </motion.div>

          {/* LLM Runtime */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-[var(--white)]">LLM Runtime</h3>
            </div>
            <p className="text-neutral-300 mb-6">
              Optimized inference engine for running large language models locally with minimal resource usage.
            </p>
            <div className="flex items-center justify-between text-sm text-neutral-400 mb-5">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>4.1k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-4 w-4 mr-1" />
                <span>520 forks</span>
              </div>
              <div className="flex items-center">
                <GitMerge className="h-4 w-4 mr-1" />
                <span>C++/Python</span>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-green-600/70 hover:bg-green-600"
            >
              <a href="https://github.com/hanzoai/llm-runtime" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </motion.div>

          {/* API Gateway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-[var(--white)]">API Gateway</h3>
            </div>
            <p className="text-neutral-300 mb-6">
              High-performance API Gateway for routing, authentication, and rate limiting in AI applications.
            </p>
            <div className="flex items-center justify-between text-sm text-neutral-400 mb-5">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>2.8k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-4 w-4 mr-1" />
                <span>362 forks</span>
              </div>
              <div className="flex items-center">
                <GitMerge className="h-4 w-4 mr-1" />
                <span>Go</span>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-green-600/70 hover:bg-green-600"
            >
              <a href="https://github.com/hanzoai/gateway" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureComponents;
