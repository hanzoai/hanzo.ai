
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
              <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </Button>
            <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
              <Star className="mr-2 h-5 w-5" />
              <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer">Star Platform Repo</a>
            </Button>
            <Button size="lg" variant="outline" className="border-green-500/30 text-white hover:bg-green-800/30">
              <GitBranch className="mr-2 h-5 w-5" />
              <a href="https://github.com/hanzoai/platform/fork" target="_blank" rel="noopener noreferrer">Fork & Contribute</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
