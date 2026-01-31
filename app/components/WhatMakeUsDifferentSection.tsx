'use client';
import { motion, Variants } from "framer-motion";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const differentiators = [
  { title: "Agile, iterative development" },
  { title: "Scalable and secure architecture" },
  { title: "Clean, maintainable codebase" },
  { title: "Performance-focused digital growth strategies" },
  { title: "Continuous optimization and long-term support" }
];

export default function WhatMakeUsDifferentSection() {
  return (
    <section className="bg-black py-1 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF6B00]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch justify-between min-h-[450px]">
        
        {/* Left Side: Exactly 50% Width + Centered Alignment */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center text-center pb-12 lg:pb-0 lg:pr-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
<motion.h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-4 md:mb-6">
              What Makes <br />
              <span className="text-[#FF6B00]">Us Different</span>
            </motion.h2>
            <p className="text-white/50 text-[16px] md:text-[15px] leading-relaxed max-w-sm mb-8">
              DIGITRIZON blends strong engineering, modern UI/UX design, and analytics-driven growth strategies to build digital products that succeed in real-world markets.
            </p>
            
            <motion.button 
              // Initial state: White background, Black text
              initial={{ backgroundColor: "#ffffff", color: "#000000" }}
              // Hover state: Orange background, White text
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#FF6B00",
                color: "#ffffff",
                boxShadow: "0px 0px 20px rgba(255, 107, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 font-bold rounded-full transition-all text-[16px] uppercase tracking-widest"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side: Exactly 50% Width, Items constrained in width */}
        <motion.div 
          className="lg:w-1/2 space-y-3 flex flex-col items-center lg:items-start lg:justify-center lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group relative p-3.5 px-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 overflow-hidden flex items-center gap-4 w-full max-w-[420px] cursor-default"
            >
              {/* Left Border Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF6B00] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />
              
              {/* Number Container */}
              <div className="flex-shrink-0 relative">
                <div className="relative z-10 w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#FF6B00] bg-[#FF6B00]/5 group-hover:bg-[#FF6B00]/20 group-hover:border-[#FF6B00]/40 transition-all duration-300">
                  <span className="text-[16px] font-black tracking-tighter">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              {/* Title - Fixed at 14px */}
              <h3 className="text-[16px] font-bold text-white/90 group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}