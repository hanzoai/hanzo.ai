
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Code, Server, Database, Shield, Sparkles, Cpu, Microscope, Activity, Scale } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: Brain,
      title: 'AI Model Hub',
      description: 'Access a catalog of state-of-the-art foundation models from leading providers and Hanzo\'s specialized models.'
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Create autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention.'
    },
    {
      icon: Cpu,
      title: 'Optimized Runtime',
      description: 'High-performance inference with automatic batching, caching, and efficient resource utilization.'
    },
    {
      icon: Database,
      title: 'Vector Database',
      description: 'Built-in vector storage for embeddings with automatic indexing and retrieval optimization.'
    },
    {
      icon: Microscope,
      title: 'Evaluation Suite',
      description: 'Comprehensive tools for testing, evaluating, and benchmarking AI models and applications.'
    },
    {
      icon: Activity,
      title: 'AI Observability',
      description: 'Full visibility into AI system behavior with detailed metrics, logging, and performance analytics.'
    },
    {
      icon: Shield,
      title: 'AI Safety & Guardrails',
      description: 'Advanced content filtering, privacy controls, and ethical guardrails for responsible AI deployment.'
    },
    {
      icon: Scale,
      title: 'Enterprise Scale',
      description: 'Built for high-scale production workloads with auto-scaling, high availability, and global distribution.'
    },
    {
      icon: Code,
      title: 'Developer SDK',
      description: 'Intuitive libraries for Python, TypeScript, and other languages with comprehensive documentation.'
    },
    {
      icon: Server,
      title: 'Model Serving',
      description: 'Simplified deployment and management of custom models with automatic versioning and A/B testing.'
    },
    {
      icon: Sparkles,
      title: 'Fine-tuning',
      description: 'User-friendly tools for customizing foundation models to your specific use cases and data.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-[#fd4444]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
              Complete AI Engineering Toolkit
            </h2>
            <p className="text-xl text-neutral-300">
              Everything you need to build, deploy, and manage production-grade AI applications
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-[#fd4444]/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#fd4444]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
