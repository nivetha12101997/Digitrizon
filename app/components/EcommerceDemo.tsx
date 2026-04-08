"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserDots, LockIcon } from "./atoms";

const EC_ITEMS = [
  { n: "Air Max Pro", p: 129 },
  { n: "Smart Watch", p: 199 },
  { n: "Tote Bag", p: 79 },
  { n: "Sunglasses", p: 149 },
];

export default function EcommerceDemo() {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [toast, setToast] = useState({ visible: false, msg: "" });
  const [showProds, setShowProds] = useState(false);
  const [progPct, setProgPct] = useState(0);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const countRef = useRef(0);
  const amtRef = useRef(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doAdd = useCallback((name: string, price: number) => {
    countRef.current++;
    amtRef.current += price;
    const pct = Math.min(100, countRef.current * 25);
    setCartCount(countRef.current);
    setCartTotal(amtRef.current);
    setProgPct(pct);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ visible: true, msg: `${name} added to cart!` });
    toastTimer.current = setTimeout(() => setToast({ visible: false, msg: "" }), 2200);
  }, []);

  useEffect(() => {
    countRef.current = 0;
    amtRef.current = 0;
    setCartCount(0);
    setCartTotal(0);
    setProgPct(0);
    setShowProds(false);
    setTimeout(() => setShowProds(true), 200);

    const adds = [
      { idx: 0, delay: 2000 },
      { idx: 2, delay: 4800 },
      { idx: 1, delay: 7600 },
      { idx: 3, delay: 10400 },
    ];
    adds.forEach(({ idx, delay }) => {
      const t = setTimeout(() => doAdd(EC_ITEMS[idx].n, EC_ITEMS[idx].p), delay);
      timers.current.push(t);
    });

    return () => {
      timers.current.forEach(clearTimeout);
      intervals.current.forEach(clearInterval);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, [doAdd]);

  return (
    <div style={{ width: "100%" }}>
      <div className={`toast${toast.visible ? " show" : ""}`}>
        <div className="toast-d" />
        <span>{toast.msg}</span>
      </div>
      <div className="dual">
        {/* Mobile phone */}
        <div className="dual-ph">
          <div className="phone-sm">
            <div className="psn" />
            <div className="pss"><span>9:41</span><span>●●</span></div>
            <div className="psb">
              <div className="epn">
                <div className="epn-brand">LUXORA</div>
                <div className="epn-cart">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5">
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <div className="epn-badge">{cartCount}</div>
                </div>
              </div>
              <div className="ep-banner">
                <div><div className="ep-bt">Summer Sale</div><div className="ep-bs">Up to 40% off</div></div>
                <span style={{ fontSize: 18 }}>👟</span>
              </div>
              <div className="ep-pgrid">
                {[["👟", "Air Max", "$129"], ["⌚", "Watch", "$199"], ["👜", "Tote", "$79"], ["🕶️", "Glasses", "$149"]].map(([e, n, p]) => (
                  <div className="ep-prod" key={n}>
                    <div className="ep-pimg">{e}</div>
                    <div className="ep-pi"><div className="ep-pn">{n}</div><div className="ep-pp">{p}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop browser */}
        <div className="dual-br">
          <div className="browser">
            <div className="b-bar">
              <BrowserDots />
              <div className="b-url"><LockIcon />luxora-store.com</div>
            </div>
            <div className="ec-nav">
              <div className="ec-brand">LUXORA</div>
              <div className="ec-links"><span>New</span><span>Women</span><span>Men</span><span>Sale</span></div>
              <button className="ec-cart-btn">🛒 Cart ({cartCount})</button>
            </div>
            <div className="ec-banner">
              <div><div className="ec-be">Limited Time</div><div className="ec-bt">Summer Collection — 40% Off</div></div>
              <div className="ec-bi">👗</div>
            </div>
            <div className="ec-pgrid">
              {[
                { e: "👟", n: "Air Max Pro", p: "$129" },
                { e: "⌚", n: "Smart Watch", p: "$199" },
                { e: "👜", n: "Tote Bag", p: "$79" },
                { e: "🕶️", n: "Sunglasses", p: "$149" },
              ].map((item, i) => (
                <div
                  key={item.n}
                  className={`ec-prod${showProds ? " show" : ""}`}
                  style={{ transitionDelay: `${i * 110}ms` }}
                  onClick={() => doAdd(item.n, parseInt(item.p.replace("$", "")))}
                >
                  <div className="ec-pimg">{item.e}</div>
                  <div className="ec-pname">{item.n}</div>
                  <div className="ec-pprice">{item.p}</div>
                  <div className="ec-padd">+ Add</div>
                </div>
              ))}
            </div>
            <div className="ec-progress">
              <div className="ec-prog-label">
                <span>
                  {progPct >= 100
                    ? "✓ Ready to checkout!"
                    : progPct >= 50
                    ? "Almost there"
                    : cartCount === 0
                    ? "Add items to start checkout"
                    : "Items added"}
                </span>
                <span>{progPct}%</span>
              </div>
              <div className="ec-prog-track">
                <div className="ec-prog-fill" style={{ width: `${progPct}%` }} />
              </div>
            </div>
            <div className="ec-footer">
              <div className="ec-total">
                Cart: <span style={{ color: "var(--o)", fontWeight: 700 }}>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="ec-chk">Checkout →</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
