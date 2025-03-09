
import React from "react";
import { motion } from "framer-motion";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

const HanzoCodeBenefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Tab, tab, tab</h2>
            <p className="text-xl text-gray-300 mb-6">
              Hanzo Code lets you breeze through changes by predicting your next edit.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Knows your codebase</h2>
            <p className="text-xl text-gray-300 mb-6">
              Get answers from your codebase or refer to files or docs. Use the model's code in one click.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Edit in natural language</h2>
            <p className="text-xl text-gray-300 mb-6">
              Hanzo Code lets you write code using instructions. Update entire classes or functions with a simple prompt.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Build software faster</h2>
            <p className="text-xl text-gray-300 mb-6">
              Intelligent, fast, and familiar, Hanzo Code is the best way to code with AI.
            </p>
            
            <a href="#features" className="text-purple-400 hover:text-purple-300 font-medium">
              See more features
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden"
          >
            <div className="h-96 bg-gray-900">
              {/* This would be a video or animation showcasing the features */}
              <div className="flex items-center justify-center h-full text-gray-500">
                Code Editor Preview
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeBenefits;
