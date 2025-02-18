
import { ChevronDown } from "lucide-react";
import { type ReactNode, forwardRef } from "react";

interface NavigationButtonProps {
  children: ReactNode;
  onHoverStart?: () => void;
  onClick?: () => void;
}

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ children, onHoverStart, onClick, ...props }, ref) => {
    return (
      <button 
        ref={ref}
        className="text-gray-300 hover:text-white transition-colors inline-flex items-center outline-none focus:outline-none"
        onMouseEnter={onHoverStart}
        onClick={onClick}
        {...props}
      >
        {children}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
    );
  }
);

NavigationButton.displayName = "NavigationButton";
