
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, Terminal, Code, Braces, Server, Blocks, Globe, Network, Activity, Zap, RefreshCw, Workflow, GitBranch, Cpu } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";

const DXPlatform = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState<string | null>(null);

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

  // Platform Mockup Component
  const PlatformMockup = () => (
    <div className="relative w-full h-72 rounded-xl overflow-hidden border border-gray-800 shadow-xl mb-8">
      <div className="absolute inset-0 bg-gray-900 p-3">
        <div className="h-8 bg-gray-800/50 rounded-t-lg flex items-center px-4 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <div className="text-xs text-gray-400 ml-2">Hanzo Developer Platform</div>
        </div>
        
        <div className="grid grid-cols-12 gap-2 h-[calc(100%-2rem)]">
          <div className="col-span-3 bg-gray-800/30 rounded-l p-2">
            <div className="text-xs text-purple-400 mb-3">Projects</div>
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={`flex items-center mb-2 p-1.5 rounded text-xs transition-colors ${i === 0 ? 'bg-purple-900/40 text-purple-200' : 'text-gray-400 hover:bg-gray-800/40'}`}
              >
                <Code className="h-3 w-3 mr-2" />
                project-{i + 1}
              </div>
            ))}
            
            <div className="mt-4 text-xs text-purple-400 mb-3">Templates</div>
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="flex items-center mb-2 p-1.5 rounded text-xs text-gray-400 hover:bg-gray-800/40 transition-colors"
              >
                <Blocks className="h-3 w-3 mr-2" />
                template-{i + 1}
              </div>
            ))}
          </div>
          
          <div className="col-span-9 bg-gray-800/30 rounded-r p-2 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-purple-400">Developer Dashboard</div>
              <div className="flex space-x-2">
                <div className="px-2 py-0.5 bg-purple-900/40 rounded text-purple-200 text-xs flex items-center">
                  <Terminal className="h-3 w-3 mr-1" />
                  Console
                </div>
                <div className="px-2 py-0.5 bg-gray-800/80 rounded text-gray-400 text-xs flex items-center">
                  <Activity className="h-3 w-3 mr-1" />
                  Metrics
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-gray-800/80 p-2 rounded">
                <div className="text-xs text-gray-400 mb-1">AI Models</div>
                <div className="h-4 w-3/4 bg-gray-700/50 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-700/50 rounded mt-1"></div>
              </div>
              <div className="bg-gray-800/80 p-2 rounded">
                <div className="text-xs text-gray-400 mb-1">API Keys</div>
                <div className="h-4 w-3/4 bg-gray-700/50 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-700/50 rounded mt-1"></div>
              </div>
            </div>
            
            <div className="bg-gray-800/80 p-2 rounded">
              <div className="text-xs text-gray-400 mb-1">Development Activity</div>
              <div className="grid grid-cols-7 gap-1 h-16">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex flex-col justify-end">
                    {[...Array(7)].map((_, j) => {
                      const opacity = Math.random();
                      return opacity > 0.5 ? (
                        <div 
                          key={j} 
                          className="w-full h-2 mb-1 rounded-sm" 
                          style={{ 
                            backgroundColor: `rgba(139, 92, 246, ${opacity})`,
                          }}
                        ></div>
                      ) : null;
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DxPlatformGraphic = () => {
    return (
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-black/40 mb-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="relative h-24 w-24 rounded-xl bg-gray-900/70 border border-purple-500/30 flex items-center justify-center z-30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Workflow className="h-10 w-10 text-purple-400" />
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{ 
                  boxShadow: ["0 0 0 0px rgba(168, 85, 247, 0.2)", "0 0 0 15px rgba(168, 85, 247, 0)"],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </motion.div>
            
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              const distance = 120;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              const icons = [
                <Bot key={0} className="h-6 w-6 text-purple-400" />,
                <Code key={1} className="h-6 w-6 text-purple-400" />,
                <Terminal key={2} className="h-6 w-6 text-purple-400" />,
                <Server key={3} className="h-6 w-6 text-purple-400" />,
                <GitBranch key={4} className="h-6 w-6 text-purple-400" />,
                <Globe key={5} className="h-6 w-6 text-purple-400" />,
                <Zap key={6} className="h-6 w-6 text-purple-400" />,
                <Activity key={7} className="h-6 w-6 text-purple-400" />
              ];
              
              return (
                <motion.div 
                  key={i}
                  className="absolute h-14 w-14 rounded-lg bg-gray-900/70 border border-gray-700 flex items-center justify-center"
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
                    marginLeft: -28,
                    marginTop: -28
                  }}
                >
                  {icons[i]}
                </motion.div>
              );
            })}
            
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              
              return (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-0.5 bg-gradient-to-r from-purple-500/50 to-purple-500/10"
                  style={{
                    width: 120,
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
                    duration: 0.6,
                    delay: 0.5 + (i * 0.05)
                  }}
                />
              );
            })}
            
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              const distance = 120;
              
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
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.2 + (i * 0.2),
                    repeat: Infinity,
                    repeatDelay: i * 0.5
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={containerRef} id="platform" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
                style={{
                  backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
                }}
              >
                Hanzo DX Platform
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-2xl">
                An integrated Developer Experience (DX) purpose-built to accelerate software development with intelligent automation
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
              <a href="/platform">Explore Platform</a>
            </Button>
          </motion.div>
        </div>

        {/* Platform Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <PlatformMockup />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Unified Toolchain</h3>
              <p className="text-gray-300 mb-6">
                A vertically integrated ecosystem of AI-powered tools designed to work seamlessly together, accelerating every stage of the development lifecycle.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Streamlined workflows from concept to deployment</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Continuous learning systems that improve over time</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Consistent APIs and interfaces across all tools</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DxPlatformGraphic />
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("hanzo-ai")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "hanzo-ai" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Braces className={`h-6 w-6 transition-colors duration-300 ${isHovered === "hanzo-ai" ? "text-purple-300" : "text-purple-400"}`} />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo AI
            </ChromeText>
            <p className="text-gray-300 mb-4">
              The intelligence engine behind every Hanzo product.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Frontier LLMs, vector search, and advanced reasoning models</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Autonomous workflows that continuously learn and improve</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Accessible via the intuitive @hanzo/ai SDK</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fine-tuning and custom model deployment capabilities</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("hanzo-bot")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "hanzo-bot" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Bot className={`h-6 w-6 transition-colors duration-300 ${isHovered === "hanzo-bot" ? "text-purple-300" : "text-purple-400"}`} />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Bot
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Easily build agentic workflows without code.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Drag-and-drop GUI for creating intelligent agents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Continuous learning agents with self-improvement loops</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Autonomous execution of complex tasks and workflows</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Extensive integration library for popular services</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("hanzo-code")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "hanzo-code" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Code className={`h-6 w-6 transition-colors duration-300 ${isHovered === "hanzo-code" ? "text-purple-300" : "text-purple-400"}`} />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Code
            </ChromeText>
            <p className="text-gray-300 mb-4">
              AI-enhanced IDE integration to amplify developer productivity.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Direct integration with VS Code, Vim, and Emacs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time, context-aware code completion and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Intelligent bug detection and proactive code optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Support for 80+ programming languages and frameworks</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("hanzo-dev")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "hanzo-dev" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Terminal className={`h-6 w-6 transition-colors duration-300 ${isHovered === "hanzo-dev" ? "text-purple-300" : "text-purple-400"}`} />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Dev
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Your autonomous AI-powered software engineer.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Task delegation from issue creation to PR completion</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Automatic coding, debugging, reviewing, and testing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Seamless integration into existing CI/CD pipelines</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Comprehensive documentation generation and maintenance</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("hanzo-deploy")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "hanzo-deploy" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Zap className={`h-6 w-6 transition-colors duration-300 ${isHovered === "hanzo-deploy" ? "text-purple-300" : "text-purple-400"}`} />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Deploy
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Frictionless deployment for any application stack.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>One-command deployment to any cloud or edge environment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Intelligent infrastructure optimization and scaling</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Zero-downtime updates and automatic rollback safety</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Environment-aware configuration and secret management</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("hanzo-monitor")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "hanzo-monitor" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Activity className={`h-6 w-6 transition-colors duration-300 ${isHovered === "hanzo-monitor" ? "text-purple-300" : "text-purple-400"}`} />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Monitor
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Intelligent monitoring and observability platform.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI-powered anomaly detection and root cause analysis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time performance metrics and system health dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Predictive alerts before issues impact end users</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Comprehensive tracing and logging capabilities</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DXPlatform;
