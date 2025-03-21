
import { Shield, ExternalLink } from "lucide-react";

interface SenseiCardProps {
  onCardClick: () => void;
}

export const SenseiCard = ({ onCardClick }: SenseiCardProps) => {
  return (
    <a 
      href="https://sensei.group" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-b from-green-900/50 to-teal-900/50 border border-green-500/20 cursor-pointer hover:border-green-500/40 transition-colors p-4 h-[140px] flex flex-col"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 rounded-lg bg-green-500/20">
          <Shield className="h-4 w-4 text-green-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-sm font-semibold text-white">Sensei Group</h3>
      </div>
      <p className="text-gray-400 text-xs mb-2 line-clamp-2">
        Partner with our collective of CXOs and experts to implement enterprise solutions.
      </p>
      <span className="text-green-400 text-xs hover:text-green-300 flex items-center mt-auto">
        Contact Sensei Group <ExternalLink className="ml-1 h-3 w-3" />
      </span>
    </a>
  );
};
