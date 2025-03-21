
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/pricing" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <FileText className="h-4 w-4" />
                Pricing
              </Button>
            </a>
            <a href="https://docs.hanzo.ai/balancer" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <BookOpen className="h-4 w-4" />
                Docs
              </Button>
            </a>
          </div>

          <div className="mb-4">
            <span className="text-purple-400 font-medium leading-relaxed">Hanzo Balancer v3.3 Is Now Available! 
              <a href="#learn-more" className="ml-2 text-purple-300 underline">Learn More</a>
            </span>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            The Cloud Native<br />
            <span className="text-purple-400">Application Proxy</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Simplify and automate the discovery, routing, and load balancing of microservices.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6"
            >
              <span className="py-1 leading-relaxed">GET STARTED</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-white hover:bg-white/10 rounded-full py-6"
            >
              <span className="py-1 leading-relaxed">Start Free Trial</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-white hover:bg-white/10 rounded-full py-6"
            >
              <span className="py-1 leading-relaxed">Request Demo</span>
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">3.2B+</h3>
              <p className="text-gray-400">Downloads</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">47K+</h3>
              <p className="text-gray-400">Stars on Github</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">900+</h3>
              <p className="text-gray-400">Contributors</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Top 15</h3>
              <p className="text-gray-400">on Docker hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
