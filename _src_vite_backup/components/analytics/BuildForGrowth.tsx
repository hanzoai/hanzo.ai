
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, CreditCard, ArrowRight } from "lucide-react";

const BuildForGrowth = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Growth</h2>
          <p className="text-xl text-neutral-300">
            Optimize user journeys and boost your conversions by understanding every interaction from entry point to checkout.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="h-8 w-8 text-[#fd4444]" />,
              title: "Conversion Optimization",
              description: "Identify and fix bottlenecks in your user journey to improve conversion rates.",
              metrics: "+27% average increase in conversions"
            },
            {
              icon: <Users className="h-8 w-8 text-[#ff6b6b]" />,
              title: "Audience Insights",
              description: "Understand your users better with detailed demographics and behavior analysis.",
              metrics: "15M+ user profiles analyzed daily"
            },
            {
              icon: <CreditCard className="h-8 w-8 text-green-400" />,
              title: "Revenue Impact",
              description: "See the direct financial impact of your optimization efforts in real-time.",
              metrics: "$1.2B+ in tracked revenue"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 rounded-xl p-8 border border-gray-800"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-400 mb-5">{item.description}</p>
              <div className="text-sm font-medium px-3 py-1 bg-gray-800 rounded-full inline-block text-[#ff6b6b]">
                {item.metrics}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="#learn-more" className="inline-flex items-center text-[#fd4444] hover:text-[#ff6b6b] transition-colors">
            Learn how our customers achieved growth <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildForGrowth;
