
import React from "react";
import { motion } from "framer-motion";
import { Code, Braces, CheckCircle } from "lucide-react";

const integrationGroups = [
  {
    title: "SDK Integrations", 
    items: [
      "Python", "JS/TS", "OpenTelemetry", "OpenAI SDK", "LangChain", "Llama-Index", 
      "LiteLLM", "LangGraph", "CrewAI", "Semantic Kernel", "DSPy"
    ]
  },
  {
    title: "Platforms", 
    items: [
      "Smolagents", "Pydantic AI", "AutoGen", "Amazon Bedrock", "Google Gemini", 
      "Ollama", "Flowise", "Langflow", "Dify", "OpenWeb UI"
    ]
  }
];

const Integrations = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-blue-900/30 p-3 rounded-full">
            <Braces className="h-7 w-7 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Integrated Across Your Development Workflow</h2>
          <p className="text-xl text-neutral-300">
            Hanzo Observability seamlessly integrates with your existing stack, supporting your AI operations from prototype to production.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 p-8"
          >
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Import & Initialize</h3>
            </div>
            
            <div className="bg-[var(--black)]/50 rounded-lg p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-blue-400">import</span> <span className="text-green-400">{'{'}</span> <span className="text-yellow-300">HanzoObservability</span> <span className="text-green-400">{'}'}</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'hanzo-observability'</span>
              </div>
              <div className="mb-4">
                <span className="text-purple-400">// Initialize with your project token</span>
              </div>
              <div className="mb-4">
                <span className="text-blue-400">const</span> observability <span className="text-[var(--white)]">=</span> <span className="text-blue-400">new</span> <span className="text-yellow-300">HanzoObservability</span><span className="text-[var(--white)]">(</span><span className="text-orange-400">'YOUR_PROJECT_TOKEN'</span><span className="text-[var(--white)]">);</span>
              </div>
              <div className="mb-4">
                <span className="text-purple-400">// Trace AI model calls</span>
              </div>
              <div>
                <span className="text-blue-400">await</span> observability.<span className="text-yellow-300">trace</span><span className="text-[var(--white)]">(</span><span className="text-orange-400">'chatCompletion'</span><span className="text-[var(--white)]">, {'async () => {'}</span>
                <div className="pl-5 text-[var(--white)]">
                  <span className="text-blue-400">const</span> response <span className="text-[var(--white)]">=</span> <span className="text-blue-400">await</span> openai.<span className="text-yellow-300">createChatCompletion</span><span className="text-[var(--white)]">({'{...}'})</span>
                  <div><span className="text-blue-400">return</span> response</div>
                </div>
                <span className="text-[var(--white)]">{'}'})</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {integrationGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-10">
                <h3 className="text-xl font-bold mb-6 text-neutral-300">{group.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                      className="flex items-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/40"
                    >
                      <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-8"
            >
              <a href="#integrations" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm">
                View all integrations <Code className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
