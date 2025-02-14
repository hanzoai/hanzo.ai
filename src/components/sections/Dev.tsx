
import { motion } from "framer-motion";
import { Settings, Users, Terminal, GitBranch, Database, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dev = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full mb-6">
            <Settings className="h-4 w-4 text-white" />
            <span className="text-sm text-white">Developer Tools</span>
          </div>
          <h2 className="text-4xl font-display text-white mb-4">Built for Developers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete toolkit for modern development with AI assistance, real-time collaboration, and powerful integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">AI-Powered Development</h3>
              <p className="text-gray-300">
                Work alongside intelligent agents that understand your codebase and help you build faster. Our AI tools
                provide real-time suggestions, code completion, and automated testing.
              </p>
            </div>

            <div className="grid gap-6">
              <motion.div 
                className="p-4 bg-white/5 rounded-lg border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Terminal className="h-6 w-6 text-blue-400 mb-2" />
                <h4 className="text-white font-medium mb-2">Smart CLI Tools</h4>
                <p className="text-gray-300 text-sm">
                  Powerful command-line tools for scaffolding, testing, and deployment with AI assistance.
                </p>
              </motion.div>

              <motion.div 
                className="p-4 bg-white/5 rounded-lg border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GitBranch className="h-6 w-6 text-green-400 mb-2" />
                <h4 className="text-white font-medium mb-2">Version Control</h4>
                <p className="text-gray-300 text-sm">
                  Built-in Git integration with AI-powered commit messages and code review suggestions.
                </p>
              </motion.div>

              <motion.div 
                className="p-4 bg-white/5 rounded-lg border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Database className="h-6 w-6 text-purple-400 mb-2" />
                <h4 className="text-white font-medium mb-2">Database Management</h4>
                <p className="text-gray-300 text-sm">
                  Intuitive database tools with schema suggestions and query optimization.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-xl ring-1 ring-white/10">
              <div className="aspect-video bg-black/50 rounded-lg p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-8 w-8 text-blue-400" />
                      <div className="text-white font-medium">AI Assistant</div>
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="h-2 w-2 bg-green-400 rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="p-3 bg-white/5 rounded-lg text-gray-300 text-sm"
                    >
                      Let me help you optimize this query...
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="p-3 bg-blue-500/10 rounded-lg text-blue-300 text-sm ml-auto max-w-[80%]"
                    >
                      Here's the optimized version with proper indexing
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-gray-400 text-sm">AI Agent Collaborating</p>
                <Button variant="outline" className="text-white border-white/20">
                  Try Now
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-white mb-1">24/7</h4>
                <p className="text-gray-400 text-sm">AI Support</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-white mb-1">100ms</h4>
                <p className="text-gray-400 text-sm">Response Time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dev;
