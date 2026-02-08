"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Comparison = () => {
  return (
    <section id="comparison" className="w-full bg-[#F9FAFB] pt-[40px] pb-24 flex flex-col items-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-[40px]"
      >
        <h2 className="text-[28px] md:text-[40px] font-bold font-montserrat text-[#0A0D12] mb-2">
          More Than Just Code
        </h2>
        <p className="text-[#0A0D12] font-montserrat text-[14px]">
          We care about design, performance, and user experience all in one.
        </p>
      </motion.div>

      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-[24px] justify-center items-stretch">
        {/* With Me Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-[588px] md:min-h-[620px] bg-[#F3B64C] rounded-[16px] p-8 md:p-12 flex flex-col items-center shadow-xl transition-transform hover:scale-[1.01] duration-300"
        >
          <div className="flex flex-col items-center mb-10">
             <span className="font-bold font-montserrat text-[18px] text-[#0A0D12] mb-6 md:mb-8">With Me</span>
             <div className="w-[100px] h-[100px] bg-[#B76080] rounded-full overflow-hidden shadow-inner">
                <Image src="/assets/portrait.png" alt="With Me" width={100} height={100} className="object-cover object-top h-full w-full" />
             </div>
          </div>
          
          <ul className="space-y-5 w-fit mx-auto flex flex-col items-center max-w-[400px]">
            {[
              "React Expert",
              "Precise Website Implementation",
              "TypeScript Proficiency",
              "Clean, Maintainable Code",
              "Responsive Website Development",
              "Performance Optimization",
              "UI Design Proficiency (Figma)"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.05) }}
                className="flex items-center gap-6 font-semibold font-montserrat text-[16px] md:text-[18px] text-[#0A0D12]"
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Another Talent Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-[588px] md:min-h-[620px] bg-white rounded-[32px] border border-[#D5D7DA] p-8 md:p-12 flex flex-col items-center shadow-sm"
        >
          <div className="flex flex-col items-center mb-10 text-[#0A0D12] font-semibold">
             <span className="font-bold font-montserrat text-[18px] text-[#0A0D12] mb-6 md:mb-8">Another Talent</span>
             <div className="flex items-center justify-center">
                <Image src="/assets/ic-an-talent.png" width={100} height={100} alt="icon"/>
             </div>
          </div>
          
          <ul className="space-y-5 w-fit mx-auto flex flex-col items-center max-w-[400px] text-[#475467]">
            {[
              "Basic React Knowledge",
              "Inconsistent Design Translation",
              "Little to No TypeScript Knowledge",
              "Unstructured Code",
              "Inconsistent Responsiveness",
              "Slow and Heavy Websites",
              "No Design Skills"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.05) }}
                className="flex items-center gap-6 font-medium font-montserrat text-[16px] md:text-[18px]"
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F04438" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
