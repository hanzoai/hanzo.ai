
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Terminal, Braces } from "lucide-react";

const DemoShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              See it in action
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Engineering in Real Time
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Watch how Hanzo accelerates development and delivers better AI experiences with our 
              integrated tools and services.
            </p>
            
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full px-6 py-6 text-white"
            >
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gray-950 p-3 flex items-center border-b border-gray-800">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center bg-gray-800 px-4 py-1 rounded-md text-gray-400 text-sm">
                  <Terminal className="h-4 w-4 mr-2" /> hanzo-demo.tsx
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <pre className="language-typescript">
                  <code className="block text-blue-400">import <span className="text-white">{"{"}</span> <span className="text-green-400">useHanzoAI</span> <span className="text-white">{"}"}</span> from <span className="text-yellow-300">'@hanzo/ai'</span>;</code>
                  <code className="block mt-4 text-blue-400">function <span className="text-purple-400">AIAssistant</span><span className="text-white">()</span> <span className="text-white">{"{"};</span></code>
                  <code className="block ml-4 text-blue-400">const <span className="text-white">{"{"};</span> <span className="text-green-400">assistant, isLoading, error</span> <span className="text-white">{"}"}</span> = <span className="text-purple-400">useHanzoAI</span><span className="text-white">{"({"}</span></code>
                  <code className="block ml-8 text-green-400">model: <span className="text-yellow-300">'gpt-4'</span>,</code>
                  <code className="block ml-8 text-green-400">temperature: <span className="text-orange-400">0.7</span>,</code>
                  <code className="block ml-8 text-green-400">systemPrompt: <span className="text-yellow-300">'You are a helpful AI assistant.'</span></code>
                  <code className="block ml-4 text-white">{"})"}</span>;</code>
                  <code className="block mt-4 ml-4 text-purple-400">return <span className="text-white">(</span></code>
                  <code className="block ml-8 text-white">{"<"}<span className="text-green-400">div</span> <span className="text-blue-400">className</span>=<span className="text-yellow-300">"ai-container"</span>{">"}</code>
                  <code className="block ml-12 text-white">{"{"}<span className="text-purple-400">isLoading</span> ? <span className="text-yellow-300">'Loading...'</span> : <span className="text-purple-400">assistant</span>.response{"}"}</code>
                  <code className="block ml-8 text-white">{"</"}div{">"}</code>
                  <code className="block ml-4 text-white">{")"}</span>;</code>
                  <code className="block text-white">{"}"}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;
