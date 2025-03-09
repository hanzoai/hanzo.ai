
import React from "react";
import { motion } from "framer-motion";

const HanzoCodeFrontier = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden"
          >
            <div className="h-80 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 flex items-center justify-center">
              <div className="text-3xl font-bold text-center">
                Frontier Intelligence
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Frontier Intelligence</h2>
            <p className="text-xl text-gray-300 mb-6">
              Powered by a mix of purpose-built and frontier models, Hanzo Code is smart and fast.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeFrontier;
