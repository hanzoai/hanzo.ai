
import React from "react";
import { motion } from "framer-motion";
import { Scroll, MapPin, Star, Code, Cpu, Cloud, Sparkles } from "lucide-react";

const timelineEvents = [
  {
    year: "2013",
    title: "Genesis",
    description: "Hanzo's journey begins with a vision of simplifying developer experience.",
    icon: <Scroll className="w-6 h-6 text-purple-400" />,
  },
  {
    year: "2015",
    title: "First Developer Tools",
    description: "Launch of early developer productivity tools focusing on simplicity.",
    icon: <Code className="w-6 h-6 text-purple-400" />,
  },
  {
    year: "2017",
    title: "Open Source Initiative",
    description: "Commitment to open source principles and community-driven development.",
    icon: <Star className="w-6 h-6 text-purple-400" />,
  },
  {
    year: "2019",
    title: "Cloud Platform",
    description: "Introduction of Hanzo Cloud, bringing serverless computing to developers.",
    icon: <Cloud className="w-6 h-6 text-purple-400" />,
  },
  {
    year: "2021",
    title: "AI Integration",
    description: "First AI-powered developer tools launched, revolutionizing coding experience.",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Hanzo's platform reaches developers worldwide with multi-region support.",
    icon: <MapPin className="w-6 h-6 text-purple-400" />,
  },
  {
    year: "2025",
    title: "Frontier AI Platform",
    description: "Leading the AI engineering revolution with comprehensive developer solutions.",
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
  },
];

const ZenTimeline: React.FC = () => {
  return (
    <div className="relative h-full">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300/10 via-purple-500/50 to-purple-300/10"></div>
      
      {/* Timeline events */}
      <div className="space-y-20 py-10">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className="relative pl-14"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Year circle */}
            <motion.div 
              className="absolute left-0 top-0 w-8 h-8 rounded-full bg-black border-2 border-purple-400 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 200, 
                damping: 10,
                delay: index * 0.1 + 0.2
              }}
            >
              {event.icon}
            </motion.div>
            
            {/* Content */}
            <div>
              <div className="text-purple-400 text-sm font-semibold mb-1">{event.year}</div>
              <h3 className="text-white text-lg font-bold mb-1">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZenTimeline;
