
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { toast } from "sonner";

const DemoComponentsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Updated Components</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Check out these updated shadcn/ui components with Tailwind v4 and React 19.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 p-8 rounded-lg border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Form Elements</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter username" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework" className="w-full">
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="theme-mode" />
                <Label htmlFor="theme-mode">Dark mode</Label>
              </div>
              
              <RadioGroup defaultValue="react19">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="react19" id="react19" />
                  <Label htmlFor="react19">React 19</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="react18" id="react18" />
                  <Label htmlFor="react18">React 18</Label>
                </div>
              </RadioGroup>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 p-8 rounded-lg border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Interactive Components</h3>
            
            <div className="space-y-6">
              <Tabs defaultValue="buttons" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buttons">Buttons</TabsTrigger>
                  <TabsTrigger value="accordion">Accordion</TabsTrigger>
                </TabsList>
                <TabsContent value="buttons" className="pt-4 space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default" onClick={() => toast.success("Button clicked!")}>
                      Default
                    </Button>
                    <Button variant="secondary" onClick={() => toast.info("Secondary action")}>
                      Secondary
                    </Button>
                    <Button variant="outline" onClick={() => toast.message("Outline clicked")}>
                      Outline
                    </Button>
                    <Button variant="destructive" onClick={() => toast.error("Destructive action")}>
                      Destructive
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </TabsContent>
                <TabsContent value="accordion" className="pt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Tailwind v4 Benefits</AccordionTrigger>
                      <AccordionContent>
                        Enjoy faster build times, smaller file sizes, and access to the latest CSS features with Tailwind v4.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>React 19 New Features</AccordionTrigger>
                      <AccordionContent>
                        React 19 includes automatic batching, transitions, and suspense support for data fetching.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How to Upgrade</AccordionTrigger>
                      <AccordionContent>
                        Follow our step-by-step guide to upgrade your existing projects to Tailwind v4 and React 19.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="text-white border-[#fd4444]/30 hover:border-[#fd4444]/50"
            onClick={() => window.open("https://v4.shadcn.com", "_blank")}
          >
            View All Components
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoComponentsSection;
