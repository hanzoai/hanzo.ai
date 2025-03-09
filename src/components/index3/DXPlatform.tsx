
import React from "react";
import { motion } from "framer-motion";
import { Bot, Terminal, Code, Braces } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const DXPlatform = () => {
  return (
    <section id="platform" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <ChromeText 
            as="h2" 
            className="text-3xl md:text-5xl font-bold mb-6"
            preHeading="Integrated Developer Experience"
          >
            Hanzo DX Platform
          </ChromeText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An integrated Developer Experience (DX) purpose-built to accelerate software development with intelligent automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hanzo AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Braces className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo AI
            </ChromeText>
            <p className="text-gray-300 mb-4">
              The intelligence engine behind every Hanzo product.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Frontier LLMs, vector search, and advanced reasoning models</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Autonomous workflows that continuously learn and improve</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Accessible via the intuitive @hanzo/ai SDK</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Hanzo Bot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Bot
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Easily build agentic workflows without code.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Drag-and-drop GUI for creating intelligent agents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Continuous learning agents with self-improvement loops</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Autonomous execution of complex tasks and workflows</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Hanzo Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Code
            </ChromeText>
            <p className="text-gray-300 mb-4">
              AI-enhanced IDE integration to amplify developer productivity.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Direct integration with VS Code, Vim, and Emacs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time, context-aware code completion and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Intelligent bug detection and proactive code optimization</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Hanzo Dev */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Terminal className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Hanzo Dev
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Your autonomous AI-powered software engineer.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Task delegation from issue creation to PR completion</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Automatic coding, debugging, reviewing, and testing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Seamless integration into existing CI/CD pipelines</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DXPlatform;
