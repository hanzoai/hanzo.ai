'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@hanzo/ui";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@hanzo/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@hanzo/ui/tabs";
import Link from "next/link";
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
import type { Product, ProductCategory } from "@/lib/data/product-taxonomy";
import { getProductsByCategory } from "@/lib/data/product-taxonomy";
import { ProductMockup } from "./ProductMockup";
import { UpstreamAttribution } from "./UpstreamAttribution";
import { CodeExamplesSection } from "./CodeExamplesSection";
import { CommunitySection } from "./CommunitySection";
import { SDKSection } from "./SDKSection";
import {
  getUpstreamForProduct,
  getCodeExamplesForProduct,
  getCommunityForProduct,
  hanzoSDKs
} from "@/lib/data/upstream-projects";
import { ArchitecturalBox, BlueprintLine, GridLines } from "@/components/ui/architectural-elements";

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
      {copied ? <Check className="h-4 w-4 text-white/70" /> : <Copy className="h-4 w-4 text-neutral-400" />}
    </button>
  );
};

const StatusBadge = ({ status }: { status: Product['status'] }) => {
  const variants = {
    ga: { label: 'GA', className: 'bg-white/10 text-white/70 border-white/20' },
    beta: { label: 'Beta', className: 'bg-white/10 text-white/60 border-white/20' },
    alpha: { label: 'Alpha', className: 'bg-white/10 text-white/70 border-white/20' },
    coming: { label: 'Coming Soon', className: 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30' }
  };

  const variant = variants[status];

  return (
    <Badge variant="outline" className={variant.className}>
      {variant.label}
    </Badge>
  );
};

const PricingBadge = ({ pricing }: { pricing?: Product['pricing'] }) => {
  if (!pricing) return null;

  const variants = {
    free: { label: 'Free', className: 'bg-white/10 text-white/70 border-white/20' },
    freemium: { label: 'Free Tier', className: 'bg-white/20 text-white/70 border-white/30' },
    paid: { label: 'Paid', className: 'bg-white/20 text-white border-white/30' }
  };

  const variant = variants[pricing];

  return (
    <Badge variant="outline" className={variant.className}>
      {variant.label}
    </Badge>
  );
};

// Related Product Card
const RelatedProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const IconComponent = iconMap[product.icon] || Database;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={product.href || "#"}>
        <Card className="bg-neutral-900/50 border-neutral-800 hover:border-white/30/50 transition-all duration-300 h-full group cursor-pointer hover:bg-neutral-900/80">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              <StatusBadge status={product.status} />
            </div>
            <CardTitle className="text-lg mt-3 group-hover:text-white transition-colors flex items-center gap-2">
              {product.shortName}
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
            </CardTitle>
            <CardDescription className="text-neutral-400">
              {product.tagline}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  );
};

export const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ product, children }) => {
  const IconComponent = iconMap[product.icon] || Database;

  // Get related products from same category (excluding current product)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  // Determine which install methods are available
  const installMethods = product.install
    ? Object.keys(product.install).filter(key => product.install?.[key as keyof typeof product.install])
    : [];

  // Get upstream project info (for forked OSS products)
  const upstreamProject = getUpstreamForProduct(product.id);

  // Get code examples for this product
  const codeExamples = getCodeExamplesForProduct(product.id);

  // Get community links
  const community = getCommunityForProduct(product.id);

  // Build community links array for CommunitySection
  const communityLinks = [
    { type: 'github' as const, url: product.github },
    { type: 'docs' as const, url: product.docs || 'https://docs.hanzo.ai' },
    ...(community.discord ? [{ type: 'discord' as const, url: community.discord }] : []),
    ...(community.twitter ? [{ type: 'twitter' as const, url: community.twitter }] : []),
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Architectural Elements */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[var(--black)]" />
        <GridLines spacing={50} opacity={0.03} />
        <BlueprintLine orientation="horizontal" position="15%" color="rgba(200, 200, 200, 0.03)" />
        <BlueprintLine orientation="horizontal" position="85%" color="rgba(200, 200, 200, 0.03)" />
        <BlueprintLine orientation="vertical" position="15%" color="rgba(200, 200, 200, 0.03)" />
        <BlueprintLine orientation="vertical" position="85%" color="rgba(200, 200, 200, 0.03)" />

        {/* Gradient accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ArchitecturalBox
            className="bg-transparent p-6 md:p-10"
            showCorners={true}
            showGrid={false}
            cornerSize={50}
            cornerColor="rgba(255, 255, 255, 0.15)"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <StatusBadge status={product.status} />
                  {product.openSource && (
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                      Open Source
                    </Badge>
                  )}
                  <PricingBadge pricing={product.pricing} />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  {product.name}
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-white mb-4 font-medium">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {product.docs && (
                    <Button
                      size="lg"
                      className="bg-white text-white hover:bg-white/90 border-0"
                      asChild
                    >
                      <a href={product.docs || "#"} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Documentation
                      </a>
                    </Button>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 hover:bg-white/5 hover:border-white/40"
                    asChild
                  >
                    <a href={product.github || "#"} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Right: Product Mockup */}
              <div className="hidden lg:block">
                <ProductMockup
                  category={product.category}
                  product={product}
                  className="shadow-2xl shadow-black/50"
                />
              </div>
            </div>
          </ArchitecturalBox>
        </div>
      </section>

      {/* Mobile Mockup (shown below hero on mobile) */}
      <section className="lg:hidden px-4 pb-8">
        <div className="max-w-lg mx-auto">
          <ProductMockup
            category={product.category}
            product={product}
            className="shadow-2xl shadow-black/50"
          />
        </div>
      </section>

      {/* Quick Install Section */}
      {product.install && installMethods.length > 0 && (
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Get Started</h2>
              <p className="text-neutral-500 text-center mb-8">Install {product.shortName} in seconds</p>

              <Tabs defaultValue={installMethods[0]} className="w-full">
                <TabsList className={`grid w-full grid-cols-${Math.min(installMethods.length, 4)} bg-neutral-900/50 border border-neutral-800 p-1 rounded-xl`}>
                  {product.install.cli && (
                    <TabsTrigger value="cli" className="data-[state=active]:bg-white data-[state=active]:text-white rounded-lg">
                      <Terminal className="h-4 w-4 mr-2" />
                      CLI
                    </TabsTrigger>
                  )}
                  {product.install.docker && (
                    <TabsTrigger value="docker" className="data-[state=active]:bg-white data-[state=active]:text-white rounded-lg">
                      Docker
                    </TabsTrigger>
                  )}
                  {product.install.npm && (
                    <TabsTrigger value="npm" className="data-[state=active]:bg-white data-[state=active]:text-white rounded-lg">
                      npm
                    </TabsTrigger>
                  )}
                  {product.install.pip && (
                    <TabsTrigger value="pip" className="data-[state=active]:bg-white data-[state=active]:text-white rounded-lg">
                      pip
                    </TabsTrigger>
                  )}
                </TabsList>

                {product.install.cli && (
                  <TabsContent value="cli" className="mt-4">
                    <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900/50">
                        <span className="text-xs text-neutral-500 font-mono">terminal</span>
                        <CopyButton text={product.install.cli} />
                      </div>
                      <div className="p-4 font-mono text-sm overflow-x-auto">
                        <span className="text-neutral-500">$</span>{" "}
                        <span className="text-white/70">{product.install.cli}</span>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {product.install.docker && (
                  <TabsContent value="docker" className="mt-4">
                    <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900/50">
                        <span className="text-xs text-neutral-500 font-mono">docker</span>
                        <CopyButton text={product.install.docker} />
                      </div>
                      <div className="p-4 font-mono text-sm overflow-x-auto">
                        <span className="text-neutral-500">$</span>{" "}
                        <span className="text-white/70">{product.install.docker}</span>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {product.install.npm && (
                  <TabsContent value="npm" className="mt-4">
                    <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900/50">
                        <span className="text-xs text-neutral-500 font-mono">npm</span>
                        <CopyButton text={product.install.npm} />
                      </div>
                      <div className="p-4 font-mono text-sm overflow-x-auto">
                        <span className="text-neutral-500">$</span>{" "}
                        <span className="text-white">{product.install.npm}</span>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {product.install.pip && (
                  <TabsContent value="pip" className="mt-4">
                    <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900/50">
                        <span className="text-xs text-neutral-500 font-mono">pip</span>
                        <CopyButton text={product.install.pip} />
                      </div>
                      <div className="p-4 font-mono text-sm overflow-x-auto">
                        <span className="text-neutral-500">$</span>{" "}
                        <span className="text-white/60">{product.install.pip}</span>
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>

              {/* Universal CLI hint */}
              <p className="text-center text-neutral-500 mt-6 text-sm">
                New to Hanzo? Install the CLI first:{" "}
                <code className="bg-neutral-800 px-2 py-1 rounded text-white font-mono text-xs">
                  curl -fsSL hanzo.sh | bash
                </code>
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Code Examples Section */}
      {codeExamples.length > 0 && (
        <CodeExamplesSection
          title={`${product.shortName} Quick Start`}
          subtitle="Get started in minutes with your language of choice"
          examples={codeExamples}
        />
      )}

      {/* Features Section */}
      <section className="py-16 px-4 border-t border-white/10 bg-gradient-to-b from-neutral-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Features</h2>
            <p className="text-neutral-500 text-center mb-10">Everything you need to get started</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-4 hover:border-white/30 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <CheckCircle className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-neutral-300 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom content from children */}
      {children}

      {/* SDK Section */}
      <SDKSection productName={product.shortName} sdks={hanzoSDKs} />

      {/* Community Section */}
      <CommunitySection
        productName={product.shortName}
        links={communityLinks}
      />

      {/* Resources Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Resources</h2>
            <p className="text-neutral-500 text-center mb-10">Learn more about {product.shortName}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={product.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-white/30/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Github className="h-5 w-5" />
                      GitHub
                      <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                    </CardTitle>
                    <CardDescription>
                      Source code, issues, and contributions
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>

              {product.docs && (
                <a
                  href={product.docs || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="bg-neutral-900/50 border-neutral-800 hover:border-white/30/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <BookOpen className="h-5 w-5" />
                        Documentation
                        <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                      </CardTitle>
                      <CardDescription>
                        Guides, API reference, and examples
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              )}

              <Link href="/pricing" className="group">
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-white/30/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sparkles className="h-5 w-5" />
                      Pricing
                      <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                    </CardTitle>
                    <CardDescription>
                      {product.pricing === 'free' ? 'Completely free to use' : 'Free tier available, scale as you grow'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 border-t border-white/10 bg-gradient-to-t from-neutral-900/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Related Products</h2>
                  <p className="text-neutral-500">More from Hanzo {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                </div>
                <Link
                  href={`/products/${product.category}`}
                  className="text-white hover:text-white/80 text-sm font-medium flex items-center gap-1 group"
                >
                  View all
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <RelatedProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Upstream Attribution Section (for forked OSS projects) */}
      {upstreamProject && (
        <UpstreamAttribution
          upstream={upstreamProject}
          productName={product.name}
        />
      )}

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-white/10 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started with{" "}
              <span className="text-white">{product.shortName}</span>?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
              Deploy in minutes with Hanzo Cloud or self-host with our open-source release.
              {product.pricing === 'free' && " It's completely free."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-white hover:bg-white/90 border-0 text-lg px-8"
                asChild
              >
                <Link href="/pricing">
                  Start Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 hover:border-white/40 text-lg px-8"
                asChild
              >
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductPageTemplate;
