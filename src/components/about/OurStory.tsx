
import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-purple-900/10">
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
          className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 mb-10"
        >
          <p className="text-gray-300 md:text-lg leading-relaxed mb-6">
            Hanzo Industries, Inc. – originally known as Crowdstart under Verus Media – has undergone several transformations since its inception. 
            Founded by Zach Kelling (with David Tai as co-founder) in the mid-2010s, the company evolved from a crowd-powered marketing platform 
            into a Techstars-backed artificial intelligence venture, and ultimately into a multifaceted AI technology provider.
          </p>
          
          <p className="text-gray-300 md:text-lg leading-relaxed mb-6">
            Along the way, Hanzo has achieved notable milestones in product development, fundraising, and partnerships, 
            while navigating pivots and challenges that shaped its guiding philosophy. Our journey demonstrates the power 
            of adaptability, resilience, and first-principles thinking in building technology that empowers others.
          </p>
          
          <p className="text-gray-300 md:text-lg leading-relaxed">
            Today, operating under the umbrella Hanzo Industries, Inc., we remain small but influential, 
            proving the mantra that a lean, mission-driven team can punch well above its weight. Our mission 
            is to accelerate human entrepreneurship through intelligent technology and timeless wisdom.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
