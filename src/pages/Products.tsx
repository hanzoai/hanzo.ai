import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  Terminal,
  Copy,
  Check,
  ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, allProducts } from "@/data/product-taxonomy";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Cpu,
  Clock,
  Brain,
  Activity,
  Layers,
  LayoutGrid
};

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

export default function Products() {
  const totalProducts = allProducts.length;
  const openSourceProducts = allProducts.filter(p => p.openSource).length;
  const gaProducts = allProducts.filter(p => p.status === 'ga').length;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Complete AI Infrastructure
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-6">
              {totalProducts}+ products. {openSourceProducts} open source. One platform.
            </p>

            <p className="text-lg text-neutral-500 max-w-3xl mx-auto mb-10">
              From databases to ML pipelines, serverless compute to observability.
              Everything you need to build, deploy, and scale AI applications.
            </p>

            {/* Quick Install */}
            <div className="bg-neutral-900/50 rounded-2xl p-6 max-w-2xl mx-auto mb-10 border border-neutral-800">
              <p className="text-sm text-neutral-400 mb-3">Get started in seconds</p>
              <div className="flex items-center justify-between bg-black rounded-xl p-4 font-mono">
                <code className="text-green-400">curl -sSL https://hanzo.sh | sh</code>
                <CopyButton text="curl -sSL https://hanzo.sh | sh" />
              </div>
            </div>

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
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">{totalProducts}+</div>
              <div className="text-neutral-500">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">{openSourceProducts}</div>
              <div className="text-neutral-500">Open Source</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">{gaProducts}</div>
              <div className="text-neutral-500">Generally Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">7</div>
              <div className="text-neutral-500">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Database;
              const productCount = allProducts.filter(p => p.category === category.id).length;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={category.href}>
                    <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 transition-all duration-300 h-full group cursor-pointer hover:bg-neutral-900/80">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-sm text-neutral-500">
                            {productCount} products
                          </span>
                        </div>
                        <CardTitle className="text-xl mt-4 group-hover:text-white transition-colors flex items-center gap-2">
                          {category.name}
                          <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                        <CardDescription className="text-neutral-400">
                          {category.tagline}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-neutral-500">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zen Section */}
      <section className="py-20 px-4 border-t border-white/10 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built on Zen
          </h2>
          <p className="text-lg text-neutral-400 mb-8">
            Our flagship MoDE architecture LLM powers intelligent features across all Hanzo products.
            Context-aware, efficient, and designed for developers.
          </p>
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5"
            asChild
          >
            <Link to="/zen">
              Learn about Zen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build?
          </h2>
          <p className="text-lg text-neutral-400 mb-10">
            Free tier for all products. No credit card required. Scale as you grow.
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

      <Footer />
    </div>
  );
}
