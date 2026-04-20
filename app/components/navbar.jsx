'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    // Function to force close everything
    const closeAllMenus = useCallback(() => {
        setIsOpen(false);
        setMobileDropdown(null);
        setActiveDropdown(null);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // If the menu is open and we detect actual scroll movement, close it
            if (isOpen && window.scrollY > 20) {
                closeAllMenus();
            }
        };

        // Mobile specific: Close menu when the user starts a touch-drag (swipe)
        const handleTouchMove = () => {
            if (isOpen) {
                closeAllMenus();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isOpen, closeAllMenus]);

    const navData = [
        {
            title: 'Services',
            id: 'services',
            links: [
                { name: 'Mobile App', href: '/Services/MobileApps' },
                { name: 'Web App', href: '/Services/WebApps' },
                { name: 'E-commerce', href: '/Services/E-Commerce' },
                { name: 'SaaS Product', href: '/Services/SaasProduct' },
                { name: 'Digital Growth', href: '/Services/DigitalGrowth' },
            ]
        },
        {
            title: 'Insights',
            id: 'insights',
            links: [{ name: 'Blogs', href: '/Insights/Blogs' }]
        },
        {
            title: 'Company',
            id: 'company',
            links: [{ name: 'About Us', href: '/company/about-us' }]
        }
    ];

    const DesktopDropdown = ({ title, id, links }) => {
        const isDropdownOpen = activeDropdown === id;
        return (
            <div 
                className="relative" 
                onMouseEnter={() => setActiveDropdown(id)}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <button 
                    className={`flex items-center gap-1 text-[12px] font-medium transition-colors uppercase tracking-wider outline-none py-5
                    ${isDropdownOpen ? 'text-[#FF6B00]' : 'text-white/60 hover:text-[#FF6B00]'}`}
                >
                    {title}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 pt-[0px] w-48 z-[110]"
                        >
                            <div className="bg-black/80 border border-white/10 rounded-2xl overflow-hidden py-2 shadow-2xl backdrop-blur-xl">
                                {links.map((link) => link.name==='About Us' ? (
                                    
                                    <Link key={link.name} href={link.href} className="block px-5 py-2 text-[13px] text-white/70 hover:bg-white/10 hover:text-[#FF6B00] transition-all CamelCase tracking-tight">
                                        {link.name}
                                    </Link>
                                ) : null)}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
            <div className="w-full px-2 py-3 md:px-6 md:py-6">
                <div className={`
                    max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 rounded-full border transition-all duration-500 h-14
                    ${scrolled || isOpen ? "bg-black/20 border-white/[0.08] backdrop-blur-xl shadow-2xl" : "bg-transparent border-transparent"}
                `}>
                    <div className="flex items-center min-w-[120px] md:w-[220px] h-full relative overflow-visible">
                        <Link href="/">
                            <Image src='/images/Digitrizon_F.png' alt="Logo" width={180} height={65} className="w-auto h-15 md:h-18 scale-[2.4] translate-x-10 md:translate-x-0 pt-2.5 md:pt-2.5 pb-2 md:pb-2 md:pl-7 object-contain" priority />
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center items-center">
                        <div className="flex items-center gap-10">
                            {navData.map((item) => (
                                <DesktopDropdown key={item.id} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-end md:w-[220px]">
                        <button className="bg-white text-black px-6 py-2.5 rounded-full text-[12px] font-bold hover:bg-[#FF6B00] hover:text-white transition-all uppercase tracking-widest shadow-lg">
                            Contact Us
                        </button>
                    </div>

                    <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/40 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            {navData.map((item) => (
                                <div key={item.id} className="border-b border-white/5 last:border-none">
                                    <button 
                                        onClick={() => setMobileDropdown(mobileDropdown === item.id ? null : item.id)}
                                        className="w-full flex justify-between items-center py-4 text-white/90 text-sm font-medium uppercase tracking-widest"
                                    >
                                        {item.title}
                                        <ChevronDown size={16} className={`transition-transform ${mobileDropdown === item.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {mobileDropdown === item.id && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-white/5 rounded-xl mb-4">
                                                {item.links.map((link) => link.name==='About Us' ?
                                                (
                                                    <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-6 py-3 text-white/60 text-xs hover:text-[#FF6B00] transition-colors">
                                                        {link.name}
                                                    </Link>
                                                ): null)}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                            <button className="mt-6 w-full bg-[#FF6B00] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;