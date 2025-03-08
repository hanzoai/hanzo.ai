
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tweets = [
  {
    name: "Bob Jones",
    handle: "@heybobjones",
    content: "Installed @umami_software with @Hanzo in 60 seconds. Then did it again on AWS with a new Ubuntu 24 instance, Docker, Nginx, Postgres, Certbot and Cloudflare in 60 minutes.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Fabio Coelho",
    handle: "@fccoelho7",
    content: "this week I swapped @heroku with @Hanzo, no more annoying redis/postgres obligatory updates anymore.. in love with Hanzo's docker support",
    avatar: "/placeholder.svg"
  },
  {
    name: "Lyes",
    handle: "@lyker_zi",
    content: "There is an easier option. Deploying literally anything on @Hanzo",
    avatar: "/placeholder.svg"
  },
  {
    name: "Benjamin Klieger",
    handle: "@BenjaminKlieger",
    content: "\"Ship your apps, databases, and more to production in seconds.\"@Hanzo is not exaggerating, it's a breeze to deploy. Bringing Infinite Bookshelf online with a custom domain took minutes… and that just because I had to create a Dockerfile!",
    avatar: "/placeholder.svg"
  },
  {
    name: "kinsyu",
    handle: "@kinsyudev",
    content: "Addicted to organising my services in @Hanzo",
    avatar: "/placeholder.svg"
  },
  {
    name: "Sam Newby",
    handle: "@SamNewby_",
    content: "The UX in deploying a new app on @Hanzo is probably the best I've ever used. Spinning up a new MySQL database was so easy and fast.",
    avatar: "/placeholder.svg"
  },
  {
    name: "flavio",
    handle: "@flaviocopes",
    content: "I'm using @Hanzo_App to get a PostgreSQL database in the cloud and tbh it feels like magic",
    avatar: "/placeholder.svg"
  },
  {
    name: "Kyle McDonald",
    handle: "@kpmdev",
    content: "Damn, @Hanzo is by far the fastest I've ever got up and running on a host. What an insanely good experience.",
    avatar: "/placeholder.svg"
  }
];

const DeveloperLove = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">…and loved by developers</h2>
          <div className="flex justify-center">
            <a 
              href="https://twitter.com/search?q=hanzo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Join nearly 1M developers building with Hanzo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tweets.map((tweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-900/50 rounded-xl p-4 border border-gray-800"
            >
              <div className="flex items-center mb-3">
                <img
                  src={tweet.avatar}
                  alt={tweet.name}
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-white">{tweet.name}</h4>
                  <p className="text-sm text-gray-400">{tweet.handle}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{tweet.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperLove;
