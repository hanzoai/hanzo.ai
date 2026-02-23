'use client'

import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, DollarSign, BarChart } from "lucide-react";
import { Button } from "@hanzo/ui";
const Commerce = () => {
  return <section className="py-20 bg-gradient-to-b from-background to-gray-900 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[var(--white)]/10 px-4 py-1 rounded-full mb-6">
            <ShoppingCart className="h-4 w-4 text-[var(--white)]" />
            <span className="text-sm text-[var(--white)]">E-commerce Platform</span>
          </div>
          <h2 className="text-4xl font-display text-[var(--white)] mb-4">Complete Commerce Stack</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Everything you need to build and scale your e-commerce business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-xl ring-1 ring-border">
            <h3 className="text-2xl font-semibold text-[var(--white)] mb-6">One-Line Integration</h3>
            <div className="bg-[var(--black)]/50 p-6 rounded-lg mb-6">
              <pre className="text-sm text-foreground/80">
                <code>{`import { createStore } from '@hanzo/commerce';

// Complete store in one line
const store = createStore();`}</code>
              </pre>
            </div>
            <p className="text-foreground/80">Launch your store with just one line of code. Includes products, cart, checkout, and more.</p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <CreditCard className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Payments</h4>
              <p className="text-foreground/80">Global payment processing with 100+ methods</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <ShoppingCart className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Store</h4>
              <p className="text-foreground/80">Product management and inventory tracking</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <DollarSign className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Pricing</h4>
              <p className="text-foreground/80">Flexible pricing and subscription management</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <BarChart className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Analytics</h4>
              <p className="text-foreground/80">Real-time sales and customer insights</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Button className="bg-[var(--white)]/5 hover:bg-[var(--white)]/10 text-[var(--white)] px-8 py-6 text-lg rounded-xl border border-border hover:border-border">
            Start Building with Commerce
          </Button>
        </div>
      </div>
    </section>;
};
export default Commerce;