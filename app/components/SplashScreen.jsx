"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { Code2, Terminal, Cpu, Database, Layout } from "lucide-react";

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (finishLoading) finishLoading();
    }, 2500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  const devIcons = [
    { Icon: Code2, delay: 0.1 },
    { Icon: Terminal, delay: 0.2 },
    { Icon: Cpu, delay: 0.3 },
    { Icon: Database, delay: 0.4 },
    { Icon: Layout, delay: 0.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(40px)",
        transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] } 
      }}
      // Fixed background image application and syntax
      style={{
        backgroundImage: "url('/images/blackspotlight.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.15)_0%,_transparent_70%)]" />

      <div className="relative flex flex-col items-center w-full max-w-[90vw]">
        
        {/* Layered Container (Logo + Spinner Cover) */}
        <div className="relative flex items-center justify-center w-[90vw] max-w-[600px] h-[40vh] md:h-[50vh]">
          
          {/* 1. LOGO (Bottom Layer) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <Image 
              src="/images/FooterLogo.png"
              alt="DigitriZon Logo"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(255,107,0,0.4)]"
              priority
            />
          </motion.div>

          {/* 2. SPINNER (Cover Layer - on top of the logo) */}
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Spinning Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] border-4 border-transparent border-t-[#FF6B00] border-r-[#FF6B00] rounded-full shadow-[0_0_20px_rgba(255,107,0,0.3)] opacity-60"
            />
          </motion.div>
        </div>

        {/* Icons and Text (below the main visual) */}
        <div className="flex flex-col items-center justify-center mt-16 z-30">
          
          {/* Dev Icons */}
          {/* <div className="flex gap-4 mt-8 opacity-60">
            {devIcons.map(({ Icon, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + delay }}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.div>
            ))}
          </div> */}
          
          {/* Loading Text */}
          {/* <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: [0, 1, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="text-[#FF6B00] text-[10px] tracking-[0.3em] uppercase font-bold mt-4"
          >
            Initializing System
          </motion.span> */}
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;