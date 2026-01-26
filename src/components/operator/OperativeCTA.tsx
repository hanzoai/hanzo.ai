import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, ExternalLink } from "lucide-react";

const OperativeCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#fd4444]/10"></div>
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-950 to-transparent"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#fd4444]/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto px-4 py-6 relative z-10 max-w-1618px">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--white)] ">
              Ready to Experience Self-Operating Computing?
            </h2>
            <p className="text-xl text-neutral-300 -6">
              Join the community of developers, researchers, and enthusiasts 
              pioneering the future of human-AI collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center">
              <Button size="sm" className="text-lg px-4 py-2">
                <a href="https://github.com/hanzoai/operative" className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
              <Button size="sm" variant="outline" className="text-lg px-4 py-2 text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
                <a href="https://discord.gg/XthHQQj" className="flex items-center gap-2">
                  Join Discord Community
                </a>
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto">
              <a 
                href="https://blog.hanzo.ai/operative"
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-900/30 transition-colors"
              >
                <ExternalLink className="h-6 w-6 text-[#fd4444] " />
                <span className="text-[var(--white)] font-medium">Read the Blog</span>
              </a>
              <a 
                href="https://twitter.com/hanzoai"
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-900/30 transition-colors"
              >
                <Twitter className="h-6 w-6 text-[#fd4444] " />
                <span className="text-[var(--white)] font-medium">Follow Updates</span>
              </a>
              <a 
                href="https://github.com/hanzoai/operative/contribute"
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-900/30 transition-colors"
              >
                <Github className="h-6 w-6 text-[#fd4444] " />
                <span className="text-[var(--white)] font-medium">Contribute</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperativeCTA;