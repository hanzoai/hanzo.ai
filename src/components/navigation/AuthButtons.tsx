
import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface AuthButtonsProps {
  user: any | null;
  themeColor?: string;
}

const AuthButtons = ({ user, themeColor }: AuthButtonsProps) => {
  const { isDarkMode, getRoundingClass } = useTheme();

  // Get theme-specific button classes
  const getThemeButtonClasses = () => {
    if (!themeColor) return "bg-white text-black hover:bg-gray-100";

    const colorMap: Record<string, string> = {
      indigo: "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-500",
      orange: "bg-orange-600 text-white hover:bg-orange-700 border-orange-500",
      emerald: "bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-500",
      blue: "bg-blue-600 text-white hover:bg-blue-700 border-blue-500",
      violet: "bg-violet-600 text-white hover:bg-violet-700 border-violet-500",
      pink: "bg-pink-600 text-white hover:bg-pink-700 border-pink-500",
      amber: "bg-amber-600 text-white hover:bg-amber-700 border-amber-500",
      green: "bg-green-600 text-white hover:bg-green-700 border-green-500",
    };

    return colorMap[themeColor] || "bg-white text-black hover:bg-gray-100";
  };

  const getThemeOutlineClasses = () => {
    if (!themeColor) return "border-gray-700 text-white hover:bg-white/10";

    const colorMap: Record<string, string> = {
      indigo: "border-indigo-500/50 text-indigo-200 hover:bg-indigo-500/20",
      orange: "border-orange-500/50 text-orange-200 hover:bg-orange-500/20",
      emerald: "border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/20",
      blue: "border-blue-500/50 text-blue-200 hover:bg-blue-500/20",
      violet: "border-violet-500/50 text-violet-200 hover:bg-violet-500/20",
      pink: "border-pink-500/50 text-pink-200 hover:bg-pink-500/20",
      amber: "border-amber-500/50 text-amber-200 hover:bg-amber-500/20",
      green: "border-green-500/50 text-green-200 hover:bg-green-500/20",
    };

    return colorMap[themeColor] || "border-gray-700 text-white hover:bg-white/10";
  };

  return (
    <div className="hidden md:flex items-center space-x-3">
      {user ? (
        <Button
          variant="outline"
          size="sm"
          className={cn(
            getThemeOutlineClasses(),
            getRoundingClass(),
            "h-10 min-w-[120px]"
          )}
        >
          <a href="https://cloud.hanzo.ai" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Account
          </a>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className={cn(
            getThemeOutlineClasses(),
            "rounded-full h-10 min-w-[120px]"
          )}
        >
          <a href="https://cloud.hanzo.ai">
            Console
          </a>
        </Button>
      )}
      <Button
        size="sm"
        className={cn(
          getThemeButtonClasses(),
          "rounded-full transition-all duration-300 h-10 min-w-[120px]"
        )}
      >
        <a href="https://cloud.hanzo.ai/auth/sign-up">
          Signup
        </a>
      </Button>
    </div>
  );
};

export default AuthButtons;
