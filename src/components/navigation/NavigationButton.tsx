
import { ChevronDown } from "lucide-react";
import { type ReactNode } from "react";

interface NavigationButtonProps {
  children: ReactNode;
}

export const NavigationButton = ({ children }: NavigationButtonProps) => {
  return (
    <button 
      onMouseEnter={(e) => {
        const trigger = e.currentTarget;
        trigger.click();
      }}
      className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
    >
      {children}
      <ChevronDown className="ml-1 h-4 w-4" />
    </button>
  );
};
