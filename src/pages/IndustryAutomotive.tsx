
import React from 'react';
import { motion } from "framer-motion";
import { Car, Battery, Cpu, Radio, Settings, Zap, Brain, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const IndustryAutomotive = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-orange-400 text-sm font-medium">Automotive Industry</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              AI-Powered Automotive Innovation
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Drive the future of mobility with AI solutions for autonomous vehicles, connected cars, and smart manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700 text-[var(--white)] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-orange-500/30 text-[var(--white)] hover:bg-orange-900/20 px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-orange-900/20 border border-orange-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-orange-500/30">
                <Car className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Driving</h3>
                <p className="text-center text-neutral-300">AI systems for self-driving and advanced driver assistance</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-orange-500/30">
                <Radio className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Connected Vehicles</h3>
                <p className="text-center text-neutral-300">Cloud infrastructure for V2X communication and telematics</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-orange-500/30">
                <Settings className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Manufacturing</h3>
                <p className="text-center text-neutral-300">AI-driven production optimization and quality control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-orange-400 to-red-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Comprehensive AI capabilities for the automotive ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6"
            >
              <Brain className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Autonomous Systems</h3>
              <p className="text-neutral-300">
                Advanced perception, planning, and control systems for autonomous vehicle development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6"
            >
              <Battery className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Battery Intelligence</h3>
              <p className="text-neutral-300">
                Optimize battery performance and lifecycle with AI-powered analytics and predictive models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6"
            >
              <Activity className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Maintenance</h3>
              <p className="text-neutral-300">
                Reduce downtime with AI-driven vehicle health monitoring and maintenance prediction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6"
            >
              <Cpu className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">In-Vehicle AI</h3>
              <p className="text-neutral-300">
                Edge AI deployment for real-time processing in vehicle compute platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6"
            >
              <Zap className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">EV Charging Management</h3>
              <p className="text-neutral-300">
                Intelligent charging infrastructure management and grid optimization for electric vehicles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6"
            >
              <Radio className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fleet Telematics</h3>
              <p className="text-neutral-300">
                Real-time fleet monitoring, route optimization, and driver behavior analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-orange-400 to-red-400">
              Industry Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Transforming automotive operations with AI innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Autonomous Vehicle Development</h3>
              <p className="text-neutral-300 mb-4">
                Accelerate AV development with scalable AI infrastructure for training and simulation.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Massive-scale sensor data processing and annotation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Distributed model training for perception and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Scenario-based testing and validation in virtual environments</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Connected Car Platform</h3>
              <p className="text-neutral-300 mb-4">
                Build scalable cloud platforms for connected vehicle services and over-the-air updates.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Real-time vehicle data streaming and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Secure OTA software updates and remote diagnostics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Personalized in-vehicle experiences and services</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Manufacturing Excellence</h3>
              <p className="text-neutral-300 mb-4">
                Transform production with AI-powered quality control and process optimization.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Computer vision for defect detection and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Production line optimization and predictive maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Supply chain optimization and just-in-time manufacturing</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Customer Experience Enhancement</h3>
              <p className="text-neutral-300 mb-4">
                Deliver personalized experiences with AI-powered customer insights and services.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>AI chatbots for customer support and service scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Predictive recommendations for vehicle features and services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Voice-enabled interfaces and natural language interaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 md:p-12 border border-orange-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Accelerate Your Automotive Innovation</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Partner with Hanzo to build the next generation of intelligent vehicles and mobility services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-600 hover:bg-orange-700 text-[var(--white)] px-8 py-6 text-lg">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-orange-500/30 text-[var(--white)] hover:bg-orange-900/20 px-8 py-6 text-lg">
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

export default IndustryAutomotive;
