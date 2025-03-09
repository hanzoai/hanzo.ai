
import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

interface EfficiencyCardProps {
  title: string;
  mainText: string;
  subText: string;
  initialX: number;
  delay: number;
}

const EfficiencyCard = ({ title, mainText, subText, initialX, delay }: EfficiencyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-900/30 rounded-xl p-8 border border-gray-800"
    >
      <ChromeText as="h3" className="text-2xl font-bold mb-4">
        {title}
      </ChromeText>
      <p className="text-gray-300 mb-4">
        {mainText}
      </p>
      <p className="text-gray-400">
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
      initialX: -20,
      delay: 0
    },
    {
      title: "Maximizes CPU Efficiency",
      mainText: "Vectorized query execution leverages SIMD processor instructions and runtime code generation.",
      subText: "Processing data in columns increases CPU cache line hit rate.",
      initialX: 20,
      delay: 0.2
    },
    {
      title: "Optimizes Disk Access",
      mainText: "Datastore minimizes the number of seeks for range queries to increase efficiency of using disk drives.",
      subText: "Maintains locality of reference for continually stored data.",
      initialX: -20,
      delay: 0.3
    },
    {
      title: "Minimizes Data Transfers",
      mainText: "Datastore enables companies to manage their data and create reports without using specialized networks.",
      subText: "Perfect for high-performance computing at any scale.",
      initialX: 20,
      delay: 0.4
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Datastore Efficiency
          </ChromeText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {efficiencyItems.map((item, index) => (
            <EfficiencyCard 
              key={index}
              title={item.title}
              mainText={item.mainText}
              subText={item.subText}
              initialX={item.initialX}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;
