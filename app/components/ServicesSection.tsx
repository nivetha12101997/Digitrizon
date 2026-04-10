"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Dynamically import demos
const MobileAppDemo = dynamic(() => import("./MobileAppDemo"), { ssr: false, loading: () => <div style={{ background: "transparent" }} /> });
const WebsitesDemo = dynamic(() => import("./WebsitesDemo"), { ssr: false, loading: () => <div style={{ background: "transparent" }} /> });
const EcommerceDemo = dynamic(() => import("./EcommerceDemo"), { ssr: false, loading: () => <div style={{ background: "transparent" }} /> });
const SaasDemo = dynamic(() => import("./SaasDemo"), { ssr: false, loading: () => <div style={{ background: "transparent" }} /> });
const GrowthDemo = dynamic(() => import("./GrowthDemo"), { ssr: false, loading: () => <div style={{ background: "transparent" }} /> });

type ServiceIndex = 0 | 1 | 2 | 3 | 4;

const SERVICE_NAMES = ["Mobile App", "Web App", "E-Commerce", "SaaS Product", "Digital Growth"];
const SERVICE_ICONS = ["📱", "🌐", "🛒", "⚡", "📈"];

const CONTENT = [
  { label: "Mobile App Development", title: "Secure. Intuitive.\nBuilt to Scale.", desc: "We build secure, intuitive, and scalable mobile applications..." },
  { label: "Web App Development", title: "Responsive. Secure.\nHigh-Performing.", desc: "We develop responsive, secure, and high-performing web applications..." },
  { label: "E-Commerce Development", title: "Powerful Stores.\nSeamless Sales.", desc: "We create powerful online stores..." },
  { label: "SaaS Product Development", title: "Design. Build.\nLaunch. Scale.", desc: "We help startups design, build, and launch scalable SaaS..." },
  { label: "Digital Growth", title: "Visibility.\nAcquisition.\nPerformance.", desc: "We support business growth through data-backed strategies..." },
];

const DEMOS = [MobileAppDemo, WebsitesDemo, EcommerceDemo, SaasDemo, GrowthDemo];

export default function ServicesShowcase() {
  const [active, setActive] = useState<ServiceIndex>(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 1. Generate dynamic Slugs/IDs from the Content Labels
  // This turns "Mobile App Development" into "#mobile-app-development"
  const slugifiedItems = useMemo(() => {
    return SERVICE_NAMES.map((item, index) => ({
      index: index as ServiceIndex,
      hash: `#${item.toLowerCase().replace(/\s+/g, "-")}`,
    }));
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // 2. Handle Dynamic Hash Changes
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (!currentHash) return;

      console.log("Current Hash:", currentHash);
      console.log("Slugified Items:", slugifiedItems);
      const matchingItem = slugifiedItems.find((item) => item.hash === currentHash);
      
      if (matchingItem) {
        setActive(matchingItem.index);
        // Scroll to the section when a match is found
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    handleHashChange(); // Check on load
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [slugifiedItems]);

  const handleShow = (i: ServiceIndex) => {
    setActive(i);
    // Update URL without jumping the page
    const newHash = slugifiedItems[i].hash;
    window.history.replaceState(null, "", newHash);
  };

  return (
    <div ref={sectionRef} id="services" className="py-20" style={{ backgroundColor: "#000" }}>
      <div className="hdr text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tighter mb-4">
          What We Do 
          <span className="text-[#FF6B00] px-2">Best</span>
        </h1>
        <p className="text-gray-400">Digital Craftsmanship for Ambitious Businesses</p>
      </div>

      {/* Desktop Nav */}
      {!isMobile && (
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#111] p-2 rounded-full border border-white/10">
            {SERVICE_NAMES.map((name, i) => (
              <button
                key={name}
                className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                  active === i ? "bg-white text-black" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => handleShow(i as ServiceIndex)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      {isMobile && (
        <div className="flex overflow-x-auto gap-3 px-4 mb-10 no-scrollbar">
          {SERVICE_NAMES.map((name, i) => (
            <button
              key={name}
              onClick={() => handleShow(i as ServiceIndex)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border ${
                active === i 
                ? "bg-[#FF6B00] border-[#FF6B00] text-white" 
                : "border-white/20 text-gray-400"
              }`}
            >
              <span>{SERVICE_ICONS[i]}</span>
              <span className="text-xs whitespace-nowrap">{name}</span>
            </button>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        {CONTENT.map((item, i) => {
          const DemoComponent = DEMOS[i];
          if (active !== i) return null; // Only render active for performance, or use CSS visibility

          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#FF6B00] font-mono text-sm tracking-widest uppercase">
                  <span className="w-8 h-[1px] bg-[#FF6B00]" />
                  {item.label}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {item.title.split("\n").map((line, idx) => (
                    <span key={idx}>{line}<br/></span>
                  ))}
                </h2>
                <p className="text-gray-400 text-lg max-w-md">{item.desc}</p>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest"
                >
                  Know more <ArrowRight size={18} />
                </motion.button>
              </div>

              <div className="relative aspect-square lg:aspect-video bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 to-transparent" />
                <div className="relative h-full w-full flex items-center justify-center">
                  <DemoComponent />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}