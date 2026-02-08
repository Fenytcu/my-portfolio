"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const techStackData = [
    { name: "HTML", desc: "Crafting semantic, accessible HTML structures.", color: "#E44D26", icon: "/assets/html-logo.png" },
    { name: "CSS", desc: "Styling with modern CSS, animations, and layouts.", color: "#264DE4", icon: "/assets/css-logo.png" },
    { name: "JavaScript", desc: "Building interactive and dynamic web logic.", color: "#F7DF1E", icon: "/assets/js-logo.png" },
    { name: "React", desc: "Creating scalable UI with React components.", color: "#61DAFB", icon: "/assets/react-logo.png" },
    { name: "Next.js", desc: "Building performant, server-rendered web apps.", color: "#000000", icon: "/assets/react-logo.png" },
    { name: "Tailwind", desc: "Rapidly building custom UI with utility classes.", color: "#38B2AC", icon: "/assets/css-logo.png" },
    { name: "TypeScript", desc: "Ensuring type safety in large-scale apps.", color: "#3178C6", icon: "/assets/js-logo.png" },
    { name: "Figma", desc: "Designing prototypes and user interfaces.", color: "#F24E1E", icon: "/assets/icon-pixel.png" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? techStackData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % techStackData.length);
  };

  const getVisibleItems = () => {
    const items = [];
    // Show 2 items on mobile, 4 on desktop
    const itemCount = isMobile ? 2 : 4;
    
    for (let i = 0; i < itemCount; i++) {
      items.push(techStackData[(currentIndex + i) % techStackData.length]);
    }
    return items;
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#9E385E1A] pt-[40px] pb-20 md:py-20 flex flex-col items-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-[28px] md:text-[40px] font-bold font-montserrat text-[#0A0D12] mb-2">
          Code, Design, and Everything in Between
        </h2>
        <p className="text-[#0A0D12] font-montserrat text-[14px] md:text-[16px]">
          These are the technologies that power my workflow and bring ideas to life.
        </p>
      </motion.div>

      <div className="max-w-[920px] w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
        {getVisibleItems().map((tech, i) => {
          const isHighlighted = i % 2 === 0; // Alternating height/style pattern
          
          return (
            <motion.div
              key={`${tech.name}-${i}`} // Ensure unique key for animation reset
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center justify-center px-4 py-8 lg:px-4 lg:py-10 transition-all duration-300 text-center w-full max-w-[172.5px] lg:max-w-[215px] mx-auto min-h-[281px]`}
              style={{
                borderRadius: '100px',
                ...isHighlighted 
                  ? { background: '#F3B64C', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', border: '1px solid transparent' }
                  : { background: 'white', border: '1px solid #D5D7DA' }
              }}
              onMouseEnter={(e) => {
                if (!isHighlighted) {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isHighlighted) {
                  e.currentTarget.style.boxShadow = '';
                }
              }}
            >
              <div 
                className={`w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center mb-4 lg:mb-6 ${
                  isHighlighted ? "bg-white" : ""
                }`}
                style={{ backgroundColor: isHighlighted ? "#FFFFFF" : `${tech.color}15` }}
              >
                <Image src={tech.icon} alt={tech.name} width={32} height={32} className="lg:w-[40px] lg:h-[40px] object-contain" />
              </div>
              <h4 className="font-bold font-montserrat text-[16px] mb-2 uppercase text-[#0A0D12]">{tech.name}</h4>
              <p className="text-center text-[#475467] text-[14px] lg:text-[16px] leading-snug lg:leading-relaxed px-2 lg:px-0">
                {tech.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 mt-12 mb-[40px]">
        <button 
          onClick={handlePrev}
          className="w-[45px] h-[45px] rounded-full border border-[#D5D7DA] flex items-center justify-center hover:bg-gray-50 transition-colors bg-white hover:shadow-sm active:scale-95"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5 text-[#98A2B3]" />
        </button>
        <button 
          onClick={handleNext}
          className="w-[45px] h-[45px] rounded-full border border-[#D5D7DA] flex items-center justify-center hover:bg-gray-50 transition-colors bg-white hover:shadow-sm active:scale-95"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5 text-[#0A0D12]" />
        </button>
      </div>
    </section>
  );
};

export default TechStack;
