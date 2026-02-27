'use client'

import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Code,
  BookOpen,
  Search,
  PenLine,
  Minimize2,
  Maximize2,
  ChevronDown,
  Check,
} from "lucide-react";

// Available Zen models for the dropdown
const zenModels = [
  { id: "zen3-nano", name: "Zen Nano", params: "4B", description: "Fast general-purpose" },
  { id: "zen4-mini", name: "Zen Mini", params: "8B", description: "General-purpose" },
  { id: "zen4-coder-flash", name: "Zen Coder Flash", params: "30B MoE", description: "Fast code generation" },
  { id: "zen4-coder", name: "Zen Coder", params: "480B MoE", description: "Advanced coding" },
];

// Chat action presets - matching footer order
const chatPresets = [
  { icon: PenLine, label: "Write", prompt: "Help me write " },
  { icon: BookOpen, label: "Learn", prompt: "Explain how " },
  { icon: Code, label: "Code", prompt: "Help me write code for " },
  { icon: Search, label: "Search", prompt: "Find information about " },
];

// Page context mapping for better AI responses
const getPageContext = (pathname: string): string => {
  const contexts: Record<string, string> = {
    "/": "Hanzo homepage - AI platform overview",
    "/dev": "Hanzo Dev - Multi-agent coding workspace with parallel agents, dialable autonomy, and evidence-driven output",
    "/cloud": "Hanzo Cloud - Complete cloud platform with 90+ managed services",
    "/platform": "Hanzo Platform - Open source backend-as-a-service",
    "/ai": "Hanzo AI - Foundation models and AI capabilities",
    "/products": "Hanzo Products catalog",
    "/pricing": "Hanzo Pricing plans and options",
    "/blockchain": "Hanzo Web3 - Blockchain infrastructure services",
    "/operative": "Hanzo Operative - AI agents and automation",
    "/base": "Hanzo Base - Backend-as-a-service",
    "/functions": "Hanzo Functions - Serverless compute",
    "/datastore": "Hanzo Datastore - Managed databases",
    "/vector": "Hanzo Vector - Vector database for AI",
    "/analytics": "Hanzo Analytics - Observability and telemetry",
    "/realtime": "Hanzo Realtime - WebSocket and live sync",
    "/identity": "Hanzo Identity - Authentication and authorization",
    "/edge": "Hanzo Edge - Edge computing infrastructure",
    "/enterprise": "Hanzo Enterprise - Enterprise solutions",
    "/contact": "Hanzo Contact - Get in touch",
    "/team": "Hanzo Team - Meet the team",
    "/security": "Hanzo Security - Security practices and compliance",
    "/zen": "Zen AI Models - Open source AI model family",
    "/philosophy": "Zen of Hanzo - Our engineering principles",
    "/solutions": "Hanzo Solutions - Use cases and industries",
  };

  // Check for partial matches
  for (const [path, context] of Object.entries(contexts)) {
    if (pathname.startsWith(path) && path !== "/") {
      return context;
    }
  }

  return contexts[pathname] || `Hanzo AI page: ${pathname}`;
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const GlobalChatWidget = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(zenModels[0]);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modelDropdownRef = useRef<HTMLDivElement>(null);

  const pageContext = getPageContext(pathname);

  // Close model dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modelDropdownRef.current && !modelDropdownRef.current.contains(event.target as Node)) {
        setIsModelDropdownOpen(false);
      }
    };

    if (isModelDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModelDropdownOpen]);

  // Listen for events from footer chat widget
  useEffect(() => {
    const handleOpenChat = (event: CustomEvent) => {
      setIsOpen(true);

      // If there's a message from footer, set it as input
      if (event.detail?.message) {
        setInput(event.detail.message);
        // Optionally auto-submit
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }

      // If there's an action (Write, Learn, Code), set the appropriate prompt
      if (event.detail?.action) {
        const preset = chatPresets.find(p => p.label === event.detail.action);
        if (preset) {
          setInput(preset.prompt);
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }
    };

    window.addEventListener('openGlobalChat', handleOpenChat as EventListener);
    return () => window.removeEventListener('openGlobalChat', handleOpenChat as EventListener);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Add welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: `Hi! I'm here to help you with anything related to Hanzo. You're currently viewing ${pageContext}. How can I assist you today?`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, pageContext]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call Hanzo AI API with selected Zen model
      const response = await fetch("https://api.hanzo.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer hz_widget_public",
        },
        body: JSON.stringify({
          model: selectedModel.id,
          messages: [
            {
              role: "system",
              content: `You are Zen AI, powered by the ${selectedModel.name} model (${selectedModel.params}). You're helping users on the Hanzo AI website. Current page context: ${pageContext}. Be helpful, concise, and knowledgeable about Hanzo's products, Zen AI models, and AI development tools. For technical questions, provide accurate information. For pricing or sales, direct users to /pricing or /contact.`,
            },
            ...messages.slice(-10).map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: input.trim() },
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.choices[0].message.content,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Fallback for API errors
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `I'm having trouble connecting to the AI service right now. You can explore our documentation at [docs.hanzo.ai](https://docs.hanzo.ai), try the full chat at [hanzo.chat](https://hanzo.chat), or contact our team at [/contact](/contact).`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      // Fallback for network errors
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I'm experiencing connectivity issues. Please try [hanzo.chat](https://hanzo.chat) for the full AI experience, or visit [docs.hanzo.ai](https://docs.hanzo.ai) for documentation.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, pageContext, messages, selectedModel]);

  const handlePreset = (preset: typeof chatPresets[0]) => {
    setInput(preset.prompt);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-background border border-border"
          >
            <img src="/zen-logo.png" alt="Zen AI" className="w-8 h-8" />
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col ${
              isExpanded
                ? "inset-4 md:inset-8"
                : "bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[80vh]"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-background border border-border">
                  <img src="/zen-logo.png" alt="Zen AI" className="w-5 h-5" />
                </div>
                {/* Model selector dropdown */}
                <div className="relative" ref={modelDropdownRef}>
                  <button
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className="flex items-center gap-1.5 hover:bg-accent/50 rounded-md px-2 py-1 transition-colors"
                  >
                    <div className="text-left">
                      <div className="text-foreground text-sm font-medium flex items-center gap-1.5">
                        {selectedModel.name}
                        <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1 py-0.5 rounded">
                          {selectedModel.params}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${isModelDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Model dropdown menu */}
                  <AnimatePresence>
                    {isModelDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute left-0 top-full mt-1 w-56 bg-secondary border border-border rounded-lg shadow-xl overflow-hidden z-10"
                      >
                        {zenModels.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-accent transition-colors ${
                              selectedModel.id === model.id ? 'bg-accent/50' : ''
                            }`}
                          >
                            <div>
                              <div className="text-sm text-foreground flex items-center gap-2">
                                {model.name}
                                <span className="text-[10px] font-mono text-muted-foreground">{model.params}</span>
                              </div>
                              <div className="text-[10px] text-muted-foreground">{model.description}</div>
                            </div>
                            {selectedModel.id === model.id && (
                              <Check className="w-4 h-4 text-foreground/70" />
                            )}
                          </button>
                        ))}
                        <div className="border-t border-border px-3 py-2">
                          <a
                            href="/zen"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            View all models →
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  {isExpanded ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary px-4 py-2 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Preset buttons */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {chatPresets.map((preset) => {
                    const Icon = preset.icon;
                    return (
                      <button
                        key={preset.label}
                        onClick={() => handlePreset(preset)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary border border-border text-muted-foreground text-xs font-medium hover:bg-accent hover:text-foreground transition-colors"
                      >
                        <Icon className="w-3 h-3" />
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything..."
                  className="w-full bg-secondary border border-border rounded-full px-4 py-2.5 pr-12 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-border transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-50"
                  style={{ backgroundColor: input.trim() ? "var(--primary)" : "transparent" }}
                >
                  <Send className={`w-4 h-4 ${input.trim() ? "text-primary-foreground" : "text-muted-foreground"}`} />
                </button>
              </div>
              <div className="mt-2 text-center">
                <span className="text-muted-foreground/60 text-[10px]">
                  Press Enter to send • <kbd className="px-1 py-0.5 bg-secondary rounded text-muted-foreground">⌘K</kbd> for quick navigation
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalChatWidget;
