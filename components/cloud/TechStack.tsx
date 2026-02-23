'use client'


import React from "react";
import { motion } from "framer-motion";

const techStacks = [
  "Phoenix Framework",
  "SvelteKit",
  "Ruby on Rails",
  "Docker",
  "Go",
  "Rust",
  "Django",
  "Laravel",
  "NextJS"
];

const TechStack = () => {
  return (
    <section id="learn-more" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {techStacks.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-[#ffffff]/50 hover:bg-gray-800 transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Developer-Focused Public Cloud
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Help us build the next public cloud. No, seriously. Is your product something devs can take advantage of to ship better apps? Work with us.
          </p>
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="inline-block px-8 py-4 rounded-lg bg-[var(--white)] text-black font-medium hover:shadow-lg hover:shadow-white/20 transition-all"
          >
            Build A Cloud For Developers
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
