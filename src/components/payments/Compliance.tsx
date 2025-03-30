
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Receipt, AlertTriangle } from "lucide-react";

const Compliance = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Automatic Global Tax Compliance</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Focus on your business while Hanzo handles the complexity of global tax regulations and compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <ShieldCheck className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automated Tax Management</h3>
            <p className="text-neutral-400 mb-4">
              Automatically handle VAT, GST, and regional taxes (including sales tax).
            </p>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Real-time tax rate calculation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Tax exemption handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Automated tax reporting</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <Receipt className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Merchant of Record</h3>
            <p className="text-neutral-400 mb-4">
              Hanzo takes liability for taxes and compliance, acting as your merchant of record.
            </p>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Simplified global expansion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Legal entity management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Compliant invoicing worldwide</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <AlertTriangle className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fraud Protection</h3>
            <p className="text-neutral-400 mb-4">
              Automatic fraud detection and prevention built-in to protect your business.
            </p>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Machine learning fraud detection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Adaptive risk rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Chargeback protection</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
