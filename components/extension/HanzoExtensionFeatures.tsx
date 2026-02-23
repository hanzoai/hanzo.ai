'use client'


import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Lock, Globe, Lightbulb, Share2, FileText, Command } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 h-full"
    >
      <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-[#ffffff]/20">
        <Icon className="h-6 w-6 text-[#ffffff]" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  );
};

const HanzoExtensionFeatures = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Assistance",
      description: "Get intelligent assistance for any website or content you're browsing."
    },
    {
      icon: Zap,
      title: "Quick Access",
      description: "One-click access to Hanzo AI capabilities from any web page."
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "Your data stays private with client-side processing and optional analytics."
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Compatible with all major websites and content platforms."
    },
    {
      icon: Lightbulb,
      title: "Smart Suggestions",
      description: "Contextual recommendations based on your browsing activity."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share content directly with your team or to your Hanzo workspace."
    },
    {
      icon: FileText,
      title: "Content Summaries",
      description: "Get instant summaries of articles, documentation, and long-form content."
    },
    {
      icon: Command,
      title: "Keyboard Shortcuts",
      description: "Power users can access all features with customizable shortcuts."
    }
  ];

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
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Enhance your browsing experience with AI-powered capabilities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HanzoExtensionFeatures;
