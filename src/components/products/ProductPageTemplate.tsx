import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Github,
  BookOpen,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Zap,
  Database,
  Cpu,
  Clock,
  Brain,
  Activity,
  Layers,
  LayoutGrid,
  Key,
  Search,
  HardDrive,
  FileJson,
  BarChart3,
  Boxes,
  Shield,
  ListTodo,
  ListOrdered,
  Radio,
  BookOpen as Notebook,
  GitBranch,
  Dumbbell,
  SlidersHorizontal,
  Rocket,
  Archive,
  CheckCircle,
  LineChart,
  ScrollText,
  Route,
  PieChart,
  Network,
  UserCheck,
  KeyRound,
  ShoppingCart,
  MessageSquare,
  Workflow,
  LayoutDashboard,
  Cloud,
  Globe,
  Bot,
  Monitor,
  Image,
  Music,
  Video
} from "lucide-react";
import type { Product, ProductCategory } from "@/data/product-taxonomy";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Cpu,
  Clock,
  Brain,
  Activity,
  Layers,
  LayoutGrid,
  Key,
  Search,
  HardDrive,
  FileJson,
  BarChart3,
  Boxes,
  Shield,
  ListTodo,
  ListOrdered,
  Radio,
  BookOpen: Notebook,
  GitBranch,
  Dumbbell,
  SlidersHorizontal,
  Rocket,
  Archive,
  CheckCircle,
  LineChart,
  ScrollText,
  Route,
  PieChart,
  Network,
  UserCheck,
  KeyRound,
  ShoppingCart,
  MessageSquare,
  Workflow,
  LayoutDashboard,
  Cloud,
  Zap,
  Sparkles,
  Globe,
  Bot,
  Monitor,
  Image,
  Music,
  Video
};

interface ProductPageTemplateProps {
  product: Product;
  children?: React.ReactNode;
}

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="p-2 hover:bg-white/10 rounded transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-neutral-400" />}
    </button>
  );
};

const StatusBadge = ({ status }: { status: Product['status'] }) => {
  const variants = {
    ga: { label: 'GA', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
    beta: { label: 'Beta', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    alpha: { label: 'Alpha', className: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    coming: { label: 'Coming Soon', className: 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30' }
  };

  const variant = variants[status];

  return (
    <Badge variant="outline" className={variant.className}>
      {variant.label}
    </Badge>
  );
};

export const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ product, children }) => {
  const IconComponent = iconMap[product.icon] || Database;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <StatusBadge status={product.status} />
              {product.openSource && (
                <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  Open Source
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-6">
              {product.tagline}
            </p>

            <p className="text-lg text-neutral-500 max-w-3xl mx-auto mb-10">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {product.docs && (
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-neutral-200"
                  asChild
                >
                  <a href={product.docs} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Documentation
                  </a>
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5"
                asChild
              >
                <a href={product.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Install Section */}
      {product.install && (
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Get Started</h2>

            <Tabs defaultValue={product.install.cli ? 'cli' : Object.keys(product.install)[0]} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-neutral-900">
                {product.install.cli && <TabsTrigger value="cli">CLI</TabsTrigger>}
                {product.install.docker && <TabsTrigger value="docker">Docker</TabsTrigger>}
                {product.install.npm && <TabsTrigger value="npm">npm</TabsTrigger>}
                {product.install.pip && <TabsTrigger value="pip">pip</TabsTrigger>}
              </TabsList>

              {product.install.cli && (
                <TabsContent value="cli">
                  <Card className="bg-neutral-900 border-neutral-800">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between bg-black rounded-lg p-4 font-mono text-sm">
                        <code className="text-green-400">{product.install.cli}</code>
                        <CopyButton text={product.install.cli} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {product.install.docker && (
                <TabsContent value="docker">
                  <Card className="bg-neutral-900 border-neutral-800">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between bg-black rounded-lg p-4 font-mono text-sm">
                        <code className="text-blue-400">{product.install.docker}</code>
                        <CopyButton text={product.install.docker} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {product.install.npm && (
                <TabsContent value="npm">
                  <Card className="bg-neutral-900 border-neutral-800">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between bg-black rounded-lg p-4 font-mono text-sm">
                        <code className="text-red-400">{product.install.npm}</code>
                        <CopyButton text={product.install.npm} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {product.install.pip && (
                <TabsContent value="pip">
                  <Card className="bg-neutral-900 border-neutral-800">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between bg-black rounded-lg p-4 font-mono text-sm">
                        <code className="text-yellow-400">{product.install.pip}</code>
                        <CopyButton text={product.install.pip} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>

            {/* Universal install hint */}
            <p className="text-center text-neutral-500 mt-6 text-sm">
              Don't have Hanzo CLI? Install it first:{" "}
              <code className="bg-neutral-800 px-2 py-1 rounded text-white">
                curl -sSL https://hanzo.sh | sh
              </code>
            </p>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-colors h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom content from children */}
      {children}

      {/* Resources Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Github className="h-5 w-5" />
                    GitHub
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>
                    Source code, issues, and contributions
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>

            {product.docs && (
              <a
                href={product.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <BookOpen className="h-5 w-5" />
                      Documentation
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription>
                      Guides, API reference, and examples
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            )}

            <Link to="/pricing" className="group">
              <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sparkles className="h-5 w-5" />
                    Pricing
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>
                    Free tier available, scale as you grow
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-t from-neutral-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started with {product.shortName}?
          </h2>
          <p className="text-lg text-neutral-400 mb-10">
            Deploy in minutes with Hanzo Cloud or self-host with our open-source release.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-200"
              asChild
            >
              <Link to="/pricing">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5"
              asChild
            >
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPageTemplate;
