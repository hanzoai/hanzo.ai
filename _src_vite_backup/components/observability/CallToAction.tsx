
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#fd4444]/10 via-transparent to-transparent opacity-70"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Ready to see the difference clarity makes?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-[#fd4444] hover:bg-[#e03e3e] border-none">
                Get Started
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-700">
                <FileText className="mr-2 h-5 w-5" /> View Docs
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-700">
                <span className="flex items-center">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "Self-Hosted",
                description: "Deploy on your own infrastructure with full control."
              },
              {
                title: "Cloud Managed",
                description: "Let us handle the operations while you focus on building."
              },
              {
                title: "Enterprise",
                description: "Custom solutions for high-scale, mission-critical deployments."
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-gray-900/20 p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                <p className="text-neutral-400 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center text-neutral-500 text-sm"
          >
            Free 14-day trial, no credit card required.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
