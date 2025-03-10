
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { products, solutions, resources, company } from "@/constants/navigation";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
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
              <span className="text-white font-bold text-xl">Hanzo</span>
            </Link>
            
            <Link to="/status" className="flex items-center text-green-500 space-x-2 hover:underline">
              <CheckCircle className="h-5 w-5" />
              <span className="text-gray-400">All systems operational</span>
            </Link>
          </div>
          
          {/* Products Column */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Products</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-400 font-medium mb-3">AI Cloud</h4>
                <ul className="space-y-2">
                  <li><Link to="/cloud" className="text-gray-500 hover:text-gray-300">AI Cloud</Link></li>
                  <li><Link to="/cloud#chat" className="text-gray-500 hover:text-gray-300">Chat</Link></li>
                  <li><Link to="/datastore" className="text-gray-500 hover:text-gray-300">Datastore</Link></li>
                  <li><Link to="/cloud#edge" className="text-gray-500 hover:text-gray-300">Edge</Link></li>
                  <li><Link to="/cloud#functions" className="text-gray-500 hover:text-gray-300">Functions</Link></li>
                  <li><Link to="/cloud#identity" className="text-gray-500 hover:text-gray-300">Identity</Link></li>
                  <li><Link to="/cloud#machines" className="text-gray-500 hover:text-gray-300">Machines</Link></li>
                  <li><Link to="/payments" className="text-gray-500 hover:text-gray-300">Payments</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-400 font-medium mb-3">DX Platform</h4>
                <ul className="space-y-2">
                  <li><Link to="/platform" className="text-gray-500 hover:text-gray-300">DX Platform</Link></li>
                  <li><Link to="/app" className="text-gray-500 hover:text-gray-300">App</Link></li>
                  <li><Link to="/bot" className="text-gray-500 hover:text-gray-300">Bot</Link></li>
                  <li><Link to="/code" className="text-gray-500 hover:text-gray-300">Code</Link></li>
                  <li><Link to="/dev" className="text-gray-500 hover:text-gray-300">Dev</Link></li>
                  <li><Link to="/extension" className="text-gray-500 hover:text-gray-300">Extension</Link></li>
                  <li><Link to="/platform#runtime" className="text-gray-500 hover:text-gray-300">Runtime</Link></li>
                  <li><Link to="/operator" className="text-gray-500 hover:text-gray-300">Operator</Link></li>
                  <li><Link to="/platform#studio" className="text-gray-500 hover:text-gray-300">Studio</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Solutions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-400 font-medium mb-3">Capabilities</h4>
                <ul className="space-y-2">
                  <li><Link to="/cloud" className="text-gray-500 hover:text-gray-300">Cloud</Link></li>
                  <li><Link to="/security" className="text-gray-500 hover:text-gray-300">Cybersecurity</Link></li>
                  <li><Link to="/ai" className="text-gray-500 hover:text-gray-300">Data and Artificial Intelligence</Link></li>
                  <li><Link to="/solutions" className="text-gray-500 hover:text-gray-300">Digital Engineering and Manufacturing</Link></li>
                </ul>
                <Link to="/solutions" className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 mt-2">
                  <span>View all capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div>
                <h4 className="text-gray-400 font-medium mb-3">Industries</h4>
                <ul className="space-y-2">
                  <li><Link to="/solutions" className="text-gray-500 hover:text-gray-300">Aerospace and Defense</Link></li>
                  <li><Link to="/solutions" className="text-gray-500 hover:text-gray-300">Automotive</Link></li>
                  <li><Link to="/solutions" className="text-gray-500 hover:text-gray-300">Banking</Link></li>
                  <li><Link to="/solutions" className="text-gray-500 hover:text-gray-300">Capital Markets</Link></li>
                </ul>
                <Link to="/solutions" className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 mt-2">
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
              <h3 className="text-lg font-medium text-white mb-4">Resources</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-400 font-medium mb-3">Community</h4>
                  <ul className="space-y-2">
                    <li><a href="https://hanzo.forum" className="text-gray-500 hover:text-gray-300">Hanzo Forum</a></li>
                    <li><a href="https://hanzo.community" className="text-gray-500 hover:text-gray-300">Hanzo Community</a></li>
                    <li><a href="https://hanzo.help" className="text-gray-500 hover:text-gray-300">Hanzo Help</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-gray-400 font-medium mb-3">Documentation</h4>
                  <ul className="space-y-2">
                    <li><a href="https://docs.hanzo.ai" className="text-gray-500 hover:text-gray-300">Documentation</a></li>
                    <li><a href="https://docs.hanzo.ai" className="text-gray-500 hover:text-gray-300">API Reference</a></li>
                    <li><Link to="/examples" className="text-gray-500 hover:text-gray-300">Examples</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-500 hover:text-gray-300">About</Link></li>
                <li><Link to="/blog" className="text-gray-500 hover:text-gray-300">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-500 hover:text-gray-300">Careers</Link></li>
                <li><Link to="/team" className="text-gray-500 hover:text-gray-300">Team</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-gray-500 text-sm">© 2016-{new Date().getFullYear()} Hanzo Industries, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
            <Link to="/security" className="text-gray-500 hover:text-gray-300 text-sm">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
