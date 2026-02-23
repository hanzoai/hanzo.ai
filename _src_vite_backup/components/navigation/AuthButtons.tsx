import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ExternalLink, Brain, Video, Music, Box, Cpu, Sparkles, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthButtonsProps {
  user: User | null;
  onOpenCommandPalette?: () => void;
}

// Zen model family for dropdown
const zenModels = [
  {
    name: "zen-eco",
    params: "4B",
    description: "Fast general-purpose LLM",
    icon: Brain,
    href: "https://huggingface.co/zenlm/zen-eco-4b-instruct",
    external: true,
  },
  {
    name: "zen-omni",
    params: "8B",
    description: "Multimodal vision + audio",
    icon: Sparkles,
    href: "https://huggingface.co/zenlm/zen-omni-8b",
    external: true,
  },
  {
    name: "zen-director",
    params: "5B",
    description: "Text-to-video generation",
    icon: Video,
    href: "https://huggingface.co/zenlm/zen-director-5b",
    external: true,
  },
  {
    name: "zen-3d",
    params: "3.3B",
    description: "3D asset generation",
    icon: Box,
    href: "https://huggingface.co/zenlm/zen-3d",
    external: true,
  },
];

// Quick access items
const quickAccess = [
  { label: "Hanzo Dev", href: "/dev", external: false },
  { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", external: true },
  { label: "All Zen Models", href: "/zen", external: false },
  { label: "Pricing", href: "/pricing", external: false },
];

// Login items
const loginItems = [
  { label: "Hanzo Chat", href: "https://hanzo.chat", external: true },
  { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", external: true },
];

const AuthButtons = ({ user, onOpenCommandPalette }: AuthButtonsProps) => {
  const { isDarkMode } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isDropdownOpen]);

  return (
    <div className="hidden md:flex items-center space-x-3">
      {/* Search / Command palette trigger - unified widget */}
      <button
        onClick={onOpenCommandPalette}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 transition-all text-sm"
        aria-label="Search (⌘K)"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline text-neutral-500 text-xs">Search...</span>
        <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-neutral-900/80 border border-neutral-700/50 rounded text-neutral-500">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Contact sales button */}
      <Link to="/contact">
        <Button
          variant="ghost"
          size="sm"
          className="text-neutral-300 hover:text-white hover:bg-transparent text-sm font-medium h-9"
        >
          Contact sales
        </Button>
      </Link>

      {/* Try Hanzo dropdown - hover activated */}
      <div
        className="relative"
        ref={dropdownRef}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 active:bg-neutral-300 rounded-full h-9 px-4 text-sm font-medium transition-all duration-200"
        >
          Try Hanzo
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-[420px] bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-[100]"
            >
              {/* Zen AI Models - Featured Section */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Zen AI Models
                    </span>
                  </div>
                  <Link
                    to="/zen"
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    View all →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {zenModels.map((model) => {
                    const ModelIcon = model.icon;
                    return (
                      <a
                        key={model.name}
                        href={model.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-neutral-700/50 flex items-center justify-center flex-shrink-0">
                          <ModelIcon className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">{model.name}</span>
                            <span className="text-[10px] font-mono text-neutral-500">{model.params}</span>
                          </div>
                          <p className="text-xs text-neutral-400 truncate">{model.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-neutral-800" />

              {/* Quick Access */}
              <div className="py-2">
                <div className="px-4 py-1.5">
                  <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
                    Quick Access
                  </span>
                </div>
                {quickAccess.map((item) => {
                  const content = (
                    <div className="flex items-center justify-between w-full py-2 px-4 text-white hover:bg-neutral-800/50 transition-colors">
                      <span className="text-sm">{item.label}</span>
                      {item.external && <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />}
                    </div>
                  );

                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.label} to={item.href} onClick={() => setIsDropdownOpen(false)}>
                      {content}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-neutral-800" />

              {/* Login Section */}
              <div className="py-2">
                <div className="px-4 py-1.5">
                  <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
                    Log in
                  </span>
                </div>
                {loginItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center justify-between w-full py-2 px-4 text-white hover:bg-neutral-800/50 transition-colors"
                  >
                    <span className="text-sm">{item.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthButtons;
