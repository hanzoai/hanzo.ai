
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { ArrowRight, Zap, Braces, Bot, Activity, BarChart, MessageSquare, Database } from "lucide-react";
import { Link } from "react-router-dom";

const AI = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-center"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
                AI @ Hanzo
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empowering the Next Generation of Intelligent Applications
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Hanzo is the unified, open, transparent AI platform powering visionary teams, from startups to global enterprises. Build seamlessly with AI, at planetary scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Unified AI Platform */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unified AI Platform</h2>
              <p className="text-xl text-gray-300">
                Hanzo offers a fully integrated AI stack with unmatched flexibility:
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Customizable",
                  description: "Pre-trained or fully fine-tuned models tailored precisely to your use case."
                },
                {
                  title: "Private",
                  description: "Deploy on-premise, cloud, edge, or hybrid."
                },
                {
                  title: "Transparent",
                  description: "Fully open source, auditable, and accountable at every step."
                },
                {
                  title: "Trustworthy",
                  description: "Human-centered and ethically developed AI."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/30 p-6 rounded-xl border border-gray-800"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black relative">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Hanzo AI Features</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Braces className="h-7 w-7 text-purple-400" />,
                  title: "Open Routing",
                  description: "Access all major frontier and open-source models with a single, unified API."
                },
                {
                  icon: <Activity className="h-7 w-7 text-blue-400" />,
                  title: "Observability & Analytics",
                  description: "Gain real-time insight into AI performance and user interactions."
                },
                {
                  icon: <MessageSquare className="h-7 w-7 text-indigo-400" />,
                  title: "Prompt Management",
                  description: "Collaboratively manage, version, and deploy prompts seamlessly."
                },
                {
                  icon: <BarChart className="h-7 w-7 text-pink-400" />,
                  title: "Predictive Analytics",
                  description: "Predict user behavior, forecast demand, and optimize business decisions."
                },
                {
                  icon: <Zap className="h-7 w-7 text-amber-400" />,
                  title: "Realtime Monitoring & Alerts",
                  description: "AI-powered anomaly detection and detailed system tracing."
                },
                {
                  icon: <Bot className="h-7 w-7 text-green-400" />,
                  title: "Evaluation & Feedback",
                  description: "Continuously measure and improve your AI systems."
                },
                {
                  icon: <Database className="h-7 w-7 text-cyan-400" />,
                  title: "Datasets & Metrics",
                  description: "Derive production-ready datasets automatically and track key metrics."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <div className="bg-gray-800/60 p-3 rounded-lg w-fit mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Teams Choose Hanzo */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Visionary Teams Choose Hanzo</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "AI-Native",
                  description: "Engineered specifically for complex AI workflows."
                },
                {
                  title: "Autonomous",
                  description: "Fully autonomous agents and intelligent workflows."
                },
                {
                  title: "Scalable",
                  description: "Instant global scaling with edge-optimized infrastructure."
                },
                {
                  title: "Sustainable",
                  description: "Carbon-neutral operations and energy-efficient compute."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/30 p-6 rounded-xl border border-gray-800"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-medium text-gray-400">Trusted by Leading Innovators</h2>
            </motion.div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-4">
              {["Damon", "Triller", "Zoo", "Skully", "Bellabeat", "Lifemed AI"].map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent"
                >
                  {client}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="inline-block p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl max-w-3xl mx-auto">
                <blockquote className="text-xl italic text-gray-300">
                  "Hanzo accelerated our innovation beyond what we thought possible, helping us launch groundbreaking AI applications at scale."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Join the Revolution */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the AI Revolution</h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience how easy and powerful AI can be when integrated end-to-end. Hanzo unifies your AI strategy, development, deployment, and analytics into a single, elegant solution.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/platform" className="flex items-center">
                  Explore the Hanzo Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Open Source */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center mb-12"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Hanzo Open Source Commitment</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-purple-400 font-bold">•</div>
                    <div>
                      <p className="text-lg font-semibold text-white">Open-source</p>
                      <p className="text-gray-400">Community-powered and transparent.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-purple-400 font-bold">•</div>
                    <div>
                      <p className="text-lg font-semibold text-white">Self-hostable</p>
                      <p className="text-gray-400">Run Hanzo anywhere, without vendor lock-in.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-purple-400 font-bold">•</div>
                    <div>
                      <p className="text-lg font-semibold text-white">Active community</p>
                      <p className="text-gray-400">Thousands of contributors and millions of installs.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-gray-800">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-around items-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">17M+</div>
                      <div className="text-gray-400">Downloads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">25K+</div>
                      <div className="text-gray-400">GitHub stars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">280+</div>
                      <div className="text-gray-400">Contributors</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Unified Intelligence Platform */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unified Intelligence Platform</h2>
              <p className="text-xl text-gray-300">
                Hanzo seamlessly integrates analytics, observability, model serving, deployment, and operational intelligence—everything you need to build intelligent applications confidently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Start building smarter today.</h2>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/signup">Get Started with Hanzo</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Copyright */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-400">Hanzo © 2025</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              {[
                { name: "About", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Docs", path: "/docs" },
                { name: "Privacy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" }
              ].map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AI;
