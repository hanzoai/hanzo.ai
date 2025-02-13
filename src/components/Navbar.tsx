
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Brain, Database, ShoppingCart, Code, Settings, Globe, Book, MessageSquare, HelpCircle, Users } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { products, solutions, resources } from "@/constants/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
              alt="Hanzo"
              className="h-8 w-8"
            />
            <span className="text-white font-bold text-xl">Hanzo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[720px] p-6 bg-black/95 backdrop-blur-xl border-gray-800">
                <div className="grid grid-cols-3 gap-8">
                  {products.map(category => (
                    <div key={category.title}>
                      <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                      <div className="space-y-4">
                        {category.items.map(item => (
                          <a href="#" key={item} className="flex items-start space-x-3 group">
                            <Brain className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                            <div>
                              <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                              <div className="text-sm text-gray-500">Description for {item}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[480px] p-6 bg-black/95 backdrop-blur-xl border-gray-800">
                <div className="grid grid-cols-2 gap-8">
                  {solutions.map(category => (
                    <div key={category.title}>
                      <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                      <div className="space-y-4">
                        {category.items.map(item => (
                          <a href="#" key={item} className="flex items-start space-x-3 group">
                            <Globe className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                            <div>
                              <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                              <div className="text-sm text-gray-500">Description for {item}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[480px] p-6 bg-black/95 backdrop-blur-xl border-gray-800">
                <div className="grid grid-cols-2 gap-8">
                  {resources.map(category => (
                    <div key={category.title}>
                      <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                      <div className="space-y-4">
                        {category.items.map(item => {
                          const Icon = item.name.includes('Forum') ? MessageSquare :
                                     item.name.includes('Community') ? Users :
                                     item.name.includes('Help') ? HelpCircle :
                                     item.name.includes('Documentation') ? Book :
                                     item.name.includes('API') ? Code : Globe;

                          return (
                            <a
                              key={item.name}
                              href={item.url}
                              target={item.url.startsWith('http') ? '_blank' : undefined}
                              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="flex items-start space-x-3 group"
                            >
                              <Icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                              <div>
                                <div className="text-gray-300 group-hover:text-white font-medium">{item.name}</div>
                                <div className="text-sm text-gray-500">Description for {item.name}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <a href="https://docs.hanzo.ai" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </a>
            <a href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Login
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100">
                Signup
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md border-b border-gray-800">
            <a
              href="#products"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Solutions
            </a>
            <a
              href="#resources"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Resources
            </a>
            <a
              href="https://docs.hanzo.ai"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Docs
            </a>
            <a
              href="/pricing"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Pricing
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                Login
              </Button>
              <Button className="w-full bg-white text-black hover:bg-gray-100">
                Signup
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
