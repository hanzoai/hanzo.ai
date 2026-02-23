'use client'


import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, Terminal, Server, Bot } from "lucide-react";
import { Button } from "@hanzo/ui";

const CoreProjects = () => {
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
            Core Projects
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Our flagship open source technologies that power the Hanzo Platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Platform Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-8 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Server className="h-12 w-12 text-white/70 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-[var(--white)]">Hanzo Platform</h3>
                <div className="flex items-center mt-1">
                  <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white/70">github.com/hanzoai/platform</a>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 text-lg">
              The free, forever, open-source version of our cloud infrastructure. Run the entire Hanzo stack locally with a single command.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-white/60 mr-2" />
                <span className="text-neutral-300">5.2k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-5 w-5 text-neutral-400 mr-2" />
                <span className="text-neutral-300">742 forks</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-white/10 mr-2"></div>
                <span className="text-neutral-300">Active</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button 
                className="flex-1 bg-white/10 hover:bg-white/10"
                size="sm"
              >
                <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                  <Github className="mr-2 h-4 w-4" /> Repository
                </a>
              </Button>
              <Button 
                className="flex-1"
                variant="outline"
                size="sm"
              >
                <a href="/platform" className="flex items-center justify-center w-full">
                  <Terminal className="mr-2 h-4 w-4" /> Learn More
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Bot Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-8 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Bot className="h-12 w-12 text-white/70 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-[var(--white)]">Hanzo Bot</h3>
                <div className="flex items-center mt-1">
                  <a href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white/70">github.com/hanzoai/bot</a>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 text-lg">
              Agentic framework for building advanced AI assistants with custom tool integration. Create powerful workflows with LLMs.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-white/60 mr-2" />
                <span className="text-neutral-300">4.8k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-5 w-5 text-neutral-400 mr-2" />
                <span className="text-neutral-300">623 forks</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-white/10 mr-2"></div>
                <span className="text-neutral-300">Active</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button 
                className="flex-1 bg-white/10 hover:bg-white/10"
                size="sm"
              >
                <a href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                  <Github className="mr-2 h-4 w-4" /> Repository
                </a>
              </Button>
              <Button 
                className="flex-1"
                variant="outline"
                size="sm"
              >
                <a href="/bot" className="flex items-center justify-center w-full">
                  <Terminal className="mr-2 h-4 w-4" /> Learn More
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreProjects;
