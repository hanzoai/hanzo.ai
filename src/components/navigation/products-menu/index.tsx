import { productsNav, featuredProducts } from "@/constants/navigation-data";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS_PER_CATEGORY = 3;

export const ProductsMenu = () => {
  return (
    <NavMenu label="Products">
      {(closeMenu) => (
        <div className="w-full">
          {/* Featured Products Row */}
          <div className="mb-4 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#fd4444]" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Featured</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <Link
                    key={product.title}
                    to={product.href}
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-[#fd4444]/50 hover:bg-neutral-800/50 transition-all group"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#fd4444]" />}
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white">{product.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 9-Category Grid - Condensed to 3 items per category */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
            {productsNav.map((section) => (
              <div key={section.title} className="space-y-1.5">
                <h3 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  {section.title}
                </h3>
                <div className="space-y-0.5">
                  {section.items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-1.5 py-0.5 group"
                      >
                        {Icon && <Icon className="h-3 w-3 text-neutral-500 group-hover:text-[#fd4444]" />}
                        <span className="text-xs text-neutral-400 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </Link>
                    );
                  })}
                  {section.items.length > ITEMS_PER_CATEGORY && (
                    <Link
                      to="/products"
                      onClick={closeMenu}
                      className="flex items-center gap-1 py-0.5 text-[10px] text-neutral-600 hover:text-[#fd4444] transition-colors"
                    >
                      +{section.items.length - ITEMS_PER_CATEGORY} more
                      <ArrowRight className="h-2.5 w-2.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer - More compact */}
          <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-neutral-900 rounded-md px-2.5 py-1 font-mono text-[10px] text-green-400">
                curl -fsSL hanzo.sh | sh
              </div>
              <span className="text-[10px] text-neutral-500">Install Hanzo CLI</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white h-7 text-xs px-3"
                asChild
              >
                <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  GitHub
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-[#fd4444] text-white hover:bg-[#fd4444]/90 h-7 text-xs px-3"
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
