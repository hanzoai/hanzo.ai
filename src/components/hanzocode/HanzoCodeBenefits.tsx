
import React from "react";
import { motion } from "framer-motion";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

const HanzoCodeBenefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Like Cursor & Windsurf, But Better</h2>
            <p className="text-xl text-neutral-300 mb-6">
              Hanzo Code gives you all the features you love from Cursor and Windsurf, with intelligence that goes beyond tab completion.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Advanced Code Understanding</h2>
            <p className="text-xl text-neutral-300 mb-6">
              Unlike other AI coding assistants, Hanzo Code builds a complete understanding of your entire codebase, not just the current file.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Natural Language & Contextual Awareness</h2>
            <p className="text-xl text-neutral-300 mb-6">
              Rewrite entire modules with plain English instructions. Our AI understands your context and project architecture better than any other tool.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">True Force Multiplier</h2>
            <p className="text-xl text-neutral-300 mb-6">
              Hanzo Code isn't just an assistant—it's a force multiplier that can scale your productivity by orders of magnitude.
            </p>
            
            <a href="#features" className="text-purple-400 hover:text-purple-300 font-medium">
              See how we compare
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden"
          >
            <div className="h-96 bg-gray-900 flex items-center justify-center p-8">
              <div className="space-y-4 text-left w-full">
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-semibold text-[var(--white)]">What Cursor/Windsurf Users Say:</h3>
                  <p className="text-neutral-300 italic">"I switched to Hanzo Code and my productivity jumped 3x. The agent capabilities are on another level."</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-neutral-300 italic">"Using my favorite VS Code setup with Hanzo's AI has transformed how I approach complex programming tasks."</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="text-neutral-300 italic">"Running parallel agent instances to solve different parts of the same problem simultaneously is a game-changer."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeBenefits;
