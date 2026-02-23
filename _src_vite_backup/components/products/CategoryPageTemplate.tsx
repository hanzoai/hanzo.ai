import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
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
  BookOpen,
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
  ExternalLink,
  Globe,
  Bot,
  Monitor,
  Image,
  Music,
  Video
} from "lucide-react";
import type { Product, CategoryInfo } from "@/data/product-taxonomy";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database, Cpu, Clock, Brain, Activity, Layers, LayoutGrid, Key, Search,
  HardDrive, FileJson, BarChart3, Boxes, Shield, ListTodo, ListOrdered,
  Radio, BookOpen, GitBranch, Dumbbell, SlidersHorizontal, Rocket, Archive,
  CheckCircle, LineChart, ScrollText, Route, PieChart, Network, UserCheck,
  KeyRound, ShoppingCart, MessageSquare, Workflow, LayoutDashboard, Cloud,
  Zap, Sparkles, Globe, Bot, Monitor, Image, Music, Video
};

interface CategoryPageTemplateProps {
  category: CategoryInfo;
  products: Product[];
  subcategories?: string[];
}

const StatusBadge = ({ status }: { status: Product['status'] }) => {
  const variants = {
    ga: { label: 'GA', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
    beta: { label: 'Beta', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    alpha: { label: 'Alpha', className: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    coming: { label: 'Coming Soon', className: 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30' }
  };
  return (
    <Badge variant="outline" className={`${variants[status].className} text-xs`}>
      {variants[status].label}
    </Badge>
  );
};

export const CategoryPageTemplate: React.FC<CategoryPageTemplateProps> = ({
  category,
  products,
  subcategories
}) => {
  const CategoryIcon = iconMap[category.icon] || Database;

  // Group products by subcategory if applicable
  const groupedProducts = subcategories
    ? subcategories.reduce((acc, sub) => {
        acc[sub] = products.filter(p => p.subcategory === sub);
        return acc;
      }, {} as Record<string, Product[]>)
    : { all: products };

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
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <CategoryIcon className="h-10 w-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hanzo {category.name}
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-6">
              {category.tagline}
            </p>

            <p className="text-lg text-neutral-500 max-w-3xl mx-auto mb-10">
              {category.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-neutral-200"
                asChild
              >
                <Link to="/pricing">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5"
                asChild
              >
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  View Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          {subcategories ? (
            // Render grouped by subcategory (for ML products)
            subcategories.map((subcategory, subIndex) => {
              const subProducts = groupedProducts[subcategory] || [];
              if (subProducts.length === 0) return null;

              return (
                <div key={subcategory} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-bold mb-2">{subcategory}</h2>
                  <p className="text-neutral-500 mb-8">
                    {getSubcategoryDescription(subcategory)}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={subIndex * 10 + index}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Render flat grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4 border-t border-white/10 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <p className="text-neutral-400 mb-8">
            Install the Hanzo CLI to get started with any {category.name} product
          </p>

          <div className="bg-black rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between font-mono text-sm">
              <code className="text-green-400">curl -fsSL hanzo.sh | bash</code>
              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                Copy
              </Button>
            </div>
          </div>

          <p className="text-neutral-500 mt-6 text-sm">
            Then run <code className="bg-neutral-800 px-2 py-1 rounded">hanzo --help</code> to see available commands
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build with Hanzo {category.name}
          </h2>
          <p className="text-lg text-neutral-400 mb-10">
            Open source, self-hostable, and available on Hanzo Cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-200"
              asChild
            >
              <Link to="/pricing">
                Start Building
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
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const IconComponent = iconMap[product.icon] || Database;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link to={product.href}>
        <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 transition-all duration-300 h-full group cursor-pointer hover:bg-neutral-900/80">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              <StatusBadge status={product.status} />
            </div>
            <CardTitle className="text-lg mt-4 group-hover:text-white transition-colors flex items-center gap-2">
              {product.shortName}
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardTitle>
            <CardDescription className="text-neutral-400">
              {product.tagline}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-500 line-clamp-2">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {product.features.slice(0, 3).map((feature) => (
                <Badge
                  key={feature}
                  variant="outline"
                  className="bg-neutral-800/50 border-neutral-700 text-neutral-400 text-xs"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

// Helper function for ML subcategory descriptions
function getSubcategoryDescription(subcategory: string): string {
  const descriptions: Record<string, string> = {
    'Models': 'Foundation models for language, vision, audio, video, and 3D generation',
    'Develop': 'Interactive environments for experimentation and iteration',
    'Orchestrate': 'Reproducible pipelines and artifact management',
    'Train': 'Distributed training and job management',
    'Tune': 'Hyperparameter search and AutoML',
    'Serve': 'Production inference and rollout',
    'Manage': 'Model governance and lifecycle metadata',
    'Features': 'Online and offline feature serving',
    'Evaluate': 'Quality assessment and drift detection'
  };
  return descriptions[subcategory] || '';
}

export default CategoryPageTemplate;
