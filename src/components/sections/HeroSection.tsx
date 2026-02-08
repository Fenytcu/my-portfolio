"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

// Tech Stack Sidebar Component (Left Side)
const TechStackSidebar = () => {
  const techLogos = [
    { name: "JavaScript", src: "/assets/js-logo.png" },
    { name: "CSS", src: "/assets/css-logo.png" },
    { name: "HTML", src: "/assets/html-logo.png" },
    { name: "React", src: "/assets/react-logo.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="hidden md:block absolute left-[120px] top-[107.57px] z-20"
    >
      <div className="w-[113px] h-[408.43px] rounded-[50px] border-[1.36px] border-[#B76080] bg-white/5 backdrop-blur-md flex flex-col justify-between items-center py-10 shadow-lg">
        {techLogos.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              className="w-[69.43px] h-[69.43px] border-[1.36px] border-[#B76080] rounded-full flex items-center justify-center bg-white/5 overflow-hidden"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={38}
                height={38}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Statistics Component (Right Side)
const Statistics = () => {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "3", label: "Project Delivered" },
    { value: "50", label: "Clients Worldwide" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="md:absolute md:right-[120px] md:top-[237px] w-full md:w-[222px] z-40 flex flex-col gap-5 px-8 md:px-0 mt-4 md:mt-0"
    >
      <div className="grid grid-cols-2 gap-8 md:flex md:flex-col md:gap-5">
        {stats.map((stat, index) => (
          <div key={stat.label} className="w-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="text-left w-full"
            >
              <div className="text-[32px] md:text-[48px] font-bold font-montserrat text-white leading-none mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-[12px] md:text-[16px] text-white/90 font-semibold font-montserrat">
                {stat.label}
              </div>
            </motion.div>
            <div className="hidden md:block w-full h-[1px] bg-white/20 mt-5" />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full md:w-[222px] h-[56px] relative mt-4 md:mt-2"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="h-full w-full"
        >
          <Link href="#contact" className="w-full h-full block">
            <Button
              size="lg"
              className="w-full h-full bg-[#F3B64C] hover:bg-[#FBBF24] text-black font-semibold rounded-full px-4 py-3 text-base shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-start gap-2 relative"
            >
              <span className="ml-2 font-semibold text-md">Contact Me</span>
              <div className="absolute right-0 top-0 h-full aspect-square flex items-center justify-center">
                <div className="w-[36px] h-[36px] rounded-full bg-black flex items-center justify-center text-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Available for Hire Badge (Top Right)
const AvailableForHireBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="md:absolute md:top-[227px] md:left-[720px] absolute top-[-40px] left-1/2 -translate-x-1/2 flex justify-center z-20"
    >
      <div className="inline-flex items-center gap-2 bg-[#860D39] text-white text-xs md:text-md font-semibold px-4 py-2 rounded-full border border-[#B76080] shadow-lg">
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 md:w-4 md:h-4 bg-[#E26190] rounded-full"
        />
        Available for Hire
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section 
      className="relative w-full h-fit md:min-h-[1024px] md:h-[1024px] overflow-hidden bg-[#A53860] flex flex-col items-center"
      style={{ maxWidth: '1440px' }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Tech Stack Sidebar - Left */}
      <TechStackSidebar />

      {/* Main Content */}
      <div className="relative flex flex-col items-center md:h-full md:pt-0 pt-16 w-full max-w-[1440px]">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="md:absolute md:left-[120px] md:top-[614px] z-30 text-center md:text-left px-8 md:px-0 max-w-[451px] flex flex-col gap-3 md:gap-[14px] mb-4 md:mb-0"
        >
          {/* Mic Icon */}
          <div className="flex justify-start items-center mb-2 md:mb-[14px] mt-[24px]">
            <div className="w-[48px] h-[48px] md:w-[63px] md:h-[63px] border-[1.31px] border-[#B76080] rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md">
              <div className="relative w-[14px] h-[20px] md:w-[18px] md:h-[26px]">
                <Image
                  src="/assets/icon-mic.png"
                  alt="Mic Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          <h2 className="text-lg md:text-xl text-white font-bold font-montserrat text-left">
            Hi, I'm Edwin Anderson
          </h2>
          <p className="text-white/90 text-sm md:text-lg leading-relaxed font-montserrat text-left">
            a frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.
          </p>
        </motion.div>

        {/* Statistics - Right */}
        <Statistics />

        {/* Available for Hire Badge and Portrait Container */}
        <div className="relative w-full h-[429px] md:h-full md:absolute md:top-0 md:left-0 mt-[59px] md:mt-0 md:overflow-visible">
          <AvailableForHireBadge />

          {/* Junior Text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute top-[40px] left-[20px] md:top-[188px] md:left-[301px] rotate-[-12.34deg] z-30"
          >
            <span
              className="text-[60px] md:text-[113.23px] text-white font-normal italic"
              style={{ 
                fontFamily: "var(--font-bonheur-royale), 'Dancing Script', cursive",
                fontWeight: 400
              }}
            >
              Junior
            </span>
          </motion.div>
          
          {/* FRONTEND DEVELOPER Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute top-[100px] md:top-[284px] left-1/2 -translate-x-1/2 z-0 whitespace-nowrap"
          >
            <h1 
              className="flex flex-col items-center select-none font-anton uppercase text-[#F3B64C] gap-2 md:gap-6"
            >
              <span className="text-[110px] md:text-[187.76px] leading-[0.8] tracking-[-0.02em]">
                FRONTEND
              </span>
              <span className="text-[100px] md:text-[168.82px] leading-[0.8] tracking-[-0.02em]">
                DEVELOPER
              </span>
            </h1>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 md:top-[289px] left-1/2 -translate-x-1/2 z-20 w-full md:w-auto flex justify-center md:block"
          >
            <div className="relative w-[300px] h-[329px] md:w-[610px] md:h-[735px]"> 
              <Image
                src="/assets/portrait.png"
                alt="Edwin Anderson - Frontend Developer"
                fill
                className="object-contain object-bottom md:object-top"
                priority
                sizes="(max-width: 768px) 300px, 610px"
              />
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 md:top-[954px] md:left-[658px] md:translate-x-0 z-30"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-white text-[12px] md:text-[17.15px] font-medium flex flex-col items-center gap-2"
            >
              <span className="font-montserrat">Scroll Down</span>
              <div className="relative w-[10px] h-[15px] md:w-[12px] md:h-[18px]">
                <Image
                  src="/assets/scroll-down.png"
                  alt="Scroll Down"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="absolute top-32 right-32 w-64 h-64 rounded-full bg-[#FCD34D]/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-purple-500/20 blur-[120px] pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
