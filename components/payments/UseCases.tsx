'use client'


import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Repeat, LayoutGrid, CreditCard } from "lucide-react";

const useCases = [
  {
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    title: "Ecommerce",
    description: "Sell directly to consumers worldwide with optimized, secure checkout experiences."
  },
  {
    icon: <Repeat className="h-6 w-6 text-white" />,
    title: "SaaS & Subscription",
    description: "Automate recurring billing and manage complex pricing tiers."
  },
  {
    icon: <LayoutGrid className="h-6 w-6 text-white" />,
    title: "Marketplaces",
    description: "Integrate multi-party payments and payouts for buyers and sellers."
  },
  {
    icon: <CreditCard className="h-6 w-6 text-white" />,
    title: "Embedded Finance",
    description: "Seamlessly embed financial services into your product, from cards to loans."
  }
];

const UseCases = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Use Cases</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hanzo Payments powers diverse business models across industries with flexible, scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-6"
            >
              <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-neutral-400 mb-4">{useCase.description}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="text-lg font-medium mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-neutral-400">
                        {index === 0 && ['Optimized checkout', 'Global shipping', 'Inventory sync', 'Tax compliance'][i]}
                        {index === 1 && ['Recurring billing', 'Trials & coupons', 'Revenue recovery', 'Usage metering'][i]}
                        {index === 2 && ['Split payments', 'Escrow', 'KYC verification', 'Seller onboarding'][i]} 
                        {index === 3 && ['Card issuing', 'Lending', 'Account connectivity', 'Balance management'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-white/10 border border-gray-800 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Start Quickly, Scale Instantly</h3>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-6">
            No-code solutions available, with setup completed in minutes. Scalable from startup to enterprise-level with consistent reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white hover:bg-[#cccccc] rounded-md transition duration-200">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-gray-600 hover:border-gray-400 rounded-md transition duration-200">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
