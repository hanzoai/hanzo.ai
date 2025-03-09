
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Database as DatabaseIcon, 
  Zap, 
  Scale, 
  Shield, 
  Grid, 
  Activity, 
  ArrowRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";

const Datastore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section with CTA */}
        <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/30 pointer-events-none"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                Hanzo Datastore
              </div>
              <ChromeText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
                The Fastest Open-Source Planet Scale Datastore
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
                Hanzo Datastore is a column-oriented data store that enables its users to generate powerful analytics, 
                using SQL queries, in real-time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            >
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 border-none">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10">
                Documentation
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16"
            >
              <a href="#features" className="text-gray-400 hover:text-white transition-colors flex items-center justify-center">
                Scroll to explore
                <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Key Features */}
        <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
                Key Features
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A powerful datastore built for modern analytical applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blazing Fast */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <ChromeText as="h3" className="text-xl font-bold mb-4">
                  Blazing Fast
                </ChromeText>
                <p className="text-gray-400">
                  Processes analytical queries faster than traditional row and column oriented systems.
                </p>
              </motion.div>
              
              {/* Linearly Scalable */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Scale className="h-6 w-6 text-purple-400" />
                </div>
                <ChromeText as="h3" className="text-xl font-bold mb-4">
                  Linearly Scalable
                </ChromeText>
                <p className="text-gray-400">
                  Scales efficiently with hardware resources horizontally and vertically to petabyte scale.
                </p>
              </motion.div>
              
              {/* Highly Reliable */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <ChromeText as="h3" className="text-xl font-bold mb-4">
                  Highly Reliable
                </ChromeText>
                <p className="text-gray-400">
                  Supports asyncronous replication and can be deployed across multiple datacenters.
                </p>
              </motion.div>
              
              {/* Flexible Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Grid className="h-6 w-6 text-purple-400" />
                </div>
                <ChromeText as="h3" className="text-xl font-bold mb-4">
                  Flexible Architecture
                </ChromeText>
                <p className="text-gray-400">
                  Supports shared-nothing clusters as well as separation of storage and compute.
                </p>
              </motion.div>
              
              {/* Feature-rich */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <DatabaseIcon className="h-6 w-6 text-purple-400" />
                </div>
                <ChromeText as="h3" className="text-xl font-bold mb-4">
                  Feature-rich
                </ChromeText>
                <p className="text-gray-400">
                  The most complete analytical datastore with support for joins, federated queries, and more.
                </p>
              </motion.div>
              
              {/* Easy to Use */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6 text-purple-400" />
                </div>
                <ChromeText as="h3" className="text-xl font-bold mb-4">
                  Easy to Use
                </ChromeText>
                <p className="text-gray-400">
                  Simplifies writing queries with a user-friendly SQL dialect, optimized for common analytical use cases.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Datastore Efficiency */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
                Datastore Efficiency
              </ChromeText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Hardware Efficient */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/30 rounded-xl p-8 border border-gray-800"
              >
                <ChromeText as="h3" className="text-2xl font-bold mb-4">
                  Hardware Efficient
                </ChromeText>
                <p className="text-gray-300 mb-4">
                  Datastore processes analytical queries 100-1000x faster than traditional row-oriented systems with the same available I/O throughput and CPU capacity.
                </p>
                <p className="text-gray-400">
                  Columnar storage format allows fitting more hot data in RAM, which leads to shorter response times.
                </p>
              </motion.div>
              
              {/* Vectorization */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900/30 rounded-xl p-8 border border-gray-800"
              >
                <ChromeText as="h3" className="text-2xl font-bold mb-4">
                  Maximizes CPU Efficiency
                </ChromeText>
                <p className="text-gray-300 mb-4">
                  Vectorized query execution leverages SIMD processor instructions and runtime code generation.
                </p>
                <p className="text-gray-400">
                  Processing data in columns increases CPU cache line hit rate.
                </p>
              </motion.div>
              
              {/* Locality */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-900/30 rounded-xl p-8 border border-gray-800"
              >
                <ChromeText as="h3" className="text-2xl font-bold mb-4">
                  Optimizes Disk Access
                </ChromeText>
                <p className="text-gray-300 mb-4">
                  Datastore minimizes the number of seeks for range queries to increase efficiency of using disk drives.
                </p>
                <p className="text-gray-400">
                  Maintains locality of reference for continually stored data.
                </p>
              </motion.div>
              
              {/* Throughput */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-900/30 rounded-xl p-8 border border-gray-800"
              >
                <ChromeText as="h3" className="text-2xl font-bold mb-4">
                  Minimizes Data Transfers
                </ChromeText>
                <p className="text-gray-300 mb-4">
                  Datastore enables companies to manage their data and create reports without using specialized networks.
                </p>
                <p className="text-gray-400">
                  Perfect for high-performance computing at any scale.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 opacity-30 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
                Datastore at Scale
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Datastore is used in a variety of industries for a broad set of use cases on top of both customer-facing and internally-facing workloads.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "Web and app analytics",
                "E-commerce and finance",
                "Time series",
                "Advertising networks and RTB",
                "Information security",
                "Business intelligence",
                "Telecommunications",
                "Monitoring and telemetry",
                "Online games",
                "Internet of Things (IoT)",
                "Observability",
                "User behavior analytics"
              ].map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-900/20 border border-gray-800 rounded-lg p-4 text-center"
                >
                  <p className="text-gray-300">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Get Started Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
                Start Using Datastore in Minutes
              </ChromeText>
              <p className="text-lg text-gray-300 mb-10">
                Install Datastore for MacOS, Linux, and FreeBSD.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 mb-8 inline-block text-left">
                <code className="text-gray-300 font-mono">curl https://datastore.hanzo.ai/ | sh</code>
              </div>
              
              <p className="text-gray-400 mb-10">
                Or install for Windows, Docker or see other install options.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Deploy Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datastore;
