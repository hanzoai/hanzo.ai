
import React from "react";
import { motion } from "framer-motion";
import { Activity, Users, Zap, Cpu, Server, Network } from "lucide-react";

const Scaling = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-red-950/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">
            Scale to Millions of Connections
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Built for massive scale from day one, with no infrastructure management required
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-red-900/20 to-transparent rounded-xl border border-[#fd4444]/20 p-6"
          >
            <Activity className="h-8 w-8 text-[#fd4444] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">High Throughput</h3>
            <p className="text-neutral-300">
              Process millions of messages per second with sub-millisecond latency.
              Perfect for high-frequency data updates and time-sensitive applications.
            </p>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-400 text-sm">Message throughput</span>
                <span className="text-[var(--white)] font-medium">Unlimited</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#fd4444] h-full rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-red-900/20 to-transparent rounded-xl border border-[#fd4444]/20 p-6"
          >
            <Users className="h-8 w-8 text-[#fd4444] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Concurrent Connections</h3>
            <p className="text-neutral-300">
              Support millions of simultaneous client connections with automatic
              scaling. No connection limits or throttling to worry about.
            </p>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-400 text-sm">Connection capacity</span>
                <span className="text-[var(--white)] font-medium">Millions+</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#fd4444] h-full rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-red-900/20 to-transparent rounded-xl border border-[#fd4444]/20 p-6"
          >
            <Network className="h-8 w-8 text-[#fd4444] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Global Edge Network</h3>
            <p className="text-neutral-300">
              Deployed at the edge across 200+ locations worldwide, ensuring
              low-latency connections for users anywhere on the planet.
            </p>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-400 text-sm">Global coverage</span>
                <span className="text-[var(--white)] font-medium">200+ regions</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#fd4444] h-full rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-[var(--black)]/40 rounded-lg border border-gray-800 p-4 flex items-center">
            <Zap className="h-8 w-8 text-[#fd4444] mr-4" />
            <div>
              <h4 className="text-[var(--white)] font-medium">Auto-scaling</h4>
              <p className="text-neutral-400 text-sm">Scales automatically based on demand</p>
            </div>
          </div>

          <div className="bg-[var(--black)]/40 rounded-lg border border-gray-800 p-4 flex items-center">
            <Cpu className="h-8 w-8 text-[#fd4444] mr-4" />
            <div>
              <h4 className="text-[var(--white)] font-medium">High Availability</h4>
              <p className="text-neutral-400 text-sm">99.99% uptime SLA guarantee</p>
            </div>
          </div>

          <div className="bg-[var(--black)]/40 rounded-lg border border-gray-800 p-4 flex items-center">
            <Server className="h-8 w-8 text-[#fd4444] mr-4" />
            <div>
              <h4 className="text-[var(--white)] font-medium">Zero Management</h4>
              <p className="text-neutral-400 text-sm">No servers or infrastructure to manage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scaling;
