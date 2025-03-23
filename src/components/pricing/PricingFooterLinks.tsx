
import React from "react";
import { Button } from "@/components/ui/button";

const PricingFooterLinks = () => {
  return (
    <div className="mt-golden-6 text-center flex flex-wrap gap-golden-4 justify-center">
      <Button variant="outline" className="border-gray-800 hover:bg-gray-800 px-golden-4 py-golden-2 h-10 min-w-[152px]" size="sm">
        <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
          Hanzo GitHub
        </a>
      </Button>
      <Button variant="outline" className="border-gray-800 hover:bg-gray-800 px-golden-4 py-golden-2 h-10 min-w-[152px]" size="sm">
        <a href="mailto:sales@hanzo.ai">
          Contact Sales
        </a>
      </Button>
      <Button variant="outline" className="border-gray-800 hover:bg-gray-800 px-golden-4 py-golden-2 h-10 min-w-[152px]" size="sm">
        <a href="https://discord.gg/XthHQQj" target="_blank" rel="noopener noreferrer">
          Join Discord
        </a>
      </Button>
    </div>
  );
};

export default PricingFooterLinks;
