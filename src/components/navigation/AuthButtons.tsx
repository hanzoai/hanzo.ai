
import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface AuthButtonsProps {
  user: any | null;
}

const AuthButtons = ({ user }: AuthButtonsProps) => {
  const { isDarkMode, getRoundingClass } = useTheme();
  
  return (
    <div className="hidden md:flex items-center space-x-3">
      {user ? (
        <Button 
          variant="outline" 
          size="sm"
          className={cn(
            isDarkMode ? "text-[var(--white)] border-white hover:bg-[var(--white)]/10" : "text-neutral-900 border-gray-300 hover:bg-gray-100",
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
          className="bg-[var(--black)]/90 text-[var(--white)] border border-gray-700 hover:bg-[var(--black)] hover:border-gray-600 rounded-full h-10 min-w-[120px]"
        >
          <a href="https://cloud.hanzo.ai">
            Console
          </a>
        </Button>
      )}
      <Button 
        size="sm" 
        className="bg-[var(--white)] text-black border border-gray-300 rounded-full hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300 h-10 min-w-[120px]"
      >
        <a href="https://cloud.hanzo.ai/auth/sign-up">
          Signup
        </a>
      </Button>
    </div>
  );
};

export default AuthButtons;
