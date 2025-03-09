
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Scale, Shield, Zap, Leaf } from "lucide-react";

const WhyHanzo = () => {
  const reasons = [
    {
      icon: <Cpu className="h-8 w-8 text-purple-400" />,
      title: "AI-Native",
      description: "Purpose-built for AI-driven software development and deployment."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Autonomous",
      description: "Delegate complex tasks to intelligent AI agents."
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-400" />,
      title: "Scalable",
      description: "Grow seamlessly from startup to enterprise-level demands."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-400" />,
      title: "Sustainable",
      description: "Operate with 100% renewable energy at planet-scale efficiency."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Open and Secure",
      description: "Fully open-source options ensuring transparency and control."
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
    <div className="max-w-6xl mx-auto mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Visionary Teams Choose Hanzo
        </h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {reasons.map((reason, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 text-center"
            variants={item}
          >
            <div className="flex justify-center mb-4">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-gray-400 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Hanzo Cloud Infrastructure</h3>
            <p className="text-gray-400 mb-6">Built from the ground up for scalability, sustainability, and security</p>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4">
                  <Leaf className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-1">Sustainable by Design</h4>
                  <p className="text-gray-400 text-sm">
                    100% renewable energy-powered infrastructure at 3 cents/kWh, with industry-leading efficiency and environmentally-conscious practices
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-1">Enterprise-Grade Security</h4>
                  <p className="text-gray-400 text-sm">
                    SOC2, GDPR, HIPAA compliant infrastructure with comprehensive security framework protecting your data end-to-end
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-1">Optimized Performance</h4>
                  <p className="text-gray-400 text-sm">
                    High-performance compute, storage, and networking with distributed global infrastructure delivering ultra-low latency
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Hanzo Ventures</h3>
            <p className="text-gray-400 mb-6">Empowering innovation and growth through strategic investments</p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-gray-200 mb-2">Sensei Ventures</h4>
              <p className="text-gray-400 text-sm mb-4">
                AI-focused venture fund accelerating visionary startups with strategic investments in transformative AI and frontier tech
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-200 mb-2">Our Customers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Damon – $100M+ in pre-orders (IPO completed)</li>
              <li>• Triller – Scaled to 100M+ users with Trillerfest (IPO completed)</li>
              <li>• Unikrn – Raised 120,000 ETH in 30 days (acquired)</li>
              <li>• Zoo – Immersive AR experiences powering rapid growth</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyHanzo;
