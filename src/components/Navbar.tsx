
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProductsMenu } from "./navigation/products-menu";
import { SolutionsMenu } from "./navigation/SolutionsMenu";
import { ResourcesMenu } from "./navigation/ResourcesMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

const isAccountRoute = () => {
  return window.location.pathname.startsWith('/account') || 
    window.location.pathname === '/dashboard' || 
    window.location.pathname === '/user-profile' || 
    window.location.pathname === '/organization-profile';
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isIndexPage = location.pathname === '/' || location.pathname === '/index';
  
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isIndexPage
          ? isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white/40 backdrop-blur-sm"
          : isScrolled
            ? "bg-black/80 backdrop-blur-md"
            : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
              alt="Hanzo"
              className="h-10 w-10"
            />
            <span className={`font-bold text-xl ${isIndexPage ? 'text-gray-900' : 'text-white'}`}>Hanzo</span>
          </a>

          <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
            <div className="flex items-center justify-center space-x-6">
              <ProductsMenu />
              <SolutionsMenu />
              <ResourcesMenu />
              
              <Link to="/team" className={`${isIndexPage ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors`}>
                Team
              </Link>
              <a href="/pricing" className={`${isIndexPage ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors`}>
                Pricing
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <Button 
                variant="outline" 
                size="sm"
                className={isIndexPage ? "text-gray-900 border-gray-300 hover:bg-gray-100" : "text-white border-white hover:bg-white/10"}
              >
                <a href="https://cloud.hanzo.ai" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Account
                </a>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                className={isIndexPage ? "text-gray-900 border-gray-300 hover:bg-gray-100" : "text-white border-white hover:bg-white/10"}
              >
                <a href="https://cloud.hanzo.ai">
                  Console
                </a>
              </Button>
            )}
            <Button 
              size="sm" 
              className={isIndexPage ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-white text-black hover:bg-gray-100"}
            >
              <a href="https://cloud.hanzo.ai/auth/sign-up">
                Signup
              </a>
            </Button>
          </div>

          <MobileMenu 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
