"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserDots, LivePill, LockIcon } from "./atoms";

const GR_TRAFFIC = ["+148%", "+162%", "+175%", "+189%", "+203%"];
const GR_ROAS = ["3.2×", "3.4×", "3.6×", "3.8×", "4.0×"];
const GR_CONV = ["6.8%", "7.1%", "7.4%", "7.0%", "7.6%"];
const GR_PERIODS = ["Last 90 days", "Last 60 days", "Last 30 days", "Last 7 days", "Year to date"];
const GR_DOT_PTS: [number, number][] = [[0, 66], [50, 58], [100, 48], [150, 38], [200, 26], [250, 18], [300, 10], [350, 5], [400, 1]];

export default function GrowthDemo() {
  const [grIdx, setGrIdx] = useState(0);
  const [pathGo, setPathGo] = useState(false);
  const [dotPos, setDotPos] = useState<[number, number]>([0, 66]);
  const [dotVisible, setDotVisible] = useState(false);
  const [filledChars, setFilledChars] = useState(false);
  const dotIdxRef = useRef(0);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    intervals.current.forEach(clearInterval);
    timers.current.forEach(clearTimeout);
    intervals.current = [];
    timers.current = [];
    setPathGo(false);
    setDotVisible(false);
    setFilledChars(false);
    dotIdxRef.current = 0;
    setGrIdx(0);

    const t1 = setTimeout(() => {
      setPathGo(true);
      const t2 = setTimeout(() => {
        setDotVisible(true);
        moveDot();
      }, 2500);
      timers.current.push(t2);
    }, 350);
    timers.current.push(t1);

    const t3 = setTimeout(() => setFilledChars(true), 550);
    timers.current.push(t3);

    const i1 = setInterval(() => setGrIdx((i) => (i + 1) % GR_TRAFFIC.length), 3200);
    intervals.current.push(i1);

    function moveDot() {
      const idx = dotIdxRef.current;
      setDotPos(GR_DOT_PTS[idx]);
      dotIdxRef.current = (idx + 1) % GR_DOT_PTS.length;
      const t = setTimeout(moveDot, 580);
      timers.current.push(t);
    }

    return () => {
      intervals.current.forEach(clearInterval);
      timers.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div className="browser">
        <div className="b-bar">
          <BrowserDots />
          <div className="b-url"><LockIcon />analytics.growthiq.io</div>
          <LivePill style={{ marginLeft: 8 }} />
        </div>
        <div className="gr-topbar">
          <div className="gr-brand">GrowthIQ</div>
          <div className="gr-tabs">
            {["Overview", "SEO", "Ads", "CRO"].map((t, i) => (
              <div key={t} className={`gr-tab${i === 0 ? " on" : ""}`}>{t}</div>
            ))}
          </div>
        </div>
        <div className="gr-body">
          <div className="gr-kpis">
            {[
              { v: GR_TRAFFIC[grIdx], d: "▲ 23% MoM", l: "Organic Traffic" },
              { v: GR_ROAS[grIdx], d: "▲ 12% MoM", l: "ROAS" },
              { v: GR_CONV[grIdx], d: "▲ 1.2% MoM", l: "Conv. Rate" },
            ].map((k) => (
              <div className="gr-kpi" key={k.l}>
                <div className="gr-kpi-v">{k.v}</div>
                <div className="gr-kpi-d">{k.d}</div>
                <div className="gr-kpi-l">{k.l}</div>
              </div>
            ))}
          </div>
          <div className="gr-chart-box">
            <div className="gr-chart-h">
              <div className="gr-chart-t">Traffic &amp; Revenue Growth</div>
              <div className="gr-chart-p">{GR_PERIODS[grIdx]}</div>
            </div>
            <svg width="100%" height="72" viewBox="0 0 400 72" preserveAspectRatio="none">
              <defs>
                <linearGradient id="growth-gg1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6B00" stopOpacity=".24" />
                  <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="growth-gg2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,.25)" stopOpacity=".08" />
                  <stop offset="100%" stopColor="rgba(255,255,255,.1)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#growth-gg1)" d="M0,66 C40,60 80,50 120,40 C160,30 200,18 240,12 C280,6 330,2 400,1 L400,72 L0,72Z" />
              <path className={`gpath${pathGo ? " go" : ""}`} fill="none" stroke="var(--o)" strokeWidth="2.5"
                d="M0,66 C40,60 80,50 120,40 C160,30 200,18 240,12 C280,6 330,2 400,1" />
              <path fill="url(#growth-gg2)" d="M0,70 C60,64 120,56 180,48 C240,40 300,28 360,18 L400,12 L400,72 L0,72Z" />
              <path className={`gpath${pathGo ? " go" : ""}`} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 3"
                d="M0,70 C60,64 120,56 180,48 C240,40 300,28 360,18 L400,12" />
              <circle
                cx={dotPos[0]}
                cy={dotPos[1]}
                r="3.5"
                fill="var(--o)"
                opacity={dotVisible ? 1 : 0}
                style={{ transition: "cx 0.58s ease,cy 0.58s ease,opacity .4s" }}
              />
            </svg>
          </div>
          <div className="gr-bottom">
            <div className="gr-box">
              <div className="gr-box-t">Channel Performance</div>
              {[
                { n: "Organic SEO", w: "82%", c: "var(--o)" },
                { n: "Paid Ads", w: "64%", c: "rgba(255,107,0,.65)" },
                { n: "Social", w: "45%", c: "rgba(255,107,0,.42)" },
                { n: "Email", w: "38%", c: "rgba(255,107,0,.3)" },
              ].map((row) => (
                <div className="gr-chrow" key={row.n}>
                  <div className="gr-chn">{row.n}</div>
                  <div className="gr-chtrack">
                    <div className="gr-chfill" style={{ width: filledChars ? row.w : "0%", background: row.c }} />
                  </div>
                  <div className="gr-chpct">{row.w}</div>
                </div>
              ))}
            </div>
            <div className="gr-box">
              <div className="gr-box-t">Conversion Funnel</div>
              {[
                { l: "Awareness", w: "100%", v: "10K", c: "linear-gradient(90deg,rgba(255,107,0,.55),rgba(255,107,0,.18))" },
                { l: "Interest", w: "72%", v: "7.2K", c: "linear-gradient(90deg,rgba(255,107,0,.44),rgba(255,107,0,.12))" },
                { l: "Decision", w: "44%", v: "4.4K", c: "linear-gradient(90deg,rgba(255,107,0,.33),rgba(255,107,0,.08))" },
                { l: "Action", w: "22%", v: "2.2K", c: "linear-gradient(90deg,rgba(255,255,255,.36),rgba(255,255,255,.08))" },
              ].map((row) => (
                <div className="gr-frow" key={row.l}>
                  <div className="gr-fl">{row.l}</div>
                  <div className="gr-ftrack">
                    <div className="gr-ffill" style={{ width: filledChars ? row.w : "0%", background: row.c }}>{row.v}</div>
                  </div>
                  <div className="gr-fcnt">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gr-ticker">
          <div className="gr-tick-inner">
            {[
              ["🔴 LIVE", "visitors now", "+248"],
              ["📈 SEO rank", 'for "digital agency"', "#1"],
              ["💰 Revenue today", "", "$12,400"],
              ["🚀 Organic traffic up", "", "148%"],
              ["⚡ Page speed", "", "98/100"],
              ["🟢 Conversion", "", "6.8%"],
            ].flatMap((item, i) => [
              <span className="gr-tick-item" key={`a${i}`}>{item[0]} <span>{item[2]}</span> {item[1]}</span>,
              <span className="gr-tick-item" key={`b${i}`}>{item[0]} <span>{item[2]}</span> {item[1]}</span>,
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}
