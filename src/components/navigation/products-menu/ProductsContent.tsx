
import ProductSection from "./ProductSection";
import { aiCloudItems, dxPlatformItems } from "./product-data";
import { Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ProductsContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* AI Cloud Section */}
      <div>
        <ProductSection 
          title="AI Cloud" 
          link="/cloud" 
          items={aiCloudItems}
          hasMore={aiCloudItems.length > 8}
          viewAllText="View all Cloud" 
        />
        
        {/* AI Cloud Promo */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-b from-purple-900/30 to-blue-900/30 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-5 w-5 text-purple-400" />
            <h4 className="text-lg font-semibold text-white">Get $5 free</h4>
          </div>
          <p className="text-neutral-300 text-sm mb-3">
            Start building with AI Cloud today and get $5 credit free.
          </p>
          <Button 
            size="sm"
            className="w-full bg-purple-700 hover:bg-purple-600 text-white border-none"
          >
            <a href="https://cloud.hanzo.ai/auth/sign-up">Get Started Today</a>
          </Button>
        </div>
      </div>
      
      {/* DX Platform Section */}
      <div>
        <ProductSection 
          title="DX Platform" 
          link="/platform" 
          items={dxPlatformItems}
          hasMore={dxPlatformItems.length > 8}
          viewAllText="View all Open Source"
        />
        
        {/* DX Platform Promo */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-b from-green-900/30 to-teal-900/30 border border-green-500/20 hover:border-green-500/40 transition-colors">
          <div className="flex items-center space-x-2 mb-2">
            <Code className="h-5 w-5 text-green-400" />
            <h4 className="text-lg font-semibold text-white">Always Free & Open Source</h4>
          </div>
          <p className="text-neutral-300 text-sm mb-3">
            Our developer experience platform is free to use and open source forever.
          </p>
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1 bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
            >
              <a href="https://github.com/hanzoai">View on GitHub</a>
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1 bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
            >
              <Link to="/open-source">Open Source</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
