
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Bot, Code, ServerIcon, Database, Share2 } from "lucide-react";

const FeatureCard = ({ title, description, icon, list, code = null }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          {icon}
          <h3 className="text-2xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-neutral-300 mb-4">{description}</p>
        </div>
        
        {list && (
          <div className="mb-4">
            {list.map((item, index) => (
              <div key={index} className="text-neutral-400 mb-2">{item}</div>
            ))}
          </div>
        )}
        
        {code && (
          <div className="mt-auto">
            <div className="bg-gray-950 rounded-lg p-4 font-mono text-xs text-neutral-300 text-left overflow-auto">
              <pre>{code}</pre>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const HanzoAppFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Features 01</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            title="Chatflow LLM Orchestration"
            description="Connect LLMs with memory, data loaders, cache, moderation and many more"
            icon={<MessageCircle className="h-10 w-10 text-[#fd4444]" />}
            list={["Langchain", "LlamaIndex", "100+ integrations"]}
          />
          
          <FeatureCard 
            title="Agents & Assistants"
            description="Create autonomous agent that can uses tools to execute different tasks"
            icon={<Bot className="h-10 w-10 text-[#fd4444]" />}
            list={["Custom Tools", "OpenAI Assistant", "Function Agent"]}
            code={`import requests
 
url = "/api/v1/prediction/:id"
 
def query(payload):
  response = requests.post(
    url,
    json = payload
  )
  return response.json()
 
output = query({
  question: "hello!"
)}`}
          />
          
          <FeatureCard 
            title="Developer Friendly API, SDK, Embed"
            description="Extend and integrate to your applications using APIs, SDK and Embedded Chat"
            icon={<Code className="h-10 w-10 text-[#fd4444]" />}
            list={["APIs", "Embedded Widget", "React SDK"]}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Features 02</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          <FeatureCard 
            title="Platform Agnostic Open source LLMs"
            description="Run in air-gapped environment with local LLMs, embeddings and vector databases"
            icon={<ServerIcon className="h-10 w-10 text-[#fd4444]" />}
            list={[
              "HuggingFace, Ollama, LocalAI, Replicate", 
              "Llama2, Mistral, Vicuna, Orca, Llava", 
              "Self host on AWS, Azure, GCP"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default HanzoAppFeatures;
