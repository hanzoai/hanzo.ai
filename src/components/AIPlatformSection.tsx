
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Server, Blocks, Database, Network, Workflow, Bot, Code, Lock, Globe, Cpu, GitBranch,
  Brain, ShoppingCart, Zap, Shield, BarChart, CreditCard, HardDrive, Layout, Puzzle, Function,
  User, Activity, Layers
} from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import AITunnelAnimation from "@/components/animations/AITunnelAnimation";

const AIPlatformSection = () => {
  const [activeTab, setActiveTab] = useState("platform");
  const containerRef = useRef<HTMLElement>(null);

  // Cloud Console Mock Component - keeping as a reference but not using it anymore
  const CloudConsoleMock = () => (
    <div className="relative w-full h-64 overflow-hidden rounded-lg border border-gray-800 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black p-4">
        <div className="flex items-center space-x-2 border-b border-gray-800 pb-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-sm text-gray-400">hanzo-console-01.cloud.ai</div>
        </div>
        
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3 h-48 bg-gray-800/30 rounded p-2">
            <div className="text-xs text-purple-400 mb-2">Projects</div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center mb-2 p-1 rounded hover:bg-purple-900/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <div className="text-xs text-gray-300">project-{i + 1}</div>
              </div>
            ))}
          </div>
          
          <div className="col-span-9 h-48 bg-gray-800/30 rounded p-2">
            <div className="text-xs text-purple-400 mb-2">Deployment Stats</div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-gray-900/50 p-2 rounded">
                <div className="text-xs text-gray-400">CPU</div>
                <div className="text-sm text-white">12%</div>
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <div className="text-xs text-gray-400">Memory</div>
                <div className="text-sm text-white">1.2GB</div>
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <div className="text-xs text-gray-400">Requests</div>
                <div className="text-sm text-white">235/min</div>
              </div>
            </div>
            
            <div className="h-20 relative">
              <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-purple-500/60"
                    style={{ 
                      height: `${Math.max(10, Math.min(100, Math.random() * 100))}%`,
                      opacity: 0.5 + (Math.random() * 0.5)
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const features = {
    platform: [
      {
        title: "One Platform",
        description: "A unified AI platform combining infrastructure, models, and interfaces",
        icon: Blocks
      },
      {
        title: "Many Uses",
        description: "From research to production, for startups to enterprises",
        icon: Workflow
      },
      {
        title: "For All Humans",
        description: "Democratic access to frontier AI technology",
        icon: Globe
      }
    ],
    capabilities: [
      {
        title: "Get Work Done",
        description: "Your personalized multilingual AI assistant with web search",
        icon: Bot
      },
      {
        title: "Code Faster",
        description: "Build faster with coding assistance across 80+ languages",
        icon: Code
      },
      {
        title: "Build AI Apps",
        description: "Create and deploy custom AI solutions with frontier models",
        icon: Terminal
      }
    ],
    solutions: [
      {
        title: "Private & Portable",
        description: "Deploy anywhere—on-premises, cloud, edge, or data centers",
        icon: Lock
      },
      {
        title: "Transparent & Trustworthy",
        description: "Leading contributor to open source AI and AI policy",
        icon: GitBranch
      },
      {
        title: "Delightful Interfaces",
        description: "Intuitive user experiences bringing frontier intelligence to life",
        icon: Cpu
      }
    ]
  };

  const renderTabContent = (tabKey: keyof typeof features) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features[tabKey].map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * index }}
          className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
        >
          <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
            <feature.icon className="h-6 w-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
                AI Engineering Platform
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ChromeText 
                as="h2" 
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Your AI future belongs to you
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-2xl">
                Pioneer the next wave of intelligence with an integrated ecosystem that gives you full control over your AI journey.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Button size="lg" variant="outline" className="text-white">
              <a href="/solutions">Explore Solutions</a>
            </Button>
          </motion.div>
        </div>
        
        {/* AI Tunnel Animation (replacing Cloud Console Mockup) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <AITunnelAnimation 
            title="Accelerating AI Future"
            subtitle="The platform for modern AI applications"
            showButtons={false}
          />
        </motion.div>
        
        {/* Tabs */}
        <div className="mb-12">
          <div className="flex space-x-2 border-b border-gray-800 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("platform")}
              className={`px-4 py-2 rounded-t-lg whitespace-nowrap ${
                activeTab === "platform"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Platform Vision
            </button>
            <button
              onClick={() => setActiveTab("capabilities")}
              className={`px-4 py-2 rounded-t-lg whitespace-nowrap ${
                activeTab === "capabilities"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Core Capabilities
            </button>
            <button
              onClick={() => setActiveTab("solutions")}
              className={`px-4 py-2 rounded-t-lg whitespace-nowrap ${
                activeTab === "solutions"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Enterprise Solutions
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {renderTabContent(activeTab as keyof typeof features)}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Join the global pioneers who are 100x-ing their capabilities with the world's most comprehensive AI platform.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6">
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">OPEN SOURCE</span>
            </div>
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">INFERENCE</span>
            </div>
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">FINE-TUNING</span>
            </div>
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">PRIVATE CLOUD</span>
            </div>
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">RAG</span>
            </div>
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">MODEL DISTILLATION</span>
            </div>
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">EDGE DEPLOYMENT</span>
            </div>
            <div className="flex items-center justify-center h-8">
              <span className="text-gradient-steel text-sm font-medium">AGENTIC WORKFLOWS</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>
        {`
        .text-gradient-steel {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 6s ease infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}
      </style>
    </section>
  );
};

export default AIPlatformSection;
