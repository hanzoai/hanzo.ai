
import React from "react";
import { motion } from "framer-motion";
import { Settings, User, Laptop } from "lucide-react";

const Customization = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <User className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Customized to you</h3>
            <p className="text-gray-300">
              Use About Me to tell Hanzo things you want it to consider when it responds
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <Laptop className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Sees files & context</h3>
            <p className="text-gray-300">
              Set up key shortcuts to quickly access your most-used interactions
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <Settings className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Grounded using screen data</h3>
            <p className="text-gray-300">
              We ground your requests in the context of your screen
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-white">Mix Modalities</h3>
            <p className="text-gray-300">
              Apply feedback from your last meeting to your code
            </p>
          </div>
          
          <motion.div 
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-white">Generate in-context code anywhere</h3>
            <p className="text-gray-300">
              Create code snippets in any application with the power of Hanzo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customization;
