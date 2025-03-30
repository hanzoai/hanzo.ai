
import React from "react";
import { motion } from "framer-motion";
import { Plug, Code, FileText } from "lucide-react";

const Integrations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Integrations & APIs</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Connect Hanzo Payments to your existing systems with ease through powerful APIs and pre-built integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-gray-900/30 border border-gray-800 p-6 rounded-lg"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <Plug className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Pre-built Integrations</h3>
            <p className="text-neutral-400 mb-6">
              Hundreds of pre-built integrations with popular services, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Salesforce', 'Adobe', 'SAP', 'QuickBooks', 'Shopify', 'WooCommerce', 'Magento', 'WordPress', 'Squarespace', 'NetSuite', 'Xero', 'HubSpot'].map((integration, index) => (
                <div key={index} className="py-2 px-3 bg-gray-800 rounded-md text-sm text-center text-neutral-300">
                  {integration}
                </div>
              ))}
            </div>
            <p className="text-neutral-400 mt-4 text-sm text-center">
              And many more via the Hanzo App Marketplace
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Developer-First APIs</h3>
              <p className="text-neutral-400">
                Comprehensive API and detailed developer documentation for custom integrations.
              </p>
            </div>
            <div className="p-6 bg-gray-950 font-mono text-sm overflow-auto" style={{ maxHeight: '300px' }}>
              <pre className="text-neutral-300">
{`// Create a payment intent
const paymentIntent = await hanzo.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card'],
  customer: customer.id,
  metadata: {
    order_id: '6735',
  },
});

// Handle the payment
const { paymentIntent, error } = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: cardElement,
      billing_details: {
        name: 'Jenny Rosen',
      },
    },
  }
);`}
              </pre>
            </div>
            <div className="p-4 flex justify-between items-center border-t border-gray-800">
              <span className="text-sm text-neutral-400">API Reference</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-800 rounded text-sm">Copy</button>
                <button className="px-3 py-1 bg-purple-600 rounded text-sm">Try it</button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <Code className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Easy to Implement</h3>
            <p className="text-neutral-400">
              Quick integration with just a few lines of code, with SDKs for all major programming languages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg"
          >
            <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
              <FileText className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Documentation</h3>
            <p className="text-neutral-400">
              Detailed guides, API reference, and code examples to help you integrate Hanzo Payments quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">Explore Our APIs</h3>
              <p className="text-neutral-400 mb-4">
                Get started with quickstart guides, examples, and developer tools.
              </p>
            </div>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition duration-200">
              API Reference
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
