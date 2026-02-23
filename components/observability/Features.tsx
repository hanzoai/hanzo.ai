'use client'


import React from "react";
import { motion } from "framer-motion";
import { 
  History, 
  BarChart, 
  MessageSquare, 
  Sparkles, 
  FileBadge,
  Database, 
  Users,
  AlertTriangle
} from "lucide-react";

const features = [
  {
    icon: <History className="h-7 w-7 text-white" />,
    title: "Tracing and Logging",
    description: "End-to-end traces for rapid debugging, detailed logs for every inference request."
  },
  {
    icon: <BarChart className="h-7 w-7 text-white/70" />,
    title: "Real-time Metrics",
    description: "Instant visibility into system health, latency, throughput, and cost efficiency."
  },
  {
    icon: <MessageSquare className="h-7 w-7 text-white" />,
    title: "Prompt Management",
    description: "Collaboratively version, test, and deploy prompts with low-latency retrieval."
  },
  {
    icon: <Sparkles className="h-7 w-7 text-white/70" />,
    title: "Playground",
    description: "Experiment rapidly with different prompts and models directly in the Hanzo interface."
  },
  {
    icon: <FileBadge className="h-7 w-7 text-white/70" />,
    title: "Evaluation & Feedback",
    description: "Collect, annotate, and systematically evaluate model outputs and user feedback."
  },
  {
    icon: <Database className="h-7 w-7 text-white" />,
    title: "Datasets",
    description: "Generate robust datasets from live production data to enhance model training and evaluation."
  },
  {
    icon: <Users className="h-7 w-7 text-white/70" />,
    title: "User Journey Analytics",
    description: "Visualize and optimize user paths, retention rates, and conversion funnels."
  },
  {
    icon: <AlertTriangle className="h-7 w-7 text-white/60" />,
    title: "Predictive Analytics",
    description: "AI-driven anomaly detection and predictive alerts prevent downtime and performance degradation."
  }
];

const Features = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Complete Observability for Your AI Stack</h2>
          <p className="text-xl text-neutral-300">
            Hanzo Observability equips your team with powerful tools for real-time monitoring, comprehensive tracing, and actionable insights.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="bg-gray-800/60 p-3 rounded-lg w-fit mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
