"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EligibilityPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", background: "var(--paper)" }}>
        {/* ============ BREADCRUMB / HERO ============ */}
        <section style={{ 
          background: "var(--ink)", 
          color: "var(--paper)", 
          padding: "64px 0 48px", 
          borderBottom: "4px solid var(--green)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(var(--green) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.15,
            pointerEvents: "none"
          }}></div>
          <div className="container">
            <span className="eyebrow" style={{ color: "var(--green-light)", marginBottom: "8px" }}>Swarm Quality Standards</span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              Are you <em>Eligible?</em>
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              Before joining the Cockroach Janta Party, please verify that you satisfy our four (4) core criteria.
            </p>
          </div>
        </section>

        {/* Eligibility checklist block */}
        <section className="eligibility" style={{ padding: "72px 0 64px" }}>
          <div className="container">
            <ul className="checklist">
              <li>
                <span className="ck-num">REQ / 01</span>
                <span className="ck-title">Unemployed</span>
                <span className="ck-sub">By force, by choice, or by principle. We don't ask.</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">REQ / 02</span>
                <span className="ck-title">Lazy</span>
                <span className="ck-sub">Physically only. The brain may continue to spiral.</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">REQ / 03</span>
                <span className="ck-title">Chronically online</span>
                <span className="ck-sub">Minimum 11 hours a day, including bathroom breaks.</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">REQ / 04</span>
                <span className="ck-title">Can rant professionally</span>
                <span className="ck-sub">As long as the content is sharp, honest, and points at something that actually matters.</span>
                <span className="ck-tick">✓</span>
              </li>
            </ul>

            <div className="elig-cta" style={{ marginTop: "48px", textAlign: "center" }}>
              <Link href="/join" className="btn-primary btn-primary-lg">
                Join the Party
                <span className="arr">→</span>
              </Link>
              <p className="elig-fine" style={{ marginTop: "12px" }}>
                Membership is free, lifelong, and revocable only by you.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
