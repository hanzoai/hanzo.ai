'use client'

import { Users, ArrowRight } from "lucide-react";

interface AgencyCardProps {
  onCardClick: () => void;
}

export const AgencyCard = ({ onCardClick }: AgencyCardProps) => {
  return (
    <a
      href="https://hanzo.agency"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-b from-white/30 to-white/10 border border-border cursor-pointer hover:border-white/40 transition-colors p-4 h-[200px] flex flex-col justify-between"
      onClick={onCardClick}
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-primary/20 flex items-center justify-center w-8 h-8">
            <Users className="h-4 w-4 text-foreground" strokeWidth={1.5} />
          </div>
          <h3 className="text-sm font-semibold text-[var(--white)]">Hanzo Agency</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Elevate your brand with our AI-powered creative agency. We craft advanced digital experiences that captivate audiences and deliver measurable business results.
        </p>
      </div>
      <div className="flex items-center text-xs text-foreground font-medium group">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};
