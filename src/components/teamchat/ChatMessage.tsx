
import React from "react";
import DOMPurify from "dompurify";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: {
    id: number;
    sender: string;
    message: string;
    timestamp: string;
  };
  formatTimestamp: (timestamp: string) => string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, formatTimestamp }) => {
  return (
    <div
      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
    >
      {message.sender === "ai" && (
        <div className="bg-purple-600/40 h-8 w-8 rounded-full flex items-center justify-center mr-2 mt-1">
          <Bot className="h-4 w-4 text-[var(--white)]" />
        </div>
      )}
      
      <div
        className={`max-w-3xl p-3 rounded-lg ${
          message.sender === "user"
            ? "bg-blue-600/30 border border-blue-500/30"
            : "bg-gray-800/60 border border-gray-700/50"
        }`}
      >
        <div
          className="prose prose-invert text-sm"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              message.message.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>').replace(/\n/g, '<br>')
            )
          }}
        />
        <div className="text-right mt-1">
          <span className="text-xs text-neutral-400">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
      </div>
      
      {message.sender === "user" && (
        <div className="bg-blue-600/40 h-8 w-8 rounded-full flex items-center justify-center ml-2 mt-1">
          <User className="h-4 w-4 text-[var(--white)]" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
