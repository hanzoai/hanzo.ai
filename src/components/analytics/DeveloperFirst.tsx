
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, PenTool, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "js", label: "JavaScript", icon: <Code className="h-4 w-4" /> },
  { id: "py", label: "Python", icon: <Terminal className="h-4 w-4" /> },
  { id: "api", label: "API", icon: <PenTool className="h-4 w-4" /> }
];

const codeExamples = {
  js: `// Initialize Hanzo Analytics in your app
import { HanzoAnalytics } from 'hanzo-analytics';

// Configure your instance
const analytics = new HanzoAnalytics({
  projectId: 'YOUR_PROJECT_ID',
  options: {
    autoPageviews: true,
    trackClicks: true,
    debugMode: false
  }
});

// Track custom events
analytics.track('purchase_completed', {
  productId: 'prod_123',
  price: 89.99,
  currency: 'USD'
});

// Identify users
analytics.identify('user_123', {
  name: 'Jane Smith',
  email: 'jane@example.com',
  plan: 'premium'
});`,
  
  py: `# Install with pip install hanzo-analytics
import hanzo_analytics

# Initialize client
analytics = hanzo_analytics.Client(
    project_id="YOUR_PROJECT_ID",
    api_key="YOUR_API_KEY"
)

# Track events
analytics.track(
    event_name="order_completed",
    properties={
        "order_id": "ord_123",
        "total": 99.99,
        "products": [
            {"id": "prod_1", "name": "Keyboard", "price": 59.99},
            {"id": "prod_2", "name": "Mouse", "price": 39.99}
        ]
    },
    user_id="user_123"
)

# Batch tracking for performance
with analytics.batch():
    for event in events:
        analytics.track(event.name, event.properties, event.user_id)`,
  
  api: `# Using curl to send events to Hanzo Analytics API

curl -X POST https://api.hanzo.analytics/v1/track \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "projectId": "YOUR_PROJECT_ID",
    "event": "page_view",
    "properties": {
      "url": "https://yourapp.com/pricing",
      "referrer": "https://google.com",
      "title": "Pricing | Your App"
    },
    "userId": "user_123",
    "anonymousId": "anon_456",
    "timestamp": "2023-07-22T15:42:12.123Z"
  }'`
};

const DeveloperFirst = () => {
  const [activeTab, setActiveTab] = useState("js");
  
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-[#fd4444]/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Developer-First API & SDKs</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Easy-to-integrate SDKs and APIs designed for minimal friction and maximum flexibility.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
          <div className="lg:col-span-3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-5">
                <Layers className="h-6 w-6 text-[#fd4444] mr-3" />
                <h3 className="text-2xl font-bold">Designed for Developers</h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <div className="mr-3 text-[#fd4444]">•</div>
                  <div>
                    <span className="font-medium text-[var(--white)]">OpenTelemetry Integration</span>
                    <p className="text-neutral-400 mt-1">Seamlessly integrate with your existing observability stack.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-[#fd4444]">•</div>
                  <div>
                    <span className="font-medium text-[var(--white)]">API-first, highly customizable</span>
                    <p className="text-neutral-400 mt-1">Build exactly what you need with our flexible API.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-[#fd4444]">•</div>
                  <div>
                    <span className="font-medium text-[var(--white)]">Robust documentation and code examples</span>
                    <p className="text-neutral-400 mt-1">Comprehensive guides and examples to get you started quickly.</p>
                  </div>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm">View Documentation</Button>
                <Button variant="outline" size="sm">API Reference</Button>
                <Button variant="outline" size="sm">Example Projects</Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden shadow-xl">
              <div className="flex border-b border-gray-800">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center px-4 py-3 text-sm font-medium ${
                      activeTab === tab.id
                        ? "bg-gray-800 text-[var(--white)]"
                        : "text-neutral-400 hover:text-[var(--white)] hover:bg-gray-800/50"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="p-5 overflow-x-auto">
                <pre className="text-sm text-neutral-300 font-mono whitespace-pre">
                  {codeExamples[activeTab as keyof typeof codeExamples]}
                </pre>
              </div>
              
              <div className="bg-gray-900 p-3 border-t border-gray-800 text-sm text-neutral-400">
                {activeTab === "js" && "npm install hanzo-analytics"}
                {activeTab === "py" && "pip install hanzo-analytics"}
                {activeTab === "api" && "API Key: Get yours from the Hanzo Analytics dashboard"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperFirst;
