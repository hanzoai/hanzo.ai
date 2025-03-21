
import { Shield } from "lucide-react";
import { solutions } from "@/constants/navigation";
import { getIcon } from "@/constants/iconMappings";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const SolutionsMenu = () => {
  const [open, setOpen] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);
  const navigate = useNavigate();
  
  // Hover buffer timing to prevent quick disappearance
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Only close if it wasn't clicked open
    if (!clickedOpen) {
      closeTimeout = setTimeout(() => {
        setOpen(false);
      }, 300); // 300ms delay before closing
    }
  };

  const handleSolutionsClick = () => {
    setClickedOpen(!clickedOpen);
    setOpen(!open);
  };

  // Close when clicking outside
  const handleOutsideClick = () => {
    if (clickedOpen) {
      setClickedOpen(false);
      setOpen(false);
    }
  };

  const renderSolutionItems = (category: { title: string; items: string[] }) => {
    // Limit to 8 items per category
    const displayItems = category.items.slice(0, 8);
    const hasMore = category.items.length > 8;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {displayItems.map((item: string) => {
            const Icon = getIcon(item);
            const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link 
                to={`/solutions/${itemSlug}`} 
                key={item} 
                className="flex items-start space-x-3 group"
                onClick={() => {
                  setOpen(false);
                  setClickedOpen(false);
                }}
              >
                <Icon className="h-5 w-5 text-gray-400 group-hover:text-white mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                  <div className="text-sm text-gray-500">Solutions for {item}</div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {hasMore && (
          <div className="text-right">
            <Link 
              to="/solutions" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
              onClick={() => {
                setOpen(false);
                setClickedOpen(false);
              }}
            >
              View more {category.title.toLowerCase()}
              <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <Popover 
        open={open || clickedOpen}
        onOpenChange={(newOpen) => {
          if (!newOpen) {
            setClickedOpen(false);
            setOpen(false);
          }
        }}
      >
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PopoverTrigger asChild>
            <NavigationButton onClick={handleSolutionsClick}>Solutions</NavigationButton>
          </PopoverTrigger>
          
          {/* Extended hover area */}
          {open && !clickedOpen && (
            <div 
              className="absolute left-0 w-full h-10 -bottom-10"
              onMouseEnter={handleMouseEnter}
            />
          )}
        </div>
        
        <PopoverContent 
          className="w-[1200px] p-6 bg-black border-gray-800 z-50"
          sideOffset={8}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onInteractOutside={handleOutsideClick}
        >
          <div className="flex gap-6">
            <div className="flex-1 grid grid-cols-2 gap-12">
              {solutions.map((category, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <Link 
                      to="/solutions" 
                      className="text-purple-400 hover:text-purple-300 text-sm"
                      onClick={() => {
                        setOpen(false);
                        setClickedOpen(false);
                      }}
                    >
                      View all
                    </Link>
                  </div>
                  {renderSolutionItems(category)}
                </div>
              ))}
            </div>

            <div className="w-64 space-y-4">
              {/* Hanzo Agency Card */}
              <a 
                href="https://hanzo.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors p-6 flex flex-col"
              >
                <div className="p-3 rounded-lg bg-purple-500/20 self-start mb-4">
                  <Shield className="h-5 w-5 text-purple-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Hanzo Agency</h3>
                <p className="text-gray-400 text-sm">
                  Our AI-powered creative agency helps brands transform their digital presence with advanced design 
                  and marketing strategies.
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-purple-400 text-sm hover:text-purple-300 flex items-center">
                    Visit Hanzo Agency →
                  </span>
                </div>
              </a>
              
              {/* Sensei Group Card - Smaller height */}
              <a 
                href="https://sensei.group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-xl bg-gradient-to-b from-green-900/50 to-teal-900/50 border border-green-500/20 cursor-pointer hover:border-green-500/40 transition-colors p-4 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Shield className="h-4 w-4 text-green-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-md font-semibold text-white">Sensei Group</h3>
                </div>
                <p className="text-gray-400 text-xs">
                  Partner with our collective of CXOs and experts to implement enterprise solutions.
                </p>
                <span className="text-green-400 text-xs hover:text-green-300 flex items-center mt-2">
                  Contact Sensei Group →
                </span>
              </a>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
