import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ExternalLink } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface AuthButtonsProps {
  user: any | null;
  onOpenCommandPalette?: () => void;
}

// Try Hanzo dropdown menu items
const tryHanzoMenu = {
  products: {
    title: "Products",
    items: [
      { label: "Hanzo Dev", href: "/dev", external: false },
      { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", external: true },
      { label: "Zen Models", href: "/zen", external: false },
      { label: "Pricing", href: "/pricing", external: false },
      { label: "Talk to sales", href: "/contact", external: false },
    ],
  },
  featured: {
    title: "Featured",
    items: [
      { label: "Hanzo Agent", href: "/operative", external: false },
      { label: "Hanzo Vector", href: "/vector", external: false },
      { label: "Hanzo IAM", href: "/identity", external: false },
    ],
  },
  login: {
    title: "Log in",
    items: [
      { label: "hanzo.chat", href: "https://hanzo.chat", external: true },
      { label: "Console login", href: "https://cloud.hanzo.ai", external: true },
    ],
  },
};

const AuthButtons = ({ user, onOpenCommandPalette }: AuthButtonsProps) => {
  const { isDarkMode, getRoundingClass } = useTheme();
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

  const renderMenuItem = (item: { label: string; href: string; external: boolean }) => {
    const content = (
      <div className="flex items-center justify-between w-full py-2.5 px-4 text-white hover:bg-neutral-800/50 transition-colors">
        <span className="text-sm font-medium">{item.label}</span>
        {item.external && <ExternalLink className="w-4 h-4 text-neutral-500" />}
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
  };

  return (
    <div className="hidden md:flex items-center space-x-3">
      {/* Search / Command palette trigger */}
      <button
        onClick={onOpenCommandPalette}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors text-sm"
        aria-label="Search (⌘K)"
      >
        <Search className="h-4 w-4" />
        <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-neutral-800/50 border border-neutral-700/50 rounded text-neutral-500">
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
        <Button
          size="sm"
          className="bg-white text-black hover:bg-neutral-100 rounded-full h-9 px-4 text-sm font-medium transition-all duration-200 flex items-center gap-2"
        >
          Try Hanzo
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </Button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-72 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-[100]"
            >
              {/* Products section */}
              <div className="py-3">
                <div className="px-4 pb-2">
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    {tryHanzoMenu.products.title}
                  </span>
                </div>
                {tryHanzoMenu.products.items.map(renderMenuItem)}
              </div>

              <div className="border-t border-neutral-800" />

              {/* Featured section */}
              <div className="py-3">
                <div className="px-4 pb-2">
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    {tryHanzoMenu.featured.title}
                  </span>
                </div>
                {tryHanzoMenu.featured.items.map(renderMenuItem)}
              </div>

              <div className="border-t border-neutral-800" />

              {/* Login section */}
              <div className="py-3">
                <div className="px-4 pb-2">
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    {tryHanzoMenu.login.title}
                  </span>
                </div>
                {tryHanzoMenu.login.items.map(renderMenuItem)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthButtons;
