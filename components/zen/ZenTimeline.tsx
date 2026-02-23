'use client'


import React from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2013",
    title: "The Spark",
    description: "Launched SKULLY AR-1 helmet, the most successful campaign in Indiegogo's history."
  },
  {
    year: "2017",
    title: "Foundation",
    description: "Hanzo AI established with a vision of democratizing access to artificial intelligence."
  },
  {
    year: "2019",
    title: "First Platform",
    description: "Released the first version of Hanzo Cloud, focusing on simplicity and developer experience."
  },
  {
    year: "2021",
    title: "Open Source",
    description: "Launched Hanzo DX, our open-source, self-hostable platform for AI application development."
  },
  {
    year: "2023",
    title: "Global Scale",
    description: "Reached planetary scale with infrastructure spanning 65+ regions and 200+ edge locations."
  },
  {
    year: "2025",
    title: "Today",
    description: "Leading the AI revolution with our comprehensive suite of products and services."
  }
];

const ZenTimeline: React.FC = () => {
  return (
    <div className="relative py-16">
      <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#ffffff]/0 via-[#ffffff]/50 to-[#ffffff]/0 transform -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-16 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
          >
            <div className="absolute left-1/2 top-5 w-5 h-5 rounded-full bg-[#ffffff] transform -translate-x-1/2 z-10"></div>

            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
              <div className="bg-[var(--black)]/30 backdrop-blur-sm border border-[#ffffff]/20 rounded-lg p-6">
                <div className="text-[#ffffff] font-bold mb-2">{event.year}</div>
                <h3 className="text-xl text-[var(--white)] font-bold mb-2">{event.title}</h3>
                <p className="text-neutral-300">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZenTimeline;
