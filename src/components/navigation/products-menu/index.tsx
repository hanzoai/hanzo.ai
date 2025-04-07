import { productsNav } from "@/constants/navigation-data";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProductsMenu = () => {
  return (
    <NavMenu label="Products">
      {(closeMenu) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map through product sections */}
          {productsNav.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              
              <div className="grid gap-4">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-start space-x-3 group"
                      onClick={closeMenu}
                    >
                      {Icon && (
                        <div className="mt-1">
                          <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white" />
                        </div>
                      )}
                      <div>
                        <div className="text-neutral-300 group-hover:text-white font-medium">
                          {item.title}
                          {item.featured && (
                            <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/30 text-blue-300">
                              New
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <div className="text-sm text-neutral-500 group-hover:text-neutral-400">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              {/* Promo box based on section title */}
              <div className={`mt-6 p-4 rounded-xl ${
                section.title === "AI Cloud" 
                  ? "bg-gradient-to-b from-purple-900/30 to-blue-900/30 border border-purple-500/20 hover:border-purple-500/40" 
                  : "bg-gradient-to-b from-green-900/30 to-teal-900/30 border border-green-500/20 hover:border-green-500/40"
              } transition-colors`}>
                <div className="flex items-center space-x-2 mb-2">
                  {section.title === "AI Cloud" ? (
                    <>
                      <Zap className="h-5 w-5 text-purple-400" />
                      <h4 className="text-lg font-semibold text-white">Get $5 free</h4>
                    </>
                  ) : (
                    <>
                      <Code className="h-5 w-5 text-green-400" />
                      <h4 className="text-lg font-semibold text-white">Always Free & Open Source</h4>
                    </>
                  )}
                </div>
                <p className="text-neutral-300 text-sm mb-3">
                  {section.title === "AI Cloud" 
                    ? "Start building with AI Cloud today and get $5 credit free."
                    : "Our developer experience platform is free to use and open source forever."}
                </p>
                
                {section.title === "AI Cloud" ? (
                  <Button 
                    size="sm"
                    className="w-full bg-purple-700 hover:bg-purple-600 text-white border-none"
                    onClick={closeMenu}
                  >
                    <a href="https://cloud.hanzo.ai/auth/sign-up">Get Started Today</a>
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
                      onClick={closeMenu}
                    >
                      <a href="https://github.com/hanzoai">View on GitHub</a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
                      onClick={closeMenu}
                    >
                      <Link to="/open-source">Open Source</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </NavMenu>
  );
};

export default ProductsMenu;

