
import React from "react";
import DOMPurify from "dompurify";
import { MessageInterface } from "./types";

interface ChatProps {
  conversation: MessageInterface[];
  promptText: string;
  setPromptText: (text: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Chat = ({ 
  conversation, 
  promptText, 
  setPromptText, 
  handleSubmit 
}: ChatProps) => {
  return (
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
                  __html: DOMPurify.sanitize(
                    message.content.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>')
                  )
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
            <button 
              type="submit" 
              className="rounded-l-none bg-purple-600 hover:bg-purple-700 px-4 py-2 text-[var(--white)] font-medium"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
