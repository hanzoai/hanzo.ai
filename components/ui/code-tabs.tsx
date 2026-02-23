'use client'

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeTab {
  label: string;
  language?: string;
  code: string;
}

interface CodeTabsProps {
  tabs: CodeTab[];
  className?: string;
}

export const CodeTabs = ({ tabs, className }: CodeTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("rounded-lg border border-border bg-background overflow-hidden", className)}>
      <div className="flex border-b border-border overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              activeTab === index
                ? "text-foreground bg-neutral-800/50 border-b-2 border-white"
                : "text-muted-foreground hover:text-neutral-200"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-foreground/80 font-mono">
          <code>{tabs[activeTab]?.code}</code>
        </pre>
      </div>
    </div>
  );
};
