"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OpeningScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const timer = setTimeout(() => setIsVisible(false), 2500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black text-white overflow-hidden touch-none"
        >
          {/* 1. SOFT RADIAL SCREEN GLOW (Deep Background) */}
          {/* This creates a very subtle, large radial gradient to make the black screen feel deeper and glowing */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff6b001a_0%,_rgba(0,0,0,1)_70%)] opacity-80" />

          <div className="relative flex flex-col items-center justify-center w-full">
            
            {/* 2. LOGO BACKLIGHT GLOW (Pulsing Light behind Logo) */}
            {/* We place a blurred div behind the image that pulses in and out */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.2, 0.6, 0.2], // Pulses opacity
                scale: [1, 1.15, 1],       // Pulses scale slightly
              }}
              transition={{ 
                duration: 4,               // Matches the splash screen duration
                repeat: Infinity,         // Keeps pulsing
                ease: "easeInOut"
              }}
              // This creates a large, blurred orange circle directly behind the logo.
              // We match the scale to the logo's scaled size.
              className="absolute w-[300px] h-[300px] bg-[#ff7a00] rounded-full blur-[90px] md:blur-[120px] scale-[2.8] md:scale-[3.1]"
            />

            <Image
              src='/images/FooterLogo.png'
              alt="Digitrizon Logo"
              width={180}
              height={65}
              // Fixed alignment and scaling from the previous step
              className="w-auto h-auto object-contain brightness-110 scale-[2.5] md:scale-[2.8] origin-center mx-auto"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}