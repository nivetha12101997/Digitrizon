"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserDots, LivePill, LockIcon } from "./atoms";

interface FeedItem {
  c: string;
  t: string;
  ts: string;
}

const SA_FEED: FeedItem[] = [
  { c: "#22c55e", t: "New signup: sarah@techcorp.io", ts: "just now" },
  { c: "var(--o)", t: "Plan upgraded → Pro · $199/mo", ts: "1m ago" },
  { c: "rgba(255,255,255,.4)", t: "API: 1.2M calls processed", ts: "2m ago" },
  { c: "#22c55e", t: "Invoice #2841 paid — $199", ts: "3m ago" },
  { c: "var(--o)", t: '"dark_mode" feature deployed', ts: "5m ago" },
  { c: "#3b82f6", t: "Slack integration connected", ts: "6m ago" },
  { c: "#22c55e", t: "Trial converted: mark@startup.co", ts: "7m ago" },
  { c: "rgba(255,255,255,.4)", t: "Server scaled to 8 pods", ts: "8m ago" },
];
const SS_FEED: FeedItem[] = [
  { c: "#22c55e", t: "signup: sarah@techcorp.io", ts: "now" },
  { c: "var(--o)", t: "Plan → Pro $199/mo", ts: "1m" },
  { c: "#3b82f6", t: "API: 1.2M calls/day", ts: "2m" },
  { c: "#22c55e", t: "Invoice #2841 paid", ts: "3m" },
];
const SA_USERS = [4200, 4247, 4285, 4310, 4342, 4378];
const SA_MRR = [38000, 38400, 38800, 39200, 39700, 40100];

export default function SaasDemo() {
  const [saFeed, setSaFeed] = useState<FeedItem[]>([]);
  const [ssFeed, setSsFeed] = useState<FeedItem[]>([]);
  const [saUsers, setSaUsers] = useState(4200);
  const [saMrr, setSaMrr] = useState(38000);
  const [lineGo, setLineGo] = useState(false);
  const saFiRef = useRef(0);
  const ssFiRef = useRef(0);
  const saIdxRef = useRef(0);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    intervals.current.forEach(clearInterval);
    timers.current.forEach(clearTimeout);
    intervals.current = [];
    timers.current = [];
    setLineGo(false);
    setSaFeed([]);
    setSsFeed([]);
    saFiRef.current = 0;
    ssFiRef.current = 0;
    saIdxRef.current = 0;

    const t1 = setTimeout(() => setLineGo(true), 350);
    timers.current.push(t1);

    const addSa = () => {
      const idx = saFiRef.current % SA_FEED.length;
      saFiRef.current++;
      setSaFeed((prev) => [SA_FEED[idx], ...prev].slice(0, 4));
    };
    const addSs = () => {
      const idx = ssFiRef.current % SS_FEED.length;
      ssFiRef.current++;
      setSsFeed((prev) => [SS_FEED[idx], ...prev].slice(0, 3));
    };

    addSa();
    addSs();
    const i1 = setInterval(addSa, 1900);
    const i2 = setInterval(addSs, 2600);
    const i3 = setInterval(() => {
      saIdxRef.current = (saIdxRef.current + 1) % SA_USERS.length;
      setSaUsers(SA_USERS[saIdxRef.current]);
      setSaMrr(SA_MRR[saIdxRef.current]);
    }, 2200);
    intervals.current.push(i1, i2, i3);

    return () => {
      intervals.current.forEach(clearInterval);
      timers.current.forEach(clearTimeout);
    };
  }, []);

  const uK = (SA_USERS.indexOf(saUsers) !== -1 ? saUsers / 1000 : 4.2).toFixed(1) + "K";
  const mK = "$" + (SA_MRR.indexOf(saMrr) !== -1 ? saMrr / 1000 : 38).toFixed(0) + "K";

  return (
    <div className="dual">
      {/* Phone */}
      <div className="dual-ph">
        <div className="phone-sm">
          <div className="psn" />
          <div className="pss"><span>9:41</span><span>●●</span></div>
          <div className="psb" style={{ paddingTop: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div className="ss-brand">FLOWIQ</div>
              <LivePill style={{ fontSize: 6, padding: "1px 5px" }} />
            </div>
            <div className="ss-kgrid">
              <div className="ss-k"><div className="ss-kv">{uK}</div><div className="ss-kl">Users</div><div className="ss-kd">▲ 23%</div></div>
              <div className="ss-k"><div className="ss-kv">{mK}</div><div className="ss-kl">MRR</div><div className="ss-kd">▲ 18%</div></div>
              <div className="ss-k"><div className="ss-kv">99.9</div><div className="ss-kl">Uptime%</div><div className="ss-kd" style={{ color: "#22c55e" }}>▲ 0.1</div></div>
              <div className="ss-k"><div className="ss-kv">2.1%</div><div className="ss-kl">Churn</div><div className="ss-kd" style={{ color: "rgba(255,255,255,.35)" }}>▼ 0.4</div></div>
            </div>
            <div className="ss-spark">
              <svg width="100%" height="34" viewBox="0 0 136 34" preserveAspectRatio="none">
                <path d="M0,30 L14,24 L28,19 L46,13 L64,9 L82,6 L100,3 L120,1.5 L136,1 L136,34 L0,34Z" fill="rgba(255,107,0,.09)" />
                <path className={`dline${lineGo ? " go" : ""}`} d="M0,30 L14,24 L28,19 L46,13 L64,9 L82,6 L100,3 L120,1.5 L136,1" fill="none" stroke="var(--o)" strokeWidth="2" />
              </svg>
            </div>
            {ssFeed.map((f, i) => (
              <div className="ss-feed-item" key={i}>
                <div className="ss-fd" style={{ background: f.c }} />
                <div className="ss-ft">{f.t}</div>
                <div className="ss-fts">{f.ts}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Browser */}
      <div className="dual-br">
        <div className="browser">
          <div className="b-bar">
            <BrowserDots />
            <div className="b-url"><LockIcon />app.flowiq.io/dashboard</div>
            <LivePill style={{ marginLeft: 8 }} />
          </div>
          <div className="sa-topbar">
            <div className="sa-brand">FLOWIQ</div>
            <div className="sa-tabs">
              <div className="sa-tab on">Overview</div>
              <div className="sa-tab">Analytics</div>
              <div className="sa-tab">Billing</div>
            </div>
            <div className="sa-right">
              <div className="sa-badge">Pro Plan</div>
              <div className="sa-av" />
            </div>
          </div>
          <div className="sa-body">
            <div className="sa-kgrid">
              {[
                { v: uK, l: "Active Users", d: "▲ 23%", dc: "#22c55e" },
                { v: mK, l: "MRR", d: "▲ 18%", dc: "#22c55e" },
                { v: "99.9%", l: "Uptime", d: "▲ 0.1%", dc: "#22c55e" },
                { v: "2.1%", l: "Churn", d: "▼ 0.4%", dc: "var(--o)" },
              ].map((k, i) => (
                <div className="sa-k show" key={i}>
                  <div className="sa-kv">{k.v}</div>
                  <div className="sa-kl">{k.l}</div>
                  <div className="sa-kd" style={{ color: k.dc }}>{k.d}</div>
                </div>
              ))}
            </div>
            <div className="sa-mid">
              <div className="sa-chart-box">
                <div className="sa-box-t">MRR Growth</div>
                <svg width="100%" height="50" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="saas-mg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B00" stopOpacity=".26" />
                      <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#saas-mg)" d="M0,48 L25,41 L50,33 L80,23 L110,15 L145,8 L175,4 L200,2 L200,50 L0,50Z" />
                  <path className={`dline${lineGo ? " go" : ""}`} fill="none" stroke="var(--o)" strokeWidth="2" d="M0,48 L25,41 L50,33 L80,23 L110,15 L145,8 L175,4 L200,2" />
                </svg>
              </div>
              <div className="sa-pipe-box">
                <div className="sa-box-t">Pipeline</div>
                {[
                  { n: "Lead", w: "90%", c: "var(--o)", v: 248 },
                  { n: "Trial", w: "62%", c: "rgba(255,107,0,.68)", v: 142 },
                  { n: "Paying", w: "40%", c: "rgba(255,107,0,.44)", v: 86 },
                  { n: "Churned", w: "10%", c: "rgba(255,255,255,.2)", v: 18 },
                ].map((row) => (
                  <div className="sa-prow" key={row.n}>
                    <div className="sa-pname">{row.n}</div>
                    <div className="sa-ptrack">
                      <div className="sa-pfill" style={{ width: row.w, background: row.c }} />
                    </div>
                    <div className="sa-pnum">{row.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sa-feed-box">
              <div className="sa-fhead">
                <span>Live Events</span>
                <LivePill style={{ fontSize: 6, padding: "1px 5px" }} />
              </div>
              {saFeed.map((f, i) => (
                <div className="sa-fi" key={i}>
                  <div className="sa-fdot" style={{ background: f.c }} />
                  <div className="sa-ftxt">{f.t}</div>
                  <div className="sa-ftime">{f.ts}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
