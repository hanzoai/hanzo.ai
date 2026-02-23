'use client'

import React, { useState, useEffect } from "react";
import { Input } from "@hanzo/ui";
import { Badge } from "@hanzo/ui";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink, Github, Plug } from "lucide-react";

// Sample integrations data - in production, this would come from an API
const integrationCategories = [
  "AI", "Analytics", "Communication", "CRM", "Database", "Developer Tools",
  "E-commerce", "Files & Storage", "Finance", "Marketing", "Productivity",
  "Project Management", "Sales", "Social Media", "Support"
];

const sampleIntegrations = [
  { name: "OpenAI", category: "AI", logo: "🤖", description: "GPT models and AI capabilities" },
  { name: "Anthropic", category: "AI", logo: "🧠", description: "Claude AI models" },
  { name: "Google AI", category: "AI", logo: "🔷", description: "Gemini and Google AI services" },
  { name: "Slack", category: "Communication", logo: "💬", description: "Team messaging and notifications" },
  { name: "Discord", category: "Communication", logo: "🎮", description: "Community chat platform" },
  { name: "Gmail", category: "Communication", logo: "📧", description: "Email automation" },
  { name: "Salesforce", category: "CRM", logo: "☁️", description: "CRM and sales automation" },
  { name: "HubSpot", category: "CRM", logo: "🔶", description: "Marketing and sales CRM" },
  { name: "Stripe", category: "Finance", logo: "💳", description: "Payment processing" },
  { name: "GitHub", category: "Developer Tools", logo: "🐙", description: "Code repository automation" },
  { name: "GitLab", category: "Developer Tools", logo: "🦊", description: "DevOps platform" },
  { name: "Jira", category: "Project Management", logo: "📋", description: "Issue tracking" },
  { name: "Notion", category: "Productivity", logo: "📓", description: "All-in-one workspace" },
  { name: "Airtable", category: "Database", logo: "📊", description: "Spreadsheet-database hybrid" },
  { name: "Google Sheets", category: "Productivity", logo: "📗", description: "Spreadsheet automation" },
  { name: "Shopify", category: "E-commerce", logo: "🛒", description: "E-commerce platform" },
  { name: "WooCommerce", category: "E-commerce", logo: "🛍️", description: "WordPress e-commerce" },
  { name: "Mailchimp", category: "Marketing", logo: "🐵", description: "Email marketing" },
  { name: "Twilio", category: "Communication", logo: "📱", description: "SMS and voice" },
  { name: "Zendesk", category: "Support", logo: "🎫", description: "Customer support" },
  { name: "Intercom", category: "Support", logo: "💭", description: "Customer messaging" },
  { name: "Linear", category: "Project Management", logo: "⚡", description: "Modern issue tracking" },
  { name: "Asana", category: "Project Management", logo: "🎯", description: "Work management" },
  { name: "Trello", category: "Project Management", logo: "📌", description: "Kanban boards" },
  { name: "PostgreSQL", category: "Database", logo: "🐘", description: "Relational database" },
  { name: "MongoDB", category: "Database", logo: "🍃", description: "Document database" },
  { name: "Redis", category: "Database", logo: "🔴", description: "In-memory data store" },
  { name: "AWS S3", category: "Files & Storage", logo: "📦", description: "Object storage" },
  { name: "Google Drive", category: "Files & Storage", logo: "📁", description: "Cloud storage" },
  { name: "Dropbox", category: "Files & Storage", logo: "📂", description: "File sync and share" },
  { name: "Twitter/X", category: "Social Media", logo: "🐦", description: "Social media automation" },
  { name: "LinkedIn", category: "Social Media", logo: "💼", description: "Professional networking" },
  { name: "Facebook", category: "Social Media", logo: "👤", description: "Social media platform" },
  { name: "Instagram", category: "Social Media", logo: "📷", description: "Photo sharing" },
  { name: "YouTube", category: "Social Media", logo: "▶️", description: "Video platform" },
  { name: "Google Analytics", category: "Analytics", logo: "📈", description: "Web analytics" },
  { name: "Mixpanel", category: "Analytics", logo: "📊", description: "Product analytics" },
  { name: "Amplitude", category: "Analytics", logo: "📉", description: "Product intelligence" },
  { name: "Segment", category: "Analytics", logo: "🔀", description: "Customer data platform" },
  { name: "Pipedrive", category: "Sales", logo: "💰", description: "Sales CRM" },
  { name: "Calendly", category: "Productivity", logo: "📅", description: "Scheduling automation" },
  { name: "Zoom", category: "Communication", logo: "🎥", description: "Video meetings" },
  { name: "Microsoft Teams", category: "Communication", logo: "👥", description: "Team collaboration" },
  { name: "Webhook", category: "Developer Tools", logo: "🔗", description: "HTTP webhooks" },
  { name: "HTTP Request", category: "Developer Tools", logo: "🌐", description: "Custom API calls" },
  { name: "Code", category: "Developer Tools", logo: "💻", description: "Custom JavaScript/TypeScript" },
];

export default function IntegrationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredIntegrations = sampleIntegrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/20 text-white/70">
              <Plug className="w-3 h-3 mr-1" />
              280+ Integrations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Connect to <span className="text-white/70">Everything</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Hanzo Auto comes with 280+ pre-built integrations to connect your favorite apps and services.
              All integrations are also available as MCP servers for use with Claude, Cursor, and other AI tools.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-900 border-neutral-800"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "bg-white/10 hover:bg-white/10" : ""}
              >
                All
              </Button>
              {integrationCategories.slice(0, 8).map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-white/10 hover:bg-white/10" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredIntegrations.map((integration, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-white/20 transition-colors group cursor-pointer"
              >
                <div className="text-3xl mb-2">{integration.logo}</div>
                <h3 className="font-semibold text-white group-hover:text-white/70 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-neutral-500">{integration.description}</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  {integration.category}
                </Badge>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-b from-white/20 to-white/10 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Need a custom integration?</h2>
            <p className="text-neutral-400 mb-6">
              All integrations are built with TypeScript and are open source.
              Create your own pieces or request new integrations.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <a href="https://github.com/hanzoai/auto" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://activepieces.com/pieces" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Browse All Pieces
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
