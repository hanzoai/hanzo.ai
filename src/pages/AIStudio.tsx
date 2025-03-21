
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code,
  Bot,
  MessageSquare,
  Cpu,
  Settings,
  PanelLeft,
  Layers,
  Terminal,
  Save,
  Play,
  Share2,
  Download,
  Grid3X3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const AIStudio = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [promptText, setPromptText] = useState("");
  const [modelSelection, setModelSelection] = useState("gpt-4o");
  const [showSidebar, setShowSidebar] = useState(true);
  
  // Mock conversation for demonstration
  const [conversation, setConversation] = useState([
    { role: "assistant", content: "Welcome to Hanzo AI Studio. How can I help you today?" },
    { role: "user", content: "I need to create a React component that renders a carousel" },
    { role: "assistant", content: "Sure! Here's a simple React carousel component using Framer Motion:\n\n```jsx\nimport { motion, AnimatePresence } from 'framer-motion';\nimport { useState } from 'react';\n\nconst Carousel = ({ images }) => {\n  const [currentIndex, setCurrentIndex] = useState(0);\n\n  const handleNext = () => {\n    setCurrentIndex((prevIndex) => \n      prevIndex === images.length - 1 ? 0 : prevIndex + 1\n    );\n  };\n\n  const handlePrevious = () => {\n    setCurrentIndex((prevIndex) => \n      prevIndex === 0 ? images.length - 1 : prevIndex - 1\n    );\n  };\n\n  return (\n    <div className=\"relative overflow-hidden\">\n      <div className=\"flex justify-between absolute inset-x-0 top-1/2 z-10\">\n        <button onClick={handlePrevious}>Previous</button>\n        <button onClick={handleNext}>Next</button>\n      </div>\n      <AnimatePresence mode=\"wait\">\n        <motion.img\n          key={currentIndex}\n          src={images[currentIndex]}\n          initial={{ opacity: 0 }}\n          animate={{ opacity: 1 }}\n          exit={{ opacity: 0 }}\n          transition={{ duration: 0.5 }}\n          className=\"w-full h-64 object-cover\"\n        />\n      </AnimatePresence>\n    </div>\n  );\n};\n\nexport default Carousel;\n```\n\nThis component takes an array of image URLs and displays them one at a time with animated transitions. You can customize it further based on your specific needs." }
  ]);

  const models = [
    { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI" },
    { id: "claude-3-opus", name: "Claude 3 Opus", provider: "Anthropic" },
    { id: "llama-3-70b", name: "Llama 3 70B", provider: "Meta" },
    { id: "gemini-pro", name: "Gemini Pro", provider: "Google" },
    { id: "mixtral-8x7b", name: "Mixtral 8x7B", provider: "Mistral" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptText.trim()) return;
    
    // Add user message to conversation
    setConversation([...conversation, { role: "user", content: promptText }]);
    
    // Mock response (in a real app, we'd call an API here)
    setTimeout(() => {
      setConversation(prev => [...prev, { 
        role: "assistant", 
        content: `I received your message: "${promptText}". This is a placeholder response from the AI Studio demo.` 
      }]);
    }, 1000);
    
    setPromptText("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col mt-16">
        {/* Hero */}
        <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <ChromeText as="h1" className="text-4xl font-bold mb-2">
              Hanzo AI Studio
            </ChromeText>
            <p className="text-gray-300 max-w-xl">
              Your workspace for AI model experimentation, prompt engineering, and creating agent-based applications.
            </p>
          </div>
        </div>
        
        {/* Main Studio Interface */}
        <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full p-4">
          {/* Sidebar */}
          {showSidebar && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-gray-900/50 border-r border-gray-800 h-full mr-4 p-4 overflow-y-auto"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">MODELS</h3>
                  <div className="space-y-1">
                    {models.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => setModelSelection(model.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                          modelSelection === model.id ? "bg-purple-900/50 text-white" : "text-gray-300 hover:bg-gray-800"
                        }`}
                      >
                        <Cpu className="w-4 h-4 mr-2" />
                        <div>
                          <div>{model.name}</div>
                          <div className="text-xs text-gray-500">{model.provider}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">SAVED PROJECTS</h3>
                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Customer Support Bot</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      <span>Code Generator</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 flex items-center">
                      <Bot className="w-4 h-4 mr-2" />
                      <span>Data Analysis Agent</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
            {/* Toolbar */}
            <div className="bg-gray-900/70 p-2 border-b border-gray-800 flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowSidebar(!showSidebar)}
                className="text-gray-400 hover:text-white mr-2"
              >
                <PanelLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-1 mx-2">
                <Button 
                  variant={activeTab === "chat" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setActiveTab("chat")}
                  className="text-sm"
                >
                  <MessageSquare className="h-4 w-4 mr-1" /> Chat
                </Button>
                <Button 
                  variant={activeTab === "playground" ? "secondary" : "ghost"}
                  size="sm" 
                  onClick={() => setActiveTab("playground")}
                  className="text-sm"
                >
                  <Layers className="h-4 w-4 mr-1" /> Playground
                </Button>
                <Button 
                  variant={activeTab === "terminal" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setActiveTab("terminal")}
                  className="text-sm"
                >
                  <Terminal className="h-4 w-4 mr-1" /> Terminal
                </Button>
              </div>
              
              <div className="ml-auto flex items-center space-x-1">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Save className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Chat Interface */}
            {activeTab === "chat" && (
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {conversation.map((message, i) => (
                    <div 
                      key={i} 
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={`max-w-3xl p-3 rounded-lg ${
                          message.role === "user" 
                            ? "bg-purple-600/30 border border-purple-500/30" 
                            : "bg-gray-800/60 border border-gray-700/50"
                        }`}
                      >
                        <div 
                          className="prose prose-invert text-sm" 
                          dangerouslySetInnerHTML={{ 
                            __html: message.content.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>') 
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Input */}
                <div className="p-4 border-t border-gray-800">
                  <form onSubmit={handleSubmit}>
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        placeholder="Send a message..."
                        className="flex-1 bg-gray-800/50 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <Button 
                        type="submit" 
                        className="rounded-l-none bg-purple-600 hover:bg-purple-700"
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            {/* Playground Interface */}
            {activeTab === "playground" && (
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <Grid3X3 className="h-16 w-16 text-gray-600 mb-4" />
                <h3 className="text-xl font-medium mb-2">Playground Mode</h3>
                <p className="text-gray-400 max-w-md">
                  This feature allows you to create custom AI workflows with a visual interface.
                  Coming soon in a future update.
                </p>
              </div>
            )}
            
            {/* Terminal Interface */}
            {activeTab === "terminal" && (
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <Terminal className="h-16 w-16 text-gray-600 mb-4" />
                <h3 className="text-xl font-medium mb-2">Terminal Mode</h3>
                <p className="text-gray-400 max-w-md">
                  This feature provides a command-line interface for advanced model interactions.
                  Coming soon in a future update.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIStudio;
