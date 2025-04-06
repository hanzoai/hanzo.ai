import { useState } from "react";
import { Menu, X, ChevronRight, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/radix-button";
import { Link } from "react-router-dom";
import { mainNav, utilityNav, NavSection } from "@/constants/navigation-data";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <>
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-[var(--white)]"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onToggle} />
          
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[var(--black)]/95 backdrop-blur-md shadow-xl border-l border-gray-800 pt-[var(--header-height)] h-screen overflow-y-auto">
            {/* Search/Chat section at the top for mobile */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <div className="text-neutral-300 text-sm">Need help?</div>
              <div className="flex space-x-4">
                <a href={utilityNav.search.href} className="flex items-center text-neutral-300 hover:text-[var(--white)]">
                  <Search className="h-4 w-4 mr-1" />
                  <span className="text-sm">{utilityNav.search.title}</span>
                </a>
                <a href={utilityNav.chat.href} className="flex items-center text-neutral-300 hover:text-[var(--white)]">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span className="text-sm">{utilityNav.chat.title}</span>
                </a>
              </div>
            </div>
            
            <div className="px-2 py-3 space-y-1">
              {mainNav.map((item) => (
                <div key={item.title} className="border-b border-gray-800 pb-2 mb-2">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-[var(--white)]"
                      onClick={onToggle}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-neutral-300 hover:text-[var(--white)]"
                        onClick={() => toggleSection(item.title)}
                      >
                        {item.title}
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections[item.title] ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {expandedSections[item.title] && item.sections && (
                        <div className="pl-4 space-y-2 mt-1">
                          {item.sections.map((section: NavSection) => (
                            <div key={section.title} className="mb-3">
                              <div className="px-3 py-1 text-sm font-semibold text-neutral-400">
                                {section.title}
                              </div>
                              <div className="space-y-1">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    to={subItem.href}
                                    className="block px-3 py-1 text-sm text-neutral-300 hover:text-[var(--white)]"
                                    onClick={onToggle}
                                  >
                                    {subItem.title}
                                  </Link>
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
            
            <div className="px-4 py-4 space-y-2 border-t border-gray-800">
              <Button variant="ghost" className="w-full text-[var(--white)] hover:bg-[var(--white)]/10">
                <a href="https://cloud.hanzo.ai">Login</a>
              </Button>
              <Button className="w-full bg-[var(--white)] text-black hover:bg-gray-100">
                <a href="https://cloud.hanzo.ai/auth/sign-up">Signup</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};