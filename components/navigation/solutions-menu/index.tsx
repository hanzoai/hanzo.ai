'use client'

import { capabilitiesNav, industriesNav } from "@/lib/constants/navigation-data";
import Link from "next/link";
import NavMenu from "../NavMenu";
import { Shield, Building2, ArrowRight, Sparkles, Bot, Wrench, HeadphonesIcon, BarChart3, FileEdit, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Show all items - no truncation
const ITEMS_PER_CATEGORY = 20;

export const SolutionsMenu = () => {
  return (
    <NavMenu label="Solutions">
      {(closeMenu) => (
        <div className="w-full flex gap-6">
          {/* Left: Big Agency + Enterprise panels stacked */}
          <div className="w-64 flex-shrink-0 space-y-3">
            <Link
              href="/agency"
              onClick={closeMenu}
              className="block p-4 rounded-xl bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-border/50 hover:border-border transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-foreground font-semibold text-sm">Hanzo Agency</h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                Full-service AI implementation. Strategy, design, and engineering.
              </p>
              <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors inline-flex items-center gap-1">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>

            <Link
              href="/enterprise"
              onClick={closeMenu}
              className="block p-4 rounded-xl bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-border/50 hover:border-border transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-foreground font-semibold text-sm">Enterprise</h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                Dedicated support, SLAs, and custom infrastructure for scale.
              </p>
              <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors inline-flex items-center gap-1">
                Contact sales <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>

          {/* Right: Columns for Capabilities, Industries, Use Cases */}
          <div className="flex-1 grid grid-cols-3 gap-x-6 gap-y-4">
            {/* Capabilities */}
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
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
                      {Icon && <Icon className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />}
                      <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Industries */}
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
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
                      {Icon && <Icon className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />}
                      <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                Use Cases
              </h3>
              <div className="space-y-0.5">
                <Link href="/solutions/automation" onClick={closeMenu} className="flex items-center gap-1.5 py-0.5 group">
                  <Bot className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />
                  <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">AI Agents</span>
                </Link>
                <Link href="/solutions/automation" onClick={closeMenu} className="flex items-center gap-1.5 py-0.5 group">
                  <Wrench className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />
                  <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">Automation</span>
                </Link>
                <Link href="/solutions/analytics" onClick={closeMenu} className="flex items-center gap-1.5 py-0.5 group">
                  <BarChart3 className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />
                  <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">Analytics</span>
                </Link>
                <Link href="/solutions/content" onClick={closeMenu} className="flex items-center gap-1.5 py-0.5 group">
                  <FileEdit className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />
                  <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">Content Generation</span>
                </Link>
                <Link href="/solutions/customer-support" onClick={closeMenu} className="flex items-center gap-1.5 py-0.5 group">
                  <HeadphonesIcon className="h-3 w-3 group-hover:text-foreground text-muted-foreground" />
                  <span className="text-xs transition-colors group-hover:text-foreground text-muted-foreground">Customer Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </NavMenu>
  );
};

export default SolutionsMenu;
