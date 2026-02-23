'use client'


import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, Zap, ShieldCheck, Compass, Database, Cpu, Cloud } from "lucide-react";

const OperativeFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Compatible with Mac OS, Windows, and Linux with X server installed."
    },
    {
      icon: Zap,
      title: "Self-Operating",
      description: "Models can view the screen and decide on mouse and keyboard actions autonomously."
    },
    {
      icon: ShieldCheck,
      title: "Secure Framework",
      description: "Open-source implementation with transparent security practices."
    },
    {
      icon: Compass,
      title: "Objective-Driven",
      description: "Complete complex tasks based on natural language objectives."
    },
    {
      icon: Database,
      title: "OCR Integration",
      description: "Optional OCR mode provides models with clickable element maps for enhanced accuracy."
    },
    {
      icon: Cpu,
      title: "Model Flexibility",
      description: "Compatible with various multimodal models including GPT-4o, Claude 3, Gemini Pro Vision."
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
              Key Capabilities
            </h2>
            <p className="text-xl text-neutral-300">
              Hanzo Operative gives AI models the ability to interact with computers
              the same way humans do
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-3 bg-gray-900/50 border border-gray-800 rounded-full px-6 py-3"
          >
            <Github className="h-5 w-5 text-neutral-400" />
            <span className="text-neutral-300">Open Source on</span>
            <a href="https://github.com/hanzo-ai/operative" className="text-[var(--white)] font-semibold hover:text-white transition-colors">GitHub</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperativeFeatures;
