
import React from "react";
import { motion } from "framer-motion";
import { Check, Cpu, Box, MessageSquare, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

// Model categories and their respective models
const modelCategories = [
  {
    name: "Foundation Models",
    description: "Industry-leading large language models for various use cases",
    models: [
      { name: "GPT-4o", provider: "Open Source", features: ["Multimodal capabilities", "Advanced reasoning", "High accuracy", "Fast performance"] },
      { name: "Claude 3 Opus", provider: "Open Source", features: ["Best reasoning", "Strong knowledge retrieval", "Long context window", "Low hallucination rate"] },
      { name: "Llama 3 70B", provider: "Open Source", features: ["Strong multilingual support", "Open weights", "Fast inference", "Cost-effective"] },
      { name: "Gemini Pro", provider: "Open Source", features: ["Multimodal reasoning", "Good tool use", "State-of-the-art performance", "Works in many languages"] },
      { name: "Mixtral 8x7B", provider: "Open Source", features: ["Mixture of experts", "Good performance-to-cost ratio", "Open weights", "Efficient context handling"] },
      { name: "Phi-3", provider: "Open Source", features: ["Compact yet powerful", "Fast inference speeds", "Excellent performance per parameter", "Low resource requirements"] },
    ]
  },
  {
    name: "Specialized Models",
    description: "Domain-specific models optimized for particular tasks",
    models: [
      { name: "CodeLlama", provider: "Open Source", features: ["Code generation", "Code completion", "Documentation", "Multi-language support"] },
      { name: "DALL-E 3", provider: "Open Source", features: ["Image generation", "High fidelity", "Text-to-image", "Creative outputs"] },
      { name: "Whisper", provider: "Open Source", features: ["Speech-to-text", "Multi-language ASR", "Low error rate", "Robust to background noise"] },
      { name: "Stable Diffusion XL", provider: "Open Source", features: ["High resolution images", "Open weights", "Multiple styles", "Fast generation"] },
    ]
  },
  {
    name: "Custom Models",
    description: "Deploy and customize models to meet your specific needs",
    models: [
      { name: "Fine-tuned Models", provider: "Custom", features: ["Domain adaptation", "Company knowledge base", "Specialized tasks", "Improved performance"] },
      { name: "Hugging Face Models", provider: "Custom", features: ["Community models", "Thousands of options", "Specialized capabilities", "Open source"] },
      { name: "Custom Embedding Models", provider: "Custom", features: ["Domain-specific embeddings", "Custom similarity metrics", "Enhanced search", "Optimized retrieval"] },
    ]
  }
];

const SupportedModels = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ChromeText as="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Unified Model Access
            </ChromeText>
            <p className="text-xl text-gray-300">
              Access thousands of AI models through a single, unified API with consistent interfaces
              and predictable pricing
            </p>
          </motion.div>
        </div>

        {/* Model Categories */}
        {modelCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
            <p className="text-gray-300 mb-8">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.models.map((model, modelIndex) => (
                <motion.div
                  key={modelIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: modelIndex * 0.1 }}
                  className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <Cpu className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="text-xl font-semibold text-white">{model.name}</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">via {model.provider}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Features Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30 mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Single API for Everything</h3>
          <p className="text-lg text-gray-300 mb-8">
            Our unified API provides seamless access to all AI capabilities through a consistent, developer-friendly interface
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/30 p-4 rounded-lg">
              <Brain className="h-8 w-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Model Routing</h4>
              <p className="text-sm text-gray-300">
                Smart routing to optimal models based on task, cost, and performance requirements
              </p>
            </div>
            
            <div className="bg-black/30 p-4 rounded-lg">
              <MessageSquare className="h-8 w-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Document Processing</h4>
              <p className="text-sm text-gray-300">
                Built-in document parsing, chunking, and semantic analysis capabilities
              </p>
            </div>
            
            <div className="bg-black/30 p-4 rounded-lg">
              <Box className="h-8 w-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Vector Search</h4>
              <p className="text-sm text-gray-300">
                Integrated vector database for semantic search and retrieval augmented generation
              </p>
            </div>
            
            <div className="bg-black/30 p-4 rounded-lg">
              <Database className="h-8 w-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Knowledge Base</h4>
              <p className="text-sm text-gray-300">
                Create, manage and query custom knowledge bases for your AI applications
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-lg">
              Explore the API
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedModels;
