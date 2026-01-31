'use client';
import { motion } from "framer-motion";
import { Send } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="relative w-full bg-black py-10 overflow-hidden">

            {/* 1. BACKGROUND GRID & GLOW */}
            <div className="absolute inset-0 z-0 opacity-15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6B0033_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0033_1px,transparent_1px)] bg-[size:35px_35px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] bg-[size:35px_35px]" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#FF6B00]/10 blur-[100px] pointer-events-none" />

            {/* 2. RUNNING LINE ANIMATIONS (Spanning full container width) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent"
                />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent"
                />
            </div>

            {/* 3. CENTERED COMPACT CONTENT */}
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
<motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-6xl font-bold text-white tracking-tighter leading-tight mb-3"
                    >
                        Have an Idea? <span className="text-[#FF6B00]">Let’s Build It Together</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-[13px] md:text-[15px] max-w-xl leading-relaxed mb-6"
                    >
                        Whether it's a mobile app, web app, or digital strategy, we’re here to help you bring it to life. {" "}
                        <span className="text-white/70 font-medium">Let’s build something exceptional.</span>
                    </motion.p>

                    <motion.div
                        initial={{ backgroundColor: "#ffffff", color: "#000000" }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#FF6B00",
                            color: "#ffffff",
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-full shadow-lg overflow-hidden w-fit" // Added w-fit to keep the button from stretching
                    >
                        <a
                            href="/contact"
                            className="group relative px-8 py-3.5 font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,0,0.2)]"
                        >
                            Start Your Project
                        </a>
                    </motion.div>                </motion.div>
            </div>
        </section>
    );
}