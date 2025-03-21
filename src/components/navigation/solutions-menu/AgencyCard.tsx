
import { Users, ExternalLink } from "lucide-react";

interface AgencyCardProps {
  onCardClick: () => void;
}

export const AgencyCard = ({ onCardClick }: AgencyCardProps) => {
  return (
    <a 
      href="https://hanzo.agency" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors p-4 h-[140px] flex flex-col"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 rounded-lg bg-purple-500/20">
          <Users className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-sm font-semibold text-white">Hanzo Agency</h3>
      </div>
      <p className="text-gray-400 text-xs mb-2 line-clamp-2">
        Our AI-powered creative agency helps brands transform their digital presence.
      </p>
      <span className="text-purple-400 text-xs hover:text-purple-300 flex items-center mt-auto">
        Visit Hanzo Agency <ExternalLink className="ml-1 h-3 w-3" />
      </span>
    </a>
  );
};
