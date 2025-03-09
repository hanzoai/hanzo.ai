
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { products, solutions, resources, company } from "@/constants/navigation";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
                alt="Hanzo"
                className="h-10 w-10"
              />
              <span className="text-white font-bold text-xl">Hanzo</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Build the future of AI with Hanzo's powerful suite of tools designed for modern development teams.
            </p>
            <div className="flex space-x-5">
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
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 xl:mt-0 xl:col-span-4">
            {/* AI Cloud Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">AI Cloud</h3>
              <ul className="mt-4 space-y-3">
                {products[0].items.map((item, index) => (
                  <li key={`cloud-${index}`}>
                    <Link to={`/cloud#${item.toLowerCase()}`} className="text-base text-gray-400 hover:text-gray-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* DX Platform Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">DX Platform</h3>
              <ul className="mt-4 space-y-3">
                {products[1].items.map((item, index) => (
                  <li key={`platform-${index}`}>
                    <Link to={`/platform#${item.toLowerCase()}`} className="text-base text-gray-400 hover:text-gray-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li><Link to="/pricing" className="text-base text-gray-400 hover:text-gray-300">Pricing</Link></li>
                <li><a href="https://docs.hanzo.ai" className="text-base text-gray-400 hover:text-gray-300">Documentation</a></li>
                <li><a href="https://api.hanzo.ai" className="text-base text-gray-400 hover:text-gray-300">API Reference</a></li>
                <li><a href="https://discord.gg/hanzo" className="text-base text-gray-400 hover:text-gray-300">Community</a></li>
                <li><a href="https://blog.hanzo.ai" className="text-base text-gray-400 hover:text-gray-300">Blog</a></li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                {company.map((item, index) => (
                  <li key={`company-${index}`}>
                    <Link to={`/${item.toLowerCase()}`} className="text-base text-gray-400 hover:text-gray-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
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
