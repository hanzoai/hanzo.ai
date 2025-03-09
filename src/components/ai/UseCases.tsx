
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, BookOpen, Search, FileCode, Database, Brain, Headphones } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots, virtual assistants, and customer support agents with natural language understanding.',
      color: 'bg-blue-500/20',
      textColor: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'Generative Content',
      description: 'Create text, images, code, and other content with AI-powered generation and customization.',
      color: 'bg-purple-500/20',
      textColor: 'text-purple-400'
    },
    {
      icon: Search,
      title: 'Knowledge Retrieval',
      description: 'Implement semantic search, question answering, and information extraction from your data.',
      color: 'bg-green-500/20',
      textColor: 'text-green-400'
    },
    {
      icon: Bot,
      title: 'Autonomous Agents',
      description: 'Deploy AI agents that can perform complex tasks, make decisions, and execute workflows autonomously.',
      color: 'bg-pink-500/20',
      textColor: 'text-pink-400'
    },
    {
      icon: FileCode,
      title: 'Developer Tooling',
      description: 'Enhance your development workflow with AI-powered code generation, debugging, and documentation.',
      color: 'bg-yellow-500/20',
      textColor: 'text-yellow-400'
    },
    {
      icon: Headphones,
      title: 'Voice & Speech',
      description: 'Convert speech to text, text to speech, and analyze voice interactions with advanced AI models.',
      color: 'bg-red-500/20',
      textColor: 'text-red-400'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Versatile AI Use Cases
            </h2>
            <p className="text-xl text-gray-300">
              Hanzo's AI platform supports a wide range of intelligent applications across industries
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/40 transition-colors group"
            >
              <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${useCase.color} group-hover:bg-opacity-30`}>
                <useCase.icon className={`h-7 w-7 ${useCase.textColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Implementation example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Simple Implementation</h3>
              <p className="text-gray-400 mb-6">
                Build powerful AI applications with just a few lines of code using our intuitive SDK
              </p>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre>
{`import { Hanzo } from '@hanzo/ai';

// Initialize the Hanzo AI client
const hanzo = new Hanzo({
  apiKey: process.env.HANZO_API_KEY
});

// Create a conversation with memory
const conversation = hanzo.conversation({
  model: 'gpt-4o',
  memory: true,
  system: 'You are a helpful assistant'
});

// Send a message and get a response
const response = await conversation.send('Tell me about AI engineering');

console.log(response);`}
                </pre>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-950 p-8 flex flex-col">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-purple-400" />
                Documentation Example
              </h4>
              <div className="flex flex-col h-full space-y-4 overflow-y-auto">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Database className="h-4 w-4 text-blue-400 mr-2" />
                    <h5 className="text-blue-400 font-medium">Vector Search</h5>
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
{`// Create a vector store
const vectorStore = hanzo.vectorStore('my-store');

// Add documents to the store
await vectorStore.addDocuments([
  { text: 'AI engineering best practices...' },
  { text: 'Deploying models to production...' }
]);

// Search for similar documents
const results = await vectorStore.search(
  'How to deploy AI models?', 
  { limit: 3 }
);`}
                  </pre>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Bot className="h-4 w-4 text-green-400 mr-2" />
                    <h5 className="text-green-400 font-medium">AI Agents</h5>
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
{`// Create an agent with tools
const agent = hanzo.agent({
  model: 'claude-3-opus',
  tools: [
    hanzo.tools.webSearch(),
    hanzo.tools.codeInterpreter(),
    vectorStore.asTool('knowledge')
  ]
});

// Run the agent with a task
const result = await agent.run(
  'Analyze our production metrics and suggest optimizations'
);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
