'use client'


import React from "react";
import { motion } from "framer-motion";
import { Chrome, Code, Sparkles, Check, Monitor, Globe, Laptop, Brain, Zap } from "lucide-react";
import { Button } from "@hanzo/ui";

const aiProviders = [
  { name: "OpenAI", models: "GPT-4o, o1, o3" },
  { name: "Anthropic", models: "Claude 4, Opus, Sonnet" },
  { name: "Google", models: "Gemini 2.0, Ultra, Flash" },
  { name: "xAI", models: "Grok 3, Grok 2" },
  { name: "Zen", models: "zen4, zen4-max, zen4-coder" },
  { name: "Meta", models: "Llama 4, 3.3, 3.2" },
  { name: "Cohere", models: "Command R+, Embed" },
  { name: "Together", models: "Open Models" },
  { name: "Perplexity", models: "Sonar, Online" },
  { name: "Groq", models: "Fast Inference" },
  { name: "AWS Bedrock", models: "All Models" },
  { name: "Fireworks", models: "All Models" },
  { name: "Replicate", models: "All Models" },
  { name: "Ollama", models: "Local Models" },
];

const vsCodeEditors = [
  { name: "VS Code", description: "Native integration with full feature support" },
  { name: "Cursor", description: "Augment with advanced agentic features" },
  { name: "Windsurf", description: "Add intelligence to Codeium's editor" },
  { name: "Void", description: "Perfect complement to Void's experience" },
];

const jetbrainsIDEs = [
  "IntelliJ IDEA",
  "WebStorm",
  "PyCharm",
  "GoLand",
  "PhpStorm",
  "Rider",
  "CLion",
  "RubyMine",
];

const browsers = [
  { name: "Chrome", available: true },
  { name: "Firefox", available: true },
  { name: "Safari", available: true },
  { name: "Edge", available: true },
  { name: "Arc", available: true },
  { name: "Brave", available: true },
];

const Extensions = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--white)]">
            Available everywhere you code
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Use Hanzo in your browser, IDE, or as a standalone desktop app. We support all major platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* VS Code & AI Editors */}
          <motion.div
            className="bg-gradient-to-br from-white/30 to-gray-900/50 p-8 rounded-xl border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Sparkles className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">VS Code & AI Editors</h3>
                <p className="text-sm text-foreground">All VS Code-compatible editors</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {vsCodeEditors.map((editor) => (
                <div key={editor.name} className="flex items-start gap-2 p-2 rounded-lg bg-background/30">
                  <Check className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground text-sm">{editor.name}</span>
                    <p className="text-xs text-muted-foreground">{editor.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-[#cccccc] text-[var(--white)]">
              <Code className="mr-2 h-4 w-4" />
              Install VS Code Extension
            </Button>
          </motion.div>

          {/* JetBrains IDEs */}
          <motion.div
            className="bg-gradient-to-br from-white/20 to-gray-900/50 p-8 rounded-xl border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Code className="h-5 w-5 text-foreground/70" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">JetBrains IDEs</h3>
                <p className="text-sm text-foreground/70">All JetBrains products supported</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {jetbrainsIDEs.map((ide) => (
                <span key={ide} className="px-3 py-1.5 rounded-full bg-background/30 text-sm text-foreground/80 border border-border">
                  {ide}
                </span>
              ))}
            </div>

            <Button className="w-full bg-primary/10 hover:bg-primary text-[var(--white)]">
              <Code className="mr-2 h-4 w-4" />
              Install JetBrains Plugin
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Browser Extensions */}
          <motion.div
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Globe className="h-10 w-10 text-foreground mr-4" />
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">Browser Extensions</h3>
                <p className="text-sm text-muted-foreground">All major browsers supported</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {browsers.map((browser) => (
                <div key={browser.name} className="flex items-center gap-2 p-2 rounded-lg bg-background/30">
                  <Check className="h-4 w-4 text-foreground flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{browser.name}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 border-gray-700 text-[var(--white)] hover:bg-gray-800">
                <Chrome className="mr-2 h-4 w-4" />
                Chrome
              </Button>
              <Button variant="outline" className="flex-1 border-gray-700 text-[var(--white)] hover:bg-gray-800">
                Firefox
              </Button>
              <Button variant="outline" className="flex-1 border-gray-700 text-[var(--white)] hover:bg-gray-800">
                Safari
              </Button>
            </div>
          </motion.div>

          {/* Desktop App */}
          <motion.div
            className="bg-gradient-to-br from-white/20 to-gray-900/50 p-8 rounded-xl border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Laptop className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">Desktop App</h3>
                <p className="text-sm text-foreground">Native performance on all platforms</p>
              </div>
            </div>

            <p className="text-foreground/80 mb-6">
              Full-featured standalone app with native performance, offline support, and deep system integration.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-full bg-background/30 text-sm text-foreground/80 border border-border flex items-center gap-1">
                <Monitor className="h-3 w-3" /> macOS
              </span>
              <span className="px-3 py-1.5 rounded-full bg-background/30 text-sm text-foreground/80 border border-border flex items-center gap-1">
                <Monitor className="h-3 w-3" /> Windows
              </span>
              <span className="px-3 py-1.5 rounded-full bg-background/30 text-sm text-foreground/80 border border-border flex items-center gap-1">
                <Monitor className="h-3 w-3" /> Linux
              </span>
            </div>

            <Button className="w-full bg-primary hover:bg-[#cccccc] text-[var(--white)]">
              <Laptop className="mr-2 h-4 w-4" />
              Download Desktop App
            </Button>
          </motion.div>
        </div>

        {/* AI Model Providers - Full Width */}
        <motion.div
          className="mt-8 bg-gradient-to-br from-white/20 via-white/15 to-white/10 p-8 rounded-xl border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
              <Brain className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--white)]">100+ AI Models Supported</h3>
              <p className="text-sm text-foreground">All major AI providers through unified gateway</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
            {aiProviders.map((provider) => (
              <div key={provider.name} className="p-3 rounded-lg bg-background/30 border border-border hover:border-white/30 transition-colors">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="h-3 w-3 text-foreground" />
                  <span className="font-medium text-foreground text-sm">{provider.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">{provider.models}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-background/30 rounded-lg">
            <div>
              <p className="text-foreground/80 text-sm">
                Unified API for all providers. Switch models without changing code.
              </p>
            </div>
            <Button className="bg-primary hover:bg-[#cccccc] text-[var(--white)] whitespace-nowrap">
              <Brain className="mr-2 h-4 w-4" />
              View All Models
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extensions;
