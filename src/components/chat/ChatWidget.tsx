import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, ExternalLink, Bot } from "lucide-react";

const BRAND_COLOR = "#e11633";

// Quick action buttons
const quickActions = [
  { label: "What is Hanzo?", value: "What is Hanzo AI and what can I build with it?" },
  { label: "Get started", value: "How do I get started with Hanzo?" },
  { label: "Pricing", value: "What are Hanzo's pricing plans?" },
  { label: "API docs", value: "Where can I find the API documentation?" },
];

// System context for Hanzo AI
const HANZO_CONTEXT = `You are the Hanzo AI assistant on hanzo.ai. Help users understand and use the Hanzo platform.

Key Information:
- Hanzo is an AI PaaS (Platform as a Service) for building AI-powered applications
- Products include: Hanzo Dev (AI coding agent), Hanzo Auto (workflow automation), Hanzo Flow (visual AI workflow builder)
- Infrastructure: Vector DB, SQL, KV, Message Queue, Functions, Machines
- 260+ MCP (Model Context Protocol) tools available
- All core products are open source (MIT/Apache 2.0)
- GitHub orgs: hanzoai (AI), hanzo-js (JavaScript SDKs), hanzo-apps (templates and starters)

Products:
- Hanzo Dev (@hanzo/dev): Terminal-based AI coding agent that writes, debugs, tests, and opens PRs
- Hanzo Auto: Workflow automation with AI agents (based on n8n-style visual flows)
- Hanzo Flow: Visual AI/LLM workflow builder for creating AI pipelines
- Hanzo API: OpenAI-compatible API gateway to 100+ AI models

Hanzo Network:
- Decentralized AI compute network
- Contribute GPU power and earn rewards
- Powers AI inference and training at scale
- Learn more at hanzo.network

Getting Started:
1. Install: curl -fsSL hanzo.sh/install.sh | sh
2. Login: hanzo login
3. Start coding: hanzo dev "Build a RAG chatbot"

Templates (launch instantly at hanzo.app):
- ai-chat: Full-featured AI chat application
- rag-starter: RAG application with vector search
- agent-toolkit: Multi-agent application starter
- api-template: AI API server with streaming
- saas-starter: Full SaaS with AI features

Links:
- Docs: docs.hanzo.ai
- GitHub: github.com/hanzoai
- Discord: discord.gg/hanzo
- Research: zenlm.org
- Network: hanzo.network
- Full Chat: hanzo.chat

Help users understand the platform, get started, find templates, and discover the right resources.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm Hanzo AI. How can I help you today? I can answer questions about our platform, help you get started, or point you to the right resources.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call Hanzo AI API
      const response = await fetch("https://api.hanzo.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Use public key for widget - rate limited
          "Authorization": "Bearer hz_widget_public",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          messages: [
            { role: "system", content: HANZO_CONTEXT },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: text },
          ],
          max_tokens: 500,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          role: "assistant",
          content: data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Fallback response
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'm having trouble connecting right now. You can visit [docs.hanzo.ai](https://docs.hanzo.ai) for documentation or join our [Discord](https://discord.gg/hanzo) for help!",
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting. Please try again or visit [docs.hanzo.ai](https://docs.hanzo.ai).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (value: string) => {
    handleSend(value);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        style={{ backgroundColor: BRAND_COLOR }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: BRAND_COLOR }}>
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Hanzo AI</div>
                  <div className="text-[10px] text-neutral-500">Ask me anything</div>
                </div>
              </div>
              <a
                href="https://hanzo.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1"
              >
                Full chat
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                      message.role === "user"
                        ? "bg-[#fd4444] text-white"
                        : "bg-neutral-900 text-neutral-300 border border-neutral-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neutral-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-neutral-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-neutral-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick actions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleQuickAction(action.value)}
                      className="text-xs px-3 py-1.5 rounded-full border border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-neutral-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-700"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2 rounded-lg transition-colors disabled:opacity-50"
                  style={{ backgroundColor: BRAND_COLOR }}
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
