
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Build and Deploy",
    description: "Craft a complete full-stack application with a powerful visual canvas",
    details: "Hanzo builds and deploys any combination of services, volumes, and databases from GitHub or Docker.",
    image: "/placeholder.svg",
    replaces: ["docker logo", "helm logo", "heroku logo", "digitalocean logo", "cloudrun logo"]
  },
  {
    title: "Network and Connect",
    description: "Interconnect your application seamlessly with highly performant networking",
    details: "Hanzo provides automated service discovery, blazing fast networking, and support for any protocol, all out of the box.",
    image: "/placeholder.svg",
    replaces: ["envoy logo", "cilium logo", "nginx logo", "istio logo", "haproxy logo"]
  },
  {
    title: "Scale and Grow",
    description: "Scale your applications with intuitive vertical and horizontal scaling",
    details: "Hanzo dynamically scales highly performant servers, storage, and networking to meet application demands.",
    image: "/placeholder.svg",
    replaces: ["kubernetes", "amazon-ecs logo", "nomad logo", "betterstack logo"]
  },
  {
    title: "Monitor and Observe",
    description: "Fix code faster with fully configurable observability",
    details: "Hanzo provides precise logging, metrics, alerting, profiles, traces, and trend inspection without any code changes.",
    image: "/placeholder.svg",
    replaces: ["datadog logo", "sentry logo", "opentele logo"]
  },
  {
    title: "Evolve and Collaborate",
    description: "Accelerate your development lifecycle with environments, staged changes, and pull request deploys",
    details: "Hanzo allows your team to make changes in one environment, and seamlessly re-apply them in another without risk of breaking production.",
    image: "/placeholder.svg",
    replaces: ["terraform logo", "spacelift logo"]
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-32 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-xl text-gray-300 mb-4">{feature.description}</p>
              <p className="text-gray-400 mb-6">{feature.details}</p>
              
              <a href="#learn-more" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-2">Replaces</p>
                <div className="flex flex-wrap gap-4">
                  {feature.replaces.map((replace, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
                      {replace}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-gray-900/50 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
