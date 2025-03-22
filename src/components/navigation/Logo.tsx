
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Logo = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
        alt="Hanzo"
        className="h-10 w-10"
      />
      <span className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>Hanzo</span>
    </Link>
  );
};

export default Logo;
