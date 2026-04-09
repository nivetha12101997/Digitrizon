'use client';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const router = useRouter();

    const InstagramGradient = () => (
        <svg width="0" height="0" style={{ position: 'absolute' }}>
            <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#f09433" offset="0%" />
                <stop stopColor="#e6683c" offset="25%" />
                <stop stopColor="#dc2743" offset="50%" />
                <stop stopColor="#cc2366" offset="75%" />
                <stop stopColor="#bc1888" offset="100%" />
            </linearGradient>
        </svg>
    );

    const serviceLinks = [
        { name: 'Mobile App Development', href: '/Services/MobileApps' },
        { name: 'Web App Development', href: '/Services/WebApps' },
        { name: 'E-commerce', href: '/Services/E-Commerce' },
        { name: 'SaaS Product', href: '/Services/SaasProduct' },
        { name: 'Digital Growth', href: '/Services/DigitalGrowth' },
    ];

    const handleNavigation = (url) => {
        router.push(url);
    };

    const socialLinks = [
        { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn", color: "#0A66C2" },
        {
            icon: <Instagram size={18} style={{ stroke: "url(#instagram-gradient)" }} />,
            href: "#",
            label: "Instagram",
            color: "#E1306C",
            isGradient: true
        },
        { icon: <Facebook size={18} />, href: "#", label: "Facebook", color: "#1877F2" },
        { icon: <Youtube size={18} />, href: "#", label: "YouTube", color: "#FF0000" },
    ];

    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden relative">
            <InstagramGradient />
            <div className="max-w-7xl mx-auto">
                {/* FIXED GRID: 
                   Removed the 'col-span-2' wrapper. 
                   Now we have 4 clean columns at lg breakpoint.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand/Logo */}
                    <div className="flex flex-col items-start">
                        <div className="h-16 w-48 mb-4">
                            <Image
                                src='/images/FooterLogo.png'
                                alt="Digitrizon Logo"
                                width={180}
                                height={65}
                                className="w-auto h-full object-contain brightness-110 scale-[2.8] origin-left"
                                priority
                            />
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Our Services</h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((service) => (
                                <li key={service.name}>
                                    <button
                                        onClick={() => handleNavigation(service.href)}
                                        className="text-left text-white/40 hover:text-[#FF6B00] transition-colors text-[14px] sm:text-[15px] leading-tight block w-full">
                                        {service.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Insights & Company (Stacked) */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Insights</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/Insights/Blogs" className="text-white/40 hover:text-[#FF6B00] transition-colors text-[14px] sm:text-[15px]">
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Company</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/Company/About" className="text-white/40 hover:text-[#FF6B00] transition-colors text-[14px] sm:text-[15px]">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Contact Information */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white/40 text-[14px] sm:text-[15px]">
                                <Mail size={16} className="text-[#FF6B00] shrink-0" />
                                <a href="mailto:info@digitrizon.com" className="hover:text-white transition-colors truncate">info@digitrizon.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-white/40 text-[14px] sm:text-[15px]">
                                <Phone size={16} className="text-[#FF6B00] shrink-0" />
                                <a href="tel:+91-7358926159" className="hover:text-white transition-colors">+91 7358926159</a>
                            </li>
                            <li className="flex items-center gap-3 text-white/40 text-[14px] sm:text-[15px]">
                                <MapPin size={16} className="text-[#FF6B00] shrink-0" />
                                <span className="truncate">Chennai, India</span>
                            </li>
                        </ul>

                        <div className="flex gap-4 pt-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    style={{
                                        color: social.isGradient ? 'none' : social.color,
                                        borderColor: `${social.color}44`
                                    }}
                                    whileHover={{ y: -5, borderColor: social.color }}
                                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-[10px] md:text-xs tracking-widest text-center md:text-left">
                        © {currentYear} <span className="text-white/40 font-bold">DIGITRIZON</span>. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/PrivacyPolicy" className="text-white/20 hover:text-white text-[10px] md:text-xs transition-colors">Privacy Policy</Link>
                        <Link href="/TermsOfService" className="text-white/20 hover:text-white text-[10px] md:text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />
        </footer>
    );
}