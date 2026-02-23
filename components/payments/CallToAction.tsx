'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { FileText, BookOpen, MessageSquare, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Further</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover how Hanzo Payments can transform your business with our comprehensive resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 flex flex-col"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <FileText className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">API Reference</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Detailed documentation on all Hanzo Payments APIs and integration options.
            </p>
            <Button variant="outline" className="w-full justify-center gap-2 border-gray-700 hover:bg-gray-800 text-[var(--white)]">
              <ExternalLink className="h-4 w-4" />
              <span>View API Docs</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 flex flex-col"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <BookOpen className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hanzo App Marketplace</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Explore hundreds of pre-built integrations and apps for Hanzo Payments.
            </p>
            <Button variant="outline" className="w-full justify-center gap-2 border-gray-700 hover:bg-gray-800 text-[var(--white)]">
              <ExternalLink className="h-4 w-4" />
              <span>Browse Apps</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 flex flex-col"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <MessageSquare className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Checkout Integration</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Step-by-step guide to integrating Hanzo Payments checkout into your website or app.
            </p>
            <Button variant="outline" className="w-full justify-center gap-2 border-gray-700 hover:bg-gray-800 text-[var(--white)]">
              <ExternalLink className="h-4 w-4" />
              <span>Integration Guide</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 flex flex-col"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <BookOpen className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Read success stories from businesses using Hanzo Payments around the world.
            </p>
            <Button variant="outline" className="w-full justify-center gap-2 border-gray-700 hover:bg-gray-800 text-[var(--white)]">
              <ExternalLink className="h-4 w-4" />
              <span>View Case Studies</span>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-white/20 to-white/10 border border-border rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Start Building Your Financial Future Today</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Hanzo Payments helps your team streamline operations, grow faster, and simplify financial complexity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-white to-white/10 hover:from-[#cccccc] hover:to-white"
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-[var(--white)] hover:bg-gray-800"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
