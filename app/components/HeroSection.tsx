'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Navbar from './navbar';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Insights', href: '#insights' },
    { name: "About", href: "#about" }
];

export const GetStartedButton = ({ mobile = false }) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                backgroundColor: "#FF6B00",
                color: "#ffffff",
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full font-bold shadow-lg flex items-center gap-2 group whitespace-nowrap uppercase tracking-widest border border-transparent bg-white text-black ${mobile ? "px-6 py-2.5 text-[11px]" : "px-8 py-3 text-[11px]"
                }`}

        >
            {mobile ? 'Contact Us' : 'Get Started'}
            {mobile ? null : <ArrowRight size={mobile ? 14 : 18} className="transition-transform group-hover:translate-x-1" />}
        </motion.button>
    );
};

export default function HeroSection() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-black min-h-screen w-full overflow-x-hidden">
            {/* --- NAVIGATION BAR --- */}
<Navbar/>

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 object-center"
                >
                    <source src="/videos/video_2.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] z-[1]" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[800px] md:h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none z-[2]" />

                <div className="container relative z-10 px-6 mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 md:mb-8"
                    >
                        Transform Your Vision <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6B00]/90">
                            Into Digital Reality
                        </span>
                    </motion.h1>

                    <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    /* Changed max-w-2xl to max-w-4xl and added text-balance */
    className="max-w-4xl mx-auto text-[15px]  text-white/50 leading-relaxed mb-10 md:mb-12 text-center"
>
    <span className="text-white font-semibold">DIGITRIZON </span>
    builds scalable, high-performance digital solutions designed for modern businesses. Helping you launch faster, grow smarter, and stay competitive in a rapidly evolving market.
</motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <GetStartedButton />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}