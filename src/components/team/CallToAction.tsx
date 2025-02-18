
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Join our community of innovators and start building with your AI team today.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          size="lg" 
          className="bg-purple-600 hover:bg-purple-700"
          onClick={() => window.open('https://hanzo.chat', '_blank')}
        >
          Try Hanzo Chat
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700"
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
