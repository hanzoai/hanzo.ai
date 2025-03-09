
import React from "react";
import { motion } from "framer-motion";
import { Database, Zap, Scale, Server, Search, ShieldCheck, Cpu, FileCode } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: Zap,
      title: "Blazing Fast Performance",
      description: "Query billions of vectors in milliseconds with optimized indexing and retrieval algorithms."
    },
    {
      icon: Scale,
      title: "Infinite Scalability",
      description: "Dynamically scale from millions to billions of vectors with distributed architecture."
    },
    {
      icon: Database,
      title: "Metadata Filtering",
      description: "Combine vector similarity search with SQL-like metadata filtering for refined results."
    },
    {
      icon: Server,
      title: "Multi-Vector Storage",
      description: "Store and query multiple vector types in a single collection for complex AI applications."
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Hybrid search combining vector similarity and keyword matching for superior relevance."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "Role-based access controls, encryption, and audit logs for secure vector operations."
    },
    {
      icon: Cpu,
      title: "GPU Acceleration",
      description: "Optional GPU acceleration for even faster vector processing and similarity calculations."
    },
    {
      icon: FileCode,
      title: "Developer-First APIs",
      description: "Intuitive SDKs for Python, TypeScript, Java, and Go with comprehensive documentation."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-indigo-900/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Developers Choose Hanzo Vector
            </h2>
            <p className="text-xl text-gray-300">
              Built by AI engineers, for AI engineers. Experience unparalleled performance, reliability, and ease of use.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-900/30 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
