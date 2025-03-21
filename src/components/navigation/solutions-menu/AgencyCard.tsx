
import { Shield, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface AgencyCardProps {
  onCardClick: () => void;
}

export const AgencyCard = ({ onCardClick }: AgencyCardProps) => {
  return (
    <a 
      href="https://hanzo.agency" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors p-6 flex flex-col"
      onClick={onCardClick}
    >
      <div className="p-3 rounded-lg bg-purple-500/20 self-start mb-4">
        <Shield className="h-5 w-5 text-purple-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">Hanzo Agency</h3>
      <p className="text-gray-400 text-sm">
        Our AI-powered creative agency helps brands transform their digital presence with advanced design 
        and marketing strategies.
      </p>
      <div className="mt-auto pt-4">
        <span className="text-purple-400 text-sm hover:text-purple-300 flex items-center">
          Visit Hanzo Agency <ExternalLink className="ml-1 h-3 w-3" />
        </span>
      </div>
    </a>
  );
};
