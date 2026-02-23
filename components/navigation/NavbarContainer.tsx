'use client'

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavbarContainerProps {
  children: ReactNode;
  isScrolled: boolean;
}

const NavbarContainer = ({ children, isScrolled }: NavbarContainerProps) => {
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-md shadow-sm" : "backdrop-blur-sm",
        "bg-black/50 backdrop-blur-lg"
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center h-[var(--header-height)]">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavbarContainer;
