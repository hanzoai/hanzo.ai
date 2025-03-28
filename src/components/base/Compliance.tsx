
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Compliance = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Secure & Compliant</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center bg-blue-900/20 border border-blue-800/50 rounded-md px-3 py-1">
                  <Lock className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-blue-300 text-sm">SOC2 Type 2 Certified</span>
                </div>
                <div className="flex items-center bg-blue-900/20 border border-blue-800/50 rounded-md px-3 py-1">
                  <Lock className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-blue-300 text-sm">HIPAA Compliant</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 mr-4">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/hanzo-ai-icon.png" alt="Hanzo Base Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Hanzo Base</h3>
                <p className="text-gray-400">Secure. Scalable. Open Source.</p>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-800/30"
          >
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Global Data Regions</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
                <h4 className="font-medium text-blue-300 mb-2">United States (US)</h4>
                <p className="text-gray-300 text-sm mb-1">MCI - Kansas City</p>
                <p className="text-gray-400 text-xs">Hanzo Cloud region: us-central-1</p>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
                <h4 className="font-medium text-blue-300 mb-2">Canada (CA)</h4>
                <p className="text-gray-300 text-sm mb-1">YVR - Vancouver</p>
                <p className="text-gray-400 text-xs">Hanzo Cloud region: ca-west-1</p>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
                <h4 className="font-medium text-blue-300 mb-2">European Union (EU)</h4>
                <p className="text-gray-300 text-sm mb-1">BCN - Barcelona</p>
                <p className="text-gray-400 text-xs">Hanzo Cloud region: eu-west-1</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="bg-blue-900/30 border-blue-700/50 hover:bg-blue-800/50 text-white">
                <Link to="/security">Learn More About Our Security</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;
