'use client'

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./navigation/MobileMenu";
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import AuthButtons from "./navigation/AuthButtons";
import NavbarContainer from "./navigation/NavbarContainer";
import CommandPalette from "./CommandPalette";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const isAccountRoute =
      pathname.startsWith('/account') ||
      pathname === '/dashboard' ||
      pathname === '/user-profile' ||
      pathname === '/organization-profile';
    if (!isAccountRoute) {
      setUser(null);
    }
  }, [pathname]);

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
          {/* Left: Logo + Try Hanzo CTA */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Logo />
            <a
              href="https://app.hanzo.bot"
              className="hidden md:inline-flex items-center gap-2 bg-brand text-brand-foreground hover:bg-brand/90 rounded-full h-8 px-4 text-sm font-medium transition-all duration-200"
            >
              Try Hanzo
            </a>
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
