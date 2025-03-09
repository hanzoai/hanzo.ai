
import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Simplicity",
    japanese: "簡素",
    description: "Complexity must be hidden beneath simplicity. The best tools feel effortless."
  },
  {
    title: "Clarity",
    japanese: "明晰",
    description: "Every component should have a clear purpose. Every action should have a predictable outcome."
  },
  {
    title: "Elegance",
    japanese: "優雅",
    description: "Solutions should be beautiful not only in function, but also in form and implementation."
  },
  {
    title: "Efficiency",
    japanese: "効率",
    description: "Systems should be designed to maximize productivity and minimize waste."
  },
  {
    title: "Harmony",
    japanese: "調和",
    description: "Components should work together seamlessly to create a cohesive whole."
  }
];

const ZenPrinciples: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {principles.map((principle, index) => (
        <motion.div
          key={principle.title}
          className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-4xl text-purple-400 mb-2 font-bold">{principle.japanese}</div>
          <h3 className="text-xl font-bold mb-2 text-white">{principle.title}</h3>
          <p className="text-gray-300">{principle.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ZenPrinciples;
