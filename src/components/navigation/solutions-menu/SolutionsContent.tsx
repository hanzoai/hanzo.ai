
import { solutions } from "@/constants/navigation";
import { SolutionCategory } from "./SolutionCategory";
import { AgencyCard } from "./AgencyCard";
import { SenseiCard } from "./SenseiCard";
import { useIsMobile } from "@/hooks/use-mobile";

export const SolutionsContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}>
      <div className={`${isMobile ? 'w-full' : 'flex-1'} grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
        {solutions.map((category, idx) => (
          <SolutionCategory
            key={idx}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>

      <div className={`${isMobile ? 'w-full' : 'w-80'} space-y-4 shrink-0`}>
        <AgencyCard />
        <SenseiCard />
      </div>
    </div>
  );
};
