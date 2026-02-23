"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code,
  BookOpen,
  PenLine,
  Send,
  Globe,
  ChevronDown,
} from "lucide-react";

// Footer navigation data matching the design
const footerLinks = {
  products: {
    title: "Products",
    items: [
      { title: "Hanzo App", href: "/app" },
      { title: "Hanzo Base", href: "/base" },
      { title: "Hanzo Chat", href: "/bot" },
      { title: "Hanzo Dev", href: "/dev" },
      { title: "Hanzo Extension", href: "/extension" },
      { title: "Hanzo MCP", href: "/products/apps/mcp" },
      { title: "Hanzo Platform", href: "/platform" },
      { title: "See All Products", href: "/products", highlight: true },
    ],
  },
  features: {
    title: "Features",
    items: [
      { title: "CLI", href: "/download" },
      { title: "Browser Extension", href: "/extension" },
      { title: "IDE Extensions", href: "https://marketplace.visualstudio.com/items?itemName=hanzo.hanzo-dev", external: true },
      { title: "Slack", href: "https://hanzo.ai/slack", external: true },
      { title: "GitHub App", href: "https://github.com/apps/hanzo-ai", external: true },
      { title: "Agents", href: "/operative" },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { title: "AI agents", href: "/solutions/capabilities" },
      { title: "Code modernization", href: "/solutions/capabilities" },
      { title: "Compliance", href: "/solutions/industries" },
      { title: "Customer support", href: "/solutions/capabilities" },
      { title: "Financial services", href: "/solutions/industries" },
      { title: "Healthcare", href: "/solutions/industries" },
      { title: "Public sector", href: "/solutions/industries" },
      { title: "Nonprofits", href: "/solutions/industries" },
    ],
  },
  models: {
    title: "Models",
    items: [
      { title: "Zen Coder Flash", href: "/zen" },
      { title: "Zen Coder", href: "/zen" },
      { title: "Zen Coder Max", href: "/zen" },
      { title: "Zen Ultra", href: "/zen" },
      { title: "View All Models", href: "/zen", highlight: true },
    ],
  },
  learn: {
    title: "Learn",
    items: [
      { title: "Docs", href: "https://docs.hanzo.ai", external: true },
      { title: "Blog", href: "/blog" },
      { title: "Tutorials", href: "https://docs.hanzo.ai/tutorials", external: true },
    ],
  },
  helpSecurity: {
    title: "Help and security",
    items: [
      { title: "Availability", href: "/status" },
      { title: "Status", href: "/status" },
      { title: "Support center", href: "/contact" },
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" },
      { title: "Responsible disclosure", href: "/security" },
      { title: "Usage policy", href: "/terms" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { title: "About", href: "/team" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
      { title: "Philosophy", href: "/philosophy" },
      { title: "Research", href: "https://zenlm.org", external: true },
    ],
  },
};

// Chat widget action buttons - matching design order
const chatActions = [
  { icon: PenLine, label: "Write" },
  { icon: BookOpen, label: "Learn" },
  { icon: Code, label: "Code" },
];

// Social links with SVG icons
const socialLinks = [
  {
    name: "X",
    href: "https://x.com/hanzoai",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/hanzoai",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@hanzoai",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/hanzoai",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; href: string; external?: boolean; highlight?: boolean }>;
}) => (
  <div>
    <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.title}>
          {item.external ? (
            <a
              href={item.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${
                item.highlight
                  ? "text-white hover:text-neutral-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.title}
            </a>
          ) : (
            <Link
              href={item.href || "#"}
              className={`text-sm transition-colors ${
                item.highlight
                  ? "text-white hover:text-neutral-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [chatInput, setChatInput] = useState("");

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { message: chatInput } }));
      setChatInput("");
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-800 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo and chat widget - left column */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
                alt="Hanzo"
                className="h-6 w-6"
              />
              <span className="text-white font-bold text-xl">Hanzo</span>
            </Link>

            {/* Chat widget */}
            <form onSubmit={handleChatSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="How can I help you today?"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 pr-10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center transition-colors hover:opacity-80 bg-white"
                >
                  <Send className="w-3 h-3 text-black" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {chatActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { action: action.label } }));
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                    >
                      <Icon className="w-3 h-3" />
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </form>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
              <FooterColumn {...footerLinks.products} />
              <FooterColumn {...footerLinks.features} />
              <FooterColumn {...footerLinks.solutions} />

              <div className="space-y-6">
                <FooterColumn {...footerLinks.models} />
                <FooterColumn {...footerLinks.learn} />
              </div>

              <FooterColumn {...footerLinks.helpSecurity} />
              <FooterColumn {...footerLinks.company} />
            </div>
          </div>
        </div>

        {/* Newsletter + Social CTA */}
        <div className="mt-10 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 max-w-md">
              <h4 className="text-sm font-semibold text-white mb-2">Stay updated</h4>
              <p className="text-xs text-neutral-400 mb-3">Get the latest news, product updates, and AI insights.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-black bg-white transition-colors hover:bg-neutral-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Link href="/referral" className="text-neutral-400 hover:text-white transition-colors">
                  Referral Program
                </Link>
                <span className="text-neutral-600">&#8226;</span>
                <Link href="/affiliate" className="text-neutral-400 hover:text-white transition-colors">
                  Affiliates
                </Link>
                <span className="text-neutral-600">&#8226;</span>
                <Link href="/share" className="text-neutral-400 hover:text-white transition-colors">
                  Share & Earn
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs">
              <a
                href="https://hanzo.industries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 tracking-wider uppercase hover:text-white transition-colors"
                style={{ fontWeight: 100 }}
              >
                BY HANZO INDUSTRIES
              </a>
              <span className="text-neutral-600">
                &copy; 2016-{new Date().getFullYear()} HANZO.AI
              </span>
            </div>

            {/* Language selector */}
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs hover:bg-neutral-800 hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5" />
                English (US)
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
