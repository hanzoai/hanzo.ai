
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Lightbulb, 
  BarChart4 
} from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: "Precision Monitoring",
    description: "Identify exactly where and why issues occur in real-time."
  },
  {
    icon: <Target className="h-6 w-6 text-red-400" />,
    title: "Faster Debugging",
    description: "Detailed traces and logs provide the clarity needed for rapid resolution."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-amber-400" />,
    title: "Optimized User Experiences",
    description: "Understand user behavior deeply, driving improvements that matter."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-green-400" />,
    title: "Informed Decisions",
    description: "Reliable analytics and predictive insights empower smarter product and operational decisions."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Leading Teams Choose Hanzo Observability</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 rounded-xl p-6 border border-gray-800"
            >
              <div className="bg-gray-800/60 p-3 rounded-lg w-fit mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-neutral-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl">
            <blockquote className="text-xl italic text-neutral-300 max-w-2xl mx-auto">
              "Hanzo Observability has been critical to our AI operations, giving us unprecedented visibility into our models' performance and significantly improving our debugging time."
            </blockquote>
            <div className="mt-4 text-neutral-400">
              <div className="font-medium">Alex Chen</div>
              <div className="text-sm">AI Engineering Lead, Triller</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
