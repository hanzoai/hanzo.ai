
import React from "react";
import { Button } from "@/components/ui/button";

const PricingFooterLinks = () => {
  return (
    <div className="mt-16 text-center flex flex-wrap gap-6 justify-center">
      <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
        <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
          Hanzo GitHub
        </a>
      </Button>
      <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
        <a href="mailto:sales@hanzo.ai">
          Contact Sales
        </a>
      </Button>
      <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
        <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
          Join Discord
        </a>
      </Button>
    </div>
  );
};

export default PricingFooterLinks;
