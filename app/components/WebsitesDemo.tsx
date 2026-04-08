"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserDots, LivePill, LockIcon } from "./atoms";

const SITE_PAGES = ["Home", "About", "Services", "Portfolio", "Contact"];
const SITE_URLS = [
  "nexusagency.com",
  "nexusagency.com/about",
  "nexusagency.com/services",
  "nexusagency.com/work",
  "nexusagency.com/contact",
];

export default function WebsitesDemo() {
  const [siteIdx, setSiteIdx] = useState(0);
  const [visitors, setVisitors] = useState(247);
  const [delta, setDelta] = useState(12);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);

  const clear = () => {
    intervals.current.forEach(clearInterval);
    intervals.current = [];
  };

  useEffect(() => {
    clear();
    const autoSlide = setInterval(() => setSiteIdx((i) => (i + 1) % 5), 3500);
    intervals.current.push(autoSlide);

    const visitorTick = setInterval(() => {
      const change = Math.floor(Math.random() * 14) - 4;
      setVisitors((v) => Math.max(190, v + change));
      setDelta(change);
    }, 2000);
    intervals.current.push(visitorTick);

    return clear;
  }, []);

  return (
    <div className="site-demo">
      <div className="site-browser">
        <div className="site-browser-bar">
          <BrowserDots />
          <div className="b-url">
            <LockIcon />
            {SITE_URLS[siteIdx]}
          </div>
          <LivePill style={{ marginLeft: 8 }} />
        </div>

        <div className="site-pages-outer">
          <div className="site-pages-track" style={{ transform: `translateX(${-siteIdx * 100}%)` }}>
            {/* Page 1: Home */}
            <div className="site-page">
              <div className="site-nav-bar">
                <div className="site-brand">NEXUS</div>
                <div className="site-nav-links"><span>Home</span><span>About</span><span>Services</span><span>Work</span><span>Contact</span></div>
                <div className="site-cta-pill">Get Started</div>
              </div>
              <div className="site-hero-sec">
                <div className="orb" style={{ width: 80, height: 80, top: -20, right: 50 }} />
                <div className="orb" style={{ width: 40, height: 40, top: 30, right: 130, animationDelay: "2s" }} />
                <div className="orb" style={{ width: 22, height: 22, top: 60, right: 70, animationDelay: "4s" }} />
                <div className="sh-eye">Award-Winning Digital Agency</div>
                <div className="sh-h1">We Build <em style={{ color: "var(--o)", fontStyle: "normal" }}>Bold Brands</em> Online</div>
                <div className="sh-p">High-converting websites and digital experiences that grow your business from day one.</div>
                <div className="sh-btns">
                  <div className="sh-bp">View Our Work</div>
                  <div className="sh-bs">Our Services</div>
                </div>
                <div className="sh-stats">
                  {[["200+", "Projects"], ["98%", "Satisfaction"], ["8 Yrs", "Experience"]].map(([v, l]) => (
                    <div key={l}>
                      <div className="sh-sv">{v}</div>
                      <div className="sh-sl">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="site-services-strip">
                {[
                  { t: "Performance", s: "99+ PageSpeed score" },
                  { t: "Mobile Ready", s: "Every screen size" },
                  { t: "Secure", s: "Enterprise-grade security" },
                ].map((item) => (
                  <div className="sss-item" key={item.t}>
                    <div className="sss-ico">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                    <div className="sss-t">{item.t}</div>
                    <div className="sss-s">{item.s}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 2: About */}
            <div className="site-page">
              <div className="page-about">
                <div className="site-nav-bar">
                  <div className="site-brand">NEXUS</div>
                  <div className="site-nav-links"><span>Home</span><span style={{ color: "var(--o)", fontWeight: 600 }}>About</span><span>Services</span><span>Work</span><span>Contact</span></div>
                  <div className="site-cta-pill">Get Started</div>
                </div>
                <div className="about-hero">
                  <div>
                    <div className="about-h">We&apos;re NEXUS</div>
                    <div className="about-sub">A team of 24 designers, developers &amp; strategists building digital products that perform.</div>
                  </div>
                </div>
                <div className="about-stats">
                  {[["200+", "Projects"], ["24", "Team Members"], ["8", "Years Active"]].map(([v, l]) => (
                    <div className="as-item" key={l}><div className="as-v">{v}</div><div className="as-l">{l}</div></div>
                  ))}
                </div>
                <div className="about-team">
                  <div className="at-title">Core Team</div>
                  <div className="at-grid">
                    {[
                      { name: "James W.", role: "Lead Dev", bg: "linear-gradient(135deg,#FF6B00,#ff3d00)" },
                      { name: "Sara K.", role: "Design Lead", bg: "linear-gradient(135deg,#3b82f6,#1d4ed8)" },
                      { name: "Ravi M.", role: "Strategy", bg: "linear-gradient(135deg,#22c55e,#16a34a)" },
                    ].map((m) => (
                      <div className="at-member" key={m.name}>
                        <div className="at-av" style={{ background: m.bg }} />
                        <div className="at-name">{m.name}</div>
                        <div className="at-role">{m.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="about-awards">
                  {["Awwwards 2024", "CSS Design Award", "FWA Site of Year"].map((a) => (
                    <div className="award" key={a}><span className="award-star">★</span>{a}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Page 3: Services */}
            <div className="site-page">
              <div className="page-services">
                <div className="site-nav-bar">
                  <div className="site-brand">NEXUS</div>
                  <div className="site-nav-links"><span>Home</span><span>About</span><span style={{ color: "var(--o)", fontWeight: 600 }}>Services</span><span>Work</span><span>Contact</span></div>
                  <div className="site-cta-pill">Get Started</div>
                </div>
                <div className="ps-header">
                  <div className="ps-title">What We Build</div>
                  <div className="ps-sub">End-to-end digital solutions tailored to your growth goals</div>
                </div>
                <div className="ps-list">
                  {[
                    { t: "Mobile App Development", s: "iOS & Android apps with seamless UX", badge: "Popular" },
                    { t: "Website Development", s: "Fast, responsive, conversion-focused", badge: "New" },
                    { t: "E-Commerce", s: "Stores that convert and scale" },
                    { t: "SaaS Product Development", s: "From idea to scalable product" },
                  ].map((item) => (
                    <div className="ps-item" key={item.t}>
                      <div className="ps-item-ico">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5">
                          <rect x="5" y="2" width="14" height="20" rx="2" />
                        </svg>
                      </div>
                      <div>
                        <div className="ps-item-t">{item.t}</div>
                        <div className="ps-item-s">{item.s}</div>
                      </div>
                      {item.badge && <div className="ps-item-badge">{item.badge}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Page 4: Portfolio */}
            <div className="site-page">
              <div className="page-portfolio">
                <div className="site-nav-bar">
                  <div className="site-brand">NEXUS</div>
                  <div className="site-nav-links"><span>Home</span><span>About</span><span>Services</span><span style={{ color: "var(--o)", fontWeight: 600 }}>Work</span><span>Contact</span></div>
                  <div className="site-cta-pill">Get Started</div>
                </div>
                <div className="pp-header">
                  <div className="pp-title">Our Work</div>
                  <div className="pp-sub">200+ projects delivered across industries</div>
                </div>
                <div className="pp-filters">
                  {["All", "Web", "Mobile", "SaaS"].map((f, i) => (
                    <div key={f} className={`pp-filter${i === 0 ? " on" : ""}`}>{f}</div>
                  ))}
                </div>
                <div className="pp-grid">
                  {[
                    { label: "E-COMM", name: "ShopLux Store", tag: "E-Commerce", result: "↑ 340% sales", bg: "rgba(255,107,0,.08)" },
                    { label: "SAAS", name: "FlowBoard App", tag: "SaaS Platform", result: "12K users", bg: "rgba(59,130,246,.08)" },
                    { label: "AGENCY", name: "Pixel Studio", tag: "Agency Site", result: "Awwwards win", bg: "rgba(34,197,94,.06)" },
                    { label: "FINTECH", name: "PayQuick App", tag: "Mobile App", result: "500K downloads", bg: "rgba(255,107,0,.06)" },
                    { label: "HEALTH", name: "MediTrack", tag: "Web App", result: "NHS Partner", bg: "rgba(139,92,246,.07)" },
                    { label: "RETAIL", name: "NordStyle", tag: "E-Commerce", result: "↑ 220% AOV", bg: "rgba(59,130,246,.06)" },
                  ].map((c, i) => (
                    <div className="pp-card" key={c.name} style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                      <div className="pp-img" style={{ background: c.bg }}>{c.label}</div>
                      <div className="pp-info">
                        <div className="pp-name">{c.name}</div>
                        <div className="pp-tag">{c.tag}</div>
                        <div className="pp-result">{c.result}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Page 5: Contact */}
            <div className="site-page">
              <div className="page-contact">
                <div className="site-nav-bar">
                  <div className="site-brand">NEXUS</div>
                  <div className="site-nav-links"><span>Home</span><span>About</span><span>Services</span><span>Work</span><span style={{ color: "var(--o)", fontWeight: 600 }}>Contact</span></div>
                  <div className="site-cta-pill">Get Started</div>
                </div>
                <div className="pc-header">
                  <div className="pc-title">Let&apos;s Build Together</div>
                  <div className="pc-sub">Tell us about your project and we&apos;ll get back within 24 hours</div>
                </div>
                <div className="pc-form">
                  {[
                    { label: "Your Name", val: "Sarah Johnson" },
                    { label: "Email Address", val: "sarah@techstartup.io" },
                    { label: "Project Brief", val: "We need a scalable SaaS product with..." },
                  ].map((f) => (
                    <div className="pc-field" key={f.label}>
                      <div className="pc-label">{f.label}</div>
                      <div className="pc-val" style={f.label === "Project Brief" ? { fontSize: 8, lineHeight: 1.5, color: "rgba(255,255,255,.6)" } : {}}>{f.val}</div>
                    </div>
                  ))}
                  <div className="pc-send-btn">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-page-nav">
          {SITE_PAGES.map((p, i) => (
            <div key={p} className={`spn-dot${siteIdx === i ? " on" : ""}`} onClick={() => setSiteIdx(i)} />
          ))}
          <div className="spn-label">{SITE_PAGES[siteIdx]}</div>
        </div>

        <div className="visitor-bar">
          <div className="vb-label">
            <div className="live-dot" style={{ background: "#22c55e" }} />
            Live visitors
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="vb-delta">{delta >= 0 ? `▲ +${delta}` : `▼ ${Math.abs(delta)}`}</div>
            <div className="vb-count">{visitors}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
