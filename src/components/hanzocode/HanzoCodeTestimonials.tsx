
import React from "react";
import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const HanzoCodeTestimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by world-class devs
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Engineers all around the world reach for Hanzo Code by choice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Just showing one testimonial for example, but you can replicate this */}
          <motion.div 
            className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-700"></div>
              <div>
                <div className="font-medium">Sarah Chen</div>
                <div className="text-neutral-400 flex items-center">
                  <Twitter className="h-3.5 w-3.5 mr-1 text-blue-400" />
                  @sarahcodes
                </div>
              </div>
            </div>
            <p className="text-neutral-300">Hanzo Code has completely changed how I approach coding. The AI suggestions are spot-on and save me hours every day.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeTestimonials;
