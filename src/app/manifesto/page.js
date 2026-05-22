"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Manifesto from "@/components/Manifesto";

export default function ManifestoPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", background: "var(--ink)" }}>
        {/* ============ BREADCRUMB / HERO ============ */}
        <section style={{ 
          background: "var(--paper)", 
          color: "var(--ink)", 
          padding: "64px 0 48px", 
          borderBottom: "4px solid var(--blood)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Brutalist dotted backdrop grid */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(var(--blood) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.1,
            pointerEvents: "none"
          }}></div>
          <div className="container">
            <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "8px" }}>The Five Demands</span>
            <h1 className="display" style={{ color: "var(--ink)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              The <em>Manifesto.</em>
            </h1>
            <p className="lead" style={{ color: "var(--ink-2)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              Our concrete, non-negotiable policy requests to end political defection, corporate media monopolies, and post-retirement rewards.
            </p>
          </div>
        </section>

        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
