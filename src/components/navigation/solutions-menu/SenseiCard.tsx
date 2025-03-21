
import { Shield } from "lucide-react";

interface SenseiCardProps {
  onCardClick: () => void;
}

export const SenseiCard = ({ onCardClick }: SenseiCardProps) => {
  return (
    <a 
      href="https://sensei.group" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-b from-green-900/50 to-teal-900/50 border border-green-500/20 cursor-pointer hover:border-green-500/40 transition-colors p-5 h-[170px] flex flex-col"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-green-500/20">
          <Shield className="h-5 w-5 text-green-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-base font-semibold text-white">Sensei Group</h3>
      </div>
      <p className="text-gray-400 text-sm mb-auto line-clamp-2">
        Partner with our collective of CXOs and experts to implement enterprise solutions.
      </p>
      <div className="text-green-400 text-sm hover:text-green-300 mt-2">
        Contact Sensei Group
      </div>
    </a>
  );
};
