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
    <div className={cn("rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden", className)}>
      <div className="flex border-b border-neutral-800 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              activeTab === index
                ? "text-white bg-neutral-800/50 border-b-2 border-white"
                : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-neutral-300 font-mono">
          <code>{tabs[activeTab]?.code}</code>
        </pre>
      </div>
    </div>
  );
};
