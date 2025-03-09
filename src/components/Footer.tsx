
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="text-white font-bold text-2xl">Hanzo</Link>
            <p className="text-gray-400 max-w-xs">
              Build the future of AI with Hanzo's powerful suite of tools designed for modern development teams.
            </p>
            <div className="flex space-x-5">
              <a href="https://github.com/hanzo" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/hanzo" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/hanzo" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Platform</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/platform" className="text-base text-gray-400 hover:text-gray-300">AI Platform</Link></li>
                  <li><Link to="/platform#ai" className="text-base text-gray-400 hover:text-gray-300">AI</Link></li>
                  <li><Link to="/platform#bot" className="text-base text-gray-400 hover:text-gray-300">Bot</Link></li>
                  <li><Link to="/platform#code" className="text-base text-gray-400 hover:text-gray-300">Code</Link></li>
                  <li><Link to="/dev" className="text-base text-gray-400 hover:text-gray-300">Dev</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Cloud</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/cloud" className="text-base text-gray-400 hover:text-gray-300">AI Cloud</Link></li>
                  <li><Link to="/cloud#compute" className="text-base text-gray-400 hover:text-gray-300">Compute</Link></li>
                  <li><Link to="/cloud#analytics" className="text-base text-gray-400 hover:text-gray-300">Analytics</Link></li>
                  <li><Link to="/cloud#database" className="text-base text-gray-400 hover:text-gray-300">Database</Link></li>
                  <li><Link to="/database" className="text-base text-gray-400 hover:text-gray-300">Hanzo Database</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/pricing" className="text-base text-gray-400 hover:text-gray-300">Pricing</Link></li>
                  <li><a href="https://docs.hanzo.ai" className="text-base text-gray-400 hover:text-gray-300">Documentation</a></li>
                  <li><a href="https://api.hanzo.ai" className="text-base text-gray-400 hover:text-gray-300">API Reference</a></li>
                  <li><a href="https://discord.gg/hanzo" className="text-base text-gray-400 hover:text-gray-300">Community</a></li>
                  <li><a href="https://blog.hanzo.ai" className="text-base text-gray-400 hover:text-gray-300">Blog</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-gray-400 hover:text-gray-300">About</Link></li>
                  <li><Link to="/team" className="text-base text-gray-400 hover:text-gray-300">Team</Link></li>
                  <li><Link to="/careers" className="text-base text-gray-400 hover:text-gray-300">Careers</Link></li>
                  <li><a href="mailto:contact@hanzo.ai" className="text-base text-gray-400 hover:text-gray-300">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} Hanzo, Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <motion.a 
              href="/privacy" 
              className="text-sm text-gray-500 hover:text-gray-400"
              whileHover={{ y: -1 }}
            >
              Privacy
            </motion.a>
            <motion.a 
              href="/terms" 
              className="text-sm text-gray-500 hover:text-gray-400"
              whileHover={{ y: -1 }}
            >
              Terms
            </motion.a>
            <motion.a 
              href="/security" 
              className="text-sm text-gray-500 hover:text-gray-400"
              whileHover={{ y: -1 }}
            >
              Security
            </motion.a>
            <motion.span
              initial={{ opacity: 0.8 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.05,
                color: "#a855f7" 
              }}
              className="text-sm text-gray-500 font-mono"
            >
              ai/acc
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
