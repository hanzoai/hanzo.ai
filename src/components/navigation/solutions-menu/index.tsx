
import { useState } from "react";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "../NavigationButton";
import { SolutionsContent } from "./SolutionsContent";

export const SolutionsMenu = () => {
  const [open, setOpen] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);
  
  // Hover buffer timing to prevent quick disappearance
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Only close if it wasn't clicked open
    if (!clickedOpen) {
      closeTimeout = setTimeout(() => {
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PopoverTrigger asChild>
            <NavigationButton onClick={handleSolutionsClick}>Solutions</NavigationButton>
          </PopoverTrigger>
          
          {/* Extended hover area */}
          {open && !clickedOpen && (
            <div 
              className="absolute left-0 w-full h-10 -bottom-10"
              onMouseEnter={handleMouseEnter}
            />
          )}
        </div>
        
        <PopoverContent 
          className="w-[1000px] p-6 bg-black border-gray-800 z-50"
          sideOffset={8}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onInteractOutside={handleOutsideClick}
        >
          <SolutionsContent onCloseMenu={handleCloseMenu} />
        </PopoverContent>
      </Popover>
    </div>
  );
};
