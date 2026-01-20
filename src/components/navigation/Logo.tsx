import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

// Context menu items for right-click
const contextMenuItems = [
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
  const { isDarkMode } = useTheme();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Animation variants for the container
  const logoVariants = {
    initial: {
      opacity: 0,
      rotateY: 180,
      scale: 0.6
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.12,
        when: "beforeChildren"
      }
    }
  };

  // Path animation variants
  const pathVariants = {
    initial: (custom: number) => ({
      opacity: 0,
      scale: 0.8,
      x: custom % 2 === 0 ? -15 : 15,
      y: custom % 3 === 0 ? -15 : 15,
      rotate: custom * 5
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
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

  const handleMenuItemClick = (item: typeof contextMenuItems[0]) => {
    setContextMenu(null);
    if ('external' in item && item.external) {
      window.open(item.href, "_blank");
    } else if (item.href) {
      navigate(item.href);
    }
  };

  const fillColor = isDarkMode ? "#ffffff" : "#000000";
  const accentColor = isDarkMode ? "#DDDDDD" : "#DDDDDD";

  return (
    <>
      <Link
        to="/"
        className="flex items-center space-x-2 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onContextMenu={handleContextMenu}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={logoVariants}
          className="w-6 h-6 relative"
          onAnimationComplete={() => setAnimationComplete(true)}
          style={{ transformOrigin: "center center" }}
        >
          <svg
            viewBox="0 0 67 67"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <motion.path
              custom={1}
              variants={pathVariants}
              d="M22.21 67V44.6369H0V67H22.21Z"
              fill={fillColor}
            />
            <motion.path
              custom={1.5}
              variants={pathVariants}
              d="M0 44.6369L22.21 46.8285V44.6369H0Z"
              fill={accentColor}
            />
            <motion.path
              custom={2}
              variants={pathVariants}
              d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z"
              fill={fillColor}
            />
            <motion.path
              custom={3}
              variants={pathVariants}
              d="M22.21 0H0V22.3184H22.21V0Z"
              fill={fillColor}
            />
            <motion.path
              custom={4}
              variants={pathVariants}
              d="M66.7198 0H44.5098V22.3184H66.7198V0Z"
              fill={fillColor}
            />
            <motion.path
              custom={4.5}
              variants={pathVariants}
              d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z"
              fill={accentColor}
            />
            <motion.path
              custom={5}
              variants={pathVariants}
              d="M66.7198 67V44.6369H44.5098V67H66.7198Z"
              fill={fillColor}
            />
          </svg>
        </motion.div>

        {/* Ninja-style text: slightly faded by default, fully visible on hover */}
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: isHovered ? 1 : 0.6, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-neutral-900"} transition-opacity`}
        >
          Hanzo
        </motion.span>
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
            className="fixed z-[200] bg-black border border-neutral-800 rounded-lg shadow-2xl py-1 min-w-[180px]"
            style={{ left: contextMenu.x, top: contextMenu.y }}
          >
            {contextMenuItems.map((item, index) =>
              'divider' in item ? (
                <div key={index} className="border-t border-neutral-800 my-1" />
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleMenuItemClick(item)}
                  className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors flex items-center justify-between"
                >
                  {item.label}
                  {'external' in item && item.external && (
                    <svg className="w-3 h-3 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
