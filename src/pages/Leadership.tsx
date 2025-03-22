
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
                      <a href="https://linkedin.com/company/hanzo-ai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Linkedin className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://twitter.com/hanzoai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Twitter className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Github className="h-5 w-5 text-gray-300" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="flex items-center text-sm px-3 py-1 bg-gray-800/50 rounded-full">
                    <Briefcase className="h-4 w-4 mr-2 text-purple-400" />
                    <span>20+ years experience</span>
                  </div>
                  <div className="flex items-center text-sm px-3 py-1 bg-gray-800/50 rounded-full">
                    <Database className="h-4 w-4 mr-2 text-blue-400" />
                    <span>AI Infrastructure</span>
                  </div>
                  <div className="flex items-center text-sm px-3 py-1 bg-gray-800/50 rounded-full">
                    <BookOpen className="h-4 w-4 mr-2 text-green-400" />
                    <span>3x Startup Founder</span>
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
                    <h2 className="text-2xl font-bold mb-1">Sarah Chen</h2>
                    <p className="text-gray-400 font-medium mb-4">Chief Technology Officer</p>
                    <p className="text-gray-300 mb-6">
                      Sarah drives Hanzo's technical vision and engineering culture, bringing expertise from her background at leading AI research labs and tech companies.
                    </p>
                    <div className="flex space-x-3">
                      <a href="https://linkedin.com/company/hanzo-ai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Linkedin className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://twitter.com/hanzoai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Twitter className="h-5 w-5 text-gray-300" />
                      </a>
                      <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <Github className="h-5 w-5 text-gray-300" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="flex items-center text-sm px-3 py-1 bg-gray-800/50 rounded-full">
                    <Briefcase className="h-4 w-4 mr-2 text-purple-400" />
                    <span>15+ years experience</span>
                  </div>
                  <div className="flex items-center text-sm px-3 py-1 bg-gray-800/50 rounded-full">
                    <Database className="h-4 w-4 mr-2 text-blue-400" />
                    <span>ML Systems</span>
                  </div>
                  <div className="flex items-center text-sm px-3 py-1 bg-gray-800/50 rounded-full">
                    <BookOpen className="h-4 w-4 mr-2 text-green-400" />
                    <span>Ph.D. in Computer Science</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We're always looking for talented individuals who are passionate about AI and building the future of technology.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Leadership;
