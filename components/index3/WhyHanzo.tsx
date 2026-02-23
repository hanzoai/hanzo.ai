'use client'


import React from "react";
import { motion } from "framer-motion";
import { Brain, Scale, Leaf, Shield, Code } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const WhyHanzo = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "AI-Native",
      description: "Purpose-built for AI-driven software development and deployment."
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Autonomous",
      description: "Delegate complex tasks to intelligent AI agents."
    },
    {
      icon: <Scale className="h-6 w-6 text-white" />,
      title: "Scalable",
      description: "Grow seamlessly from startup to enterprise-level demands."
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Sustainable",
      description: "Operate with 100% renewable energy at planet-scale efficiency."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Open and Secure",
      description: "Fully open-source options ensuring transparency and control."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ChromeText 
            as="h2" 
            className="text-3xl md:text-5xl font-bold mb-6"
            preHeading="Innovative Technology"
          >
            Why Visionary Teams Choose Hanzo
          </ChromeText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900/30 rounded-xl p-6 border border-gray-800"
            >
              <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <ChromeText as="h3" className="text-xl font-bold mb-2">
                {feature.title}
              </ChromeText>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHanzo;
