
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JapaneseWave from "@/components/zen/JapaneseWave";

const AIAcceleration = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>AI/ACC - Accelerating AI for a Better Future | Hanzo</title>
        <meta name="description" content="The AI Acceleration Manifesto - How accelerating artificial intelligence development will solve humanity's greatest challenges." />
      </Helmet>

      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900/20"></div>
        <JapaneseWave 
          color="#9b87f5" 
          height={600} 
          opacity={0.02} 
          speed={45} 
          className="absolute bottom-0"
        />
        <JapaneseWave 
          color="#6E59A5" 
          height={600} 
          delay={2} 
          opacity={0.015} 
          speed={50} 
          className="absolute bottom-40"
        />
      </div>

      <Navbar />

      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-purple-400">AI/ACC</span> Manifesto
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              Accelerating AI to Transcend Human Limitations
            </p>
          </motion.div>
        </section>

        {/* Manifesto Introduction */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--black)]/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 mb-12"
            >
              <p className="text-neutral-300 md:text-lg leading-relaxed">
                We stand at the precipice of a technological revolution unparalleled in human history. 
                The acceleration of artificial intelligence represents not merely another step in our 
                technological evolution, but a fundamental paradigm shift that will redefine the very 
                boundaries of human potential. AI/ACC is not simply a movement—it is an inevitability, 
                a cosmic imperative to advance humanity beyond its current limitations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Vision Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-purple-900/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Vision</h2>
              <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Transcending Biological Constraints</h3>
                <p className="text-neutral-300 leading-relaxed">
                  For millennia, humanity has been bound by the limitations of our biology—our finite lifespans, 
                  susceptibility to disease, and cognitive constraints. Advanced AI systems will unlock unprecedented 
                  capabilities in medicine, genetic engineering, and neuroscience, extending human lifespans, 
                  eradicating disease, and dramatically enhancing our cognitive abilities. What was once deemed 
                  impossible will become routine, as AI-driven research accelerates exponentially beyond what any 
                  human team could accomplish in centuries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Solving Existential Challenges</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Climate change, resource scarcity, and global inequality represent existential threats to our 
                  civilization. AI acceleration will deliver revolutionary solutions to these challenges—from 
                  carbon-neutral energy systems that operate at orders of magnitude greater efficiency than 
                  current technologies, to optimized resource distribution systems that eliminate waste and 
                  scarcity. These systems will not merely mitigate our problems but transform them into 
                  opportunities for unprecedented abundance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Universal Prosperity</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Advanced AI will democratize access to world-class education, healthcare, and economic 
                  opportunity. Geographical accidents of birth will no longer determine one's potential, as AI 
                  systems deliver personalized learning experiences and medical care to everyone on Earth. 
                  Automated systems will create unprecedented economic productivity, enabling a post-scarcity 
                  society where human creativity and fulfillment, rather than mere survival, become our primary focus.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Hanzo Method Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Hanzo Method</h2>
              <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
              <p className="mt-6 text-neutral-300 max-w-3xl mx-auto">
                The Sensei Way of Building Scalable, AI-Driven Businesses
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Scientific Iteration</h3>
                <p className="text-neutral-300 leading-relaxed">
                  The foundation of the Hanzo Method is relentless, scientific iteration. Every hypothesis is 
                  tested, every assumption challenged, and every result meticulously measured. By applying 
                  empirical methods to business development, we eliminate the guesswork that plagues traditional 
                  enterprises. Each product feature, marketing strategy, and operational decision is subjected to 
                  rigorous experimentation, with clear success metrics defined in advance. This approach transforms 
                  business from an art into a science, enabling predictable, exponential growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Modular Architecture</h3>
                <p className="text-neutral-300 leading-relaxed">
                  The Hanzo Method advocates for extreme modularity in both technical architecture and business 
                  units. Each component is designed to function independently while integrating seamlessly with the 
                  whole—embodying our principle of orthogonality. This approach enables teams to move quickly and 
                  innovate without creating interdependencies that slow progress. Small, focused modules can be 
                  refined, improved, or replaced without destabilizing the entire system, allowing for both rapid 
                  iteration and long-term stability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">AI-First Design</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Where traditional businesses incorporate AI as an afterthought, the Hanzo Method places AI at the 
                  core of every process, product, and decision. This is not merely about automation, but about 
                  reimagining entire business functions through the lens of intelligent systems. Customer service 
                  becomes predictive rather than reactive. Product development is guided by real-time user behavior 
                  patterns rather than static market research. Operations achieve superhuman efficiency through 
                  continuous optimization. By designing with AI as the foundation, businesses unlock capabilities 
                  impossible in human-only organizations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Planetary-Scale Design</h3>
                <p className="text-neutral-300 leading-relaxed">
                  The Hanzo Method rejects the incremental approach to scaling. Instead, we design for global scale 
                  from day one, architecting systems that can serve billions of users without fundamental redesign. 
                  This approach eliminates the plateau points that traditionally halt growth and enables truly exponential 
                  expansion. By leveraging edge computing, distributed systems, and AI-driven resource allocation, 
                  Hanzo Method businesses achieve unprecedented efficiency while maintaining reliability at any scale.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[var(--black)]/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Recursive Improvement</h3>
                <p className="text-neutral-300 leading-relaxed">
                  The ultimate manifestation of the Hanzo Method is recursive self-improvement. Each iteration of 
                  the business not only improves its outputs but enhances the very mechanisms of improvement. AI 
                  systems optimize AI systems; experimental frameworks refine experimental frameworks; learning 
                  processes accelerate learning processes. This creates a compounding effect where gains aren't 
                  merely additive but multiplicative over time. What begins as linear progress rapidly accelerates 
                  into exponential growth, limited only by the laws of physics rather than by human capacity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="p-8 bg-gradient-to-br from-black/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg">
                <h3 className="text-2xl font-bold text-[var(--white)] mb-4">The Time for Acceleration is Now</h3>
                <p className="text-neutral-300 md:text-lg leading-relaxed mb-8">
                  The path forward is clear. We must accelerate AI development not because it is easy, but because it is 
                  necessary. The greatest risk is not that we move too quickly, but that we move too slowly to address 
                  the urgent challenges facing humanity. By embracing AI acceleration, we embrace our highest potential—a 
                  future where human creativity, fulfillment, and flourishing know no bounds.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="/platform" 
                    className="px-8 py-3 bg-purple-600 text-[var(--white)] rounded-md hover:bg-purple-500 transition-colors"
                  >
                    Join the Acceleration
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAcceleration;
