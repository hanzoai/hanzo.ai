
import { useState, useRef, useEffect } from "react";

export interface UseNavigationMenuOptions {
  initialOpen?: boolean;
  closeDelay?: number;
  exitDuration?: number;
  contentDelay?: number;
}

export function useNavigationMenu({
  initialOpen = false,
  closeDelay = 200,
  exitDuration = 300,
  contentDelay = 50,
}: UseNavigationMenuOptions = {}) {
  const [open, setOpen] = useState(initialOpen);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    }
    if (contentTimeoutRef.current) {
      clearTimeout(contentTimeoutRef.current);
      contentTimeoutRef.current = null;
    }
    
    setIsExiting(false);
    setOpen(true);
    // Slight delay before showing content to allow blur effect to start first
    contentTimeoutRef.current = setTimeout(() => {
      setShowContent(true);
    }, contentDelay);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      startExitAnimation();
    }, closeDelay);
  };

  const handleToggle = () => {
    if (open) {
      startExitAnimation();
    } else {
      setIsExiting(false);
      setOpen(true);
      // Slight delay before showing content to allow blur effect to start first
      contentTimeoutRef.current = setTimeout(() => {
        setShowContent(true);
      }, contentDelay);
    }
  };

  const startExitAnimation = () => {
    setIsExiting(true);
    setShowContent(false); // Hide content immediately
    exitTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setIsExiting(false);
    }, exitDuration); // Match this to the total animation duration
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && open) {
        startExitAnimation();
      }
    };
    
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
      }
    };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        startExitAnimation();
      }
    };
    
    if (open) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return {
    open,
    isExiting,
    showContent,
    menuRef,
    handleMouseEnter,
    handleMouseLeave,
    handleToggle,
    startExitAnimation
  };
}
