
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Cpu, Globe, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Public Cloud Infrastructure. Modern Platform Endorphins.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            The most flexible and powerful compute platform on any public cloud. Hanzo Machines are hardware-virtualized containers, running on our own hardware, that launch instantly and run exactly as long as you want them to — for a single HTTP request, or for weeks of uptime.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-purple-500/30 transition-colors"
          >
            <Globe className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Get Right in Your Users' Faces</h3>
            <p className="text-gray-300">
              Deploy in 35 regions, from Sydney to São Paulo, for sub-100ms response times and native-app feel no matter where your users are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-purple-500/30 transition-colors"
          >
            <Server className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Fork Off VMs Like They're Processes</h3>
            <p className="text-gray-300">
              Hanzo Machines start fast enough to handle HTTP requests, run only when you need them, and scale into tens of thousands of instances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-purple-500/30 transition-colors"
          >
            <Cpu className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Ship GPU-Boosted Models</h3>
            <p className="text-gray-300">
              From LLMs to inferencing, hardware acceleration with the same developer experience as a simple CRUD app.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-purple-900/20 rounded-xl p-8 border border-purple-800/30"
        >
          <div className="flex flex-col md:flex-row items-center">
            <Cloud className="w-14 h-14 text-purple-400 mb-6 md:mb-0 md:mr-8" />
            <div>
              <h3 className="text-xl font-bold mb-3">Built for Distributed Systems</h3>
              <p className="text-gray-300">
                Clustered databases like Hanzo Database, Cockroach, globally-distributed Postgres, and modern RPC systems like Elixir FLAME, no Terraform required.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl p-8 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">By Developers For Developers</h3>
            <p className="text-gray-300 mb-8">
              Paid support packages include a team of actual engineers (not chatbots) who themselves ship code on our platform. Emergency support and guaranteed response times available.
            </p>
            <Button
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-black border-2 border-white"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
