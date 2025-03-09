
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { ArrowRight, Database, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {/* Background gradients */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              Scalable • High-Performance • AI-Ready
            </div>
            <ChromeText as="h1" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Hanzo Vector
            </ChromeText>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              High-Performance Vector Database Built for GenAI Scale
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Store, index, and search billions of high-dimensional vectors with lightning-fast performance. 
              Purpose-built for AI applications, Hanzo Vector provides the foundation for semantic search, 
              recommendations, RAG, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 border-none">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Documentation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/60 rounded-lg border border-gray-800 p-6 shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-sm text-gray-400">vector_client.py</div>
            </div>
            <pre className="text-sm text-blue-300 overflow-x-auto bg-gray-950 p-4 rounded">
{`from hanzo.vector import VectorClient

# Initialize the client
client = VectorClient()

# Create a collection
client.create_collection(
  name="document_embeddings",
  dimension=1536
)

# Add vectors with metadata
client.insert(
  collection_name="document_embeddings",
  vectors=[[0.1, 0.2, ...]], 
  metadata=[{"source": "article-1", "category": "finance"}]
)

# Semantic search with filters
results = client.search(
  collection_name="document_embeddings",
  query_vector=[0.15, 0.25, ...],
  filter="category = 'finance'",
  limit=5
)`}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
