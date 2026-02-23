
import { ChevronDown } from "lucide-react";
import { type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavigationButtonProps {
  children: ReactNode;
  onHoverStart?: () => void;
  onClick?: () => void;
  noChevron?: boolean;
  isActive?: boolean;
}

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ children, onHoverStart, onClick, noChevron = false, isActive = false, ...props }, ref) => {
    return (
      <button 
        ref={ref}
        className={cn(
          "inline-flex items-center outline-none focus:outline-none transition-colors",
          isActive ? "text-white" : "text-neutral-300 hover:text-white"
        )}
        onMouseEnter={onHoverStart}
        onClick={onClick}
        {...props}
      >
        {children}
        {!noChevron && (
          <ChevronDown 
            className={cn(
              "ml-1 h-4 w-4 transition-transform duration-300",
              isActive && "rotate-180"
            )} 
          />
        )}
      </button>
    );
  }
);

NavigationButton.displayName = "NavigationButton";
