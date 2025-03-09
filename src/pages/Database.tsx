
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database as DatabaseIcon, Server, HardDrive, Globe, Zap, Scale, Shield, FlexibleIcon, Layers, Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Database = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                The fastest open-source planet scale database.
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hanzo Database is a column-oriented database that enables its users to generate powerful analytics, using SQL queries, in real-time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-black/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold">Blazing fast</h3>
                </div>
                <p className="text-gray-400">
                  Processes analytical queries faster than traditional row and column oriented systems.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-black/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold">Linearly scalable</h3>
                </div>
                <p className="text-gray-400">
                  Scales efficiently with hardware resources horizontally and vertically to petabyte scale.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-black/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold">Highly reliable</h3>
                </div>
                <p className="text-gray-400">
                  Supports asyncronous replication and can be deployed across multiple datacenters.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-black/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="h-6 w-6 text-blue-500 mr-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18" />
                      <path d="M14 3v18" />
                      <path d="M3 9h18" />
                      <path d="M3 14h18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Flexible architecture</h3>
                </div>
                <p className="text-gray-400">
                  Supports shared-nothing clusters as well as separation of storage and compute.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-black/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Layers className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold">Feature-rich</h3>
                </div>
                <p className="text-gray-400">
                  The most complete analytical database with support for joins, federated queries, and more.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-black/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Terminal className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold">Easy to use</h3>
                </div>
                <p className="text-gray-400">
                  Simplifies writing queries with a user-friendly SQL dialect, optimized for common analytical use cases.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Database Efficiency */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Database efficiency
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Hardware efficient</h3>
                <p className="text-gray-300 mb-6">
                  Database processes analytical queries 100-1000x faster than traditional row-oriented systems with the same available I/O throughput and CPU capacity. Columnar storage format allows fitting more hot data in RAM, which leads to shorter response times.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Vectorization</h3>
                <p className="text-gray-300 mb-6">
                  Maximizes CPU efficiency
                </p>
                <p className="text-gray-400">
                  Vectorized query execution leverages SIMD processor instructions and runtime code generation. Processing data in columns increases CPU cache line hit rate.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Locality</h3>
                <p className="text-gray-300 mb-6">
                  Optimizes disk access
                </p>
                <p className="text-gray-400 mb-10">
                  Database minimizes the number of seeks for range queries to increase efficiency of using disk drives and maintain locality of reference for continually stored data.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Throughput</h3>
                <p className="text-gray-300 mb-6">
                  Minimizes data transfers
                </p>
                <p className="text-gray-400">
                  Database enables companies to manage their data and create reports without using specialized networks that are aimed at high-performance computing.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Scalability */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-gray-900/20 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  From your laptop to petabyte scale
                </h2>
                <h3 className="text-2xl font-bold mb-4 text-white">Database is linearly scalable</h3>
                <p className="text-gray-300 mb-6">
                  Database scales well both vertically and horizontally. It is easily adaptable to perform on your laptop, small virtual machine, a single server, or a cluster with hundreds or thousands of nodes.
                </p>
                <p className="text-gray-400">
                  There are many Database clusters consisting of multiple hundreds of nodes, while the largest known Database cluster is well over a thousand nodes. There are installations of Database with more multiple trillion rows or hundreds of terabytes of data per single node.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f" 
                  alt="Database at scale" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Database at scale</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Database at scale
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Database is used in a variety of industries for a broad set of use cases on top of both customer-facing and internally-facing workloads.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {[
                { icon: Globe, label: "Web and app analytics" },
                { icon: DatabaseIcon, label: "E-commerce and finance" },
                { icon: Server, label: "Time series" },
                { icon: Globe, label: "Advertising networks and RTB" },
                { icon: Shield, label: "Information security" },
                { icon: HardDrive, label: "Business intelligence" },
                { icon: Server, label: "Telecommunications" },
                { icon: HardDrive, label: "Monitoring and telemetry" },
                { icon: Globe, label: "Online games" },
                { icon: Server, label: "Internet of Things (IoT)" },
                { icon: Globe, label: "Observability" },
                { icon: DatabaseIcon, label: "User behavior analytics" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="bg-gray-900/40 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
                    <div className="mx-auto w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <p className="text-gray-300 text-sm">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Get Started */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Start using Database in minutes
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Install Database for MacOS, Linux, and FreeBSD.
              </p>
              
              <div className="bg-black/60 rounded-lg p-4 mb-8 mx-auto max-w-xl">
                <code className="text-green-400 text-sm md:text-base">
                  curl https://hanzo.ai/database/install | sh
                </code>
              </div>
              
              <p className="text-gray-400 mb-8">
                Or install for Windows, Docker or see other install options.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Watch Getting Started Video
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-400 hover:bg-blue-600/10"
                >
                  View Documentation
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Cloud</h3>
                  <p className="text-gray-400 text-sm mb-4">The best way to use Database. Available on AWS, GCP, and Azure.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-600 text-blue-400 hover:bg-blue-600/10"
                  >
                    Deploy Now
                  </Button>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Bring Your Own Cloud</h3>
                  <p className="text-gray-400 text-sm mb-4">A fully managed Database Cloud service, deployed in your own AWS account.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-600 text-blue-400 hover:bg-blue-600/10"
                  >
                    Deploy Now
                  </Button>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Open Source</h3>
                  <p className="text-gray-400 text-sm mb-4">Spin up a database with open-source Database.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-600 text-blue-400 hover:bg-blue-600/10"
                  >
                    Deploy Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Database;
