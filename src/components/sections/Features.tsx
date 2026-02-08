"use client";

import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="w-full bg-white pt-10 md:pt-20 flex justify-center items-center">
        <div className="max-w-[892px] text-center mb-[40px] md:mb-[80px]">
          <p className="text-[24px] md:text-[36px] leading-[1.3] font-montserrat font-medium text-[#0A0D12] tracking-tight">
            As frontend developers, we bring designs to life with{" "}
            <span className="font-medium text-[#B76080]">clean</span>,{" "}
            <span className="font-medium text-[#B76080]">responsive code</span> that blends{" "}
            creativity 🎨 with{" "}
            <span className="font-medium text-[#0A0D12]">usability</span> 🌟.
          </p>
        </div>
      </section>

      <section className="w-full bg-white pb-0 md:pb-24 flex justify-center px-6">
        <div className="max-w-[1200px] w-full mt-[40px] md:mt-[80px] flex flex-col md:flex-row items-start justify-between gap-0">
          <div className="w-full md:flex-1 flex flex-col items-start text-left md:px-10">
            <div className="w-[63px] h-[63px] rounded-full border-[1.31px] border-[#D5D7DA] flex items-center justify-center mb-[16px]">
              <Image 
                src="/assets/icon-component.png" 
                alt="Component Icon" 
                width={32} 
                height={36} 
                className="object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold font-montserrat text-[#0A0D12] uppercase mb-4 leading-tight">
              Component-Based <br className="hidden md:block" /> Development
            </h3>
            <p className="text-[16px] font-montserrat text-[#475467] leading-relaxed max-w-[300px]">
              Reusable, scalable code built with modern frameworks like React or Vue.
            </p>
          </div>

          <div className="w-full h-[1.31px] bg-[#D5D7DA] md:hidden my-4" />
          <div className="hidden md:block w-[1.31px] h-[176px] bg-[#D5D7DA] self-center" />

          <div className="w-full md:flex-1 flex flex-col items-start text-left md:px-10">
            <div className="w-[63px] h-[63px] rounded-full border-[1.31px] border-[#D5D7DA] flex items-center justify-center mb-[16px]">
              <Image 
                src="/assets/icon-pixel.png" 
                alt="Pixel Icon" 
                width={32} 
                height={36} 
                className="object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold font-montserrat text-[#0A0D12] uppercase mb-4 leading-tight">
              Pixel-Perfect UI <br className="hidden md:block" /> Implementation
            </h3>
            <p className="text-[16px] font-montserrat text-[#475467] leading-relaxed max-w-[300px]">
              Translating design into high-fidelity user interfaces with attention to detail.
            </p>
          </div>

          <div className="w-full h-[1.31px] bg-[#D5D7DA] md:hidden my-4" />
          <div className="hidden md:block w-[1.31px] h-[176px] bg-[#D5D7DA] self-center" />

          <div className="w-full md:flex-1 flex flex-col items-start text-left md:px-10">
            <div className="w-[63px] h-[63px] rounded-full border-[1.31px] border-[#D5D7DA] flex items-center justify-center mb-[16px]">
              <Image 
                src="/assets/icon-responsive.png" 
                alt="Responsive Icon" 
                width={32} 
                height={36} 
                className="object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold font-montserrat text-[#0A0D12] uppercase mb-4 leading-tight">
              Responsive & <br className="hidden md:block" /> Accessible Design
            </h3>
            <p className="text-[16px] font-montserrat text-[#475467] leading-relaxed max-w-[300px]">
              Optimized layouts that work seamlessly across all screen sizes and devices.
            </p>
          </div>
          
          <div className="w-full h-[1.31px] bg-[#D5D7DA] mt-[40px] md:hidden" />
        </div>
      </section>
    </div>
  );
};

export default Features;
