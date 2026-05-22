"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";
import { useLanguage } from "@/context/LanguageContext";

const localDict = {
  en: {
    ideology: "The Swarm Ideology",
    vision: "Our Vision.",
    vision_desc: "The CJP isn't here to win power to enrich ourselves. We are here to give voice to the disgruntled, lazy, and chronically online youth."
  },
  hi: {
    ideology: "झुंड की विचारधारा",
    vision: "हमारा विज़न।",
    vision_desc: "सीजेपी यहाँ खुद को समृद्ध करने के लिए सत्ता जीतने नहीं आई है। हम यहाँ हताश, आलसी और क्रॉनिकली ऑनलाइन युवाओं को आवाज़ देने के लिए हैं।"
  }
};

export default function VisionPage() {
  const { language } = useLanguage();
  const text = localDict[language] || localDict.en;

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
            <span className="eyebrow" style={{ color: "var(--saffron-2)", marginBottom: "8px" }}>
              {text.ideology}
            </span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              {language === "en" ? (
                <>Our <em>Vision.</em></>
              ) : (
                <>हमारा <em>विज़न।</em></>
              )}
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              {text.vision_desc}
            </p>
          </div>
        </section>
        
        <Vision />
      </main>
      <Footer />
    </>
  );
}
