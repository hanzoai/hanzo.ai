
import React from "react";
import { motion } from "framer-motion";
import { Chrome, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Extensions = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--white)]">
            Available everywhere you code
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Use Hanzo in your browser or directly in VS Code for a seamless development experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Chrome className="h-10 w-10 text-purple-500 mr-4" />
              <h3 className="text-2xl font-bold text-[var(--white)]">Browser Extensions</h3>
            </div>
            
            <p className="text-neutral-300 mb-6">
              Access Hanzo AI directly in your browser for seamless web development and browsing assistance.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-gray-700 text-[var(--white)] hover:bg-gray-800">
                <Chrome className="mr-2 h-4 w-4" />
                Chrome Extension
              </Button>
              <Button variant="outline" className="border-gray-700 text-[var(--white)] hover:bg-gray-800">
                <Chrome className="mr-2 h-4 w-4" />
                Firefox Add-on
              </Button>
              <Button variant="outline" className="border-gray-700 text-[var(--white)] hover:bg-gray-800">
                <Chrome className="mr-2 h-4 w-4" />
                Edge Extension
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Code className="h-10 w-10 text-purple-500 mr-4" />
              <h3 className="text-2xl font-bold text-[var(--white)]">VS Code Extension</h3>
            </div>
            
            <p className="text-neutral-300 mb-6">
              Supercharge your development workflow with Hanzo AI integrated directly in VS Code.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button className="bg-purple-600 hover:bg-purple-500 text-[var(--white)]">
                <Code className="mr-2 h-4 w-4" />
                Install for VS Code
              </Button>
              <Button variant="outline" className="border-gray-700 text-[var(--white)] hover:bg-gray-800">
                Learn more about Hanzo Code
              </Button>
            </div>
            
            <p className="text-neutral-400 mt-6 text-sm">
              Hanzo Code offers dedicated features for developers. Explore our separate Hanzo Code editor for an even more powerful experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
