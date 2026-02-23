'use client'


import React from 'react';
import { motion } from "framer-motion";
import { Zap, Globe, Network, Server, Cloud, Code, Shield } from "lucide-react";
import { Button } from "@hanzo/ui";
import ChromeText from "@/components/ui/chrome-text";

const Edge = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-white/5 border border-white/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-white/70 text-sm font-medium">Ultra-Low Latency</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-white/10">
              Hanzo Edge
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Deploy globally in milliseconds with ultra-low latency edge computing infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white/10 hover:bg-white/10 text-[var(--white)] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 text-[var(--white)] hover:bg-white/10 px-8 py-6 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative bg-white/10 border border-white/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-white/20">
                <Globe className="h-10 w-10 text-white/70 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                <p className="text-center text-neutral-300">Deploy to 200+ locations worldwide in seconds</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-white/20">
                <Zap className="h-10 w-10 text-white/70 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ultra-Low Latency</h3>
                <p className="text-center text-neutral-300">Sub-50ms response times for 99% of global users</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-white/20">
                <Network className="h-10 w-10 text-white/70 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Built-in CDN</h3>
                <p className="text-center text-neutral-300">Integrated caching and content delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Key Features & Capabilities
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Powerful edge computing infrastructure for modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-xl p-6"
            >
              <Code className="h-10 w-10 text-white/70 mb-4" />
              <h3 className="text-xl font-bold mb-2">Edge Functions</h3>
              <p className="text-neutral-300">
                Run serverless functions at the edge with zero cold starts and automatic scaling.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-xl p-6"
            >
              <Cloud className="h-10 w-10 text-white/70 mb-4" />
              <h3 className="text-xl font-bold mb-2">Edge Caching</h3>
              <p className="text-neutral-300">
                Intelligent caching strategies with automatic invalidation and stale-while-revalidate.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-xl p-6"
            >
              <Server className="h-10 w-10 text-white/70 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI at the Edge</h3>
              <p className="text-neutral-300">
                Run AI inference at the edge with optimized runtimes for major ML frameworks.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-xl p-6"
            >
              <Globe className="h-10 w-10 text-white/70 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-neutral-300">
                Deploy to 200+ locations worldwide with automatic regional failover and load balancing.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-xl p-6"
            >
              <Network className="h-10 w-10 text-white/70 mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-time WebSockets</h3>
              <p className="text-neutral-300">
                Build real-time applications with globally distributed WebSocket infrastructure.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-xl p-6"
            >
              <Shield className="h-10 w-10 text-white/70 mb-4" />
              <h3 className="text-xl font-bold mb-2">Security & DDoS Protection</h3>
              <p className="text-neutral-300">
                Built-in security with firewall rules, DDoS protection, and bot mitigation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Common Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Hanzo Edge powers a wide range of modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Dynamic Web Applications</h3>
              <p className="text-neutral-300 mb-4">
                Build and deploy web applications that respond dynamically to user input and data changes.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>E-commerce platforms with personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Content sites with dynamic rendering based on user location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>SaaS applications with global user bases</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">API Gateways & Backends</h3>
              <p className="text-neutral-300 mb-4">
                Create scalable API gateways and backends that handle authentication, routing, and transformation.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>API proxies with rate limiting and caching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Microservices orchestration and routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Webhook receivers and event processors</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Real-time Applications</h3>
              <p className="text-neutral-300 mb-4">
                Build collaborative and real-time applications with WebSockets and server-sent events.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Collaborative document editing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Live chat and messaging applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Real-time dashboards and analytics</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI-powered Applications</h3>
              <p className="text-neutral-300 mb-4">
                Deploy AI models at the edge for fast inference and personalized experiences.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Content moderation and filtering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Recommendation engines with low latency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/70 mr-2">•</span>
                  <span>Image and video processing at the edge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Deploy Globally in Seconds</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Get started with Hanzo Edge today and experience ultra-low latency computing at the edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white/10 hover:bg-white/10 text-[var(--white)] px-8 py-6 text-lg">
                  Sign Up Free
                </Button>
                <Button variant="outline" className="border-white/20 text-[var(--white)] hover:bg-white/10 px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Edge;
