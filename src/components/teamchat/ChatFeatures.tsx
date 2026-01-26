
import React from "react";
import { MessageSquare, Bot, Settings } from "lucide-react";

const ChatFeatures: React.FC = () => {
  return (
    <div className="mt-10 mb-16">
      <h2 className="text-2xl font-bold text-center mb-8">Enhanced Chat Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#fd4444]/20 to-[#fd4444]/5 p-6 rounded-xl border border-[#fd4444]/20 hover:border-[#fd4444]/40 transition-all duration-300">
          <div className="bg-[#fd4444]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-[#fd4444]" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Multimodal Conversations</h3>
          <p className="text-neutral-300">Chat with text, images, audio, and video in natural conversations with our AI assistants.</p>
        </div>

        <div className="bg-gradient-to-br from-[#fd4444]/15 to-[#fd4444]/5 p-6 rounded-xl border border-[#fd4444]/20 hover:border-[#fd4444]/40 transition-all duration-300">
          <div className="bg-[#fd4444]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Bot className="h-6 w-6 text-[#fd4444]" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Specialized Assistants</h3>
          <p className="text-neutral-300">Access domain-specific experts for coding, design, marketing, legal, and more fields.</p>
        </div>

        <div className="bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff6b6b]/5 p-6 rounded-xl border border-[#ff6b6b]/20 hover:border-[#ff6b6b]/40 transition-all duration-300">
          <div className="bg-[#ff6b6b]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Settings className="h-6 w-6 text-[#ff6b6b]" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Customizable Workflows</h3>
          <p className="text-neutral-300">Connect your data sources, APIs, and tools to create powerful AI-powered workflows.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatFeatures;
