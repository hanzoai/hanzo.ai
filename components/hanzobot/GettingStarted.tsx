'use client'


import React from "react";
import { motion } from "framer-motion";
import { Terminal, Github, CheckCircle } from "lucide-react";
import { Button } from "@hanzo/ui";

const GettingStarted = () => {
  const prerequisites = [
    "Python 2.7+",
    "Node.js 23+",
    "pnpm",
    "Note for Windows Users: WSL 2 is required"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-background"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">Getting Started</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Begin your journey with Hanzo Bot in a few simple steps
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-[var(--white)] mb-4">Prerequisites</h3>
              <ul className="space-y-3">
                {prerequisites.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-foreground/70 mr-2 mt-0.5" />
                    <span className="text-foreground/80">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[var(--white)] mb-4">Automated Start</h3>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-foreground/80 mb-4 overflow-x-auto">
                <p>git clone https://github.com/hanzoai/bot-starter.git</p>
                <p>cd bot-starter</p>
                <p>cp .env.example .env</p>
                <p>pnpm i && pnpm build && pnpm start</p>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">OR</p>
              
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-foreground/80 mb-4 overflow-x-auto">
                <p>git clone https://github.com/hanzoai/bot</p>
                <p>cd bot</p>
                <p>sh scripts/start.sh</p>
              </div>
              
              <p className="text-muted-foreground text-sm">
                The start script handles all dependencies, environment setup, and character management automatically.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col"
          >
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 flex flex-col h-full">
              <div className="mb-6 text-center">
                <Terminal className="h-12 w-12 text-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-[var(--white)]">Quickstart Guide</h3>
                <p className="text-muted-foreground mt-2">
                  For a more detailed guide, check out our comprehensive documentation
                </p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="text-center space-y-6 max-w-md">
                  <p className="text-foreground/80">
                    Ready to create your first autonomous AI agent? Our detailed quickstart guide will walk you through every step.
                  </p>
                  
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-[#cccccc] text-[var(--white)] px-8 w-full"
                  >
                    View Quickstart Guide
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gray-700 text-foreground/80 hover:bg-gray-800 px-8 w-full"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Clone Repository
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
