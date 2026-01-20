import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "./navigation/MobileMenu";
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import AuthButtons from "./navigation/AuthButtons";
import NavbarContainer from "./navigation/NavbarContainer";
import CommandPalette from "./CommandPalette";
import { NavMenu } from "./navigation/NavMenu";

const isAccountRoute = () => {
  return window.location.pathname.startsWith('/account') ||
    window.location.pathname === '/dashboard' ||
    window.location.pathname === '/user-profile' ||
    window.location.pathname === '/organization-profile';
};

// Explore dropdown content for left side
const ExploreContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-2 gap-6">
    <div>
      <h3 className="text-neutral-400 text-xs font-medium mb-3 uppercase tracking-wider">Quick Links</h3>
      <ul className="space-y-2">
        <li><Link to="/products" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">All Products</Link></li>
        <li><Link to="/dev" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Hanzo Dev</Link></li>
        <li><Link to="/ai" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">AI & Models</Link></li>
        <li><Link to="/cloud" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Hanzo Cloud</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="text-neutral-400 text-xs font-medium mb-3 uppercase tracking-wider">Resources</h3>
      <ul className="space-y-2">
        <li><a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">Documentation</a></li>
        <li><Link to="/pricing" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Pricing</Link></li>
        <li><Link to="/contact" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Contact Sales</Link></li>
        <li><Link to="/status" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Status</Link></li>
      </ul>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!isAccountRoute()) {
      setUser(null);
    }
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
          {/* Left section: Explore dropdown + Logo */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Explore dropdown */}
            <div className="hidden md:block">
              <NavMenu label="Explore here">
                {(closeMenu) => <ExploreContent closeMenu={closeMenu} />}
              </NavMenu>
            </div>
          </div>

          {/* Center: Logo + Navigation */}
          <div className="flex-1 flex items-center justify-center gap-8">
            <Logo />
            <DesktopNav />
          </div>

          {/* Right section: Auth Buttons */}
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
