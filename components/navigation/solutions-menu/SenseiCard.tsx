'use client'

import { Shield, ArrowRight } from "lucide-react";

interface SenseiCardProps {
  onCardClick: () => void;
}

export const SenseiCard = ({ onCardClick }: SenseiCardProps) => {
  return (
    <a
      href="https://sensei.group"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-b from-[#ff6b6b]/30 to-[#ff6b6b]/10 border border-[#ff6b6b]/20 cursor-pointer hover:border-[#ff6b6b]/40 transition-colors p-4 h-[200px] flex flex-col justify-between"
      onClick={onCardClick}
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-[#ff6b6b]/20 flex items-center justify-center w-8 h-8">
            <Shield className="h-4 w-4 text-[#ff6b6b]" strokeWidth={1.5} />
          </div>
          <h3 className="text-sm font-semibold text-[var(--white)]">Sensei Group</h3>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Accelerate enterprise transformation with our elite collective of CXOs and technology experts. We guide organizations through digital evolution with strategic implementation.
        </p>
      </div>
      <div className="flex items-center text-xs text-[#ff6b6b] font-medium group">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};
