'use client'


import { motion } from "framer-motion";
import { 
  MessageSquare, Workflow, Code, Cpu, Database, Search, 
  Server, Terminal, FileCode, Github, Zap, Lock, Globe 
} from "lucide-react";
import { Button } from "@hanzo/ui";
import { useState } from "react";

const products = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Hanzo Chat",
    description: "Interactive AI chat experiences with advanced context handling and embedding capabilities.",
    code: "import { useChat } from '@hanzo/chat';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Multi-model support including OpenAI, Anthropic, and more" },
      { icon: <Lock className="h-4 w-4" />, text: "Secure, private conversations with enterprise-grade encryption" },
      { icon: <Globe className="h-4 w-4" />, text: "Customizable chat interfaces with rich media support" },
      { icon: <Github className="h-4 w-4" />, text: "Open source client, self-hostable infrastructure" }
    ],
    productUrl: "https://docs.hanzo.ai/products/chat",
    github: "https://github.com/hanzoai/chat"
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Hanzo Flow",
    description: "Build complex AI agents and automation workflows with our visual flow builder.",
    code: "import { createFlow } from '@hanzo/flow';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Visual workflow editor for building complex AI pipelines" },
      { icon: <Lock className="h-4 w-4" />, text: "Drag-and-drop interface for connecting AI components" },
      { icon: <Globe className="h-4 w-4" />, text: "Multi-agent orchestration and communication" },
      { icon: <Github className="h-4 w-4" />, text: "Extensive library of pre-built flows and components" }
    ],
    productUrl: "https://docs.hanzo.ai/products/flow",
    github: "https://github.com/hanzoai/flow"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Hanzo LLMs",
    description: "Unified gateway to access all major language models with a single API.",
    code: "import { useLLM } from '@hanzo/llms';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Single API for 50+ language models including OpenAI, Claude, Llama" },
      { icon: <Lock className="h-4 w-4" />, text: "Intelligent routing and fallback between providers" },
      { icon: <Globe className="h-4 w-4" />, text: "Cost optimization and performance monitoring" },
      { icon: <Github className="h-4 w-4" />, text: "Open source client with enterprise security features" }
    ],
    productUrl: "https://docs.hanzo.ai/products/llms",
    github: "https://github.com/hanzoai/llms"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Hanzo MCPs",
    description: "Server and gateway for multimodal conversational processors with robust tooling.",
    code: "import { useMCP } from '@hanzo/mcps';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Unified interface for GPT-4o, Claude 3, Gemini and more" },
      { icon: <Lock className="h-4 w-4" />, text: "Tool-use capabilities with custom tool integration" },
      { icon: <Globe className="h-4 w-4" />, text: "Distributed MCP deployment across edge and cloud" },
      { icon: <Github className="h-4 w-4" />, text: "Comprehensive observability and monitoring" }
    ],
    productUrl: "https://docs.hanzo.ai/products/mcps",
    github: "https://github.com/hanzoai/mcps"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Hanzo RealtimeDB",
    description: "High-performance real-time database for massive analytics workloads.",
    code: "import { useRealtimeDB } from '@hanzo/realtimedb';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Real-time data synchronization across clients" },
      { icon: <Lock className="h-4 w-4" />, text: "Petabyte-scale analytics with millisecond queries" },
      { icon: <Globe className="h-4 w-4" />, text: "Event-driven architecture with webhooks and triggers" },
      { icon: <Github className="h-4 w-4" />, text: "Self-hostable with cloud-native deployment options" }
    ],
    productUrl: "https://docs.hanzo.ai/products/realtimedb",
    github: "https://github.com/hanzoai/realtimedb"
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Hanzo Vector",
    description: "Real-time vector search engine for semantic retrieval and AI applications.",
    code: "import { useVector } from '@hanzo/vector';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "High-performance vector database for AI embeddings" },
      { icon: <Lock className="h-4 w-4" />, text: "Hybrid search combining vector and keyword techniques" },
      { icon: <Globe className="h-4 w-4" />, text: "Real-time indexing and search capabilities" },
      { icon: <Github className="h-4 w-4" />, text: "Optimized for RAG and semantic search applications" }
    ],
    productUrl: "https://docs.hanzo.ai/products/vector",
    github: "https://github.com/hanzoai/vector"
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Hanzo Base",
    description: "One-file backend with embedded DB that scales to planetary distributed SQL.",
    code: "import { createClient } from '@hanzo/base';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Local-first development with instant cloud scaling" },
      { icon: <Lock className="h-4 w-4" />, text: "Built-in authentication, storage, and functions" },
      { icon: <Globe className="h-4 w-4" />, text: "Edge-optimized with global distribution" },
      { icon: <Github className="h-4 w-4" />, text: "100% open source and MIT licensed" }
    ],
    productUrl: "https://docs.hanzo.ai/products/base",
    github: "https://github.com/hanzoai/base"
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Hanzo Dev",
    description: "AI-powered development environment with CLI, web, and VSCode extensions.",
    code: "import { useDev } from '@hanzo/dev';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "AI assistant integrated into your workflow" },
      { icon: <Lock className="h-4 w-4" />, text: "Code generation, refactoring, and documentation" },
      { icon: <Globe className="h-4 w-4" />, text: "Available as CLI, web app, and IDE plugins" },
      { icon: <Github className="h-4 w-4" />, text: "Fully customizable and extendable" }
    ],
    productUrl: "https://docs.hanzo.ai/products/dev",
    github: "https://github.com/hanzoai/dev"
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Hanzo Code",
    description: "AI-powered code editor based on VSCode with advanced coding capabilities.",
    code: "import { useCode } from '@hanzo/code';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Built on VSCode with full extension compatibility" },
      { icon: <Lock className="h-4 w-4" />, text: "AI pair programming and code generation" },
      { icon: <Globe className="h-4 w-4" />, text: "Integrated with Hanzo's AI engineering platform" },
      { icon: <Github className="h-4 w-4" />, text: "Open source with enterprise features" }
    ],
    productUrl: "https://docs.hanzo.ai/products/code",
    github: "https://github.com/hanzoai/code"
  }
];

// Simple OpenAI-compatible chat example component
const ChatExample = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "system", content: "Welcome to Hanzo Chat. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = { role: "user", content: message };
    setChatHistory([...chatHistory, userMessage]);
    setMessage("");
    setIsLoading(true);

    // Simulate API call (in a real app, you'd call your actual API endpoint)
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: `Thanks for trying Hanzo Chat! Your message was: "${userMessage.content}"\n\nIn a real implementation, this would connect to our OpenAI-compatible API endpoint.` 
        }
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 w-full max-w-xl mx-auto">
      <div className="mb-4 h-64 overflow-y-auto bg-gray-950 rounded p-3 border border-gray-800">
        {chatHistory.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-3 p-2 rounded ${
              msg.role === "user" ? "bg-primary/10 ml-12" : "bg-gray-800/50"
            }`}
          >
            <div className="text-xs text-muted-foreground mb-1">
              {msg.role === "user" ? "You" : "Hanzo AI"}
            </div>
            <div className="whitespace-pre-wrap">{msg.content}</div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 p-2">
            <div className="w-2 h-2 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/10 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-primary/10 rounded-full animate-pulse delay-200"></div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Hanzo AI something..."
          className="flex-1 bg-gray-800 text-[var(--white)] border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white/30"
        />
        <Button type="submit" disabled={isLoading} className="bg-primary/10 hover:bg-primary/10">
          Send
        </Button>
      </form>
      <div className="mt-3 text-xs text-muted-foreground text-center">
        <code>import {'{'} createChat {'}'} from '@hanzoai/chat';</code>
      </div>
    </div>
  );
};

const Products = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--white)] mb-6">
            Hanzo AI Platform
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A comprehensive suite of AI-native tools and infrastructure
            for building modern applications.
          </p>
        </motion.div>

        {/* OpenAI-compatible chat example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-[var(--white)]">Try Hanzo Chat</h3>
            <p className="text-muted-foreground">Powered by our OpenAI-compatible API</p>
          </div>
          <ChatExample />
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 hover:border-border transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--white)]">{product.title}</h3>
              </div>
              <p className="text-foreground/80 mb-4">{product.description}</p>
              <div className="bg-gray-950 rounded-md p-3 font-mono text-sm text-muted-foreground mb-4 overflow-x-auto">
                {product.code}
              </div>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <span className="text-foreground/70 mr-2 mt-1">{feature.icon}</span>
                    <span className="text-muted-foreground text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-3">
                <Button 
                  className="flex-1"
                  variant="outline"
                  size="sm"
                >
                  <a href={product.productUrl || "#"} className="flex items-center justify-center w-full">
                    Learn More
                  </a>
                </Button>
                <Button 
                  className="flex-1 bg-gray-800 hover:bg-gray-700"
                  size="sm"
                >
                  <a href={product.github || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: products.length * 0.1 }}
          className="mt-20 p-8 bg-gradient-to-r from-white/20 via-white/15 to-white/10 rounded-xl ring-1 ring-border hover:ring-white/30 transition-all duration-300"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[var(--white)] mb-4">Ready to Start Building?</h3>
            <p className="text-foreground/80 mb-8">
              Join thousands of developers building the future with Hanzo's AI-native platform.
              Get started for free today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent text-[var(--white)] hover:bg-[var(--white)] hover:text-primary-foreground border-2 border-white transition-all duration-300"
                  >
                    Read the Docs
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://app.hanzo.ai/signup" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full sm:w-auto bg-[var(--white)] text-primary-foreground border border-gray-300 hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] transition-all duration-300"
                  >
                    Get Started Free
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
