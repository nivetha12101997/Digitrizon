/**
 * ServicesShowcase.jsx  — Orange & Black theme  (FULLY RESPONSIVE)
 *
 * Breakpoints:
 *   mobile  < 640px   — stacked single-col, scrollable tab row, demo below narrative
 *   tablet  640-1023px — 2-col selector, narrative + demo stacked
 *   desktop ≥ 1024px  — 5-col selector strip, narrative | demo side-by-side
 *
 * 5 panels (in order):
 *   01 Mobile apps
 *   02 Web development
 *   03 E-commerce
 *   04 SaaS product
 *   05 Digital growth
 */
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   THEME
───────────────────────────────────────────────────────────── */
const T = {
  bg: "#0d0d0d", bgCard: "#141414", bgInset: "#0f0f0f",
  border: "rgba(249,115,22,0.2)", borderSub: "rgba(255,255,255,0.06)",
  orange: "#f97316", orangeGlow: "rgba(249,115,22,0.12)",
  textPrimary: "#f5f0eb", textSec: "rgba(245,240,235,0.5)", textTert: "rgba(245,240,235,0.28)",
  green: "#4ade80", red: "#f87171", amber: "#fbbf24", blue: "#60a5fa",
};

/* ─────────────────────────────────────────────────────────────
   BREAKPOINT HOOK
───────────────────────────────────────────────────────────── */
function useBreakpoint() {
  const [bp, setBp] = useState("desktop");
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setBp(w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

/* ─────────────────────────────────────────────────────────────
   FONTS + KEYFRAMES
───────────────────────────────────────────────────────────── */
const FONT_URL = "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Mono:wght@400;500&family=DM+Serif+Display:ital@0;1&display=swap";
function useGoogleFonts() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${FONT_URL}"]`)) {
      const l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONT_URL;
      document.head.appendChild(l);
    }
    if (!document.getElementById("svc-kf")) {
      const s = document.createElement("style"); s.id = "svc-kf";
      s.textContent = `
        @keyframes oPulse{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes oGlow{0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.5)}50%{box-shadow:0 0 0 5px rgba(249,115,22,0)}}
      `;
      document.head.appendChild(s);
    }
  }, []);
}

/* ─────────────────────────────────────────────────────────────
   COUNT-UP HOOK
───────────────────────────────────────────────────────────── */
function useCountUp(target, duration, active, decimals = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!active) { setVal(0); return; }
    clearInterval(ref.current);
    const steps = 50, inc = target / steps; let s = 0;
    ref.current = setInterval(() => {
      s++; const v = Math.min(inc * s, target);
      setVal(decimals ? parseFloat(v.toFixed(decimals)) : Math.round(v));
      if (s >= steps) clearInterval(ref.current);
    }, duration / steps);
    return () => clearInterval(ref.current);
  }, [active, target, duration, decimals]);
  return val;
}

/* ─────────────────────────────────────────────────────────────
   SERVICE CONFIG
───────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01", label: "Mobile apps", sub: "iOS & Android",
    browserUrl: "finova.app/home", eyebrow: "Mobile app development",
    heading: "Apps people\nactually keep\non their phone",
    body: "We craft native-feel mobile apps for iOS and Android — designed with real user journeys, smooth interactions, and the performance users expect.",
    points: [
      { title: "React Native & Flutter", desc: "One codebase, two platforms, zero compromise" },
      { title: "Offline-first architecture", desc: "Works without Wi-Fi, syncs seamlessly" },
      { title: "App store ready", desc: "We handle submission, review & updates" },
    ],
    stats: [
      { id: "ms1", target: 32, pre: "", suf: "", label: "Apps published" },
      { id: "ms2", target: 48, pre: "", suf: "★", label: "Avg store rating", decimals: 1, divisor: 10 },
      { id: "ms3", target: 120, pre: "", suf: "k", label: "Active users" },
    ],
  },
  {
    num: "02", label: "Web development", sub: "Websites & landing pages",
    browserUrl: "www.yourbrand.io", eyebrow: "Web development",
    heading: "Websites that make\nvisitors stay\nand convert",
    body: "We build stunning, fast-loading websites for businesses and professionals — landing pages, portfolios, corporate sites and everything in between.",
    points: [
      { title: "Landing pages & portfolios", desc: "Pixel-perfect designs that convert visitors" },
      { title: "Business & corporate sites", desc: "Multi-page sites with CMS integration" },
      { title: "Performance-first delivery", desc: "99+ Lighthouse scores, sub-2s load times" },
    ],
    stats: [
      { id: "wb1", target: 48, pre: "", suf: "", label: "Websites launched" },
      { id: "wb2", target: 99, pre: "", suf: "", label: "Avg Lighthouse score" },
      { id: "wb3", target: 18, pre: "", suf: "k", label: "Avg monthly visits" },
    ],
  },
  {
    num: "03", label: "E-commerce", sub: "Stores that convert",
    browserUrl: "shopnova.store/admin", eyebrow: "E-commerce",
    heading: "Stores designed\nto sell, not just\nlook good",
    body: "From Shopify to fully custom storefronts — we build e-commerce experiences optimised for conversion, with seamless checkout, inventory, and fulfilment built in.",
    points: [
      { title: "Shopify & custom builds", desc: "Tailored storefront experiences that convert" },
      { title: "Payment & logistics", desc: "Razorpay, Stripe, shipping APIs integrated" },
      { title: "Analytics & retargeting", desc: "Know what sells, bring back who left" },
    ],
    stats: [
      { id: "es1", target: 34, pre: "", suf: "%", label: "Avg conversion lift" },
      { id: "es2", target: 28, pre: "", suf: "", label: "Stores launched" },
      { id: "es3", target: 24, pre: "$", suf: "M", label: "Client GMV", decimals: 1, divisor: 10 },
    ],
  },
  {
    num: "04", label: "SaaS product", sub: "Platforms & dashboards",
    browserUrl: "app.nexus.io/dashboard", eyebrow: "SaaS product development",
    heading: "Platforms built to\nscale with your\nbusiness",
    body: "We design and engineer full-stack SaaS applications — complex dashboards, multi-tenant platforms and internal tools that are fast, reliable, and built to grow.",
    points: [
      { title: "React & Next.js frontends", desc: "Pixel-perfect interfaces that load fast" },
      { title: "Real-time data & APIs", desc: "Live dashboards, webhooks, integrations" },
      { title: "Role-based access control", desc: "Auth, permissions, multi-tenant support" },
    ],
    stats: [
      { id: "ss1", target: 24, pre: "", suf: "", label: "SaaS products shipped" },
      { id: "ss2", target: 320, pre: "", suf: "ms", label: "Avg load time" },
      { id: "ss3", target: 99, pre: "", suf: "%", label: "Uptime SLA" },
    ],
  },
  {
    num: "05", label: "Digital growth", sub: "SEO, ads & CRO",
    browserUrl: "analytics.grow.io", eyebrow: "Digital growth",
    heading: "More traffic.\nBetter leads.\nHigher revenue.",
    body: "We build your visibility from the ground up — organic SEO, targeted paid campaigns, and conversion optimisation that turns clicks into customers.",
    points: [
      { title: "Technical SEO & content", desc: "Rank for terms your buyers actually search" },
      { title: "Google & Meta ads", desc: "Campaigns that hit 4x+ ROAS consistently" },
      { title: "Conversion rate optimisation", desc: "A/B tested pages that turn visitors into buyers" },
    ],
    stats: [
      { id: "gs1", target: 41, pre: "", suf: "x", label: "Avg ROAS", decimals: 1, divisor: 10 },
      { id: "gs2", target: 34, pre: "", suf: "%", label: "Organic growth" },
      { id: "gs3", target: 148, pre: "", suf: "k", label: "Leads generated" },
    ],
  },
];

const TAB_MS = 5000;

const PILL = {
  green:  { bg: "rgba(74,222,128,0.12)",  color: "#4ade80" },
  orange: { bg: "rgba(249,115,22,0.12)",  color: T.orange  },
  amber:  { bg: "rgba(251,191,36,0.12)",  color: "#fbbf24" },
  blue:   { bg: "rgba(96,165,250,0.12)",  color: "#60a5fa" },
  red:    { bg: "rgba(248,113,113,0.12)", color: "#f87171" },
};

/* ─────────────────────────────────────────────────────────────
   SELECTOR STRIP
   mobile:  2-col grid — all 5 tabs visible, no scrolling
   tablet:  2-col × 3-row grid (last item full-width)
   desktop: 5-col single-row strip
───────────────────────────────────────────────────────────── */
function SelectorStrip({ current, onSelect, bp }) {
  /* ── MOBILE: auto-scrolling pill row + dot indicators ─────── */
  if (bp === "mobile") {
    // scrollRef  → the scrollable container
    // pillRefs   → each individual pill button
    // When `current` changes (auto-advance OR user tap), we scroll
    // the active pill smoothly to the centre of the container.
    const scrollRef = useRef(null);
    const pillRefs  = useRef([]);

    useEffect(() => {
      const container = scrollRef.current;
      const pill      = pillRefs.current[current];
      if (!container || !pill) return;
      // centre the active pill inside the scroll container
      const pillLeft   = pill.offsetLeft;
      const pillWidth  = pill.offsetWidth;
      const containerW = container.offsetWidth;
      container.scrollTo({
        left: pillLeft - containerW / 2 + pillWidth / 2,
        behavior: "smooth",
      });
    }, [current]);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>

        {/* pill row — hides scrollbar, auto-scrolls to active pill */}
        <div
          ref={scrollRef}
          style={{
            display: "flex", gap: 8,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            paddingBottom: 4,
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {SERVICES.map((svc, i) => {
            const active = i === current;
            return (
              <button
                key={svc.num}
                ref={el => pillRefs.current[i] = el}
                onClick={() => onSelect(i)}
                style={{
                  flexShrink: 0,
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: `1.5px solid ${active ? T.orange : T.border}`,
                  background: active ? T.orange : T.bgCard,
                  color: active ? "#000" : T.textPrimary,
                  fontSize: 12, fontWeight: 700,
                  fontFamily: "Syne,sans-serif",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
              >
                {svc.label}
              </button>
            );
          })}
        </div>

        {/* dot indicators — tap to jump, expand on active */}
        <div style={{ display: "flex", justifyContent: "center", gap: 5 }}>
          {SERVICES.map((_, i) => (
            <div
              key={i}
              onClick={() => onSelect(i)}
              style={{
                width: i === current ? 18 : 6,
                height: 6,
                borderRadius: 999,
                background: i === current ? T.orange : T.border,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

      </div>
    );
  }

  /* ── TABLET: 2-col grid, last item full width ────────────── */
  if (bp === "tablet") {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8,
      }}>
        {SERVICES.map((svc, i) => {
          const active = i === current;
          const isLast = i === SERVICES.length - 1;
          return (
            <div
              key={svc.num}
              onClick={() => onSelect(i)}
              style={{
                gridColumn: isLast ? "1 / -1" : "auto",
                padding: "14px 16px", borderRadius: 12,
                border: `1px solid ${active ? T.orange : T.border}`,
                background: active ? "rgba(249,115,22,0.1)" : T.bgCard,
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "space-between", transition: "all 0.2s",
              }}
            >
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, fontFamily: "Syne,sans-serif", color: active ? T.orange : T.textPrimary }}>{svc.label}</div>
                <div style={{ fontSize: 10, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 2 }}>{svc.sub}</div>
              </div>
              <div style={{ fontSize: 10, fontFamily: "DM Mono,monospace", color: T.textTert }}>{svc.num}</div>
            </div>
          );
        })}
      </div>
    );
  }

  /* ── DESKTOP: original 5-col single-row strip ───────────── */
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(5,1fr)",
      border: `1px solid ${T.border}`, borderRadius: 14,
      overflow: "hidden", background: T.bgCard,
    }}>
      {SERVICES.map((svc, i) => {
        const active = i === current;
        return (
          <div key={svc.num} onClick={() => onSelect(i)} style={{
            padding: "18px 16px", display: "flex", flexDirection: "column",
            gap: 5, textAlign: "center", cursor: "pointer",
            borderRight: i < SERVICES.length - 1 ? `1px solid ${T.border}` : "none",
            transition: "background 0.25s",
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "Syne,sans-serif", color: active ? T.orange : "#fff", lineHeight: 1.3 }}>{svc.label}</div>
            <div style={{ fontSize: 9, fontFamily: "Syne,sans-serif", color: active ? T.textSec : T.textTert }}>{svc.sub}</div>
            <div style={{ height: 2, background: active ? T.orange : "transparent", borderRadius: 1, marginTop: 4, transition: "background 0.2s" }} />
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NARRATIVE
───────────────────────────────────────────────────────────── */
function Narrative({ svc, active, bp }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const statVals = svc.stats.map(st => useCountUp(st.target, 900, active, st.decimals || 0));
  const fmt = (st, v) => st.divisor ? st.pre + (v / st.divisor).toFixed(st.decimals) + st.suf : st.pre + v.toLocaleString() + st.suf;
  const isMob = bp === "mobile";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", padding: "0.5rem 0" }}>
      <div>
        <div style={{ fontFamily: "DM Mono,monospace", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: T.orange, display: "flex", alignItems: "center", gap: 8 }}>
          {svc.eyebrow}
        </div>
        <h2 style={{ fontFamily: "DM Serif Display,serif", fontSize: isMob ? 26 : 32, fontWeight: 400, color: T.textPrimary, lineHeight: 1.15, marginTop: 12, margin: "12px 0 0" }}>
          {svc.heading.split("\n").map((line, i, arr) => <span key={i}>{line}{i < arr.length - 1 && <br />}</span>)}
        </h2>
        <p style={{ fontSize: isMob ? 13 : 13, color: T.textSec, lineHeight: 1.75, marginTop: 12 }}>{svc.body}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {svc.points.map(pt => (
          <div key={pt.title} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, background: T.orangeGlow, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><polyline points="1,5 4,8 9,2" fill="none" stroke={T.orange} strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{pt.title}</div>
              <div style={{ fontSize: 11, color: T.textSec, marginTop: 1, lineHeight: 1.5, fontFamily: "Syne,sans-serif" }}>{pt.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* <div style={{ display: "flex", gap: isMob ? 16 : 20, paddingTop: 18, borderTop: `1px solid ${T.borderSub}`, flexWrap: "wrap" }}>
        {svc.stats.map((st, i) => (
          <div key={st.id}>
            <div style={{ fontFamily: "DM Mono,monospace", fontSize: isMob ? 22 : 26, fontWeight: 500, color: T.orange }}>{fmt(st, statVals[i])}</div>
            <div style={{ fontSize: 10, color: T.textTert, marginTop: 2, fontFamily: "Syne,sans-serif" }}>{st.label}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SHARED DEMO STYLES
───────────────────────────────────────────────────────────── */
const dp = (extra = {}) => ({ background: T.bgInset, borderRadius: 8, padding: 10, border: `1px solid ${T.border}`, ...extra });
const kpiCard = () => dp({ padding: "8px 10px" });
const panelTitle = { fontSize: 9, color: T.textTert, marginBottom: 6, fontFamily: "Syne,sans-serif" };
const monoVal = { fontFamily: "DM Mono,monospace", fontSize: 15, fontWeight: 500, color: T.textPrimary };
const monoSub = { fontSize: 9, color: T.textTert, marginTop: 1, fontFamily: "Syne,sans-serif" };
const monoTrend = (neg) => ({ fontSize: 9, marginTop: 3, fontFamily: "Syne,sans-serif", color: neg ? T.red : T.green });
const tdStyle = { padding: "5px 9px", color: T.textPrimary, borderBottom: `1px solid ${T.borderSub}`, fontFamily: "Syne,sans-serif", fontSize: 10 };
const thStyle = { padding: "6px 9px", textAlign: "left", color: T.textTert, fontWeight: 400, background: T.bgInset, borderBottom: `1px solid ${T.border}`, fontFamily: "Syne,sans-serif", fontSize: 9 };
const pillStyle = (sc) => ({ padding: "2px 7px", borderRadius: 999, fontSize: 9, fontWeight: 600, fontFamily: "Syne,sans-serif", ...PILL[sc] });

/* ─────────────────────────────────────────────────────────────
   DEMO 1 — MOBILE APP
───────────────────────────────────────────────────────────── */
const TXNS = [
  { ic: "🛍", bg: "rgba(249,115,22,0.12)", nm: "Shopping",     dt: "Today 2:30pm", am: "−$89",    pos: false },
  { ic: "💰", bg: "rgba(74,222,128,0.12)", nm: "Salary credit", dt: "Jun 1",       am: "+$3,200", pos: true  },
  { ic: "🍔", bg: "rgba(251,191,36,0.12)", nm: "Food delivery", dt: "May 31",      am: "−$42",    pos: false },
  { ic: "🚗", bg: "rgba(96,165,250,0.12)", nm: "Cab ride",      dt: "May 30",      am: "−$18",    pos: false },
];

function MobileDemo({ active, bp }) {
  const [risen, setRisen] = useState(false);
  const [txVis, setTxVis] = useState([]);
  const balance = useCountUp(12840, 900, active);
  const isMob = bp === "mobile";

  useEffect(() => {
    if (!active) { setRisen(false); setTxVis([]); return; }
    const t1 = setTimeout(() => setRisen(true), 100);
    const ts = TXNS.map((_, i) => setTimeout(() => setTxVis(p => [...p, i]), 600 + i * 200));
    return () => { clearTimeout(t1); ts.forEach(clearTimeout); };
  }, [active]);

  return (
    <div style={{ display: "flex", flexDirection: isMob ? "column" : "row", alignItems: isMob ? "center" : "center", justifyContent: "center", gap: isMob ? 20 : 24, padding: isMob ? "12px 8px" : "16px", flex: 1 }}>
      {/* Phone */}
      <div style={{
        width: isMob ? 200 : 162, height: isMob ? 380 : 320, borderRadius: 32,
        border: `2px solid ${T.border}`, background: T.bgCard, overflow: "hidden",
        display: "flex", flexDirection: "column", flexShrink: 0,
        transform: risen ? "translateY(0)" : "translateY(60px)",
        opacity: risen ? 1 : 0,
        transition: "transform 0.8s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s",
      }}>
        <div style={{ height: 24, background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 44, height: 10, borderRadius: 999, background: "#1a1a1a" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ background: "#180a00", padding: "10px 12px 8px", borderBottom: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 8, color: T.textTert, fontFamily: "DM Mono,monospace" }}>Good morning</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>Alex Johnson</div>
            <div style={{ fontSize: 8, color: T.textTert, fontFamily: "DM Mono,monospace", marginTop: 5 }}>Total balance</div>
            <div style={{ fontSize: isMob ? 18 : 22, color: T.orange, fontFamily: "DM Mono,monospace", fontWeight: 500 }}>${balance.toLocaleString()}</div>
            <div style={{ display: "flex", gap: 4, marginTop: 7 }}>
              {["Send", "Receive", "Pay", "More"].map(a => (
                <div key={a} style={{ flex: 1, background: T.orangeGlow, border: `1px solid ${T.border}`, borderRadius: 5, padding: "4px 2px", textAlign: "center", fontSize: 7, color: T.orange, fontFamily: "Syne,sans-serif" }}>{a}</div>
              ))}
            </div>
          </div>
          <div style={{ padding: "8px 10px", flex: 1, display: "flex", flexDirection: "column", gap: 6, overflow: "hidden" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>Transactions</div>
            {TXNS.map((tx, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, opacity: txVis.includes(i) ? 1 : 0, transform: txVis.includes(i) ? "translateX(0)" : "translateX(-8px)", transition: "opacity .35s, transform .35s" }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: tx.bg, border: `1px solid ${T.borderSub}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0 }}>{tx.ic}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9, fontWeight: 600, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{tx.nm}</div>
                  <div style={{ fontSize: 8, color: T.textTert, fontFamily: "DM Mono,monospace" }}>{tx.dt}</div>
                </div>
                <div style={{ fontSize: 9, fontWeight: 500, color: tx.pos ? T.green : T.red, fontFamily: "DM Mono,monospace" }}>{tx.am}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 32, borderTop: `1px solid ${T.borderSub}`, display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px", background: T.bg }}>
          {[true, false, false, false].map((on, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: 3, background: on ? T.orange : "rgba(255,255,255,0.08)" }} />)}
        </div>
      </div>

      {/* Feature list */}
      <div style={{ display: isMob ? "grid" : "flex", gridTemplateColumns: isMob ? "1fr 1fr" : undefined, flexDirection: isMob ? undefined : "column", gap: isMob ? 10 : 10, width: isMob ? "100%" : "auto", maxWidth: isMob ? "100%" : 190 }}>
        {[
          { ic: "⚡", title: "60fps smooth", desc: "Native-like on all devices" },
          { ic: "🔒", title: "Biometric auth", desc: "Face ID & fingerprint" },
          { ic: "📡", title: "Offline first", desc: "Syncs when reconnected" },
          { ic: "🔔", title: "Push alerts", desc: "Personalised messaging" },
        ].map(f => (
          <div key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: T.orangeGlow, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>{f.ic}</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{f.title}</div>
              <div style={{ fontSize: 10, color: T.textSec, fontFamily: "Syne,sans-serif", marginTop: 1, lineHeight: 1.4 }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DEMO 2 — WEBSITE  (realistic business site mockup)
   Pages: Home · About · Portfolio · Blog · Contact
   Each page shows real content layout — hero, cards, form etc.
   Auto-cycles every 2.2 s. Clicking nav tabs jumps directly.
───────────────────────────────────────────────────────────── */

/* Tiny canvas sparkline used inside the traffic chart */
function MiniSparkLine({ color, data, w = 80, h = 28 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    const mx = Math.max(...data), mn = Math.min(...data);
    const px = i => (i / (data.length - 1)) * (w - 4) + 2;
    const py = v => h - 4 - ((v - mn) / (mx - mn || 1)) * (h - 8);
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.lineJoin = "round";
    ctx.beginPath();
    data.forEach((v, i) => i === 0 ? ctx.moveTo(px(i), py(v)) : ctx.lineTo(px(i), py(v)));
    ctx.stroke();
  }, [data, color, w, h]);
  return <canvas ref={ref} width={w} height={h} style={{ width: w, height: h }} />;
}

const WEB_NAV = ["Home", "About", "Portfolio", "Blog", "Contact"];

/* realistic traffic sparkline data */
const SPARK_VISITS   = [420, 580, 510, 740, 680, 920, 860, 1100, 980, 1240, 1180, 1420];
const SPARK_LEADS    = [18, 26, 21, 34, 29, 41, 38, 52, 47, 61, 55, 68];
const SPARK_CONV     = [3.1, 3.4, 3.0, 3.8, 3.5, 4.2, 4.0, 4.6, 4.3, 4.9, 4.6, 5.1];

function WebsiteDemo({ active, bp }) {
  const [pg, setPg]       = useState(0);
  const [typed, setTyped] = useState(0);   // typing animation on hero headline
  const isMob = bp === "mobile";

  /* count-ups */
  const visits   = useCountUp(18420, 1000, active);
  const leads    = useCountUp(68,     800, active);
  const convRate = useCountUp(51,     900, active, 1);  // → 5.1%
  const avgTime  = useCountUp(34,     700, active, 1);  // → 3.4 min
  const bounce   = useCountUp(28,     800, active, 1);  // → 28.x%
  const newUsers = useCountUp(74,     900, active);     // → 74%

  /* page auto-cycle */
  useEffect(() => {
    if (!active) { setPg(0); setTyped(0); return; }
    const t = setInterval(() => setPg(p => (p + 1) % WEB_NAV.length), 2800);
    return () => clearInterval(t);
  }, [active]);

  /* typing animation for hero headline */
  const HEADLINE = "We craft websites\nthat convert";
  useEffect(() => {
    if (!active) { setTyped(0); return; }
    let i = 0;
    const t = setInterval(() => {
      i = Math.min(i + 2, HEADLINE.length);
      setTyped(i);
      if (i >= HEADLINE.length) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [active]);

  /* ── reusable sub-styles ── */
  const cardBox = (extra = {}) => ({
    background: T.bgCard, border: `1px solid ${T.border}`,
    borderRadius: 8, padding: "8px 10px", ...extra,
  });
  const tag = (color) => ({
    display: "inline-block", fontSize: 7, fontWeight: 700,
    fontFamily: "DM Mono,monospace", letterSpacing: "0.06em",
    padding: "2px 6px", borderRadius: 999,
    background: `${color}22`, color,
  });
  const imgPlaceholder = (h, col, label) => (
    <div style={{
      height: h, background: `${col}18`,
      border: `1px dashed ${col}44`, borderRadius: 6,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 8, color: `${col}88`, fontFamily: "DM Mono,monospace",
      letterSpacing: "0.05em", userSelect: "none",
    }}>{label}</div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

      {/* ── BROWSER SHELL ── */}
      <div style={{ ...dp(), padding: 0, overflow: "hidden" }}>

        {/* title bar */}
        <div style={{ background: "#0a0a0a", padding: "6px 10px", display: "flex", alignItems: "center", gap: 6, borderBottom: `1px solid ${T.borderSub}` }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["#ef4444","#f59e0b","#22c55e"].map((col,i) =>
              <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: col }} />
            )}
          </div>
          <div style={{ flex: 1, background: T.bgInset, borderRadius: 3, height: 15, display: "flex", alignItems: "center", padding: "0 7px", gap: 4 }}>
            <span style={{ fontSize: 7, color: T.green, fontFamily: "DM Mono,monospace" }}>🔒</span>
            <span style={{ fontSize: 8, color: T.textTert, fontFamily: "DM Mono,monospace" }}>www.yourbrand.io/{WEB_NAV[pg].toLowerCase()}</span>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {["←","→","⟳"].map(a => (
              <div key={a} style={{ width: 16, height: 16, borderRadius: 3, background: T.bgInset, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: T.textTert, cursor: "pointer" }}>{a}</div>
            ))}
          </div>
        </div>

        {/* site navigation */}
        <div style={{ background: "#0d0d0d", padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${T.borderSub}`, gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: T.orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#000" }}>Y</div>
            <div style={{ fontSize: 11, fontWeight: 800, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>YourBrand</div>
          </div>
          <div style={{ display: "flex", gap: 0 }}>
            {WEB_NAV.map((n, i) => (
              <div key={n} onClick={() => setPg(i)} style={{
                fontSize: 8, fontFamily: "Syne,sans-serif", padding: "4px 8px",
                color: pg === i ? T.orange : T.textTert,
                borderBottom: pg === i ? `2px solid ${T.orange}` : "2px solid transparent",
                cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
              }}>{n}</div>
            ))}
          </div>
          <div style={{ fontSize: 8, fontWeight: 700, padding: "5px 12px", borderRadius: 6, background: T.orange, color: "#000", fontFamily: "Syne,sans-serif", flexShrink: 0, cursor: "pointer" }}>
            Hire us
          </div>
        </div>

        {/* ── PAGE CONTENT ── */}
        <div style={{ minHeight: 180, background: T.bgCard }}>

          {/* ════ HOME ════ */}
          {pg === 0 && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* hero */}
              <div style={{ padding: "18px 14px 14px", background: "linear-gradient(135deg, #0d0d0d 60%, #1a0a00)", borderBottom: `1px solid ${T.borderSub}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -20, top: -20, width: 120, height: 120, borderRadius: "50%", background: T.orange, opacity: 0.06 }} />
                <div style={{ fontSize: 8, color: T.orange, fontFamily: "DM Mono,monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 14, height: 1.5, background: T.orange }} />
                  Award-winning studio
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, fontFamily: "Syne,sans-serif", lineHeight: 1.15, marginBottom: 8, minHeight: 38 }}>
                  {HEADLINE.slice(0, typed).split("\n").map((line, i, arr) =>
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  )}
                  <span style={{ borderRight: `1.5px solid ${T.orange}`, animation: "oPulse 0.8s infinite", marginLeft: 1 }} />
                </div>
                <div style={{ fontSize: 9, color: T.textSec, lineHeight: 1.6, maxWidth: 240, marginBottom: 10 }}>
                  High-performance websites built for growth — from landing pages to full corporate sites.
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, padding: "5px 14px", borderRadius: 6, background: T.orange, color: "#000", fontFamily: "Syne,sans-serif", cursor: "pointer" }}>Get a free quote</div>
                  <div style={{ fontSize: 8, fontWeight: 500, padding: "5px 14px", borderRadius: 6, border: `1px solid ${T.border}`, color: T.textPrimary, fontFamily: "Syne,sans-serif", cursor: "pointer" }}>View portfolio →</div>
                </div>
                {/* trust bar */}
                <div style={{ display: "flex", gap: 12, paddingTop: 10, borderTop: `1px solid ${T.borderSub}` }}>
                  {[
                    { v: "120+", l: "Clients" },
                    { v: "4.9★", l: "Rating"  },
                    { v: "8 yrs", l: "Experience" },
                    { v: "99%",  l: "On-time delivery" },
                  ].map(s => (
                    <div key={s.l}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: T.orange, fontFamily: "DM Mono,monospace" }}>{s.v}</div>
                      <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* services strip */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, borderBottom: `1px solid ${T.borderSub}` }}>
                {[
                  { ic: "🌐", t: "Landing pages"  },
                  { ic: "🏢", t: "Business sites"  },
                  { ic: "💼", t: "Portfolios"      },
                  { ic: "📱", t: "Mobile-ready"    },
                ].map((s, i) => (
                  <div key={s.t} style={{ padding: "8px 6px", textAlign: "center", borderRight: i < 3 ? `1px solid ${T.borderSub}` : "none" }}>
                    <div style={{ fontSize: 14 }}>{s.ic}</div>
                    <div style={{ fontSize: 7, color: T.textSec, fontFamily: "Syne,sans-serif", marginTop: 3 }}>{s.t}</div>
                  </div>
                ))}
              </div>
              {/* recent work */}
              {/* <div style={{ padding: "10px 14px", borderBottom: `1px solid ${T.borderSub}` }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif", marginBottom: 7 }}>Recent work</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
                  {[
                    { name: "NexaFlow SaaS",  cat: "Web App",    col: T.orange },
                    { name: "Luna Boutique",  cat: "E-commerce", col: "#a78bfa" },
                    { name: "Apex Consulting",cat: "Corporate",  col: T.blue   },
                  ].map(p => (
                    <div key={p.name} style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${T.border}`, cursor: "pointer" }}>
                      {imgPlaceholder(38, p.col, p.cat.toUpperCase())}
                      <div style={{ padding: "4px 6px" }}>
                        <div style={{ fontSize: 8, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{p.name}</div>
                        <div style={tag(p.col)}>{p.cat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* how it works */}
              <div style={{ padding: "10px 14px", borderBottom: `1px solid ${T.borderSub}` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>How it works</div>
                  <div style={{ fontSize: 7, color: T.textTert, fontFamily: "DM Mono,monospace" }}>4-step process</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
                  {[
                    { n: "01", icon: "🎯", t: "Discovery",  d: "We map your goals, users & competitors in a 60-min kickoff call." },
                    { n: "02", icon: "✏️", t: "Design",     d: "High-fidelity mockups built in Figma — reviewed until perfect."  },
                    { n: "03", icon: "⚡", t: "Build",      d: "Iterative dev sprints with live preview links every 3 days."      },
                    { n: "04", icon: "🚀", t: "Launch",     d: "Deploy, test, go live — and we monitor for the first 30 days."   },
                  ].map((step, i) => (
                    <div key={step.n} style={{ position: "relative" }}>
                      {/* connector line between steps */}
                      {i < 3 && (
                        <div style={{ position: "absolute", top: 10, right: -3, width: 6, height: 1, background: T.border, zIndex: 1 }} />
                      )}
                      <div style={{ background: T.bgInset, border: `1px solid ${T.border}`, borderRadius: 8, padding: "8px 7px", display: "flex", flexDirection: "column", gap: 4 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <div style={{ width: 18, height: 18, borderRadius: 5, background: T.orangeGlow, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, flexShrink: 0 }}>{step.icon}</div>
                          <div style={{ fontSize: 7, fontFamily: "DM Mono,monospace", color: T.textTert, letterSpacing: "0.06em" }}>{step.n}</div>
                        </div>
                        <div style={{ fontSize: 8, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{step.t}</div>
                        <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif", lineHeight: 1.5 }}>{step.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* pricing teaser */}
              {/* <div style={{ padding: "10px 14px", borderBottom: `1px solid ${T.borderSub}` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>Simple pricing</div>
                  <div style={{ fontSize: 7, color: T.orange, fontFamily: "DM Mono,monospace", cursor: "pointer" }}>See all plans →</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
                  {[
                    { plan: "Starter",    price: "₹29k",  features: ["5 pages","CMS","Mobile-ready","1 revision round"], highlight: false },
                    { plan: "Growth",     price: "₹59k",  features: ["10 pages","Blog + CMS","SEO setup","3 revision rounds"], highlight: true },
                    { plan: "Enterprise", price: "Custom", features: ["Unlimited pages","Custom integrations","Priority support","Dedicated PM"], highlight: false },
                  ].map(pl => (
                    <div key={pl.plan} style={{
                      background: pl.highlight ? T.orangeGlow : T.bgInset,
                      border: `1px solid ${pl.highlight ? T.orange : T.border}`,
                      borderRadius: 8, padding: "8px 8px",
                      position: "relative", overflow: "hidden",
                    }}>
                      {pl.highlight && (
                        <div style={{ position: "absolute", top: 0, right: 0, background: T.orange, color: "#000", fontSize: 6, fontWeight: 700, fontFamily: "DM Mono,monospace", padding: "2px 6px", borderBottomLeftRadius: 5 }}>POPULAR</div>
                      )}
                      <div style={{ fontSize: 9, fontWeight: 700, color: pl.highlight ? T.orange : T.textPrimary, fontFamily: "Syne,sans-serif", marginBottom: 3 }}>{pl.plan}</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: T.textPrimary, fontFamily: "DM Mono,monospace", marginBottom: 6 }}>{pl.price}</div>
                      {pl.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: pl.highlight ? T.orange : T.textTert, flexShrink: 0 }} />
                          <div style={{ fontSize: 7, color: T.textSec, fontFamily: "Syne,sans-serif" }}>{f}</div>
                        </div>
                      ))}
                      <div style={{ fontSize: 7, fontWeight: 700, padding: "4px", borderRadius: 5, background: pl.highlight ? T.orange : "transparent", border: pl.highlight ? "none" : `1px solid ${T.border}`, color: pl.highlight ? "#000" : T.textPrimary, fontFamily: "Syne,sans-serif", textAlign: "center", marginTop: 6, cursor: "pointer" }}>
                        {pl.plan === "Enterprise" ? "Talk to us" : "Get started"}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* client testimonials row */}
              {/* <div style={{ padding: "10px 14px" }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif", marginBottom: 8 }}>What clients say</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 6 }}>
                  {[
                    { quote: "Delivered in 12 days. Our bounce rate dropped from 68% to 31% and organic leads doubled.",    name: "Priya R.",   co: "Founder, StackrHQ",   init: "PR", col: T.orange },
                    { quote: "The best investment we made. Site speed went from 62 to 98 on Lighthouse. Conversions +40%.",  name: "Arjun D.",   co: "CTO, Apex Group",      init: "AD", col: T.blue   },
                  ].map(t => (
                    <div key={t.name} style={{ background: T.bgInset, border: `1px solid ${T.border}`, borderRadius: 8, padding: "8px 10px" }}>
                      <div style={{ fontSize: 9, color: T.orange, marginBottom: 5, letterSpacing: 1 }}>★★★★★</div>
                      <div style={{ fontSize: 8, color: T.textSec, fontFamily: "Syne,sans-serif", lineHeight: 1.6, fontStyle: "italic", marginBottom: 7 }}>"{t.quote}"</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${t.col}22`, border: `1px solid ${t.col}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: t.col, fontFamily: "Syne,sans-serif", flexShrink: 0 }}>{t.init}</div>
                        <div>
                          <div style={{ fontSize: 8, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{t.name}</div>
                          <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif" }}>{t.co}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

            </div>
          )}

          {/* ════ ABOUT ════ */}
          {pg === 1 && (
            <div style={{ padding: "14px" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                {imgPlaceholder(70, T.orange, "TEAM PHOTO")}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9, color: T.orange, fontFamily: "DM Mono,monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>About us</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: T.textPrimary, fontFamily: "Syne,sans-serif", lineHeight: 1.2, marginBottom: 5 }}>We turn ideas into digital experiences</div>
                  <div style={{ fontSize: 9, color: T.textSec, lineHeight: 1.6 }}>Founded in 2016, we are a full-service web studio specialising in high-performance, design-led websites for startups and established brands.</div>
                </div>
              </div>
              {/* stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginBottom: 10 }}>
                {[{ v:"8+",l:"Years"},{v:"120+",l:"Projects"},{v:"98%",l:"Retention"},{v:"12",l:"Team members"}].map(s=>(
                  <div key={s.l} style={{ ...cardBox(), textAlign:"center" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: T.orange, fontFamily: "DM Mono,monospace" }}>{s.v}</div>
                    <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              {/* team cards */}
              {/* <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif", marginBottom: 7 }}>Meet the team</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
                {[
                  { name: "Priya S.", role: "Creative Director", init: "PS", col: T.orange },
                  { name: "James K.", role: "Lead Developer",    init: "JK", col: T.blue   },
                //   { name: "Aisha M.", role: "UX Designer",       init: "AM", col: "#a78bfa" },
                ].map(m => (
                  <div key={m.name} style={{ ...cardBox(), display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 6px" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${m.col}22`, border: `1px solid ${m.col}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: m.col, fontFamily: "Syne,sans-serif" }}>{m.init}</div>
                    <div style={{ fontSize: 8, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif", textAlign:"center" }}>{m.name}</div>
                    <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif", textAlign:"center" }}>{m.role}</div>
                  </div>
                ))}
              </div> */}
              {/* testimonials — 3 cards */}
              <div style={{ marginTop: 10 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 7 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>Client stories</div>
                  <div style={{ fontSize: 7, color: T.textTert, fontFamily: "DM Mono,monospace" }}>98% satisfaction rate</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    {
                      quote: "Delivered in 12 days flat. Our bounce rate dropped from 68% to 31% and organic leads doubled within the first month.",
                      name: "Priya Rajan",   co: "Founder, StackrHQ",        init: "PR", col: T.orange,
                      metric: "+2× leads",   metricCol: T.green,
                    },
                    // {
                    //   quote: "Site speed went from 62 to 98 on Lighthouse overnight. The performance uplift alone drove a 40% increase in paid conversions.",
                    //   name: "Arjun Desai",   co: "CTO, Apex Group",          init: "AD", col: T.blue,
                    //   metric: "+40% CVR",    metricCol: T.blue,
                    // },
                    {
                      quote: "We had tried two other agencies before. YourBrand was the only team that actually understood our brand and nailed it first time.",
                      name: "Meera Nair",    co: "Head of Marketing, LunaB", init: "MN", col: "#a78bfa",
                      metric: "100 SEO",     metricCol: "#a78bfa",
                    },
                  ].map(t => (
                    <div key={t.name} style={{ background: T.bgInset, border: `1px solid ${T.border}`, borderRadius: 8, padding: "8px 10px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      {/* avatar */}
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${t.col}22`, border: `1px solid ${t.col}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: t.col, fontFamily: "Syne,sans-serif", flexShrink: 0, marginTop: 1 }}>{t.init}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 8, color: T.textSec, fontFamily: "Syne,sans-serif", lineHeight: 1.6, fontStyle: "italic", marginBottom: 5 }}>"{t.quote}"</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div>
                            <div style={{ fontSize: 8, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{t.name}</div>
                            <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif" }}>{t.co}</div>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
                            <div style={{ fontSize: 8, color: T.orange }}>★★★★★</div>
                            <div style={{ fontSize: 7, fontWeight: 700, color: t.metricCol, fontFamily: "DM Mono,monospace", background: `${t.metricCol}15`, padding: "1px 6px", borderRadius: 999 }}>{t.metric}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════ PORTFOLIO ════ */}
          {pg === 2 && (
            <div style={{ padding: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 9, color: T.orange, fontFamily: "DM Mono,monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our work</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: T.textPrimary, fontFamily: "Syne,sans-serif", lineHeight: 1.2, marginTop: 2 }}>48+ projects shipped</div>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {["All","Web","Apps","E-com"].map((f,i) => (
                    <div key={f} style={{ fontSize: 7, padding: "3px 7px", borderRadius: 999, fontFamily: "DM Mono,monospace", background: i===0?T.orange:"transparent", color: i===0?"#000":T.textTert, border: `1px solid ${i===0?T.orange:T.border}`, cursor: "pointer" }}>{f}</div>
                  ))}
                </div>
              </div>
              {/* 2×2 project grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
                {[
                  { name: "NexaFlow",      cat: "SaaS web app",   col: T.orange, tags: ["React","Node","AWS"],     result: "+340% signups"  },
                  { name: "Luna Boutique", cat: "E-commerce",     col: "#a78bfa", tags: ["Shopify","Custom UI"],   result: "+220% revenue"  },
                  { name: "Apex Group",    cat: "Corporate site", col: T.blue,   tags: ["Next.js","CMS","SEO"],    result: "99 Lighthouse"  },
                  { name: "MedBook",       cat: "Booking portal", col: T.green,  tags: ["React","Calendar API"],   result: "2× bookings"    },
                ].map(p => (
                  <div key={p.name} style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${T.border}`, cursor: "pointer", transition: "border-color 0.2s" }}>
                    {imgPlaceholder(44, p.col, p.cat.toUpperCase())}
                    <div style={{ padding: "6px 8px" }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{p.name}</div>
                      <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif", marginBottom: 4 }}>{p.cat}</div>
                      <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 4 }}>
                        {p.tags.map(t => <span key={t} style={tag(p.col)}>{t}</span>)}
                      </div>
                      <div style={{ fontSize: 8, fontWeight: 700, color: p.col, fontFamily: "DM Mono,monospace" }}>→ {p.result}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════ BLOG ════ */}
          {pg === 3 && (
            <div style={{ padding: "14px" }}>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 9, color: T.orange, fontFamily: "DM Mono,monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Insights</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: T.textPrimary, fontFamily: "Syne,sans-serif", marginTop: 2 }}>From the studio</div>
              </div>
              {/* featured post */}
              <div style={{ ...cardBox({ marginBottom: 8, padding: 0, overflow: "hidden" }) }}>
                {imgPlaceholder(48, T.orange, "FEATURED IMAGE")}
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ display: "flex", gap: 5, marginBottom: 4 }}>
                    <span style={tag(T.orange)}>Web Design</span>
                    <span style={{ fontSize: 7, color: T.textTert, fontFamily: "DM Mono,monospace" }}>5 min read</span>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif", lineHeight: 1.3, marginBottom: 4 }}>
                    10 things that kill your website conversion rate (and how to fix them)
                  </div>
                  <div style={{ fontSize: 8, color: T.textSec, lineHeight: 1.55 }}>
                    Most websites lose 70%+ of visitors in the first 8 seconds. Here's the checklist we use on every project to stop the bleed.
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 16, height: 16, borderRadius: "50%", background: T.orangeGlow, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: T.orange }}>PS</div>
                      <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif" }}>Priya S. · Jun 12</div>
                    </div>
                    <div style={{ fontSize: 8, color: T.orange, fontFamily: "Syne,sans-serif", cursor: "pointer" }}>Read →</div>
                  </div>
                </div>
              </div>
              {/* post list */}
              {[
                { title: "Why your Lighthouse score matters more than your design", cat: "Performance", time: "3 min" },
                { title: "Headless CMS vs traditional: which is right for you?",     cat: "Tech",         time: "6 min" },
              ].map(post => (
                <div key={post.title} style={{ ...cardBox({ marginBottom: 6, padding: "7px 10px", display: "flex", gap: 8, alignItems: "flex-start" }) }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 5, marginBottom: 3 }}>
                      <span style={tag(T.blue)}>{post.cat}</span>
                      <span style={{ fontSize: 7, color: T.textTert, fontFamily: "DM Mono,monospace" }}>{post.time} read</span>
                    </div>
                    <div style={{ fontSize: 9, fontWeight: 600, color: T.textPrimary, fontFamily: "Syne,sans-serif", lineHeight: 1.35 }}>{post.title}</div>
                  </div>
                  <div style={{ fontSize: 10, color: T.textTert, cursor: "pointer", flexShrink: 0 }}>→</div>
                </div>
              ))}
            </div>
          )}

          {/* ════ CONTACT ════ */}
          {pg === 4 && (
            <div style={{ padding: "14px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {/* form */}
                <div>
                  <div style={{ fontSize: 9, color: T.orange, fontFamily: "DM Mono,monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Start a project</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: T.textPrimary, fontFamily: "Syne,sans-serif", lineHeight: 1.2, marginBottom: 10 }}>Let's build something great</div>
                  {[
                    { lbl: "Full name",    ph: "Sarah Johnson",       filled: true  },
                    { lbl: "Email",        ph: "sarah@company.com",   filled: true  },
                    { lbl: "Budget range", ph: "Select…",              filled: false },
                    { lbl: "Project brief",ph: "Tell us about your project…", filled: false, area: true },
                  ].map(f => (
                    <div key={f.lbl} style={{ marginBottom: 6 }}>
                      <div style={{ fontSize: 7, color: T.textTert, fontFamily: "DM Mono,monospace", marginBottom: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>{f.lbl}</div>
                      <div style={{
                        background: f.filled ? "rgba(249,115,22,0.06)" : T.bgInset,
                        border: `1px solid ${f.filled ? T.border : T.borderSub}`,
                        borderRadius: 5, padding: f.area ? "5px 8px" : "5px 8px",
                        fontSize: 8, color: f.filled ? T.textPrimary : T.textTert,
                        fontFamily: "Syne,sans-serif", minHeight: f.area ? 36 : "auto",
                      }}>{f.ph}</div>
                    </div>
                  ))}
                  <div style={{ fontSize: 9, fontWeight: 700, padding: "7px", borderRadius: 6, background: T.orange, color: "#000", fontFamily: "Syne,sans-serif", textAlign: "center", cursor: "pointer", marginTop: 4 }}>
                    Send enquiry →
                  </div>
                </div>
                {/* contact info */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ ...cardBox() }}>
                    <div style={{ fontSize: 8, color: T.textTert, fontFamily: "DM Mono,monospace", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>Response time</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: T.orange, fontFamily: "DM Mono,monospace" }}>&lt; 4 hrs</div>
                    <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>Mon–Fri, 9am–6pm IST</div>
                  </div>
                  {[
                    { ic: "✉️", l: "Email",    v: "hello@yourbrand.io" },
                    { ic: "📞", l: "Phone",    v: "+91 98765 43210"    },
                    { ic: "📍", l: "Location", v: "Chennai, India"     },
                  ].map(info => (
                    <div key={info.l} style={{ ...cardBox({ display: "flex", alignItems: "center", gap: 7, padding: "7px 9px" }) }}>
                      <span style={{ fontSize: 12 }}>{info.ic}</span>
                      <div>
                        <div style={{ fontSize: 7, color: T.textTert, fontFamily: "DM Mono,monospace" }}>{info.l}</div>
                        <div style={{ fontSize: 8, fontWeight: 600, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{info.v}</div>
                      </div>
                    </div>
                  ))}
                  {/* availability badge */}
                  <div style={{ ...cardBox({ background: "rgba(74,222,128,0.08)", borderColor: "rgba(74,222,128,0.2)", display: "flex", alignItems: "center", gap: 7 }) }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: T.green, animation: "oPulse 1.5s infinite", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 8, fontWeight: 700, color: T.green, fontFamily: "Syne,sans-serif" }}>Available for projects</div>
                      <div style={{ fontSize: 7, color: T.textTert, fontFamily: "Syne,sans-serif" }}>Taking new clients from July 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>{/* end page content */}
      </div>{/* end browser shell */}

      {/* ── SITE ANALYTICS STRIP ── */}
      <div style={{ display: "grid", gridTemplateColumns: isMob ? "repeat(2,1fr)" : "repeat(3,1fr)", gap: 8 }}>
        {/* Monthly visits with sparkline */}
        {/* <div style={{ ...dp(), display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontFamily: "DM Mono,monospace", fontSize: 16, fontWeight: 500, color: T.textPrimary }}>{visits.toLocaleString()}</div>
              <div style={{ fontSize: 9, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>Monthly visits</div>
              <div style={{ fontSize: 9, color: T.green, fontFamily: "Syne,sans-serif", marginTop: 2 }}>↑ +28% MoM</div>
            </div>
            <MiniSparkLine color={T.orange} data={SPARK_VISITS} />
          </div>
        </div> */}

        {/* Leads with sparkline */}
        {/* <div style={{ ...dp(), display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontFamily: "DM Mono,monospace", fontSize: 16, fontWeight: 500, color: T.textPrimary }}>{leads}</div>
              <div style={{ fontSize: 9, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>Leads this month</div>
              <div style={{ fontSize: 9, color: T.green, fontFamily: "Syne,sans-serif", marginTop: 2 }}>↑ +34% vs last</div>
            </div>
            <MiniSparkLine color={T.green} data={SPARK_LEADS} />
          </div>
        </div> */}

        {/* Conversion rate with sparkline — hidden on mobile to keep 2-col */}
        {/* {!isMob && (
          <div style={{ ...dp(), display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontFamily: "DM Mono,monospace", fontSize: 16, fontWeight: 500, color: T.textPrimary }}>{(convRate / 10).toFixed(1)}%</div>
                <div style={{ fontSize: 9, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>Conversion rate</div>
                <div style={{ fontSize: 9, color: T.green, fontFamily: "Syne,sans-serif", marginTop: 2 }}>↑ +1.4 pts</div>
              </div>
              <MiniSparkLine color={T.blue} data={SPARK_CONV} />
            </div>
          </div>
        )} */}
      </div>

      {/* ── PERFORMANCE SCORES ── */}
      {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
        {[
          { l: "Performance", v: "99", u: "/100", c: T.green  },
          { l: "Accessibility",v:"98", u: "/100", c: T.green  },
          { l: "SEO",          v:"100",u: "/100", c: T.orange },
          { l: "Load time",    v:"1.2",u: "s",    c: T.orange },
        ].map(s => (
          <div key={s.l} style={{ ...dp({ padding: "7px 9px" }) }}>
            <div style={{ fontFamily: "DM Mono,monospace", fontSize: 14, fontWeight: 500, color: s.c }}>{s.v}<span style={{ fontSize: 9, opacity: 0.7 }}>{s.u}</span></div>
            <div style={{ fontSize: 8, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>{s.l}</div>
          </div>
        ))}
      </div> */}

      {/* ── SECONDARY METRICS ── */}
      {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
        <div style={{ ...dp({ padding: "7px 9px" }) }}>
          <div style={{ fontFamily: "DM Mono,monospace", fontSize: 14, fontWeight: 500, color: T.textPrimary }}>{(avgTime / 10).toFixed(1)} min</div>
          <div style={{ fontSize: 8, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>Avg session time</div>
          <div style={{ fontSize: 8, color: T.green, fontFamily: "Syne,sans-serif", marginTop: 2 }}>↑ +0.8 min</div>
        </div>
        <div style={{ ...dp({ padding: "7px 9px" }) }}>
          <div style={{ fontFamily: "DM Mono,monospace", fontSize: 14, fontWeight: 500, color: T.textPrimary }}>{(bounce / 10).toFixed(1)}%</div>
          <div style={{ fontSize: 8, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>Bounce rate</div>
          <div style={{ fontSize: 8, color: T.green, fontFamily: "Syne,sans-serif", marginTop: 2 }}>↓ −5.2%</div>
        </div>
        <div style={{ ...dp({ padding: "7px 9px" }) }}>
          <div style={{ fontFamily: "DM Mono,monospace", fontSize: 14, fontWeight: 500, color: T.textPrimary }}>{newUsers}%</div>
          <div style={{ fontSize: 8, color: T.textTert, fontFamily: "Syne,sans-serif", marginTop: 1 }}>New visitors</div>
          <div style={{ fontSize: 8, color: T.orange, fontFamily: "Syne,sans-serif", marginTop: 2 }}>Organic: 72%</div>
        </div>
      </div> */}

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DEMO 3 — E-COMMERCE
───────────────────────────────────────────────────────────── */
const PRODUCTS = [
  { ic: "👟", bg: "rgba(249,115,22,0.1)", nm: "Air Sneakers",   pr: 89  },
  { ic: "🎧", bg: "rgba(74,222,128,0.1)", nm: "Pro Headphones", pr: 149 },
  { ic: "⌚", bg: "rgba(96,165,250,0.1)", nm: "Smart Watch",    pr: 299 },
  { ic: "🎒", bg: "rgba(251,191,36,0.1)", nm: "Urban Backpack", pr: 65  },
];
const ORDERS = [
  { id: "#1042", nm: "Sarah K.", status: "Shipped",    sc: "green",  total: "$238" },
  { id: "#1041", nm: "Raj M.",   status: "Processing", sc: "orange", total: "$149" },
  { id: "#1040", nm: "Emma L.",  status: "Delivered",  sc: "green",  total: "$202" },
  { id: "#1039", nm: "Tom W.",   status: "Pending",    sc: "amber",  total: "$299" },
];

function EcomDemo({ active, bp }) {
  const rev    = useCountUp(14280, 900, active);
  const orders = useCountUp(187, 700, active);
  const aov    = useCountUp(76, 700, active);
  const [revH, setRevH] = useState([0, 0, 0, 0, 0, 0, 0]);
  const REV = [28, 35, 31, 42, 38, 50, 46];
  const isMob = bp === "mobile";

  useEffect(() => {
    if (!active) { setRevH([0, 0, 0, 0, 0, 0, 0]); return; }
    REV.forEach((h, i) => setTimeout(() => setRevH(p => { const n = [...p]; n[i] = h; return n; }), i * 60));
  }, [active]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Top split: products + kpis */}
      <div style={{ display: "grid", gridTemplateColumns: isMob ? "1fr" : "1fr 1fr", gap: 10 }}>
        {/* Products */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 10, borderRadius: 8, border: `1px solid ${T.border}`, background: T.bgInset }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: T.orange, fontFamily: "Syne,sans-serif" }}>ShopNova</div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: T.textSec }}>Cart <div style={{ background: T.orange, color: "#000", borderRadius: "50%", width: 14, height: 14, fontSize: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>3</div></div>
          </div>
          <div style={{ background: T.orangeGlow, border: `1px solid ${T.border}`, borderRadius: 6, padding: "5px 8px", fontSize: 9, color: T.textTert }}>🔍 Search products...</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 5 }}>
            {PRODUCTS.map(p => (
              <div key={p.nm} style={{ border: `1px solid ${T.border}`, borderRadius: 8, overflow: "hidden", background: T.bgCard }}>
                <div style={{ height: 48, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{p.ic}</div>
                <div style={{ padding: "5px 6px" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{p.nm}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: T.orange, fontFamily: "DM Mono,monospace", marginTop: 1 }}>${p.pr}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* KPIs + chart */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 5 }}>
            {[
              { v: "$" + rev.toLocaleString(), l: "Revenue", t: "+22%" },
              { v: orders.toLocaleString(),    l: "Orders",  t: "+14/hr" },
              { v: "$" + aov,                  l: "Avg AOV", t: "+$8" },
              { v: "24%",                      l: "Abandon", t: "" },
            ].map(k => (
              <div key={k.l} style={kpiCard()}>
                <div style={monoVal}>{k.v}</div>
                <div style={monoSub}>{k.l}</div>
                {k.t && <div style={monoTrend(false)}>{k.t}</div>}
              </div>
            ))}
          </div>
          <div style={dp()}>
            <div style={panelTitle}>Revenue this week ($k)</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 36 }}>
              {revH.map((h, i) => <div key={i} style={{ flex: 1, background: T.orange, opacity: 0.55 + i * 0.07, borderRadius: "2px 2px 0 0", height: h, transition: "height .7s ease" }} />)}
            </div>
            <div style={{ display: "flex", marginTop: 3 }}>
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 7, color: T.textTert, fontFamily: "DM Mono,monospace" }}>{d}</div>)}
            </div>
          </div>
        </div>
      </div>
      {/* Orders */}
      <div style={dp()}>
        <div style={panelTitle}>Recent orders</div>
        {ORDERS.map(o => (
          <div key={o.id} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: `1px solid ${T.borderSub}` }}>
            <div style={{ fontSize: 9, color: T.textTert, width: 36, fontFamily: "DM Mono,monospace", flexShrink: 0 }}>{o.id}</div>
            <div style={{ flex: 1, fontSize: 10, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{o.nm}</div>
            <span style={pillStyle(o.sc)}>{o.status}</span>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.textPrimary, fontFamily: "DM Mono,monospace", width: 34, textAlign: "right" }}>{o.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DEMO 4 — SAAS
───────────────────────────────────────────────────────────── */
const SAAS_H  = [32, 44, 38, 56, 50, 72];
const SAAS_LB = ["J", "F", "M", "A", "M", "J"];
const SAAS_USERS = [
  { init: "SK", nm: "Sarah Kim",  plan: "Pro",        status: "Active",  sc: "green",  rev: "$240"   },
  { init: "RM", nm: "Raj Mehta",  plan: "Team",       status: "Trial",   sc: "orange", rev: "$480"   },
  { init: "EL", nm: "Emma Lee",   plan: "Basic",      status: "Pending", sc: "amber",  rev: "$49"    },
  { init: "TW", nm: "Tom Walsh",  plan: "Enterprise", status: "Active",  sc: "green",  rev: "$1,200" },
];

function SaasDemo({ active, bp }) {
  const [bH, setBH] = useState(SAAS_H.map(() => 0));
  const users = useCountUp(12480, 900, active);
  const mrr   = useCountUp(84200, 900, active);
  const sess  = useCountUp(347, 700, active);
  const churn = useCountUp(24, 800, active, 1);
  const isMob = bp === "mobile";

  useEffect(() => {
    if (!active) { setBH(SAAS_H.map(() => 0)); return; }
    SAAS_H.forEach((h, i) => setTimeout(() => setBH(p => { const n = [...p]; n[i] = h; return n; }), i * 80));
  }, [active]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>SaaS Dashboard — June 2025</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9, padding: "2px 8px", borderRadius: 999, background: T.orangeGlow, border: `1px solid ${T.border}`, color: T.orange, fontFamily: "DM Mono,monospace" }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.orange, animation: "oPulse 1.5s infinite" }} />
          Live
        </div>
      </div>
      {/* KPIs — 2 col on mobile, 4 col otherwise */}
      <div style={{ display: "grid", gridTemplateColumns: isMob ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: 6 }}>
        {[
          { v: users.toLocaleString(), l: "Total users", g: "+12% MoM", neg: false },
          { v: "$" + mrr.toLocaleString(), l: "MRR", g: "+8.4%", neg: false },
          { v: (churn / 10).toFixed(1) + "%", l: "Churn rate", g: "+0.2%", neg: true },
          { v: sess.toLocaleString(), l: "Sessions", g: "+34 today", neg: false },
        ].map(k => (
          <div key={k.l} style={kpiCard()}>
            <div style={monoVal}>{k.v}</div>
            <div style={monoSub}>{k.l}</div>
            <div style={monoTrend(k.neg)}>{k.g}</div>
          </div>
        ))}
      </div>
      {/* Charts */}
      <div style={{ display: "flex", gap: 8, flexWrap: isMob ? "wrap" : "nowrap" }}>
        <div style={{ ...dp(), flex: isMob ? "1 1 100%" : 1.4 }}>
          <div style={panelTitle}>Monthly revenue ($k)</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
            {bH.map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ width: "100%", borderRadius: "3px 3px 0 0", background: T.orange, opacity: .85, height: h, transition: "height .7s ease" }} />
                <div style={{ fontSize: 8, color: T.textTert, fontFamily: "DM Mono,monospace" }}>{SAAS_LB[i]}</div>
              </div>
            ))}
          </div>
        </div>
        {!isMob && (
          <div style={{ ...dp(), flex: 1 }}>
            <div style={panelTitle}>User growth</div>
            <SparkLine active={active} />
          </div>
        )}
      </div>
      {/* Table — hide on mobile to keep it clean */}
      {!isMob && (
        <div style={{ overflow: "hidden", border: `1px solid ${T.border}`, borderRadius: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <thead><tr>{["User", "Plan", "Revenue", "Status", "Joined"].map(h => <th key={h} style={thStyle}>{h}</th>)}</tr></thead>
            <tbody>
              {SAAS_USERS.map((u, i) => (
                <tr key={i}>
                  <td style={tdStyle}><div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 18, height: 18, borderRadius: "50%", background: T.orangeGlow, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: T.orange, flexShrink: 0 }}>{u.init}</div>{u.nm}</div></td>
                  <td style={tdStyle}>{u.plan}</td>
                  <td style={tdStyle}>{u.rev}</td>
                  <td style={tdStyle}><span style={pillStyle(u.sc)}>{u.status}</span></td>
                  <td style={tdStyle}>{["Jan 12", "May 3", "Jun 1", "Feb 28"][i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Mobile: compact user list */}
      {isMob && (
        <div style={dp()}>
          <div style={panelTitle}>Recent users</div>
          {SAAS_USERS.map((u, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", borderBottom: `1px solid ${T.borderSub}` }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: T.orangeGlow, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: T.orange, flexShrink: 0 }}>{u.init}</div>
              <div style={{ flex: 1, fontSize: 10, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{u.nm}</div>
              <span style={pillStyle(u.sc)}>{u.status}</span>
              <div style={{ fontSize: 10, color: T.textPrimary, fontFamily: "DM Mono,monospace" }}>{u.rev}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SparkLine({ active }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!active || !ref.current) return;
    const c = ref.current, ctx = c.getContext("2d");
    const data = [1200, 2800, 4100, 5900, 8200, 10400, 12480];
    const W = c.width, H = c.height, max = Math.max(...data), min = Math.min(...data);
    const px = i => (i / (data.length - 1)) * (W - 8) + 4;
    const py = v => H - 8 - ((v - min) / (max - min)) * (H - 16);
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = T.orange; ctx.lineWidth = 1.5; ctx.lineJoin = "round";
    ctx.beginPath();
    data.forEach((v, i) => i === 0 ? ctx.moveTo(px(i), py(v)) : ctx.lineTo(px(i), py(v)));
    ctx.stroke();
    data.forEach((v, i) => { ctx.beginPath(); ctx.arc(px(i), py(v), 2.5, 0, Math.PI * 2); ctx.fillStyle = T.orange; ctx.fill(); });
  }, [active]);
  return <canvas ref={ref} width={160} height={80} style={{ width: "100%", height: 80 }} />;
}

/* ─────────────────────────────────────────────────────────────
   DEMO 5 — DIGITAL GROWTH
───────────────────────────────────────────────────────────── */
const FUNNEL = [
  { lbl: "Visitors",  pct: 100, val: "8,240", color: T.orange  },
  { lbl: "Engaged",   pct: 72,  val: "5,934", color: "#fb923c" },
  { lbl: "Leads",     pct: 38,  val: "3,131", color: "#fdba74" },
  { lbl: "Converted", pct: 18,  val: "1,483", color: "#fde68a" },
];
const CHANNELS = [
  { nm: "Organic search", pct: 72, color: T.orange                },
  { nm: "Social media",   pct: 48, color: "#fb923c"               },
  { nm: "Paid ads",       pct: 33, color: "#fdba74"               },
  { nm: "Email",          pct: 22, color: "rgba(249,115,22,0.4)"  },
];

function GrowthDemo({ active, bp }) {
  const [fW, setFW] = useState(FUNNEL.map(() => 0));
  const visits = useCountUp(8240, 900, active);
  const cvr    = useCountUp(42, 800, active, 1);
  const leads  = useCountUp(1483, 900, active);
  const roas   = useCountUp(41, 800, active, 1);
  const isMob  = bp === "mobile";

  useEffect(() => {
    if (!active) { setFW(FUNNEL.map(() => 0)); return; }
    FUNNEL.forEach((f, i) => setTimeout(() => setFW(p => { const n = [...p]; n[i] = f.pct; return n; }), i * 130 + 200));
  }, [active]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "grid", gridTemplateColumns: isMob ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: 6 }}>
        {[
          { v: visits.toLocaleString(),    l: "Organic visits",  g: "+34% MoM" },
          { v: (cvr / 10).toFixed(1) + "%", l: "Conversion",    g: "+1.2pts"  },
          { v: leads.toLocaleString(),     l: "Leads generated", g: "+18% week" },
          { v: (roas / 10).toFixed(1) + "x", l: "Ad ROAS",      g: "Up 4.1x" },
        ].map(k => (
          <div key={k.l} style={kpiCard()}>
            <div style={monoVal}>{k.v}</div>
            <div style={monoSub}>{k.l}</div>
            <div style={monoTrend(false)}>{k.g}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMob ? "1fr" : "1fr 1fr", gap: 8 }}>
        <div style={dp()}>
          <div style={panelTitle}>Conversion funnel</div>
          {FUNNEL.map((f, i) => (
            <div key={f.lbl} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
              <div style={{ fontSize: 9, color: T.textTert, width: 52, textAlign: "right", fontFamily: "DM Mono,monospace", flexShrink: 0 }}>{f.lbl}</div>
              <div style={{ flex: 1, height: 18, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: fW[i] + "%", background: f.color, borderRadius: 3, display: "flex", alignItems: "center", paddingLeft: 5, fontSize: 8, color: "#000", fontWeight: 700, fontFamily: "DM Mono,monospace", transition: "width 1s ease" }}>{f.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={dp()}>
          <div style={panelTitle}>Traffic channels</div>
          {CHANNELS.map(ch => (
            <div key={ch.nm} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: ch.color, flexShrink: 0 }} />
              <div style={{ flex: 1, fontSize: 10, color: T.textPrimary, fontFamily: "Syne,sans-serif" }}>{ch.nm}</div>
              <div style={{ width: 64, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                <div style={{ height: 3, width: ch.pct + "%", background: ch.color, borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 9, color: T.textSec, width: 24, textAlign: "right", fontFamily: "DM Mono,monospace" }}>{ch.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DEMO FRAME — browser chrome wrapper
───────────────────────────────────────────────────────────── */
function DemoFrame({ svc, active, bp }) {
  const DEMOS = [MobileDemo, WebsiteDemo, EcomDemo, SaasDemo, GrowthDemo];
  const Demo  = DEMOS[SERVICES.indexOf(svc)];
  return (
    <div style={{ border: `1px solid ${T.border}`, borderRadius: 16, overflow: "hidden", background: T.bgCard, display: "flex", flexDirection: "column" }}>
      <div style={{ height: 32, background: T.bgInset, borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", padding: "0 12px", gap: 6 }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map((c, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, margin: "0 10px", background: T.orangeGlow, border: `1px solid ${T.border}`, borderRadius: 4, height: 16, display: "flex", alignItems: "center", padding: "0 8px", fontSize: 9, color: T.orange, fontFamily: "DM Mono,monospace", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {svc.browserUrl}
        </div>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.orange, animation: "oGlow 2s infinite", flexShrink: 0 }} />
      </div>
      <div style={{ padding: bp === "mobile" ? 12 : 14, display: "flex", flexDirection: "column", gap: 10, minHeight: bp === "mobile" ? "auto" : 360 }}>
        <Demo active={active} bp={bp} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────────── */
export default function ServicesShowcase() {
  useGoogleFonts();
  const bp = useBreakpoint();
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const pTimer = useRef(null);

  const startProgress = useCallback((idx) => {
    clearInterval(pTimer.current);
    setProgress(0);
    const step = 100 / (TAB_MS / 50);
    let p = 0;
    pTimer.current = setInterval(() => {
      p = Math.min(p + step, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(pTimer.current);
        const next = (idx + 1) % SERVICES.length;
        setCurrent(next);
        startProgress(next);
      }
    }, 50);
  }, []);

  useEffect(() => {
    startProgress(0);
    return () => clearInterval(pTimer.current);
  }, [startProgress]);

  const handleSelect = (i) => { clearInterval(pTimer.current); setCurrent(i); startProgress(i); };
  const svc = SERVICES[current];
  const isMob = bp === "mobile";

  return (
    <div style={{
      fontFamily: "Syne,sans-serif",
      background: `radial-gradient(circle at 95% 85%, ${T.orange} 0%, transparent 55%), ${T.bg}`,
      padding: isMob ? "1.25rem" : "2rem",
      display: "flex",
      flexDirection: "column",
      gap: isMob ? "1rem" : "1.5rem",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: isMob ? 28 : bp === "tablet" ? 40 : 52,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.02em",
            fontFamily: "Syne,sans-serif",
            lineHeight: 1.1,
          }}
        >
          What We Do <span style={{ color: T.orange }}>Best</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            color: "rgba(255,255,255,0.5)",
            marginTop: 12,
            fontSize: isMob ? 13 : 15,
            lineHeight: 1.6,
            maxWidth: 480,
            margin: "12px auto 0",
            padding: "0 1rem",
          }}
        >
          Digital Craftsmanship for Ambitious Businesses
        </motion.p>
      </div>

      {/* Selector */}
      <SelectorStrip current={current} onSelect={handleSelect} bp={bp} progress={progress} />

      {/* Stage: demo-only on mobile, stacked on tablet, side-by-side on desktop */}
      <div style={{
        display: "grid",
        gridTemplateColumns: bp === "desktop" ? "1fr 1fr" : "1fr",
        gap: isMob ? "1rem" : "1.5rem",
        alignItems: "start",
      }}>
        {/* Narrative — hidden on mobile to give demo full width */}
        {!isMob && (
          <Narrative svc={svc} active={true} key={current + "-n"} bp={bp} />
        )}
        {/* Demo — full width on mobile */}
        <DemoFrame svc={svc} active={true} key={current + "-d"} bp={bp} />
      </div>
    </div>
  );
}
