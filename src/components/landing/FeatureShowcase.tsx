
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Database, MessageSquare, HardDrive, Bot, Code2, Monitor, ArrowRight } from "lucide-react";
import { aiCloudItems, dxPlatformItems } from "../navigation/products-menu/product-data";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const FeatureShowcase: React.FC = () => {
  const limitedCloudItems = aiCloudItems.slice(0, 8);
  const limitedPlatformItems = dxPlatformItems.slice(0, 8);

  const industryCards = [
    {
      name: "Financial Services",
      description: "AI-driven solutions for risk assessment, fraud detection, and personalized banking experiences."
    },
    {
      name: "Healthcare",
      description: "Transform patient care with AI-powered diagnostics, medical research, and operational efficiency."
    },
    {
      name: "Manufacturing",
      description: "Optimize production workflows, predictive maintenance, and quality control with AI automation."
    },
    {
      name: "Retail",
      description: "Enhance customer experiences with intelligent recommendations, inventory management, and pricing."
    },
    {
      name: "Technology",
      description: "Build next-generation products and services with AI-enhanced features and capabilities."
    },
    {
      name: "Energy",
      description: "Improve sustainability and operational efficiency with AI-powered grid management and analytics."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              Open Source AI Engineering
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build the Future with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              A complete platform for developers to build, deploy, and scale AI
              applications with unprecedented speed and complete control.
            </p>
          </motion.div>
        </div>

        {/* AI Cloud Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              AI Cloud
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Scalable Infrastructure for AI Applications
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Build high-performance AI applications with our suite of cloud services designed for AI workloads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {limitedCloudItems.map((product, index) => (
              <ProductCard
                key={index}
                icon={<product.icon className="h-6 w-6 text-blue-400" />}
                title={product.name}
                description={product.description}
              />
            ))}
          </div>
          
          <div className="flex justify-center mb-12">
            <Button 
              variant="outline" 
              className="group border-gray-700 hover:border-blue-500 hover:bg-blue-950/20"
              asChild
            >
              <a href="/ai">
                <span className="mr-2">View all AI Cloud services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* DX Platform Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              DX Platform
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Developer Experience Tools for AI Engineering
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Supercharge your AI development workflow with purpose-built tools for engineers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {limitedPlatformItems.map((product, index) => (
              <ProductCard
                key={index}
                icon={<product.icon className="h-6 w-6 text-purple-400" />}
                title={product.name}
                description={product.description}
              />
            ))}
          </div>
          
          <div className="flex justify-center mb-12">
            <Button 
              variant="outline" 
              className="group border-gray-700 hover:border-purple-500 hover:bg-purple-950/20"
              asChild
            >
              <a href="/platform">
                <span className="mr-2">View all DX Platform tools</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Industry Solutions
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              AI-Powered Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with tailored AI solutions designed for your industry's unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {industryCards.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>

          {/* View All Industries Link */}
          <div className="flex justify-center mb-20">
            <Button 
              variant="outline" 
              className="group border-gray-700 hover:border-purple-500 hover:bg-purple-950/20"
              asChild
            >
              <a href="/solutions">
                <span className="mr-2">View all industries</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Agency and Sensei Group Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {/* Hanzo Agency Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-purple-900/30 border border-purple-800/30 rounded-xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-800/30 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-300">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Hanzo Agency</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Elevate your brand with our AI-powered creative agency. We craft cutting-edge digital experiences that captivate audiences and deliver measurable business results.
            </p>
            <a href="/agency" className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors group">
              <span className="mr-2">Learn more</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
          {/* Sensei Group Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-green-900/30 border border-green-800/30 rounded-xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-800/30 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-300">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Sensei Group</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Accelerate enterprise transformation with our elite collective of CXOs and technology experts. We guide organizations through digital evolution with strategic implementation.
            </p>
            <a href="/sensei" className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors group">
              <span className="mr-2">Learn more</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
