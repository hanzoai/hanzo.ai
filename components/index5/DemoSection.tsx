'use client'


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Terminal, RefreshCw } from "lucide-react";
import { Button } from "@hanzo/ui";
import ChromeText from "@/components/ui/chrome-text";

const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  
  const demoSteps = [
    { code: "import { HanzoAI } from '@hanzo/ai';\n\nconst model = HanzoAI.loadModel('gpt-4');\n\nconst response = await model.generate({\n  prompt: 'Explain quantum computing',\n  maxTokens: 100\n});", output: "Quantum computing leverages quantum mechanics principles to process information. Unlike classical computers using bits (0 or 1), quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously through superposition..." },
    { code: "const code = await HanzoAI.generateCode({\n  language: 'typescript',\n  task: 'Create a React component for a file uploader',\n  specifications: {\n    acceptedFileTypes: ['image/png', 'image/jpeg'],\n    maxFileSize: '5MB'\n  }\n});", output: "Generating React component for file uploader with specified parameters... Component successfully generated!" },
    { code: "const agent = HanzoAI.createAgent({\n  tools: ['database', 'web-search', 'code-analysis'],\n  goal: 'Optimize database query performance',\n  context: {\n    currentSchema: db.getSchema(),\n    slowQueries: await db.getSlowQueries()\n  }\n});", output: "Agent initialized with 3 tools. Analyzing slow queries and database schema... Found 4 optimization opportunities. Generating SQL modifications to improve performance by estimated 45%." }
  ];
  
  const playDemo = () => {
    setIsPlaying(true);
    let step = 0;
    
    const interval = setInterval(() => {
      step += 1;
      if (step >= demoSteps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsPlaying(false);
          setDemoStep(0);
        }, 3000);
        return;
      }
      setDemoStep(step);
    }, 5000);
  };
  
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChromeText 
              as="h2" 
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              See it in Action
            </ChromeText>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Watch how simple it is to build AI applications with Hanzo
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 backdrop-blur-sm">
            <div className="bg-[var(--black)]/70 rounded-lg overflow-hidden shadow-xl">
              <div className="flex items-center bg-gray-900 py-2 px-4 border-b border-gray-800">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                </div>
                <div className="text-muted-foreground text-sm font-mono">
                  hanzo-ai-terminal
                </div>
                <div className="ml-auto flex items-center space-x-3">
                  {!isPlaying ? (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-sm gap-2 bg-gray-800 hover:bg-gray-700"
                      onClick={playDemo}
                    >
                      <Play className="h-4 w-4" /> Run Demo
                    </Button>
                  ) : (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-sm gap-2 bg-gray-800 hover:bg-gray-700"
                      disabled
                    >
                      <RefreshCw className="h-4 w-4 animate-spin" /> Running...
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm h-[300px] overflow-hidden">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 text-foreground/70 mr-2 mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <span className="text-foreground/70">hanzo@ai</span>:<span className="text-foreground/70">~/projects/demo</span>$ <span className="text-[var(--white)]"> {isPlaying ? "node demo.js" : "node demo.js"}</span>
                  </div>
                </div>
                
                {(isPlaying || demoStep > 0) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 border border-gray-800 rounded-md p-3 bg-gray-900/50"
                  >
                    <div className="text-foreground mb-2">// Execute code</div>
                    <div className="text-[var(--white)] whitespace-pre">{demoSteps[demoStep].code}</div>
                  </motion.div>
                )}
                
                {(isPlaying || demoStep > 0) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4"
                  >
                    <div className="flex">
                      <span className="text-muted-foreground">// Output:</span>
                    </div>
                    <div className="mt-2 text-foreground/70 italic">
                      {demoSteps[demoStep].output}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          
          {/* Decorative glows */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
