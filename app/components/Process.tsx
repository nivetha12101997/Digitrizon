'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket, LineChart } from 'lucide-react';

const steps = [
    { title: "Discovery & Strategy", Icon: Lightbulb, desc: "Understand business goals, technical needs, and growth objectives." },
    { title: "Design & Prototyping", Icon: PenTool, desc: "Create intuitive user experiences and conversion-focused interfaces." },
    { title: "Development & Testing", Icon: Code2, desc: "Build scalable solutions through agile sprints backed by rigorous QA." },
    { title: "Launch & Optimization", Icon: Rocket, desc: "Deploy, monitor performance, and optimize for performance and visibility." },
    { title: "Growth & Ongoing Support", Icon: LineChart, desc: "Continuous improvements, digital growth execution, and long-term scalability." },
];

const ITEM_WIDTH = 350;

const ProcessItem = ({ step, index }: { step: any, index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div style={{ width: ITEM_WIDTH }} className="relative flex items-center justify-center flex-shrink-0 h-[450px]">
            {/* Center Node (Marker Circle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="absolute w-12 h-12 rounded-full bg-[#FF6B00]/20 blur-xl" />
                <div className="w-4 h-4 rounded-full bg-black border-[3px] border-[#FF6B00] shadow-[0_0_15px_#FF6B00]" />
            </div>

            {/* Content Card */}
            <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[280px] ${isEven ? 'bottom-[calc(50%+50px)]' : 'top-[calc(50%+50px)]'
                }`}>
                <div className="relative z-30">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/50 flex items-center justify-center">
                            <step.Icon size={20} className="text-[#FF6B00]" strokeWidth={2} />
                        </div>
                        <h3 className="text-[16px] font-bold text-white tracking-wider uppercase">
                            {step.title}
                        </h3>
                    </div>
                    <p className="text-[15px] text-white/50 leading-relaxed font-medium">
                        {step.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function FloatingProcess() {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                const totalContentWidth = steps.length * ITEM_WIDTH;
                const viewportWidth = window.innerWidth;
                // We want the last item to end centered in the viewport
                setTranslateX(totalContentWidth - viewportWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -translateX]);

    // PRECISE LINE CALCULATION:
    // Starts at exactly 50% of the first item
    const lineStartOffset = ITEM_WIDTH / 2;
    // Length is exactly the distance between the center of item 1 and the center of the last item
    const totalLineLength = (steps.length - 1) * ITEM_WIDTH;

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">

                {/* Header */}
                <div className="relative w-full px-6 pt-20 md:pt-24 z-50 text-center flex-shrink-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-3xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6"
                    >
                        How We Work: <span className="text-[#FF6B00]">From Idea to Launch</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-[16px] md:text-[15px] max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
                    >
                        Our structured process ensures every digital product is built for scale and long-term success.
                    </motion.p>
                </div>

                {/* Centered Track Area */}
                <div className="flex-grow flex items-center relative w-full overflow-hidden">
                    <motion.div
                        ref={containerRef}
                        style={{ x }}
                        className="flex relative items-center"
                    >
                        {/* THE LINE: 
                            - Starts at lineStartOffset (middle of step 1)
                            - Width is totalLineLength (touches middle of last step)
                        */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#FF6B00]/30 z-10"
                            style={{
                                left: `${lineStartOffset}px`,
                                width: `${totalLineLength}px`,
                            }}
                        />

                        {steps.map((step, index) => (
                            <ProcessItem key={index} step={step} index={index} />
                        ))}
                    </motion.div>
                </div>

                {/* Side Fade Overlays */}
                {/* <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-40 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-40 pointer-events-none" /> */}
            </div>
        </section>
    );
}