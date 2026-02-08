"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!",
      name: "SARAH J.",
      role: "Product Manager at Bloom",
      image: "/assets/sarah.png"
    },
    {
      quote: "Exceptional attention to detail! Edwin delivered a pixel-perfect implementation of our complex dashboard design. His communication throughout the process was outstanding.",
      name: "MICHAEL R.",
      role: "CTO at TechFlow",
      image: "/assets/sarah.png" // Placeholder, ideally use different image
    },
    {
      quote: "The animations and interactions Edwin implemented took our landing page to the next level. It's rare to find a developer with such a strong eye for design.",
      name: "EMILY C.",
      role: "Lead Designer at Studio X",
      image: "/assets/sarah.png" // Placeholder
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev: number) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#F9FAFB] pt-[40px] pb-[40px] flex flex-col items-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[1200px] w-full"
      >
        <div className="text-center mb-4">
          <h2 className="text-[28px] md:text-[40px] font-bold font-montserrat text-[#0A0D12]">
            What They Say About Working With Me
          </h2>
          <p className="text-[#0A0D12] text-[14px] md:text-[16px] mb-16 font-montserrat">
            Real words from clients, teammates, and mentors I’ve collaborated with on various projects.
          </p>
        </div>

        <div className="relative">
          {/* Main Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#B76080] rounded-[24px] p-6 md:p-20 text-center relative z-10 overflow-hidden min-h-[400px] flex flex-col justify-center"
          >
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#F3B64C" color="#F3B64C" />
              ))}
            </div>

            <blockquote className="text-white text-[18px] md:text-[24px] font-semibold font-montserrat leading-[1.4] mb-16 max-w-[1120px] mx-auto relative z-10">
              “{testimonials[currentIndex].quote}”
            </blockquote>

            <div className="flex flex-col items-center relative z-10">
              <div className="w-[64px] h-[64px] rounded-full overflow-hidden mb-4">
                <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} width={64} height={64} className="object-cover" />
              </div>
              <h5 className="text-white font-semibold font-montserrat text-[18px]">{testimonials[currentIndex].name}</h5>
              <p className="text-white font-montserrat font-medium text-[16px] mb-4">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          {/* Decorative Back Cards - Increased translate-y for better visibility */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[98%] h-full bg-[#B76080] opacity-50 rounded-[24px] -z-10 translate-y-6" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[96%] h-full bg-[#B76080] opacity-20 rounded-[24px] -z-20 translate-y-12" />
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3 mt-12">
          <button 
            onClick={handlePrev}
            className="w-[45px] h-[45px] rounded-full border border-[#D5D7DA] flex items-center justify-center hover:bg-gray-50 transition-colors bg-white hover:shadow-sm active:scale-95 z-20 relative"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-6 h-6 text-[#A4A7AE]" />
          </button>
          <button 
            onClick={handleNext}
            className="w-[45px] h-[45px] rounded-full border border-[#D5D7DA] flex items-center justify-center hover:bg-gray-50 transition-colors bg-white hover:shadow-sm active:scale-95 z-20 relative"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-6 h-6 text-[#0A0D12]" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
