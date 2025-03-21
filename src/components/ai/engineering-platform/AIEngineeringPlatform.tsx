
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Activity, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import PlatformDashboard from "./PlatformDashboard";
import CloudInfrastructure from "./CloudInfrastructure";
import FeatureCard from "./FeatureCard";

const AIEngineeringPlatform = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px]"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      
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
                Unified AI Engineering
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
                }}
              >
                AI Engineering Platform
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-2xl">
                Build, deploy, and monitor AI applications with unmatched speed and intelligence
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
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500">
              <a href="/platform">Explore Platform</a>
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-xl overflow-hidden"
          >
            <PlatformDashboard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
              <div className="mb-4">
                <Brain className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Unified AI Management</h3>
                <p className="text-gray-400">
                  Access and manage all major AI models through a single, intuitive interface with standardized APIs.
                </p>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-purple-400 mr-2">•</div>
                  <span className="text-gray-300 text-sm">Centralized model registry and versioning</span>
                </li>
                <li className="flex items-start">
                  <div className="text-purple-400 mr-2">•</div>
                  <span className="text-gray-300 text-sm">Transparent model routing and fallbacks</span>
                </li>
                <li className="flex items-start">
                  <div className="text-purple-400 mr-2">•</div>
                  <span className="text-gray-300 text-sm">Real-time cost optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
              <div className="mb-4">
                <Activity className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Complete Observability</h3>
                <p className="text-gray-400">
                  Gain deep insights into AI performance, usage patterns, and system health with comprehensive monitoring.
                </p>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-purple-400 mr-2">•</div>
                  <span className="text-gray-300 text-sm">End-to-end request tracing</span>
                </li>
                <li className="flex items-start">
                  <div className="text-purple-400 mr-2">•</div>
                  <span className="text-gray-300 text-sm">AI-powered anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <div className="text-purple-400 mr-2">•</div>
                  <span className="text-gray-300 text-sm">User interaction analytics</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <FeatureCard 
            icon={<BarChart className="h-6 w-6 text-purple-400 mb-3" />}
            title="Predictive Analytics"
            description="AI-driven insights and forecasting to anticipate user needs and system requirements."
          />
          
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-400 mb-3"><path d="M9 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1"></path><path d="M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0"></path><path d="M11 8h2"></path><path d="M8.5 12.5a6.5 6.5 0 0 1 7 0"></path><path d="M15.7 10a2.1 2.1 0 0 0-1 2.1"></path><path d="M8.3 10a2.1 2.1 0 0 1 1 2.1"></path></svg>}
            title="Seamless Deployment"
            description="One-click model deployment with automatic scaling and load balancing."
          />
          
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-400 mb-3"><path d="M4 4h12v5h-4l-3 3v-3H4z"></path><path d="M12 15h8v5h-5l-3 3v-3h-8v-9h2v4h6z"></path></svg>}
            title="Edge Optimization"
            description="Deploy AI workloads closer to users for reduced latency and improved performance."
          />
          
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-400 mb-3"><ellipse cx="12" cy="6" rx="8" ry="3"></ellipse><path d="M20 9v6"></path><path d="M4 9v6"></path><path d="M12 12v6"></path><ellipse cx="12" cy="18" rx="8" ry="3"></ellipse></svg>}
            title="Vector Database"
            description="Integrated vector storage for efficient retrieval augmented generation and semantic search."
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CloudInfrastructure />
        </motion.div>
      </div>
    </section>
  );
};

export default AIEngineeringPlatform;
