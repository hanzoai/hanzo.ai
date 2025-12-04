
import React from 'react';
import { motion } from "framer-motion";
import { Plane, Shield, Cog, Satellite, Activity, Lock, Database, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { Link } from "react-router-dom";

const IndustryAerospace = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar themeColor="indigo" />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-indigo-400 text-sm font-medium">Aerospace and Defense</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
              Mission-Critical AI for Aerospace
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Transform aerospace and defense operations with secure, reliable AI infrastructure built for mission-critical applications. From predictive maintenance to satellite operations, Hanzo provides defense-grade security and 99.99% uptime for systems that can't fail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-[var(--white)] px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-500/30 text-[var(--white)] hover:bg-indigo-900/20 px-8 py-6 text-lg">
                <Link to="/pricing">Schedule Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-indigo-900/20 border border-indigo-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-indigo-500/30">
                <Plane className="h-10 w-10 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Advanced Aviation Systems</h3>
                <p className="text-center text-neutral-300">AI-powered flight operations and predictive maintenance</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-indigo-500/30">
                <Shield className="h-10 w-10 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Defense-Grade Security</h3>
                <p className="text-center text-neutral-300">Highest level of data protection and compliance</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-indigo-500/30">
                <Satellite className="h-10 w-10 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Space Systems Integration</h3>
                <p className="text-center text-neutral-300">Cloud and edge computing for satellite operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-indigo-400 to-blue-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Specialized AI capabilities designed for aerospace and defense challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6"
            >
              <Activity className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Maintenance</h3>
              <p className="text-neutral-300">
                AI-driven analytics powered by Hanzo's Data & AI platform to predict equipment failures before they occur. Process petabytes of sensor data in real-time with distributed computing, reducing unscheduled downtime by up to 40% and extending asset lifecycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6"
            >
              <Lock className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Communications</h3>
              <p className="text-neutral-300">
                Zero trust architecture with military-grade AES-256 encryption and TLS 1.3 protocols for classified operations. Air-gapped deployment options, multi-factor authentication, and role-based access control ensure compliance with ITAR, CMMC, and FedRAMP standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6"
            >
              <Database className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mission Data Analytics</h3>
              <p className="text-neutral-300">
                Real-time processing and analysis of mission-critical data with AI-powered insights. Hanzo Datastore and Vector provide scalable data pipelines with automated ETL processes, enabling multi-source intelligence fusion and automated threat detection with 99.5% accuracy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6"
            >
              <Cog className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Digital Manufacturing</h3>
              <p className="text-neutral-300">
                Optimize aerospace manufacturing with AI-driven quality control and production optimization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6"
            >
              <Globe className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Supply Chain Intelligence</h3>
              <p className="text-neutral-300">
                End-to-end supply chain visibility and optimization for complex aerospace logistics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6"
            >
              <Satellite className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Autonomous Systems</h3>
              <p className="text-neutral-300">
                Advanced AI for unmanned aerial vehicles, autonomous navigation, and decision support systems. Deploy AI models at the edge with Hanzo Edge for sub-50ms latency across 200+ global locations, enabling real-time decision-making for UAVs and autonomous platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-indigo-400 to-blue-400">
              Industry Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real-world applications of Hanzo AI in aerospace and defense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Aircraft Maintenance Optimization</h3>
              <p className="text-neutral-300 mb-4">
                Reduce unscheduled maintenance and improve aircraft availability through predictive analytics powered by Hanzo's AI platform.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Real-time sensor data analysis with Hanzo Functions for early failure detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Automated maintenance scheduling reducing downtime by 40%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Integration with existing MRO systems via secure APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Outcome: 30% reduction in maintenance costs, 99.7% fleet availability</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Defense Intelligence Systems</h3>
              <p className="text-neutral-300 mb-4">
                Process and analyze vast amounts of intelligence data with AI-powered insights using Hanzo's secure, compliant infrastructure.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Multi-source intelligence fusion with generative AI models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Automated threat detection with under 5-minute response time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Secure, air-gapped Hanzo Platform deployment for classified environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Outcome: 85% reduction in security incidents, full ITAR compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Flight Operations Enhancement</h3>
              <p className="text-neutral-300 mb-4">
                Optimize flight planning, routing, and operational efficiency with AI-driven decision support powered by Hanzo's cloud infrastructure.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Dynamic route optimization reducing fuel costs by 15-20%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Real-time weather analysis with predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Automated crew scheduling with compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Outcome: 25% improvement in operational efficiency, 99.99% uptime</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Space Mission Support</h3>
              <p className="text-neutral-300 mb-4">
                Enable next-generation space operations with AI-powered satellite management and data processing using Hanzo's distributed edge infrastructure.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Real-time satellite health monitoring with ML-powered anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Orbital debris tracking processing terabytes of telemetry data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Hanzo Edge deployment for on-orbit data processing with ultra-low latency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>Outcome: 10x faster data processing, zero collision events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-indigo-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Aerospace Operations</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Partner with Hanzo to build secure, mission-critical AI systems for aerospace and defense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-[var(--white)] px-8 py-6 text-lg">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-indigo-500/30 text-[var(--white)] hover:bg-indigo-900/20 px-8 py-6 text-lg">
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

export default IndustryAerospace;
