
import { motion } from "framer-motion";
import { Code2, BarChart3, CreditCard, Wand2, Bot, Network, Cpu, Leaf } from "lucide-react";
import { Button } from "./ui/button";

const allFeatures = [
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "Hanzo App",
    description:
      "Design, build, and launch full-featured applications with our generative App Builder. Native analytics and platform API integration.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Hanzo Bot",
    description:
      "Launch agentic frameworks effortlessly using our drag-and-drop GUI to build and iterate on scalable agentic workflows.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Hanzo Code",
    description:
      "Open Source IDE that embeds AI agents directly into your coding workflow, accelerating development and deployment.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Hanzo Dev",
    description:
      "24/7 AI engineers that ingest your data and code to build, refine, test, and engineer alongside you autonomously.",
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Hanzo Router",
    description:
      "Access hosted and private models with dynamic routing, fallback systems, and advanced caching through our scalable AI platform.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Deep Learning Cloud",
    description:
      "Cloud orchestration with rapid deployment, auto-scaling, and NVIDIA hardware access through NVIDIA Inception Program.",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Green Infrastructure",
    description:
      "1 Gigawatt of green energy secured at industry-leading prices, powering sustainable AI development and deployment.",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Hanzo Network",
    description:
      "Decentralized compute fabric allocating half its capacity to building next-gen frontier models in the open.",
  },
];

const Features = () => {
  // Display only first 16 items (4 rows of 4)
  const displayedFeatures = allFeatures.slice(0, 16);
  const hasMoreFeatures = allFeatures.length > 16;

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display text-white"
          >
            Leading the Fourth Industrial Revolution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Hanzo is a developer-first AI platform bringing frontier research directly into your workflow with open, private, and decentralized solutions.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 hover:ring-white/20 transition-all flex flex-col items-center text-center"
            >
              <div className="p-2 bg-white/10 w-fit rounded-lg text-white">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        {hasMoreFeatures && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/solutions'}
              className="text-white hover:text-purple-400 transition-colors"
            >
              View All Solutions
            </Button>
          </motion.div>
        )}

        {/* Market Stats */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-white">$2T+</h3>
              <p className="mt-2 text-gray-300">Projected AI software market by 2030</p>
            </div>
            <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-white">70%</h3>
              <p className="mt-2 text-gray-300">Enterprises adopting AI solutions by 2025</p>
            </div>
            <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-white">1GW</h3>
              <p className="mt-2 text-gray-300">Green energy secured at 3.0 cent/kWh</p>
            </div>
          </motion.div>
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Industries</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Artificial Intelligence",
              "Adtech",
              "Blockchain",
              "Cloud Computing",
              "GPU",
              "Hardware",
              "Machine Learning",
              "Software",
              "Cyber Security",
              "Confidential Computing",
            ].map((industry) => (
              <span
                key={industry}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
