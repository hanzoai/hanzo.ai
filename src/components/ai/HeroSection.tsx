
import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Bot, Braces, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              The Future of AI Engineering
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ChromeText as="h1" className="text-4xl md:text-6xl font-bold mb-6" gradient="from-purple-400 to-pink-400">
              Hanzo AI Engineering Platform
            </ChromeText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-neutral-300 mb-8">
              Build, deploy, and scale AI applications with unprecedented speed and reliability. 
              A complete toolkit for AI engineers to deliver production-ready AI systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="text-[var(--white)]">
              Read Documentation
            </Button>
          </motion.div>
        </div>

        {/* AI Platform Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
        >
          <div className="bg-[var(--black)]/80 p-4">
            {/* Header bar */}
            <div className="flex items-center h-10 mb-4 px-4 bg-gray-900 rounded-t-lg">
              <div className="flex space-x-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-neutral-400 text-sm">Hanzo AI Platform</div>
              <div className="flex space-x-3 items-center">
                <div className="w-4 h-4 rounded-full bg-purple-500/30 flex items-center justify-center">
                  <Brain className="w-2.5 h-2.5 text-purple-300" />
                </div>
                <div className="text-purple-300 text-xs">Online</div>
              </div>
            </div>

            {/* Main content area */}
            <div className="grid grid-cols-12 gap-4 h-[460px]">
              {/* Left sidebar */}
              <div className="col-span-3 bg-gray-900/50 rounded-lg p-4 flex flex-col">
                <h3 className="text-purple-300 text-sm font-medium mb-4">AI Models</h3>
                <div className="space-y-3 mb-6">
                  {["GPT-4o", "Claude 3 Opus", "Mistral Large", "Llama 3", "Gemini Pro"].map((model, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-2 rounded-lg text-sm ${index === 0 ? 'bg-purple-900/30 text-[var(--white)]' : 'text-neutral-400 hover:bg-gray-800/60'}`}
                    >
                      <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-400' : 'bg-gray-500'} mr-2`}></div>
                      {model}
                    </div>
                  ))}
                </div>

                <h3 className="text-purple-300 text-sm font-medium mb-4">Custom Models</h3>
                <div className="space-y-3">
                  {["hanzo-copilot-v2", "support-agent", "content-writer"].map((model, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-2 rounded-lg text-sm text-neutral-400 hover:bg-gray-800/60"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                      {model}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main panel */}
              <div className="col-span-6 bg-gray-900/50 rounded-lg p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[var(--white)] font-medium">AI Observability Dashboard</h2>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-purple-900/40 rounded-md text-purple-300 text-xs">Live</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-md text-neutral-400 text-xs">Last 24h</span>
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-800/80 p-3 rounded-lg">
                    <div className="text-neutral-400 text-xs mb-1">Requests</div>
                    <div className="text-[var(--white)] text-xl font-bold">1.2M</div>
                    <div className="text-green-400 text-xs flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      12.5%
                    </div>
                  </div>
                  <div className="bg-gray-800/80 p-3 rounded-lg">
                    <div className="text-neutral-400 text-xs mb-1">Avg. Latency</div>
                    <div className="text-[var(--white)] text-xl font-bold">246ms</div>
                    <div className="text-green-400 text-xs flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      8.3%
                    </div>
                  </div>
                  <div className="bg-gray-800/80 p-3 rounded-lg">
                    <div className="text-neutral-400 text-xs mb-1">Success Rate</div>
                    <div className="text-[var(--white)] text-xl font-bold">99.8%</div>
                    <div className="text-green-400 text-xs flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      0.3%
                    </div>
                  </div>
                </div>

                {/* Chart area */}
                <div className="flex-1 bg-gray-800/50 rounded-lg p-3 mb-4 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-[var(--white)] text-sm">Request Volume</div>
                    <div className="flex space-x-2">
                      <div className="px-2 py-0.5 text-xs bg-purple-900/40 text-purple-300 rounded">GPT-4o</div>
                      <div className="px-2 py-0.5 text-xs bg-blue-900/40 text-blue-300 rounded">Claude 3</div>
                      <div className="px-2 py-0.5 text-xs bg-gray-800 text-neutral-400 rounded">Custom</div>
                    </div>
                  </div>
                  
                  {/* Simulated line chart */}
                  <div className="h-32 flex items-end space-x-1">
                    {[...Array(30)].map((_, i) => {
                      const heightPercent = 30 + Math.random() * 70; // Random height between 30-100%
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                          <div 
                            className="w-full bg-gradient-to-t from-purple-600/70 to-purple-500/40 rounded-sm" 
                            style={{ height: `${heightPercent}%` }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Time labels */}
                  <div className="flex justify-between mt-2 text-neutral-500 text-xs">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>Now</span>
                  </div>
                </div>

                {/* Recent requests */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-[var(--white)] text-sm mb-2">Recent Requests</div>
                  <div className="space-y-2 max-h-24 overflow-y-auto">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center justify-between py-1 text-xs border-b border-gray-700/50">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-neutral-300">request-{Math.random().toString(36).substring(2, 8)}</span>
                        </div>
                        <div className="text-neutral-400">GPT-4o</div>
                        <div className="text-neutral-400">216ms</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="col-span-3 space-y-4">
                {/* Model performance */}
                <div className="bg-gray-900/50 rounded-lg p-4 h-1/2">
                  <h3 className="text-purple-300 text-sm font-medium mb-4">Performance</h3>
                  <div className="space-y-3">
                    {[
                      { name: "GPT-4o", perf: 96 },
                      { name: "Claude 3 Opus", perf: 94 },
                      { name: "Custom-Agent", perf: 92 },
                    ].map((model, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-300">{model.name}</span>
                          <span className="text-neutral-400">{model.perf}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" 
                            style={{ width: `${model.perf}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* API Usage */}
                <div className="bg-gray-900/50 rounded-lg p-4 h-1/2">
                  <h3 className="text-purple-300 text-sm font-medium mb-4">API Status</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Model API", status: "Operational" },
                      { name: "Reasoning API", status: "Operational" },
                      { name: "Vector API", status: "Degraded" },
                      { name: "Vision API", status: "Operational" },
                    ].map((api, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-neutral-300">{api.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          api.status === "Operational" ? "bg-green-900/30 text-green-400" : 
                          "bg-yellow-900/30 text-yellow-400"
                        }`}>
                          {api.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Optimized Inference</h3>
            <p className="text-neutral-400">
              High-performance inference engine with automatic batching and model distillation for production workloads.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Advanced Orchestration</h3>
            <p className="text-neutral-400">
              Intelligent model routing, prompt chaining, and multi-model orchestration for complex AI workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Complete Observability</h3>
            <p className="text-neutral-400">
              Full visibility into AI system performance, including model metrics, latency tracking, and request logging.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
