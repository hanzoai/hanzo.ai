
import React from 'react';
import { motion } from "framer-motion";
import { Globe, TrendingUp, BarChart3, Shield, Zap, Brain, Activity, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const IndustryCapitalMarkets = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-blue-400 text-sm font-medium">Capital Markets</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              AI-Powered Capital Markets
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Transform trading, investment, and risk management with ultra-low latency AI infrastructure and advanced analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-[var(--white)] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-blue-500/30 text-[var(--white)] hover:bg-blue-900/20 px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-blue-900/20 border border-blue-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-blue-500/30">
                <Zap className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">High-Frequency Trading</h3>
                <p className="text-center text-neutral-300">Ultra-low latency infrastructure for algorithmic trading</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-blue-500/30">
                <Brain className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Quantitative Analysis</h3>
                <p className="text-center text-neutral-300">AI-driven models for alpha generation and strategy development</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-blue-500/30">
                <Shield className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
                <p className="text-center text-neutral-300">Real-time portfolio risk analytics and compliance monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-blue-400 to-cyan-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Advanced AI capabilities for capital markets professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <Zap className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Algorithmic Trading</h3>
              <p className="text-neutral-300">
                Deploy high-frequency trading strategies with microsecond-level execution and real-time market data processing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <Brain className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quantitative Research</h3>
              <p className="text-neutral-300">
                Accelerate alpha discovery with scalable compute infrastructure for backtesting and model development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <Activity className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Market Surveillance</h3>
              <p className="text-neutral-300">
                AI-powered monitoring for market manipulation, insider trading, and regulatory compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <TrendingUp className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-neutral-300">
                Machine learning models for price forecasting, volatility prediction, and market trend analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <Database className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Infrastructure</h3>
              <p className="text-neutral-300">
                High-performance data lakes and streaming pipelines for market data, alternative data, and analytics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <BarChart3 className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Portfolio Optimization</h3>
              <p className="text-neutral-300">
                AI-driven portfolio construction, rebalancing, and risk-adjusted return optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-blue-400 to-cyan-400">
              Industry Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Powering innovation across capital markets operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Real-Time Risk Analytics</h3>
              <p className="text-neutral-300 mb-4">
                Monitor and manage portfolio risk exposure with millisecond-level precision.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Real-time VaR, stress testing, and scenario analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Cross-asset risk aggregation and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Automated limit monitoring and breach alerting</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Alternative Data Intelligence</h3>
              <p className="text-neutral-300 mb-4">
                Extract alpha signals from unstructured and alternative data sources.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>NLP for sentiment analysis from news and social media</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Satellite imagery and geospatial data analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Web scraping and alternative data integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Trade Execution Optimization</h3>
              <p className="text-neutral-300 mb-4">
                Minimize market impact and transaction costs with intelligent execution algorithms.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Smart order routing across multiple venues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>VWAP, TWAP, and adaptive execution strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Transaction cost analysis and performance attribution</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
              <p className="text-neutral-300 mb-4">
                Automate compliance workflows and regulatory reporting requirements.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Best execution analysis and MiFID II reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Trade surveillance and market abuse detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Automated regulatory filing and audit trails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Accelerate Your Trading Edge</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Partner with Hanzo to build next-generation trading systems and quantitative strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-[var(--white)] px-8 py-6 text-lg">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-blue-500/30 text-[var(--white)] hover:bg-blue-900/20 px-8 py-6 text-lg">
                  Contact Sales
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

export default IndustryCapitalMarkets;
