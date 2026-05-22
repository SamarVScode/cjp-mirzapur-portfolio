"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Manifesto from "@/components/Manifesto";
import { useLanguage } from "@/context/LanguageContext";

const localDict = {
  en: {
    demands: "The Five Demands",
    manifesto: "The Manifesto.",
    manifesto_desc: "Our concrete, non-negotiable policy requests to end political defection, corporate media monopolies, and post-retirement rewards."
  },
  hi: {
    demands: "पांच सूत्रीय मांगें",
    manifesto: "घोषणापत्र।",
    manifesto_desc: "राजनीतिक दल-बदल, कॉर्पोरेट मीडिया एकाधिकार और सेवानिवृत्ति के बाद के पुरस्कारों को समाप्त करने के लिए हमारी ठोस, गैर-परक्राम्य नीतिगत मांगें।"
  }
};

export default function ManifestoPage() {
  const { language } = useLanguage();
  const text = localDict[language] || localDict.en;

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
            <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "8px" }}>
              {text.demands}
            </span>
            <h1 className="display" style={{ color: "var(--ink)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              {language === "en" ? (
                <>The <em>Manifesto.</em></>
              ) : (
                <>हमारा <em>घोषणापत्र।</em></>
              )}
            </h1>
            <p className="lead" style={{ color: "var(--ink-2)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              {text.manifesto_desc}
            </p>
          </div>
        </section>

        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
