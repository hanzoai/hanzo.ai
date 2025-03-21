
import React from "react";
import { MessageSquare, Bot, Settings } from "lucide-react";

const ChatFeatures: React.FC = () => {
  return (
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
  );
};

export default ChatFeatures;
