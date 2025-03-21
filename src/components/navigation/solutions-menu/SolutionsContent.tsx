
import { solutions } from "@/constants/navigation";
import { SolutionCategory } from "./SolutionCategory";
import { AgencyCard } from "./AgencyCard";
import { SenseiCard } from "./SenseiCard";

interface SolutionsContentProps {
  onCloseMenu: () => void;
}

export const SolutionsContent = ({ onCloseMenu }: SolutionsContentProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 grid grid-cols-2 gap-12">
        {solutions.map((category, idx) => (
          <SolutionCategory
            key={idx}
            title={category.title}
            items={category.items}
            onItemClick={onCloseMenu}
          />
        ))}
      </div>

      <div className="w-72 space-y-4 shrink-0">
        <AgencyCard onCardClick={onCloseMenu} />
        <SenseiCard onCardClick={onCloseMenu} />
      </div>
    </div>
  );
};
