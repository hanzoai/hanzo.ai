
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const OperatorModels = () => {
  const models = [
    {
      name: "GPT-4o",
      provider: "OpenAI",
      features: ["Highest accuracy", "Fast response time", "Best for complex tasks", "Excellent UI understanding"],
      recommended: true,
      command: "operate"
    },
    {
      name: "Claude 3",
      provider: "Anthropic",
      features: ["Strong screen analysis", "Detailed reasoning", "Long context window", "Good UI navigation"],
      recommended: false,
      command: "operate -m claude-3"
    },
    {
      name: "Gemini Pro Vision",
      provider: "Google",
      features: ["Good general performance", "Robust screen analysis", "Accessible API", "Improving rapidly"],
      recommended: false,
      command: "operate -m gemini-pro-vision"
    },
    {
      name: "Qwen-VL",
      provider: "Alibaba Cloud",
      features: ["Strong visual capabilities", "Growing feature set", "Good for basic tasks", "Alternative API option"],
      recommended: false,
      command: "operate -m qwen-vl"
    },
    {
      name: "LLaVA",
      provider: "Ollama (Local)",
      features: ["Runs locally", "No API costs", "Privacy-focused", "Basic capabilities"],
      recommended: false,
      command: "operate -m llava"
    },
    {
      name: "o1-with-ocr",
      provider: "OpenAI (Experimental)",
      features: ["Advanced OCR", "Element detection", "Highest precision", "Best for complex UIs"],
      recommended: false,
      command: "operate -m o1-with-ocr"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Supported Models
            </h2>
            <p className="text-xl text-gray-300">
              Hanzo Operator works with multiple multimodal AI models, 
              each with different capabilities and strengths
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                bg-gray-900/30 border rounded-xl p-6 hover:bg-gray-900/50 transition-colors relative
                ${model.recommended ? 'border-purple-500/50' : 'border-gray-800'}
              `}
            >
              {model.recommended && (
                <span className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                  Recommended
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-white mb-1">{model.name}</h3>
              <p className="text-sm text-gray-400 mb-4">by {model.provider}</p>
              
              <ul className="space-y-2 mb-6">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2 mt-auto">
                <p className="text-sm text-gray-400 font-mono">{model.command}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            New models are continuously being added. Check the 
            <a href="https://docs.hanzo.ai/operator/models" className="text-purple-400 hover:text-purple-300 ml-1">
              documentation
            </a> for the latest information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OperatorModels;
