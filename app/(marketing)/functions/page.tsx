'use client'


import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Code, Terminal, Database, Server, Cpu, Network, Shield } from "lucide-react";
import { Button } from "@hanzo/ui";
import ChromeText from "@/components/ui/chrome-text";

const BRAND_COLOR = "#ffffff";

const Functions = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-[#ffffff]/10 border border-[#ffffff]/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-[#ffffff] text-sm font-medium">Serverless Computing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#ff6b6b]">
              Hanzo Functions
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Serverless function execution for any workload. Deploy code in seconds without managing infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#ffffff] hover:bg-[#e03e3e] text-[var(--white)] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-[#ffffff]/30 text-[var(--white)] hover:bg-[#ffffff]/10 px-8 py-6 text-lg">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-[#ffffff]/10 border border-[#ffffff]/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <pre className="text-sm sm:text-base overflow-x-auto bg-[var(--black)]/50 p-4 rounded-lg border border-[#ffffff]/30">
              <code className="text-neutral-300">
                <span className="text-[#ffffff]">export</span> <span className="text-[#ff6b6b]">async function</span> <span className="text-green-400">handler</span><span className="text-[var(--white)]">(req, res) {'{'}</span>
                <br/>
                <span className="ml-4">// Process incoming data</span>
                <br/>
                <span className="ml-4 text-[#ffffff]">const</span> <span className="text-[var(--white)]">{'{'} data {'}'} = </span><span className="text-[#ffffff]">await</span> <span className="text-[var(--white)]">req.json();</span>
                <br/>
                <span className="ml-4 text-[#ffffff]">const</span> <span className="text-[var(--white)]">result = </span><span className="text-[#ffffff]">await</span> <span className="text-[#ff6b6b]">processData</span><span className="text-[var(--white)]">(data);</span>
                <br/>
                <br/>
                <span className="ml-4">// Return JSON response</span>
                <br/>
                <span className="ml-4 text-[#ffffff]">return</span> <span className="text-[var(--white)]">Response.json({'{'}</span>
                <br/>
                <span className="ml-8">success: <span className="text-yellow-400">true</span>,</span>
                <br/>
                <span className="ml-8">data: result</span>
                <br/>
                <span className="ml-4 text-[var(--white)]">{'}'})</span>
                <br/>
                <span className="text-[var(--white)]">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Key Features & Capabilities
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Deploy serverless functions that scale automatically and only run when needed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#ffffff]/10 border border-[#ffffff]/30 rounded-xl p-6"
            >
              <Code className="h-10 w-10 text-[#ffffff] mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-Language Support</h3>
              <p className="text-neutral-300">
                Write functions in JavaScript, TypeScript, Python, Go, or Rust with native runtime support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#ffffff]/10 border border-[#ffffff]/30 rounded-xl p-6"
            >
              <Terminal className="h-10 w-10 text-[#ffffff] mb-4" />
              <h3 className="text-xl font-bold mb-2">Zero Cold Starts</h3>
              <p className="text-neutral-300">
                Our intelligent prediction system keeps functions warm for instant execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#ffffff]/10 border border-[#ffffff]/30 rounded-xl p-6"
            >
              <Database className="h-10 w-10 text-[#ffffff] mb-4" />
              <h3 className="text-xl font-bold mb-2">Native Database Access</h3>
              <p className="text-neutral-300">
                Seamless integration with Hanzo Datastore and Vector for persistent storage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#ffffff]/10 border border-[#ffffff]/30 rounded-xl p-6"
            >
              <Server className="h-10 w-10 text-[#ffffff] mb-4" />
              <h3 className="text-xl font-bold mb-2">Edge Deployment</h3>
              <p className="text-neutral-300">
                Deploy to 200+ global edge locations for ultra-low latency responses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#ffffff]/10 border border-[#ffffff]/30 rounded-xl p-6"
            >
              <Network className="h-10 w-10 text-[#ffffff] mb-4" />
              <h3 className="text-xl font-bold mb-2">Event-Driven Architecture</h3>
              <p className="text-neutral-300">
                Trigger functions from HTTP requests, webhooks, schedules, or database changes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#ffffff]/10 border border-[#ffffff]/30 rounded-xl p-6"
            >
              <Shield className="h-10 w-10 text-[#ffffff] mb-4" />
              <h3 className="text-xl font-bold mb-2">Security & Isolation</h3>
              <p className="text-neutral-300">
                Each function runs in an isolated environment with configurable permissions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-[#ffffff]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Common Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Hanzo Functions powers a wide range of serverless applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#ffffff]/5 border border-[#ffffff]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">API Backends</h3>
              <p className="text-neutral-300 mb-4">
                Build complete REST or GraphQL APIs with automatic scaling and no server management.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Custom middleware for authentication and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>API versioning and documentation generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Automatic OpenAPI schema generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ffffff]/5 border border-[#ffffff]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Real-time Processing</h3>
              <p className="text-neutral-300 mb-4">
                Process events in real-time with automatic scaling for traffic spikes.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Webhook handlers for third-party services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Event-driven data transformation and enrichment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Real-time analytics processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ffffff]/5 border border-[#ffffff]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI/ML Inference</h3>
              <p className="text-neutral-300 mb-4">
                Deploy machine learning models for inference with built-in GPU acceleration.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Image and text classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>AI chatbots and virtual assistants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Real-time recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ffffff]/5 border border-[#ffffff]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Scheduled Tasks</h3>
              <p className="text-neutral-300 mb-4">
                Run tasks on a schedule without maintaining a dedicated server.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Periodic data cleanup and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Scheduled reports and notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffffff] mr-2">•</span>
                  <span>Recurring data integration and ETL processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#ffffff]/20 to-[#ff6b6b]/20 rounded-2xl p-8 md:p-12 border border-[#ffffff]/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Get started with Hanzo Functions today and deploy your first serverless function in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#ffffff] hover:bg-[#e03e3e] text-[var(--white)] px-8 py-6 text-lg">
                  Sign Up Free
                </Button>
                <Button variant="outline" className="border-[#ffffff]/30 text-[var(--white)] hover:bg-[#ffffff]/10 px-8 py-6 text-lg">
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Functions;
