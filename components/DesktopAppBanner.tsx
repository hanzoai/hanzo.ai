"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Download, ExternalLink } from "lucide-react";

const STORAGE_KEY = "hanzo-desktop-banner-dismissed";

interface DesktopAppBannerProps {
  variant?: "floating" | "inline";
}

const DesktopAppBanner = ({ variant = "floating" }: DesktopAppBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const platform = navigator.platform.toLowerCase();
    const isMacOS = platform.includes("mac");
    setIsMac(isMacOS);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const downloadUrl = isMac
    ? "https://github.com/hanzoai/hanzo-dev/releases/latest/download/Hanzo-Dev-darwin-arm64.dmg"
    : "https://github.com/hanzoai/hanzo-dev/releases";

  if (variant === "inline") {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-neutral-900 to-neutral-800 border-b border-neutral-800"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">
                    Hanzo Dev Desktop App
                  </p>
                  <p className="text-xs text-neutral-400">
                    Native performance. All your tools in one place.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={downloadUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {isMac ? "Download for Mac" : "Download"}
                </a>
                <button
                  onClick={handleDismiss}
                  className="p-2 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-24 left-6 z-40 max-w-sm"
        >
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                  <Monitor className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-medium text-white">NEW</span>
              </div>
              <button
                onClick={handleDismiss}
                className="p-1 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-base font-semibold text-white mb-1">
                Get Hanzo Dev for Desktop
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                Native app with faster performance, offline access, and system integrations.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={downloadUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {isMac ? "Download for Mac" : "Download"}
                </a>
                <a
                  href="/dev"
                  className="px-4 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  Learn more
                </a>
              </div>

              <p className="mt-3 text-xs text-neutral-500 flex items-center gap-1">
                {isMac ? (
                  <>Apple Silicon & Intel supported</>
                ) : (
                  <>
                    <ExternalLink className="w-3 h-3" />
                    Also available for Windows & Linux
                  </>
                )}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopAppBanner;
