import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface AuthButtonsProps {
  user: any | null;
  onOpenCommandPalette?: () => void;
}

const AuthButtons = ({ user, onOpenCommandPalette }: AuthButtonsProps) => {
  const { isDarkMode, getRoundingClass } = useTheme();

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

      {/* Try Hanzo button */}
      <a href="https://cloud.hanzo.ai">
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent text-white border border-neutral-600 hover:bg-white hover:text-black hover:border-white rounded-full h-9 px-4 text-sm font-medium transition-all duration-200"
        >
          Try Hanzo
        </Button>
      </a>
    </div>
  );
};

export default AuthButtons;
