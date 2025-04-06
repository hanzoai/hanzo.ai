import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Github, ArrowRight } from "lucide-react";
import { footerNav } from "@/constants/navigation-data";
import ThemeSwitcher from "./ui/theme-switcher";

const Footer = () => {
  return (
    <footer className="bg-[var(--black)] border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 mb-10">
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
            
            <div className="mt-4">
              <a 
                href="https://github.com/hanzoai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Footer Navigation */}
          {footerNav.map(section => (
            <div key={section.title}>
              <h3 className="text-lg font-medium text-[var(--white)] mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map(item => (
                  <li key={item.title}>
                    <Link 
                      to={item.href} 
                      className="text-neutral-500 hover:text-neutral-300 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* View all link for certain sections */}
              {(section.title === 'Products' || section.title === 'Solutions') && (
                <Link 
                  to={section.title === 'Products' ? "/cloud" : "/solutions"} 
                  className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 mt-4"
                >
                  <span>View all {section.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
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