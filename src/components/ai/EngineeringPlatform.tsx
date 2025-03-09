
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Activity, 
  BarChart, 
  BrainCircuit, 
  BrainCog, 
  Server, 
  Database, 
  Network, 
  Cloud, 
  ServerCog, 
  Monitor,
  Zap,
  Terminal,
  ChartLine
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const AIEngineeringPlatform = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("models");

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

  // AI Models data
  const aiModels = [
    { id: "gpt4", name: "GPT-4o", type: "LLM", provider: "OpenAI", accuracy: 97, latency: 120 },
    { id: "claude3", name: "Claude 3", type: "LLM", provider: "Anthropic", accuracy: 96, latency: 140 },
    { id: "gemini", name: "Gemini", type: "LLM", provider: "Google", accuracy: 95, latency: 110 },
    { id: "llama3", name: "Llama 3", type: "LLM", provider: "Meta", accuracy: 94, latency: 90 },
    { id: "mixtral", name: "Mixtral", type: "LLM", provider: "Mistral", accuracy: 93, latency: 85 },
    { id: "stability", name: "Stable Diffusion", type: "Image", provider: "Stability AI", accuracy: 92, latency: 200 },
    { id: "cohere", name: "Cohere Command", type: "LLM", provider: "Cohere", accuracy: 91, latency: 95 },
  ];

  // Animated Platform Dashboard Component
  const PlatformDashboard = () => (
    <div className="relative w-full bg-gray-900/70 rounded-xl overflow-hidden border border-gray-800 shadow-xl">
      {/* Dashboard header */}
      <div className="bg-gray-800/90 p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400">Hanzo AI Engineering Platform</div>
        </div>
        <div className="flex space-x-3">
          <button className={`px-3 py-1 rounded-md text-xs ${activeSection === "models" ? "bg-purple-900/60 text-purple-200" : "bg-gray-800 text-gray-400"}`} onClick={() => setActiveSection("models")}>
            AI Models
          </button>
          <button className={`px-3 py-1 rounded-md text-xs ${activeSection === "observability" ? "bg-purple-900/60 text-purple-200" : "bg-gray-800 text-gray-400"}`} onClick={() => setActiveSection("observability")}>
            Observability
          </button>
          <button className={`px-3 py-1 rounded-md text-xs ${activeSection === "analytics" ? "bg-purple-900/60 text-purple-200" : "bg-gray-800 text-gray-400"}`} onClick={() => setActiveSection("analytics")}>
            Analytics
          </button>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 h-[340px] overflow-auto">
        {activeSection === "models" && <AIModelsView />}
        {activeSection === "observability" && <ObservabilityView />}
        {activeSection === "analytics" && <AnalyticsView />}
      </div>
    </div>
  );

  // AI Models View
  const AIModelsView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-white">AI Model Registry</h3>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-purple-600/40 rounded-md text-xs text-purple-200 flex items-center">
            <BrainCog className="w-3 h-3 mr-1" />
            Deploy Model
          </button>
          <button className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400 flex items-center">
            <Terminal className="w-3 h-3 mr-1" />
            Import
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {aiModels.map((model) => (
          <motion.div
            key={model.id}
            className={`p-3 rounded-lg border ${selectedModel === model.id ? "bg-purple-900/20 border-purple-600/40" : "bg-gray-800/40 border-gray-700/40"} hover:bg-gray-800/60 transition-colors cursor-pointer`}
            onClick={() => setSelectedModel(model.id)}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center">
                  <BrainCircuit className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="font-medium text-white text-sm">{model.name}</span>
                  <span className="ml-2 px-1.5 py-0.5 bg-gray-700/60 rounded text-xs text-gray-300">{model.type}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Provider: {model.provider}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-xs text-gray-400">Accuracy</div>
                  <div className="text-sm font-medium text-green-400">{model.accuracy}%</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Latency</div>
                  <div className="text-sm font-medium text-blue-400">{model.latency}ms</div>
                </div>
              </div>
            </div>

            {selectedModel === model.id && (
              <motion.div 
                className="mt-3 pt-3 border-t border-gray-700/40 grid grid-cols-3 gap-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <button className="px-2 py-1.5 bg-gray-700/40 rounded text-xs text-gray-300 flex items-center justify-center">
                  <Activity className="w-3 h-3 mr-1.5" />
                  Benchmark
                </button>
                <button className="px-2 py-1.5 bg-gray-700/40 rounded text-xs text-gray-300 flex items-center justify-center">
                  <ServerCog className="w-3 h-3 mr-1.5" />
                  Fine-tune
                </button>
                <button className="px-2 py-1.5 bg-purple-600/30 rounded text-xs text-purple-200 flex items-center justify-center">
                  <Zap className="w-3 h-3 mr-1.5" />
                  Deploy
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  // Observability View
  const ObservabilityView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-white">AI Observability Dashboard</h3>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-purple-600/40 rounded-md text-xs text-purple-200 flex items-center">
            <Activity className="w-3 h-3 mr-1" />
            Real-time
          </button>
          <button className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400 flex items-center">
            <Terminal className="w-3 h-3 mr-1" />
            Logs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Requests</div>
          <div className="text-lg font-medium text-white">3,452</div>
          <div className="mt-1 text-xs text-green-400 flex items-center">
            <ChartLine className="w-3 h-3 mr-1" />
            +18% from yesterday
          </div>
        </div>
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Avg. Latency</div>
          <div className="text-lg font-medium text-white">94ms</div>
          <div className="mt-1 text-xs text-green-400 flex items-center">
            <ChartLine className="w-3 h-3 mr-1" />
            -12ms from yesterday
          </div>
        </div>
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Error Rate</div>
          <div className="text-lg font-medium text-white">0.4%</div>
          <div className="mt-1 text-xs text-green-400 flex items-center">
            <ChartLine className="w-3 h-3 mr-1" />
            -0.2% from yesterday
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3 mb-4">
        <div className="text-xs text-gray-400 mb-2">Response Time Trend</div>
        <div className="h-24 flex items-end space-x-1">
          {[35, 42, 38, 30, 45, 55, 47, 40, 48, 60, 53, 41, 48, 50, 58, 45, 43, 49, 55, 62].map((value, index) => (
            <motion.div
              key={index}
              className="bg-purple-500/70 rounded-t w-full"
              style={{ height: `${value}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>00:00</span>
          <span>12:00</span>
          <span>23:59</span>
        </div>
      </div>

      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
        <div className="text-xs text-gray-400 mb-2">Recent Traces</div>
        <div className="space-y-2">
          {[
            { id: "t1", model: "GPT-4o", time: "2m ago", status: "success", duration: "92ms" },
            { id: "t2", model: "Llama 3", time: "5m ago", status: "success", duration: "84ms" },
            { id: "t3", model: "Claude 3", time: "12m ago", status: "error", duration: "176ms" },
            { id: "t4", model: "Mixtral", time: "18m ago", status: "success", duration: "78ms" },
          ].map((trace) => (
            <div key={trace.id} className="flex items-center justify-between text-xs p-1.5 rounded hover:bg-gray-700/30">
              <div className="flex items-center">
                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${trace.status === "success" ? "bg-green-500" : "bg-red-500"}`}></div>
                <span className="text-gray-300">{trace.model}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">{trace.time}</span>
                <span className={`${trace.status === "success" ? "text-blue-400" : "text-red-400"}`}>{trace.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Analytics View
  const AnalyticsView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-white">AI Analytics</h3>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-purple-600/40 rounded-md text-xs text-purple-200 flex items-center">
            <BarChart className="w-3 h-3 mr-1" />
            Reports
          </button>
          <button className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400 flex items-center">
            <Terminal className="w-3 h-3 mr-1" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Model Usage</div>
          <div className="relative h-32 mt-2">
            <div className="absolute inset-0">
              <div className="h-full w-full flex">
                <motion.div 
                  className="h-full bg-purple-600/70 rounded-l"
                  initial={{ width: 0 }}
                  animate={{ width: "42%" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
                <motion.div 
                  className="h-full bg-blue-500/70"
                  initial={{ width: 0 }}
                  animate={{ width: "28%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div 
                  className="h-full bg-indigo-500/70"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.div 
                  className="h-full bg-pink-500/70 rounded-r"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
              <span className="text-xs text-gray-300">GPT-4o (42%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-xs text-gray-300">Claude 3 (28%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span className="text-xs text-gray-300">Llama 3 (15%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
              <span className="text-xs text-gray-300">Others (15%)</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Cost Analysis</div>
          <div className="h-32 relative">
            <div className="absolute bottom-0 w-full flex items-end space-x-1">
              {[35, 42, 38, 52, 45, 55, 47, 62, 48, 60, 53, 58].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-purple-600/90 to-purple-400/50 rounded-t w-full"
                  style={{ height: `${value}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
          <div className="mt-1 text-xs text-gray-300">
            $1,245 spent this month - <span className="text-purple-400">14% under budget</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
        <div className="text-xs text-gray-400 mb-2">Performance Metrics</div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">Response Quality</span>
              <span className="text-gray-300">89%</span>
            </div>
            <div className="w-full bg-gray-700/40 rounded-full h-1.5">
              <motion.div 
                className="bg-green-500 h-1.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "89%" }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">User Satisfaction</span>
              <span className="text-gray-300">94%</span>
            </div>
            <div className="w-full bg-gray-700/40 rounded-full h-1.5">
              <motion.div 
                className="bg-green-500 h-1.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">System Reliability</span>
              <span className="text-gray-300">99.8%</span>
            </div>
            <div className="w-full bg-gray-700/40 rounded-full h-1.5">
              <motion.div 
                className="bg-green-500 h-1.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "99.8%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Cloud infrastructure graphic
  const CloudInfrastructure = () => (
    <div className="relative h-64 w-full rounded-xl bg-gradient-to-br from-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.07) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative h-20 w-20 rounded-xl bg-gray-900/70 border border-purple-500/30 flex items-center justify-center z-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BrainCog className="h-8 w-8 text-purple-400" />
        </motion.div>
        
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const distance = 80;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const icons = [
            <Cloud key={0} className="h-5 w-5 text-purple-400" />,
            <Server key={1} className="h-5 w-5 text-purple-400" />,
            <Database key={2} className="h-5 w-5 text-purple-400" />,
            <Monitor key={3} className="h-5 w-5 text-purple-400" />,
            <Network key={4} className="h-5 w-5 text-purple-400" />,
            <Activity key={5} className="h-5 w-5 text-purple-400" />
          ];
          
          return (
            <motion.div 
              key={i}
              className="absolute h-12 w-12 rounded-lg bg-gray-900/70 border border-gray-700 flex items-center justify-center"
              initial={{ 
                x: 0,
                y: 0,
                opacity: 0
              }}
              animate={{ 
                x,
                y,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.6 + (i * 0.1),
                ease: "easeOut"
              }}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -24,
                marginTop: -24
              }}
            >
              {icons[i]}
            </motion.div>
          );
        })}
        
        {/* Connection lines */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-purple-500/60 to-purple-500/10"
              style={{
                width: 80,
                transformOrigin: "left center",
                left: "50%",
                top: "50%",
                transform: `translateY(-0.5px) rotate(${angle}rad)`,
              }}
              initial={{
                scaleX: 0,
                opacity: 0
              }}
              animate={{
                scaleX: 1,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.5 + (i * 0.05)
              }}
            />
          );
        })}
        
        {/* Data particles */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const distance = 80;
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute h-1.5 w-1.5 rounded-full bg-purple-400"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos(angle) * distance],
                y: [0, Math.sin(angle) * distance],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 2.5,
                delay: 1.2 + (i * 0.3),
                repeat: Infinity,
                repeatDelay: i * 0.5
              }}
            />
          );
        })}
      </div>
    </div>
  );

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
          <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-5">
            <BarChart className="h-6 w-6 text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Predictive Analytics</h3>
            <p className="text-gray-400 text-sm">
              AI-driven insights and forecasting to anticipate user needs and system requirements.
            </p>
          </div>
          
          <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-5">
            <ServerCog className="h-6 w-6 text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Seamless Deployment</h3>
            <p className="text-gray-400 text-sm">
              One-click model deployment with automatic scaling and load balancing.
            </p>
          </div>
          
          <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-5">
            <Network className="h-6 w-6 text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Edge Optimization</h3>
            <p className="text-gray-400 text-sm">
              Deploy AI workloads closer to users for reduced latency and improved performance.
            </p>
          </div>
          
          <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-5">
            <Database className="h-6 w-6 text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Vector Database</h3>
            <p className="text-gray-400 text-sm">
              Integrated vector storage for efficient retrieval augmented generation and semantic search.
            </p>
          </div>
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
