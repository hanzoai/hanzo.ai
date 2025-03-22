
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github } from "lucide-react";

const HanzoCodeCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Upgrade Your Editor Today</h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your VS Code, Cursor, Windsurf, or Void experience with the most advanced AI coding tools available.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Button 
              size="sm"
              className="bg-purple-600 hover:bg-purple-500 text-white w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Hanzo Code
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              className="bg-transparent border-purple-500/30 text-white hover:bg-purple-900/20 w-full sm:w-auto"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              VS Code Extension
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 w-full sm:w-auto"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
          
          <div className="bg-black/40 rounded-xl p-8 border border-gray-800 mb-12">
            <h3 className="text-xl font-semibold mb-4">Already Using Cursor or Windsurf?</h3>
            <p className="text-gray-300 mb-6">
              Install Hanzo Code alongside your current editor and supercharge it with our agentic capabilities. No need to switch or change your workflow.
            </p>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white"
            >
              One-Click Integration
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Downloads</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Forum</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoCodeCTA;
