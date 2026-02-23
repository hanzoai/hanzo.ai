'use client'


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { Terminal, ArrowRight, Package, Cpu, Bot, Code } from "lucide-react";

const installCommands = [
  { label: "Full Stack", cmd: "curl -fsSL hanzo.sh | bash", desc: "CLI, MCP, Agents" },
  { label: "Dev Only", cmd: "curl -fsSL hanzo.sh/dev | bash", desc: "AI coding agent" },
  { label: "MCP Only", cmd: "curl -fsSL hanzo.sh/mcp | bash", desc: "MCP server" },
];

const shortcuts = [
  { path: "/dev", name: "hanzo-dev", desc: "AI coding agent", icon: Bot },
  { path: "/mcp", name: "hanzo-mcp", desc: "MCP server (260+ tools)", icon: Cpu },
  { path: "/cli", name: "hanzo", desc: "Cloud CLI", icon: Terminal },
  { path: "/agents", name: "hanzo-agents", desc: "Multi-agent SDK", icon: Code },
];

const HanzoDev = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const copyCommand = (cmd: string, idx: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-30"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-gradient-steel"
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            For Developers
          </h2>

          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Install the complete Hanzo AI toolkit in one command. CLI, MCP, Agents, Dev tools — in Python, Rust, or JavaScript.
          </p>

          {/* Main install command */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 flex items-center">
              <Terminal className="h-5 w-5 text-foreground mr-3 flex-shrink-0" />
              <code className="text-foreground/80 font-mono text-lg">curl -fsSL hanzo.sh | bash</code>
              <Button
                variant="ghost"
                size="sm"
                className="ml-4 text-muted-foreground hover:text-[var(--white)]"
                onClick={() => copyCommand('curl -fsSL hanzo.sh | bash', -1)}
              >
                {copiedIdx === -1 ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>

          {/* Shortcuts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {shortcuts.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.path}
                  href={`https://hanzo.sh${s.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-white/30/50 transition-colors text-left"
                >
                  <Icon className="h-5 w-5 text-foreground mb-2" />
                  <div className="font-mono text-sm text-foreground/80">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">hanzo.sh{s.path}</div>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://hanzo.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-white to-white/10 hover:from-[#cccccc] hover:to-white text-[var(--white)] px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Visit hanzo.sh
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/hanzodev"
              className="inline-flex items-center justify-center border border-border bg-transparent hover:bg-secondary text-[var(--white)] px-8 py-4 rounded-lg text-lg font-medium transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      <style>
        {`
        .text-gradient-steel {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 6s ease infinite;
          transition: background-position 0.3s ease;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </section>
  );
};

export default HanzoDev;
