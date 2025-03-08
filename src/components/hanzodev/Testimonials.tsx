
import React from "react";
import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bob Xu",
      handle: "@Bobbxu",
      avatar: "",
      quote: "Impressive! Hanzo Dev seems like a game-changer for software development. AI agents streamlining coding tasks - that's the future we've been waiting for."
    },
    {
      name: "Desmond Grealy",
      handle: "@k_nearest",
      avatar: "",
      quote: "I look at a lot of Coding Agent tools, and I think this one is pretty slick."
    },
    {
      name: "Anna Johnson",
      handle: "@thisisprad",
      avatar: "",
      quote: "Wow absolute game changer with Hanzo - run agents in CI/CD and local development."
    },
    {
      name: "Alan Tan",
      handle: "@alanytan",
      avatar: "",
      quote: "Magic :-)"
    },
    {
      name: "John Rush",
      handle: "@johnrushx",
      avatar: "",
      quote: "Congrats, @thisisHanzodev is my favorite winner of all DevHunt winners so far."
    },
    {
      name: "Kevin J. Scott",
      handle: "CTO @ PGA",
      avatar: "",
      quote: "AI agents 🤖 are completely changing how software is created. Agent systems like Hanzo are the future."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Developers.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what the community is saying about Hanzo Dev.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
              variants={item}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-gray-400 flex items-center">
                    <Twitter className="h-3.5 w-3.5 mr-1 text-blue-400" />
                    {testimonial.handle}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
