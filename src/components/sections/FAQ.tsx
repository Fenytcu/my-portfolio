"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What technologies do you work with?",
      a: "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      q: "Do you work on freelance or remote projects?",
      a: "I am open to both freelance collaborations and full-time opportunities. I enjoy working on diverse projects that challenge my skills.",
    },
    {
      q: "Can you convert Figma or Sketch designs into code?",
      a: "Absolutely! Pixel-perfect implementation from design tools is one of my core strengths. I ensure that every detail, animation, and interaction matches the original design.",
    },
    {
      q: "Do you collaborate with backend developers or teams?",
      a: "Yes, I am a firm believer in teamwork. I have experience working in agile environments and using version control tools like Git to collaborate effectively.",
    },
    {
      q: "Are you available for full-time roles?",
      a: "Yes, I am available for remote work globally. I have experience working with clients and teams across different time zones.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#F5F5F5] py-20 flex flex-col items-center px-6">
      <div className="max-w-[1000px] w-full text-center mb-6">
        <h2 className="text-[28px] md:text-[40px] font-bold font-montserrat text-[#0A0D12] mb-4">
          Let's Clear Things Up
        </h2>
        <p className="text-[#475467] font-montserrat text-[14px] md:text-[16px]">
          I’ve answered a few questions that usually come up when working with a frontend developer like me.
        </p>
      </div>

      <div className="max-w-[1200px] w-full flex flex-col">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="w-full bg-transparent border-b border-[#D5D7DA] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-8 px-4 md:px-0 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-[#98A2B3] font-bold font-montserrat text-[18px] md:text-[20px] w-8">0{i + 1}</span>
                <span className="font-bold font-montserrat text-[18px] md:text-[20px] text-[#0A0D12] group-hover:text-[#B76080] transition-colors flex-1 pr-8">{faq.q}</span>
              </div>
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border shrink-0 ${
                  openIndex === i 
                    ? 'bg-[#B76080] border-[#B76080] text-white' 
                    : 'bg-white border-[#D5D7DA] text-[#0A0D12]'
                }`}
              >
                {openIndex === i ? <Plus size={24} /> : <Minus size={24} />}
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="pl-[60px] md:pl-[84px] pr-4 md:pr-0 pb-8 max-w-[900px]">
                    <p className="text-[#475467] font-montserrat text-[16px] md:text-[18px] leading-[1.6]">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
