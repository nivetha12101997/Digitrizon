'use client';
import { motion } from "framer-motion";
import { Check } from 'lucide-react';

const highlights = [
  { text: "Clear, transparent communication" },
  { text: "Scalable, quality-driven development" },
  { text: "Data-backed digital growth execution" },
  { text: "Reliable timelines and disciplined delivery" },
  { text: 'End-to-end partnership from concept to growth' }
];

export default function WhyChooseSection() {
  return (
    <section className="relative w-full bg-black py-16 px-6 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF6B00]/10 blur-[140px] pointer-events-none opacity-60" />
      </div>

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
<motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-6xl font-bold text-white tracking-tighter mb-4 md:mb-6"
          >
            Why Choose <span className="text-[#FF6B00]">DIGITRIZON?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-[16px] md:text-[15px] leading-relaxed max-w-2xl mx-auto px-4 md:px-0"
          >
            DIGITRIZON brings a unified approach that builds reliable digital products while enabling steady progress through technology-led solutions.
          </motion.p>
        </div>

        {/* Value List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, index) => {
            const isLast = index === highlights.length - 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.03] transition-all group hover:border-[#FF6B00]/30 ${
                  isLast ? "md:col-span-2 justify-center bg-gradient-to-r from-transparent via-[#FF6B00]/5 to-transparent border-[#FF6B00]/10" : ""
                }`}
              >
                {/* Standardized Tick Icon */}
                <div className="w-8 h-8 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] shrink-0 group-hover:scale-110 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
                  <Check size={16} strokeWidth={3} />
                </div>

                {/* Standardized to 14px */}
                <span className={`text-white/80 font-bold text-[16px] uppercase tracking-wide ${isLast ? "text-white" : ""}`}>
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />
    </section>
  );
}