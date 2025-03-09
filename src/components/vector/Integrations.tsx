
import React from "react";
import { motion } from "framer-motion";

const Integrations = () => {
  const tools = [
    "LangChain", "LlamaIndex", "OpenAI", "HuggingFace", 
    "DSPy", "Haystack", "Ragas", "MemGPT", 
    "ChromaDB", "Pinecone", "Weaviate", "Qdrant"
  ];
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Plays Nicely With Your Favorite AI Dev Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seamlessly integrate Hanzo Vector with popular AI frameworks, libraries, and platforms.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:bg-gray-900/50 transition-colors group"
            >
              <div className="text-xl font-semibold text-gray-300 group-hover:text-indigo-400 transition-colors">
                {tool}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
