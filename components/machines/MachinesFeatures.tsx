'use client'


import React from 'react';
import { motion } from "framer-motion";
import { Cpu, Server, Zap, Network, BarChart, Globe } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6"
      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)" }}
    >
      <Icon className="h-10 w-10 mb-4" />
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};

const MachinesFeatures = () => {
  const features = [
    {
      icon: Cpu,
      title: "High-Performance GPUs",
      description: "Access to NVIDIA H100, A100, and L4 GPUs for AI training and inference workloads.",
      delay: 0
    },
    {
      icon: Server,
      title: "Flexible Configurations",
      description: "Custom CPU, memory, and storage configurations to match your specific workload requirements.",
      delay: 0.1
    },
    {
      icon: Zap,
      title: "Instant Provisioning",
      description: "Launch machines in seconds with pre-configured environments for ML frameworks and data science.",
      delay: 0.2
    },
    {
      icon: Network,
      title: "High-Speed Networking",
      description: "Up to 100 Gbps networking with ultra-low latency between machines for distributed workloads.",
      delay: 0.3
    },
    {
      icon: BarChart,
      title: "Comprehensive Monitoring",
      description: "Real-time metrics and performance monitoring for all machine resources and workloads.",
      delay: 0.4
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Deploy machines in 20+ regions worldwide with automatic failover and redundancy.",
      delay: 0.5
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl font-bold mb-4">
            Key Features & Capabilities
          </ChromeText>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built infrastructure for the most demanding AI and compute workloads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachinesFeatures;
