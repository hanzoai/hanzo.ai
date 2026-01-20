import { productsNav, featuredProducts } from "@/constants/navigation-data";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProductsMenu = () => {
  return (
    <NavMenu label="Products">
      {(closeMenu) => (
        <div className="w-full max-w-6xl">
          {/* Featured Products Row */}
          <div className="mb-6 pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-[#fd4444]" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Featured</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {featuredProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <Link
                    key={product.title}
                    to={product.href}
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-[#fd4444]/50 hover:bg-neutral-800/50 transition-all group"
                  >
                    {Icon && <Icon className="h-4 w-4 text-neutral-400 group-hover:text-[#fd4444]" />}
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white">{product.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 9-Category Grid */}
          <div className="grid grid-cols-3 gap-6">
            {productsNav.map((section) => (
              <div key={section.title} className="space-y-2">
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.slice(0, 6).map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-2 py-1 group"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5 text-neutral-500 group-hover:text-[#fd4444]" />}
                        <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </Link>
                    );
                  })}
                  {section.items.length > 6 && (
                    <Link
                      to="/products"
                      onClick={closeMenu}
                      className="flex items-center gap-1 py-1 text-xs text-neutral-500 hover:text-[#fd4444] transition-colors"
                    >
                      +{section.items.length - 6} more
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-neutral-900 rounded-lg px-3 py-1.5 font-mono text-xs text-green-400">
                curl -fsSL hanzo.sh/install.sh | sh
              </div>
              <span className="text-xs text-neutral-500">Install Hanzo CLI</span>
            </div>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                asChild
              >
                <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  GitHub
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-[#fd4444] text-white hover:bg-[#fd4444]/90"
                asChild
              >
                <Link to="/products" onClick={closeMenu}>
                  All Products
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </NavMenu>
  );
};

export default ProductsMenu;
