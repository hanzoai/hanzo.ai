'use client'


import React from "react";
import { motion } from "framer-motion";
import { Scale, Zap, Code, Users } from "lucide-react";

const ScalabilitySection = () => {
  const features = [
    {
      icon: Scale,
      title: "Scale as needed",
      description: "Scale elastically to support tens of billions of vectors with a fully distributed architecture."
    },
    {
      icon: Zap,
      title: "Blazing fast",
      description: "Retrieve data quickly and accurately with optimized indexing, regardless of scale."
    },
    {
      icon: Code,
      title: "Reusable Code",
      description: "Write once, and deploy with one line of code into the production environment."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Fan-favorite vector database with extensive resources and supportive contributors."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
            Why Developers Prefer Hanzo Vector
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The preferred choice for vector database needs from prototype to production
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-colors"
            >
              <feature.icon className="h-10 w-10 text-foreground mb-6" />
              <h3 className="text-xl font-semibold text-[var(--white)] mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalabilitySection;
