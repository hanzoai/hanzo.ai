'use client'


import React from "react";
import { motion } from "framer-motion";
import { Check, Code2, PanelLeft, Plug, Settings, Shield } from "lucide-react";

const HanzoCodeCompatibility = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Universal Compatibility</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Enhance any VS Code-compatible editor with Hanzo's intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Works With Your Favorite Editors</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[var(--white)]">VS Code:</span>
                  <span className="text-neutral-300 ml-2">Native integration with full feature support</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[var(--white)]">Cursor:</span>
                  <span className="text-neutral-300 ml-2">Augment Cursor's AI capabilities with Hanzo's advanced agentic features</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[var(--white)]">Windsurf:</span>
                  <span className="text-neutral-300 ml-2">Add Hanzo's intelligence layer on top of Windsurf's editor experience</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[var(--white)]">Void:</span>
                  <span className="text-neutral-300 ml-2">Perfect complement to Void's streamlined experience</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[var(--white)]">Any VS Code-compatible editor:</span>
                  <span className="text-neutral-300 ml-2">If it supports VS Code extensions, it supports Hanzo Code</span>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800">
                <PanelLeft className="h-10 w-10 text-[#ffffff] mb-4" />
                <h4 className="text-lg font-semibold mb-2">Extension API</h4>
                <p className="text-neutral-300 text-sm">Seamless integration with standard VS Code extension API</p>
              </div>
              
              <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800">
                <Code2 className="h-10 w-10 text-[#ffffff] mb-4" />
                <h4 className="text-lg font-semibold mb-2">Native Experience</h4>
                <p className="text-neutral-300 text-sm">Feels like a native part of your existing editor</p>
              </div>
              
              <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800">
                <Plug className="h-10 w-10 text-[#ffffff] mb-4" />
                <h4 className="text-lg font-semibold mb-2">Plugin System</h4>
                <p className="text-neutral-300 text-sm">Extend with custom plugins for your workflow</p>
              </div>
              
              <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800">
                <Shield className="h-10 w-10 text-[#ffffff] mb-4" />
                <h4 className="text-lg font-semibold mb-2">Enterprise Ready</h4>
                <p className="text-neutral-300 text-sm">Security and compliance features for teams</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeCompatibility;
