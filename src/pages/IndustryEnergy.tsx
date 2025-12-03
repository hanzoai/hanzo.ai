
import React from 'react';
import { motion } from "framer-motion";
import { Leaf, Zap, Battery, Wind, Sun, Droplets, Database, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const IndustryEnergy = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-green-400 text-sm font-medium">Energy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Powering the Future of Energy
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Transform energy operations with AI-driven optimization, renewable integration, and smart grid management for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-[var(--white)] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-green-500/30 text-[var(--white)] hover:bg-green-900/20 px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-green-900/20 border border-green-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-green-500/30">
                <Leaf className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Renewable Energy</h3>
                <p className="text-center text-neutral-300">AI-powered renewable energy forecasting and optimization</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-green-500/30">
                <Zap className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Grid Management</h3>
                <p className="text-center text-neutral-300">Real-time grid optimization and demand response</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-green-500/30">
                <TrendingUp className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Energy Trading</h3>
                <p className="text-center text-neutral-300">Advanced analytics for energy market optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-green-400 to-emerald-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Specialized AI capabilities designed for energy sector challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 border border-green-500/20 rounded-xl bg-green-900/10 hover:border-green-500/40 transition-colors"
            >
              <Sun className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Solar Forecasting</h3>
              <p className="text-neutral-300">
                AI-powered solar generation prediction for optimal energy planning and grid integration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 border border-green-500/20 rounded-xl bg-green-900/10 hover:border-green-500/40 transition-colors"
            >
              <Wind className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Wind Power Analytics</h3>
              <p className="text-neutral-300">
                Advanced wind pattern analysis and turbine optimization for maximum efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 border border-green-500/20 rounded-xl bg-green-900/10 hover:border-green-500/40 transition-colors"
            >
              <Battery className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Energy Storage</h3>
              <p className="text-neutral-300">
                Intelligent battery management and storage optimization for peak load management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 border border-green-500/20 rounded-xl bg-green-900/10 hover:border-green-500/40 transition-colors"
            >
              <Droplets className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hydro Management</h3>
              <p className="text-neutral-300">
                Water resource optimization and hydroelectric generation forecasting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 border border-green-500/20 rounded-xl bg-green-900/10 hover:border-green-500/40 transition-colors"
            >
              <Database className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Asset Management</h3>
              <p className="text-neutral-300">
                Predictive maintenance and asset performance optimization for energy infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 border border-green-500/20 rounded-xl bg-green-900/10 hover:border-green-500/40 transition-colors"
            >
              <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Demand Response</h3>
              <p className="text-neutral-300">
                AI-driven demand forecasting and load balancing for grid stability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 relative bg-gradient-to-b from-green-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-green-400 to-emerald-400">
              Why Choose Hanzo for Energy
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored for the energy sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Optimization</h3>
                <p className="text-neutral-300">
                  AI-powered real-time energy optimization for maximum efficiency and cost savings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Sustainability Focus</h3>
                <p className="text-neutral-300">
                  Drive carbon reduction and renewable energy integration with intelligent systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Grid Resilience</h3>
                <p className="text-neutral-300">
                  Enhance grid stability and reliability with predictive analytics and automation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-neutral-300">
                  Meet environmental regulations and reporting requirements with automated tracking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
                <p className="text-neutral-300">
                  Reduce operational costs through intelligent automation and predictive maintenance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Scalable Infrastructure</h3>
                <p className="text-neutral-300">
                  Cloud and edge computing solutions that scale with your energy operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-green-400 to-emerald-400">
              Energy Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real-world applications transforming the energy sector
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 border border-green-500/20 rounded-xl bg-gradient-to-br from-green-900/20 to-transparent hover:border-green-500/40 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">Utility Companies</h3>
              <p className="text-neutral-300 mb-6">
                Smart grid management, demand forecasting, and customer energy optimization for utility providers.
              </p>
              <ul className="space-y-2 text-neutral-400">
                <li>• Load forecasting</li>
                <li>• Outage prediction</li>
                <li>• Distribution optimization</li>
                <li>• Customer analytics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 border border-green-500/20 rounded-xl bg-gradient-to-br from-green-900/20 to-transparent hover:border-green-500/40 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">Renewable Operators</h3>
              <p className="text-neutral-300 mb-6">
                AI-powered forecasting and optimization for solar, wind, and other renewable energy operations.
              </p>
              <ul className="space-y-2 text-neutral-400">
                <li>• Generation forecasting</li>
                <li>• Maintenance scheduling</li>
                <li>• Performance optimization</li>
                <li>• Grid integration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 border border-green-500/20 rounded-xl bg-gradient-to-br from-green-900/20 to-transparent hover:border-green-500/40 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">Energy Trading</h3>
              <p className="text-neutral-300 mb-6">
                Advanced analytics and AI for energy trading, market optimization, and risk management.
              </p>
              <ul className="space-y-2 text-neutral-400">
                <li>• Price forecasting</li>
                <li>• Trading optimization</li>
                <li>• Risk analytics</li>
                <li>• Market insights</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/30 via-emerald-950/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Energy Operations?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join leading energy companies using Hanzo AI to drive efficiency, sustainability, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-[var(--white)] px-8 py-6 text-lg">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-green-500/30 text-[var(--white)] hover:bg-green-900/20 px-8 py-6 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryEnergy;
