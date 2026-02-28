'use client'


import React from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, Shield, Bot } from "lucide-react";

const features = [
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Developer-First",
    description: "Built by developers, for developers. Simple APIs with complete flexibility."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Optimized inference with custom routing and advanced caching."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Ready",
    description: "Enterprise security with GDPR controls and 99.9% uptime SLA."
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Model Flexibility",
    description: "Use any model from OpenAI, Anthropic, or bring your own models."
  }
];

const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for AI Engineering
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A complete platform to build, deploy, and scale AI applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900/30 border border-gray-800 rounded-xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Simple API. Powerful Results.</h3>
              <p className="text-foreground/80 mb-4">
                Just a few lines of code to integrate production-grade AI into your applications.
              </p>
            </div>
            <div className="flex-1 bg-gray-950 p-4 rounded-lg font-mono text-sm overflow-auto">
              <pre className="text-foreground/80">
                <code>
{`import { HanzoAI } from '@hanzo/ai';

const ai = new HanzoAI({
  apiKey: process.env.HANZO_API_KEY
});

const response = await ai.complete({
  model: 'gpt-5.3',
  prompt: 'Explain quantum computing',
  temperature: 0.7
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
