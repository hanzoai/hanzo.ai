
import React from "react";
import { motion } from "framer-motion";
import { Chrome, Code, Sparkles, Check, Monitor, Globe, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Use Hanzo in your browser, IDE, or as a standalone desktop app. We support all major platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* VS Code & AI Editors */}
          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 p-8 rounded-xl border border-purple-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">VS Code & AI Editors</h3>
                <p className="text-sm text-purple-300">All VS Code-compatible editors</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {vsCodeEditors.map((editor) => (
                <div key={editor.name} className="flex items-start gap-2 p-2 rounded-lg bg-black/30">
                  <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-white text-sm">{editor.name}</span>
                    <p className="text-xs text-neutral-500">{editor.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-500 text-[var(--white)]">
              <Code className="mr-2 h-4 w-4" />
              Install VS Code Extension
            </Button>
          </motion.div>

          {/* JetBrains IDEs */}
          <motion.div
            className="bg-gradient-to-br from-orange-900/20 to-gray-900/50 p-8 rounded-xl border border-orange-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mr-4">
                <Code className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">JetBrains IDEs</h3>
                <p className="text-sm text-orange-300">All JetBrains products supported</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {jetbrainsIDEs.map((ide) => (
                <span key={ide} className="px-3 py-1.5 rounded-full bg-black/30 text-sm text-neutral-300 border border-orange-500/20">
                  {ide}
                </span>
              ))}
            </div>

            <Button className="w-full bg-orange-600 hover:bg-orange-500 text-[var(--white)]">
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
              <Globe className="h-10 w-10 text-blue-400 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">Browser Extensions</h3>
                <p className="text-sm text-neutral-400">All major browsers supported</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {browsers.map((browser) => (
                <div key={browser.name} className="flex items-center gap-2 p-2 rounded-lg bg-black/30">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-neutral-300">{browser.name}</span>
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
            className="bg-gradient-to-br from-green-900/20 to-gray-900/50 p-8 rounded-xl border border-green-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-4">
                <Laptop className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">Desktop App</h3>
                <p className="text-sm text-green-300">Native performance on all platforms</p>
              </div>
            </div>

            <p className="text-neutral-300 mb-6">
              Full-featured standalone app with native performance, offline support, and deep system integration.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-full bg-black/30 text-sm text-neutral-300 border border-green-500/20 flex items-center gap-1">
                <Monitor className="h-3 w-3" /> macOS
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/30 text-sm text-neutral-300 border border-green-500/20 flex items-center gap-1">
                <Monitor className="h-3 w-3" /> Windows
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/30 text-sm text-neutral-300 border border-green-500/20 flex items-center gap-1">
                <Monitor className="h-3 w-3" /> Linux
              </span>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-500 text-[var(--white)]">
              <Laptop className="mr-2 h-4 w-4" />
              Download Desktop App
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
