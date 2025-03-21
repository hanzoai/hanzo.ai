
import React, { useState, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const ChatInterface: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  // Mock conversation history for demonstration
  const [chatHistory, setChatHistory] = useState([
    { 
      id: 1, 
      sender: "ai", 
      message: "Hello! I'm Hanzo Chat. How can I help you today?", 
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 2, 
      sender: "user", 
      message: "Can you help me understand how to use vector embeddings?", 
      timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 3, 
      sender: "ai", 
      message: "Vector embeddings are numerical representations of data (like text, images, or audio) that capture semantic meaning. In the context of AI and machine learning, these embeddings convert high-dimensional data into dense vectors in a continuous vector space where similar items are positioned closer together.\n\nHere's how to use vector embeddings:\n\n1. **Generate embeddings**: Convert your text or other data into vector embeddings using models like OpenAI's text-embedding-ada-002 or open-source alternatives.\n\n2. **Store embeddings**: Save these vectors in a vector database like Hanzo Vector, Pinecone, or Weaviate.\n\n3. **Perform similarity search**: When you need to find similar content, convert your query to an embedding and search for the closest vectors in your database.\n\n4. **Use for RAG applications**: Embeddings are particularly useful for Retrieval Augmented Generation, where you retrieve relevant context before generating AI responses.\n\nWould you like me to provide some code examples for implementing vector embeddings?", 
      timestamp: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString() 
    },
    { 
      id: 4, 
      sender: "user", 
      message: "Yes, please show me some code examples.", 
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString() 
    },
    { 
      id: 5, 
      sender: "ai", 
      message: "Here's an example of how to create and use vector embeddings with Hanzo Vector:\n\n```javascript\n// Install dependencies\n// npm install @hanzo/vector openai\n\nimport { HanzoVector } from '@hanzo/vector';\nimport { OpenAI } from 'openai';\n\n// Initialize clients\nconst vector = new HanzoVector('your_api_key');\nconst openai = new OpenAI('your_openai_api_key');\n\n// Create a collection\nasync function createCollection() {\n  const collection = await vector.createCollection({\n    name: 'documents',\n    dimensions: 1536  // Dimensions for ada-002 embeddings\n  });\n  return collection;\n}\n\n// Generate embeddings and store documents\nasync function storeDocuments(texts) {\n  const collection = await vector.getCollection('documents');\n  \n  for (const text of texts) {\n    // Generate embedding using OpenAI\n    const response = await openai.embeddings.create({\n      model: 'text-embedding-ada-002',\n      input: text\n    });\n    \n    const embedding = response.data[0].embedding;\n    \n    // Store in vector database\n    await collection.upsert({\n      vectors: [{\n        id: `doc-${Date.now()}`,\n        values: embedding,\n        metadata: { text }\n      }]\n    });\n  }\n}\n\n// Search for similar documents\nasync function searchSimilar(query) {\n  const collection = await vector.getCollection('documents');\n  \n  // Generate embedding for query\n  const response = await openai.embeddings.create({\n    model: 'text-embedding-ada-002',\n    input: query\n  });\n  \n  const queryEmbedding = response.data[0].embedding;\n  \n  // Search for similar documents\n  const results = await collection.search({\n    vector: queryEmbedding,\n    limit: 5,\n    includeMetadata: true\n  });\n  \n  return results.matches.map(match => ({\n    text: match.metadata.text,\n    score: match.score\n  }));\n}\n```\n\nThis example demonstrates the core workflow for vector embeddings:\n1. Create a collection to store your vectors\n2. Generate embeddings for your content\n3. Store those embeddings with their associated metadata\n4. Generate embeddings for queries and search for similar vectors\n\nYou can use this pattern for implementing semantic search, recommendation systems, or as part of a RAG (Retrieval Augmented Generation) pipeline with LLMs.", 
      timestamp: new Date(Date.now() - 4 * 60 * 1000).toISOString() 
    }
  ]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const newUserMessage = {
      id: chatHistory.length + 1,
      sender: "user",
      message: message,
      timestamp: new Date().toISOString()
    };
    
    setChatHistory(prev => [...prev, newUserMessage]);
    setMessage("");
    
    // Simulate AI typing response
    setIsTyping(true);
    setTimeout(() => {
      const newAIMessage = {
        id: chatHistory.length + 2,
        sender: "ai",
        message: `I've received your message: "${message}". This is a simulated response from Hanzo Chat.`,
        timestamp: new Date().toISOString()
      };
      
      setChatHistory(prev => [...prev, newAIMessage]);
      setIsTyping(false);
      // Only scroll to bottom after sending a message
      scrollToBottom();
    }, 2000);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-5xl mx-auto w-full px-4 flex-1 flex flex-col mt-8">
      {/* Chat Container */}
      <div className="flex-1 flex flex-col bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
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
    </div>
  );
};

export default ChatInterface;
