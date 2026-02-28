'use client'

import { productsNav } from "@/lib/constants/navigation-data";
import Link from "next/link";
import NavMenu from "../NavMenu";
import { Bot, Terminal, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Show all items - no truncation
const MAX_ITEMS_PER_CATEGORY = 20;

export const ProductsMenu = () => {
  return (
    <NavMenu label="Products">
      {(closeMenu) => (
        <div className="w-full">
          {/* Featured — Hanzo Bot + Hanzo Dev hero cards */}
          <div className="mb-4 pb-4 border-b border-border">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://hanzo.bot"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-border hover:border-white/20 hover:bg-neutral-800/80 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-700/60 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-600/60 transition-colors">
                  <Bot className="h-5 w-5 text-foreground/80 group-hover:text-foreground transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Hanzo Bot</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5">AI agent platform for any workflow</p>
                </div>
              </a>
              <Link
                href="/dev"
                onClick={closeMenu}
                className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-border hover:border-white/20 hover:bg-neutral-800/80 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-700/60 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-600/60 transition-colors">
                  <Terminal className="h-5 w-5 text-foreground/80 group-hover:text-foreground transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Hanzo Dev</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5">AI coding agent for your IDE</p>
                </div>
              </Link>
            </div>
          </div>

          {/* 10-Category Grid - 5 columns x 2 rows for symmetry */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
            {productsNav.map((section) => {
              const displayItems = section.items.slice(0, MAX_ITEMS_PER_CATEGORY);
              const hasMore = section.items.length > MAX_ITEMS_PER_CATEGORY;

              return (
                <div key={section.title} className="space-y-1.5">
                  <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                    {section.title}
                  </h3>
                  <div className="space-y-0.5">
                    {displayItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href || "#"}
                          onClick={closeMenu}
                          className="flex items-center gap-1.5 py-0.5 group"
                        >
                          {Icon && <Icon className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />}
                          <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}
                    {hasMore && (
                      <Link
                        href="/products"
                        onClick={closeMenu}
                        className="flex items-center gap-1 py-0.5 text-[10px] transition-colors hover:text-foreground text-muted-foreground/60"
                      >
                        +{section.items.length - MAX_ITEMS_PER_CATEGORY} more
                        <ArrowRight className="h-2.5 w-2.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer - More compact */}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-md px-2.5 py-1 font-mono text-[10px] bg-secondary text-foreground">
                curl -fsSL hanzo.sh | sh
              </div>
              <span className="text-[10px] text-muted-foreground">Install Hanzo CLI</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs px-3 bg-transparent border-border text-foreground/80 hover:bg-accent hover:text-foreground"
                asChild
              >
                <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  GitHub
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-7 text-xs px-3"
                asChild
              >
                <Link href="/products" onClick={closeMenu}>
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
