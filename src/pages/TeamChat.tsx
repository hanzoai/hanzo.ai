
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Send, Bot, RefreshCw, Camera, Mic, Paperclip, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const TeamChat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  // Mock conversation history for demonstration
  const [chatHistory, setChatHistory] = useState([
    { 
      id: 1, 
      sender: "ai", 
      message: "Hello! I'm Hanzo Chat. How can I help you today?", 
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 2, 
      sender: "user", 
      message: "Can you help me understand how to use vector embeddings?", 
      timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 3, 
      sender: "ai", 
      message: "Vector embeddings are numerical representations of data (like text, images, or audio) that capture semantic meaning. In the context of AI and machine learning, these embeddings convert high-dimensional data into dense vectors in a continuous vector space where similar items are positioned closer together.\n\nHere's how to use vector embeddings:\n\n1. **Generate embeddings**: Convert your text or other data into vector embeddings using models like OpenAI's text-embedding-ada-002 or open-source alternatives.\n\n2. **Store embeddings**: Save these vectors in a vector database like Hanzo Vector, Pinecone, or Weaviate.\n\n3. **Perform similarity search**: When you need to find similar content, convert your query to an embedding and search for the closest vectors in your database.\n\n4. **Use for RAG applications**: Embeddings are particularly useful for Retrieval Augmented Generation, where you retrieve relevant context before generating AI responses.\n\nWould you like me to provide some code examples for implementing vector embeddings?", 
      timestamp: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 4, 
      sender: "user", 
      message: "Yes, please show me some code examples.", 
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString() 
    },
    { 
      id: 5, 
      sender: "ai", 
      message: "Here's an example of how to create and use vector embeddings with Hanzo Vector:\n\n```javascript\n// Install dependencies\n// npm install @hanzo/vector openai\n\nimport { HanzoVector } from '@hanzo/vector';\nimport { OpenAI } from 'openai';\n\n// Initialize clients\nconst vector = new HanzoVector('your_api_key');\nconst openai = new OpenAI('your_openai_api_key');\n\n// Create a collection\nasync function createCollection() {\n  const collection = await vector.createCollection({\n    name: 'documents',\n    dimensions: 1536  // Dimensions for ada-002 embeddings\n  });\n  return collection;\n}\n\n// Generate embeddings and store documents\nasync function storeDocuments(texts) {\n  const collection = await vector.getCollection('documents');\n  \n  for (const text of texts) {\n    // Generate embedding using OpenAI\n    const response = await openai.embeddings.create({\n      model: 'text-embedding-ada-002',\n      input: text\n    });\n    \n    const embedding = response.data[0].embedding;\n    \n    // Store in vector database\n    await collection.upsert({\n      vectors: [{\n        id: `doc-${Date.now()}`,\n        values: embedding,\n        metadata: { text }\n      }]\n    });\n  }\n}\n\n// Search for similar documents\nasync function searchSimilar(query) {\n  const collection = await vector.getCollection('documents');\n  \n  // Generate embedding for query\n  const response = await openai.embeddings.create({\n    model: 'text-embedding-ada-002',\n    input: query\n  });\n  \n  const queryEmbedding = response.data[0].embedding;\n  \n  // Search for similar documents\n  const results = await collection.search({\n    vector: queryEmbedding,\n    limit: 5,\n    includeMetadata: true\n  });\n  \n  return results.matches.map(match => ({\n    text: match.metadata.text,\n    score: match.score\n  }));\n}\n```\n\nThis example demonstrates the core workflow for vector embeddings:\n1. Create a collection to store your vectors\n2. Generate embeddings for your content\n3. Store those embeddings with their associated metadata\n4. Generate embeddings for queries and search for similar vectors\n\nYou can use this pattern for implementing semantic search, recommendation systems, or as part of a RAG (Retrieval Augmented Generation) pipeline with LLMs.", 
      timestamp: new Date(Date.now() - 4 * 60 * 1000).toISOString() 
    }
  ]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const newUserMessage = {
      id: chatHistory.length + 1,
      sender: "user",
      message: message,
      timestamp: new Date().toISOString()
    };
    
    setChatHistory(prev => [...prev, newUserMessage]);
    setMessage("");
    
    // Simulate AI typing response
    setIsTyping(true);
    setTimeout(() => {
      const newAIMessage = {
        id: chatHistory.length + 2,
        sender: "ai",
        message: `I've received your message: "${message}". This is a simulated response from Hanzo Chat.`,
        timestamp: new Date().toISOString()
      };
      
      setChatHistory(prev => [...prev, newAIMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-16">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <ChromeText as="h1" className="text-4xl font-bold mb-2">
                Hanzo Chat
              </ChromeText>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Connect with state-of-the-art AI models through our intuitive chat interface.
                Get answers, generate content, and solve problems with natural language.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="max-w-5xl mx-auto w-full px-4 flex-1 flex flex-col mt-8">
          {/* Chat Container */}
          <div className="flex-1 flex flex-col bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gray-900/70 p-4 border-b border-gray-800 flex items-center">
              <div className="bg-purple-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Hanzo Assistant</h3>
                <p className="text-xs text-gray-400">Powered by GPT-4o</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto text-gray-400 hover:text-white">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
                >
                  {chat.sender === "ai" && (
                    <div className="bg-purple-600/40 h-8 w-8 rounded-full flex items-center justify-center mr-2 mt-1">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-3xl p-3 rounded-lg ${
                      chat.sender === "user"
                        ? "bg-blue-600/30 border border-blue-500/30"
                        : "bg-gray-800/60 border border-gray-700/50"
                    }`}
                  >
                    <div 
                      className="prose prose-invert text-sm" 
                      dangerouslySetInnerHTML={{ 
                        __html: chat.message.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>').replace(/\n/g, '<br>') 
                      }} 
                    />
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-400">
                        {formatTimestamp(chat.timestamp)}
                      </span>
                    </div>
                  </div>
                  
                  {chat.sender === "user" && (
                    <div className="bg-blue-600/40 h-8 w-8 rounded-full flex items-center justify-center ml-2 mt-1">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-purple-600/40 h-8 w-8 rounded-full flex items-center justify-center mr-2">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-800/60 py-3 px-4 rounded-lg border border-gray-700/50">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={endOfMessagesRef} />
            </div>
            
            {/* Message Input */}
            <div className="p-4 border-t border-gray-800">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <div className="flex items-center space-x-2 mr-2">
                  <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Camera className="h-5 w-5" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Mic className="h-5 w-5" />
                  </Button>
                </div>
                
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800/50 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button 
                  type="submit" 
                  disabled={isTyping}
                  className="rounded-l-none bg-blue-600 hover:bg-blue-700 h-[42px]"
                >
                  {isTyping ? (
                    <RefreshCw className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mt-10 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Enhanced Chat Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Multimodal Conversations</h3>
                <p className="text-gray-300">Chat with text, images, audio, and video in natural conversations with our AI assistants.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Specialized Assistants</h3>
                <p className="text-gray-300">Access domain-specific experts for coding, design, marketing, legal, and more fields.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-900/20 to-green-900/5 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Customizable Workflows</h3>
                <p className="text-gray-300">Connect your data sources, APIs, and tools to create powerful AI-powered workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamChat;
