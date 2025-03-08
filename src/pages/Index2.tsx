
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const getGradientPosition = (element: HTMLElement) => {
    if (!containerRef.current) return "0% 0%";
    
    const rect = element.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const elementCenterX = rect.left + rect.width / 2 - containerRect.left;
    const elementCenterY = rect.top + rect.height / 2 - containerRect.top;
    
    const deltaX = mousePosition.x - elementCenterX;
    const deltaY = mousePosition.y - elementCenterY;
    
    // Calculate position as percentage
    const posX = 50 + (deltaX / rect.width) * 50;
    const posY = 50 + (deltaY / rect.height) * 50;
    
    return `${posX}% ${posY}%`;
  };

  const applyGradientEffect = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.backgroundPosition = getGradientPosition(element);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h1 
                className="text-gradient-steel text-4xl md:text-6xl font-bold mb-6"
                onMouseMove={applyGradientEffect}
              >
                Hanzo AI – Empowering the Next Era of Intelligent Applications
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Reimagine What's Possible with AI
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
                Hanzo is pioneering the future of software development and operational intelligence with an integrated suite of autonomous AI-powered tools. From startups to enterprises, we empower builders to accelerate innovation, scale effortlessly, and unlock unprecedented productivity through seamless AI integration.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* AI that Builds Alongside You */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-black to-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 
                    className="text-gradient-steel text-3xl md:text-4xl font-bold mb-6"
                    onMouseMove={applyGradientEffect}
                  >
                    AI that Builds Alongside You
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Hanzo's AI agents are more than mere tools—they're autonomous teammates embedded within your workflows. Our AI understands context, plans strategically, and executes with precision, transforming ideas into deployable reality faster than ever.
                  </p>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 mt-4"
                    onClick={() => window.open('/dev', '_self')}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-blue-900/50 z-0"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full bg-gray-800/40 rounded-lg relative z-10 p-6"
                >
                  {/* Placeholder for an illustration or animated element */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-purple-600/30 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <p className="text-lg font-medium">Autonomous AI Teammates</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Comprehensive AI Platform */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-gradient-steel text-3xl md:text-4xl font-bold mb-6"
                onMouseMove={applyGradientEffect}
              >
                The Comprehensive AI Platform
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our integrated suite of tools empowers every stage of your development workflow
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hanzo Dev */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <h3 
                  className="text-gradient-steel text-2xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  Hanzo Dev – Your AI Software Engineer
                </h3>
                <p className="text-gray-300 mb-4">
                  Delegate entire tasks from issue creation to pull request completion. Hanzo Dev autonomously designs, codes, reviews, and optimizes software, radically accelerating your development lifecycle.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => window.open('/dev', '_self')}
                >
                  Explore Hanzo Dev
                </Button>
              </motion.div>
              
              {/* Hanzo Code */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <h3 
                  className="text-gradient-steel text-2xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  Hanzo Code – AI-Enhanced IDE Integration
                </h3>
                <p className="text-gray-300 mb-4">
                  Deep integration with your favorite editors (VS Code, Vim, Emacs). Seamlessly access frontier AI models right at your fingertips to enhance your coding experience and productivity.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => window.open('/platform#code', '_self')}
                >
                  Discover Hanzo Code
                </Button>
              </motion.div>
              
              {/* Hanzo Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <h3 
                  className="text-gradient-steel text-2xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  Hanzo Cloud – Sustainable, Scalable Compute
                </h3>
                <p className="text-gray-300 mb-4">
                  Harness the power of our distributed AI cloud, built for green energy efficiency. Scale instantly and cost-effectively, meeting the most demanding workloads with zero latency.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => window.open('/cloud', '_self')}
                >
                  Explore Hanzo Cloud
                </Button>
              </motion.div>
              
              {/* Hanzo Base */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <h3 
                  className="text-gradient-steel text-2xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  Hanzo Base – One-Line Backend
                </h3>
                <p className="text-gray-300 mb-4">
                  Launch full-stack applications with a single command. Real-time database, authentication, file storage, and serverless functions—all globally distributed and edge optimized.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => window.open('/cloud#base', '_self')}
                >
                  Learn About Hanzo Base
                </Button>
              </motion.div>
              
              {/* Hanzo Commerce */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <h3 
                  className="text-gradient-steel text-2xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  Hanzo Commerce – Next-Gen AI Commerce
                </h3>
                <p className="text-gray-300 mb-4">
                  Integrate intelligent e-commerce solutions effortlessly. From automated checkouts to dynamic pricing strategies powered by real-time analytics, sell smarter and scale faster.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => window.open('/cloud#commerce', '_self')}
                >
                  Explore Hanzo Commerce
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Built for the Future */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-gray-900/30 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-gradient-steel text-3xl md:text-4xl font-bold mb-6"
                onMouseMove={applyGradientEffect}
              >
                Built for the Future
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Hanzo is engineered for the AI-native future, where technology adapts, learns, and autonomously evolves. Our platform integrates advanced reasoning models, robust AI agent frameworks, and sustainable infrastructure to deliver unmatched reliability and innovation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI at Planetary Scale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
              >
                <h3 
                  className="text-gradient-steel text-xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  AI at Planetary Scale
                </h3>
                <p className="text-gray-400">
                  Globally distributed infrastructure ensures your applications are fast, responsive, and resilient. Powered by a 100% renewable energy network, Hanzo supports your global ambitions sustainably.
                </p>
              </motion.div>
              
              {/* Open, Secure, Autonomous */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
              >
                <h3 
                  className="text-gradient-steel text-xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  Open, Secure, Autonomous
                </h3>
                <p className="text-gray-400">
                  With Hanzo, retain complete control over your data and models. Fully open-source options enable transparency, trust, and total flexibility. Built-in compliance and security frameworks align seamlessly with industry standards, including GDPR, SOC2, and HIPAA.
                </p>
              </motion.div>
              
              {/* Trusted by Industry Leaders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
              >
                <h3 
                  className="text-gradient-steel text-xl font-bold mb-4"
                  onMouseMove={applyGradientEffect}
                >
                  Trusted by Industry Leaders
                </h3>
                <p className="text-gray-400">
                  Leading enterprises and visionary startups—including Damon, Triller, Unikrn, and Zoo—trust Hanzo to bring innovative products to market at unprecedented speed and scale.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-gradient-steel text-3xl md:text-4xl font-bold mb-6"
                onMouseMove={applyGradientEffect}
              >
                Shape the Future with Hanzo
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join us in building a smarter, more autonomous future. Whether you're a developer, entrepreneur, or enterprise visionary, Hanzo empowers you to innovate fearlessly, deploy instantly, and scale infinitely.
              </p>
              <div className="mb-10">
                <p className="text-xl font-medium text-white mb-8">
                  Experience the Future, Today
                </p>
                <p className="text-gray-300 mb-10">
                  Start building with Hanzo, and watch your ideas come to life faster, smarter, and better than ever before.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <a href="https://dashboard.hanzo.cloud">Get Started Now</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style>
        {`
        .text-gradient-steel {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          transition: background-position 0.3s ease;
        }
        `}
      </style>
    </div>
  );
};

export default Index2;
