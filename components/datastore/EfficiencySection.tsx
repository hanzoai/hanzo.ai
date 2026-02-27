'use client'

import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

interface EfficiencyCardProps {
  title: string;
  mainText: string;
  subText: string;
  initialY: number;
  delay: number;
}

const EfficiencyCard = ({ title, mainText, subText, initialY, delay }: EfficiencyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-900/30 rounded-xl p-8 border border-gray-800 flex flex-col items-center text-center"
    >
      <ChromeText as="h3" className="text-2xl font-bold mb-4">
        {title}
      </ChromeText>
      <p className="text-foreground/80 mb-4">
        {mainText}
      </p>
      <p className="text-muted-foreground">
        {subText}
      </p>
    </motion.div>
  );
};

const EfficiencySection = () => {
  const efficiencyItems = [
    {
      title: "Hardware Efficient",
      mainText: "Datastore processes analytical queries 100-1000x faster than traditional row-oriented systems with the same available I/O throughput and CPU capacity.",
      subText: "Columnar storage format allows fitting more hot data in RAM, which leads to shorter response times.",
      initialY: 30,
      delay: 0
    },
    {
      title: "Maximizes CPU Efficiency",
      mainText: "Vectorized query execution uses SIMD processor instructions and runtime code generation.",
      subText: "Processing data in columns increases CPU cache line hit rate.",
      initialY: 30,
      delay: 0.2
    },
    {
      title: "Optimizes Disk Access",
      mainText: "Datastore minimizes the number of seeks for range queries to increase efficiency of using disk drives.",
      subText: "Maintains locality of reference for continually stored data.",
      initialY: 30,
      delay: 0.3
    },
    {
      title: "Minimizes Data Transfers",
      mainText: "Datastore enables companies to manage their data and create reports without using specialized networks.",
      subText: "Perfect for high-performance computing at any scale.",
      initialY: 30,
      delay: 0.4
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Datastore Efficiency
          </ChromeText>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Optimized for peak performance at every level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {efficiencyItems.map((item, index) => (
            <EfficiencyCard
              key={index}
              title={item.title}
              mainText={item.mainText}
              subText={item.subText}
              initialY={item.initialY}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;
