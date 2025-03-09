
import React from "react";
import { motion } from "framer-motion";
import { Brain, Search, Database, Sparkles } from "lucide-react";

const AIEngineering = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Built for AI Engineers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features specifically designed for AI-powered applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/20 border border-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-900/30 text-purple-400">
                  <Brain className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Model Integration</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Seamlessly integrate with OpenAI, Hugging Face, and other machine learning platforms. 
              Deploy and serve custom ML models with built-in scaling and monitoring.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">One-click API connections to popular ML services</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Simple deployment of custom models with containerization</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Performance optimization for inference workloads</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/20 border border-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-900/30 text-blue-400">
                  <Search className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Vector Search</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              High-performance vector database capabilities for semantic search, RAG applications, 
              and similarity matching across billions of vectors.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Advanced indexing for fast k-NN and ANN queries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Built-in embeddings generation from text and images</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Hybrid search combining vector and traditional queries</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/20 border border-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-900/30 text-green-400">
                  <Database className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Data Processing</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Specialized data processing pipelines for cleaning, transforming, and enriching 
              training data for machine learning models.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Automated ETL workflows for AI data preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Data versioning and lineage tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Scalable batch and stream processing</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/20 border border-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-900/30 text-amber-400">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">AI-Enhanced Features</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Ready-to-use AI capabilities that can be integrated into applications 
              with minimal configuration.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">Content generation and summarization</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">Image and video analysis with computer vision</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">Real-time anomaly detection and predictive analytics</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIEngineering;
