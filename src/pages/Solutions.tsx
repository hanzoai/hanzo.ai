
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, FileText, ExternalLink, Mail, Phone, Users, BookOpen, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/zen/SectionHeader";
import ChromeText from "@/components/ui/chrome-text";
import CallToAction from "@/components/index3/CallToAction";

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ChromeText as="h1" className="text-4xl sm:text-5xl font-bold mb-6">
              Enterprise Solutions
            </ChromeText>
            <p className="text-gray-400 text-lg">
              Hanzo delivers a unified ecosystem of AI Cloud infrastructure, developer platforms, and expert consulting 
              to transform how enterprises build, deploy, and scale next-generation applications.
            </p>
          </div>

          {/* Main Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-r from-purple-800/30 to-blue-800/30 flex items-center justify-center">
                <ChromeText as="h2" className="text-3xl font-bold">
                  Capabilities
                </ChromeText>
              </div>
              <div className="p-8">
                <p className="text-gray-300 mb-6">
                  Discover our comprehensive suite of technical capabilities that empower your organization to innovate
                  and transform. From AI and cloud infrastructure to custom development solutions, we provide everything
                  you need to stay ahead.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 bg-purple-900/40 rounded-full text-sm text-purple-300 border border-purple-500/30">
                    AI Engineering
                  </span>
                  <span className="px-3 py-1 bg-blue-900/40 rounded-full text-sm text-blue-300 border border-blue-500/30">
                    Cloud Infrastructure
                  </span>
                  <span className="px-3 py-1 bg-green-900/40 rounded-full text-sm text-green-300 border border-green-500/30">
                    Data Analytics
                  </span>
                  <span className="px-3 py-1 bg-pink-900/40 rounded-full text-sm text-pink-300 border border-pink-500/30">
                    Digital Experiences
                  </span>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link to="/solutions/capabilities">
                    Explore Our Capabilities <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-2xl border border-blue-500/20 overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-r from-blue-800/30 to-indigo-800/30 flex items-center justify-center">
                <ChromeText as="h2" className="text-3xl font-bold">
                  Industries
                </ChromeText>
              </div>
              <div className="p-8">
                <p className="text-gray-300 mb-6">
                  Our industry-specific expertise helps organizations across sectors overcome unique challenges and seize
                  opportunities. We combine deep domain knowledge with cutting-edge technology to deliver tailored
                  solutions for your business.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-sm text-indigo-300 border border-indigo-500/30">
                    Financial Services
                  </span>
                  <span className="px-3 py-1 bg-green-900/40 rounded-full text-sm text-green-300 border border-green-500/30">
                    Healthcare
                  </span>
                  <span className="px-3 py-1 bg-amber-900/40 rounded-full text-sm text-amber-300 border border-amber-500/30">
                    Retail
                  </span>
                  <span className="px-3 py-1 bg-teal-900/40 rounded-full text-sm text-teal-300 border border-teal-500/30">
                    Technology
                  </span>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/solutions/industries">
                    Explore Our Industry Solutions <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Unified AI Cloud Section */}
          <div className="mb-24">
            <SectionHeader 
              title="Unified AI Cloud" 
              description="One platform to build, deploy, and scale your AI applications" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Enterprise Infrastructure</h3>
                <p className="text-gray-300">
                  Scalable, secure infrastructure designed for enterprise AI workloads, with global availability, 
                  compliance-ready security, and managed services.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Developer Experience</h3>
                <p className="text-gray-300">
                  Comprehensive tooling and frameworks that accelerate development, simplify deployments, and reduce 
                  time-to-market for AI-powered applications.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-green-900/20 to-green-900/5 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Expert Services</h3>
                <p className="text-gray-300">
                  Access to industry and technical experts who help you strategize, implement, and optimize your AI 
                  initiatives for maximum business impact.
                </p>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link to="/cloud">
                  Explore Our AI Cloud Platform <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Expert Services Section */}
          <div className="mb-24 bg-gradient-to-br from-gray-900/70 to-black/90 p-10 rounded-2xl border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="p-6 bg-gradient-to-br from-purple-900/50 to-blue-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="p-3 rounded-lg bg-purple-500/20 self-start inline-block mb-4">
                  <Users className="h-6 w-6 text-purple-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Hanzo Agency</h3>
                <p className="text-gray-300 mb-5">
                  Our AI-powered creative agency helps brands transform their digital presence with cutting-edge design, 
                  content, and marketing strategies powered by artificial intelligence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://hanzo.agency" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-md text-white transition-colors"
                  >
                    <span>Visit Hanzo Agency</span>
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href="/contact" 
                    className="flex items-center gap-2 px-5 py-2.5 border border-purple-500/40 hover:border-purple-500 rounded-md text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Contact us</span>
                    <Mail size={14} />
                  </a>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-900/50 to-teal-900/30 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="p-3 rounded-lg bg-green-500/20 self-start inline-block mb-4">
                  <Shield className="h-6 w-6 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Sensei Group</h3>
                <p className="text-gray-300 mb-5">
                  Our collective of fractional CXOs and industry experts help enterprises implement transformative 
                  technology solutions and drive strategic growth initiatives.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://sensei.group" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 rounded-md text-white transition-colors"
                  >
                    <span>Visit Sensei Group</span>
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center gap-2 px-5 py-2.5 border border-green-500/40 hover:border-green-500 rounded-md text-green-400 hover:text-green-300 transition-colors"
                  >
                    <span>Schedule a call</span>
                    <Phone size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <CallToAction />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
