
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="mt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent opacity-50" />
      <div className="relative text-center max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
        <h2 className="text-3xl font-bold mb-4">You + AI Team = Infinite Possibilities</h2>
        <p className="text-gray-400 mb-8">
          Work alongside our AI team to bring your vision to life. From development to design, 
          marketing to operations - we're here to help you build anything imaginable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => window.location.href = "/case-studies"}
          >
            Read Case Studies
          </Button>
          <Button 
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
            onClick={() => window.location.href = "/contact"}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
