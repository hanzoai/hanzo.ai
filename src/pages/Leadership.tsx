
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Database, BookOpen, Linkedin, Github, Twitter } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import { Toaster } from "@/components/ui/toaster";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Leadership - Hanzo AI</title>
        <meta name="description" content="Meet the leadership team at Hanzo AI, a Techstars company founded in 2013 to democratize access to AI." />
      </Helmet>
      <Navbar />
      <main>
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                Founded in 2013 • Techstars Company
              </div>
              <ChromeText 
                as="h1" 
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Our Leadership
              </ChromeText>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the team behind Hanzo AI, founded in 2013 to democratize access to Amazon-level AI infrastructure for everyone.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start mb-6">
                  <div className="w-32 h-32 rounded-xl bg-gray-800 mb-4 md:mb-0 md:mr-6"></div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Michael Kelling</h2>
                    <p className="text-gray-400 font-medium mb-4">Chief Executive Officer</p>
                    <p className="text-gray-300 mb-6">
                      As CEO, Michael leads Hanzo's mission to democratize access to AI with a focus on sustainable, responsible technology that empowers developers worldwide.
                    </p>
                    <div className="flex space-x-3">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Linkedin className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Twitter className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Github className="h-5 w-5 text-gray-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start mb-6">
                  <div className="w-32 h-32 rounded-xl bg-gray-800 mb-4 md:mb-0 md:mr-6"></div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Zach Kelling</h2>
                    <p className="text-gray-400 font-medium mb-4">Chief Technology Officer</p>
                    <p className="text-gray-300 mb-6">
                      As CTO, Zach architects Hanzo's cutting-edge AI infrastructure, bringing deep technical expertise to create scalable, reliable solutions that power our platform.
                    </p>
                    <div className="flex space-x-3">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Linkedin className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Twitter className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Github className="h-5 w-5 text-gray-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-8">
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg">
                    Founded in 2013, Hanzo AI began with a clear mission: to democratize access to advanced AI infrastructure that was previously only available to tech giants like Amazon and Google.
                  </p>
                  <p className="text-lg">
                    As a proud Techstars company, we've combined cutting-edge technology with a developer-first mindset to create an AI engineering platform that empowers businesses of all sizes to harness the power of artificial intelligence.
                  </p>
                  <p className="text-lg">
                    Today, our team continues to push the boundaries of what's possible with AI, while maintaining our core values of sustainability, accessibility, and responsible innovation.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                We're always looking for talented individuals who share our passion for AI and technology. 
                Explore our open positions and become part of building the future of AI.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400"
              >
                <a href="/careers">View Open Positions</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Leadership;
