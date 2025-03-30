
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [{
  quote: "Hanzo has helped us to streamline our complex challenges and processes. Their suite of tools has made it easier for us to launch, scale, and innovate our business.",
  author: "Jennifer Smith",
  role: "Founder & CEO, Damon Motorcycles"
}, {
  quote: "Hanzo's digital solutions have empowered us to redefine success. Their platform has provided us with the tools we need to accelerate our growth and expand our reach.",
  author: "Marcus Chen",
  role: "Product Lead, Skully AR-1"
}, {
  quote: "We are impressed with Hanzo's pioneering approach to digital solutions. Their platform has helped us to transcend traditional boundaries and achieve new levels of success.",
  author: "Sarah Johnson",
  role: "CTO, Bellabeat"
}];

const brandLogos = [{
  name: "Sensei",
  logo: "https://sensei.partners/logo.png"
}, {
  name: "Damon Motorcycles",
  logo: "/placeholder.svg"
}, {
  name: "Skully AR-1",
  logo: "/placeholder.svg"
}, {
  name: "Triller",
  logo: "/placeholder.svg"
}, {
  name: "Bellabeat",
  logo: "/placeholder.svg"
}, {
  name: "Arca",
  logo: "/placeholder.svg"
}, {
  name: "ZOO",
  logo: "/placeholder.svg"
}, {
  name: "LUX",
  logo: "/placeholder.svg"
}];

const caseStudies = [{
  title: "Damon Motorcycles: Revolutionizing Electric Mobility",
  description: "How we helped Damon Motorcycles achieve unprecedented growth in their electric motorcycle platform through innovative digital solutions.",
  stats: {
    growth: "300%",
    timeframe: "6 months",
    roi: "450%"
  },
  videoUrl: "https://www.youtube.com/embed/your-video-id",
  learnMoreUrl: "https://sensei.group"
}, {
  title: "Skully AR-1: Transforming Motorcycle Safety",
  description: "A comprehensive digital transformation that revolutionized the AR helmet industry and had a record breaking crowdfunding campaign in first 24 hours.",
  stats: {
    efficiency: "200%",
    timeframe: "12 months",
    impact: "85%+"
  },
  videoUrl: "https://www.youtube.com/embed/your-video-id",
  learnMoreUrl: "https://sensei.group"
}];

const Testimonials = () => {
  return <section className="py-20 bg-[var(--black)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-[var(--white)]">Our Impact</h2>
          <p className="mt-4 text-lg text-neutral-300">Transforming businesses through innovation.</p>
        </div>

        {/* Brand Logos Scroll Area */}
        <div className="mb-16">
          <h3 className="text-xl font-display text-[var(--white)] mb-6">Trusted By Industry Leaders</h3>
          <ScrollArea className="w-full whitespace-nowrap rounded-lg">
            <div className="flex space-x-8 p-4">
              {brandLogos.map((brand, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex-shrink-0">
                  <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </motion.div>)}
            </div>
          </ScrollArea>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-display text-[var(--white)]">Featured Case Studies</h3>
            <Button variant="ghost" className="text-[var(--white)]">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Number milestone section - modified to use numbers and responsive layout */}
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex md:items-center md:space-x-6 mb-6 md:mb-0">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-[var(--white)]/10 flex items-center justify-center text-[var(--white)] font-semibold mr-3">1</div>
                  <h4 className="text-lg font-medium text-[var(--white)]">Analyze</h4>
                </div>
              </div>
            </div>
            
            <div className="flex md:items-center md:space-x-6 mb-6 md:mb-0">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-[var(--white)]/10 flex items-center justify-center text-[var(--white)] font-semibold mr-3">2</div>
                  <h4 className="text-lg font-medium text-[var(--white)]">Optimize</h4>
                </div>
              </div>
            </div>
            
            <div className="flex md:items-center md:space-x-6">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--white)]/10 flex items-center justify-center text-[var(--white)] font-semibold mr-3">3</div>
                  <h4 className="text-lg font-medium text-[var(--white)]">Scale</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe src={study.videoUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="p-6">
                  <h4 className="text-[var(--white)] mb-2 text-3xl font-normal">{study.title}</h4>
                  <p className="text-neutral-300 mb-4">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(study.stats).map(([key, value], i) => <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-[var(--white)]">{value}</div>
                        <div className="text-sm text-neutral-400">{key}</div>
                      </div>)}
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => window.open(study.learnMoreUrl, '_blank')}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>)}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl ring-1 ring-white/10">
              <p className="text-neutral-300 italic">{testimonial.quote}</p>
              <div className="mt-4">
                <p className="text-[var(--white)] font-semibold">{testimonial.author}</p>
                <p className="text-neutral-400">{testimonial.role}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
