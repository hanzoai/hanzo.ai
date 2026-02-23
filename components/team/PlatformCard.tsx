
import { LucideIcon } from "lucide-react";

interface PlatformCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const PlatformCard = ({ name, role, description, icon: Icon, gradient }: PlatformCardProps) => {
  return (
    <div className="relative group rounded-2xl border border-gray-800 bg-[var(--black)]/50 p-8 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out" />
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
        <Icon className="h-6 w-6 text-[var(--white)]" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-neutral-400 font-medium mb-3">{role}</p>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

export default PlatformCard;
