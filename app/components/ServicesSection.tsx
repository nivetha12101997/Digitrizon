'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Mobile App Development",
        image: "/images/mobile1.png",
        description: 'We build secure, intuitive, and scalable mobile applications engineered for long-term performance and seamless cross-platform experience.'
    },
    {
        title: "Web App Development",
        image: "/images/api.png",
        description: "We develop responsive, secure, and high-performing web applications that streamline workflows and elevate user experience.",
    },
    {
        title: "Digital Marketing",
        image: "/images/digitalMarketing.png",
        description: "We support business growth through data-backed digital strategies focused on visibility, acquisition, and measurable performance."
    },
];

const StaticButton = () => {
    return (
        <div className="relative w-full max-w-[140px] h-[40px] rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B00] group-hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]">
            <div className="flex items-center justify-between w-full px-5">
                <span className="font-bold text-[10px] tracking-wider uppercase text-black group-hover:text-white transition-colors">
                    Know More
                </span>
                <ArrowRight size={14} className="text-black group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
        </div>
    );
};

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
                y: -15,
                transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="group relative flex flex-col h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
        >
            <div className="relative w-12 h-12 mb-6">
                <Image src={service.image} alt={service.title} fill className="object-contain" />
            </div>
            <h3 className="text-[16px] font-bold text-white mb-3 uppercase tracking-wider group-hover:text-[#FF6B00] transition-colors">
                {service.title}
            </h3>
            <p className="text-white/50 text-[15px] mb-8 flex-grow leading-relaxed">
                {service.description}
            </p>

            <StaticButton />
        </motion.div>
    );
}

export default function ServicesSection() {
    return (
        /* Padding set to py-0 to remove space above and below the section */
        <section className="bg-black py-0 px-6 relative overflow-hidden">

            <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <motion.div
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#FF6B00]/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-bold text-white tracking-tighter"
                    >
                        What We Do <span className="text-[#FF6B00]">Best</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 mt-4 max-w-2xl mx-auto text-[16px] md:text-[15px] leading-relaxed px-4 md:px-0"
                    >
                        Digital Craftsmanship for Ambitious Businesses
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}