'use client'


import React from "react";
import { motion } from "framer-motion";

const FeaturesOverview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Hanzo Balancer?</h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Hanzo Balancer is a leading modern open source reverse proxy and ingress controller that makes deploying services and APIs easy. 
            Hanzo Balancer integrates with your existing infrastructure components and configures itself automatically and dynamically.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800/30 p-8 rounded-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4">Simplified Operation, Complex Deployments</h3>
            <p className="text-foreground/80">
              Hanzo Balancer is designed to be as simple as possible to operate, but capable of handling large, 
              highly-complex deployments across a wide range of environments and protocols in public, private, and hybrid clouds.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/30 p-8 rounded-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4">Enhanced with Powerful Middleware Suite</h3>
            <p className="text-foreground/80">
              Hanzo Balancer also comes with a powerful set of middlewares that enhance its capabilities to include 
              load balancing, API gateway, orchestrator ingress, and more.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/30 p-8 rounded-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4">Upgrade from Other Proxies in Seconds</h3>
            <p className="text-foreground/80">
              Watch our short demo video to see why our cloud native, GitOps-driven API Gateway is Developers' #1 choice.
            </p>
            <a href="#watch-demo" className="inline-flex mt-4 text-foreground hover:text-foreground/70">
              Watch Demo Video
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
