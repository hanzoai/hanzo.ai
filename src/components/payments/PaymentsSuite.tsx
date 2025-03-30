
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Calendar, Send, CreditCard as CardIcon, Coins } from "lucide-react";

const suiteItems = [
  {
    icon: <CreditCard className="h-6 w-6 text-purple-400" />,
    title: "Online Payments",
    description: "Flexible integration with any website, optimized checkouts, and local payment methods."
  },
  {
    icon: <Calendar className="h-6 w-6 text-purple-400" />,
    title: "Subscriptions & Billing",
    description: "Automated subscription management, recurring billing, and multilingual invoicing."
  },
  {
    icon: <Send className="h-6 w-6 text-purple-400" />,
    title: "Embedded Finance (Connect)",
    description: "Integrate end-to-end payment experiences for marketplaces and platforms, including streamlined payouts."
  },
  {
    icon: <CardIcon className="h-6 w-6 text-purple-400" />,
    title: "Issuing",
    description: "Create and manage physical and virtual cards for your teams or customers."
  },
  {
    icon: <Coins className="h-6 w-6 text-purple-400" />,
    title: "Capital",
    description: "Access financing options to fuel your growth."
  }
];

const PaymentsSuite = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Payments Infrastructure</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hanzo Payments provides the essential tools needed to process payments and optimize your financial operations, 
            fully integrated into your Hanzo workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Unified Payments Suite</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suiteItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg"
              >
                <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-gray-800 rounded-xl p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Optimized for Growth</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Real-time analytics and detailed financial reporting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Forecast and predict revenues with built-in AI-driven analytics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Transparent pricing with no hidden fees.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-900/70 border border-gray-700 rounded-lg p-5">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3">Payment Growth</h4>
                <div className="flex items-end justify-center space-x-2 h-32 mb-4">
                  {[20, 35, 28, 45, 60, 75, 90].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-t from-purple-600 to-indigo-500 rounded-t w-6"
                      style={{height: `${height}%`}}
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-neutral-400">Last 7 days</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentsSuite;
