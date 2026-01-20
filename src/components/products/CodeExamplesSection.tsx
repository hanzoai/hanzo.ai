import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeExample {
  language: string;
  label: string;
  code: string;
  description?: string;
}

interface CodeExamplesSectionProps {
  title?: string;
  subtitle?: string;
  examples: CodeExample[];
}

export function CodeExamplesSection({
  title = "Quick Start",
  subtitle = "Get started in minutes with your language of choice",
  examples
}: CodeExamplesSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = async (code: string, index: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const languageIcons: Record<string, string> = {
    python: "🐍",
    javascript: "📜",
    typescript: "📘",
    go: "🐹",
    rust: "🦀",
    curl: "🔗",
    cli: "💻",
    bash: "💻",
    docker: "🐳",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5 text-[#fd4444]" />
          <span className="text-sm font-medium text-[#fd4444] uppercase tracking-wider">
            Code Examples
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {title}
        </h2>
        <p className="text-neutral-400 mb-8">
          {subtitle}
        </p>

        <Tabs defaultValue={examples[0]?.language} className="w-full">
          <TabsList className="flex flex-wrap gap-2 bg-transparent border-b border-neutral-800 pb-4 mb-6">
            {examples.map((example) => (
              <TabsTrigger
                key={example.language}
                value={example.language}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-neutral-400 data-[state=active]:text-white data-[state=active]:bg-neutral-800 hover:text-white transition-colors"
              >
                <span>{languageIcons[example.language.toLowerCase()] || "📄"}</span>
                {example.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {examples.map((example) => (
            <TabsContent key={example.language} value={example.language}>
              {example.description && (
                <p className="text-neutral-400 text-sm mb-4">
                  {example.description}
                </p>
              )}

              <div className="relative group">
                <div className="absolute top-3 right-3 z-10">
                  <button
                    onClick={() => copyToClipboard(example.code, example.language)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-md text-xs font-medium text-neutral-300 transition-colors"
                  >
                    {copiedIndex === example.language ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <pre className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 pr-24 overflow-x-auto">
                  <code className="text-sm text-neutral-300 font-mono whitespace-pre">
                    {example.code}
                  </code>
                </pre>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.section>
  );
}

export default CodeExamplesSection;
