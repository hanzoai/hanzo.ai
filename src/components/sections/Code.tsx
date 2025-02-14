
import { motion } from "framer-motion";
import { Code as CodeIcon } from "lucide-react";
import { Button } from "@hanzo/ui";

const Code = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full mb-6">
            <CodeIcon className="h-4 w-4 text-white" />
            <span className="text-sm text-white">Modern Development Stack</span>
          </div>
          <h2 className="text-4xl font-display text-white mb-4">Code with Confidence</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A modern development stack with real-time AI, beautiful UI components, and a powerful database.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden border border-white/10">
            <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="text-sm text-gray-400">app.tsx</div>
            </div>
            <div className="bg-black p-6">
              <pre className="text-sm">
                <code className="text-gray-300">
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-gray-300">{"{"}</span>{" "}
                  <span className="text-blue-400">createAI</span>{" "}
                  <span className="text-gray-300">{"}"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'@hanzo/ai'</span>
                  {"\n"}
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-gray-300">{"{"}</span>{" "}
                  <span className="text-blue-400">Button</span>{" "}
                  <span className="text-gray-300">{"}"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'@hanzo/ui'</span>
                  {"\n"}
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-gray-300">{"{"}</span>{" "}
                  <span className="text-blue-400">createClient</span>{" "}
                  <span className="text-gray-300">{"}"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'@hanzo/base'</span>
                  {"\n\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">ai</span>{" "}
                  <span className="text-gray-300">=</span>{" "}
                  <span className="text-blue-400">createAI</span>
                  <span className="text-gray-300">()</span>
                  {"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">db</span>{" "}
                  <span className="text-gray-300">=</span>{" "}
                  <span className="text-blue-400">createClient</span>
                  <span className="text-gray-300">()</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Code;
