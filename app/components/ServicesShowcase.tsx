"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Dynamically import demos to avoid SSR issues
const MobileAppDemo = dynamic(() => import("./MobileAppDemo"), { ssr: false , loading: () => <div style={{ background: "transparent" }} />,});
const WebsitesDemo = dynamic(() => import("./WebsitesDemo"), { ssr: false , loading: () => <div style={{ background: "transparent" }} />,});
const EcommerceDemo = dynamic(() => import("./EcommerceDemo"), { ssr: false , loading: () => <div style={{ background: "transparent" }} />,});
const SaasDemo = dynamic(() => import("./SaasDemo"), { ssr: false , loading: () => <div style={{ background: "transparent" }} />,});
const GrowthDemo = dynamic(() => import("./GrowthDemo"), { ssr: false , loading: () => <div style={{ background: "transparent" }} />,});

type ServiceIndex = 0 | 1 | 2 | 3 | 4;

const SERVICE_NAMES = ["Mobile App", "Web App", "E-Commerce", "SaaS Product", "Digital Growth"];
const SERVICE_ICONS = ["📱", "🌐", "🛒", "⚡", "📈"];

const CONTENT = [
  {
    label: "Mobile App Development",
    title: "Secure. Intuitive.\nBuilt to Scale.",
    desc: "We build secure, intuitive, and scalable mobile applications engineered for long-term performance and seamless cross-platform experience.",
  },
  {
    label: "Web App Development",
    title: "Responsive. Secure.\nHigh-Performing.",
    desc: "We develop responsive, secure, and high-performing web applications that streamline workflows and elevate user experience.",
  },
  {
    label: "E-Commerce Development",
    title: "Powerful Stores.\nSeamless Sales.",
    desc: "We create powerful online stores that deliver smooth shopping experiences, secure transactions, and scalable performance for growing businesses.",
  },
  {
    label: "SaaS Product Development",
    title: "Design. Build.\nLaunch. Scale.",
    desc: "We help startups and businesses design, build, and launch scalable SaaS products with modern architecture and user-focused experiences.",
  },
  {
    label: "Digital Growth",
    title: "Visibility.\nAcquisition.\nPerformance.",
    desc: "We support business growth through data-backed digital strategies focused on visibility, acquisition, and measurable performance.",
  },
];

const DEMOS = [MobileAppDemo, WebsitesDemo, EcommerceDemo, SaasDemo, GrowthDemo];

export default function ServicesShowcase() {
  const [active, setActive] = useState<ServiceIndex>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

    // Track whether the whole section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 } // fires as soon as any part leaves/enters
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleShow = (i: ServiceIndex) => setActive(i);

  return (
    <div ref={sectionRef} style={{  backgroundColor: "#000" }}>
      <div className="hdr">

        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tighter mb-4 md:mb-6">
          What We Do 
          <span className="text-3xl md:text-6xl font-bold text-[#FF6B00] tracking-tighter mb-4 md:mb-6 p-2">Best</span>
        </h1>
        <p className="hsub"> Digital Craftsmanship for Ambitious Businesses</p>
      </div>

      {/* Desktop Tab Nav */}
      {!isMobile && (
        <div className="snav-outer">
          <div className="snav">
            {SERVICE_NAMES.map((name, i) => (
              <button
                key={name}
                className={`stab${active === i ? " on" : ""}`}
                onClick={() => handleShow(i as ServiceIndex)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Pill Nav */}
      {isMobile && (
        <div className="mob-service-nav">
          {SERVICE_NAMES.map((name, i) => (
            <div
              key={name}
              className={`msn-pill${active === i ? " on" : ""}`}
              onClick={() => handleShow(i as ServiceIndex)}
            >
              <span className="msn-icon">{SERVICE_ICONS[i]}</span>
              {name}
            </div>
          ))}
        </div>
      )}

      <div className="stage">
        {SERVICE_NAMES.map((_, i) => {
          const DemoComponent = DEMOS[i];
          return (
            <div key={i} className={`svc${active === i ? " on" : ""}`}>
              <div className="split">
                <div className="cpanel">
                  <div className="svc-label">
                    <span className="svc-label-bar" />
                    {CONTENT[i].label}
                  </div>
                  <h2 className="stitle">
                    {CONTENT[i].title.split("\n").map((line, j, arr) => (
                      <span key={j}>
                        {line}
                        {j < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h2>
                  <p className="sdesc">{CONTENT[i].desc}</p>
                  <div className="ctarow">
                    {/* <button className="btnp">Start Your Project →</button> */}
                    <motion.button 
  whileHover={{ 
    scale: 1.05, 
    backgroundColor: "#FF6B00",
    color: "#ffffff",
    boxShadow: "0px 0px 20px rgba(255, 107, 0, 0.3)",
    transition: { duration: 0.3 }
  }}
  whileTap={{ scale: 0.95 }}
  // ADDED: flex items-center justify-center gap-2
  className="flex items-center justify-center gap-2 px-7 py-3 font-bold bg-white text-black rounded-full text-[11px] uppercase tracking-widest"
>
  <span>Know more</span>
  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
</motion.button>
                  </div>
                </div>
                <div className="dpanel">
                  <div className="corner-tl" />
                  <div className="corner-br" />
                  <div className="dbox">
                    <div className="dbox-glow" />
                    {active === i && <DemoComponent />}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}