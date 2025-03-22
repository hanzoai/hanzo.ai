
import React from "react";
import { motion } from "framer-motion";
import { Github, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of developers building with Hanzo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 text-center"
          >
            <div className="bg-green-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Discord Community</h3>
            <p className="text-gray-300 mb-6">
              Join 12,000+ developers discussing Hanzo projects and AI development.
            </p>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700" size="sm">
              <a href="https://discord.gg/XthHQQj" target="_blank" rel="noopener noreferrer">Join Discord</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 text-center"
          >
            <div className="bg-green-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Github className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">GitHub Discussions</h3>
            <p className="text-gray-300 mb-6">
              Ask questions, share ideas, and collaborate on code with our maintainers.
            </p>
            <Button className="w-full bg-gray-700 hover:bg-gray-600" size="sm">
              <a href="https://github.com/hanzoai/platform/discussions" target="_blank" rel="noopener noreferrer">Go to Discussions</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 text-center"
          >
            <div className="bg-green-500/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Contribute</h3>
            <p className="text-gray-300 mb-6">
              Help us improve Hanzo by contributing code, documentation, or ideas.
            </p>
            <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
              <a href="https://github.com/hanzoai/platform/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributor Guide</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
