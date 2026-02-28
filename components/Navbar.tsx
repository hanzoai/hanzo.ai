'use client'

import { useState, useEffect, useCallback } from "react";
import { MobileMenu } from "./navigation/MobileMenu";
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import AuthButtons from "./navigation/AuthButtons";
import NavbarContainer from "./navigation/NavbarContainer";
import CommandPalette from "./CommandPalette";

interface User {
  id: string;
  email: string;
  name?: string;
}

// Fetch user info from hanzo.id using the session token stored in cookies.
// hanzo.id sets a cookie named `hanzo_token` (or we fall back to localStorage `hanzo_token`).
async function fetchHanzoUser(): Promise<User | null> {
  try {
    const res = await fetch("https://hanzo.id/api/userinfo", {
      credentials: "include", // send cookies cross-origin
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || data.error) return null;
    return {
      id: data.sub || data.id || "",
      email: data.email || "",
      name: data.name || data.preferred_username || data.displayName || undefined,
    };
  } catch {
    return null;
  }
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Check for logged-in session from hanzo.id on mount
  useEffect(() => {
    fetchHanzoUser().then(setUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, []);

  const handleCloseCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  return (
    <>
      <NavbarContainer isScrolled={isScrolled}>
        <div className="flex items-center w-full">
          {/* Left: Logo — min-width balances right side for centered nav */}
          <div className="flex-shrink-0 min-w-[120px]">
            <Logo />
          </div>

          {/* Center: Navigation */}
          <div className="flex-1 flex justify-center">
            <DesktopNav />
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex-shrink-0">
            <AuthButtons user={user} onOpenCommandPalette={handleOpenCommandPalette} />
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onOpenSearch={handleOpenCommandPalette}
          />
        </div>
      </NavbarContainer>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={handleCloseCommandPalette}
      />
    </>
  );
};

export default Navbar;
