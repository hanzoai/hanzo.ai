'use client'

import React from "react";

// DOMPurify is browser-only, guard for SSR prerendering
const sanitize = (html: string) => {
  if (typeof window === 'undefined') return html;
  // Dynamic import would be better but this works for static export
  const DOMPurify = require('dompurify');
  return DOMPurify.sanitize(html);
};
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
        <div className="bg-primary/40 h-8 w-8 rounded-full flex items-center justify-center mr-2 mt-1">
          <Bot className="h-4 w-4 text-[var(--white)]" />
        </div>
      )}
      
      <div
        className={`max-w-3xl p-3 rounded-lg ${
          message.sender === "user"
            ? "bg-primary/30 border border-white/30"
            : "bg-gray-800/60 border border-gray-700/50"
        }`}
      >
        <div
          className="prose prose-invert text-sm"
          dangerouslySetInnerHTML={{
            __html: sanitize(
              message.message.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>').replace(/\n/g, '<br>')
            )
          }}
        />
        <div className="text-right mt-1">
          <span className="text-xs text-muted-foreground">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
      </div>
      
      {message.sender === "user" && (
        <div className="bg-primary/40 h-8 w-8 rounded-full flex items-center justify-center ml-2 mt-1">
          <User className="h-4 w-4 text-[var(--white)]" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
