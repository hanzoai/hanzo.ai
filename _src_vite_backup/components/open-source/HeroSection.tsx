
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Star, GitBranch } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fd4444] to-[#ff6b6b] mb-6">
            Built in the Open, For Everyone
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Hanzo is proudly open source. We believe in transparency, collaboration, and community-driven innovation.
            Everything we build is available for you to use, modify, and contribute to.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="sm"
              className="bg-[#fd4444] hover:bg-[#e03e3e]"
            >
              <Github className="mr-2 h-4 w-4" />
              <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#fd4444]/30 text-[var(--white)] hover:bg-[#fd4444]/10"
            >
              <Star className="mr-2 h-4 w-4" />
              <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer">Star Platform Repo</a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#fd4444]/30 text-[var(--white)] hover:bg-[#fd4444]/10"
            >
              <GitBranch className="mr-2 h-4 w-4" />
              <a href="https://github.com/hanzoai/platform/fork" target="_blank" rel="noopener noreferrer">Fork & Contribute</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
