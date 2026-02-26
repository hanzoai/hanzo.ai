'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { HanzoLogo } from "@hanzo/logo/react";
import { getWhiteSVG } from "@hanzo/logo";

// Context menu items for right-click
const contextMenuItems = [
  { label: "Copy Logo SVG", action: "copy-svg" },
  { label: "Brand Guidelines", href: "/brand" },
  { divider: true },
  { label: "All Products", href: "/products" },
  { label: "Hanzo Dev", href: "/dev" },
  { label: "AI & Models", href: "/ai" },
  { label: "Hanzo Cloud", href: "/cloud" },
  { divider: true },
  { label: "Documentation", href: "https://docs.hanzo.ai", external: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Sales", href: "/contact" },
  { label: "Status", href: "/status" },
];

const Logo = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showIntroWordmark, setShowIntroWordmark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // After mount, show wordmark briefly then hide
  useEffect(() => {
    const animTimer = setTimeout(() => {
      setAnimationComplete(true);
      setShowIntroWordmark(true);
    }, 1200);

    const hideTimer = setTimeout(() => {
      setShowIntroWordmark(false);
    }, 2500);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Close context menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setContextMenu(null);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContextMenu(null);
    };

    if (contextMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [contextMenu]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleMenuItemClick = async (item: typeof contextMenuItems[0]) => {
    setContextMenu(null);
    if ('action' in item && item.action === 'copy-svg') {
      try {
        await navigator.clipboard.writeText(getWhiteSVG());
      } catch (err) {
        console.error('Failed to copy SVG:', err);
      }
    } else if ('external' in item && item.external) {
      window.open(item.href, "_blank");
    } else if (item.href) {
      router.push(item.href);
    }
  };

  // Show wordmark when hovering OR during intro animation
  const shouldShowWordmark = isHovered || showIntroWordmark;

  return (
    <>
      <Link
        href="/"
        className="relative flex items-center group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onContextMenu={handleContextMenu}
      >
        <motion.div
          initial={{ opacity: 0, rotateY: 180, scale: 0.6 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-6 h-6 relative flex-shrink-0"
          onAnimationComplete={() => setAnimationComplete(true)}
          style={{ transformOrigin: "center center" }}
        >
          <HanzoLogo variant="white" className="w-full h-full" />
        </motion.div>

        {/* Wordmark - absolute positioned so it doesn't shift other content */}
        <div className="absolute left-8 overflow-hidden">
          <span
            className={`font-bold text-xl text-foreground whitespace-nowrap block transition-transform duration-300 ease-out ${
              shouldShowWordmark ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            Hanzo
          </span>
        </div>
      </Link>

      {/* Right-click context menu */}
      <AnimatePresence>
        {contextMenu && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="fixed z-[200] rounded-lg shadow-2xl py-1 min-w-[180px] border bg-background border-border"
            style={{ left: contextMenu.x, top: contextMenu.y }}
          >
            {contextMenuItems.map((item, index) =>
              'divider' in item ? (
                <div key={index} className="border-t my-1 border-border" />
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleMenuItemClick(item)}
                  className="w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between text-foreground/80 hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                  {'action' in item && item.action === 'copy-svg' && (
                    <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {'external' in item && item.external && (
                    <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Logo;
