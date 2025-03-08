
import { Brain, Code2, Bot, Blocks, ChartBar, Database, Calculator, Scale, User, BarChart, LucideIcon, Bot as BotIcon, CodepenIcon } from "lucide-react";
import { products } from "@/constants/navigation";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProductItem {
  name: string;
  icon: LucideIcon;
  description: string;
  link: string;
}

export const ProductsMenu = () => {
  const [open, setOpen] = useState(false);

  const dxPlatformItems: ProductItem[] = [
    {
      name: "AI",
      icon: Brain,
      description: "Integrate AI capabilities into your applications",
      link: "/platform#ai"
    },
    {
      name: "Bot",
      icon: BotIcon,
      description: "Build conversational bots for your business",
      link: "/platform#bot"
    },
    {
      name: "Code",
      icon: Code2,
      description: "Powerful code generation and analysis",
      link: "/platform#code"
    },
    {
      name: "Dev",
      icon: CodepenIcon,
      description: "Developer tools and productivity enhancers",
      link: "/dev"
    }
  ];

  const cloudItems: ProductItem[] = [
    {
      name: "AI",
      icon: Brain,
      description: "Managed AI infrastructure and models",
      link: "/cloud#ai"
    },
    {
      name: "Analytics",
      icon: BarChart,
      description: "Data analytics and visualization tools",
      link: "/cloud#analytics"
    },
    {
      name: "Base",
      icon: Database,
      description: "Managed database and backend services",
      link: "/cloud#base"
    },
    {
      name: "Commerce",
      icon: Scale,
      description: "E-commerce platform and payment processing",
      link: "/cloud#commerce"
    },
    {
      name: "Identity",
      icon: User,
      description: "User authentication and identity management",
      link: "/cloud#identity"
    },
    {
      name: "Marketing",
      icon: ChartBar,
      description: "Marketing automation and campaign tools",
      link: "/cloud#marketing"
    },
    {
      name: "Payments",
      icon: Calculator,
      description: "Payment processing and subscription billing",
      link: "/cloud#payments"
    }
  ];

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <NavigationButton onHoverStart={() => setOpen(true)}>Products</NavigationButton>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[720px] p-6 bg-black border-gray-800"
          sideOffset={8}
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Link to="/platform">
                <h3 className="text-lg font-semibold text-white mb-4 hover:text-gray-300 transition-colors">
                  DX Platform
                </h3>
              </Link>
              <div className="space-y-4">
                {dxPlatformItems.map((item) => (
                  <Link to={item.link} key={item.name} className="flex items-start space-x-3 group">
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                    <div>
                      <div className="text-gray-300 group-hover:text-white font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <Link to="/cloud">
                <h3 className="text-lg font-semibold text-white mb-4 hover:text-gray-300 transition-colors">
                  Cloud
                </h3>
              </Link>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {cloudItems.map((item) => (
                  <Link to={item.link} key={item.name} className="flex items-start space-x-3 group">
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                    <div>
                      <div className="text-gray-300 group-hover:text-white font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
