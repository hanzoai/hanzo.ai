
import React from "react";
import { motion } from "framer-motion";

const Architecture = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">Architecture</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A modular system designed for flexibility and extensibility
          </p>
          <div className="text-sm text-neutral-400 mt-2">
            Source: <a href="https://x.com/0xCygaar/status/1874575841763770492" className="text-[#fd4444] hover:text-[#ff6b6b]">https://x.com/0xCygaar/status/1874575841763770492</a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="relative overflow-hidden rounded-lg bg-[var(--black)]/50 p-6 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fd4444]/10 to-[#ff6b6b]/10"></div>
              <div className="relative z-10 text-center">
                <div className="text-2xl font-bold text-[var(--white)] mb-4">Modular Architecture</div>
                <p className="text-neutral-400">Visualization of the Hanzo Bot architecture would appear here</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Character Files</h3>
              <p className="text-neutral-400">
                Contains the agent's personality, backstory, knowledge, and topics to discuss. 
                It also defines which clients, models, and plugins to load.
              </p>
            </div>
            
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Database</h3>
              <p className="text-neutral-400">
                Stores relevant information for generating responses, including previous interactions 
                and embeddings. Essential for contextual responses.
              </p>
            </div>
            
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Runtime</h3>
              <p className="text-neutral-400">
                The core agent logic that coordinates between modules and external services. 
                It processes inputs through the LLM and generates responses or action items.
              </p>
            </div>
            
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Clients</h3>
              <p className="text-neutral-400">
                The platforms where agents interact with users (Discord, Twitter, Slack, Farcaster). 
                Agents can run on multiple clients simultaneously.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
