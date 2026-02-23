
import React from "react";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import ViewAllButton from "./ViewAllButton";
import { ProductItem } from "@/components/navigation/products-menu/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AICloudSectionProps {
  products: ProductItem[];
}

const AICloudSection: React.FC<AICloudSectionProps> = ({ products }) => {
  return (
    <div className="mb-20">
      <SectionHeader
        badge="AI Cloud"
        badgeColor="bg-[#fd4444]/20 border border-[#fd4444]/30 text-[#ff6b6b]"
        title="Scalable Infrastructure for AI Applications"
        description="Build high-performance AI applications with our suite of cloud services designed for AI workloads."
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
                    icon={<product.icon className="text-[#fd4444]" />}
                    title={product.name}
                    description={product.description}
                    color="bg-[#fd4444]/20"
                    hoverColor="bg-[#e03e3e]/40"
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
                  icon={<product.icon className="text-[#fd4444]" />}
                  title={product.name}
                  description={product.description}
                  color="bg-[#fd4444]/20"
                  hoverColor="bg-[#e03e3e]/40"
                  link={product.link || "#"}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <ViewAllButton 
        href="/ai"
        text="View all AI Cloud services"
        hoverColor="blue"
      />
    </div>
  );
};

export default AICloudSection;
