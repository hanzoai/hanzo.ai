
import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 space-y-4"
        >
          <p className="text-gray-300 md:text-lg leading-relaxed">
            Hanzo began as Crowdstart, a small, hungry team driving explosive product launches—most notably, 
            the record-breaking SKULLY Technologies AR-1 helmet on Indiegogo, raising millions and demonstrating 
            the immense power of data-driven innovation. That success signaled we were onto something special.
          </p>
          
          <p className="text-gray-300 md:text-lg leading-relaxed">
            We soon evolved into Hanzo AI, incubated by Techstars, pioneering intelligent e-commerce, 
            AI-driven marketing, and blockchain innovation. Our tools democratized technology previously 
            reserved for giants, enabling startups and enterprises alike to scale beyond expectation. 
            Under the leadership of co-founders Zach Kelling (Founding CTO) and Michael Kelling 
            (original co-founder, current CEO), Hanzo became synonymous with turning ambitious ideas into reality.
          </p>
          
          <p className="text-gray-300 md:text-lg leading-relaxed">
            Today, as Hanzo Industries, we fuse AI and engineering discipline to build powerful platforms, 
            open-source tools, and autonomous AI solutions—fueling the next generation of innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
