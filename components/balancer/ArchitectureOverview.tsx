'use client'


import React from "react";
import { motion } from "framer-motion";

const ArchitectureOverview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hanzo Balancer Architecture Overview</h2>
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto">
            Unlike a traditional reverse proxy, which requires manual configuration, Hanzo Balancer uses service 
            discovery to dynamically configure routing. Hanzo Balancer supports all major protocols, leveraging a rich set 
            of middleware for load balancing, rate-limiting, circuit-breakers, mirroring, authentication, and more.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 aspect-video flex items-center justify-center">
              <p className="text-xl text-neutral-400">Hanzo Balancer Architecture Diagram</p>
              {/* Replace with actual diagram image when available */}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <p className="text-neutral-300 mb-6">
              Hanzo Balancer also supports SSL termination and works with ACME providers (like Let's Encrypt) 
              for automatic certificate generation. Hanzo Balancer's extensive features and capabilities make it 
              the comprehensive gateway to all your applications.
            </p>
            <div className="bg-gradient-to-r from-red-900/30 to-red-900/20 border border-[#ffffff]/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Maximize Uptime, Solve Issues Quickly</h3>
              <p className="text-neutral-300 mb-4">
                Need support with Hanzo Balancer? Our team of experts is here to help 24/7/365!
              </p>
              <a
                href="#support"
                className="inline-block px-4 py-2 bg-[#ffffff] hover:bg-[#cccccc] rounded-md font-medium transition-colors"
              >
                REQUEST COMMERCIAL SUPPORT
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureOverview;
