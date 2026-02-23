'use client'


import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Code2, TestTube, FileCheck, Bug, Workflow } from "lucide-react";

const UseCases = () => {
  const useCases = [
    { name: "Design & Research", icon: <Paintbrush className="h-6 w-6" /> },
    { name: "Everyday Coding", icon: <Code2 className="h-6 w-6" /> },
    { name: "Automated Testing", icon: <TestTube className="h-6 w-6" /> },
    { name: "Automated Code Reviews", icon: <FileCheck className="h-6 w-6" /> },
    { name: "Bug-fixing", icon: <Bug className="h-6 w-6" /> },
    { name: "Self-healing CI/CD", icon: <Workflow className="h-6 w-6" /> }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Use cases</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/10">
              The Ultimate Developer Experience, Powered by AI
            </p>
            <p className="text-lg text-foreground/80">
              Hanzo is redefining the developer experience with AI-powered assistance for design, research, coding, reviews, debugging, and CI/CD. Let AI handle the mundane tasks and unlock your full potential.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 flex items-center gap-3 hover:bg-gray-800/50 transition-colors"
              variants={item}
            >
              <div className="p-2 bg-primary/20 rounded-lg text-foreground/70">
                {useCase.icon}
              </div>
              <span className="font-medium">{useCase.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 my-16">
          <motion.div 
            className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Integrated AI Across the Software Development Lifecycle.</h3>
            <p className="text-foreground/80">
              Reduce cycle times with the help of AI workflows throughout the entire software development lifecycle. Hanzo's AI Agents support teams at every stage from coding and testing, analyzing production errors and troubleshooting CI/CD pipelines.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">One AI Platform for All Dev Tasks.</h3>
            <p className="text-foreground/80 mb-6">
              Included in one subscription are dozens of built-in AI agentic workflows, carefully planned to perform developer tasks for you. Full-stack engineer? Of course. Bug fixes? Sure. Adding tests to existing code? No problem. UX/UI Improvements? Included. Generating user docs? That too.
            </p>
            <div className="text-right">
              <a href="#learn-more" className="text-foreground hover:text-foreground/70 inline-flex items-center">
                Learn more <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
