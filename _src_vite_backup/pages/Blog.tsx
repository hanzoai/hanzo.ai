import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, User, Tag, ArrowRight, Rss, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#fd4444";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Introducing Hanzo AI v3: The next generation of AI development",
    excerpt: "Today we're excited to announce the release of Hanzo AI v3, our most powerful and flexible AI development platform yet.",
    date: "May 15, 2024",
    author: "Zach Kelling",
    category: "Product",
    tags: ["AI", "Release", "Development"],
    imageUrl: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
  },
  {
    id: 2,
    title: "How to build an AI-powered chatbot with Hanzo Bot in 10 minutes",
    excerpt: "In this tutorial, we'll show you how to create a custom AI chatbot using Hanzo Bot that can integrate with your existing systems.",
    date: "June 3, 2024",
    author: "David Tai",
    category: "Tutorial",
    tags: ["Bot", "Tutorial", "Integration"],
    imageUrl: "/lovable-uploads/96a9379c-acc3-4170-a96f-964fb8773dd3.png"
  },
  {
    id: 3,
    title: "The future of e-commerce with Hanzo Commerce",
    excerpt: "Explore how AI is transforming the e-commerce landscape and how Hanzo Commerce is leading the revolution.",
    date: "July 12, 2024",
    author: "Marketing Team",
    category: "Industry",
    tags: ["Commerce", "AI", "Future"],
    imageUrl: "/lovable-uploads/fd154f76-a7a9-4b99-ac2b-e1eb589ec4da.png"
  },
  {
    id: 4,
    title: "Scaling your application with Hanzo Vector",
    excerpt: "Learn how to scale your AI applications efficiently using Hanzo Vector's advanced embedding and semantic search capabilities.",
    date: "August 24, 2024",
    author: "Engineering Team",
    category: "Technical",
    tags: ["Vector", "Scaling", "Performance"],
    imageUrl: "/lovable-uploads/a31568fe-aa1f-4933-add1-b981564f25b9.png"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Blog - Hanzo AI</title>
        <meta
          name="description"
          content="Latest news, tutorials, and insights from the Hanzo AI team."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Engineering Blog
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">Insights from</span>
                <br />
                <span className="text-neutral-400">the team.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                Tutorials, product updates, and deep dives into AI development
                from the Hanzo engineering team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="#posts"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Latest Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <button className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white">
                  <Rss className="w-4 h-4 mr-2" />
                  Subscribe to RSS
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section id="posts" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-[#fd4444]/10 to-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800">
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                    >
                      Featured
                    </span>
                    <span className="text-neutral-400 text-sm flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{blogPosts[0].title}</h2>
                  <p className="text-neutral-300 mb-6">{blogPosts[0].excerpt}</p>

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-neutral-400 mr-2" />
                      <span className="text-neutral-400 text-sm">{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 text-neutral-400 mr-2" />
                      <span className="text-neutral-400 text-sm">{blogPosts[0].category}</span>
                    </div>
                  </div>

                  <button
                    className="inline-flex items-center w-fit px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                    style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="relative h-64 md:h-auto">
                  <img
                    src={blogPosts[0].imageUrl}
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="relative h-48">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-neutral-400 text-sm flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="text-neutral-400 text-sm flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                    <p className="text-neutral-400 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-neutral-500 mr-2" />
                        <span className="text-neutral-500 text-sm">{post.author}</span>
                      </div>
                      <button
                        className="text-sm font-medium transition-colors"
                        style={{ color: BRAND_COLOR }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fd4444]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#fd4444]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Stay up to date
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
            >
              Get the latest Hanzo news, product updates, and tutorials delivered directly to your inbox.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600"
              />
              <button
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all hover:opacity-90 text-base"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Subscribe
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
