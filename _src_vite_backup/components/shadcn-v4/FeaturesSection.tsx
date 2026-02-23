
import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Terminal, Paintbrush, Layout, 
  RefreshCcw, SquareCode, ThumbsUp, Layers 
} from "lucide-react";

const features = [
  {
    icon: <Terminal className="h-6 w-6 text-[#fd4444]" />,
    title: "CLI Support for Tailwind v4",
    description: "Initialize new projects with Tailwind v4 using the updated CLI."
  },
  {
    icon: <SquareCode className="h-6 w-6 text-[#fd4444]" />,
    title: "@theme Directive Support",
    description: "Full support for the new @theme directive and @theme inline option."
  },
  {
    icon: <RefreshCcw className="h-6 w-6 text-[#fd4444]" />,
    title: "Forwards Compatibility",
    description: "Existing apps with Tailwind v3 and React 18 will still work with new components."
  },
  {
    icon: <Code className="h-6 w-6 text-[#fd4444]" />,
    title: "No More forwardRefs",
    description: "We've removed the forwardRefs and adjusted the types for better DX."
  },
  {
    icon: <Layers className="h-6 w-6 text-[#fd4444]" />,
    title: "Data Slot Attributes",
    description: "Every primitive now has a data-slot attribute for styling."
  },
  {
    icon: <Paintbrush className="h-6 w-6 text-[#fd4444]" />,
    title: "Clean Component Styles",
    description: "We've fixed and cleaned up the styling of all components."
  },
  {
    icon: <Layout className="h-6 w-6 text-[#fd4444]" />,
    title: "New Default Style",
    description: "New projects will use new-york style by default."
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-[#fd4444]" />,
    title: "OKLCH Color Conversion",
    description: "HSL colors are now automatically converted to OKLCH."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What's New in v4?</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Explore the latest features and improvements in shadcn/ui with Tailwind v4 and React 19.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-[#fd4444]/30 transition-colors"
            >
              <div className="bg-gray-800/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
