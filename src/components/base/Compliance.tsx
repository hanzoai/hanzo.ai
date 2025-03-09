
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const Compliance = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;
