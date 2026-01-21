import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Database, Cloud, Code, Cpu, 
  Box, Server, Globe, Network, Sparkles,
  Infinity, LayoutGrid, Brain, Bot, Terminal,
  GitBranch, Lock, Zap
} from "lucide-react";

const AICloudSVG = () => (
  <svg 
    className="absolute -bottom-10 -right-10 opacity-10 w-40 h-40 text-purple-500" 
    viewBox="0 0 200 200" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3" />
    <g transform="translate(70, 70)">
      <path d="M30 10C30 15.5228 25.5228 20 20 20C14.4772 20 10 15.5228 10 10C10 4.47715 14.4772 0 20 0C25.5228 0 30 4.47715 30 10Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="20" cy="10" r="5" fill="currentColor" />
    </g>
    <g transform="translate(120, 90)">
      <path d="M30 10C30 15.5228 25.5228 20 20 20C14.4772 20 10 15.5228 10 10C10 4.47715 14.4772 0 20 0C25.5228 0 30 4.47715 30 10Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="20" cy="10" r="5" fill="currentColor" />
    </g>
    <g transform="translate(80, 130)">
      <path d="M30 10C30 15.5228 25.5228 20 20 20C14.4772 20 10 15.5228 10 10C10 4.47715 14.4772 0 20 0C25.5228 0 30 4.47715 30 10Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="20" cy="10" r="5" fill="currentColor" />
    </g>
  </svg>
);

const DxPlatformSVG = () => (
  <svg 
    className="absolute -bottom-10 -right-10 opacity-10 w-40 h-40 text-blue-500" 
    viewBox="0 0 200 200" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="40" y="40" width="120" height="120" rx="8" stroke="currentColor" strokeWidth="2" />
    <line x1="40" y1="70" x2="160" y2="70" stroke="currentColor" strokeWidth="2" />
    <circle cx="55" cy="55" r="5" fill="currentColor" />
    <circle cx="75" cy="55" r="5" fill="currentColor" />
    <circle cx="95" cy="55" r="5" fill="currentColor" />
    <rect x="60" y="90" width="80" height="50" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.1" />
    <path d="M70 105L80 115L90 95M110 95L120 115L130 105" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

interface EcosystemDetailProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'cloud' | 'dx';
}

const EcosystemDetail: React.FC<EcosystemDetailProps> = ({ isOpen, onClose, type }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl max-w-3xl w-full p-6 shadow-xl overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {type === 'cloud' ? (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-white mb-2 flex items-center">
                    <Cloud className="mr-2 h-6 w-6 text-purple-400" />
                    Hanzo AI Cloud
                  </h3>
                  <p className="text-neutral-400">
                    Our comprehensive AI platform providing seamless access to cutting-edge AI capabilities with enterprise-grade reliability and security.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <Brain className="h-5 w-5 text-purple-400 mr-2" />
                      <h4 className="text-white font-medium">AI Model Hub</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      Access to leading open and proprietary AI models with unified API, optimized inference, and cost management.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <Database className="h-5 w-5 text-purple-400 mr-2" />
                      <h4 className="text-white font-medium">Vector Database</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      High-performance vector storage and retrieval for AI applications with advanced filtering and hybrid search.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <Bot className="h-5 w-5 text-purple-400 mr-2" />
                      <h4 className="text-white font-medium">Agent Framework</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      Build, deploy and manage intelligent agents that can reason, plan, and execute complex tasks autonomously.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <Lock className="h-5 w-5 text-purple-400 mr-2" />
                      <h4 className="text-white font-medium">Enterprise Security</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      Enterprise security, end-to-end encryption, and comprehensive audit logging for mission-critical AI systems.
                    </p>
                  </motion.div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <div className="text-neutral-500 text-sm">
                    Unified AI infrastructure for the enlightened engineer
                  </div>
                  <Link 
                    to="/ai" 
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center"
                  >
                    <span>Learn more about AI Cloud</span>
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-white mb-2 flex items-center">
                    <Code className="mr-2 h-6 w-6 text-blue-400" />
                    Developer Experience Platform
                  </h3>
                  <p className="text-neutral-400">
                    Our integrated toolkit designed to streamline the software development lifecycle, from code to production.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <GitBranch className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="text-white font-medium">CI/CD Pipeline</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      Automated testing, integration, and deployment with intelligent optimization and failure prediction.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <Terminal className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="text-white font-medium">Dev Tools</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      Enhanced CLI, IDE integrations, and AI-assisted coding tools that anticipate developer needs.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <Zap className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="text-white font-medium">Edge Computing</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      Global edge network for low-latency deployment with intelligent traffic routing and caching.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center mb-2">
                      <Network className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="text-white font-medium">Observability</h4>
                    </div>
                    <p className="text-neutral-400 text-sm">
                      Comprehensive monitoring, logging, and analytics with AI-powered anomaly detection and recommendation.
                    </p>
                  </motion.div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <div className="text-neutral-500 text-sm">
                    Build with tranquility, deploy with confidence
                  </div>
                  <Link 
                    to="/platform" 
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center"
                  >
                    <span>Learn more about DX Platform</span>
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProductsOverview = () => {
  const [selectedSystem, setSelectedSystem] = useState<'cloud' | 'dx' | null>(null);
  
  const products = [
    {
      name: "Hanzo Cloud",
      icon: Cloud,
      description: "Deploy with tranquility. Scale without attachment to infrastructure.",
      principle: "The wise engineer creates form from emptiness.",
      path: "/cloud"
    },
    {
      name: "Hanzo Vector",
      icon: Database,
      description: "Store and query vectors with efficiency and grace.",
      principle: "Knowledge structured becomes wisdom accessible.",
      path: "/vector"
    },
    {
      name: "Hanzo AI",
      icon: Cpu,
      description: "Harness artificial intelligence with mindful purpose.",
      principle: "Let AI amplify intention, not replace discernment.",
      path: "/ai"
    },
    {
      name: "Hanzo Code",
      icon: Code,
      description: "Write code that follows the middle path - neither complex nor simplistic.",
      principle: "Perfect code is not when there is nothing more to add, but when there is nothing left to take away.",
      path: "/hanzocode"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--black)] relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(25,25,25,1), rgba(0,0,0,1))"
        }}
      />
      
      <div className="max-w-screen-2xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
            The Way of Building
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Each tool embodies our principles. Together, they form a complete system for enlightened engineering.
          </p>
        </motion.div>

        {/* AI Ecosystem Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-black p-6 cursor-pointer group"
            onClick={() => setSelectedSystem('cloud')}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-xl bg-purple-500/10 mr-4">
                  <Cloud className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Cloud</h3>
              </div>
              
              <p className="text-neutral-300 mb-4">
                Our unified AI infrastructure combines vector databases, model inference, 
                and agent frameworks into a coherent platform built for enlightened engineers.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300">Vector DB</span>
                <span className="px-2 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300">Multi-Model</span>
                <span className="px-2 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300">Agents</span>
                <span className="px-2 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300">Enterprise Ready</span>
              </div>
              
              <button className="flex items-center text-purple-400 group-hover:text-purple-300 transition">
                <span>Explore AI Cloud</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <AICloudSVG />
            
            <motion.div 
              className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
              whileHover={{ opacity: 0.1 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-black p-6 cursor-pointer group"
            onClick={() => setSelectedSystem('dx')}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-xl bg-blue-500/10 mr-4">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">DX Platform</h3>
              </div>
              
              <p className="text-neutral-300 mb-4">
                Our developer experience platform streamlines engineering workflow with 
                automated CI/CD, observability, and edge computing in perfect harmony.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300">CI/CD</span>
                <span className="px-2 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300">Dev Tools</span>
                <span className="px-2 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300">Edge</span>
                <span className="px-2 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300">Observability</span>
              </div>
              
              <button className="flex items-center text-blue-400 group-hover:text-blue-300 transition">
                <span>Explore DX Platform</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <DxPlatformSVG />
            
            <motion.div 
              className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
              whileHover={{ opacity: 0.1 }}
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-gray-900/40 to-black border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--white)]/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <product.icon className="h-5 w-5 text-[var(--white)]" />
                </div>
                <h3 className="text-[var(--white)] text-lg font-medium">{product.name}</h3>
              </div>
              <p className="text-neutral-400 mb-4">{product.description}</p>
              <div className="text-neutral-600 text-sm italic mb-6">"{product.principle}"</div>
              <Link 
                to={product.path} 
                className="text-neutral-400 hover:text-[var(--white)] text-sm flex items-center transition-colors"
              >
                <span className="group-hover:underline">Learn more</span>
                <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center border border-white/5 rounded-2xl p-8 bg-gradient-to-b from-transparent to-gray-900/20"
        >
          <h3 className="text-2xl font-medium mb-4 text-[var(--white)]">Seek guidance from a Sensei</h3>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-6">
            Our masters can guide your team through the 64 principles and practices of enlightened engineering.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-[var(--white)]/5 hover:bg-[var(--white)]/10 border border-white/10 rounded-xl text-[var(--white)] transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10"
          >
            Request Sensei Consultation
          </Link>
        </motion.div>
      </div>

      <EcosystemDetail 
        isOpen={selectedSystem === 'cloud'}
        onClose={() => setSelectedSystem(null)}
        type="cloud"
      />

      <EcosystemDetail 
        isOpen={selectedSystem === 'dx'}
        onClose={() => setSelectedSystem(null)}
        type="dx"
      />
    </section>
  );
};

export default ProductsOverview;