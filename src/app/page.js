"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ComplaintsWall from "@/components/ComplaintsWall";
import SwarmStatsDashboard from "@/components/SwarmStatsDashboard";
import ChronicQueriesFAQ from "@/components/ChronicQueriesFAQ";
import { joinBannerImage } from "@/lib/assets";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <>
      <Header />
      
      <main>
        <Hero />

        {/* ============ SWARM STATS DASHBOARD ============ */}
        <SwarmStatsDashboard />
        
        {/* ============ COMPLAINTS WALL SECTION ============ */}
        <section style={{ 
          background: "var(--paper)", 
          padding: "72px 0 64px", 
          borderBottom: "3px solid var(--ink)"
        }}>
          <div className="container">
            <ComplaintsWall limit={6} />
            
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/complaints" className="btn-primary btn-primary-lg" style={{ background: "var(--blood)", display: "inline-flex", gap: "10px", alignItems: "center" }}>
                {t("btn_vent_here")}
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ PROPAGANDA GALLERY SECTION ============ */}
        <section style={{
          background: "var(--paper-2)",
          padding: "80px 0 72px",
          borderBottom: "3px solid var(--ink)"
        }}>
          <div className="container">
            {/* Gallery notice slip header */}
            <div style={{
              background: "var(--paper)",
              border: "3px solid var(--ink)",
              boxShadow: "6px 6px 0 var(--ink)",
              padding: "36px 24px",
              textAlign: "center",
              marginBottom: "48px",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              <span className="eyebrow" style={{ color: "var(--green)", marginBottom: "4px" }}>{t("gallery_eyebrow")}</span>
              <h2 className="display" style={{ fontSize: "clamp(28px, 6vw, 38px)", margin: "6px 0 12px", textTransform: "uppercase" }}>
                {language === "en" ? (
                  <>Swarm <em>Action</em> Posters</>
                ) : (
                  t("gallery_title")
                )}
              </h2>
              <p className="lead" style={{ fontSize: "14.5px", maxWidth: "600px", margin: "0 auto", color: "var(--ink-2)" }}>
                {t("gallery_desc")}
              </p>
            </div>

            {/* Poster Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "stretch"
            }}>
              {/* Poster 1 */}
              <div className="poster-frame" style={{ 
                background: "var(--paper)", 
                border: "3px solid var(--ink)", 
                boxShadow: "6px 6px 0 var(--ink)",
                display: "flex", 
                flexDirection: "column",
                transition: "all 0.2s ease-out"
              }}>
                <div style={{
                  background: "var(--ink)",
                  color: "var(--paper)",
                  padding: "10px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  textTransform: "uppercase"
                }}>
                  <span>{language === "en" ? "Campaign Poster · No. 002" : "अभियान पोस्टर · सं. ००२"}</span>
                  <span>★ ★ ★</span>
                </div>
                <div style={{ padding: "16px", borderBottom: "3px solid var(--ink)", background: "var(--paper-2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img
                    loading="lazy"
                    src="/images/swarm_action_poster.png"
                    alt="CJP Campaign Poster No. 002 — You Cannot Step On A Swarm"
                    style={{ width: "100%", height: "auto", border: "2px solid var(--ink)" }}
                  />
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px", flexGrow: "1" }}>
                  <span className="eyebrow" style={{ color: "var(--saffron-deep)", marginBottom: 0, fontSize: "10px" }}>{t("poster_002_kicker")}</span>
                  <h4 style={{ fontFamily: "var(--condensed)", fontSize: "20px", margin: 0, textTransform: "uppercase" }}>{t("poster_002_title")}</h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.45" }}>
                    {t("poster_002_desc")}
                  </p>
                </div>
              </div>

              {/* Poster 2 */}
              <div className="poster-frame" style={{ 
                background: "var(--paper)", 
                border: "3px solid var(--ink)", 
                boxShadow: "6px 6px 0 var(--ink)",
                display: "flex", 
                flexDirection: "column",
                transition: "all 0.2s ease-out"
              }}>
                <div style={{
                  background: "var(--ink)",
                  color: "var(--paper)",
                  padding: "10px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  textTransform: "uppercase"
                }}>
                  <span>{language === "en" ? "Chai stall banner · No. 003" : "चाय की टपरी बैनर · सं. ००३"}</span>
                  <span>★ ★ ★</span>
                </div>
                <div style={{ padding: "16px", borderBottom: "3px solid var(--ink)", background: "var(--paper-2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img
                    loading="lazy"
                    src="/images/chai_stall_banner.png"
                    alt="CJP Tea Stall panoramic banner No. 003 — Local Grievance Summit"
                    style={{ width: "100%", height: "auto", border: "2px solid var(--ink)" }}
                  />
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px", flexGrow: "1" }}>
                  <span className="eyebrow" style={{ color: "var(--green)", marginBottom: 0, fontSize: "10px" }}>{t("poster_003_kicker")}</span>
                  <h4 style={{ fontFamily: "var(--condensed)", fontSize: "20px", margin: 0, textTransform: "uppercase" }}>{t("poster_003_title")}</h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.45" }}>
                    {t("poster_003_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <style jsx>{`
            .poster-frame:hover {
              transform: translateY(-4px);
              box-shadow: 9px 9px 0 var(--ink) !important;
            }
          `}</style>
        </section>

        {/* ============ JOIN BANNER ============ */}
        <section className="join-banner">
          <img
            loading="lazy"
            decoding="async"
            src={joinBannerImage}
            alt="Stronger Together — Become a Member of the Cockroach Janta Party"
          />
        </section>

        {/* ============ CHRONIC QUERIES FAQ ============ */}
        <ChronicQueriesFAQ />

        {/* ============ CONTACT ============ */}
        <section className="contact" id="contact" data-screen-label="06 Contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-text">
                <span className="eyebrow">{t("contact_eyebrow")}</span>
                <h2 className="display" style={{ fontSize: "clamp(28px, 6vw, 44px)" }}>
                  {language === "en" ? (
                    <>Connect<br />with us.</>
                  ) : (
                    t("contact_title")
                  )}
                </h2>
                <p className="lead">
                  {t("contact_desc")}
                </p>

                <ul className="contact-meta">
                  <li>
                    <span className="cm-label">{t("contact_email")}</span>
                    <span className="cm-value">contact@cockroachjantaparty.org</span>
                  </li>
                  <li>
                    <span className="cm-label">{t("contact_press")}</span>
                    <span className="cm-value">contact@cockroachjantaparty.org</span>
                  </li>
                  <li>
                    <span className="cm-label">{t("contact_hq")}</span>
                    <span className="cm-value">{t("contact_hq_val")}</span>
                  </li>
                  <li>
                    <span className="cm-label">{t("contact_founder_title")}</span>
                    <span className="cm-value">
                      Abhijeet Dipke
                      <span className="cm-foot">{t("contact_founder")}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* CTA Card 1: Join the Swarm */}
                <div style={{
                  background: "var(--paper-2)",
                  border: "3px solid var(--ink)",
                  padding: "28px",
                  boxShadow: "6px 6px 0px var(--ink)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                }}>
                  <span className="eyebrow" style={{ color: "var(--green)" }}>{language === "en" ? "Action / 01" : "कार्रवाई / ०१"}</span>
                  <h3 className="display" style={{ fontSize: "24px", margin: 0 }}>
                    {language === "en" ? "Register as a Member" : "सदस्य के रूप में पंजीकरण करें"}
                  </h3>
                  <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.4" }}>
                    {language === "en" ? (
                      "Become a certified chronically online, lazy swarmer and generate a custom 1:1 printable member card."
                    ) : (
                      "एक प्रमाणित क्रॉनिकली ऑनलाइन, आलसी स्वार्मर बनें और कस्टमाइज्ड १:१ प्रिंट करने योग्य सदस्य कार्ड बनाएं।"
                    )}
                  </p>
                  <Link href="/join" className="btn-primary" style={{ width: "fit-content", alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                    {t("btn_join_swarm")}
                    <span className="arr">→</span>
                  </Link>
                </div>

                {/* CTA Card 2: File a Complaint */}
                <div style={{
                  background: "var(--paper-2)",
                  border: "3px solid var(--ink)",
                  padding: "28px",
                  boxShadow: "6px 6px 0px var(--ink)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                }}>
                  <span className="eyebrow" style={{ color: "var(--blood)" }}>{language === "en" ? "Action / 02" : "कार्रवाई / ०२"}</span>
                  <h3 className="display" style={{ fontSize: "24px", margin: 0 }}>
                    {language === "en" ? "Vent Frustrations" : "अपनी भड़ास निकालें"}
                  </h3>
                  <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.4" }}>
                    {language === "en" ? (
                      "Submit grievances against administrative lethargy. Watch your complaint join the official Swarm Wall."
                    ) : (
                      "प्रशासनिक सुस्ती के खिलाफ शिकायतें दर्ज करें। अपनी शिकायत को आधिकारिक शिकायत दीवार पर जुड़ते हुए देखें।"
                    )}
                  </p>
                  <Link href="/complaints" className="btn-primary" style={{ width: "fit-content", alignSelf: "flex-start", marginTop: "8px", background: "var(--blood)", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                    {t("btn_file_complaint")}
                    <span className="arr">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
