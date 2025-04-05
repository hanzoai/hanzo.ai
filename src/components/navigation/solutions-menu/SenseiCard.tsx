
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export const SenseiCard = () => {
  return (
    <Link 
      to="/sensei"
      className="block p-4 rounded-xl bg-gradient-to-b from-purple-900/30 to-pink-900/30 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold text-white">Sensei Method</h4>
        <ExternalLink className="h-4 w-4 text-purple-400" />
      </div>
      <p className="text-neutral-300 text-sm">
        Learn about our AI development philosophy and approach to building ethical AI systems.
      </p>
    </Link>
  );
};
