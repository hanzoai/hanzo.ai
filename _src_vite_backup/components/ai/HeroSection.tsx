
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenLine,
  BookOpen,
  Code,
  Send,
  ArrowUp,
  X,
  Apple,
  CheckSquare,
  Square,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BRAND_COLOR = "#fd4444";

// Quick action presets
const chatPresets = [
  { icon: PenLine, label: "Write" },
  { icon: BookOpen, label: "Learn" },
  { icon: Code, label: "Code" },
];

const HeroSection = () => {
  const [chatInput, setChatInput] = useState("");
  const [showMacOSPromo, setShowMacOSPromo] = useState(true);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      // Open global chat with this message
      window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { message: chatInput } }));
      setChatInput("");
    }
  };

  const handlePresetClick = (label: string) => {
    window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { action: label } }));
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#fd4444]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neutral-800/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Meet your
              <br />
              <span style={{ color: BRAND_COLOR }}>thinking partner.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-400 text-center mb-10 max-w-xl mx-auto"
          >
            Tackle any big, bold, bewildering challenge with Hanzo AI.
          </motion.p>

          {/* Chat input */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleChatSubmit}
            className="mb-6"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="How can I help you today?"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-5 py-4 pr-36 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
              />
              <Button
                type="submit"
                className="absolute right-2 px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                style={{ backgroundColor: BRAND_COLOR }}
              >
                Ask Hanzo
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </motion.form>

          {/* Quick action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-3"
          >
            {chatPresets.map((preset) => {
              const Icon = preset.icon;
              return (
                <button
                  key={preset.label}
                  onClick={() => handlePresetClick(preset.label)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {preset.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* macOS Download Promo - Bottom right popup */}
      <AnimatePresence>
        {showMacOSPromo && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm"
          >
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 shadow-2xl">
              {/* Header with close button */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-neutral-500 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                  Preview
                </div>
                <button
                  onClick={() => setShowMacOSPromo(false)}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-4">
                {/* Text content */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Some tasks just work better on macOS
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    With Hanzo Dev, AI can now work directly with your local files and tools. Available in the macOS app.
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Link to="/download">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-neutral-700 hover:bg-neutral-800"
                      >
                        Download
                      </Button>
                    </Link>
                    <Link to="/dev">
                      <Button
                        size="sm"
                        className="text-white"
                        style={{ backgroundColor: BRAND_COLOR }}
                      >
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Visual - Checklist illustration */}
                <div className="w-24 h-24 bg-[#fd4444]/10 rounded-xl flex flex-col items-start justify-center p-3 shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckSquare className="w-4 h-4 text-[#fd4444]" />
                    <div className="w-10 h-1.5 bg-neutral-700 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Square className="w-4 h-4 text-neutral-600" />
                    <div className="w-8 h-1.5 bg-neutral-700 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-neutral-600" />
                    <div className="w-6 h-1.5 bg-neutral-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
