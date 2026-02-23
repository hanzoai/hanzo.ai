'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, FileQuestion } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
              style={{
                background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 rounded-2xl mx-auto flex items-center justify-center mb-6 bg-white/5">
                <FileQuestion className="w-12 h-12 text-white/50" />
              </div>

              <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-b from-white to-neutral-600 bg-clip-text text-transparent">
                404
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Page not found
              </h2>
              <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-white text-black"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <p className="text-neutral-500 text-sm mb-4">Looking for something?</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: '/products', label: 'Products' },
                  { href: 'https://docs.hanzo.ai', label: 'Documentation' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/status', label: 'Status' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href || "#"}
                    className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
