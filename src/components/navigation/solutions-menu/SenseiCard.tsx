
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
      className="block rounded-xl bg-gradient-to-b from-green-900/50 to-teal-900/50 border border-green-500/20 cursor-pointer hover:border-green-500/40 transition-colors p-4 h-[200px] flex flex-col"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-green-500/20 flex items-center justify-center w-8 h-8">
          <Shield className="h-4 w-4 text-green-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-sm font-semibold text-white">Sensei Group</h3>
      </div>
      <p className="text-xs text-gray-400 leading-relaxed">
        Partner with our collective of CXOs and experts to implement enterprise solutions. Our team brings decades of experience delivering transformational technology and business outcomes across industries with strategic implementation and expert guidance.
      </p>
    </a>
  );
};
