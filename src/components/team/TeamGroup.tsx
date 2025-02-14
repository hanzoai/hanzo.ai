
import { LucideIcon } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

interface TeamGroupProps {
  title: string;
  members: TeamMember[];
}

const TeamGroup = ({ title, members }: TeamGroupProps) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamGroup;
