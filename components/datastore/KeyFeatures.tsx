'use client'

import React from "react";
import { motion } from "framer-motion";
import { Zap, Scale, Shield, Grid, DatabaseIcon, Activity } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
  >
    <div className="h-12 w-12 bg-[#fd4444]/20 rounded-lg flex items-center justify-center mb-6">
      <Icon className="h-6 w-6 text-[#fd4444]" />
    </div>
    <ChromeText as="h3" className="text-xl font-bold mb-4">
      {title}
    </ChromeText>
    <p className="text-neutral-400">
      {description}
    </p>
  </motion.div>
);

const KeyFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast",
      description: "Processes analytical queries faster than traditional row and column oriented systems."
    },
    {
      icon: Scale,
      title: "Linearly Scalable",
      description: "Scales efficiently with hardware resources horizontally and vertically to petabyte scale."
    },
    {
      icon: Shield,
      title: "Highly Reliable",
      description: "Supports asyncronous replication and can be deployed across multiple datacenters."
    },
    {
      icon: Grid,
      title: "Flexible Architecture",
      description: "Supports shared-nothing clusters as well as separation of storage and compute."
    },
    {
      icon: DatabaseIcon,
      title: "Feature-rich",
      description: "The most complete analytical datastore with support for joins, federated queries, and more."
    },
    {
      icon: Activity,
      title: "Easy to Use",
      description: "Simplifies writing queries with a user-friendly SQL dialect, optimized for common analytical use cases."
    }
  ];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Key Features
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A powerful datastore built for modern analytical applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
