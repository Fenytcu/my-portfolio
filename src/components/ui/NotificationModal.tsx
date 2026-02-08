"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error";
}

const NotificationModal = ({ isOpen, onClose, status }: NotificationModalProps) => {
  const isSuccess = status === "success";
  
  // Content configuration based on status
  const content = {
    success: {
        image: "/assets/success.png",
        title: "Got Your Message!",
        text: "Really appreciate you reaching out. I’ll be in touch soon.",
        buttonText: "Back to Home",
        buttonAction: onClose,
        headerBg: "bg-[#F3B64C]",
        imageClass: "w-[221px] md:w-[262px] z-10",
        modalClass: "max-w-[361px] md:max-w-[518px] min-h-[381px] md:min-h-[449px]",
        headerClass: "h-[183px] md:h-[225px]"
    },
    error: {
        image: "/assets/failed.png",
        title: "Message Failed to Send",
        text: "Sorry about that. Please check your connection and try again.",
        buttonText: "Try Again",
        buttonAction: onClose,
        headerBg: "bg-[#E9EAEB]",
        imageClass: "w-[214px] md:w-[260px] z-10",
        modalClass: "max-w-[361px] md:max-w-[518px] min-h-[381px] md:min-h-[449px]",
        headerClass: "h-[183px] md:h-[225px]"
    }
  };

  const currentContent = isSuccess ? content.success : content.error;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with Home Blur Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#A53860]/30 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`bg-white rounded-[24px] w-full text-center relative pointer-events-auto shadow-2xl border border-[#B76080] ${currentContent.modalClass}`}
            >
              {/* Top Section: Dynamic Background */}
              <div className={`${currentContent.headerBg} p-6 pb-0 relative flex flex-col justify-end items-center rounded-t-[24px] ${currentContent.headerClass || ''}`}>
                  
                  {/* Image */}
                  <div className="flex justify-center relative">
                     <div className="relative">
                        <Image 
                            src={currentContent.image} 
                            alt={status} 
                            width={263} 
                            height={294} 
                            className={`object-contain h-auto ${currentContent.imageClass}`} 
                        />
                     </div>
                  </div>
              </div>

              {/* Bottom Section: White Background */}
              <div className="bg-white p-6 md:p-8 rounded-b-[24px]">
                  {/* Text */}
                  <h3 className="text-[24px] font-bold font-montserrat text-[#0A0D12] mb-3">
                    {currentContent.title}
                  </h3>
                  <p className="text-[#535862] font-montserrat text-[14px] leading-relaxed mb-8 px-4">
                    {currentContent.text}
                  </p>

                  {/* Button */}
                  <button
                    onClick={currentContent.buttonAction}
                    className="w-full h-[52px] bg-[#B76080] hover:bg-[#A53860] text-white font-bold rounded-full text-[16px] transition-all duration-300"
                  >
                    {currentContent.buttonText}
                  </button>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationModal;
