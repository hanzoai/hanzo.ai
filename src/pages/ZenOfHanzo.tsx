
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TunnelContainer from "@/components/animations/tunnel/TunnelContainer";
import VanishingPoint from "@/components/animations/tunnel/VanishingPoint";
import ZenTimeline from "@/components/zen/ZenTimeline";
import ZenPrinciples from "@/components/zen/ZenPrinciples";
import ProductSection from "@/components/zen/ProductSection";
import JapaneseWave from "@/components/zen/JapaneseWave";
import CherryBlossom from "@/components/zen/CherryBlossom";

const cloudProducts = [
  { name: "AI", description: "AI – Unified access to frontier AI models." },
  { name: "Balancer", description: "Balancer – AI-native load balancer, LLM router, global CDN, caching, firewall." },
  { name: "Commerce", description: "Commerce – Intelligent e-commerce, dynamic pricing, subscriptions, integrated analytics." },
  { name: "Database", description: "Database – Real-time analytics DB optimized for AI, global replication, fault-tolerant." },
  { name: "Edge", description: "Edge – Instant global edge deployments, ultra-low latency compute." },
  { name: "Functions", description: "Functions – Globally distributed serverless compute for AI-driven event handling." },
  { name: "Machines", description: "Machines – Instantly scalable GPU and CPU compute optimized for AI workloads." },
  { name: "Metrics", description: "Metrics – Planetary-scale monitoring, observability, predictive analytics." },
  { name: "Payments", description: "Payments – Integrated payments infrastructure with subscriptions and usage-based billing." },
  { name: "Storage", description: "Storage – Edge-optimized, secure global storage, CDN, S3 compatible." },
  { name: "Vector", description: "Vector – High-performance vector database for semantic search, RAG, embeddings." },
  { name: "Works", description: "Works – Workflow automation and orchestration platform for AI-driven processes." }
];

const dxProducts = [
  { name: "App", description: "App – No-code AI app builder with drag-and-drop workflows." },
  { name: "Base", description: "Base – All-in-one realtime DB, authentication, file storage in one backend." },
  { name: "Code", description: "Code – AI-powered VS Code fork for codebase-aware autocomplete and editing." },
  { name: "Dev", description: "Dev – Autonomous AI-powered software engineering assistant." },
  { name: "Edge", description: "Edge – Lightweight runtime for global edge-optimized applications." },
  { name: "Extension", description: "Extension – Marketplace for AI-powered IDE extensions compatible with VS Code." },
  { name: "Functions", description: "Functions – Scalable, event-driven serverless compute with built-in AI integration." },
  { name: "Identity", description: "Identity – Authentication and authorization supporting OAuth, JWT, RBAC." },
  { name: "Observability", description: "Observability – Intelligent tracing, logging, real-time monitoring of AI systems." },
  { name: "Operator", description: "Operator – AI-native assistant for automating desktop tasks via natural language." },
  { name: "Virtual Machine", description: "Virtual Machine – AI-enabled local virtual machine for unified development environments." },
  { name: "Warehouse", description: "Warehouse – Infinitely scalable columnar database designed for realtime analytics." },
  { name: "Zen", description: "Zen – Simplicity, clarity, elegance—our AI engineering manifesto guiding every decision we make." }
];

const ZenOfHanzo = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Cherry blossom animation */}
      <CherryBlossom count={30} />
      
      {/* Hero section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TunnelContainer>
            <VanishingPoint />
          </TunnelContainer>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              The Hanzo Philosophy
            </motion.span>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The Zen of Hanzo
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Simplicity, clarity, elegance — our engineering manifesto guiding every decision we make.
              We believe in crafting tools that are powerful yet intuitive, complex yet accessible.
            </motion.p>
          </div>
        </div>
        
        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <JapaneseWave color="#9b87f5" height={40} delay={0} />
          <JapaneseWave color="#6E59A5" height={30} delay={0.5} className="-mt-10" />
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left column: Principles */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Principles</h2>
                <ZenPrinciples />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h2>
                <div className="space-y-10">
                  <ProductSection 
                    title="Hanzo AI Cloud" 
                    subtitle="A comprehensive suite of integrated AI-native cloud services."
                    products={cloudProducts}
                    bgClass="bg-gradient-to-br from-purple-900/20 to-indigo-900/20"
                  />
                  
                  <ProductSection 
                    title="Hanzo DX Platform" 
                    subtitle="Open source, self-hostable developer experience platform."
                    products={dxProducts}
                    bgClass="bg-gradient-to-br from-indigo-900/20 to-purple-900/20"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Right column: Timeline */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
                <ZenTimeline />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Closing section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="japanese-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5 L55 30 L30 55 L5 30 z" fill="none" stroke="#9b87f5" strokeWidth="1" />
              <circle cx="30" cy="30" r="20" fill="none" stroke="#9b87f5" strokeWidth="1" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="#9b87f5" strokeWidth="1" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#japanese-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Journey
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From our beginnings in 2013 to where we stand today in 2025, 
              we've remained committed to our core values. The journey continues,
              and we invite you to be part of it.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/platform" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all"
              >
                Explore Our Platform
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ZenOfHanzo;
