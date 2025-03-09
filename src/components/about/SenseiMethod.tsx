
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, BarChart3, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SenseiMethod = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
              Principles in Practice
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Sensei Method
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              A practical framework for applying AI and data to achieve exponential growth for businesses.
              If the "Zen of Hanzo" is the theory, the Sensei Method is the practice.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-purple-900/30 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Identify First-Principle Goals</h3>
                  <p className="text-gray-300">Drill down to the fundamental objectives that drive real value.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-purple-900/30 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Rapid Prototyping</h3>
                  <p className="text-gray-300">Build quickly, test assumptions, and iterate with purpose.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-purple-900/30 rounded-lg mr-4">
                  <BarChart3 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Data-Driven Decisions</h3>
                  <p className="text-gray-300">Measure impact, analyze patterns, and let insights guide strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-purple-900/30 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Sensei Mentorship</h3>
                  <p className="text-gray-300">Work directly with expert "senseis" to implement and refine your approach.</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white"
            >
              <a href="https://sensei.group" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Visit Sensei Group
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-1">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Sensei Method in action" 
                  className="w-full h-auto rounded-t-xl"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">The Impact of Sensei</h3>
                  <p className="text-gray-300 mb-6">
                    Through the Sensei Method and Sensei Group, we've helped clients generate over $1 billion in revenue,
                    launch groundbreaking products, and build scalable businesses.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                      <span className="text-2xl font-bold text-purple-300">$1B+</span>
                      <p className="text-sm text-gray-400">Client Revenue</p>
                    </div>
                    <div className="bg-blue-900/30 px-4 py-2 rounded-lg">
                      <span className="text-2xl font-bold text-blue-300">100+</span>
                      <p className="text-sm text-gray-400">Product Launches</p>
                    </div>
                    <div className="bg-green-900/30 px-4 py-2 rounded-lg">
                      <span className="text-2xl font-bold text-green-300">10+</span>
                      <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SenseiMethod;
