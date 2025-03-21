
import React from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define a proper type for the presence event
interface PresenceEvent {
  action: 'join' | 'leave';
  userData: {
    name: string;
    [key: string]: any;
  };
}

const Integration = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Add real-time capabilities to your application with just a few lines of code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Easy to Implement</h3>
            <p className="text-gray-300 mb-6">
              Hanzo Realtime provides a clean, intuitive API that makes it simple to add 
              real-time functionality to any application. With support for multiple platforms 
              and frameworks, you can get started in minutes.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-purple-400 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Initialize the client</h4>
                  <p className="text-gray-400 text-sm">Connect to the Hanzo Realtime service with your API key</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-purple-400 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Subscribe to channels</h4>
                  <p className="text-gray-400 text-sm">Listen for updates on specific channels or topics</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-purple-400 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Publish messages</h4>
                  <p className="text-gray-400 text-sm">Send updates to all connected clients instantly</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700">
              View Documentation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black rounded-xl border border-gray-800 p-6"
          >
            <div className="flex items-center mb-4">
              <Code className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-gray-300">JavaScript Example</span>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-auto max-h-[400px]">
              <div className="text-green-400">// Initialize the Hanzo Realtime client</div>
              <div className="text-gray-300">import {`{ Realtime }`} from '@hanzo/cloud';</div>
              <div className="text-gray-300 mb-4">const realtime = new Realtime('YOUR_API_KEY');</div>
              
              <div className="text-green-400">// Subscribe to a channel</div>
              <div className="text-gray-300">const channel = await realtime.subscribe('chat-room', {`{`}</div>
              <div className="text-gray-300 pl-4">onMessage: (message) {`=>`} {`{`}</div>
              <div className="text-gray-300 pl-8">console.log('New message received:', message);</div>
              <div className="text-gray-300 pl-8">// Update your UI with the message</div>
              <div className="text-gray-300 pl-8">appendMessageToChat(message);</div>
              <div className="text-gray-300 pl-4">{`}`},</div>
              <div className="text-gray-300 pl-4">onPresence: (event: PresenceEvent) {`=>`} {`{`}</div>
              <div className="text-gray-300 pl-8">if (event.action === 'join') {`{`}</div>
              <div className="text-gray-300 pl-12">console.log(`${event.userData.name} joined the chat`);</div>
              <div className="text-gray-300 pl-8">{`}`} else {`{`}</div>
              <div className="text-gray-300 pl-12">console.log(`${event.userData.name} left the chat`);</div>
              <div className="text-gray-300 pl-8">{`}`}</div>
              <div className="text-gray-300 pl-4">{`}`}</div>
              <div className="text-gray-300">{`}`});</div>
              <div className="text-gray-300 mb-4"></div>
              
              <div className="text-green-400">// Publish a message to the channel</div>
              <div className="text-gray-300">await realtime.publish('chat-room', {`{`}</div>
              <div className="text-gray-300 pl-4">user: {`{`}</div>
              <div className="text-gray-300 pl-8">id: 'user-123',</div>
              <div className="text-gray-300 pl-8">name: 'Alice'</div>
              <div className="text-gray-300 pl-4">{`}`},</div>
              <div className="text-gray-300 pl-4">text: 'Hello, world!',</div>
              <div className="text-gray-300 pl-4">timestamp: new Date().toISOString()</div>
              <div className="text-gray-300">{`}`});</div>
              <div className="text-gray-300 mb-4"></div>
              
              <div className="text-green-400">// Clean up when done</div>
              <div className="text-gray-300">await channel.unsubscribe();</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
