'use client'


import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@hanzo/ui/tabs";
import { Button } from "@hanzo/ui";
import { Copy, Check } from "lucide-react";

const CodeExamplesSection = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Code Examples</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            See how to implement shadcn/ui components with Tailwind v4 and React 19.
          </p>
        </motion.div>

        <Tabs defaultValue="css-variables" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="css-variables">CSS Variables</TabsTrigger>
            <TabsTrigger value="components">Component Structure</TabsTrigger>
            <TabsTrigger value="tailwind-config">Tailwind Config</TabsTrigger>
          </TabsList>
          
          <TabsContent value="css-variables" className="rounded-lg overflow-hidden">
            <div className="bg-background/50 border border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-muted-foreground">globals.css</div>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopy(cssVariablesCode, "css")}
                  className="h-8 px-2 text-muted-foreground"
                >
                  {copied === "css" ? (
                    <Check className="h-4 w-4 text-foreground/70" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <pre className="text-sm text-neutral-200 overflow-x-auto p-4">
                <code>
{`:root {
  --background: hsl(0 0% 100%); /* Wrap in hsl */
  --foreground: hsl(0 0% 3.9%);
  /* ... other variables */
}

.dark {
  --background: hsl(0 0% 3.9%); /* Wrap in hsl */
  --foreground: hsl(0 0% 98%);
  /* ... other variables */
}

@theme inline {
  --color-background: var(--background); /* Remove hsl */
  --color-foreground: var(--foreground);
  /* ... other theme mappings */
}`}
                </code>
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="components" className="rounded-lg overflow-hidden">
            <div className="bg-background/50 border border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-muted-foreground">Button.tsx</div>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopy(componentCode, "component")}
                  className="h-8 px-2 text-muted-foreground"
                >
                  {copied === "component" ? (
                    <Check className="h-4 w-4 text-foreground/70" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <pre className="text-sm text-neutral-200 overflow-x-auto p-4">
                <code>
{`function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof ButtonPrimitive>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    />
  )
}`}
                </code>
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="tailwind-config" className="rounded-lg overflow-hidden">
            <div className="bg-background/50 border border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-muted-foreground">tailwind.config.ts</div>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopy(tailwindConfigCode, "tailwind")}
                  className="h-8 px-2 text-muted-foreground"
                >
                  {copied === "tailwind" ? (
                    <Check className="h-4 w-4 text-foreground/70" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <pre className="text-sm text-neutral-200 overflow-x-auto p-4">
                <code>
{`import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Your theme extensions
    },
  },
  plugins: [import("tw-animate-css")],
} satisfies Config;`}
                </code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// Sample code snippets
const cssVariablesCode = `:root {
  --background: hsl(0 0% 100%); /* Wrap in hsl */
  --foreground: hsl(0 0% 3.9%);
  /* ... other variables */
}

.dark {
  --background: hsl(0 0% 3.9%); /* Wrap in hsl */
  --foreground: hsl(0 0% 98%);
  /* ... other variables */
}

@theme inline {
  --color-background: var(--background); /* Remove hsl */
  --color-foreground: var(--foreground);
  /* ... other theme mappings */
}`;

const componentCode = `function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof ButtonPrimitive>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    />
  )
}`;

const tailwindConfigCode = `import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Your theme extensions
    },
  },
  plugins: [import("tw-animate-css")],
} satisfies Config;`;

export default CodeExamplesSection;
