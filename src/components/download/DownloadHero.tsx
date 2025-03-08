
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Monitor, Apple, Terminal } from "lucide-react";

const DownloadHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Everything you love about Hanzo,<br />
            across every app on your computer
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Your AI workspace for building AI products and AI-powered companies. Available on PC and Mac. Mobile coming soon.
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
          </div>
          
          <div className="flex justify-center mb-16">
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 flex items-center">
              <Terminal className="h-5 w-5 text-purple-500 mr-3" />
              <code className="text-gray-300 font-mono">pip install hanzo-dev</code>
              <Button variant="ghost" size="sm" className="ml-4 text-gray-400 hover:text-white">
                Copy
              </Button>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative pb-[56.25%] h-0 bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Monitor className="h-16 w-16 text-gray-500" />
                <span className="ml-2 text-gray-400">Video preview</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadHero;
