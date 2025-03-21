
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Terminal, 
  BookOpen, 
  FileText, 
  Settings, 
  Server, 
  Database, 
  Shield, 
  Search, 
  Download,
  ChevronRight,
  ExternalLink,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sidebar navigation items
const sidebarItems = [
  { label: "Getting Started", icon: <BookOpen className="h-4 w-4" />, active: true },
  { label: "API Reference", icon: <Code className="h-4 w-4" /> },
  { label: "Models & Pricing", icon: <Database className="h-4 w-4" /> },
  { label: "Security", icon: <Shield className="h-4 w-4" /> },
  { label: "Tool Use", icon: <Settings className="h-4 w-4" /> },
  { label: "Deployment", icon: <Server className="h-4 w-4" /> },
  { label: "Examples", icon: <FileText className="h-4 w-4" /> },
];

// Setup steps for the getting started section
const setupSteps = [
  {
    title: "Install Hanzo Dev",
    code: "npm install -g @hanzo/dev",
    description: "Do NOT use sudo npm install -g as this can lead to permission issues."
  },
  {
    title: "Navigate to your project",
    code: "cd your-project-directory",
    description: "Open the terminal and navigate to your project folder."
  },
  {
    title: "Start Hanzo Dev",
    code: "hanzo",
    description: "Run the command to launch the interactive interface."
  },
  {
    title: "Complete authentication",
    code: "",
    description: "Follow the one-time OAuth process with your Hanzo account."
  }
];

const Dev = () => {
  const [activeTab, setActiveTab] = useState<string>("getting-started");
  
  return (
    <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="sticky top-24">
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Hanzo Dev</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Documentation and resources for developers
                </p>
              </div>
              
              <div className="flex lg:hidden mb-6">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Navigate</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <nav className="hidden lg:block space-y-1">
                {sidebarItems.map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm rounded-md group",
                      item.active 
                        ? "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300" 
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50"
                    )}
                  >
                    <span className={cn(
                      "mr-3", 
                      item.active ? "text-purple-500 dark:text-purple-400" : "text-gray-500 dark:text-gray-400"
                    )}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0"
          >
            <div className="prose prose-blue max-w-none dark:prose-invert">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Hanzo Dev Documentation
              </h1>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-md p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bot className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                      Beta Release
                    </h3>
                    <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                      <p>
                        Hanzo Dev is currently in beta. We're gathering developer feedback to improve the experience.
                        Please report any issues directly through our GitHub repository.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4" id="getting-started">
                Getting Started
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Hanzo Dev is an AI developer tool that lives in your terminal, understands your codebase, 
                and helps you code faster through natural language commands.
              </p>
              
              {/* System Requirements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  System Requirements
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Operating Systems</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc ml-4">
                      <li>macOS 10.15+</li>
                      <li>Ubuntu 20.04+/Debian 10+</li>
                      <li>Windows via WSL</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Software</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc ml-4">
                      <li>Node.js 18+</li>
                      <li>git 2.23+ (optional)</li>
                      <li>GitHub or GitLab CLI (optional)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Installation Steps */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Install and Set Up
                </h3>
                
                <div className="space-y-4">
                  {setupSteps.map((step, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <h4 className="ml-3 font-medium text-gray-900 dark:text-white">{step.title}</h4>
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{step.description}</p>
                        {step.code && (
                          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-sm overflow-x-auto">
                            {step.code}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Core Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Core Features
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4">
                    <Code className="h-5 w-5 text-purple-500 mb-2" />
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Understand Code</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ask questions about your codebase architecture, logic, and functions to get immediate insights.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4">
                    <Terminal className="h-5 w-5 text-green-500 mb-2" />
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Execute Commands</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Run tests, linting, and other commands with natural language instructions.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4">
                    <FileText className="h-5 w-5 text-blue-500 mb-2" />
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Edit Files</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Make changes to your code across multiple files with simple natural language requests.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4">
                    <Search className="h-5 w-5 text-amber-500 mb-2" />
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Search & Navigate</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quickly search through git history, find files, and navigate complex codebases.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Example Usage */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Example Usage
                </h3>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm mb-6 overflow-x-auto">
                  <div className="text-gray-500 dark:text-gray-400"># Ask about your codebase</div>
                  <div className="text-gray-900 dark:text-gray-100">hanzo</div>
                  <div className="text-purple-600 dark:text-purple-400">&gt; how does our authentication system work?</div>
                  <div className="mt-2 text-gray-500 dark:text-gray-400"># Fix issues across files</div>
                  <div className="text-purple-600 dark:text-purple-400">&gt; fix the type errors in the auth module</div>
                  <div className="mt-2 text-gray-500 dark:text-gray-400"># Create a commit</div>
                  <div className="text-purple-600 dark:text-purple-400">&gt; commit my changes</div>
                </div>
              </div>
              
              <div className="flex justify-center mt-12">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  <a href="#download">Install Hanzo Dev</a>
                </Button>
                <Button variant="outline" className="ml-4">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <a href="https://github.com/hanzoai/dev" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dev;
