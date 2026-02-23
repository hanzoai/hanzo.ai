'use client'


import React from "react";
import { motion } from "framer-motion";
import { Database, Search, Zap, Shield, Code, BarChart } from "lucide-react";
import AnimatedSection, { AnimatedHeading, AnimatedStaggerContainer } from "@/components/ui/animated-section";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";
import ChromeText from "@/components/ui/chrome-text";

const featureCardVariant = createAnimationVariant("popIn", {
  duration: 0.4,
  curve: curves.bouncy,
  blur: 5
});

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <motion.div
    variants={featureCardVariant}
    className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-colors"
    whileHover={{
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.3)"
    }}
    transition={{ duration: 0.2 }}
  >
    <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <ChromeText as="h3" className="text-xl font-bold mb-2">
      {title}
    </ChromeText>
    <p className="text-neutral-400">
      {description}
    </p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Vector Storage",
      description: "Store and index millions of vector embeddings with automatic sharding and high-throughput capabilities."
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Similarity Search",
      description: "Ultra-fast nearest neighbor search using HNSW, IVF, and other algorithms for maximum performance."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Real-time Indexing",
      description: "Index new vectors instantly with zero downtime and minimal performance impact on queries."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Secure Access",
      description: "Role-based access control, end-to-end encryption, and audit logging for enterprise-grade security."
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "API & SDKs",
      description: "Well-documented REST API and client libraries for Python, JavaScript, Go, and more."
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Analytics",
      description: "Monitor performance metrics, query patterns, and usage statistics through a built-in dashboard."
    }
  ];

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
            Powerful Features
          </ChromeText>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Everything you need for building AI-powered vector search applications
          </p>
        </AnimatedHeading>
        
        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" delayFactor={0.05}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </AnimatedStaggerContainer>
      </div>
    </AnimatedSection>
  );
};

export default Features;
