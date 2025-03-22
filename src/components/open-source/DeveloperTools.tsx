
import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, GitMerge, Code, Users, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeveloperTools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Developer Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools and libraries that enhance developer productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dev Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Hanzo Dev</h3>
            </div>
            <p className="text-gray-300 mb-6">
              AI-powered software engineering assistant that helps you write, debug, and document code.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>3.2k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-4 w-4 mr-1" />
                <span>412 forks</span>
              </div>
              <div className="flex items-center">
                <GitMerge className="h-4 w-4 mr-1" />
                <span>TypeScript</span>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-green-600/70 hover:bg-green-600"
            >
              <a href="https://github.com/hanzoai/dev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </motion.div>

          {/* Team Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Hanzo Team</h3>
            </div>
            <p className="text-gray-300 mb-6">
              An integrated collaboration platform with AI-powered tools for remote teams.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>2.7k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-4 w-4 mr-1" />
                <span>289 forks</span>
              </div>
              <div className="flex items-center">
                <GitMerge className="h-4 w-4 mr-1" />
                <span>TypeScript</span>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-green-600/70 hover:bg-green-600"
            >
              <a href="https://github.com/hanzoai/team" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </motion.div>

          {/* CLI Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <Terminal className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Hanzo CLI</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Command-line interface for scaffolding and managing Hanzo applications. Create, deploy, and manage with ease.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>1.9k stars</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="h-4 w-4 mr-1" />
                <span>213 forks</span>
              </div>
              <div className="flex items-center">
                <GitMerge className="h-4 w-4 mr-1" />
                <span>JavaScript</span>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-green-600/70 hover:bg-green-600"
            >
              <a href="https://github.com/hanzoai/cli" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
            <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-5 w-5" /> View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
