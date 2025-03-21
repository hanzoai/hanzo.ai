
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const MainCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl border border-purple-500/20 overflow-hidden"
      >
        <div className="h-64 bg-gradient-to-r from-purple-800/30 to-blue-800/30 flex items-center justify-center">
          <ChromeText as="h2" className="text-3xl font-bold">
            Capabilities
          </ChromeText>
        </div>
        <div className="p-8">
          <p className="text-gray-300 mb-6">
            Discover our comprehensive suite of technical capabilities that empower your organization to innovate
            and transform. From AI and cloud infrastructure to custom development solutions, we provide everything
            you need to stay ahead.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-purple-900/40 rounded-full text-sm text-purple-300 border border-purple-500/30">
              AI Engineering
            </span>
            <span className="px-3 py-1 bg-blue-900/40 rounded-full text-sm text-blue-300 border border-blue-500/30">
              Cloud Infrastructure
            </span>
            <span className="px-3 py-1 bg-green-900/40 rounded-full text-sm text-green-300 border border-green-500/30">
              Data Analytics
            </span>
            <span className="px-3 py-1 bg-pink-900/40 rounded-full text-sm text-pink-300 border border-pink-500/30">
              Digital Experiences
            </span>
          </div>
          <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
            <Link to="/solutions/capabilities">
              Explore Our Capabilities <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-2xl border border-blue-500/20 overflow-hidden"
      >
        <div className="h-64 bg-gradient-to-r from-blue-800/30 to-indigo-800/30 flex items-center justify-center">
          <ChromeText as="h2" className="text-3xl font-bold">
            Industries
          </ChromeText>
        </div>
        <div className="p-8">
          <p className="text-gray-300 mb-6">
            Our industry-specific expertise helps organizations across sectors overcome unique challenges and seize
            opportunities. We combine deep domain knowledge with cutting-edge technology to deliver tailored
            solutions for your business.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-sm text-indigo-300 border border-indigo-500/30">
              Financial Services
            </span>
            <span className="px-3 py-1 bg-green-900/40 rounded-full text-sm text-green-300 border border-green-500/30">
              Healthcare
            </span>
            <span className="px-3 py-1 bg-amber-900/40 rounded-full text-sm text-amber-300 border border-amber-500/30">
              Retail
            </span>
            <span className="px-3 py-1 bg-teal-900/40 rounded-full text-sm text-teal-300 border border-teal-500/30">
              Technology
            </span>
          </div>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link to="/solutions/industries">
              Explore Our Industry Solutions <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default MainCards;
