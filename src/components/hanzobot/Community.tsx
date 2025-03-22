
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, MessageSquare } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Community and Support</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in building the future of autonomous AI agents with Hanzo!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Next Steps</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded text-purple-400 mr-3 mt-0.5">
                    <div className="w-4 h-4 flex items-center justify-center">1</div>
                  </div>
                  <div>
                    <span className="text-white font-medium">Create Your First Agent</span>
                    <p className="text-gray-400 text-sm mt-1">Follow our guide to build your first AI agent</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded text-purple-400 mr-3 mt-0.5">
                    <div className="w-4 h-4 flex items-center justify-center">2</div>
                  </div>
                  <div>
                    <span className="text-white font-medium">Understand Core Concepts</span>
                    <p className="text-gray-400 text-sm mt-1">Learn about the key components of the Hanzo Bot framework</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded text-purple-400 mr-3 mt-0.5">
                    <div className="w-4 h-4 flex items-center justify-center">3</div>
                  </div>
                  <div>
                    <span className="text-white font-medium">Explore Advanced Features</span>
                    <p className="text-gray-400 text-sm mt-1">Discover how to leverage the full potential of your agents</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col space-y-4">
                <Button 
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
                    Open Source: Contribute on GitHub
                  </a>
                </Button>
                
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  <a href="https://discord.gg/XthHQQj" target="_blank" rel="noopener noreferrer">
                    Join Discord Community
                  </a>
                </Button>
              </div>
              
              <div className="text-gray-400 text-sm">
                <p className="mb-2">Looking for examples?</p>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  View ready-to-use character templates and implementations →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          Last updated on Feb 20, 2025 by jin
        </div>
      </div>
    </section>
  );
};

export default Community;
