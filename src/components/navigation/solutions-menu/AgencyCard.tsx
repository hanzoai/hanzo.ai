
import { Users } from "lucide-react";

interface AgencyCardProps {
  onCardClick: () => void;
}

export const AgencyCard = ({ onCardClick }: AgencyCardProps) => {
  return (
    <a 
      href="https://hanzo.agency" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors p-5 h-[170px] flex flex-col"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-purple-500/20">
          <Users className="h-5 w-5 text-purple-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-base font-semibold text-white">Hanzo Agency</h3>
      </div>
      <p className="text-gray-400 text-sm mb-auto line-clamp-2">
        Our AI-powered creative agency helps brands transform their digital presence.
      </p>
      <div className="text-purple-400 text-sm hover:text-purple-300 mt-2">
        Visit Hanzo Agency
      </div>
    </a>
  );
};
