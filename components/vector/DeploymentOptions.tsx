'use client'


import React from "react";
import { motion } from "framer-motion";
import { Laptop, Server, Cloud, Workflow } from "lucide-react";
import { Button } from "@hanzo/ui";

const DeploymentOptions = () => {
  const deploymentOptions = [
    {
      icon: Laptop,
      title: "Hanzo Vector Lite",
      description: "Lightweight vector database-as-a-library that runs directly in your application.",
      features: [
        "Instant setup with pip/npm install",
        "Perfect for prototyping and development",
        "No external dependencies or services",
        "Up to 1M vectors on a single machine"
      ],
      cta: "Get Started",
      color: "red"
    },
    {
      icon: Server,
      title: "Hanzo Vector Server",
      description: "Self-hosted, production-ready vector database for single-machine deployment.",
      features: [
        "Complete feature set in standalone mode",
        "Ideal for up to 100M vectors",
        "Docker & Kubernetes deployment options",
        "Simple configuration and management"
      ],
      cta: "Deploy Now",
      color: "red"
    },
    {
      icon: Workflow,
      title: "Hanzo Vector Cluster",
      description: "Distributed, horizontally scalable deployment for massive vector collections.",
      features: [
        "Scale to billions of vectors with minimal latency",
        "Horizontal scaling across multiple nodes",
        "Advanced cluster management tools",
        "High availability and fault tolerance"
      ],
      cta: "Learn More",
      color: "red"
    },
    {
      icon: Cloud,
      title: "Hanzo Vector Cloud",
      description: "Fully-managed vector database service with zero operational overhead.",
      features: [
        "Pay-as-you-go serverless option",
        "Dedicated clusters for enterprise needs",
        "10x faster than self-hosted solutions",
        "99.999% uptime SLA and global availability"
      ],
      cta: "Try Free",
      color: "red"
    }
  ];

  const getColorClasses = (color: string, isHovered: boolean = false) => {
    const colorMap: Record<string, { bg: string, text: string, border: string }> = {
      red: {
        bg: isHovered ? "bg-red-900/40" : "bg-red-900/20",
        text: "text-[#ffffff]",
        border: isHovered ? "border-[#ffffff]/50" : "border-red-800/50"
      }
    };

    return colorMap[color] || colorMap.red;
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
              Deployment Options to Match Your Journey
            </h2>
            <p className="text-xl text-neutral-300">
              From local development to global-scale production, Hanzo Vector offers flexible deployment options to fit your needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deploymentOptions.map((option, index) => {
            const { bg, text, border } = getColorClasses(option.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${bg} border ${border} rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg hover:shadow-red-900/20`}
              >
                <div className={`h-12 w-12 rounded-lg ${bg} flex items-center justify-center mb-4`}>
                  <option.icon className={`h-6 w-6 ${text}`} />
                </div>
                <h3 className="text-xl font-bold text-[var(--white)] mb-2">{option.title}</h3>
                <p className="text-neutral-300 mb-6">{option.description}</p>
                
                <ul className="space-y-2 mb-8 flex-grow">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <span className={`mr-2 ${text}`}>•</span>
                      <span className="text-neutral-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className={`mt-auto ${text} border-gray-700 hover:bg-gray-800`}>
                  {option.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeploymentOptions;
