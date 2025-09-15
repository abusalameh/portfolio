"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "./Particles";
import BlurText from "./BlurText";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero section - Introduction"
    >
      <Particles count={30} color="rgba(59, 130, 246, 0.08)" />
      <div className="max-w-7xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-full  bg-gray-800 flex items-center justify-center">
            <Image
              src="/me.jpg"
              alt="Professional headshot of Raja Abu Salameh, Senior Software Engineer"
              width={400}
              height={400}
              className="rounded-full object-cover w-44 h-44"
              priority
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            role="heading"
            aria-level={1}
          >
            <BlurText
              text="Raja Abu Salameh"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => console.log("Animation complete")}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center"
            />
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 font-medium flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BlurText
              text="Senior Software Engineer"
              delay={500}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => console.log("Animation complete")}
              className="text-gray-600"
            />
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experienced Senior Software Engineer with 8+ years in full-stack
            development. Specialized in creating high-performance web
            applications using modern technologies like React, Vue, Laravel, and
            Node.js. Proven track record of delivering scalable solutions that
            improve user experience and drive business growth.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="https://e39ruttpcb.ufs.sh/f/vRZwh4VYrDdRIlloCkaT754ALmJbotdRP1n2WChsz9ylX0rj"
              download="RajaAbuSalameh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out leading-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Download Raja Abu Salameh's CV as PDF"
            >
              <span className="leading-none">Download CV</span>
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                const services = document.getElementById("services");
                if (services) {
                  services.scrollIntoView({ behavior: "smooth" });
                }
              }}
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 ease-in-out leading-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Navigate to services section to explore my work"
            >
              <span className="leading-none">Explore My Work</span>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Soft gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
