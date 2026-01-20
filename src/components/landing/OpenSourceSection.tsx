import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Heart } from "lucide-react";

const repos = [
  {
    name: "hanzo",
    description: "The complete AI platform. Deploy anywhere.",
    stars: "2.4k",
    forks: "180",
    language: "TypeScript",
  },
  {
    name: "mcp",
    description: "260+ Model Context Protocol tools",
    stars: "1.8k",
    forks: "120",
    language: "TypeScript",
  },
  {
    name: "llm",
    description: "Unified gateway to 100+ AI models",
    stars: "950",
    forks: "85",
    language: "Python",
  },
];

const features = [
  {
    icon: "100%",
    title: "Open Source Core",
    description: "Every core component is open source and MIT/Apache 2.0 licensed",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Community Driven",
    description: "Built with and for the developer community",
  },
  {
    icon: <Github className="w-5 h-5" />,
    title: "Self-Hostable",
    description: "Run the entire platform on your own infrastructure",
  },
];

const OpenSourceSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-4 py-2 border mb-6"
               style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}>
            <Github className="w-4 h-4" />
            Open Source
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Built in the open
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We believe the future of AI infrastructure should be open. View our code, contribute, or self-host the entire platform.
          </p>
        </motion.div>

        {/* Features row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fd4444]/10 flex items-center justify-center mx-auto mb-4 text-[#fd4444] font-bold">
                {typeof feature.icon === "string" ? feature.icon : feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Repos grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/hanzoai/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-neutral-400" />
                  <span className="font-mono text-white">hanzoai/{repo.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
              </div>
              <p className="text-sm text-neutral-400 mb-4">{repo.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <Star className="w-4 h-4" />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <GitFork className="w-4 h-4" />
                  {repo.forks}
                </div>
                <span className="text-xs text-neutral-600">{repo.language}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-neutral-700 hover:bg-neutral-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            View all repositories
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
