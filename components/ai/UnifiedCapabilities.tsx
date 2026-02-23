'use client'


import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Brain, Database, Bot, Search, FileText, Workflow, 
  BarChart3, Lock, MessageSquare, Layers, Zap
} from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const capabilities = [
  {
    icon: Brain,
    title: "Model Hub Access",
    description: "One API for thousands of models from top providers and the open-source community"
  },
  {
    icon: Database,
    title: "Vector Database",
    description: "Built-in vector storage with automatic indexing for semantic search and RAG applications"
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Process, chunk, and index documents in 30+ formats with automatic metadata extraction"
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Natural language search across your knowledge base with advanced relevance tuning"
  },
  {
    icon: Bot,
    title: "Agent Framework",
    description: "Build autonomous AI agents with reasoning, planning and tool-use capabilities"
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Specialized models for code completion, refactoring, and documentation"
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "Chain AI operations with built-in caching, observability, and error handling"
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Comprehensive analytics and cost tracking across all AI operations"
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Enterprise-grade security with data residency options and compliance features"
  },
  {
    icon: MessageSquare,
    title: "Chat Interfaces",
    description: "Pre-built chat components with memory management and streaming responses"
  },
  {
    icon: Layers,
    title: "Prompt Management",
    description: "Version, test, and optimize prompts across different models and environments"
  },
  {
    icon: Zap,
    title: "Optimized Edge Serving",
    description: "Global edge deployment for ultra-low latency AI inference and responses"
  }
];

const UnifiedCapabilities = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ChromeText as="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Unified AI Platform
            </ChromeText>
            <p className="text-xl text-neutral-300">
              A complete suite of AI capabilities accessible through a single, 
              consistent API with everything you need to build powerful AI applications
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-br from-white/10 to-white/10 border border-white/20 rounded-xl p-6"
            >
              <capability.icon className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-bold text-[var(--white)] mb-2">{capability.title}</h3>
              <p className="text-neutral-300">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedCapabilities;
