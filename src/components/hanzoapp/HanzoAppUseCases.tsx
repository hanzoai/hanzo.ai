
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const HanzoAppUseCases = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="text-xl text-neutral-300">
            One platform, endless possibilities. See some of the use cases
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 h-full"
          >
            <div className="h-14 w-14 rounded-xl bg-[#fd4444]/20 flex items-center justify-center mb-6">
              <ShoppingCart className="h-7 w-7 text-[#fd4444]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">ProductCatalog</h3>
            <p className="text-neutral-300">
              Product catalog chatbot to answer any questions related to the products
            </p>
          </motion.div>
          
          {/* More use cases would go here */}
        </div>
      </div>
    </section>
  );
};

export default HanzoAppUseCases;
