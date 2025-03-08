
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Apple, Chrome, Terminal } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Do everything 100x faster
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Hanzo AI lets models understand your desktop activity. Build faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download (Apple Silicon)
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download (Intel Mac)
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Download for Windows
            </Button>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 flex items-center">
              <Terminal className="h-5 w-5 text-purple-500 mr-3" />
              <code className="text-gray-300 font-mono">pip install hanzo-dev</code>
              <Button variant="ghost" size="sm" className="ml-4 text-gray-400 hover:text-white">
                Copy
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Chrome Extension
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Firefox Add-on
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Edge Extension
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-gray-400 mt-8">
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
