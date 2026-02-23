'use client'

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Delay scroll to allow exit animation to complete (matches PageTransition duration)
const SCROLL_DELAY_MS = 50;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Don't scroll on initial page load - let the browser handle it
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Delay scroll to avoid jarring scroll-before-render effect
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, SCROLL_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
