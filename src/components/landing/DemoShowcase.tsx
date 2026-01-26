
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Terminal } from "lucide-react";

const DemoShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#fd4444]/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#fd4444]/20 border border-[#fd4444]/30 text-[#ff6b6b] text-sm font-medium mb-6">
              See it in action
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
              AI Engineering in Real Time
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8">
              Watch how Hanzo accelerates development and delivers better AI experiences with our 
              integrated tools and services.
            </p>
            
            <Button 
              className="bg-[#fd4444] hover:bg-[#e03e3e] rounded-full px-6 py-6 text-[var(--white)]"
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
                <div className="flex items-center bg-gray-800 px-4 py-1 rounded-md text-neutral-400 text-sm">
                  <Terminal className="h-4 w-4 mr-2" /> hanzo-demo.tsx
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <pre className="language-typescript">
                  <code className="block text-blue-400">import {"{"} <span className="text-green-400">useHanzoAI</span> {"}"} from <span className="text-yellow-300">'@hanzo/ai'</span>;</code>
                  <code className="block mt-4 text-blue-400">function <span className="text-purple-400">AIAssistant</span><span className="text-[var(--white)]">()</span> <span className="text-[var(--white)]">{"{"}</span></code>
                  <code className="block ml-4 text-blue-400">const {"{"} <span className="text-green-400">assistant, isLoading, error</span> {"}"} = <span className="text-purple-400">useHanzoAI</span>({"{"}</code>
                  <code className="block ml-8 text-green-400">model: <span className="text-yellow-300">'gpt-4'</span>,</code>
                  <code className="block ml-8 text-green-400">temperature: <span className="text-orange-400">0.7</span>,</code>
                  <code className="block ml-8 text-green-400">systemPrompt: <span className="text-yellow-300">'You are a helpful AI assistant.'</span></code>
                  <code className="block ml-4 text-[var(--white)]">{"})"}</code>
                  <code className="block mt-4 ml-4 text-purple-400">return <span className="text-[var(--white)]">(</span></code>
                  <code className="block ml-8 text-[var(--white)]">{"<"}<span className="text-green-400">div</span> <span className="text-blue-400">className</span>=<span className="text-yellow-300">"ai-container"</span>{">"}</code>
                  <code className="block ml-12 text-[var(--white)]">{"{"}<span className="text-purple-400">isLoading</span> ? <span className="text-yellow-300">'Loading...'</span> : <span className="text-purple-400">assistant</span>.response{"}"}</code>
                  <code className="block ml-8 text-[var(--white)]">{"</div>"}</code>
                  <code className="block ml-4 text-[var(--white)]">)</code>
                  <code className="block text-[var(--white)]">{"}"}</code>
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
