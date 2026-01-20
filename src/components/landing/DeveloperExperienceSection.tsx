import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";

const codeExamples = {
  python: {
    label: "Python",
    code: `from hanzo import Hanzo

client = Hanzo()

# Chat completion with any model
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}]
)

# Vector search
results = client.vector.search(
    collection="docs",
    query="How do I deploy?",
    limit=10
)`,
  },
  typescript: {
    label: "TypeScript",
    code: `import { Hanzo } from "@hanzo/sdk";

const client = new Hanzo();

// Chat completion with any model
const response = await client.chat.completions.create({
  model: "claude-3-opus",
  messages: [{ role: "user", content: "Hello!" }],
});

// Vector search
const results = await client.vector.search({
  collection: "docs",
  query: "How do I deploy?",
  limit: 10,
});`,
  },
  go: {
    label: "Go",
    code: `package main

import "github.com/hanzoai/go-sdk"

func main() {
    client := hanzo.New()

    // Chat completion with any model
    resp, _ := client.Chat.Completions.Create(
        hanzo.ChatRequest{
            Model: "gemini-pro",
            Messages: []hanzo.Message{
                {Role: "user", Content: "Hello!"},
            },
        },
    )

    // Vector search
    results, _ := client.Vector.Search("docs", "query", 10)
}`,
  },
};

const DeveloperExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("python");
  const [copied, setCopied] = useState(false);
  const [installCopied, setInstallCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("curl -sSL https://hanzo.sh | sh");
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
              style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
            >
              Developer Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Build faster with world-class DX
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              One command to install. One SDK for everything. Type-safe, documented, and designed for developer productivity.
            </p>

            {/* Install command */}
            <div className="mb-8">
              <p className="text-sm text-neutral-500 mb-3">Quick install</p>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors group max-w-md"
                onClick={handleCopyInstall}
              >
                <Terminal className="h-5 w-5 text-neutral-500 flex-shrink-0" />
                <code className="text-sm text-neutral-300 font-mono flex-1">
                  curl -sSL https://hanzo.sh | sh
                </code>
                {installCopied ? (
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                ) : (
                  <Copy className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300 flex-shrink-0 transition-colors" />
                )}
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {[
                { title: "hanzo dev", desc: "AI-powered coding assistant in your terminal" },
                { title: "hanzo deploy", desc: "Deploy to global edge in seconds" },
                { title: "hanzo logs", desc: "Real-time logs and observability" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#fd4444]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#fd4444] text-xs font-bold">$</span>
                  </div>
                  <div>
                    <code className="text-white font-mono text-sm">{item.title}</code>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Code example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
              {/* Tab bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900">
                <div className="flex gap-1">
                  {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map(
                    (key) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                          activeTab === key
                            ? "bg-[#fd4444]/20 text-[#fd4444]"
                            : "text-neutral-500 hover:text-neutral-300"
                        }`}
                      >
                        {codeExamples[key].label}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-2 rounded-md hover:bg-neutral-800 transition-colors"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-neutral-500" />
                  )}
                </button>
              </div>

              {/* Code content */}
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neutral-300 leading-relaxed">
                  <code>{codeExamples[activeTab].code}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperienceSection;
