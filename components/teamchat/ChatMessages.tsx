'use client'

import React from "react";
import ChatMessage from "./ChatMessage";
import { Bot } from "lucide-react";

interface ChatMessagesProps {
  chatHistory: Array<{
    id: number;
    sender: string;
    message: string;
    timestamp: string;
  }>;
  isTyping: boolean;
  formatTimestamp: (timestamp: string) => string;
  endOfMessagesRef: React.RefObject<HTMLDivElement>;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ 
  chatHistory, 
  isTyping, 
  formatTimestamp,
  endOfMessagesRef
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {chatHistory.map((chat) => (
        <ChatMessage 
          key={chat.id} 
          message={chat} 
          formatTimestamp={formatTimestamp} 
        />
      ))}
      
      {isTyping && (
        <div className="flex justify-start mb-4">
          <div className="bg-red-600/40 h-8 w-8 rounded-full flex items-center justify-center mr-2">
            <Bot className="h-4 w-4 text-[var(--white)]" />
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
  );
};

export default ChatMessages;
