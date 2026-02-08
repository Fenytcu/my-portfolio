"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0D12] py-[29px] text-white flex justify-center">
      <div className="max-w-[1440px] w-full px-4 md:px-[120px] mx-auto flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
          <p className="text-[#FDFDFD] font-montserrat text-[12px] md:text-[16px]">© 2025 Edwin Anderson. All rights reserved.</p>
          <div className="flex gap-3 md:gap-6">
              <a href="#" className="w-[40px] h-[40px] flex justify-center items-center hover:bg-white/10 transition-colors border border-white/20 rounded-full">
                <Image src="/assets/facebook.png" alt="Facebook" width={20} height={20} className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-[40px] h-[40px] flex justify-center items-center hover:bg-white/10 transition-colors border border-white/20 rounded-full">
                <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-[40px] h-[40px] flex justify-center items-center hover:bg-white/10 transition-colors border border-white/20 rounded-full">
                <Image src="/assets/linkedin.png" alt="LinkedIn" width={20} height={20} className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-[40px] h-[40px] flex justify-center items-center hover:bg-white/10 transition-colors border border-white/20 rounded-full">
                <Image src="/assets/tiktok.png" alt="TikTok" width={20} height={20} className="w-5 h-5 object-contain" />
              </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
