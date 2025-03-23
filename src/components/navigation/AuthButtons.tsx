
import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

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
          className={`${isDarkMode ? "text-white border-white hover:bg-white/10" : "text-gray-900 border-gray-300 hover:bg-gray-100"} ${getRoundingClass()} h-10 min-w-[120px]`}
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
          className="bg-black/90 text-white border border-gray-700 hover:bg-black hover:border-gray-600 rounded-full h-10 min-w-[120px]"
        >
          <a href="https://cloud.hanzo.ai">
            Console
          </a>
        </Button>
      )}
      <Button 
        size="sm" 
        className="bg-white text-black rounded-full hover:bg-gray-100 h-10 min-w-[120px]"
      >
        <a href="https://cloud.hanzo.ai/auth/sign-up">
          Signup
        </a>
      </Button>
    </div>
  );
};

export default AuthButtons;
