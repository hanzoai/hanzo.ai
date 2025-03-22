
import React from "react";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import ViewAllButton from "./ViewAllButton";
import { ProductItem } from "@/components/navigation/products-menu/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DXPlatformSectionProps {
  products: ProductItem[];
}

const DXPlatformSection: React.FC<DXPlatformSectionProps> = ({ products }) => {
  return (
    <div className="mb-20">
      <SectionHeader
        badge="DX Platform"
        badgeColor="bg-purple-900/30 border border-purple-500/30 text-purple-300"
        title="Developer Experience Tools for AI Engineering"
        description="Supercharge your AI development workflow with purpose-built tools for engineers."
      />

      {/* Desktop layout - Carousel for larger screens */}
      <div className="hidden md:block relative mb-8">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="h-full">
                  <ProductCard
                    icon={<product.icon className="text-purple-400" />}
                    title={product.name}
                    description={product.description}
                    color="bg-purple-900/30"
                    hoverColor="bg-purple-600/40"
                    link={product.link || "#"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex items-center justify-end gap-2 mt-6">
            <CarouselPrevious className="relative -top-0 -left-0 bg-gray-800/50 hover:bg-gray-700/70 border-gray-700" />
            <CarouselNext className="relative -top-0 -right-0 bg-gray-800/50 hover:bg-gray-700/70 border-gray-700" />
          </div>
        </Carousel>
      </div>

      {/* Mobile layout - Scrollable horizontal list for smaller screens */}
      <div className="md:hidden mb-8">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4 pb-4 px-1">
            {products.map((product, index) => (
              <div key={index} className="w-[300px] flex-shrink-0">
                <ProductCard
                  icon={<product.icon className="text-purple-400" />}
                  title={product.name}
                  description={product.description}
                  color="bg-purple-900/30"
                  hoverColor="bg-purple-600/40"
                  link={product.link || "#"}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <ViewAllButton 
        href="/platform"
        text="View all DX Platform tools"
        hoverColor="purple"
      />
    </div>
  );
};

export default DXPlatformSection;
