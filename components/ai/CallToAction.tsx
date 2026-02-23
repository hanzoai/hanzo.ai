'use client'


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, BookOpen, MessageCircle } from 'lucide-react';
import { Button } from "@hanzo/ui";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-[#ffffff]/5 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[#ff6b6b]/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--white)] mb-6">
              Start Building the Future of AI
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join thousands of developers and companies who are building intelligent, 
              scalable applications with Hanzo's AI Engineering Platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-[#ffffff] hover:bg-[#cccccc]">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-[var(--white)]">
              Schedule a Demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/40 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-[#ffffff]/10 flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-[#ffffff]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-3">Documentation</h3>
            <p className="text-neutral-400 mb-6">
              Comprehensive guides, tutorials, and API references to help you build with Hanzo AI.
            </p>
            <a href="#" className="flex items-center text-[#ffffff] hover:text-[#ff6b6b] group">
              Explore Docs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/40 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-[#ffffff]/10 flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-[#ffffff]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-3">Quickstart</h3>
            <p className="text-neutral-400 mb-6">
              Get up and running quickly with our step-by-step quickstart guides and example projects.
            </p>
            <a href="#" className="flex items-center text-[#ffffff] hover:text-[#ff6b6b] group">
              Try Quickstart
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/40 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-[#ffffff]/10 flex items-center justify-center mb-6">
              <MessageCircle className="h-6 w-6 text-[#ffffff]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-3">Community</h3>
            <p className="text-neutral-400 mb-6">
              Join our growing community of AI engineers, get support, and share your experiences.
            </p>
            <a href="#" className="flex items-center text-[#ffffff] hover:text-[#ff6b6b] group">
              Join Community
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 border border-gray-800 rounded-xl p-6 bg-gradient-to-r from-[#ffffff]/10 to-[#ff6b6b]/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-[var(--white)] mb-2">Ready to get started?</h3>
              <p className="text-neutral-300">Sign up for free and start building with Hanzo AI today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#ffffff] hover:bg-[#cccccc]">
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" className="text-[var(--white)]">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
