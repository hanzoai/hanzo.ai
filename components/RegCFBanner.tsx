import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RegCFBanner = () => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm py-2 px-4 text-center text-foreground border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-between flex-wrap gap-2">
        <p className="text-sm font-medium">
          Invest in the Future of AI Collaboration—Join Our $5M Reg CF Campaign on Republic.com
        </p>
        <Link
          href="https://republic.com/hanzo" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <span>Learn More / Invest</span>
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default RegCFBanner;