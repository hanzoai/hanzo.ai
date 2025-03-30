
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, User, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Introducing Hanzo AI v3: The next generation of AI development",
    excerpt: "Today we're excited to announce the release of Hanzo AI v3, our most powerful and flexible AI development platform yet.",
    date: "May 15, 2023",
    author: "Zach Kelling",
    category: "Product",
    tags: ["AI", "Release", "Development"],
    imageUrl: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
  },
  {
    id: 2,
    title: "How to build an AI-powered chatbot with Hanzo Bot in 10 minutes",
    excerpt: "In this tutorial, we'll show you how to create a custom AI chatbot using Hanzo Bot that can integrate with your existing systems.",
    date: "June 3, 2023",
    author: "David Tai",
    category: "Tutorial",
    tags: ["Bot", "Tutorial", "Integration"],
    imageUrl: "/lovable-uploads/96a9379c-acc3-4170-a96f-964fb8773dd3.png"
  },
  {
    id: 3,
    title: "The future of e-commerce with Hanzo Commerce",
    excerpt: "Explore how AI is transforming the e-commerce landscape and how Hanzo Commerce is leading the revolution.",
    date: "July 12, 2023",
    author: "Marketing Team",
    category: "Industry",
    tags: ["Commerce", "AI", "Future"],
    imageUrl: "/lovable-uploads/fd154f76-a7a9-4b99-ac2b-e1eb589ec4da.png"
  },
  {
    id: 4,
    title: "Scaling your application with Hanzo Vector",
    excerpt: "Learn how to scale your AI applications efficiently using Hanzo Vector's advanced embedding and semantic search capabilities.",
    date: "August 24, 2023",
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
        <title>Blog - Hanzo Industries</title>
        <meta 
          name="description" 
          content="Latest news, tutorials, and insights from the Hanzo Industries team." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hanzo Blog</h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Insights, tutorials, and news from the Hanzo team to help you build better AI-powered applications.
            </p>
          </div>
          
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl overflow-hidden border border-purple-500/20">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="text-neutral-400 text-sm flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
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
                
                <Button className="w-fit">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
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
                  
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-neutral-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-neutral-400 mr-2" />
                      <span className="text-neutral-400 text-sm">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-neutral-300 mb-6">
                Get the latest Hanzo news, product updates, and tutorials delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-[var(--black)]/50 border border-gray-700 rounded-md flex-grow"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
