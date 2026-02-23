'use client'

import { capabilitiesNav, industriesNav } from "@/lib/constants/navigation-data";
import Link from "next/link";
import NavMenu from "../NavMenu";
import { Users, Shield, Building2, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Show all items - no truncation
const ITEMS_PER_CATEGORY = 20;

export const SolutionsMenu = () => {
  return (
    <NavMenu label="Solutions">
      {(closeMenu) => (
        <div className="w-full">
          {/* Featured Row */}
          <div className="mb-4 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Featured Solutions</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/agency"
                onClick={closeMenu}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all group bg-neutral-900/50 border-neutral-800 hover:border-white/30/50 hover:bg-neutral-800/50"
              >
                <Shield className="h-3.5 w-3.5 group-hover:text-white text-neutral-400" />
                <span className="text-sm font-medium group-hover:text-white text-neutral-300">Hanzo Agency</span>
              </Link>
              <Link
                href="/enterprise"
                onClick={closeMenu}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all group bg-neutral-900/50 border-neutral-800 hover:border-white/30/50 hover:bg-neutral-800/50"
              >
                <Building2 className="h-3.5 w-3.5 group-hover:text-white text-neutral-400" />
                <span className="text-sm font-medium group-hover:text-white text-neutral-300">Enterprise</span>
              </Link>
            </div>
          </div>

          {/* Two Column Grid - Capabilities & Industries */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
            {/* Capabilities */}
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-neutral-500">
                Capabilities
              </h3>
              <div className="space-y-0.5">
                {capabilitiesNav[0].items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      onClick={closeMenu}
                      className="flex items-center gap-1.5 py-0.5 group"
                    >
                      {Icon && <Icon className="h-3 w-3 group-hover:text-white text-neutral-500" />}
                      <span className="text-xs transition-colors group-hover:text-white text-neutral-400">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
                {capabilitiesNav[0].items.length > ITEMS_PER_CATEGORY && (
                  <Link
                    href="/solutions"
                    onClick={closeMenu}
                    className="flex items-center gap-1 py-0.5 text-[10px] transition-colors hover:text-white text-neutral-600"
                  >
                    +{capabilitiesNav[0].items.length - ITEMS_PER_CATEGORY} more
                    <ArrowRight className="h-2.5 w-2.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Industries - split into two columns */}
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-neutral-500">
                Industries
              </h3>
              <div className="space-y-0.5">
                {industriesNav[0].items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      onClick={closeMenu}
                      className="flex items-center gap-1.5 py-0.5 group"
                    >
                      {Icon && <Icon className="h-3 w-3 group-hover:text-white text-neutral-500" />}
                      <span className="text-xs transition-colors group-hover:text-white text-neutral-400">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
                {industriesNav[0].items.length > ITEMS_PER_CATEGORY && (
                  <Link
                    href="/industries"
                    onClick={closeMenu}
                    className="flex items-center gap-1 py-0.5 text-[10px] transition-colors hover:text-white text-neutral-600"
                  >
                    +{industriesNav[0].items.length - ITEMS_PER_CATEGORY} more
                    <ArrowRight className="h-2.5 w-2.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* More Industries */}
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-neutral-500">
                More Industries
              </h3>
              <div className="space-y-0.5">
                {industriesNav[0].items.slice(ITEMS_PER_CATEGORY, ITEMS_PER_CATEGORY * 2).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      onClick={closeMenu}
                      className="flex items-center gap-1.5 py-0.5 group"
                    >
                      {Icon && <Icon className="h-3 w-3 group-hover:text-white text-neutral-500" />}
                      <span className="text-xs transition-colors group-hover:text-white text-neutral-400">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-neutral-500">
                Use Cases
              </h3>
              <div className="space-y-0.5">
                <Link
                  href="/solutions/automation"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className="text-xs transition-colors group-hover:text-white text-neutral-400">
                    Automation
                  </span>
                </Link>
                <Link
                  href="/solutions/analytics"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className="text-xs transition-colors group-hover:text-white text-neutral-400">
                    Analytics
                  </span>
                </Link>
                <Link
                  href="/solutions/content"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className="text-xs transition-colors group-hover:text-white text-neutral-400">
                    Content Generation
                  </span>
                </Link>
                <Link
                  href="/solutions/customer-support"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className="text-xs transition-colors group-hover:text-white text-neutral-400">
                    Customer Support
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-neutral-500">Need custom solutions?</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs px-3 bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                asChild
              >
                <Link href="/contact" onClick={closeMenu}>
                  Contact Sales
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90 h-7 text-xs px-3"
                asChild
              >
                <Link href="/solutions" onClick={closeMenu}>
                  All Solutions
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

export default SolutionsMenu;
