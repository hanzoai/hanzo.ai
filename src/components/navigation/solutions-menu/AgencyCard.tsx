
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export const AgencyCard = () => {
  return (
    <Link 
      to="/agency"
      className="block p-4 rounded-xl bg-gradient-to-b from-blue-900/30 to-indigo-900/30 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold text-white">Agency Program</h4>
        <ExternalLink className="h-4 w-4 text-blue-400" />
      </div>
      <p className="text-neutral-300 text-sm">
        Join our agency partner program and get exclusive benefits for your clients.
      </p>
    </Link>
  );
};
