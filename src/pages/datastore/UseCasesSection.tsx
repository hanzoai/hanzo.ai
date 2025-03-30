
import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const UseCasesSection = () => {
  const useCases = [
    "Web and app analytics",
    "E-commerce and finance",
    "Time series",
    "Advertising networks and RTB",
    "Information security",
    "Business intelligence",
    "Telecommunications",
    "Monitoring and telemetry",
    "Online games",
    "Internet of Things (IoT)",
    "Observability",
    "User behavior analytics"
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 opacity-30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Datastore at Scale
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Datastore is used in a variety of industries for a broad set of use cases on top of both customer-facing and internally-facing workloads.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-900/20 border border-gray-800 rounded-lg p-4 text-center"
            >
              <p className="text-neutral-300">{useCase}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
