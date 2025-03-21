
import { useState, useRef, useEffect } from "react";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "../NavigationButton";
import { SolutionsContent } from "./SolutionsContent";
import { useIsMobile } from "@/hooks/use-mobile";

export const SolutionsMenu = () => {
  const [open, setOpen] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Hover buffer timing to prevent quick disappearance
  let closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Only close if it wasn't clicked open
    if (!clickedOpen) {
      closeTimeout.current = setTimeout(() => {
        setOpen(false);
      }, 300); // 300ms delay before closing
    }
  };

  const handleSolutionsClick = () => {
    setClickedOpen(!clickedOpen);
    setOpen(!open);
  };

  // Close when clicking outside
  const handleOutsideClick = () => {
    if (clickedOpen) {
      setClickedOpen(false);
      setOpen(false);
    }
  };

  const handleCloseMenu = () => {
    setOpen(false);
    setClickedOpen(false);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <Popover 
        open={open || clickedOpen}
        onOpenChange={(newOpen) => {
          if (!newOpen) {
            setClickedOpen(false);
            setOpen(false);
          }
        }}
      >
        <div 
          className="relative"
          onMouseEnter={!isMobile ? handleMouseEnter : undefined}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        >
          <PopoverTrigger asChild>
            <NavigationButton onClick={handleSolutionsClick}>Solutions</NavigationButton>
          </PopoverTrigger>
          
          {/* Extended hover area */}
          {!isMobile && open && !clickedOpen && (
            <div 
              className="absolute left-0 w-full h-10 -bottom-10"
              onMouseEnter={handleMouseEnter}
            />
          )}
        </div>
        
        <PopoverContent 
          className={`${isMobile ? 'w-[100vw] max-w-[95vw]' : 'w-[1000px]'} p-6 bg-black border-gray-800 z-50`}
          sideOffset={8}
          onMouseEnter={!isMobile ? handleMouseEnter : undefined}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          onInteractOutside={handleOutsideClick}
        >
          <SolutionsContent onCloseMenu={handleCloseMenu} />
        </PopoverContent>
      </Popover>
    </div>
  );
};
