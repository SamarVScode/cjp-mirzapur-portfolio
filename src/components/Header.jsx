"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ============ TOP STRIP ============ */}
      <div className={`top-strip${menuOpen ? " menu-is-open" : ""}`}>
        <div className="ticker">
          <span>Party Launch · Volume 1, Edition 1</span><span>Filed under: General Disgruntlement</span>
          <span>Sponsored by no one. Funded by nothing.</span><span>HQ: Wherever the wifi works</span>
          <span>Now accepting rants, retweets, and resentment</span>
          <span>Party Launch · Volume 1, Edition 1</span><span>Filed under: General Disgruntlement</span>
          <span>Sponsored by no one. Funded by nothing.</span><span>HQ: Wherever the wifi works</span>
          <span>Now accepting rants, retweets, and resentment</span>
        </div>
      </div>

      {/* ============ NAV ============ */}
      <header className={`nav${menuOpen ? " menu-is-open" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="brand" onClick={closeMenu}>
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

          {/* Desktop Nav */}
          <nav className="primary-nav" aria-label="Primary">
            <ul>
              <li><Link href="/vision">Vision</Link></li>
              <li><Link href="/manifesto">Manifesto</Link></li>
              <li><Link href="/eligibility">Eligibility</Link></li>
              <li><Link href="/complaints">Complaints</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Link href="/join" className="btn-pill desktop-join-btn">Join the Party</Link>

          {/* Hamburger Button — mobile only */}
          <button
            className={`hamburger${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            id="mobile-menu-toggle"
          >
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>
        </div>
      </header>

      {/* ============ MOBILE FULL-SCREEN OVERLAY ============ */}
      <div
        className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        id="mobile-nav"
      >
        {/* Background grain pattern */}
        <div className="mob-nav-grain" aria-hidden="true" />

        {/* Big watermark text */}
        <div className="mob-nav-watermark" aria-hidden="true">CJP</div>

        <div className="mob-nav-inner">
          {/* Issue tag */}
          <div className="mob-nav-eyebrow">
            <span className="live-dot"></span>
            MIRZAPUR DISTRICT WING
          </div>

          {/* Nav links */}
          <nav className="mob-nav-links" aria-label="Mobile Primary">
            <ul>
              {[
                { href: "/vision", label: "Vision", num: "01" },
                { href: "/manifesto", label: "Manifesto", num: "02" },
                { href: "/eligibility", label: "Eligibility", num: "03" },
                { href: "/complaints", label: "Complaints", num: "04" },
                { href: "/contact", label: "Contact", num: "05" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="mob-nav-link"
                  >
                    <span className="mob-nav-num">{item.num}</span>
                    <span className="mob-nav-label">{item.label}</span>
                    <span className="mob-nav-arrow">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div className="mob-nav-footer">
            <Link
              href="/join"
              className="mob-nav-cta"
              onClick={closeMenu}
            >
              Join the Party
              <span>→</span>
            </Link>
            <p className="mob-nav-fine">Free · Lifelong · No fees. No selfies.</p>
          </div>

          {/* Decorative stamp */}
          <div className="mob-nav-stamp" aria-hidden="true">
            <span>CJP</span>
            <span>MIRZAPUR</span>
            <span>EST. 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}
