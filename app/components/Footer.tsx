'use client';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
        { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
        { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
        { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
    ];

    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-black tracking-tighter text-white">
                                DIGITRIZON
                            </h2>
                            <p className="text-white/40 mt-2 text-sm tracking-widest uppercase">
                                Build Your Future Now
                            </p>
                        </div>
                        <p className="text-white/30 text-[15px] leading-relaxed max-w-xs">
                            Transforming ideas into high-performance digital realities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Services', 'Insights', 'About Us', 'Contact Us'].map((link) => (
                                <li key={link}>
<a href="#" className="text-white/40 hover:text-[#FF6B00] transition-colors text-[14px]">                                        {link}
                                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Our Services</h4>
                        <ul className="space-y-4">
                            {['Mobile App Development', 'Web App Development', 'Digital Growth', 'Get In Touch'].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white/40 text-sm">
                                <Mail size={16} className="text-[#FF6B00]" />
                                <a href="mailto:sales@digitrizon.com" className="hover:text-white transition-colors">sales@digitrizon.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-white/40 text-sm">
                                <Phone size={16} className="text-[#FF6B00]" />
                                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91 XXXXXXXXXX</a>
                            </li>
                            <li className="flex items-center gap-3 text-white/40 text-sm">
                                <MapPin size={16} className="text-[#FF6B00]" />
                                <span>Chennai, India</span>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -3, color: '#FF6B00' }}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#FF6B00]/50 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-xs tracking-widest">
                        © {currentYear} <span className="text-white/40">DIGITRIZON</span>. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-white/20 hover:text-white text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/20 hover:text-white text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />
        </footer>
    );
}