
import { MessageSquare, Users, HelpCircle, Book, Code, Globe } from "lucide-react";
import { resources } from "@/constants/navigation";
import {
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";

export const ResourcesMenu = () => {
  return (
    <>
      <PopoverTrigger asChild>
        <NavigationButton>Resources</NavigationButton>
      </PopoverTrigger>
      <PopoverContent 
        onMouseLeave={(e) => {
          const trigger = document.activeElement as HTMLElement;
          trigger?.blur();
        }}
        className="w-[480px] p-6 bg-black/95 backdrop-blur-xl border-gray-800"
      >
        <div className="grid grid-cols-2 gap-8">
          {resources.map(category => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.slice(0, 4).map(item => {
                  const Icon = item.name.includes('Forum') ? MessageSquare :
                             item.name.includes('Community') ? Users :
                             item.name.includes('Help') ? HelpCircle :
                             item.name.includes('Documentation') ? Book :
                             item.name.includes('API') ? Code : Globe;

                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target={item.url.startsWith('http') ? '_blank' : undefined}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-3 group"
                    >
                      <Icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                      <div>
                        <div className="text-gray-300 group-hover:text-white font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Description for {item.name}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </>
  );
};
