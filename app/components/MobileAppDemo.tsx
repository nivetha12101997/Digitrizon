"use client";

import { useEffect, useRef, useState } from "react";

const TXNS = [
  { name: "Freelance Payment", amt: "+$3,200", bg: "rgba(34,197,94,.12)", tc: "#22c55e", isPositive: true },
  { name: "Amazon Purchase", amt: "-$89", bg: "rgba(239,68,68,.1)", tc: "#ef4444", isPositive: false },
  { name: "Consulting Fee", amt: "+$1,500", bg: "rgba(34,197,94,.12)", tc: "#22c55e", isPositive: true },
  { name: "Spotify Premium", amt: "-$10", bg: "rgba(239,68,68,.1)", tc: "#ef4444", isPositive: false },
];
const BALANCES = ["$24,580", "$27,780", "$27,691", "$29,191", "$29,181"];

export default function MobileAppDemo() {
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);

  const [mobIdx, setMobIdx] = useState(0);
  const [balance, setBalance] = useState("$24,580");
  const [newTxn, setNewTxn] = useState<(typeof TXNS)[0] | null>(null);
  const [newTxnVisible, setNewTxnVisible] = useState(false);
  const [viewsVal, setViewsVal] = useState(1.24);
  const [usersVal, setUsersVal] = useState(34.2);
  const [notifs, setNotifs] = useState([
    { id: 0, visible: false },
    { id: 1, visible: false },
    { id: 2, visible: false },
  ]);

  const addTimer = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
    return t;
  };
  const addInterval = (fn: () => void, ms: number) => {
    const t = setInterval(fn, ms);
    intervals.current.push(t);
    return t;
  };
  const clear = () => {
    timers.current.forEach(clearTimeout);
    intervals.current.forEach(clearInterval);
    timers.current = [];
    intervals.current = [];
  };

  useEffect(() => {
    clear();
    setMobIdx(0);

    const notifConfig: [number, number][] = [
      [0, 800],
      [1, 4200],
      [2, 7800],
    ];
    notifConfig.forEach(([id, delay]) => {
      addTimer(() => {
        setNotifs((p) => p.map((n) => (n.id === id ? { ...n, visible: true } : n)));
        addTimer(
          () => setNotifs((p) => p.map((n) => (n.id === id ? { ...n, visible: false } : n))),
          delay + 2400
        );
      }, delay);
    });

    let txnIdx = 0;
    let balIdx = 0;
    addInterval(() => {
      const t = TXNS[txnIdx % TXNS.length];
      txnIdx++;
      setNewTxn(t);
      setNewTxnVisible(false);
      setTimeout(() => setNewTxnVisible(true), 50);
      balIdx = (balIdx + 1) % BALANCES.length;
      setBalance(BALANCES[balIdx]);
    }, 3000);

    addInterval(() => {
      setViewsVal((v) => parseFloat((v + Math.random() * 0.08 + 0.02).toFixed(2)));
      setUsersVal((v) => parseFloat((v + Math.random() * 0.012 + 0.004).toFixed(1)));
    }, 2800);

    addInterval(() => setMobIdx((i) => (i + 1) % 3), 3200);

    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mob-scene">
      {[
        { top: 40, tag: "💰 Payment", txt: "+$2,400 received from client" },
        { top: 178, tag: "📦 Order Update", txt: "Your delivery is on the way!" },
        { top: 316, tag: "🎯 Goal Reached", txt: "10K steps completed today" },
      ].map((n, i) => (
        <div key={i} className={`p-notif${notifs[i].visible ? " show" : ""}`} style={{ top: n.top }}>
          <div className="pn-tag">{n.tag}</div>
          <div className="pn-txt">{n.txt}</div>
        </div>
      ))}

      <div className="phone-float">
        <div className="phone">
          <div className="p-notch" />
          <div className="p-statusbar">
            <span>9:41</span>
            <span>●●● 100%</span>
          </div>
          <div className="p-track-outer">
            <div className="p-track" style={{ transform: `translateX(${-mobIdx * 220}px)` }}>
              {/* Screen 0: Dashboard */}
              <div className="p-screen">
                <div className="p-toprow">
                  <div>
                    <div style={{ fontSize: 7, color: "rgba(255,255,255,.28)" }}>Good morning</div>
                    <div style={{ fontSize: 11, fontWeight: 600 }}>Alex Chen</div>
                  </div>
                  <div className="p-bell">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,107,0,.8)" strokeWidth="2.2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                </div>
                <div className="p-hero-card">
                  <div className="p-hero-lbl">Total Balance</div>
                  <div className="p-hero-val">{balance}</div>
                  <div className="p-hero-sub" style={{ color: "#22c55e" }}>▲ +12.4% this month</div>
                </div>
                <div className="p-grid">
                  {[
                    { lbl: "Portfolio", val: "$18.2k" },
                    { lbl: "Savings", val: "$6.1k" },
                    { lbl: "Spent", val: "$4.3k" },
                    { lbl: "Growth", val: "+24%" },
                  ].map((t) => (
                    <div className="p-tile" key={t.lbl}>
                      <div className="p-tile-i">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        </svg>
                      </div>
                      <div className="p-tile-lbl">{t.lbl}</div>
                      <div className="p-tile-val">{t.val}</div>
                    </div>
                  ))}
                </div>
                <div className="p-sec">Recent Transactions</div>
                <div className="p-txn">
                  <div className="p-txn-i" style={{ background: "rgba(34,197,94,.14)" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="p-txn-name">Payment Received</div>
                    <div className="p-txn-sub">From Alex — 2:30 PM</div>
                  </div>
                  <div className="p-txn-badge" style={{ background: "rgba(34,197,94,.12)", color: "#22c55e" }}>+$2,400</div>
                </div>
                <div className="p-txn">
                  <div className="p-txn-i" style={{ background: "rgba(239,68,68,.14)" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                      <line x1="17" y1="7" x2="7" y2="17" />
                      <polyline points="7 7 7 17 17 17" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="p-txn-name">Netflix Subscription</div>
                    <div className="p-txn-sub">Monthly · Auto-pay</div>
                  </div>
                  <div className="p-txn-badge" style={{ background: "rgba(239,68,68,.1)", color: "#ef4444" }}>-$15</div>
                </div>
                {newTxn && (
                  <div className={`p-txn p-new-txn${newTxnVisible ? " in" : ""}`}>
                    <div className="p-txn-i" style={{ background: newTxn.isPositive ? "rgba(34,197,94,.14)" : "rgba(239,68,68,.14)" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={newTxn.tc} strokeWidth="2.5">
                        {newTxn.isPositive ? (
                          <polyline points="20 6 9 17 4 12" />
                        ) : (
                          <>
                            <line x1="17" y1="7" x2="7" y2="17" />
                            <polyline points="7 7 7 17 17 17" />
                          </>
                        )}
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="p-txn-name">{newTxn.name}</div>
                      <div className="p-txn-sub">Just now</div>
                    </div>
                    <div className="p-txn-badge" style={{ background: newTxn.bg, color: newTxn.tc }}>{newTxn.amt}</div>
                  </div>
                )}
              </div>

              {/* Screen 1: Analytics */}
              <div className="p-screen">
                <div className="p-chart-title">Weekly Performance</div>
                <div className="p-chart-sub">Revenue trending up 18% vs last week</div>
                <div className="p-bars-wrap">
                  {[42, 60, 48, 80, 66, 100, 76].map((h, i) => (
                    <div key={i} className="p-bar" style={{
                      height: `${h}%`,
                      background: h === 100 ? "var(--o)" : `rgba(255,107,0,${0.28 + h * 0.003})`,
                      boxShadow: h === 100 ? "0 0 10px rgba(255,107,0,.45)" : undefined,
                    }} />
                  ))}
                </div>
                <div className="p-stats-grid">
                  <div className="p-stat"><div className="p-stat-v">{viewsVal.toFixed(2)}M</div><div className="p-stat-l">Views</div></div>
                  <div className="p-stat"><div className="p-stat-v">{usersVal.toFixed(1)}K</div><div className="p-stat-l">Active Users</div></div>
                  <div className="p-stat"><div className="p-stat-v">8.7%</div><div className="p-stat-l">CTR</div></div>
                  <div className="p-stat"><div className="p-stat-v">4:21</div><div className="p-stat-l">Avg Session</div></div>
                </div>
                <div className="p-tags">
                  <div className="p-tag" style={{ background: "rgba(255,107,0,.12)", color: "var(--o)" }}>Dashboard 42%</div>
                  <div className="p-tag" style={{ background: "var(--wd)", color: "rgba(255,255,255,.38)" }}>Shop 28%</div>
                  <div className="p-tag" style={{ background: "var(--wd)", color: "rgba(255,255,255,.38)" }}>Profile 18%</div>
                </div>
              </div>

              {/* Screen 2: Profile */}
              <div className="p-screen">
                <div className="p-prof">
                  <div className="p-prof-av" />
                  <div className="p-prof-name">Alex Chen</div>
                  <div className="p-prof-role">Premium Member · Since 2022</div>
                  <div className="p-prof-row">
                    {[["247", "Orders"], ["4.9★", "Rating"], ["12K", "Points"]].map(([v, l]) => (
                      <div key={l}>
                        <div className="p-ps-v">{v}</div>
                        <div className="p-ps-l">{l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-menu">
                    {["Edit Profile", "Payment Methods", "My Statistics", "Security Settings"].map((item) => (
                      <div className="p-mi" key={item}>
                        <div className="p-mi-i">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-dock">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`p-dock-btn${mobIdx === i ? " on" : ""}`} onClick={() => setMobIdx(i)}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={mobIdx === i ? "#FF6B00" : "rgba(255,255,255,.32)"} strokeWidth="2.5">
                  {i === 0 && <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />}
                  {i === 1 && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />}
                  {i === 2 && (
                    <>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </>
                  )}
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="p-dots-row">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`p-dot${mobIdx === i ? " on" : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
