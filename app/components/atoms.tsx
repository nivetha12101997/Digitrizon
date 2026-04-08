"use client";

import React from "react";

export function LivePill({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="live-pill" style={style}>
      <div className="live-dot" />
      Live
    </div>
  );
}

export function BrowserDots() {
  return (
    <div className="b-dots">
      <div className="b-dot" style={{ background: "#ff5f57" }} />
      <div className="b-dot" style={{ background: "#febc2e" }} />
      <div className="b-dot" style={{ background: "#28c840" }} />
    </div>
  );
}

export function LockIcon() {
  return (
    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
