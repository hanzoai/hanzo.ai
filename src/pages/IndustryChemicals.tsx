
import React from 'react';
import { motion } from "framer-motion";
import { Factory, Beaker, LineChart, Shield, Cog, Recycle, Microscope, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { Link } from "react-router-dom";

const IndustryChemicals = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar themeColor="violet" />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-violet-400 text-sm font-medium">Chemicals Industry</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
              AI-Driven Chemical Innovation
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Accelerate R&D, optimize production, and ensure safety with AI-powered solutions for the chemical industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-600 hover:bg-violet-700 text-[var(--white)] px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-violet-500/30 text-[var(--white)] hover:bg-violet-900/20 px-8 py-6 text-lg">
                <Link to="/pricing">Schedule Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-violet-900/20 border border-violet-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-violet-500/30">
                <Beaker className="h-10 w-10 text-violet-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Molecular Design</h3>
                <p className="text-center text-neutral-300">AI-accelerated discovery and optimization of new compounds</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-violet-500/30">
                <Factory className="h-10 w-10 text-violet-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Process Optimization</h3>
                <p className="text-center text-neutral-300">Real-time production monitoring and yield optimization</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-violet-500/30">
                <Shield className="h-10 w-10 text-violet-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Safety & Compliance</h3>
                <p className="text-center text-neutral-300">Predictive safety monitoring and regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-violet-400 to-purple-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Transformative AI capabilities for chemical manufacturing and research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-violet-900/20 border border-violet-500/30 rounded-xl p-6"
            >
              <Microscope className="h-10 w-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Materials Discovery</h3>
              <p className="text-neutral-300">
                Accelerate novel material discovery with AI-powered molecular modeling and simulation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-violet-900/20 border border-violet-500/30 rounded-xl p-6"
            >
              <Zap className="h-10 w-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Process Control</h3>
              <p className="text-neutral-300">
                Optimize chemical processes with real-time AI control systems and predictive maintenance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-violet-900/20 border border-violet-500/30 rounded-xl p-6"
            >
              <LineChart className="h-10 w-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-neutral-300">
                Automated quality control with computer vision and advanced analytics for batch consistency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-violet-900/20 border border-violet-500/30 rounded-xl p-6"
            >
              <Shield className="h-10 w-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Safety</h3>
              <p className="text-neutral-300">
                AI-driven risk assessment and early warning systems for process safety and environmental protection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-violet-900/20 border border-violet-500/30 rounded-xl p-6"
            >
              <Recycle className="h-10 w-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sustainability Analytics</h3>
              <p className="text-neutral-300">
                Optimize energy consumption, reduce waste, and track environmental impact with AI insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-violet-900/20 border border-violet-500/30 rounded-xl p-6"
            >
              <Cog className="h-10 w-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Supply Chain Optimization</h3>
              <p className="text-neutral-300">
                Intelligent demand forecasting and inventory management for chemical logistics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-violet-400 to-purple-400">
              Industry Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real-world applications transforming chemical operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-violet-900/10 border border-violet-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Accelerated Drug Discovery</h3>
              <p className="text-neutral-300 mb-4">
                Reduce time-to-market for pharmaceutical compounds with AI-driven molecular design.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>In silico screening of millions of candidate molecules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Prediction of molecular properties and bioactivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Automated synthesis pathway optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-violet-900/10 border border-violet-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Smart Manufacturing</h3>
              <p className="text-neutral-300 mb-4">
                Transform chemical plants into intelligent, self-optimizing production systems.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Real-time process monitoring and anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Predictive maintenance for critical equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Yield optimization through advanced process control</span>
                </li>
              </ul>
            </div>

            <div className="bg-violet-900/10 border border-violet-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Formulation Optimization</h3>
              <p className="text-neutral-300 mb-4">
                Design and optimize chemical formulations with AI-powered experimentation.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Active learning for efficient design of experiments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Multi-objective optimization of formulation properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Predictive modeling of formulation stability</span>
                </li>
              </ul>
            </div>

            <div className="bg-violet-900/10 border border-violet-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Environmental Compliance</h3>
              <p className="text-neutral-300 mb-4">
                Ensure regulatory compliance and minimize environmental impact with intelligent monitoring.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Real-time emissions monitoring and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Waste stream optimization and recycling opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span>Automated compliance documentation and audit trails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-violet-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Chemical Operations</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Partner with Hanzo to accelerate innovation and optimize production with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-violet-600 hover:bg-violet-700 text-[var(--white)] px-8 py-6 text-lg">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-violet-500/30 text-[var(--white)] hover:bg-violet-900/20 px-8 py-6 text-lg">
                  <Link to="/pricing">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryChemicals;
