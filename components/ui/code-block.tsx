'use client'

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple token-based syntax highlighting
const highlightCode = (code: string, language: string): React.ReactNode[] => {
  const lines = code.split('\n');

  return lines.map((line, lineIdx) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;

    // Language-specific patterns
    const patterns: { regex: RegExp; className: string }[] = [];

    if (language === 'typescript' || language === 'javascript') {
      patterns.push(
        { regex: /^(import|export|from|const|let|var|function|async|await|return|new|if|else|for|while|class|extends|implements|interface|type)\b/, className: 'text-foreground/70' },
        { regex: /^(true|false|null|undefined)\b/, className: 'text-foreground/70' },
        { regex: /^"[^"]*"|^'[^']*'|^`[^`]*`/, className: 'text-foreground/70' },
        { regex: /^\d+\.?\d*/, className: 'text-foreground/70' },
        { regex: /^\/\/.*$/, className: 'text-muted-foreground italic' },
        { regex: /^(process|console|window|document)\b/, className: 'text-foreground/70' },
        { regex: /^\.[a-zA-Z_]\w*/, className: 'text-foreground/70' },
        { regex: /^[A-Z][a-zA-Z0-9]*/, className: 'text-foreground/60' },
        { regex: /^(env|HANZO_API_KEY)\b/, className: 'text-foreground/70' },
      );
    } else if (language === 'python') {
      patterns.push(
        { regex: /^(import|from|as|def|class|return|if|elif|else|for|while|with|async|await|try|except|finally|raise|pass|break|continue|and|or|not|in|is)\b/, className: 'text-foreground/70' },
        { regex: /^(True|False|None)\b/, className: 'text-foreground/70' },
        { regex: /^"[^"]*"|^'[^']*'|^"""[\s\S]*?"""|^'''[\s\S]*?'''/, className: 'text-foreground/70' },
        { regex: /^f"[^"]*"|^f'[^']*'/, className: 'text-foreground/70' },
        { regex: /^\d+\.?\d*/, className: 'text-foreground/70' },
        { regex: /^#.*$/, className: 'text-muted-foreground italic' },
        { regex: /^(os|sys|print|open|len|range|str|int|float|list|dict|set)\b/, className: 'text-foreground/70' },
        { regex: /^[A-Z][a-zA-Z0-9]*/, className: 'text-foreground/60' },
      );
    } else if (language === 'go') {
      patterns.push(
        { regex: /^(package|import|func|return|if|else|for|range|switch|case|default|type|struct|interface|var|const|map|chan|go|defer|select)\b/, className: 'text-foreground/70' },
        { regex: /^(true|false|nil)\b/, className: 'text-foreground/70' },
        { regex: /^"[^"]*"|^`[^`]*`/, className: 'text-foreground/70' },
        { regex: /^\d+\.?\d*/, className: 'text-foreground/70' },
        { regex: /^\/\/.*$/, className: 'text-muted-foreground italic' },
        { regex: /^(fmt|os|context|http|json|string|int|error|bool)\b/, className: 'text-foreground/70' },
        { regex: /^[A-Z][a-zA-Z0-9]*/, className: 'text-foreground/60' },
      );
    } else if (language === 'bash' || language === 'shell') {
      patterns.push(
        { regex: /^\$\s*/, className: 'text-muted-foreground' },
        { regex: /^(curl|sh|npm|npx|pip|go|cargo|hanzo|dev)\b/, className: 'text-foreground/70' },
        { regex: /^"[^"]*"|^'[^']*'/, className: 'text-foreground/70' },
        { regex: /^#.*$/, className: 'text-muted-foreground italic' },
        { regex: /^-[a-zA-Z]+/, className: 'text-foreground/70' },
        { regex: /^https?:\/\/[^\s]+/, className: 'text-foreground/70' },
      );
    } else if (language === 'rust') {
      patterns.push(
        { regex: /^(use|mod|fn|let|mut|const|pub|impl|struct|enum|trait|where|async|await|return|if|else|for|while|loop|match|self|Self|crate|super)\b/, className: 'text-foreground/70' },
        { regex: /^(true|false|None|Some|Ok|Err)\b/, className: 'text-foreground/70' },
        { regex: /^"[^"]*"/, className: 'text-foreground/70' },
        { regex: /^\d+\.?\d*/, className: 'text-foreground/70' },
        { regex: /^\/\/.*$/, className: 'text-muted-foreground italic' },
        { regex: /^(String|Vec|Option|Result|Box|Rc|Arc|i32|i64|u32|u64|f32|f64|bool|str)\b/, className: 'text-foreground/70' },
        { regex: /^[A-Z][a-zA-Z0-9]*/, className: 'text-foreground/60' },
      );
    }

    while (remaining.length > 0) {
      let matched = false;

      // Try each pattern
      for (const { regex, className } of patterns) {
        const match = remaining.match(regex);
        if (match && match.index === 0) {
          tokens.push(
            <span key={key++} className={className}>
              {match[0]}
            </span>
          );
          remaining = remaining.slice(match[0].length);
          matched = true;
          break;
        }
      }

      // If no pattern matched, take one character as plain text
      if (!matched) {
        // Group consecutive plain characters
        let plainEnd = 1;
        while (plainEnd < remaining.length) {
          let wouldMatch = false;
          for (const { regex } of patterns) {
            if (remaining.slice(plainEnd).match(regex)?.index === 0) {
              wouldMatch = true;
              break;
            }
          }
          if (wouldMatch) break;
          plainEnd++;
        }
        tokens.push(
          <span key={key++} className="text-foreground/80">
            {remaining.slice(0, plainEnd)}
          </span>
        );
        remaining = remaining.slice(plainEnd);
      }
    }

    return (
      <div key={lineIdx} className="leading-relaxed">
        {tokens.length > 0 ? tokens : <span>&nbsp;</span>}
      </div>
    );
  });
};

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock = ({ code, language, showLineNumbers = false, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedCode = highlightCode(code.trim(), language);

  return (
    <div className={cn("relative rounded-lg border border-border bg-background overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/50">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded hover:bg-accent transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-foreground/70" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm">
          {showLineNumbers ? (
            <div className="flex">
              <div className="pr-4 select-none text-muted-foreground/60 text-right">
                {highlightedCode.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div>{highlightedCode}</div>
            </div>
          ) : (
            highlightedCode
          )}
        </pre>
      </div>
    </div>
  );
};

// Language tab selector component
interface LanguageTab {
  language: string;
  label: string;
  code: string;
}

interface CodeTabsProps {
  tabs: LanguageTab[];
  className?: string;
}

export const CodeTabs = ({ tabs, className }: CodeTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("rounded-xl border border-border bg-background overflow-hidden", className)}>
      {/* Tab headers */}
      <div className="flex items-center border-b border-border bg-secondary/50 overflow-x-auto">
        {tabs.map((tab, idx) => (
          <button
            key={tab.language}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "px-4 py-2.5 text-xs font-medium transition-colors whitespace-nowrap",
              activeTab === idx
                ? "text-foreground bg-neutral-800 border-b-2 border-border"
                : "text-muted-foreground hover:text-foreground/80"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm">
          {highlightCode(tabs[activeTab].code.trim(), tabs[activeTab].language)}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
