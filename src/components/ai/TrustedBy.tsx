
import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  // Example logos - in a real implementation, these would be actual logo images
  const logoItems = [
    { name: 'Microsoft', class: 'h-7' },
    { name: 'Airbnb', class: 'h-6' },
    { name: 'Netflix', class: 'h-6' },
    { name: 'Stripe', class: 'h-8' },
    { name: 'Shopify', class: 'h-6' },
    { name: 'Spotify', class: 'h-7' },
    { name: 'Slack', class: 'h-7' },
    { name: 'Amazon', class: 'h-6' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--white)] mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Powering AI innovation at organizations of all sizes, from startups to Fortune 500 companies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {logoItems.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:bg-gray-900/80 transition-colors"
            >
              {/* In a real implementation, this would be an image */}
              <div className={`text-neutral-400 font-semibold text-xl ${logo.class}`}>
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="h-5 w-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-[var(--white)] font-medium">5.0</span>
            </div>
            <p className="text-neutral-300 mb-4">
              "Hanzo's AI platform has transformed our ability to ship AI features quickly. What used to take months now takes days."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#fd4444]/30 flex items-center justify-center text-[#ff6b6b] font-bold">JD</div>
              <div className="ml-3">
                <div className="text-[var(--white)] font-medium">Jane Doe</div>
                <div className="text-neutral-400 text-sm">CTO, TechInnovate</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="h-5 w-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-[var(--white)] font-medium">5.0</span>
            </div>
            <p className="text-neutral-300 mb-4">
              "The observability features are game-changing. We finally have full visibility into our AI systems in production."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#fd4444]/30 flex items-center justify-center text-[#ff6b6b] font-bold">MS</div>
              <div className="ml-3">
                <div className="text-[var(--white)] font-medium">Michael Smith</div>
                <div className="text-neutral-400 text-sm">AI Lead, EnterpriseAI</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="h-5 w-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-[var(--white)] font-medium">5.0</span>
            </div>
            <p className="text-neutral-300 mb-4">
              "Our team went from prototype to production in just days. The SDK is intuitive and the documentation is excellent."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#fd4444]/30 flex items-center justify-center text-[#ff6b6b] font-bold">EJ</div>
              <div className="ml-3">
                <div className="text-[var(--white)] font-medium">Emma Johnson</div>
                <div className="text-neutral-400 text-sm">VP Engineering, StartupX</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
