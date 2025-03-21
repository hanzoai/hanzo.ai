
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Code, Zap, Rocket, Server, Database, Terminal, Globe, Cpu, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ChromeText from "@/components/ui/chrome-text";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GridLines, BlueprintLine } from "@/components/ui/architectural-elements";

const Index5 = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.98, 0.9]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Helmet>
        <title>Hanzo AI - Cloud & DX Platform | Future of AI Development</title>
        <meta name="description" content="Hanzo AI Cloud & DX Platform - Build, deploy, and scale AI applications with unmatched speed and efficiency." />
      </Helmet>
      
      {/* 3D Grid Background with dynamic perspective based on mouse position */}
      <div className="fixed inset-0 -z-10">
        <div 
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          <GridLines spacing={60} opacity={0.1} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-40"></div>
        
        {/* Dynamic blueprint lines */}
        <BlueprintLine orientation="vertical" position="20%" color="rgba(147, 51, 234, 0.1)" />
        <BlueprintLine orientation="vertical" position="80%" color="rgba(147, 51, 234, 0.1)" />
        <BlueprintLine orientation="horizontal" position="25%" color="rgba(37, 99, 235, 0.1)" />
        <BlueprintLine orientation="horizontal" position="75%" color="rgba(37, 99, 235, 0.1)" />
      </div>
      
      <Navbar />
      
      <main>
        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
          <motion.div 
            className="max-w-6xl mx-auto text-center z-10 relative"
            style={{ opacity, scale }}
          >
            {/* Floating orbs in background */}
            <div className="absolute top-1/4 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 text-white text-sm font-medium border border-purple-500/20">
                The Future of AI Development
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ChromeText 
                as="h1" 
                className="text-5xl md:text-7xl font-bold mb-6"
                style={{
                  backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
                  backgroundSize: "200% 200%"
                }}
              >
                AI Cloud + DX Platform
              </ChromeText>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
                Build, deploy, and scale AI applications with unmatched speed and efficiency.
                From development to production, Hanzo provides everything you need.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-none"
                onClick={() => navigate('/signup')}
              >
                Start Building <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10"
                onClick={() => navigate('/pricing')}
              >
                View Pricing
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-24 sm:mt-32"
            >
              <div className="flex justify-center">
                <ArrowRight className="h-10 w-10 text-white/50 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Cloud Platform Section */}
        <section className="py-24 px-4 relative" id="ai-cloud">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium">
                  Infinitely Scalable
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
                  className="text-3xl md:text-5xl font-bold mb-6"
                >
                  AI Cloud Platform
                </ChromeText>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Global, infinitely scalable infrastructure specifically optimized for AI workloads
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                { icon: <Cloud className="h-6 w-6 text-blue-400" />, title: "Global Edge Network", description: "Deploy to 35+ regions with sub-50ms latency to 99% of users" },
                { icon: <Database className="h-6 w-6 text-blue-400" />, title: "Datastore", description: "Structured data storage with AI-friendly APIs and real-time sync" },
                { icon: <Brain className="h-6 w-6 text-blue-400" />, title: "AI Models", description: "Access to frontier models with seamless API integration" },
                { icon: <Globe className="h-6 w-6 text-blue-400" />, title: "Edge Functions", description: "Run code globally with ultra-low latency and zero cold starts" },
                { icon: <Server className="h-6 w-6 text-blue-400" />, title: "Vector Database", description: "High-performance vector search optimized for AI embeddings" },
                { icon: <Zap className="h-6 w-6 text-blue-400" />, title: "Real-time", description: "Bi-directional realtime subscriptions and streaming" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 flex justify-center"
            >
              <Button 
                className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/cloud')}
              >
                Explore AI Cloud <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Developer Experience Platform Section */}
        <section className="py-24 px-4 relative" id="dx-platform">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
                  Developer Experience
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
                  className="text-3xl md:text-5xl font-bold mb-6"
                >
                  DX Platform
                </ChromeText>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Build better, ship faster with AI-powered developer tools and frameworks
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                { icon: <Code className="h-6 w-6 text-purple-400" />, title: "Hanzo Code", description: "AI-powered code generation and intelligent autocomplete" },
                { icon: <Terminal className="h-6 w-6 text-purple-400" />, title: "Hanzo Dev", description: "AI engineering assistant for accelerated development" },
                { icon: <Cpu className="h-6 w-6 text-purple-400" />, title: "Hanzo App", description: "Low-code platform for building AI applications" },
                { icon: <Rocket className="h-6 w-6 text-purple-400" />, title: "Hanzo Bot", description: "Framework for building advanced AI agents and assistants" },
                { icon: <Server className="h-6 w-6 text-purple-400" />, title: "Operative", description: "AI agents that automate your development workflow" },
                { icon: <Zap className="h-6 w-6 text-purple-400" />, title: "Extension", description: "Browser and IDE plugins for seamless integration" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 flex justify-center"
            >
              <Button 
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700"
                onClick={() => navigate('/platform')}
              >
                Explore DX Platform <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Interactive Demo Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
                See it in Action
              </ChromeText>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From idea to production in minutes, not months
              </p>
            </motion.div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-white/10 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm text-gray-400">terminal@hanzo.cloud</div>
              </div>
              
              <motion.div 
                className="p-6 font-mono text-sm overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-green-400">$</span> <span className="text-blue-300">hanzo</span> <span className="text-purple-300">init</span> <span className="text-gray-400">my-ai-app</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-2"
                >
                  <span className="text-gray-400">Initializing new AI project...</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-2"
                >
                  <span className="text-gray-400">✓ Created project directory</span><br />
                  <span className="text-gray-400">✓ Initialized Git repository</span><br />
                  <span className="text-gray-400">✓ Set up project configuration</span><br />
                  <span className="text-gray-400">✓ Installed dependencies</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="mt-4"
                >
                  <span className="text-green-400">$</span> <span className="text-blue-300">hanzo</span> <span className="text-purple-300">deploy</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="mt-2"
                >
                  <span className="text-gray-400">Deploying to Hanzo Cloud...</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                  className="mt-2"
                >
                  <span className="text-gray-400">✓ Built application</span><br />
                  <span className="text-gray-400">✓ Uploaded assets</span><br />
                  <span className="text-gray-400">✓ Deployed functions</span><br />
                  <span className="text-gray-400">✓ Configured AI endpoints</span><br />
                  <span className="text-gray-400">✓ Deployment complete!</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 3.2 }}
                  className="mt-4"
                >
                  <span className="text-gray-400">Your app is live at:</span> <span className="text-blue-400 underline">https://my-ai-app.hanzo.cloud</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-30"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6 mx-auto text-center">
                Start Building Today
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Join thousands of developers building the future with Hanzo AI Cloud and DX Platform.
                Get started for free and scale as you grow.
              </p>
              
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-black px-10 py-7 rounded-lg text-xl font-medium shadow-lg hover:shadow-xl transition-all"
                onClick={() => navigate('/signup')}
              >
                Start Building for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index5;
