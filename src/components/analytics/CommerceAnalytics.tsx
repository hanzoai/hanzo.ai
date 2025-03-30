
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, DollarSign, CreditCard, Zap } from "lucide-react";

const CommerceAnalytics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/5 opacity-50"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Commerce-Focused Analytics</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Optimize your sales funnel and boost revenue with insights designed specifically for commerce.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                title: "AI-powered recommendations",
                description: "Personalize experiences based on real-time user insights and behavior patterns."
              },
              {
                icon: <DollarSign className="h-6 w-6" />,
                title: "Dynamic Pricing & Predictive Analytics",
                description: "Forecast sales, detect anomalies, and optimize revenue streams with AI-powered insights."
              },
              {
                icon: <CreditCard className="h-6 w-6" />,
                title: "Seamless Payments & Omnichannel Insights",
                description: "Unified tracking across web, mobile, in-store, and global commerce channels."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="mr-4 p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/20 text-purple-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            style={{ scale, opacity }}
            className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-xl"
          >
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 text-purple-400 mr-2" />
                <span className="text-[var(--white)] font-medium">Commerce Dashboard</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">Sales Performance</h4>
                <div className="h-40 bg-gray-800/50 rounded-lg relative overflow-hidden">
                  {/* Bar chart */}
                  <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                    {[65, 80, 55, 90, 70, 85, 60].map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-6 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <div className="text-sm text-neutral-400">Conversion Rate</div>
                  <div className="text-2xl font-bold mt-2">4.78%</div>
                  <div className="text-green-400 text-sm flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    +0.6%
                  </div>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <div className="text-sm text-neutral-400">Avg. Order Value</div>
                  <div className="text-2xl font-bold mt-2">$87.32</div>
                  <div className="text-green-400 text-sm flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    +2.4%
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4">
                <h4 className="text-lg font-medium mb-4">Product Recommendations</h4>
                <div className="space-y-3">
                  {[
                    { name: "Premium Headphones", score: 98 },
                    { name: "Wireless Keyboard", score: 85 },
                    { name: "Smart Watch", score: 79 }
                  ].map((product, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-neutral-300">{product.name}</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-800 rounded-full mr-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${product.score}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                          ></motion.div>
                        </div>
                        <span className="text-sm text-purple-400">{product.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommerceAnalytics;
