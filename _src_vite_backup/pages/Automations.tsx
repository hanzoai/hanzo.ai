import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Search,
  Zap,
  MessageSquare,
  Database,
  Cloud,
  Users,
  ShoppingCart,
  BarChart3,
  Mail,
  Calendar,
  FileText,
  Code,
  Bot,
  Palette,
  Share2,
  CreditCard,
  Phone,
  Video,
  Globe,
  ExternalLink,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

// Integration categories
const categories = [
  { id: "all", name: "All", icon: Zap },
  { id: "ai", name: "AI & LLMs", icon: Bot },
  { id: "communication", name: "Communication", icon: MessageSquare },
  { id: "productivity", name: "Productivity", icon: FileText },
  { id: "data", name: "Data & Storage", icon: Database },
  { id: "crm", name: "CRM & Sales", icon: Users },
  { id: "commerce", name: "Commerce", icon: ShoppingCart },
  { id: "marketing", name: "Marketing", icon: Mail },
  { id: "developer", name: "Developer Tools", icon: Code },
  { id: "social", name: "Social Media", icon: Share2 },
];

// Featured integrations with icons and colors
const integrations = [
  // AI & LLMs
  { name: "OpenAI", category: "ai", icon: "🤖", color: "#10a37f", popular: true },
  { name: "Anthropic Claude", category: "ai", icon: "🧠", color: "#cc785c", popular: true },
  { name: "Google Gemini", category: "ai", icon: "✨", color: "#4285f4", popular: true },
  { name: "Azure OpenAI", category: "ai", icon: "☁️", color: "#0078d4" },
  { name: "Hugging Face", category: "ai", icon: "🤗", color: "#ff9d00" },
  { name: "Replicate", category: "ai", icon: "🔄", color: "#000000" },
  { name: "Stability AI", category: "ai", icon: "🎨", color: "#9333ea" },
  { name: "ElevenLabs", category: "ai", icon: "🔊", color: "#000000" },
  { name: "Deepgram", category: "ai", icon: "🎙️", color: "#13ef93" },

  // Communication
  { name: "Slack", category: "communication", icon: "💬", color: "#4A154B", popular: true },
  { name: "Discord", category: "communication", icon: "🎮", color: "#5865F2", popular: true },
  { name: "Telegram", category: "communication", icon: "✈️", color: "#0088cc" },
  { name: "WhatsApp", category: "communication", icon: "📱", color: "#25D366", popular: true },
  { name: "Microsoft Teams", category: "communication", icon: "👥", color: "#6264A7" },
  { name: "Twilio", category: "communication", icon: "📞", color: "#F22F46" },
  { name: "Zoom", category: "communication", icon: "📹", color: "#2D8CFF" },
  { name: "Google Chat", category: "communication", icon: "💭", color: "#00AC47" },

  // Productivity
  { name: "Notion", category: "productivity", icon: "📝", color: "#000000", popular: true },
  { name: "Airtable", category: "productivity", icon: "📊", color: "#18BFFF", popular: true },
  { name: "Google Sheets", category: "productivity", icon: "📗", color: "#34A853", popular: true },
  { name: "Google Docs", category: "productivity", icon: "📄", color: "#4285F4" },
  { name: "Google Drive", category: "productivity", icon: "📁", color: "#4285F4", popular: true },
  { name: "Dropbox", category: "productivity", icon: "📦", color: "#0061FF" },
  { name: "Calendly", category: "productivity", icon: "📅", color: "#006BFF" },
  { name: "Google Calendar", category: "productivity", icon: "🗓️", color: "#4285F4" },
  { name: "Trello", category: "productivity", icon: "📋", color: "#0079BF" },
  { name: "Asana", category: "productivity", icon: "✅", color: "#F06A6A" },
  { name: "ClickUp", category: "productivity", icon: "🎯", color: "#7B68EE" },
  { name: "Linear", category: "productivity", icon: "📐", color: "#5E6AD2", popular: true },
  { name: "Jira", category: "productivity", icon: "🔷", color: "#0052CC" },

  // Data & Storage
  { name: "PostgreSQL", category: "data", icon: "🐘", color: "#336791" },
  { name: "MySQL", category: "data", icon: "🐬", color: "#4479A1" },
  { name: "MongoDB", category: "data", icon: "🍃", color: "#47A248" },
  { name: "Redis", category: "data", icon: "🔴", color: "#DC382D" },
  { name: "Supabase", category: "data", icon: "⚡", color: "#3ECF8E" },
  { name: "Firebase", category: "data", icon: "🔥", color: "#FFCA28" },
  { name: "AWS S3", category: "data", icon: "☁️", color: "#FF9900" },
  { name: "Google Cloud Storage", category: "data", icon: "☁️", color: "#4285F4" },
  { name: "Snowflake", category: "data", icon: "❄️", color: "#29B5E8" },
  { name: "BigQuery", category: "data", icon: "📊", color: "#4285F4" },

  // CRM & Sales
  { name: "Salesforce", category: "crm", icon: "☁️", color: "#00A1E0", popular: true },
  { name: "HubSpot", category: "crm", icon: "🧡", color: "#FF7A59", popular: true },
  { name: "Pipedrive", category: "crm", icon: "📈", color: "#1A1B1D" },
  { name: "Close", category: "crm", icon: "📞", color: "#252A3D" },
  { name: "Intercom", category: "crm", icon: "💬", color: "#1F8DED" },
  { name: "Zendesk", category: "crm", icon: "🎧", color: "#03363D" },
  { name: "Freshdesk", category: "crm", icon: "🎫", color: "#2C9F5B" },
  { name: "Apollo", category: "crm", icon: "🚀", color: "#5C5CFF" },

  // Commerce
  { name: "Stripe", category: "commerce", icon: "💳", color: "#635BFF", popular: true },
  { name: "Shopify", category: "commerce", icon: "🛒", color: "#96BF48", popular: true },
  { name: "WooCommerce", category: "commerce", icon: "🛍️", color: "#96588A" },
  { name: "Square", category: "commerce", icon: "⬜", color: "#3E4348" },
  { name: "PayPal", category: "commerce", icon: "💰", color: "#003087" },
  { name: "Chargebee", category: "commerce", icon: "💵", color: "#FF6B35" },
  { name: "Paddle", category: "commerce", icon: "🏓", color: "#3F3F46" },
  { name: "LemonSqueezy", category: "commerce", icon: "🍋", color: "#FFC107" },

  // Marketing
  { name: "Mailchimp", category: "marketing", icon: "🐵", color: "#FFE01B", popular: true },
  { name: "SendGrid", category: "marketing", icon: "📧", color: "#1A82E2" },
  { name: "Resend", category: "marketing", icon: "✉️", color: "#000000" },
  { name: "ConvertKit", category: "marketing", icon: "📬", color: "#FB6970" },
  { name: "ActiveCampaign", category: "marketing", icon: "📊", color: "#356AE6" },
  { name: "Brevo", category: "marketing", icon: "📨", color: "#0092FF" },
  { name: "Customer.io", category: "marketing", icon: "👤", color: "#4EC4FA" },
  { name: "Postmark", category: "marketing", icon: "📮", color: "#FFDE00" },

  // Developer Tools
  { name: "GitHub", category: "developer", icon: "🐙", color: "#181717", popular: true },
  { name: "GitLab", category: "developer", icon: "🦊", color: "#FC6D26" },
  { name: "Vercel", category: "developer", icon: "▲", color: "#000000" },
  { name: "Netlify", category: "developer", icon: "🌐", color: "#00C7B7" },
  { name: "Railway", category: "developer", icon: "🚂", color: "#0B0D0E" },
  { name: "Render", category: "developer", icon: "🎨", color: "#46E3B7" },
  { name: "Sentry", category: "developer", icon: "🐛", color: "#362D59" },
  { name: "PagerDuty", category: "developer", icon: "🚨", color: "#06AC38" },
  { name: "Datadog", category: "developer", icon: "🐕", color: "#632CA6" },

  // Social Media
  { name: "Twitter / X", category: "social", icon: "𝕏", color: "#000000" },
  { name: "LinkedIn", category: "social", icon: "🔗", color: "#0A66C2", popular: true },
  { name: "Instagram", category: "social", icon: "📸", color: "#E4405F" },
  { name: "Facebook", category: "social", icon: "📘", color: "#1877F2" },
  { name: "TikTok", category: "social", icon: "🎵", color: "#000000" },
  { name: "YouTube", category: "social", icon: "▶️", color: "#FF0000" },
  { name: "Pinterest", category: "social", icon: "📌", color: "#E60023" },
  { name: "Bluesky", category: "social", icon: "🦋", color: "#0085FF" },
];

const Automations = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = activeCategory === "all" || integration.category === activeCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularIntegrations = integrations.filter((i) => i.popular);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p
                className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
                style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
              >
                Integrations & Automation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                <span className="text-white">Connect with</span>{" "}
                <span style={{ color: BRAND_COLOR }}>500+ apps</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
                Hanzo Automations connects your AI agents to the tools you use every day. Build powerful workflows without code.
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#fd4444]/50 transition-colors"
                />
              </div>
            </motion.div>

            {/* Popular Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4 text-center">
                Popular Integrations
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {popularIntegrations.slice(0, 12).map((integration) => (
                  <motion.a
                    key={integration.name}
                    href={`#${integration.name.toLowerCase().replace(/\s+/g, "-")}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <span className="text-lg">{integration.icon}</span>
                    <span className="text-sm text-white">{integration.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 md:px-8 border-y border-neutral-800 bg-neutral-950 sticky top-16 z-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-[#fd4444] text-white"
                        : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-medium text-white">
                {activeCategory === "all"
                  ? "All Integrations"
                  : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <span className="text-sm text-neutral-500">
                {filteredIntegrations.length} integrations
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all cursor-pointer"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                    style={{ backgroundColor: integration.color + "20" }}
                  >
                    {integration.icon}
                  </div>
                  <h3 className="text-sm font-medium text-white group-hover:text-[#fd4444] transition-colors">
                    {integration.name}
                  </h3>
                  {integration.popular && (
                    <span className="text-[10px] text-[#fd4444] font-medium">Popular</span>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-16">
                <p className="text-neutral-500">No integrations found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Don't see your app?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              We add new integrations every week. Request an integration or build your own with our SDK.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Request Integration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://docs.hanzo.ai/automations/sdk"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                Build Custom Integration
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Automations;
