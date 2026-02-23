import { capabilitiesNav, industriesNav } from "@/constants/navigation-data";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Users, Shield, Building2, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

// Show all items - no truncation
const ITEMS_PER_CATEGORY = 20;

export const SolutionsMenu = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavMenu label="Solutions">
      {(closeMenu) => (
        <div className="w-full">
          {/* Featured Row */}
          <div className={cn(
            "mb-4 pb-4 border-b",
            isDarkMode ? "border-neutral-800" : "border-neutral-200"
          )}>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#fd4444]" />
              <span className={cn(
                "text-xs font-medium uppercase tracking-wider",
                isDarkMode ? "text-neutral-400" : "text-neutral-500"
              )}>Featured Solutions</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/agency"
                onClick={closeMenu}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all group",
                  isDarkMode
                    ? "bg-neutral-900/50 border-neutral-800 hover:border-[#fd4444]/50 hover:bg-neutral-800/50"
                    : "bg-neutral-100 border-neutral-200 hover:border-[#fd4444]/50 hover:bg-neutral-50"
                )}
              >
                <Shield className={cn(
                  "h-3.5 w-3.5 group-hover:text-[#fd4444]",
                  isDarkMode ? "text-neutral-400" : "text-neutral-500"
                )} />
                <span className={cn(
                  "text-sm font-medium group-hover:text-[#fd4444]",
                  isDarkMode ? "text-neutral-300" : "text-neutral-700"
                )}>Hanzo Agency</span>
              </Link>
              <Link
                to="/enterprise"
                onClick={closeMenu}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all group",
                  isDarkMode
                    ? "bg-neutral-900/50 border-neutral-800 hover:border-[#fd4444]/50 hover:bg-neutral-800/50"
                    : "bg-neutral-100 border-neutral-200 hover:border-[#fd4444]/50 hover:bg-neutral-50"
                )}
              >
                <Building2 className={cn(
                  "h-3.5 w-3.5 group-hover:text-[#fd4444]",
                  isDarkMode ? "text-neutral-400" : "text-neutral-500"
                )} />
                <span className={cn(
                  "text-sm font-medium group-hover:text-[#fd4444]",
                  isDarkMode ? "text-neutral-300" : "text-neutral-700"
                )}>Enterprise</span>
              </Link>
            </div>
          </div>

          {/* Two Column Grid - Capabilities & Industries */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
            {/* Capabilities */}
            <div className="space-y-1.5">
              <h3 className={cn(
                "text-[10px] font-semibold uppercase tracking-wider mb-2",
                isDarkMode ? "text-neutral-500" : "text-neutral-400"
              )}>
                Capabilities
              </h3>
              <div className="space-y-0.5">
                {capabilitiesNav[0].items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-1.5 py-0.5 group"
                    >
                      {Icon && <Icon className={cn(
                        "h-3 w-3 group-hover:text-[#fd4444]",
                        isDarkMode ? "text-neutral-500" : "text-neutral-400"
                      )} />}
                      <span className={cn(
                        "text-xs transition-colors group-hover:text-[#fd4444]",
                        isDarkMode ? "text-neutral-400" : "text-neutral-600"
                      )}>
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
                {capabilitiesNav[0].items.length > ITEMS_PER_CATEGORY && (
                  <Link
                    to="/solutions"
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center gap-1 py-0.5 text-[10px] transition-colors hover:text-[#fd4444]",
                      isDarkMode ? "text-neutral-600" : "text-neutral-500"
                    )}
                  >
                    +{capabilitiesNav[0].items.length - ITEMS_PER_CATEGORY} more
                    <ArrowRight className="h-2.5 w-2.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Industries - split into two columns */}
            <div className="space-y-1.5">
              <h3 className={cn(
                "text-[10px] font-semibold uppercase tracking-wider mb-2",
                isDarkMode ? "text-neutral-500" : "text-neutral-400"
              )}>
                Industries
              </h3>
              <div className="space-y-0.5">
                {industriesNav[0].items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-1.5 py-0.5 group"
                    >
                      {Icon && <Icon className={cn(
                        "h-3 w-3 group-hover:text-[#fd4444]",
                        isDarkMode ? "text-neutral-500" : "text-neutral-400"
                      )} />}
                      <span className={cn(
                        "text-xs transition-colors group-hover:text-[#fd4444]",
                        isDarkMode ? "text-neutral-400" : "text-neutral-600"
                      )}>
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
                {industriesNav[0].items.length > ITEMS_PER_CATEGORY && (
                  <Link
                    to="/industries"
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center gap-1 py-0.5 text-[10px] transition-colors hover:text-[#fd4444]",
                      isDarkMode ? "text-neutral-600" : "text-neutral-500"
                    )}
                  >
                    +{industriesNav[0].items.length - ITEMS_PER_CATEGORY} more
                    <ArrowRight className="h-2.5 w-2.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* More Industries */}
            <div className="space-y-1.5">
              <h3 className={cn(
                "text-[10px] font-semibold uppercase tracking-wider mb-2",
                isDarkMode ? "text-neutral-500" : "text-neutral-400"
              )}>
                More Industries
              </h3>
              <div className="space-y-0.5">
                {industriesNav[0].items.slice(ITEMS_PER_CATEGORY, ITEMS_PER_CATEGORY * 2).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-1.5 py-0.5 group"
                    >
                      {Icon && <Icon className={cn(
                        "h-3 w-3 group-hover:text-[#fd4444]",
                        isDarkMode ? "text-neutral-500" : "text-neutral-400"
                      )} />}
                      <span className={cn(
                        "text-xs transition-colors group-hover:text-[#fd4444]",
                        isDarkMode ? "text-neutral-400" : "text-neutral-600"
                      )}>
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-1.5">
              <h3 className={cn(
                "text-[10px] font-semibold uppercase tracking-wider mb-2",
                isDarkMode ? "text-neutral-500" : "text-neutral-400"
              )}>
                Use Cases
              </h3>
              <div className="space-y-0.5">
                <Link
                  to="/solutions/automation"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className={cn(
                    "text-xs transition-colors group-hover:text-[#fd4444]",
                    isDarkMode ? "text-neutral-400" : "text-neutral-600"
                  )}>
                    Automation
                  </span>
                </Link>
                <Link
                  to="/solutions/analytics"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className={cn(
                    "text-xs transition-colors group-hover:text-[#fd4444]",
                    isDarkMode ? "text-neutral-400" : "text-neutral-600"
                  )}>
                    Analytics
                  </span>
                </Link>
                <Link
                  to="/solutions/content"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className={cn(
                    "text-xs transition-colors group-hover:text-[#fd4444]",
                    isDarkMode ? "text-neutral-400" : "text-neutral-600"
                  )}>
                    Content Generation
                  </span>
                </Link>
                <Link
                  to="/solutions/customer-support"
                  onClick={closeMenu}
                  className="flex items-center gap-1.5 py-0.5 group"
                >
                  <span className={cn(
                    "text-xs transition-colors group-hover:text-[#fd4444]",
                    isDarkMode ? "text-neutral-400" : "text-neutral-600"
                  )}>
                    Customer Support
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={cn(
            "mt-4 pt-4 border-t flex items-center justify-between",
            isDarkMode ? "border-neutral-800" : "border-neutral-200"
          )}>
            <div className="flex items-center gap-3">
              <span className={cn(
                "text-[10px]",
                isDarkMode ? "text-neutral-500" : "text-neutral-400"
              )}>Need custom solutions?</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className={cn(
                  "h-7 text-xs px-3",
                  isDarkMode
                    ? "bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    : "bg-transparent border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-black"
                )}
                asChild
              >
                <Link to="/contact" onClick={closeMenu}>
                  Contact Sales
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-[#fd4444] text-white hover:bg-[#fd4444]/90 h-7 text-xs px-3"
                asChild
              >
                <Link to="/solutions" onClick={closeMenu}>
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