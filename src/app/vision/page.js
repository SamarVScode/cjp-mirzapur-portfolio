"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";

export default function VisionPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", background: "var(--paper)" }}>
        {/* ============ BREADCRUMB / HERO ============ */}
        <section style={{ 
          background: "var(--ink)", 
          color: "var(--paper)", 
          padding: "64px 0 48px", 
          borderBottom: "4px solid var(--saffron)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Brutalist dotted backdrop grid */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(var(--saffron-deep) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.15,
            pointerEvents: "none"
          }}></div>
          <div className="container">
            <span className="eyebrow" style={{ color: "var(--saffron-2)", marginBottom: "8px" }}>The Swarm Ideology</span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              Our <em>Vision.</em>
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              The CJP isn't here to win power to enrich ourselves. We are here to give voice to the disgruntled, lazy, and chronically online youth.
            </p>
          </div>
        </section>
        
        <Vision />
      </main>
      <Footer />
    </>
  );
}
