import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mainNav, utilityNav, NavSection, MainNavItem } from "@/constants/navigation-data";
import { cn } from "@/lib/utils";

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
          className="text-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md" onClick={onToggle} />
          
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 backdrop-blur-md border-l border-gray-800 pt-[var(--header-height)] h-screen overflow-y-auto shadow-2xl">
            <div className="px-2 py-3 space-y-1 bg-black/95 backdrop-blur-md">
              {mainNav.map((item) => (
                <div key={item.title} className="border-b border-gray-800 pb-2 mb-2">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors"
                      onClick={onToggle}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors"
                        onClick={() => toggleSection(item.title)}
                      >
                        {item.title}
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform",
                          expandedSections[item.title] && "rotate-90"
                        )} />
                      </button>
                      
                      {expandedSections[item.title] && item.sections && (
                        <div className="pl-4 space-y-2 mt-1 bg-gray-900/30 rounded-lg p-2">
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
                                    className="block px-3 py-1 text-sm text-neutral-300 hover:text-white hover:bg-gray-800/30 rounded transition-colors"
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
            
            <div className="px-4 py-4 space-y-2 border-t border-gray-800 bg-black/95 backdrop-blur-md">
              <Button variant="ghost" className="w-full text-white hover:bg-gray-800/50">
                <a href="https://cloud.hanzo.ai">Login</a>
              </Button>
              <Button className="w-full bg-white text-black border border-gray-300 hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300">
                <a href="https://cloud.hanzo.ai/auth/sign-up">Signup</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};