"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* ============ TOP STRIP ============ */}
      <div className="top-strip">
        <div className="ticker">
          <span>Party Launch · Volume 1, Edition 1</span>
          <span>Filed under: General Disgruntlement</span>
          <span>Sponsored by no one. Funded by nothing.</span>
          <span>HQ: Wherever the wifi works</span>
          <span>Now accepting rants, retweets, and resentment</span>
          <span>Party Launch · Volume 1, Edition 1</span>
          <span>Filed under: General Disgruntlement</span>
          <span>Sponsored by no one. Funded by nothing.</span>
          <span>HQ: Wherever the wifi works</span>
          <span>Now accepting rants, retweets, and resentment</span>
        </div>
      </div>

      {/* ============ NAV ============ */}
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-logo">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="32" cy="32" r="29" fill="none" stroke="#E0651E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
                <circle cx="32" cy="32" r="29" fill="none" stroke="#1F5A2E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
                <circle cx="32" cy="32" r="29" fill="none" stroke="#2A1A10" strokeWidth="0.8"></circle>
                <ellipse cx="32" cy="36" rx="11" ry="16" fill="#5A2F12"></ellipse>
                <ellipse cx="32" cy="25" rx="7" ry="6" fill="#5A2F12"></ellipse>
                <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#2A1A10" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
                <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#0a0807"></rect>
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">COCKROACH<br />JANTA PARTY<br />MIRZAPUR</span>
              <span className="brand-tag">कॉकरोच जनता पार्टी · मिर्ज़ापुर · Est. 2026</span>
            </span>
          </Link>

          <nav className="primary-nav" aria-label="Primary">
            <ul>
              <li><Link href="/#vision">Vision</Link></li>
              <li><Link href="/#manifesto">Manifesto</Link></li>
              <li><Link href="/#join">Eligibility</Link></li>
              <li><Link href="/complaints">Complaints</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </nav>

          <Link href="/join" className="btn-pill">Join the Party</Link>
        </div>
      </header>
    </>
  );
}
