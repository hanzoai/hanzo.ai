'use client'

import { Button } from "@hanzo/ui";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join our community of innovators and start building with your AI team today.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          size="lg"
          className="text-primary-foreground"

          onClick={() => window.open('https://hanzo.chat', '_blank')}
        >
          Try Hanzo Chat
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-border hover:bg-accent"
          onClick={() => window.open('https://hanzo.bot', '_blank')}
        >
          Try Hanzo Bot
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
