import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Server,
  Clock,
  Brain,
  LineChart,
  Shield,
  MessageSquare,
} from "lucide-react";

const categories = [
  {
    name: "Data",
    icon: Database,
    color: "#3b82f6",
    services: ["SQL", "Vector", "KV", "Storage", "Search"],
  },
  {
    name: "Compute",
    icon: Server,
    color: "#8b5cf6",
    services: ["Functions", "Machines", "Gateway"],
  },
  {
    name: "Async",
    icon: Clock,
    color: "#06b6d4",
    services: ["Tasks", "Cron", "Queues", "PubSub"],
  },
  {
    name: "ML",
    icon: Brain,
    color: "#fd4444",
    services: ["Training", "Serving", "Models"],
  },
  {
    name: "Observability",
    icon: LineChart,
    color: "#22c55e",
    services: ["Metrics", "Logs", "Traces"],
  },
  {
    name: "Platform",
    icon: Shield,
    color: "#f59e0b",
    services: ["IAM", "KMS", "Edge", "Networking"],
  },
  {
    name: "Apps",
    icon: MessageSquare,
    color: "#ec4899",
    services: ["Chat", "Agent", "MCP", "Console"],
  },
];

const PlatformOverviewSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #fd4444 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
          >
            Complete Platform
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Everything you need to build
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Seven integrated product categories. One unified platform. Infinitely scalable.
          </p>
        </motion.div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300"
                style={{
                  boxShadow: `0 0 0 1px transparent`,
                }}
                whileHover={{
                  boxShadow: `0 0 40px -10px ${category.color}40`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2">
                  {category.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors cursor-default"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Hover accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] rounded-full"
                  style={{ backgroundColor: category.color }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}

          {/* Central "Connected" card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="md:col-span-2 lg:col-span-3 p-8 rounded-xl border border-[#fd4444]/30 bg-gradient-to-br from-[#fd4444]/10 to-transparent"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  All connected. Zero config.
                </h3>
                <p className="text-neutral-400">
                  Every service works together out of the box. Auth, data, functions, and AI - unified with a single API key.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {categories.slice(0, 5).map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.name}
                        className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center"
                        style={{ backgroundColor: `${cat.color}30` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: cat.color }} />
                      </div>
                    );
                  })}
                </div>
                <span className="text-sm text-neutral-500">+2 more</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverviewSection;
