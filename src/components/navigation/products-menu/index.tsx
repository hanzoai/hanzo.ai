import { productsNav } from "@/constants/navigation-data";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ProductsMenu = () => {
  return (
    <NavMenu label="Products">
      {(closeMenu) => (
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Display the sections side by side */}
              {productsNav.map((section) => (
                <div key={section.title} className="flex flex-col">
                  {/* Section Title with View All Link */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    <Link
                      to="/products"
                      className="text-sm text-neutral-400 hover:text-white"
                      onClick={closeMenu}
                    >
                      View all products →
                    </Link>
                  </div>
                  
                  {/* Grid of items for each section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      
                      return (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center space-x-3 group"
                          onClick={closeMenu}
                        >
                          <div className="min-w-10 w-10 h-10 flex items-center justify-center shrink-0">
                            {Icon && <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-neutral-300 group-hover:text-white font-medium truncate">
                              {item.title}
                            </div>
                            {item.description && (
                              <div className="text-sm text-neutral-500 group-hover:text-neutral-400 truncate">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  
                  {/* Promo box based on section title */}
                  <div className={cn(
                    "mt-auto mt-6 p-4 rounded-xl transition-colors",
                    section.title === "Data & Compute"
                      ? "bg-gradient-to-b from-purple-900/30 to-blue-900/30 border border-purple-500/20 hover:border-purple-500/40"
                      : "bg-gradient-to-b from-green-900/30 to-teal-900/30 border border-green-500/20 hover:border-green-500/40"
                  )}>
                    <div className="flex items-center space-x-2 mb-2">
                      {section.title === "Data & Compute" ? (
                        <>
                          <Zap className="h-5 w-5 text-purple-400" />
                          <h4 className="text-lg font-semibold text-white">Get started instantly</h4>
                        </>
                      ) : (
                        <>
                          <Code className="h-5 w-5 text-green-400" />
                          <h4 className="text-lg font-semibold text-white">Open Source First</h4>
                        </>
                      )}
                    </div>
                    <p className="text-neutral-300 text-sm mb-3">
                      {section.title === "Data & Compute"
                        ? "Install the Hanzo CLI and start building in seconds."
                        : "40+ products, mostly open source. Self-host or use Hanzo Cloud."}
                    </p>

                    {section.title === "Data & Compute" ? (
                      <div className="bg-black/50 rounded-lg p-2 font-mono text-sm text-green-400 mb-3">
                        curl -sSL https://hanzo.sh | sh
                      </div>
                    ) : null}

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10"
                        onClick={closeMenu}
                      >
                        <a href="https://github.com/hanzoai">GitHub</a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-white text-black hover:bg-neutral-200"
                        onClick={closeMenu}
                      >
                        <Link to="/products">All Products</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </NavMenu>
  );
};

// Add default export
export default ProductsMenu;