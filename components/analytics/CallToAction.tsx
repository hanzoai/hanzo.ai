'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, LineChart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-70"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-white/10 p-3 rounded-full border border-white/30 text-white mb-6">
            <LineChart className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Analyzing Smarter, Today</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Empower your business decisions with Hanzo Analytics—start for free and scale effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" className="text-lg px-10 py-6 bg-white hover:bg-[#cccccc] border-none">
                Start Free Trial
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" className="text-lg px-10 py-6">
                <span className="flex items-center">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Rapid Implementation",
              description: "Get up and running in minutes with our easy-to-use SDKs and APIs."
            },
            {
              title: "Scale With Confidence",
              description: "From startups to enterprises, Hanzo Analytics grows with your business."
            },
            {
              title: "24/7 Support",
              description: "Our expert team and vibrant community are always ready to help."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/20 p-6 rounded-xl border border-gray-800 hover:border-white/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center text-neutral-400 text-sm"
        >
          No credit card required. Free trial includes all premium features for 14 days.
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
