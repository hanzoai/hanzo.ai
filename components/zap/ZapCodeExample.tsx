'use client'

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Copy } from "lucide-react";

const ZapCodeExample = () => {
  const codeLines = [
    { type: "comment", text: "# Connect 12 MCP servers → 1 ZAP endpoint" },
    { type: "command", text: "$ zapd serve --port 9999" },
    { type: "empty", text: "" },
    { type: "command", text: '$ zapd add mcp --name github --url stdio://gh-mcp' },
    { type: "command", text: '$ zapd add mcp --name slack  --url http://localhost:8080' },
    { type: "command", text: '$ zapd add mcp --name db     --url zap+unix:///tmp/postgres.sock' },
    { type: "empty", text: "" },
    { type: "comment", text: "# Agents connect once: zap://localhost:9999" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple to Use
          </h2>
          <p className="text-xl text-muted-foreground">
            One daemon, multiple backends. Agents maintain a single long-lived connection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary border border-border rounded-t-xl">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-primary/10" />
              <div className="w-3 h-3 rounded-full bg-primary/10" />
              <div className="w-3 h-3 rounded-full bg-primary/10" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Terminal className="w-4 h-4" />
              <span>Terminal</span>
            </div>
            <button className="p-1 hover:bg-accent rounded transition-colors">
              <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Terminal content */}
          <div className="bg-background/80 backdrop-blur-sm border border-t-0 border-border rounded-b-xl p-6 font-mono text-sm">
            {codeLines.map((line, index) => (
              <div key={index} className={line.type === "empty" ? "h-4" : ""}>
                {line.type === "comment" && (
                  <span className="text-muted-foreground">{line.text}</span>
                )}
                {line.type === "command" && (
                  <span className="text-foreground/70">{line.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl -z-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 text-muted-foreground"
        >
          <span className="text-foreground/70 font-mono">zapd</span> multiplexes tools/resources
          across MCP servers (or ZAP-native servers).
        </motion.p>
      </div>
    </section>
  );
};

export default ZapCodeExample;
