
import React from "react";
import { motion } from "framer-motion";
import { 
  Kanban, 
  MessageSquare, 
  Video, 
  FolderKanban,
  Users,
  Calendar,
  Bot,
  FileText,
  CheckCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WorkspaceIntegration = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-2 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 mb-4">
            <FolderKanban className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            One Workspace for Humans & AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seamlessly integrate your AI team members into your existing workflows with our 
            unified workspace platform, featuring project management, chat, video calls, and 
            knowledge base tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Project Management Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="border-b border-gray-800 p-3 flex items-center">
              <Kanban className="h-5 w-5 text-purple-400 mr-2" />
              <span className="font-medium">Project Management</span>
              <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
                Linear-style
              </Badge>
            </div>
            <div className="p-4">
              <div className="bg-black/60 rounded-lg p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium text-white">Website Redesign</h3>
                    <Badge className="ml-2 bg-blue-600/20 text-blue-400 border-blue-500/30">In Progress</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">AI</div>
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs">JD</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Create wireframes</span>
                    <div className="ml-auto flex items-center space-x-1">
                      <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-xs">JD</div>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Design homepage</span>
                    <div className="ml-auto flex items-center space-x-1">
                      <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-xs">AI</div>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-purple-900/20 rounded-md border border-purple-700/50">
                    <Bot className="h-4 w-4 text-purple-400 mr-2" />
                    <span className="text-sm">AI working: Implementing frontend code</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="border-b border-gray-800 p-3 flex items-center">
              <MessageSquare className="h-5 w-5 text-purple-400 mr-2" />
              <span className="font-medium">Team Chat</span>
              <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
                Slack-style
              </Badge>
            </div>
            <div className="p-4">
              <div className="bg-black/60 rounded-lg p-4">
                <div className="mb-4">
                  <h3 className="font-medium text-white">#project-website</h3>
                  <div className="text-xs text-gray-400">3 humans, 2 AI agents</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-xs mr-3">JD</div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">John Doe</span>
                        <span className="text-xs text-gray-400 ml-2">10:45 AM</span>
                      </div>
                      <p className="text-sm text-gray-300">Can someone help review the landing page design?</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-xs mr-3">AI</div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">DesignBot</span>
                        <span className="text-xs text-gray-400 ml-2">10:47 AM</span>
                      </div>
                      <p className="text-sm text-gray-300">I'll review it right away. I see a few opportunities to improve the visual hierarchy and call-to-action placement.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-xs mr-3">AI</div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">DesignBot</span>
                        <span className="text-xs text-gray-400 ml-2">10:49 AM</span>
                      </div>
                      <div className="bg-gray-800/70 p-2 rounded-md text-sm text-gray-300 border border-gray-700/50">
                        <p>I've created some alternative layouts based on our brand guidelines. You can view them here:</p>
                        <div className="bg-purple-900/20 text-purple-300 p-1 mt-1 rounded flex items-center text-xs">
                          <FileText className="h-3 w-3 mr-1" />
                          design-alternatives.figma
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Calls Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="border-b border-gray-800 p-3 flex items-center">
              <Video className="h-5 w-5 text-purple-400 mr-2" />
              <span className="font-medium">Video Meetings</span>
              <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
                Zoom-style
              </Badge>
            </div>
            <div className="p-4">
              <div className="bg-black/60 rounded-lg p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-medium text-white">Weekly Sprint Planning</h3>
                  <Badge className="bg-green-600/30 text-green-400 border-green-500/30">Live</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="aspect-video bg-gray-800 rounded-md relative">
                    <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs">Sarah Johnson</div>
                  </div>
                  <div className="aspect-video bg-gray-800 rounded-md relative">
                    <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs">John Doe</div>
                  </div>
                  <div className="aspect-video bg-purple-900/30 rounded-md relative border border-purple-700/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="h-10 w-10 text-purple-400" />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-purple-900/60 px-2 py-1 rounded text-xs">DevBot</div>
                  </div>
                  <div className="aspect-video bg-purple-900/30 rounded-md relative border border-purple-700/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="h-10 w-10 text-purple-400" />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-purple-900/60 px-2 py-1 rounded text-xs">AnalyticsBot</div>
                  </div>
                </div>

                <div className="text-center text-xs text-gray-400 py-1">
                  AI agents are learning from this meeting and will automatically implement the discussed tasks
                </div>
              </div>
            </div>
          </motion.div>

          {/* Knowledge Base Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="border-b border-gray-800 p-3 flex items-center">
              <FileText className="h-5 w-5 text-purple-400 mr-2" />
              <span className="font-medium">Knowledge Base</span>
              <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
                Notion-style
              </Badge>
            </div>
            <div className="p-4">
              <div className="bg-black/60 rounded-lg p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-medium text-white">Company Wiki</h3>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-green-400 flex items-center">
                      <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-xs mr-1">AI</div>
                      <span>Updating</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="font-medium">Onboarding Process</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Step-by-step guide for new employees, updated automatically by HR Bot.
                    </p>
                  </div>
                  
                  <div className="p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
                    <div className="flex items-center mb-1">
                      <FileText className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="font-medium">Technical Documentation</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      API references and architectural diagrams maintained by DevBot.
                    </p>
                  </div>
                  
                  <div className="p-2 bg-purple-900/20 rounded-md border border-purple-700/50">
                    <div className="flex items-center mb-1">
                      <Bot className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="font-medium">AI Activity: Adding Marketing Guidelines</span>
                    </div>
                    <div className="flex items-center text-xs text-purple-300">
                      <span>ContentBot is updating brand guidelines based on latest team meeting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            All workspace tools are fully integrated, allowing AI agents to work across platforms
            seamlessly while maintaining a complete audit trail of all actions.
          </p>
          
          <div className="inline-flex flex-wrap justify-center gap-4">
            <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
              Real-time collaboration
            </Badge>
            <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
              Full audit history
            </Badge>
            <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
              Seamless integrations
            </Badge>
            <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
              Human oversight
            </Badge>
            <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
              Enterprise security
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkspaceIntegration;
