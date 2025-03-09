
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JapaneseWave from "@/components/zen/JapaneseWave";
import ZenManifesto from "@/components/zen/ZenManifesto";
import ZenTimeline from "@/components/zen/ZenTimeline";
import ProductSection from "@/components/zen/ProductSection";

const ZenOfHanzo = () => {
  const hanzoCloudProducts = [
    { name: "AI", description: "AI – Unified access to frontier AI models." },
    { name: "Balancer", description: "Balancer – AI-native load balancer, LLM router, global CDN, caching, firewall." },
    { name: "Commerce", description: "Commerce – Intelligent e-commerce, dynamic pricing, subscriptions, integrated analytics." },
    { name: "Database", description: "Database – Real-time analytics DB optimized for AI, global replication, fault-tolerant." },
    { name: "Edge", description: "Edge – Instant global edge deployments, ultra-low latency compute." },
    { name: "Functions", description: "Functions – Globally distributed serverless compute for AI-driven event handling." },
    { name: "Machines", description: "Machines – Instantly scalable GPU and CPU compute optimized for AI workloads." },
    { name: "Metrics", description: "Metrics – Planetary-scale monitoring, observability, predictive analytics." },
    { name: "Payments", description: "Payments – Integrated payments infrastructure with subscriptions and usage-based billing." },
    { name: "Storage", description: "Storage – Edge-optimized, secure global storage, CDN, S3 compatible." },
    { name: "Vector", description: "Vector – High-performance vector database for semantic search, RAG, embeddings." },
    { name: "Works", description: "Works – Workflow automation and orchestration platform for AI-driven processes." }
  ];

  const hanzoDXProducts = [
    { name: "App", description: "App – No-code AI app builder with drag-and-drop workflows." },
    { name: "Base", description: "Base – All-in-one realtime DB, authentication, file storage in one backend." },
    { name: "Code", description: "Code – AI-powered VS Code fork for codebase-aware autocomplete and editing." },
    { name: "Dev", description: "Dev – Autonomous AI-powered software engineering assistant." },
    { name: "Edge", description: "Edge – Lightweight runtime for global edge-optimized applications." },
    { name: "Extension", description: "Extension – Marketplace for AI-powered IDE extensions compatible with VS Code." },
    { name: "Functions", description: "Functions – Scalable, event-driven serverless compute with built-in AI integration." },
    { name: "Identity", description: "Identity – Authentication and authorization supporting OAuth, JWT, RBAC." },
    { name: "Observability", description: "Observability – Intelligent tracing, logging, real-time monitoring of AI systems." },
    { name: "Operator", description: "Operator – AI-native assistant for automating desktop tasks via natural language." },
    { name: "Virtual Machine", description: "Virtual Machine – AI-enabled local virtual machine for unified development environments." },
    { name: "Warehouse", description: "Warehouse – Infinitely scalable columnar database designed for realtime analytics." },
    { name: "Zen", description: "Zen – Simplicity, clarity, elegance—our AI engineering manifesto guiding every decision we make." }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>The Zen of Hanzo - AI Engineering Manifesto</title>
        <meta name="description" content="Our battle-tested principles that guide everything we build at Hanzo. Simplicity, clarity, elegance—our AI engineering manifesto." />
      </Helmet>
      
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900/20"></div>
        <JapaneseWave 
          color="#9b87f5" 
          height={600} 
          opacity={0.02} 
          speed={45} 
          className="absolute bottom-0"
        />
        <JapaneseWave 
          color="#6E59A5" 
          height={600} 
          delay={2} 
          opacity={0.015} 
          speed={50} 
          className="absolute bottom-40"
        />
      </div>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Zen of <span className="text-purple-400">Hanzo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Our AI Engineering Manifesto
            </p>
          </motion.div>
        </section>
        
        {/* Origin Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
            >
              <p className="text-gray-300 md:text-lg leading-relaxed">
                Hanzo began as a spark—an intuition that AI was the next great leverage, born from launching 
                the record-breaking SKULLY AR-1 helmet in 2013, the most successful campaign in Indiegogo's history. 
                Since then, we've honed our craft: a fusion of relentless experimentation, bold creativity, and 
                disciplined engineering, forging principles that guide our quest for radical innovation.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Journey Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Our Journey</h2>
              <p className="text-gray-300">From idea to global scale</p>
            </div>
            
            <ZenTimeline />
          </div>
        </section>
        
        {/* Zen Principles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ZenManifesto />
          </div>
        </section>
        
        {/* Products */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Hanzo Cloud</h2>
                <p className="text-gray-300">Planetary-scale infrastructure for AI applications</p>
              </div>
              
              <ProductSection 
                title="Our Cloud Products" 
                products={hanzoCloudProducts}
                bgClass="bg-gradient-to-br from-purple-900/20 to-blue-900/20"
              />
            </div>
            
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Hanzo DX</h2>
                <p className="text-gray-300">Open Source, Self-Hostable Developer Experience</p>
              </div>
              
              <ProductSection 
                title="Our DX Products" 
                products={hanzoDXProducts}
                bgClass="bg-gradient-to-br from-blue-900/20 to-purple-900/20"
              />
            </div>
          </div>
        </section>
        
        {/* Final Quote */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block p-8 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Crafted by Innovators, Proven by Scale</h3>
                <p className="text-gray-300 md:text-lg leading-relaxed">
                  The Zen of Hanzo is our battle-tested ethos. Born from the crucible of high-stakes launches,
                  explosive successes, and daring experiments. We are AI engineers, cypherpunk innovators, 
                  and relentless optimists who believe technology is a lever to amplify human creativity and enterprise. 
                  Our platform reflects our beliefs: minimal yet complete, robust yet flexible, revolutionary yet accessible.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZenOfHanzo;
