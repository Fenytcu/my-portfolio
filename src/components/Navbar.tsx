"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#comparison" },
    { name: "Skill", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Mobile Header - Visible only on mobile */}
      <div className="md:hidden fixed top-[16px] left-0 w-full z-50 px-[15px]">
        <div className="w-full h-[48px] px-4 flex justify-between items-center bg-black/20 backdrop-blur-[40px] border border-[#B76080] rounded-full">
          <span className="text-white text-lg font-bold font-montserrat tracking-tight">Edwin</span>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-[16px] z-40 bg-black/20 backdrop-blur-[40px] flex flex-col items-start pt-[80px] px-6 gap-6 rounded-[24px] border border-[#B76080]"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-[16px] font-semibold font-montserrat"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar - Hidden on mobile */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:block fixed top-[32px] left-1/2 -translate-x-1/2 z-50 w-[553px] h-[48px]"
      >
        <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-[40px] border border-white/10 shadow-lg">
          <ul className="flex items-center justify-center h-full gap-8 px-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="text-white text-sm font-medium hover:text-[#FCD34D] transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#FCD34D] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
