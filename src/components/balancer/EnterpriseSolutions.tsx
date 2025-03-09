
import React from "react";
import { motion } from "framer-motion";
import { Building2, Shield, FileCode, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const EnterpriseSolutions = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Power your mission-critical applications with enterprise-grade features designed for reliability, security, and compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-xl border border-gray-700/50"
          >
            <div className="flex items-start mb-6">
              <div className="bg-purple-900/20 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Enhanced Security Suite</h3>
                <p className="text-gray-300">
                  Advanced WAF protection, multi-factor authentication, and zero-trust network access controls to protect your infrastructure from sophisticated threats.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-900/20 p-3 rounded-full mr-4">
                <Building2 className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">High Availability Clustering</h3>
                <p className="text-gray-300">
                  Multi-region and multi-zone failover capabilities with automated health checks and self-healing for 99.99% uptime SLAs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-xl border border-gray-700/50"
          >
            <div className="flex items-start mb-6">
              <div className="bg-purple-900/20 p-3 rounded-full mr-4">
                <FileCode className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Advanced Traffic Policies</h3>
                <p className="text-gray-300">
                  Sophisticated traffic management with circuit breaking, API rate limiting, and content-based routing for granular control.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-900/20 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Enterprise Support</h3>
                <p className="text-gray-300">
                  24/7/365 priority support, dedicated technical account managers, and professional services to ensure your success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8"
          >
            Request Enterprise Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
