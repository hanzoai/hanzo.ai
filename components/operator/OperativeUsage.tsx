'use client'


import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { Button } from "@hanzo/ui";

const OperativeUsage = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="get-started">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
              Getting Started with Hanzo Operative
            </h2>
            <p className="text-xl text-foreground/80">
              Set up your environment in minutes and start using AI to operate your computer
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-[var(--white)] mb-4">Installation</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground mb-2">1. Install Hanzo tools</p>
                  <div className="bg-gray-900 rounded-md p-3 font-mono text-sm text-[var(--white)] overflow-x-auto">
                    curl -fsSL hanzo.sh | bash
                  </div>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-2">2. Run the operative</p>
                  <div className="bg-gray-900 rounded-md p-3 font-mono text-sm text-[var(--white)] overflow-x-auto">
                    operative
                  </div>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-2">3. Enter your API key when prompted</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button size="sm" variant="outline" className="text-foreground/80 border-gray-700">
                  <Terminal className="h-4 w-4 mr-2" />
                  Copy Installation Commands
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-[var(--white)] mb-4">System Requirements</h3>
              
              <ul className="space-y-2 text-muted-foreground">
                <li>• macOS, Windows, or Linux (with X server)</li>
                <li>• Python 3.8 or higher</li>
                <li>• 8GB RAM recommended</li>
                <li>• Internet connection for API access</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-gray-900/30 border border-gray-800 rounded-xl p-6 h-full"
          >
            <h3 className="text-xl font-semibold text-[var(--white)] mb-4">Basic Usage</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-2">Running with default settings (GPT-5)</p>
                <div className="bg-gray-900 rounded-md p-3 font-mono text-sm text-[var(--white)] overflow-x-auto">
                  operative
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2">Using voice input mode</p>
                <div className="bg-gray-900 rounded-md p-3 font-mono text-sm text-[var(--white)] overflow-x-auto">
                  operative --voice
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2">Using OCR mode for enhanced element detection</p>
                <div className="bg-gray-900 rounded-md p-3 font-mono text-sm text-[var(--white)] overflow-x-auto">
                  operative -m gpt-5-with-ocr
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2">Using Set-of-Mark (SoM) prompting</p>
                <div className="bg-gray-900 rounded-md p-3 font-mono text-sm text-[var(--white)] overflow-x-auto">
                  operative -m gpt-5-with-som
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-muted-foreground">After running any of these commands, you'll be prompted to enter an objective for the AI to accomplish.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperativeUsage;
