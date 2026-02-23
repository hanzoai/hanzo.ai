'use client'

import React from "react";
import { motion } from "framer-motion";
import type { ProductCategory, Product } from "@/lib/data/product-taxonomy";

interface ProductMockupProps {
  category: ProductCategory;
  product: Product;
  className?: string;
}

// Database/SQL Mockup - Shows table view with query editor
const DatabaseMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName} Console</span>
    </div>

    {/* Query Editor */}
    <div className="p-4 border-b border-neutral-800 bg-neutral-900/30">
      <div className="font-mono text-sm">
        <span className="text-white">SELECT</span>
        <span className="text-neutral-300"> * </span>
        <span className="text-white">FROM</span>
        <span className="text-white/70"> users </span>
        <span className="text-white">WHERE</span>
        <span className="text-neutral-300"> status = </span>
        <span className="text-white/70">'active'</span>
        <span className="text-neutral-500">;</span>
      </div>
    </div>

    {/* Results Table */}
    <div className="p-4">
      <div className="text-xs text-neutral-500 mb-3">Results: 3 rows (2ms)</div>
      <div className="overflow-hidden rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <thead className="bg-neutral-800/50">
            <tr>
              <th className="px-3 py-2 text-left text-neutral-400 font-medium">id</th>
              <th className="px-3 py-2 text-left text-neutral-400 font-medium">name</th>
              <th className="px-3 py-2 text-left text-neutral-400 font-medium">email</th>
              <th className="px-3 py-2 text-left text-neutral-400 font-medium">status</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-t border-neutral-800">
              <td className="px-3 py-2 text-white/70">1</td>
              <td className="px-3 py-2 text-neutral-300">alice</td>
              <td className="px-3 py-2 text-neutral-300">alice@example.com</td>
              <td className="px-3 py-2 text-white/70">active</td>
            </tr>
            <tr className="border-t border-neutral-800">
              <td className="px-3 py-2 text-white/70">2</td>
              <td className="px-3 py-2 text-neutral-300">bob</td>
              <td className="px-3 py-2 text-neutral-300">bob@example.com</td>
              <td className="px-3 py-2 text-white/70">active</td>
            </tr>
            <tr className="border-t border-neutral-800">
              <td className="px-3 py-2 text-white/70">3</td>
              <td className="px-3 py-2 text-neutral-300">carol</td>
              <td className="px-3 py-2 text-neutral-300">carol@example.com</td>
              <td className="px-3 py-2 text-white/70">active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Vector Database Mockup - Shows vector visualization
const VectorMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName}</span>
    </div>

    {/* Search Input */}
    <div className="p-4 border-b border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-neutral-900 rounded-lg px-4 py-2 border border-neutral-700">
          <span className="text-neutral-400 text-sm">Find similar: "machine learning tutorials"</span>
        </div>
        <button className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-white/90">
          Search
        </button>
      </div>
    </div>

    {/* Vector Space Visualization */}
    <div className="p-4 relative h-48">
      <div className="absolute inset-4">
        {/* Grid */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-neutral-600" style={{ top: `${i * 25}%` }} />
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-neutral-600" style={{ left: `${i * 25}%` }} />
          ))}
        </div>

        {/* Vector points */}
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-white shadow-lg shadow-[#ffffff]/50"
          style={{ left: '45%', top: '40%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="absolute w-3 h-3 rounded-full bg-white/10" style={{ left: '50%', top: '35%' }} />
        <div className="absolute w-3 h-3 rounded-full bg-white/10" style={{ left: '40%', top: '45%' }} />
        <div className="absolute w-3 h-3 rounded-full bg-white/10" style={{ left: '48%', top: '50%' }} />
        <div className="absolute w-2 h-2 rounded-full bg-neutral-500" style={{ left: '20%', top: '25%' }} />
        <div className="absolute w-2 h-2 rounded-full bg-neutral-500" style={{ left: '75%', top: '60%' }} />
        <div className="absolute w-2 h-2 rounded-full bg-neutral-500" style={{ left: '65%', top: '20%' }} />
        <div className="absolute w-2 h-2 rounded-full bg-neutral-500" style={{ left: '30%', top: '70%' }} />

        {/* Similarity lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="47%" y1="42%" x2="52%" y2="37%" stroke="#a3a3a3" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="47%" y1="42%" x2="42%" y2="47%" stroke="#a3a3a3" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="47%" y1="42%" x2="50%" y2="52%" stroke="#a3a3a3" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-neutral-400">Query</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <span className="text-neutral-400">Similar</span>
        </div>
      </div>
    </div>

    {/* Results */}
    <div className="p-4 border-t border-neutral-800">
      <div className="text-xs text-neutral-500 mb-2">Top 3 matches (cosine similarity)</div>
      <div className="space-y-2">
        {[
          { score: 0.95, text: 'Intro to ML with Python' },
          { score: 0.89, text: 'Deep Learning Fundamentals' },
          { score: 0.84, text: 'Neural Networks Guide' }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-neutral-300 truncate">{item.text}</span>
            <span className="text-white/70 font-mono ml-2">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Gateway/Compute Mockup - Shows API routes and model selection
const GatewayMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName} Dashboard</span>
    </div>

    {/* Model Selection */}
    <div className="p-4 border-b border-neutral-800">
      <div className="text-xs text-neutral-500 mb-2">Active Models</div>
      <div className="flex flex-wrap gap-2">
        {['gpt-4o', 'claude-3.5', 'gemini-pro', 'llama-3.1'].map((model) => (
          <div key={model} className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 rounded-full text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="text-neutral-300">{model}</span>
          </div>
        ))}
      </div>
    </div>

    {/* API Endpoint */}
    <div className="p-4 border-b border-neutral-800 bg-neutral-900/30">
      <div className="font-mono text-sm">
        <span className="text-white/70">POST</span>
        <span className="text-neutral-400"> /v1/chat/completions</span>
      </div>
    </div>

    {/* Request/Response */}
    <div className="grid grid-cols-2 divide-x divide-neutral-800">
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-2">Request</div>
        <pre className="text-xs font-mono text-neutral-400 overflow-hidden">
{`{
  "model": "gpt-4o",
  "messages": [
    {"role": "user",
     "content": "Hello!"}
  ]
}`}
        </pre>
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-2">Response <span className="text-white/70">200</span></div>
        <pre className="text-xs font-mono text-neutral-400 overflow-hidden">
{`{
  "choices": [{
    "message": {
      "content": "Hi!"
    }
  }],
  "usage": {...}
}`}
        </pre>
      </div>
    </div>

    {/* Stats */}
    <div className="p-4 border-t border-neutral-800 grid grid-cols-3 gap-4">
      <div>
        <div className="text-xs text-neutral-500">Requests/min</div>
        <div className="text-lg font-semibold text-white">2.4K</div>
      </div>
      <div>
        <div className="text-xs text-neutral-500">Avg Latency</div>
        <div className="text-lg font-semibold text-white">124ms</div>
      </div>
      <div>
        <div className="text-xs text-neutral-500">Success Rate</div>
        <div className="text-lg font-semibold text-white/70">99.9%</div>
      </div>
    </div>
  </div>
);

// ML/Training Mockup - Shows training progress
const MLMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName}</span>
    </div>

    {/* Training Status */}
    <div className="p-4 border-b border-neutral-800">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/10 animate-pulse" />
          <span className="text-sm text-neutral-300">Training in progress</span>
        </div>
        <span className="text-xs text-neutral-500">Epoch 15/50</span>
      </div>
      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-white to-white/10"
          initial={{ width: 0 }}
          animate={{ width: '30%' }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>

    {/* Metrics Chart */}
    <div className="p-4 border-b border-neutral-800">
      <div className="text-xs text-neutral-500 mb-3">Loss vs Epochs</div>
      <div className="h-32 relative">
        <svg className="w-full h-full">
          {/* Grid lines */}
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#374151" strokeWidth="1" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#374151" strokeWidth="1" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#374151" strokeWidth="1" />

          {/* Loss curve */}
          <motion.path
            d="M 0 80 Q 20 70 40 50 T 80 35 T 120 28 T 160 24 T 200 22"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Validation curve */}
          <motion.path
            d="M 0 85 Q 20 75 40 55 T 80 42 T 120 36 T 160 32 T 200 30"
            stroke="#a3a3a3"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>

        {/* Legend */}
        <div className="absolute top-0 right-0 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-white" />
            <span className="text-neutral-400">Train</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-white/10" style={{ borderTop: '2px dashed' }} />
            <span className="text-neutral-400">Val</span>
          </div>
        </div>
      </div>
    </div>

    {/* Metrics Grid */}
    <div className="p-4 grid grid-cols-4 gap-4">
      <div>
        <div className="text-xs text-neutral-500">Loss</div>
        <div className="text-sm font-semibold text-white">0.0234</div>
      </div>
      <div>
        <div className="text-xs text-neutral-500">Accuracy</div>
        <div className="text-sm font-semibold text-white/70">94.2%</div>
      </div>
      <div>
        <div className="text-xs text-neutral-500">LR</div>
        <div className="text-sm font-semibold text-white">1e-4</div>
      </div>
      <div>
        <div className="text-xs text-neutral-500">GPU</div>
        <div className="text-sm font-semibold text-white/70">A100</div>
      </div>
    </div>
  </div>
);

// Chat/Agent Mockup - Shows chat interface with tool calls
const ChatMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName}</span>
      <div className="ml-auto flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <span className="text-xs text-neutral-400">gpt-4o</span>
      </div>
    </div>

    {/* Messages */}
    <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
      {/* User message */}
      <div className="flex justify-end">
        <div className="bg-white/20 border border-white/30 rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
          <p className="text-sm text-white">What's the weather in Tokyo?</p>
        </div>
      </div>

      {/* Tool call */}
      <div className="flex justify-start">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 max-w-[90%]">
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>get_weather</span>
            <span className="text-white/70">completed</span>
          </div>
          <pre className="text-xs font-mono text-neutral-500">{"{ \"city\": \"Tokyo\" }"}</pre>
        </div>
      </div>

      {/* Assistant message */}
      <div className="flex justify-start">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl rounded-bl-md px-4 py-2 max-w-[80%]">
          <p className="text-sm text-neutral-200">The weather in Tokyo is currently 18C and partly cloudy. Perfect for a walk!</p>
        </div>
      </div>
    </div>

    {/* Input */}
    <div className="p-4 border-t border-neutral-800">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
        />
        <button className="p-2 bg-white text-black rounded-lg hover:bg-white/90">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

// Agent Workflow Mockup
const AgentMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName} Workflow</span>
    </div>

    {/* Workflow visualization */}
    <div className="p-6 relative">
      <div className="flex items-center justify-between">
        {/* Nodes */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0 }}
        >
          <div className="w-14 h-14 rounded-xl bg-white/20 border-2 border-white flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <span className="text-xs text-neutral-400 mt-2">Input</span>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex-1 h-0.5 bg-gradient-to-r from-white to-white/10 mx-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-14 h-14 rounded-xl bg-white/10 border-2 border-white/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="text-xs text-neutral-400 mt-2">Planner</span>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex-1 h-0.5 bg-gradient-to-r from-white/20 to-white mx-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 }}
        />

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="w-14 h-14 rounded-xl bg-white/20 border-2 border-white flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-xs text-neutral-400 mt-2">Tools</span>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex-1 h-0.5 bg-gradient-to-r from-white to-white/10 mx-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9 }}
        />

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="w-14 h-14 rounded-xl bg-white/10 border-2 border-white/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-xs text-neutral-400 mt-2">Output</span>
        </motion.div>
      </div>
    </div>

    {/* Tool calls */}
    <div className="p-4 border-t border-neutral-800">
      <div className="text-xs text-neutral-500 mb-2">Tool Calls</div>
      <div className="space-y-2">
        {[
          { name: 'search_web', status: 'completed', time: '120ms' },
          { name: 'read_file', status: 'completed', time: '45ms' },
          { name: 'write_code', status: 'running', time: '...' }
        ].map((tool, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${tool.status === 'running' ? 'bg-white/10 animate-pulse' : 'bg-white/10'}`} />
              <span className="font-mono text-neutral-300">{tool.name}</span>
            </div>
            <span className={tool.status === 'running' ? 'text-white/60' : 'text-neutral-500'}>{tool.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Observability Mockup - Shows metrics/logs
const ObservabilityMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName}</span>
    </div>

    {/* Metrics Overview */}
    <div className="grid grid-cols-3 divide-x divide-neutral-800 border-b border-neutral-800">
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">Requests/sec</div>
        <div className="text-2xl font-bold text-white">1,247</div>
        <div className="text-xs text-white/70">+12.3%</div>
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">P99 Latency</div>
        <div className="text-2xl font-bold text-white">234ms</div>
        <div className="text-xs text-white/60">+2.1%</div>
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">Error Rate</div>
        <div className="text-2xl font-bold text-white">0.02%</div>
        <div className="text-xs text-white/70">-0.01%</div>
      </div>
    </div>

    {/* Mini chart */}
    <div className="p-4 border-b border-neutral-800">
      <div className="h-20 flex items-end gap-1">
        {[65, 72, 68, 85, 92, 78, 88, 95, 82, 90, 87, 93].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-white to-white/50 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </div>
    </div>

    {/* Logs */}
    <div className="p-4">
      <div className="text-xs text-neutral-500 mb-2">Recent Logs</div>
      <div className="space-y-1 font-mono text-xs">
        {[
          { level: 'info', msg: 'Request completed successfully', time: '12:34:56' },
          { level: 'warn', msg: 'Rate limit approaching', time: '12:34:55' },
          { level: 'info', msg: 'New connection established', time: '12:34:54' }
        ].map((log, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-neutral-600">{log.time}</span>
            <span className={log.level === 'warn' ? 'text-white/60' : 'text-white/70'}>[{log.level}]</span>
            <span className="text-neutral-400 truncate">{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Platform/Infrastructure Mockup
const PlatformMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName}</span>
    </div>

    {/* Deployment Status */}
    <div className="p-4 border-b border-neutral-800">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <span className="text-sm text-white font-medium">Production</span>
        </div>
        <span className="text-xs text-neutral-500">v2.4.1</span>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
          <span className="text-neutral-400">3 replicas</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
          <span className="text-neutral-400">us-east-1</span>
        </div>
      </div>
    </div>

    {/* Services */}
    <div className="p-4">
      <div className="text-xs text-neutral-500 mb-3">Services</div>
      <div className="space-y-2">
        {[
          { name: 'api-gateway', status: 'healthy', cpu: '23%' },
          { name: 'auth-service', status: 'healthy', cpu: '12%' },
          { name: 'worker', status: 'scaling', cpu: '78%' }
        ].map((svc, i) => (
          <div key={i} className="flex items-center justify-between p-2 bg-neutral-900 rounded-lg">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${svc.status === 'scaling' ? 'bg-white/10 animate-pulse' : 'bg-white/10'}`} />
              <span className="text-sm text-neutral-300">{svc.name}</span>
            </div>
            <span className="text-xs text-neutral-500">{svc.cpu} CPU</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Async/Queue Mockup
const AsyncMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName}</span>
    </div>

    {/* Queue Stats */}
    <div className="grid grid-cols-3 divide-x divide-neutral-800 border-b border-neutral-800">
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">Pending</div>
        <div className="text-xl font-bold text-white/60">1,247</div>
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">Processing</div>
        <div className="text-xl font-bold text-white/70">32</div>
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">Completed</div>
        <div className="text-xl font-bold text-white/70">45.2K</div>
      </div>
    </div>

    {/* Queue visualization */}
    <div className="p-4 border-b border-neutral-800">
      <div className="flex items-center gap-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`flex-1 h-8 rounded ${i < 8 ? 'bg-white/60' : 'bg-neutral-800'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-neutral-500 mt-2">
        <span>In</span>
        <span>Out</span>
      </div>
    </div>

    {/* Recent Jobs */}
    <div className="p-4">
      <div className="text-xs text-neutral-500 mb-2">Recent Jobs</div>
      <div className="space-y-2">
        {[
          { id: 'job-a1b2', status: 'completed', time: '234ms' },
          { id: 'job-c3d4', status: 'running', time: '...' },
          { id: 'job-e5f6', status: 'pending', time: '-' }
        ].map((job, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${
                job.status === 'completed' ? 'bg-white/10' :
                job.status === 'running' ? 'bg-white/10 animate-pulse' : 'bg-neutral-500'
              }`} />
              <span className="font-mono text-neutral-300">{job.id}</span>
            </div>
            <span className="text-neutral-500">{job.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Generic fallback mockup
const GenericMockup: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <span className="text-xs text-neutral-500 ml-2 font-mono">{product.shortName}</span>
    </div>

    <div className="p-8 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 flex items-center justify-center mx-auto mb-4">
          <motion.div
            className="w-8 h-8 rounded-lg bg-white/40"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <p className="text-sm text-neutral-400">{product.tagline}</p>
      </div>
    </div>
  </div>
);

// Main ProductMockup component that selects the appropriate mockup
export const ProductMockup: React.FC<ProductMockupProps> = ({ category, product, className = '' }) => {
  // Select mockup based on product ID or category
  const getMockup = () => {
    // Specific product mockups
    if (['sql', 'sql-vector', 'documentdb', 'kv', 'datastore', 'datastore-vector'].includes(product.id)) {
      return <DatabaseMockup product={product} />;
    }
    if (['vector', 'search'].includes(product.id)) {
      return <VectorMockup product={product} />;
    }
    if (['gateway', 'functions', 'runtime', 'machines'].includes(product.id)) {
      return <GatewayMockup product={product} />;
    }
    if (['chat', 'mcp'].includes(product.id)) {
      return <ChatMockup product={product} />;
    }
    if (['agent', 'operative', 'flow'].includes(product.id)) {
      return <AgentMockup product={product} />;
    }
    if (['tasks', 'cron', 'queues', 'pubsub'].includes(product.id)) {
      return <AsyncMockup product={product} />;
    }

    // Category-based mockups
    switch (category) {
      case 'data':
        return <DatabaseMockup product={product} />;
      case 'compute':
        return <GatewayMockup product={product} />;
      case 'ml':
        return <MLMockup product={product} />;
      case 'observability':
        return <ObservabilityMockup product={product} />;
      case 'platform':
        return <PlatformMockup product={product} />;
      case 'async':
        return <AsyncMockup product={product} />;
      case 'apps':
        return <ChatMockup product={product} />;
      default:
        return <GenericMockup product={product} />;
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {getMockup()}
    </motion.div>
  );
};

export default ProductMockup;
