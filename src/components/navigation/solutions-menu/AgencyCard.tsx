
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
      className="block rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors p-4 h-[200px] flex flex-col"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-purple-500/20 flex items-center justify-center w-8 h-8">
          <Users className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-sm font-semibold text-white">Hanzo Agency</h3>
      </div>
      <p className="text-xs text-gray-400 leading-relaxed">
        Our AI-powered creative agency helps brands transform their digital presence. We specialize in crafting cutting-edge solutions that drive engagement and conversion with innovative AI-driven strategies and tools.
      </p>
    </a>
  );
};
