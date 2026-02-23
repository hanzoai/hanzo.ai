import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Plug,
  ArrowRight,
  Terminal,
  Cloud,
  Shield,
  Zap,
  GitBranch,
  Package,
  Server,
  Globe,
  Code,
  Database,
  Layers,
  CheckCircle,
  Play,
  Settings,
} from "lucide-react";

const MCP = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(253, 68, 68, 0.15) 0%, transparent 70%)",
                filter: "blur(100px)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fd4444]/10 border border-[#fd4444]/20 mb-8"
            >
              <Plug className="w-4 h-4 text-[#fd4444]" />
              <span className="text-sm font-medium text-[#ff6b6b]">Model Context Protocol</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white">MCP</span>{" "}
              <span className="bg-gradient-to-r from-[#fd4444] to-[#ff6b6b] bg-clip-text text-transparent">
                as a Service
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl md:text-3xl font-medium text-white mb-4"
            >
              Launch any MCP server with one command
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-neutral-400 mb-8 max-w-3xl mx-auto"
            >
              Deploy MCP servers from any npx, uvx, or custom package. 260+ tools available.
              Instant scaling, zero infrastructure management. Connect Claude, GPT, or any AI to your tools.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
            >
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-[#fd4444]">260+</div>
                <div className="text-sm text-neutral-400">MCP tools</div>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-[#fd4444]">1-click</div>
                <div className="text-sm text-neutral-400">Deploy</div>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-[#fd4444]">Auto</div>
                <div className="text-sm text-neutral-400">Scaling</div>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-[#fd4444]">$0</div>
                <div className="text-sm text-neutral-400">Idle cost</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://docs.hanzo.ai/mcp"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#fd4444] hover:bg-[#e03e3e] text-white font-medium rounded-full transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/zap"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
              >
                <Zap className="w-4 h-4" />
                See ZAP (next-gen)
              </a>
              <a
                href="https://github.com/hanzoai/mcp"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </section>

        {/* Launch Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Launch MCP Servers Your Way
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                From npx packages to custom Python tools, deploy any MCP server instantly
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* NPX */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-[#fd4444]/10">
                  <Package className="h-6 w-6 text-[#fd4444]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">NPX Packages</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Launch any npx-compatible MCP server package directly from npm
                </p>
                <div className="bg-neutral-950 rounded-lg p-3 font-mono text-xs text-neutral-300">
                  <span className="text-[#fd4444]">hanzo mcp launch</span> npx @modelcontextprotocol/server-filesystem
                </div>
              </motion.div>

              {/* UVX */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-[#fd4444]/10">
                  <Terminal className="h-6 w-6 text-[#fd4444]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">UVX / Python</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Deploy Python-based MCP servers with uv package management
                </p>
                <div className="bg-neutral-950 rounded-lg p-3 font-mono text-xs text-neutral-300">
                  <span className="text-[#fd4444]">hanzo mcp launch</span> uvx mcp-server-sqlite
                </div>
              </motion.div>

              {/* Custom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-[#fd4444]/10">
                  <Code className="h-6 w-6 text-[#fd4444]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Custom Servers</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Deploy your own MCP server from a Git repository or Docker image
                </p>
                <div className="bg-neutral-950 rounded-lg p-3 font-mono text-xs text-neutral-300">
                  <span className="text-[#fd4444]">hanzo mcp launch</span> git://github.com/you/mcp-server
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Ready MCP Infrastructure
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Everything you need to run MCP at scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Cloud,
                  title: "Managed Hosting",
                  description: "Deploy to Hanzo Cloud with automatic scaling and zero cold starts",
                },
                {
                  icon: Shield,
                  title: "Secure Sandboxing",
                  description: "Each MCP server runs in isolated containers with fine-grained permissions",
                },
                {
                  icon: Globe,
                  title: "Edge Deployment",
                  description: "Deploy MCP servers to 15+ global regions for lowest latency",
                },
                {
                  icon: GitBranch,
                  title: "Version Control",
                  description: "Pin to specific versions, rollback instantly, preview before deploy",
                },
                {
                  icon: Server,
                  title: "Auto-Scaling",
                  description: "Scale from 0 to thousands of instances based on demand",
                },
                {
                  icon: Database,
                  title: "Persistent State",
                  description: "Built-in key-value storage for MCP servers that need state",
                },
                {
                  icon: Layers,
                  title: "Tool Federation",
                  description: "Combine multiple MCP servers into a unified tool namespace",
                },
                {
                  icon: Settings,
                  title: "Config Management",
                  description: "Manage secrets, environment variables, and configs securely",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-[#fd4444]/10">
                    <feature.icon className="h-6 w-6 text-[#fd4444]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular MCP Servers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                260+ MCP Tools Available
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Pre-built servers for every use case. Deploy with one click.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Filesystem", desc: "File read/write operations" },
                { name: "Git", desc: "Repository operations" },
                { name: "PostgreSQL", desc: "Database queries" },
                { name: "Redis", desc: "Cache & key-value" },
                { name: "Slack", desc: "Team messaging" },
                { name: "GitHub", desc: "Issues, PRs, repos" },
                { name: "Notion", desc: "Docs & databases" },
                { name: "Google Drive", desc: "Cloud storage" },
                { name: "AWS", desc: "Cloud services" },
                { name: "Kubernetes", desc: "Container orchestration" },
                { name: "Browser", desc: "Web automation" },
                { name: "Shell", desc: "Command execution" },
              ].map((server, index) => (
                <motion.div
                  key={server.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4 hover:border-[#fd4444]/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#fd4444]" />
                    <span className="font-medium text-white">{server.name}</span>
                  </div>
                  <p className="text-xs text-neutral-500">{server.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8"
            >
              <a
                href="https://github.com/hanzoai/mcp"
                className="text-[#fd4444] hover:text-[#ff6b6b] font-medium"
              >
                View all 260+ tools &rarr;
              </a>
            </motion.div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple API, Powerful Tools
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs text-neutral-500 ml-2">mcp-config.yaml</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="text-neutral-300">{`# Hanzo MCP as a Service configuration
version: "1"
servers:
  filesystem:
    package: "@modelcontextprotocol/server-filesystem"
    runtime: npx
    args: ["/workspace"]

  database:
    package: "mcp-server-postgres"
    runtime: uvx
    env:
      DATABASE_URL: "\${secrets.DATABASE_URL}"

  github:
    package: "@modelcontextprotocol/server-github"
    runtime: npx
    env:
      GITHUB_TOKEN: "\${secrets.GITHUB_TOKEN}"

  custom:
    image: "your-org/mcp-custom:latest"
    runtime: docker
    replicas: 3

# Deploy with: hanzo mcp deploy`}</code>
              </pre>
            </motion.div>
          </div>
        </section>

        {/* ZAP Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800 bg-gradient-to-b from-neutral-900/50 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
            >
              <Zap className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-400">Next Evolution</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready for the Future? Meet ZAP
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
            >
              MCP made tool integration easy. ZAP makes it <strong className="text-white">fast</strong>.
              Zero-Copy Agent Protocol is the next evolution: zero-copy serialization, 40-50x lower overhead,
              built for agent swarms at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/zap"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-full transition-colors"
              >
                Explore ZAP
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-sm text-neutral-500"
            >
              ZAP includes MCP Gateway Mode for seamless migration
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#fd4444]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6b6b]/20 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Start Building with MCP
                </h2>
                <p className="text-xl text-neutral-400 mb-8 max-w-xl mx-auto">
                  Deploy your first MCP server in under 60 seconds
                </p>

                <div className="bg-neutral-950 rounded-lg p-4 font-mono text-sm text-neutral-300 mb-8 max-w-md mx-auto text-left">
                  <div className="text-neutral-500"># Install Hanzo CLI</div>
                  <div><span className="text-[#fd4444]">curl</span> -fsSL hanzo.sh | sh</div>
                  <div className="mt-2 text-neutral-500"># Launch an MCP server</div>
                  <div><span className="text-[#fd4444]">hanzo mcp launch</span> npx @mcp/server-filesystem</div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://docs.hanzo.ai/mcp"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#fd4444] hover:bg-[#e03e3e] text-white font-medium rounded-full transition-colors"
                  >
                    Read the Docs
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/hanzoai/mcp"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MCP;
