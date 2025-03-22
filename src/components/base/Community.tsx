
import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, MessagesSquare, Facebook, Linkedin, Instagram } from "lucide-react";

const Community = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Join our Developer Community
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/hanzoai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
            >
              <Github className="mr-2 h-5 w-5 text-white" />
              <span className="text-white">GitHub</span>
            </a>
            <a 
              href="https://discord.gg/XthHQQj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
            >
              <MessagesSquare className="mr-2 h-5 w-5 text-white" />
              <span className="text-white">Discord</span>
            </a>
            <a 
              href="https://twitter.com/hanzoai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
            >
              <Twitter className="mr-2 h-5 w-5 text-white" />
              <span className="text-white">Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
