
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Github, Twitter, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { products, solutions, resources, company } from "@/constants/navigation";
import ThemeSwitcher from "./ui/theme-switcher";

const Footer = () => {
  return (
    <footer className="bg-[var(--black)] border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">
          {/* Logo and Status Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
                alt="Hanzo"
                className="h-9 w-9"
              />
              <span className="text-[var(--white)] font-bold text-xl">Hanzo</span>
            </Link>
            
            <Link to="/status" className="flex items-center text-green-500 space-x-2 hover:underline">
              <CheckCircle className="h-5 w-5" />
              <span className="text-neutral-400">All systems operational</span>
            </Link>
          </div>
          
          {/* Products Column */}
          <div>
            <h3 className="text-lg font-medium text-[var(--white)] mb-4">Products</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-neutral-400 font-medium mb-3">AI Cloud</h4>
                <ul className="space-y-2">
                  <li><Link to="/cloud" className="text-neutral-500 hover:text-neutral-300">AI Cloud</Link></li>
                  <li><Link to="/cloud#chat" className="text-neutral-500 hover:text-neutral-300">Chat</Link></li>
                  <li><Link to="/datastore" className="text-neutral-500 hover:text-neutral-300">Datastore</Link></li>
                  <li><Link to="/cloud#edge" className="text-neutral-500 hover:text-neutral-300">Edge</Link></li>
                  <li><Link to="/cloud#functions" className="text-neutral-500 hover:text-neutral-300">Functions</Link></li>
                  <li><Link to="/cloud#identity" className="text-neutral-500 hover:text-neutral-300">Identity</Link></li>
                  <li><Link to="/cloud#machines" className="text-neutral-500 hover:text-neutral-300">Machines</Link></li>
                  <li><Link to="/payments" className="text-neutral-500 hover:text-neutral-300">Payments</Link></li>
                  <li><Link to="/operative" className="text-neutral-500 hover:text-neutral-300">Operative</Link></li>
                </ul>
                <Link to="/cloud" className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 mt-2">
                  <span>View all Cloud</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div>
                <h4 className="text-neutral-400 font-medium mb-3">DX Platform</h4>
                <ul className="space-y-2">
                  <li><Link to="/platform" className="text-neutral-500 hover:text-neutral-300">DX Platform</Link></li>
                  <li><Link to="/app" className="text-neutral-500 hover:text-neutral-300">App</Link></li>
                  <li><Link to="/bot" className="text-neutral-500 hover:text-neutral-300">Bot</Link></li>
                  <li><Link to="/code" className="text-neutral-500 hover:text-neutral-300">Code</Link></li>
                  <li><Link to="/dev" className="text-neutral-500 hover:text-neutral-300">Dev</Link></li>
                  <li><Link to="/extension" className="text-neutral-500 hover:text-neutral-300">Extension</Link></li>
                  <li><Link to="/platform#runtime" className="text-neutral-500 hover:text-neutral-300">Runtime</Link></li>
                  <li><Link to="/platform#studio" className="text-neutral-500 hover:text-neutral-300">Studio</Link></li>
                </ul>
                <Link to="/open-source" className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 mt-2">
                  <span>View all Open Source</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-medium text-[var(--white)] mb-4">Solutions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-neutral-400 font-medium mb-3">Capabilities</h4>
                <ul className="space-y-2">
                  <li><Link to="/cloud" className="text-neutral-500 hover:text-neutral-300">Cloud</Link></li>
                  <li><Link to="/security" className="text-neutral-500 hover:text-neutral-300">Cybersecurity</Link></li>
                  <li><Link to="/ai" className="text-neutral-500 hover:text-neutral-300">Data and Artificial Intelligence</Link></li>
                  <li><Link to="/solutions" className="text-neutral-500 hover:text-neutral-300">Digital Engineering and Manufacturing</Link></li>
                </ul>
                <Link to="/solutions/capabilities" className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 mt-2">
                  <span>View all capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div>
                <h4 className="text-neutral-400 font-medium mb-3">Industries</h4>
                <ul className="space-y-2">
                  <li><Link to="/solutions" className="text-neutral-500 hover:text-neutral-300">Aerospace and Defense</Link></li>
                  <li><Link to="/solutions" className="text-neutral-500 hover:text-neutral-300">Automotive</Link></li>
                  <li><Link to="/solutions" className="text-neutral-500 hover:text-neutral-300">Banking</Link></li>
                  <li><Link to="/solutions" className="text-neutral-500 hover:text-neutral-300">Capital Markets</Link></li>
                </ul>
                <Link to="/solutions/industries" className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 mt-2">
                  <span>View all industries</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Resources and Company Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Resources */}
            <div>
              <h3 className="text-lg font-medium text-[var(--white)] mb-4">Resources</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-neutral-400 font-medium mb-3">Community</h4>
                  <ul className="space-y-2">
                    <li><a href="https://discord.gg/XthHQQj" className="text-neutral-500 hover:text-neutral-300">Hanzo Forum</a></li>
                    <li><a href="https://discord.gg/XthHQQj" className="text-neutral-500 hover:text-neutral-300">Hanzo Community</a></li>
                    <li><a href="https://discord.gg/XthHQQj" className="text-neutral-500 hover:text-neutral-300">Hanzo Help</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-neutral-400 font-medium mb-3">Documentation</h4>
                  <ul className="space-y-2">
                    <li><a href="https://docs.hanzo.ai" className="text-neutral-500 hover:text-neutral-300">Documentation</a></li>
                    <li><a href="https://docs.hanzo.ai" className="text-neutral-500 hover:text-neutral-300">API Reference</a></li>
                    <li><Link to="/examples" className="text-neutral-500 hover:text-neutral-300">Examples</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-medium text-[var(--white)] mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-neutral-500 hover:text-neutral-300">About</Link></li>
                <li><Link to="/blog" className="text-neutral-500 hover:text-neutral-300">Blog</Link></li>
                <li><Link to="/careers" className="text-neutral-500 hover:text-neutral-300">Careers</Link></li>
                <li><Link to="/team" className="text-neutral-500 hover:text-neutral-300">Team</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-neutral-500 text-sm">© 2016-{new Date().getFullYear()} Hanzo Industries, Inc. All rights reserved.</p>
            <ThemeSwitcher size="sm" className="mt-2 md:mt-0" />
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-neutral-500 hover:text-neutral-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-neutral-500 hover:text-neutral-300 text-sm">
              Terms of Service
            </Link>
            <Link to="/security" className="text-neutral-500 hover:text-neutral-300 text-sm">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
