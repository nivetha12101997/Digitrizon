'use client'

import { useEffect, useRef , ReactNode} from 'react'
import Image from 'next/image'
import { ArrowRight, Sparkles, Zap, Target, Compass, Rocket ,BrainCircuit,Orbit,} from 'lucide-react'
import { Button } from '../../components/ui/button'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/Footer'

/* ============= Animated Background Components ============= */

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const HeroBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#FF6B00] opacity-20 blur-[140px]" />
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FF6B00] opacity-30 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#FF6B00] opacity-20 blur-3xl animate-float-medium" />
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 animate-spin-slow" viewBox="0 0 800 800" fill="none">
            <circle cx="400" cy="400" r="200" stroke="#FF6B00" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="400" cy="400" r="300" stroke="#FF6B00" strokeWidth="1" strokeDasharray="2 12" />
            <circle cx="400" cy="400" r="380" stroke="#FF6B00" strokeWidth="1" strokeDasharray="8 4" />
        </svg>
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-40 animate-spin-reverse" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="150" stroke="#FF6B00" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="300" cy="300" r="250" stroke="#FFA352" strokeWidth="1" strokeDasharray="2 10" />
        </svg>
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent animate-scan opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
)

const DotsPattern = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: 'radial-gradient(#FF6B00 1px, transparent 1px)',
                backgroundSize: '28px 28px',
            }}
        />
    </div>
)

const WavyLines = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
            <linearGradient id="wg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF6B00" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
            <path
                key={i}
                d={`M0,${100 + i * 80} Q300,${50 + i * 80} 600,${100 + i * 80} T1200,${100 + i * 80}`}
                stroke="url(#wg)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="6 12"
                className="animate-dash"
                style={{ animationDuration: `${15 + i * 2}s` }}
            />
        ))}
    </svg>
)

const HexGrid = () => (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 800 800">
        <defs>
            <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(1.3)">
                <polygon points="30,1 55,15 55,40 30,54 5,40 5,15" fill="none" stroke="#FF6B00" strokeWidth="0.7" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
)

const CirclesPattern = () => (
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full border border-[#FF6B00]/20 animate-spin-slow" />
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full border border-[#FF6B00]/30 animate-spin-reverse translate-x-12 translate-y-12" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full border border-[#FF6B00]/20 animate-spin-slow" />
        <div className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-[#FF6B00]/10 blur-2xl animate-float-medium" />
    </div>
)

const CTABackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full bg-[#FF6B00] opacity-25 blur-[160px]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        {[...Array(14)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#FF6B00]"
                style={{
                    left: `${(i * 7) % 100}%`,
                    bottom: `-10px`,
                    animation: `float-slow ${8 + (i % 5)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                    opacity: 0.6,
                    boxShadow: '0 0 10px #FF6B00',
                }}
            />
        ))}
    </div>
)

/* ============= Reveal wrapper ============= */
const Reveal = ({ children, delay = 0, className = '' }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null) // 1. Add Type to useRef
    useEffect(() => {
        const el = ref.current
        if (!el) return
        
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        // 2. Access style safely
                        el.style.animation = `fadeUp 0.9s ${delay}s ease forwards`
                        io.unobserve(el)
                    }
                })
            },
            { threshold: 0.15 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [delay])

    return (
        <div ref={ref} className={className} style={{ opacity: 0 }}>
            {children}
        </div>
    )
}

/* ============= Main Page ============= */
export default function AboutSectionPage() {
    return (
        <main className="relative bg-black text-white">
            <Navbar />
            {/* ============ HERO ============ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <Reveal delay={0.15}>
                        <h1 className="text-4xl md:text-8xl font-semibold leading-[1.02] tracking-tight mb-8">
                            Built for <span >Brands</span>
                            <br />
                            That Want to <span className="italic font-light">Lead</span>
                            {/* <br /> */}
                            <span className="ml-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6B00]/90">Digitally</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <p className="text-[15px] text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                            Modern digital experiences engineered for brands with a bold vision.
                        </p>
                    </Reveal>
                    <Reveal delay={0.55}>
                        <div className="mt-14 flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <a href="#cta">
                                <Button className="group bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-black font-semibold text-base px-8 py-6 rounded-full shadow-[0_0_40px_rgba(255,107,0,0.4)] transition-all hover:shadow-[0_0_60px_rgba(255,107,0,0.7)]">
                                    Start a Conversation
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>

                        </div>
                    </Reveal>
                </div>
                <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-[#FF6B00]/60" />
                <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-[#FF6B00]/60" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-[#FF6B00]/60" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[#FF6B00]/60" />
            </section>

            {/* ============ SECTION 2: STORY ============ */}
            <section id="story" className="relative py-0 md:py-20 overflow-hidden">
                <DotsPattern />
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#FF6B00] opacity-10 blur-[120px]" />
                <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div>
                            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-8">
                                Where <span className="text-[#FF6B00]">Digital Thinking</span> Meets Real Business Intent
                            </h2>
                            <div className="space-y-6 text-white/75 text-[16px] md:text-[15px] leading-relaxed">
                                <p>DIGITRIZON was built with a simple belief, strong businesses deserve digital experiences that feel current, intuitive, and purposeful.</p>
                                <p>In a world where everything is becoming more digital, many brands still struggle to find the right team to turn ideas into something real, usable, and ready to grow. That gap is what led to DIGITRIZON.</p>
                                <p>The brand was created to bring together creative thinking, modern technology, and business direction in a way that feels practical, collaborative, and future-focused.</p>
                                <div className="pt-4 border-l-2 border-[#FF6B00] pl-6">
                                    <p className="text-white text-[16px] md:text-[15px] font-medium">It is not just about launching digital products.</p>
                                    <p className="text-[#FF6B00] text-[16px] md:text-[15px] font-semibold mt-2">It is about creating with intention.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="relative aspect-[3/2] max-w-xl mx-auto">
                            <div className="absolute -inset-4 border border-[#FF6B00]/40 rounded-3xl pointer-events-none" />
                            <div className="absolute -inset-8 border border-[#FF6B00]/20 rounded-3xl animate-pulse-glow pointer-events-none" />
                            <div className="relative rounded-2xl overflow-hidden h-full w-full border border-[#FF6B00]/30 shadow-2xl">
                                <img src="/images/gang.png" alt="Team" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/10 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 via-transparent to-transparent mix-blend-overlay" />
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#FF6B00]" />
                                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#FF6B00]" />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#FF6B00]" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FF6B00]" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ============ SECTION 3: MORE THAN A NAME ============ */}
            <section className="relative py-0 md:py-20 overflow-hidden border-y border-[#FF6B00]/10">
                <HexGrid />
                <WavyLines />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#FF6B00] opacity-10 blur-[130px]" />
                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-6xl font-extrabold leading-tight mb-10">
                            More Than a <br />
                            <span className="text-[#FF6B00]">Brand Name</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className=" text-white/75 font-light leading-relaxed max-w-3xl mx-auto">
                            DIGITRIZON reflects a vision of helping businesses grow in a world shaped by digital change.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="mt-8  text-white/60 max-w-3xl mx-auto leading-relaxed">
                            The name represents a space where ideas evolve into digital possibilities, where businesses can create, adapt, and move ahead with greater confidence.
                        </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {[
                                { label: 'Not rushed', desc: 'progress.', icon: Zap },
                                { label: 'Not trend-driven', desc: 'progress.', icon: Compass },
                                { label: 'Meaningful', desc: 'growth.', icon: Target },
                            ].map((item, idx) => (
                                <div key={idx} className="group relative p-8 rounded-2xl border border-[#FF6B00]/20 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm hover:border-[#FF6B00]/60 transition-all">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.6)]">
                                        <item.icon className="w-5 h-5 text-black" />
                                    </div>
                                    <div className="pt-6">
                                        <p className="text-white/60 text-sm">{item.label}</p>
                                        <p className="text-[#FF6B00] text-2xl font-bold mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.55}>
                        <p className="mt-16 text-[26px] md:text-[25px] font-semibold">
                            At its core, DIGITRIZON is about <span className="text-[#FF6B00]">progress.</span>
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ============ SECTION 4: BUILDING THINGS ============ */}
            <section className="relative py-2 md:py-0 overflow-hidden">
                <CirclesPattern />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <Reveal delay={0.1} className="order-2 lg:order-1">
                        <div className="relative aspect-[4/5] max-w-lg mx-auto">
                            <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] animate-spin-slow opacity-60" viewBox="0 0 400 400">
                                <circle cx="200" cy="200" r="198" fill="none" stroke="#FF6B00" strokeWidth="1" strokeDasharray="10 8" />
                            </svg>
                            <div className="relative rounded-2xl overflow-hidden h-full border border-[#FF6B00]/30 shadow-[0_0_80px_rgba(255,107,0,0.15)]">
                                <img src="/images/products.png" alt="Products" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tl from-black/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/15 to-transparent mix-blend-overlay" />
                                {/* <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm border border-[#FF6B00]/40 px-3 py-1.5 rounded-full">
                                    <span className="text-[10px] font-mono tracking-widest text-[#FF6B00] uppercase">// built.with.intention</span>
                                </div> */}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal className="order-1 lg:order-2">
                        <div>
                            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-8">
                                Building Things That <span className="text-[#FF6B00]">Actually Matter</span>
                            </h2>
                            <div className="space-y-6 text-white/75 text-[16px] md:text-[15px] leading-relaxed">
                                <p className="text-white/50">Some digital products are built just to exist.</p>
                                <p className="text-xl text-white font-medium">DIGITRIZON believes they should do more than that.</p>
                                <p>They should create value for businesses, meaningful experiences for users, and real momentum for growth.</p>
                                <p>That is why the focus always stays on creating things that feel intentional, products, platforms, and digital experiences that are not just visually modern, but useful, relevant, and worth investing in.</p>
                                <div className="pt-6 mt-6 relative border-l-2 border-[#FF6B00] pl-6">
                                    <p className="text-white/90 text-lg leading-relaxed">
                                        Because when digital is done right, it does more than support a business.
                                        <br />
                                        <span className="text-[#FF6B00] font-semibold">It helps shape where that business can go next.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ============ SECTION 5: THINK BIGGER ============ */}
            <section className="relative py-20 md:py-15 overflow-hidden border-t border-[#FF6B00]/10">
                <DotsPattern />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#FF6B00] opacity-10 blur-[130px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#FF6B00] opacity-10 blur-[130px] -translate-y-1/2" />
                <div className="relative max-w-6xl mx-auto px-6">
                    <Reveal>
                        <div className="text-center">
                            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-5 max-w-4xl mx-auto">
                                For Businesses Ready to 
                                <br/>
                                <span className="text-[#FF6B00]">Think Bigger</span>
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="grid md:grid-cols-2 gap-10 mt-5">
                            <div className="relative p-10 rounded-3xl border border-[#FF6B00]/20 bg-gradient-to-br from-[#FF6B00]/[0.04] to-transparent backdrop-blur-sm">
                                <Rocket className="w-10 h-10 text-[#FF6B00] mb-6" />
                                <p className="text-white/80 text-[16px] md:text-[15px] leading-relaxed">DIGITRIZON is being built for a new generation of businesses, brands that want to move faster, look sharper, and grow through stronger digital experiences.</p>
                            </div>
                            <div className="relative p-10 rounded-3xl border border-[#FF6B00]/20 bg-gradient-to-br from-[#FF6B00]/[0.04] to-transparent backdrop-blur-sm">
<Target className="w-10 h-10 text-[#FF6B00] mb-6" />               <p className="text-white/80 text-[16px] md:text-[15px] leading-relaxed">The long-term vision is to become a trusted digital partner for businesses that want to build with more intention and less guesswork.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <div className="mt-20 text-center">
                            <p className="text-3xl md:text-5xl font-bold">This is only <span className="text-[#FF6B00] italic">the beginning!</span></p>
                            <p className="mt-6 text-white/70 text-[16px] md:text-[15px] max-w-2xl mx-auto">And the goal is clear, to help more businesses step into the digital future with confidence.</p>
                            <div className="mt-12 flex justify-center">
                                <div className="h-px w-32 shimmer-line" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ============ SECTION 6: CTA ============ */}
            <section id="cta" className="relative py-22 md:py-15 overflow-hidden">
                <CTABackground />
                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
                            Thinking beyond the 
                             {/* <br /> */}
                           <span className="text-[#FF6B00] ml-4">usual?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="text-[16px] md:text-[15px] text-white/75 font-light max-w-2xl mx-auto">So are we. Let's create something that stands apart.</p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="mt-14 flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <a href="mailto:hello@digitrizon.com">
                                <Button className="group relative bg-[#FF6B00] hover:bg-[#FF6B00] text-black font-bold text-lg px-10 py-7 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.3)] transition-all hover:shadow-[0_0_10px_rgba(255,107,0,0.6)] hover:scale-105">
                                    <span className="relative z-10 flex items-center">
                                        Get in Touch
                                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-50" />
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
            <Footer />
        </main>
    )
}