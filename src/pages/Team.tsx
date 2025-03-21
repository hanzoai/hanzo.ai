
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  Calendar,
  MessageSquare,
  Mic,
  Video,
  FileText,
  Search,
  Users,
  Zap,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Share2,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HanzoTeam = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/40 bg-purple-900/20 mb-4">
                <Activity className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-300">All-in-One Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
                Hanzo Team
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Where communication, productivity, and AI come together in perfect harmony
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <a 
                    href="https://hanzo.team" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Try Hanzo Team <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  <Link to="#features" className="flex items-center">
                    Explore Features <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden border border-gray-800"
            >
              <img 
                src="/lovable-uploads/96a9379c-acc3-4170-a96f-964fb8773dd3.png" 
                alt="Hanzo Team Dashboard" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </section>
        
        {/* All-in-One Platform Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All-in-One Communication &amp; Productivity Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hanzo Team replaces multiple tools with a single, integrated platform powered by AI
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Chat & Messaging */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="h-12 w-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Team Chat</h3>
                <p className="text-gray-300 mb-4">
                  Real-time messaging with channels, threads, and direct messages. Replaces Slack and Microsoft Teams.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                    <span>Organized conversations in channels</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                    <span>Threaded replies for focused discussions</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                    <span>Smart search across all messages</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Video Meetings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="h-12 w-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Video Conferencing</h3>
                <p className="text-gray-300 mb-4">
                  HD video meetings with advanced features. Replaces Zoom, Google Meet, and Microsoft Teams.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span>Integrated scheduling and calendar</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span>Screen sharing and collaborative tools</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span>Automatic meeting notes and action items</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Task Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="h-12 w-12 rounded-lg bg-green-900/30 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Project Tracking</h3>
                <p className="text-gray-300 mb-4">
                  Issue tracking and project management. Replaces Linear, JIRA, Trello, and Asana.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-400 mr-2" />
                    <span>Customizable workflows and boards</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-400 mr-2" />
                    <span>Sprint planning and roadmaps</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-400 mr-2" />
                    <span>Progress tracking and reporting</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Calendar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="h-12 w-12 rounded-lg bg-amber-900/30 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart Calendar</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered scheduling and time management. Replaces Google Calendar and Calendly.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-amber-400 mr-2" />
                    <span>Automated meeting scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-amber-400 mr-2" />
                    <span>Intelligent time blocking</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-amber-400 mr-2" />
                    <span>Calendar sharing and team availability</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* AI Transcription */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="h-12 w-12 rounded-lg bg-red-900/30 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Voice Transcription</h3>
                <p className="text-gray-300 mb-4">
                  Accurate transcription and meeting notes. Replaces Otter.ai and other transcription tools.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                    <span>Real-time transcription of meetings</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                    <span>AI-generated meeting summaries</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                    <span>Searchable meeting archive</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* AI Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="h-12 w-12 rounded-lg bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Assistants</h3>
                <p className="text-gray-300 mb-4">
                  Custom AI assistants that automate work. Integrated with Hanzo Operative for advanced automation.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-400 mr-2" />
                    <span>Custom AI assistants for specific tasks</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-400 mr-2" />
                    <span>No-code workflow automation</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-400 mr-2" />
                    <span>Integration with 100+ tools and services</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Unified Experience Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/40 bg-blue-900/20 mb-4">
                  <Zap className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm text-blue-300">Unified Experience</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-6">
                  One Tool to Replace Them All
                </h2>
                
                <p className="text-gray-300 mb-6">
                  Hanzo Team brings together all your essential work tools into a single, seamless platform. No more switching between apps or losing context in your workflow.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Centralized Communication</h4>
                      <p className="text-gray-400">All your conversations and meetings in one place, with context preserved across channels</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Seamless Transitions</h4>
                      <p className="text-gray-400">Move effortlessly between chat, video, tasks, and documentation without disruption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Universal Search</h4>
                      <p className="text-gray-400">Find anything across messages, meetings, documents, and tasks with intelligent search</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <a 
                    href="https://hanzo.team/platform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Explore the Platform <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="/lovable-uploads/a1e0f18b-41a7-4f58-ac3b-7272aa8e7a77.png" 
                    alt="Hanzo Team Unified Platform" 
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* AI-Powered Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/40 bg-purple-900/20 mb-4">
                <Bot className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-300">AI-Powered</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI at the Core of Everything
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hanzo Team leverages artificial intelligence to make your team more productive
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Search className="h-5 w-5 text-purple-400 mr-2" />
                  Smart Search
                </h3>
                <p className="text-gray-300">
                  Natural language search that understands the context of your query and finds exactly what you need across all your content.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-purple-400 mr-2" />
                  Auto-Documentation
                </h3>
                <p className="text-gray-300">
                  AI automatically summarizes meetings, conversations, and decisions, creating searchable documentation without extra work.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 text-purple-400 mr-2" />
                  Developer Tools
                </h3>
                <p className="text-gray-300">
                  Built-in code generation, review, and documentation tools to help developers be more productive and stay in flow.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-purple-400 mr-2" />
                  AI Scheduling
                </h3>
                <p className="text-gray-300">
                  Smart calendar that automatically finds the best meeting times, suggests agenda items, and helps you make the most of your time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Users className="h-5 w-5 text-purple-400 mr-2" />
                  Team Insights
                </h3>
                <p className="text-gray-300">
                  AI-generated insights about team dynamics, collaboration patterns, and productivity to help leaders build better teams.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Share2 className="h-5 w-5 text-purple-400 mr-2" />
                  Knowledge Sharing
                </h3>
                <p className="text-gray-300">
                  AI helps capture, organize, and share institutional knowledge, making it easy for team members to find the information they need.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Team Demo Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                See Hanzo Team in Action
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how teams collaborate more effectively with Hanzo Team
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-xl overflow-hidden border border-gray-800 mb-12"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-8">
                    <Video className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">Hanzo Team Demo</h3>
                    <p className="text-gray-400 mb-6">Watch a demonstration of the Hanzo Team platform</p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <a 
                        href="https://hanzo.team/demo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <img 
                  src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" 
                  alt="Enterprise Teams" 
                  className="w-16 h-16 mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Teams</h3>
                <p className="text-gray-300 mb-4">
                  Secure, compliant communication and collaboration for large organizations with advanced administration.
                </p>
                <a 
                  href="https://hanzo.team/enterprise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <img 
                  src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" 
                  alt="Startups & Teams" 
                  className="w-16 h-16 mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Startups & Teams</h3>
                <p className="text-gray-300 mb-4">
                  All-in-one collaboration platform that grows with your team, with no wasted spend on multiple tools.
                </p>
                <a 
                  href="https://hanzo.team/teams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <img 
                  src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" 
                  alt="Developer Teams" 
                  className="w-16 h-16 mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Developer Teams</h3>
                <p className="text-gray-300 mb-4">
                  Specialized features for software development teams, with code collaboration and AI assistance.
                </p>
                <a 
                  href="https://hanzo.team/developers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform How Your Team Works?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of teams that have simplified their workflow with Hanzo Team's all-in-one platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                  <a 
                    href="https://hanzo.team/signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-700 text-white hover:bg-gray-800 px-8"
                >
                  <a 
                    href="https://hanzo.team/demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Request Demo <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              <p className="text-gray-400 mt-6">
                No credit card required. 14-day free trial with all features included.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HanzoTeam;
