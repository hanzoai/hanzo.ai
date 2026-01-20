import { useState } from "react";
import { Menu, X, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
        title: "Use Cases",
        items: [
          { title: "AI Agents", href: "/solutions/capabilities" },
          { title: "Code Modernization", href: "/solutions/capabilities" },
          { title: "Customer Support", href: "/solutions/capabilities" },
        ]
      },
      {
        title: "Industries",
        items: [
          { title: "Financial Services", href: "/solutions/industries" },
          { title: "Healthcare", href: "/solutions/industries" },
          { title: "Enterprise", href: "/enterprise" },
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
          className="text-neutral-400 hover:text-white"
        >
          <Search className="h-5 w-5" />
        </Button>

        {/* Menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md" onClick={onToggle} />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-black border-l border-neutral-800 pt-[var(--header-height)] h-screen overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {mobileNav.map((item) => (
                <div key={item.title} className="border-b border-neutral-800/50 pb-2 mb-2">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block px-3 py-2.5 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex justify-between items-center px-3 py-2.5 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
                        onClick={() => toggleSection(item.title)}
                      >
                        {item.title}
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedSections[item.title] && "rotate-90"
                        )} />
                      </button>

                      {expandedSections[item.title] && item.sections && (
                        <div className="mt-2 ml-2 space-y-4 bg-neutral-900/50 rounded-lg p-3">
                          {item.sections.map((section) => (
                            <div key={section.title}>
                              <div className="px-2 py-1 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                {section.title}
                              </div>
                              <div className="space-y-0.5 mt-1">
                                {section.items.map((subItem) => (
                                  subItem.external ? (
                                    <a
                                      key={subItem.title}
                                      href={subItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-2 py-1.5 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded transition-colors"
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.title}
                                    </a>
                                  ) : (
                                    <Link
                                      key={subItem.title}
                                      to={subItem.href}
                                      className="block px-2 py-1.5 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded transition-colors"
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
            <div className="px-4 py-4 space-y-3 border-t border-neutral-800">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button variant="ghost" className="w-full text-neutral-300 hover:text-white hover:bg-neutral-800/50 justify-center">
                  Contact sales
                </Button>
              </Link>
              <a
                href="https://cloud.hanzo.ai"
                className="block w-full bg-white text-black hover:bg-neutral-200 active:bg-neutral-300 rounded-full h-10 flex items-center justify-center text-sm font-medium transition-all duration-200"
              >
                Try Hanzo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
