
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, FileText, Server } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start & Grow with Hanzo Balancer</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="w-full gap-2 border-[#fd4444] text-[var(--white)] hover:bg-red-800/20"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="w-full gap-2 border-[#fd4444] text-[var(--white)] hover:bg-red-800/20"
            >
              <FileText className="h-5 w-5" />
              Learn more in Docs
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="w-full gap-2 border-[#fd4444] text-[var(--white)] hover:bg-red-800/20"
            >
              <Server className="h-5 w-5" />
              Get Commercial Support
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fd4444]"
              />
              <Button className="bg-[#fd4444] hover:bg-[#e03e3e]">
                Subscribe
              </Button>
            </div>
            <div className="mt-2 text-left">
              <label className="inline-flex items-center">
                <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-[#fd4444]" />
                <span className="ml-2 text-sm text-neutral-400">
                  I agree to receive communications from Hanzo
                </span>
              </label>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
