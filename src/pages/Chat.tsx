import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MessageSquare, Zap, Globe, Shield, Sparkles, Users, Brain, Code, Database, Clock, Lock, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              Interactive AI Chat Experience
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ChromeText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" gradient="from-purple-400 to-pink-400">
              Conversational AI That Understands
            </ChromeText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Build intelligent chat experiences powered by frontier AI models. From customer support to creative collaboration, deliver natural conversations at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg">
              <Link to="/contact">Start Building</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 text-[var(--white)] px-8 py-6 text-lg">
              <Link to="/pricing">View Demo</Link>
            </Button>
          </motion.div>
        </div>

        {/* Chat Interface Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
        >
          <div className="bg-[var(--black)]/80 backdrop-blur-sm">
            {/* Chat Header */}
            <div className="flex items-center justify-between h-16 px-6 bg-gray-900/50 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-[var(--white)] font-medium">Hanzo Assistant</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-purple-900/40 rounded-md text-purple-300 text-xs">GPT-4o</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-neutral-400 text-xs">Streaming</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 h-[400px] overflow-y-auto">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[70%] bg-purple-900/30 border border-purple-500/30 rounded-2xl rounded-tr-sm px-4 py-3">
                  <p className="text-neutral-200">How can I integrate your chat API into my application?</p>
                  <div className="text-xs text-neutral-500 mt-1">2:34 PM</div>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl rounded-tl-sm px-4 py-3">
                    <p className="text-neutral-200 mb-3">
                      Great question! Integrating Hanzo Chat into your application is straightforward. Here's a quick overview:
                    </p>
                    <div className="bg-gray-950/50 rounded-lg p-3 font-mono text-sm text-purple-300 mb-3">
                      <code>npm install @hanzo/chat-sdk</code>
                    </div>
                    <p className="text-neutral-200 mb-3">
                      Then initialize the client with your API key and start chatting:
                    </p>
                    <div className="bg-gray-950/50 rounded-lg p-3 font-mono text-xs text-neutral-300 overflow-x-auto">
                      <pre>{`import { HanzoChat } from '@hanzo/chat-sdk'

const chat = new HanzoChat({
  apiKey: 'your-api-key',
  model: 'gpt-4o'
})

const response = await chat.send('Hello!')`}</pre>
                    </div>
                    <div className="text-xs text-neutral-500 mt-3">2:34 PM</div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 px-2">
                    <button className="text-xs text-neutral-500 hover:text-purple-400 transition-colors">Copy</button>
                    <span className="text-neutral-700">•</span>
                    <button className="text-xs text-neutral-500 hover:text-purple-400 transition-colors">Regenerate</button>
                  </div>
                </div>
              </div>

              {/* User Follow-up */}
              <div className="flex justify-end">
                <div className="max-w-[70%] bg-purple-900/30 border border-purple-500/30 rounded-2xl rounded-tr-sm px-4 py-3">
                  <p className="text-neutral-200">What about streaming responses?</p>
                  <div className="text-xs text-neutral-500 mt-1">2:35 PM</div>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex justify-start">
                <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Multi-Model Support",
      description: "Access GPT-4o, Claude, Gemini, and more. Switch between models seamlessly or route to the best one automatically."
    },
    {
      icon: Zap,
      title: "Real-Time Streaming",
      description: "Stream responses token-by-token for instant user feedback. Reduce perceived latency and create fluid experiences."
    },
    {
      icon: Database,
      title: "Conversation Memory",
      description: "Built-in conversation history and context management. Long-term memory across sessions for personalized interactions."
    },
    {
      icon: Code,
      title: "Function Calling",
      description: "Let AI call your functions and APIs. Build agents that can take actions, query databases, and integrate with tools."
    },
    {
      icon: Shield,
      title: "Content Moderation",
      description: "Automatic safety filters and content moderation. Customizable guardrails to ensure appropriate responses."
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Support 100+ languages out of the box. Automatic translation and localization for global audiences."
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--white)] mb-6">
              Everything You Need for Intelligent Chat
            </h2>
            <p className="text-xl text-neutral-300">
              Build chat experiences that feel natural, respond intelligently, and scale effortlessly
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 hover:bg-gray-900/50 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChatCapabilities = () => {
  const capabilities = [
    {
      icon: Sparkles,
      title: "Contextual Understanding",
      description: "Advanced reasoning that understands nuance, context, and intent across long conversations."
    },
    {
      icon: Users,
      title: "Multi-User Conversations",
      description: "Support for group chats, channels, and collaborative AI interactions."
    },
    {
      icon: Clock,
      title: "Response Timing Control",
      description: "Fine-tune response speed, add typing indicators, and control conversation pacing."
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "End-to-end encryption, data isolation, and compliance-ready conversation storage."
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Track conversation metrics, user satisfaction, and AI performance in real-time."
    },
    {
      icon: Code,
      title: "Custom Integrations",
      description: "Webhooks, APIs, and SDKs to integrate chat anywhere in your stack."
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--white)] mb-6">
              Advanced Chat Capabilities
            </h2>
            <p className="text-xl text-neutral-300">
              Go beyond basic chat with enterprise-grade features and controls
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/20 transition-colors"
            >
              <capability.icon className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-[var(--white)] mb-2">{capability.title}</h3>
              <p className="text-neutral-400 text-sm">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const useCases = [
    {
      icon: Users,
      title: "Customer Support",
      description: "24/7 intelligent support that understands complex queries, accesses your knowledge base, and escalates to humans when needed.",
      features: ["Instant responses", "Multi-language support", "Ticket creation", "Analytics dashboard"]
    },
    {
      icon: Sparkles,
      title: "Creative Collaboration",
      description: "AI writing assistant, brainstorming partner, and creative collaborator that helps teams ideate and create together.",
      features: ["Content generation", "Idea refinement", "Style adaptation", "Real-time collaboration"]
    },
    {
      icon: Code,
      title: "Developer Assistant",
      description: "Code-aware AI that helps developers write, debug, and understand code across multiple languages and frameworks.",
      features: ["Code completion", "Bug detection", "Documentation", "Architecture advice"]
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--white)] mb-6">
              Transforming Industries with AI Chat
            </h2>
            <p className="text-xl text-neutral-300">
              See how teams across industries use Hanzo Chat to revolutionize their workflows
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-b from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6">
                <useCase.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--white)] mb-3">{useCase.title}</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-blue-950/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-6">
            Ready to Transform Your Chat Experience?
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Join thousands of developers building the future of conversational AI. Start for free, scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-6 text-lg">
              <Link to="/contact">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 text-[var(--white)] px-8 py-6 text-lg">
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
          <p className="text-neutral-500 text-sm mt-6">
            No credit card required • Free tier includes 1M tokens/month
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Chat = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Chat - Interactive AI Chat Experience | Hanzo AI</title>
        <meta name="description" content="Build intelligent chat experiences powered by frontier AI models. Real-time streaming, multi-model support, and enterprise-grade features for conversational AI at scale." />
        <meta name="keywords" content="AI chat, conversational AI, chatbot, GPT-4, Claude, chat API, streaming chat, customer support AI" />
        <meta property="og:title" content="Chat - Interactive AI Chat Experience | Hanzo AI" />
        <meta property="og:description" content="Build intelligent chat experiences powered by frontier AI models. Real-time streaming, multi-model support, and enterprise-grade features." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chat - Interactive AI Chat Experience | Hanzo AI" />
        <meta name="twitter:description" content="Build intelligent chat experiences powered by frontier AI models. Real-time streaming, multi-model support, and enterprise-grade features." />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <ChatCapabilities />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
