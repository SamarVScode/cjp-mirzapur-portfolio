"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function EligibilityPage() {
  const { t, language } = useLanguage();

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
            <span className="eyebrow" style={{ color: "var(--green-light)", marginBottom: "8px" }}>{t("elig_eyebrow")}</span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(28px, 6vw, 68px)", lineHeight: "0.95" }}>
              {language === "en" ? (
                <>Are you <em>Eligible?</em></>
              ) : (
                t("elig_title")
              )}
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              {t("elig_desc")}
            </p>
          </div>
        </section>

        {/* Eligibility checklist block */}
        <section className="eligibility" style={{ padding: "72px 0 64px" }}>
          <div className="container">
            <ul className="checklist">
              <li>
                <span className="ck-num">{t("elig_req_01_num")}</span>
                <span className="ck-title">{t("elig_req_01_title")}</span>
                <span className="ck-sub">{t("elig_req_01_desc")}</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">{t("elig_req_02_num")}</span>
                <span className="ck-title">{t("elig_req_02_title")}</span>
                <span className="ck-sub">{t("elig_req_02_desc")}</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">{t("elig_req_03_num")}</span>
                <span className="ck-title">{t("elig_req_03_title")}</span>
                <span className="ck-sub">{t("elig_req_03_desc")}</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">{t("elig_req_04_num")}</span>
                <span className="ck-title">{t("elig_req_04_title")}</span>
                <span className="ck-sub">{t("elig_req_04_desc")}</span>
                <span className="ck-tick">✓</span>
              </li>
            </ul>

            <div className="elig-cta" style={{ marginTop: "48px", textAlign: "center" }}>
              <Link href="/join" className="btn-primary btn-primary-lg">
                {t("btn_join_swarm")}
                <span className="arr">→</span>
              </Link>
              <p className="elig-fine" style={{ marginTop: "12px" }}>
                {t("elig_cta_fine")}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
