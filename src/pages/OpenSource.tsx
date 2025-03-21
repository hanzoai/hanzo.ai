
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, Code, GitMerge, Users } from "lucide-react";

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
                  View on GitHub
                </Button>
                <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
                  <Star className="mr-2 h-5 w-5" />
                  Star Our Repos
                </Button>
                <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
                  <GitBranch className="mr-2 h-5 w-5" />
                  Contribute
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
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
                Our Open Source Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our growing ecosystem of developer tools and AI components
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
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
                <div className="flex items-center justify-between text-sm text-gray-400">
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
              </motion.div>

              {/* Project Card 2 */}
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
                <div className="flex items-center justify-between text-sm text-gray-400">
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
              </motion.div>

              {/* Project Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <GitMerge className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Hanzo Bot</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Agentic framework for building advanced AI assistants with custom tool integration.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>4.5k stars</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-4 w-4 mr-1" />
                    <span>623 forks</span>
                  </div>
                  <div className="flex items-center">
                    <GitMerge className="h-4 w-4 mr-1" />
                    <span>Python</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
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
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Join Discord</Button>
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
                <Button className="w-full bg-gray-700 hover:bg-gray-600">Go to Discussions</Button>
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
                <Button className="w-full bg-green-600 hover:bg-green-700">Contributor Guide</Button>
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
