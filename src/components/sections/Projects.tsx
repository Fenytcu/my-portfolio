"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Portfolio 1",
      category: "Web Development",
      image: "/assets/Portfolio-Image1.png",
      tag: "Best Portfolio",
    },
    {
      title: "Portfolio 2",
      category: "Web Development",
      image: "/assets/Portfolio-Image2.png",
      tag: "Best Portfolio",
    },
    {
      title: "Portfolio 3",
      category: "Web Development",
      image: "/assets/Portfolio-Image3.png",
      tag: "Best Portfolio",
    },
    {
      title: "Portfolio 4",
      category: "Web Development",
      image: "/assets/Portfolio-Image1.png", // Reusing image 1
      tag: "Best Portfolio",
    },
    {
      title: "Portfolio 5",
      category: "Web Development",
      image: "/assets/Portfolio-Image2.png", // Reusing image 2
      tag: "Best Portfolio",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="w-full bg-white pt-[40px] pb-24 flex flex-col items-center px-6">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-between items-end mb-16 gap-[40px]">
        <div className="max-w-[686px]">
          <h2 className="text-[28px] md:text-[40px] font-bold font-montserrat text-[#0A0D12] mb-4">
            Design to <span className="text-[#B76080]">Code Accuracy</span>
          </h2>
          <p className="text-[#0A0D12] font-montserrat text-[16px] font-medium md:text-[16px]">
            We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.
          </p>
        </div>
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-[156px] h-[56px] flex items-center justify-between md:justify-center gap-2 font-bold font-montserrat text-[#0A0D12] border-2 border-[#0A0D12] pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-[#0A0D12] transition-colors group"
        >
          {showAll ? "Show Less" : "See All"}
          <div className="w-[36px] h-[36px] rounded-full bg-[#0A0D12] flex items-center justify-center group-hover:bg-[#0A0D12]">
            <ArrowRight size={20} className="text-white transform transition-transform duration-300" style={{ rotate: showAll ? "-90deg" : "0deg" }} />
          </div>
        </motion.button>
      </div>

      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {visibleProjects.map((project, i) => (
            <Link href="/coming-soon" key={i} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                layout
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with specific dimensions */}
                <div className="relative w-full aspect-square bg-[#F5F5F5] rounded-[20px] p-4 hover:shadow-xl transition-all duration-300">
                  {/* Ribbon Tag Image */}
                  <div className="absolute top-[24px] left-0 z-20">
                     <div className="relative w-[97px] h-[29px]">
                       <Image 
                         src="/assets/Discount-Container.png" 
                         alt="Best Portfolio" 
                         fill
                         className="object-contain"
                       />
                     </div>
                  </div>
  
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-white">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </div>
  
                {/* Details Section */}
                <div className="bg-[#F5F5F5] w-full h-[118px] rounded-[20px] p-4 flex justify-between items-center gap-4">
                  <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
                    <h4 className="font-bold font-montserrat text-[18px] text-[#0A0D12] mb-2 truncate">{project.title}</h4>
                     <div className="h-[1px] w-full bg-[#D5D7DA] mb-2"></div>
                    <p className="text-[#535862] font-montserrat text-[16px] font-medium">{project.category}</p>
                  </div>
                  <div className="w-[60px] h-[60px] rounded-full bg-[#B76080] flex items-center justify-center text-white flex-shrink-0 hover:bg-[#A05070] transition-colors duration-300">
                    <ArrowRight size={28} strokeWidth={2} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
