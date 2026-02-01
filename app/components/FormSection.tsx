'use client';
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, ChevronDown } from 'lucide-react';

export default function FormSection() {
  return (
    /* Reduced py-24 to py-12 to remove extra vertical space */
    <section className="relative bg-black py-12 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Reduced gap from 16 to 10 for a tighter side-by-side layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6" // Reduced space-y-8 to space-y-6
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
            Let’s Build <br /> Something <span className="text-[#FF6B00]">Great</span> <br /> Together!
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed max-w-lg">
            Have a project or idea in mind? Share a few details, and we’ll get back to you with the next steps. Whether it's an app, a website, or digital growth support, we're here to help.</p>


        </motion.div>

        {/* Right Side: Enhanced Form with Flags */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Reduced padding from p-12 to p-8/p-10 */}
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-6 md:p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">Get in Touch</h3>
            <p className="text-white/40 mb-6 text-sm">Fill out the form below to start your journey.</p>

            <form className="space-y-4"> {/* Reduced space-y-6 to space-y-4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap-6 to gap-4 */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Name</label>
                  <input type="text" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00]/50 outline-none transition-all text-sm" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Email</label>
                  <input type="email" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00]/50 outline-none transition-all text-sm" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                  <div className="flex gap-2 relative">
                    <div className="relative shrink-0">
                      <select className="bg-white/[0.05] border border-white/10 rounded-xl pl-2 pr-7 py-3 text-white/80 text-xs focus:border-[#FF6B00]/50 outline-none appearance-none cursor-pointer h-full transition-all">
                        <option className="bg-black" value="+91"> +91 (🇮🇳)</option>
                        <option className="bg-black" value="+1"> +1 (🇺🇸)</option>
                        <option className="bg-black" value="+44"> +44 (🇬🇧)</option>
                        <option className="bg-black" value="+971"> +971 (🇦🇪)</option>
                        <option className="bg-black" value="+65"> +65 (🇸🇬)</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={12} />
                    </div>
                    <input type="tel" className="flex-1 w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00]/50 outline-none transition-all text-sm" placeholder="00000 00000" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Company <span className="text-white/20 font-normal italic">(Optional)</span></label>
                  <input type="text" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00]/50 outline-none transition-all text-sm" placeholder="Your Business Inc." />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Project Type</label>
                <div className="relative">
                  <select className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:border-[#FF6B00]/50 outline-none cursor-pointer text-sm">
                    <option className="bg-black" value="" disabled selected>Select a service...</option>
                    <option className="bg-black" value="mobile">Mobile App Development</option>
                    <option className="bg-black" value="web">Web App Development</option>
                    <option className="bg-black" value="marketing">Digital Marketing</option>
                    <option className="bg-black" value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={16} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Project Details</label>
                <textarea rows={3} className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00]/50 outline-none transition-all resize-none text-sm" placeholder="Tell us about your goals..."></textarea>
              </div>

              <motion.button
                type="submit"
                // Initial state: White background, Black text
                initial={{ backgroundColor: "#ffffff", color: "#000000" }}
                // Hover state: Orange background, White text
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#FF6B00",
                  color: "#ffffff",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 font-black uppercase tracking-[0.2em] text-xs rounded-xl flex items-center justify-center gap-3 transition-all"
              >
                Submit Project Request
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}