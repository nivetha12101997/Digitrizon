"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    { question: "What services does DIGITRIZON offer?", answer: "DIGITRIZON provides mobile app development, web app development, and digital marketing services for startups and growing businesses. We design each solution to be scalable, high-performance, and aligned with your long-term goals." },
    { question: "How long does it take to develop an app or website?", answer: "Most projects take anywhere from a few weeks to a few months. After understanding your requirements, we create a timeline with clear milestones to keep development fast, structured, and predictable." },
    { question: "Do you offer support after launching the app or website?", answer: "Yes, we provide ongoing support, maintenance, feature updates, and performance optimization to keep your mobile app or website running smoothly as your business grows." },
    { question: "Do you provide digital growth services along with development?", answer: "Yes. DIGITRIZON offers SEO, social media management, PPC execution, content strategy, and growth services to help your product gain visibility after launch. This gives you both development and marketing under one roof." },
    { question: "Can you help if I only have an idea and no technical knowledge?", answer: "Absolutely. Many founders come to us with just an idea. We guide you through planning, UI/UX design, development, and launch to make the process simple and stress-free." },
    { question: "How much does it cost to build an app or website or run digital growth activities?", answer: "Pricing totally depends on your requirements, features, and overall scope. We offer flexible options for app development, web development, and digital growth, so you can choose what fits your budget. Share your ideas or goals, and we’ll give you a clear estimate." },
    { question: "Can you rebuild or improve my existing website or mobile app?", answer: "Yes. We help upgrade outdated systems, improve UI/UX, add new features, enhance performance, and modernize existing digital products." },
    { question: "Will you help me choose the right tech stack?", answer: "Definitely. We guide you on choosing the best technologies for scalability and speed, whether it’s React Native, Next.js, or modern Node.js tools." },
    { question: "Do you take on small projects or startup-sized budgets?", answer: "Yes. DIGITRIZON works with startups, small teams, and growing businesses that need reliable mobile app development, web development, or digital growth support, even with limited budgets. We offer flexible engagement models so you can start small and scale as you grow." },
    { question: "How do I get started with DIGITRIZON?", answer: "Submit your details through our contact form. We’ll follow up to schedule a brief discussion and outline the next steps for a seamless beginning." }
];

const firstColumn = faqs.slice(0, 5);
const secondColumn = faqs.slice(5);

export default function FaqAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        /* Reduced py-24 to py-12 to remove extra vertical space */
        <section className="bg-black py-12 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Centered Heading - Reduced mb-20 to mb-10 */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-bold text-white tracking-tighter"
                    >
                        Frequently Asked <span className="text-[#FF6B00]">Questions</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                    {[firstColumn, secondColumn].map((column, colIdx) => (
                        <div key={colIdx} className="flex flex-col">
                            {column.map((item, index) => {
                                const actualIndex = colIdx === 0 ? index : index + 5;
                                const isOpen = activeIndex === actualIndex;

                                return (
                                    <motion.div
                                        key={actualIndex}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="border-b border-white/10"
                                    >
                                        <button
                                            className="w-full py-5 flex items-center justify-between text-left group" // Reduced py-6 to py-5
                                            onClick={() => setActiveIndex(isOpen ? null : actualIndex)}
                                        >
                                            <span className={`text-[15px] font-bold transition-colors duration-300 ${isOpen ? "text-[#FF6B00]" : "text-white/70 group-hover:text-white"}`}>
                                                {item.question}
                                            </span>

                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className={`ml-4 transition-colors ${isOpen ? "text-[#FF6B00]" : "text-white/20 group-hover:text-white/60"}`}
                                            >
                                                <ChevronDown size={20} />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    <p className="text-white/40 pb-5 leading-relaxed text-[15px] max-w-xl">
                                                        {item.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}