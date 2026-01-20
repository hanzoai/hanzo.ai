import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Copy,
  Check,
  Mail,
  ArrowRight,
  Globe,
  Code2,
  Terminal,
  MessageSquare,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

const INSTALL_OPTIONS = [
  { id: "web", label: "On the web", icon: Globe, url: "https://hanzo.app" },
  { id: "vscode", label: "VS Code", icon: Code2, url: "https://marketplace.visualstudio.com/items?itemName=hanzo.hanzo-dev" },
  { id: "jetbrains", label: "JetBrains", icon: Code2, url: "https://plugins.jetbrains.com/plugin/hanzo-dev" },
  { id: "slack", label: "Slack", icon: MessageSquare, url: "https://slack.com/apps/hanzo" },
];

const FooterCTA = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Tagline and Install */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-8"
            >
              Create what's exciting.
              <br />
              <span className="text-neutral-500">Maintain what's essential.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 mb-8"
            >
              Use Hanzo Dev where you work
            </motion.p>

            {/* Install options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                  Get Hanzo Dev
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-neutral-900 border border-neutral-800 shadow-xl z-50 overflow-hidden">
                    {INSTALL_OPTIONS.map((option) => {
                      const Icon = option.icon;
                      return (
                        <a
                          key={option.id}
                          href={option.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {option.label}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-600" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Install command */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <code className="text-sm font-mono text-neutral-400">
                  curl -fsSL hanzo.sh | sh
                </code>
                <span className="text-neutral-700 mx-1">|</span>
                <span className="text-xs text-neutral-600 font-mono">bash</span>
                <button
                  onClick={handleCopy}
                  className="ml-2 text-neutral-500 hover:text-white transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4"
            >
              <a
                href="https://docs.hanzo.ai/dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-white transition-colors"
              >
                Or read the documentation
              </a>
            </motion.div>
          </div>

          {/* Right: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center">
                <Mail className="w-6 h-6 text-neutral-400" />
              </div>
            </div>

            <h3 className="text-2xl font-medium text-white mb-2">
              Get the developer newsletter
            </h3>
            <p className="text-neutral-400 mb-6">
              Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex items-center gap-2 bg-neutral-950 rounded-lg border border-neutral-800 px-4 py-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-white placeholder:text-neutral-600 outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <p className="text-xs text-neutral-600 mt-4">
              Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
