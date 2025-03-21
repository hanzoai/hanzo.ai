
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, FlaskConical, Sparkles } from "lucide-react";

const HanzoCodeFrontier = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30 rounded-xl overflow-hidden border border-purple-500/20"
          >
            <div className="p-8 flex flex-col items-center justify-center h-full min-h-80">
              <Brain className="h-16 w-16 text-purple-400 mb-6" />
              <div className="text-3xl font-bold text-center mb-4">
                Frontier Intelligence
              </div>
              <div className="text-gray-300 text-center">
                Custom-trained models specifically optimized for software development
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                <div className="bg-black/30 rounded-lg p-4 flex items-center">
                  <Cpu className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-sm">Specialized Code Models</span>
                </div>
                <div className="bg-black/30 rounded-lg p-4 flex items-center">
                  <FlaskConical className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-sm">Research-Grade AI</span>
                </div>
                <div className="bg-black/30 rounded-lg p-4 flex items-center">
                  <Sparkles className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-sm">Fine-tuned Reasoning</span>
                </div>
                <div className="bg-black/30 rounded-lg p-4 flex items-center">
                  <Brain className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-sm">Continuous Learning</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Beyond Standard AI Models</h2>
            <p className="text-xl text-gray-300 mb-8">
              Hanzo Code leverages custom-built AI models designed specifically for software development, not just repurposed general-purpose models.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Multi-Model Architecture</h3>
                <p className="text-gray-300">
                  Specialized models for different tasks: code generation, refactoring, debugging, testing, and optimization.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Coding-Specific Training</h3>
                <p className="text-gray-300">
                  Trained on billions of lines of code across all major languages, frameworks, and architectural patterns.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Adaptive Intelligence</h3>
                <p className="text-gray-300">
                  Learns from your codebase and coding style, becoming more personalized and effective over time.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Edge Computing</h3>
                <p className="text-gray-300">
                  Powerful models that can run locally for privacy, or leverage cloud infrastructure for more complex tasks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeFrontier;
