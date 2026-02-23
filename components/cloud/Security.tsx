'use client'


import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle } from "lucide-react";
import { Button } from "@hanzo/ui";

const Security = () => {
  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Shield className="w-16 h-16 text-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enterprise-Ready
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Apps running on Hanzo Machines are KVM hardware-isolated, built on a memory-safe stack and running directly on our own metal.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-6">Enterprise Features</h3>
            <ul className="space-y-4">
              {[
                "Single Sign-On",
                "Guaranteed Support Response Times",
                "SOC 2 audit in progress",
                "Memory-safe Rust and Go stack",
                "CI/CD Integration"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3 mt-1" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/10 rounded-xl p-8 border border-white/30">
              <Lock className="w-12 h-12 text-foreground mb-6" />
              <h3 className="text-xl font-bold mb-4">Hanzo.io Security</h3>
              <p className="text-foreground/80 mb-8">
                Our security team works around the clock to ensure your applications and data are protected. We employ industry-leading practices and regularly undergo independent security audits.
              </p>
              <Button variant="outline" className="bg-transparent text-[var(--white)] hover:bg-[var(--white)] hover:text-primary-foreground border border-white">
                <a href="https://hanzo.ai/security">Security Details</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xl font-semibold mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="h-12 w-32 bg-gray-800/50 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-800/50 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-800/50 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-800/50 rounded-md"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
