
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, Code, GitMerge, Users, Terminal, Zap, Database, Brain, Bot, Server } from "lucide-react";

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400 mb-6">
                Built in the Open, For Everyone
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Hanzo is proudly open source. We believe in transparency, collaboration, and community-driven innovation. 
                Everything we build is available for you to use, modify, and contribute to.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Github className="mr-2 h-5 w-5" />
                  <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </Button>
                <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
                  <Star className="mr-2 h-5 w-5" />
                  <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer">Star Platform Repo</a>
                </Button>
                <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
                  <GitBranch className="mr-2 h-5 w-5" />
                  <a href="https://github.com/hanzoai/platform/fork" target="_blank" rel="noopener noreferrer">Fork & Contribute</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our flagship open source technologies that power the Hanzo Platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Platform Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-8 hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Server className="h-12 w-12 text-green-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Hanzo Platform</h3>
                    <div className="flex items-center mt-1">
                      <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300">github.com/hanzoai/platform</a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  The free, forever, open-source version of our cloud infrastructure. Run the entire Hanzo stack locally with a single command.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-gray-300">5.2k stars</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-300">742 forks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-gray-300">Active</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                      <Github className="mr-2 h-4 w-4" /> Repository
                    </a>
                  </Button>
                  <Button 
                    className="flex-1"
                    variant="outline"
                    size="sm"
                  >
                    <a href="/platform" className="flex items-center justify-center w-full">
                      <Terminal className="mr-2 h-4 w-4" /> Learn More
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Bot Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-8 hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Bot className="h-12 w-12 text-green-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Hanzo Bot</h3>
                    <div className="flex items-center mt-1">
                      <a href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300">github.com/hanzoai/bot</a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Agentic framework for building advanced AI assistants with custom tool integration. Create powerful workflows with LLMs.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-gray-300">4.8k stars</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-300">623 forks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-gray-300">Active</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    <a href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                      <Github className="mr-2 h-4 w-4" /> Repository
                    </a>
                  </Button>
                  <Button 
                    className="flex-1"
                    variant="outline"
                    size="sm"
                  >
                    <a href="/bot" className="flex items-center justify-center w-full">
                      <Terminal className="mr-2 h-4 w-4" /> Learn More
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Developer Tools Section */}
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

              {/* App Project */}
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

        {/* Infrastructure Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Components
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The building blocks of the Hanzo Platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vector DB */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Vector DB</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  High-performance vector database designed for AI applications with local and distributed modes.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>3.4k stars</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-4 w-4 mr-1" />
                    <span>410 forks</span>
                  </div>
                  <div className="flex items-center">
                    <GitMerge className="h-4 w-4 mr-1" />
                    <span>Rust</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-green-600/70 hover:bg-green-600"
                >
                  <a href="https://github.com/hanzoai/vector-db" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                    <Github className="mr-2 h-4 w-4" /> View Repository
                  </a>
                </Button>
              </motion.div>

              {/* LLM Runtime */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">LLM Runtime</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Optimized inference engine for running large language models locally with minimal resource usage.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>4.1k stars</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-4 w-4 mr-1" />
                    <span>520 forks</span>
                  </div>
                  <div className="flex items-center">
                    <GitMerge className="h-4 w-4 mr-1" />
                    <span>C++/Python</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-green-600/70 hover:bg-green-600"
                >
                  <a href="https://github.com/hanzoai/llm-runtime" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                    <Github className="mr-2 h-4 w-4" /> View Repository
                  </a>
                </Button>
              </motion.div>

              {/* API Gateway */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">API Gateway</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  High-performance API Gateway for routing, authentication, and rate limiting in AI applications.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>2.8k stars</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-4 w-4 mr-1" />
                    <span>362 forks</span>
                  </div>
                  <div className="flex items-center">
                    <GitMerge className="h-4 w-4 mr-1" />
                    <span>Go</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-green-600/70 hover:bg-green-600"
                >
                  <a href="https://github.com/hanzoai/gateway" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                    <Github className="mr-2 h-4 w-4" /> View Repository
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Section */}
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
                Join Our Community
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with thousands of developers building with Hanzo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 text-center"
              >
                <div className="bg-green-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discord Community</h3>
                <p className="text-gray-300 mb-6">
                  Join 12,000+ developers discussing Hanzo projects and AI development.
                </p>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">Join Discord</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 text-center"
              >
                <div className="bg-green-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Github className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">GitHub Discussions</h3>
                <p className="text-gray-300 mb-6">
                  Ask questions, share ideas, and collaborate on code with our maintainers.
                </p>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">
                  <a href="https://github.com/hanzoai/platform/discussions" target="_blank" rel="noopener noreferrer">Go to Discussions</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 text-center"
              >
                <div className="bg-green-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Contribute</h3>
                <p className="text-gray-300 mb-6">
                  Help us improve Hanzo by contributing code, documentation, or ideas.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://github.com/hanzoai/platform/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributor Guide</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OpenSource;
