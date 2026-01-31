'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Insights', href: '#insights' },
    { name: "About", href: "#about" }
];

const GetStartedButton = ({ mobile = false }) => {
    return (
        <motion.button
            initial={{ backgroundColor: "#ffffff", color: "#000000" }}
            whileHover={{
                scale: 1.05,
                backgroundColor: "#FF6B00",
                color: "#ffffff",
                transition: { duration: 0.3 }
            }}
            whileTap={{
                scale: 0.95, backgroundColor: "#FF6B00",
                color: "#ffffff",
                transition: { duration: 0.3 }
            }}
            className={`rounded-full font-bold shadow-lg flex items-center gap-2 group whitespace-nowrap uppercase tracking-widest border border-transparent ${mobile ? "px-6 py-2.5 text-[11px]" : "px-8 py-3 text-[16px]"
                }`}
        >
            {mobile ? 'Contact Us' : 'Get Started'}
            <ArrowRight
                size={mobile ? 14 : 18}
                className="transition-transform group-hover:translate-x-1"
            />
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
            {/* REMOVED px-6 and py-3 to prevent the 'framed' look on mobile */}
            <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
                <div className="w-full px-4 py-3 md:px-6 md:py-6">
                    <div
                        className={`
                          max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 rounded-full border transition-all duration-500
                          h-12 md:h-16 
                          ${scrolled
                                ? "bg-white/[0.03] border-white/[0.08] backdrop-blur-xl shadow-2xl"
                                : "bg-transparent border-transparent"
                            }
                        `}
                    >
                        <div className="flex items-center min-w-[100px] md:min-w-[220px] h-full">
                            <Image
                                src="/images/Digitrizon.png"
                                alt="Digitrizon Logo"
                                width={180}
                                height={60}
                                className="w-auto h-10 md:h-24 scale-110 md:scale-150 pl-1 md:pl-5 object-contain brightness-110"
                                priority
                            />
                        </div>

                        <div className="hidden md:flex items-center gap-12">
                            <div className="flex items-center gap-10">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-[16px] font-medium text-white/60 hover:text-[#FF6B00] transition-colors uppercase tracking-wider"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            <button className="bg-white text-black px-6 py-2.5 rounded-full text-[12px] font-bold hover:bg-[#FF6B00] hover:text-white transition-all uppercase tracking-widest">
                                Contact Us
                            </button>
                        </div>

                        <button
                            className="md:hidden text-white p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-20 left-4 right-4 p-6 rounded-[1.5rem] bg-black/95 border border-white/[0.08] backdrop-blur-2xl md:hidden z-50 shadow-2xl"
                        >
                            <div className="flex flex-col gap-4 items-center text-center">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-[12px] font-bold text-white/70 hover:text-[#FF6B00] transition-colors uppercase tracking-[0.2em]"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <hr className="w-full border-white/5 my-1" />
                                <GetStartedButton mobile={true} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* --- HERO SECTION --- */}
            {/* Changed min-h-screen to h-screen or h-[100dvh] for mobile edge-to-edge */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

                {/* VIDEO ELEMENT: Added object-center to ensure it stays focused */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 object-center"
                >
                    <source src="/videos/video_2.mp4" type="video/mp4" />
                </video>

                {/* OVERLAY & BACKDROP BLUR */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] z-[1]" />

                {/* AMBIENT GLOW */}
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
                        className="max-w-2xl mx-auto text-[16px] md:text-xl text-white/50 leading-relaxed mb-10 md:mb-12"
                    >
                        <span className="text-white font-semibold">DIGITRIZON</span> builds scalable mobile apps, web apps, and tech-driven digital growth solutions.
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