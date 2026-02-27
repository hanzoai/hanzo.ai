'use client'

import { useState } from "react";
import { Menu, X, ChevronRight, Search } from "lucide-react";
import { Button } from "@hanzo/ui";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenSearch?: () => void;
}

// Mobile navigation structure matching desktop
const mobileNav = [
  {
    title: "Explore",
    sections: [
      {
        title: "Quick Links",
        items: [
          { title: "All Products", href: "/products" },
          { title: "Hanzo Dev", href: "/dev" },
          { title: "AI & Models", href: "/ai" },
          { title: "Hanzo Cloud", href: "/cloud" },
        ]
      },
      {
        title: "Resources",
        items: [
          { title: "Documentation", href: "https://docs.hanzo.ai", external: true },
          { title: "Pricing", href: "/pricing" },
          { title: "Contact Sales", href: "/contact" },
          { title: "Status", href: "/status" },
        ]
      }
    ]
  },
  {
    title: "Meet Hanzo",
    sections: [
      {
        title: "Company",
        items: [
          { title: "Team", href: "/team" },
          { title: "Leadership", href: "/leadership" },
          { title: "Philosophy", href: "/philosophy" },
          { title: "Zen Models", href: "/zen" },
          { title: "Open Source", href: "/open-source" },
        ]
      },
      {
        title: "Connect",
        items: [
          { title: "Contact", href: "/contact" },
          { title: "Enterprise", href: "/enterprise" },
          { title: "Referrals", href: "/referrals" },
        ]
      },
      {
        title: "Trust",
        items: [
          { title: "Security", href: "/security" },
          { title: "Status", href: "/status" },
        ]
      }
    ]
  },
  {
    title: "Platform",
    sections: [
      {
        title: "Products",
        items: [
          { title: "Hanzo Dev", href: "/dev" },
          { title: "Hanzo Base", href: "/base" },
          { title: "AI & Models", href: "/ai" },
          { title: "Vector DB", href: "/vector" },
          { title: "Functions", href: "/functions" },
          { title: "Identity", href: "/identity" },
        ]
      },
      {
        title: "Infrastructure",
        items: [
          { title: "Hanzo Cloud", href: "/cloud" },
          { title: "Edge", href: "/edge" },
          { title: "Platform", href: "/platform" },
          { title: "Blockchain", href: "/blockchain" },
        ]
      }
    ]
  },
  {
    title: "Solutions",
    sections: [
      {
        title: "Featured",
        items: [
          { title: "Hanzo Agency", href: "/agency" },
          { title: "Enterprise", href: "/enterprise" },
        ]
      },
      {
        title: "Use Cases",
        items: [
          { title: "AI Agents", href: "/solutions/automation" },
          { title: "Automation", href: "/solutions/automation" },
          { title: "Analytics", href: "/solutions/analytics" },
          { title: "Content Generation", href: "/solutions/content" },
          { title: "Customer Support", href: "/solutions/customer-support" },
        ]
      },
      {
        title: "Industries",
        items: [
          { title: "Financial Services", href: "/solutions/industries" },
          { title: "Healthcare", href: "/solutions/industries" },
        ]
      }
    ]
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Learn",
    sections: [
      {
        title: "Documentation",
        items: [
          { title: "Docs", href: "https://docs.hanzo.ai", external: true },
          { title: "Tutorials", href: "https://docs.hanzo.ai/tutorials", external: true },
          { title: "API Reference", href: "https://docs.hanzo.ai/api", external: true },
        ]
      },
      {
        title: "Community",
        items: [
          { title: "GitHub", href: "https://github.com/hanzoai", external: true },
          { title: "Discord", href: "https://discord.gg/hanzo", external: true },
          { title: "Blog", href: "/blog" },
        ]
      },
      {
        title: "Resources",
        items: [
          { title: "Brand", href: "/brand" },
          { title: "Press", href: "/press" },
          { title: "Open Source", href: "/open-source" },
        ]
      }
    ]
  }
];

export const MobileMenu = ({ isOpen, onToggle, onOpenSearch }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLinkClick = () => {
    onToggle();
  };

  return (
    <>
      <div className="md:hidden flex items-center gap-2">
        {/* Search button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenSearch}
          className="text-muted-foreground hover:text-foreground"
        >
          <Search className="h-5 w-5" />
        </Button>

        {/* Menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-foreground"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md" onClick={onToggle} />

          <div className="fixed inset-0 w-full bg-background pt-[var(--header-height)] h-screen overflow-y-auto">
            {/* Search / Command palette widget at top */}
            <div className="px-4 pt-4 pb-2">
              <button
                onClick={() => {
                  onToggle();
                  onOpenSearch?.();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:bg-accent hover:border-border transition-all"
              >
                <Search className="h-5 w-5" />
                <span className="flex-1 text-left text-sm">Search docs, products, pages...</span>
                <kbd className="inline-flex items-center gap-0.5 px-2 py-1 text-[11px] font-mono bg-neutral-800 border border-border rounded text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>

            <div className="px-4 py-4 space-y-1">
              {mobileNav.map((item) => (
                <div key={item.title} className="border-b border-border/50 pb-2 mb-2">
                  {item.href ? (
                    <Link
                      href={item.href || "#"}
                      className="block px-3 py-2.5 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex justify-between items-center px-3 py-2.5 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                        onClick={() => toggleSection(item.title)}
                      >
                        {item.title}
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedSections[item.title] && "rotate-90"
                        )} />
                      </button>

                      {expandedSections[item.title] && item.sections && (
                        <div className="mt-2 ml-2 space-y-4 bg-secondary/50 rounded-lg p-3">
                          {item.sections.map((section) => (
                            <div key={section.title}>
                              <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                {section.title}
                              </div>
                              <div className="space-y-0.5 mt-1">
                                {section.items.map((subItem) => (
                                  subItem.external ? (
                                    <a
                                      key={subItem.title}
                                      href={subItem.href || "#"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.title}
                                    </a>
                                  ) : (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href || "#"}
                                      className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.title}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom buttons */}
            <div className="px-4 py-4 space-y-3 border-t border-border">
              <Link href="/contact" onClick={handleLinkClick}>
                <Button variant="ghost" className="w-full text-foreground/80 hover:text-foreground hover:bg-accent/50 justify-center">
                  Contact sales
                </Button>
              </Link>
              <a
                href="https://cloud.hanzo.ai"
                className="block w-full bg-primary text-primary-foreground hover:bg-accent active:bg-neutral-300 rounded-full h-10 flex items-center justify-center text-sm font-medium transition-all duration-200"
              >
                Try Zen
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
