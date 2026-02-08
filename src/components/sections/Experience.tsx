"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      company: "Airbnb",
      role: "Frontend Developer",
      period: "2025 - Present", 
      desc: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
      logo: "/assets/airbnb.png",
      color: "#FF5A5F",
    },
    {
      company: "Airtasker",
      role: "Frontend Developer",
      period: "2025 - Present",
      desc: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
      logo: "/assets/airtasker.png",
      color: "#EA4C89",
    },
    {
      company: "Slack",
      role: "Frontend Developer",
      period: "2025 - Present",
      desc: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
      logo: "/assets/slack.png",
      color: "#4A154B",
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#0A0D12] pt-[40px] pb-[40px] px-6 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-0">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1F242F] pb-10">
          <h2 className="text-[28px] md:text-[40px] font-bold font-montserrat text-white leading-tight">
            Experiences That <br />
            <span className="text-[#F3B64C]">Shaped Me!</span>
          </h2>
          <p className="text-[#FDFDFD] font-semibold font-montserrat text-[18px] max-w-[366px] text-left md:text-right">
            From startups to side projects, every step has been a chance to learn, build, and level up.
          </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-[158.5px] py-[40px] md:py-12 border-b border-[#1F242F] last:border-b-0"
            >
              
              {/* Column 1: Date & Role */}
              <div className="flex flex-col gap-1 w-full md:w-[178px] shrink-0 text-left">
                <span className="text-[#667085] text-[14px] font-medium font-montserrat tracking-wide">{exp.period}</span>
                <span className="text-white text-[16px] md:text-[20px] font-bold font-montserrat leading-tight">{exp.role}</span>
              </div>
              
              {/* Column 2: Logo Box */}
              <div 
                className="w-[122px] h-[71px] md:w-[192px] md:h-[112px] shrink-0 rounded-[16px] border-8 border-double border-[#252B37] bg-transparent flex items-center justify-center"
              >
                 {/* Icon Placeholder */}
                  <div className="relative w-[81px] h-[30px] md:w-[128px] md:h-[48px]">
                    <Image src={exp.logo} alt={exp.company} fill className="object-contain opacity-80" />
                  </div>
              </div>

              {/* Column 3: Description */}
              <p className="text-[#A4A7AE] font-montserrat text-[16px] leading-[1.6] flex-1 text-left">
                {exp.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
