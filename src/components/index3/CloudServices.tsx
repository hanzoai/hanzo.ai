
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Database, BarChart, Shield, Server, Globe, CreditCard, User, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const CloudServices = () => {
  const services = [
    {
      icon: <Cloud className="h-6 w-6 text-blue-400" />,
      title: "AI Compute",
      description: "Instant scaling, GPU-accelerated AI environments.",
      items: [
        "High-performance NVIDIA hardware on-demand (H100, DGX)",
        "Scalable AI inference and training infrastructure",
        "Low-latency deployments across global data centers"
      ]
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-400" />,
      title: "Analytics",
      description: "Precision business intelligence and real-time user insights.",
      items: [
        "Real-time event tracking and contextual analytics",
        "AI-driven predictive analytics and anomaly detection",
        "Planetary-scale infrastructure (200+ global locations)"
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-blue-400" />,
      title: "Base",
      description: "A complete backend platform in one line of code (@hanzo/base).",
      items: [
        "Real-time database, serverless functions, and authentication",
        "Integrated CDN and edge-optimized global storage",
        "Fully open-source, easy self-hosting and no vendor lock-in"
      ]
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-400" />,
      title: "Commerce",
      description: "Intelligent, next-generation e-commerce platform (@hanzo/commerce).",
      items: [
        "One-line store creation with automated checkout and cart",
        "Dynamic pricing, subscription management, and analytics",
        "Seamless Web2 and Web3 payment integrations"
      ]
    },
    {
      icon: <User className="h-6 w-6 text-blue-400" />,
      title: "Identity",
      description: "Secure, scalable user authentication and management.",
      items: [
        "Multi-provider social logins, SSO, enterprise integrations",
        "Centralized role-based access controls and permissions",
        "Detailed user behavior analytics and insights"
      ]
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "Scale",
      description: "AI-powered marketing and advertising automation specialized for growth.",
      items: [
        "Multi-channel marketing automations (Meta, Google Ads, Email)",
        "AI-driven campaign optimization and real-time performance tracking",
        "Automated referral, affiliate, and influencer management modules"
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-400" />,
      title: "Payments",
      description: "Robust, global AI-enhanced payments platform.",
      items: [
        "Instant onboarding and support for global currencies",
        "Advanced fraud detection powered by machine learning",
        "Transparent and scalable transaction fees (pay-as-you-grow)"
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-blue-400" />,
      title: "Database",
      description: "High-performance real-time analytics database.",
      items: [
        "Optimized for AI workloads with clickhouse-style performance",
        "Scalable, fault-tolerant architecture with global replication",
        "In-memory caching included, seamlessly integrated with Base"
      ]
    }
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Hanzo Cloud
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Global, infinitely scalable, sustainable compute infrastructure specifically optimized for AI applications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
              variants={item}
            >
              <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-xs flex">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link to="/cloud" className="text-blue-400 hover:text-blue-300">
              Learn more about Hanzo Cloud →
            </Link>
            <Link to="/database" className="text-blue-400 hover:text-blue-300">
              Explore Hanzo Database →
            </Link>
            <Link to="/platform" className="text-blue-400 hover:text-blue-300">
              See the full platform →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudServices;
