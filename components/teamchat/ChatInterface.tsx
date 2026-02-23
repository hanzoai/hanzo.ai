'use client'


import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const ChatInterface: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: "bot",
      message: "Hello! How can I assist your team today?",
      timestamp: new Date().toISOString(),
    },
  ]);
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      id: chatHistory.length + 1,
      sender: "user",
      message: message,
      timestamp: new Date().toISOString(),
    };
    
    setChatHistory([...chatHistory, userMessage]);
    setMessage("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatHistory.length + 2,
        sender: "bot",
        message: `I received your message: "${message}". This is a simulated response.`,
        timestamp: new Date().toISOString(),
      };
      
      setChatHistory(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900/90 border border-gray-800 rounded-xl shadow-lg backdrop-blur-lg overflow-hidden flex flex-col h-[600px] my-10">
      <ChatHeader />
      
      <ChatMessages 
        chatHistory={chatHistory} 
        isTyping={isTyping} 
        formatTimestamp={formatTimestamp}
        endOfMessagesRef={endOfMessagesRef}
      />
      
      <MessageInput 
        message={message} 
        setMessage={setMessage} 
        handleSendMessage={handleSendMessage} 
        isTyping={isTyping}
      />
    </div>
  );
};

export default ChatInterface;
