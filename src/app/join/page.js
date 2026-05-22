"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import { fetchStats } from "@/lib/firebase";
import { useLanguage } from "@/context/LanguageContext";

const localDict = {
  en: {
    headquarters: "Swarm Headquarters",
    become_a: "Become a",
    registered_swarmer: "Registered Swarmer.",
    welcome_desc: "Welcome to the official Swarm Swear-In. Register under our standard of chronicle onlineness, lazy labor, and exquisite complaining. Instantly obtain your printable 1:1 member swarm card.",
    swarm_members: "SWARM MEMBERS",
    complaints_filed: "COMPLAINTS FILED",
    division_clearance: "Division Clearance",
    request_swarm_id: "Request your Swarm ID.",
    pledge_desc: "By joining, you officially pledge allegiance to the ideals of general slacking and relentless, high-integrity venting against bad governance. You will receive a unique, high-resolution PNG ID card that you can download, print, or frame.",
    clearance_tier: "Clearance Tier",
    certified_swarmer: "CERTIFIED LAZY SWARMER",
    fee_breakdown: "Fee Breakdown",
    free_status: "₹0.00 (Lifelong Free Status)",
    swarm_privileges: "Swarm Privileges",
    rant_rights: "Access to endless rant rights",
    district_duty: "District Duty",
    division_name: "Mirzapur SWARM Division",
    keep_growing: "Keep the swarm growing."
  },
  hi: {
    headquarters: "झुंड मुख्यालय",
    become_a: "बनें एक",
    registered_swarmer: "पंजीकृत स्वार्मर।",
    welcome_desc: "आधिकारिक झुंड शपथ ग्रहण में आपका स्वागत है। हमारे क्रॉनिक ऑनलाइन होने, आलसी श्रम और अति-उत्कृष्ट शिकायत करने के मानकों के तहत पंजीकरण करें। तुरंत अपना १:१ प्रिंट करने योग्य झुंड सदस्य कार्ड प्राप्त करें।",
    swarm_members: "पंजीकृत सदस्य",
    complaints_filed: "दर्ज शिकायतें",
    division_clearance: "डिवीजन क्लीयरेंस",
    request_swarm_id: "अपनी झुंड आईडी का अनुरोध करें।",
    pledge_desc: "शामिल होकर, आप आधिकारिक तौर पर सामान्य सुस्ती और खराब शासन के खिलाफ निरंतर, उच्च-ईमानदारी से भड़ास निकालने के आदर्शों के प्रति वफादारी की शपथ लेते हैं। आपको एक अद्वितीय, उच्च-रिज़ॉल्यूशन पीएनजी आईडी कार्ड प्राप्त होगा जिसे आप डाउनलोड, प्रिंट या फ्रेम कर सकते हैं।",
    clearance_tier: "क्लीयरेंस स्तर",
    certified_swarmer: "प्रमाणित आलसी स्वार्मर",
    fee_breakdown: "शुल्क विवरण",
    free_status: "₹०.०० (आजीवन मुफ्त)",
    swarm_privileges: "झुंड के विशेषाधिकार",
    rant_rights: "अनंत भड़ास अधिकारों तक पहुंच",
    district_duty: "जिला कर्तव्य",
    division_name: "मिर्ज़ापुर झुंड डिवीजन",
    keep_growing: "झुंड को आगे बढ़ाते रहें।"
  }
};

export default function JoinPage() {
  const { language } = useLanguage();
  const [stats, setStats] = useState({ memberCount: 0, complaintCount: 0 });

  const text = localDict[language] || localDict.en;

  const loadStats = async () => {
    try {
      const data = await fetchStats();
      if (data) {
        setStats(data);
      }
    } catch (err) {
      console.error("Error loading stats:", err);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const handleMemberAdded = () => {
    loadStats();
  };

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
          {/* Faint watermark grid in brutalist background */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(var(--saffron) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.15,
            pointerEvents: "none"
          }}></div>

          <div className="container">
            <span className="eyebrow" style={{ color: "var(--green-light)", marginBottom: "8px" }}>
              {text.headquarters}
            </span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              {text.become_a}<br />
              {language === "en" ? (
                <>Registered <em>Swarmer.</em></>
              ) : (
                <>पंजीकृत <em>स्वार्मर।</em></>
              )}
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              {text.welcome_desc}
            </p>

            {/* Real-time Stats Grid */}
            <div style={{ 
              display: "flex", 
              gap: "16px", 
              marginTop: "28px", 
              flexWrap: "wrap" 
            }}>
              <div style={{
                background: "rgba(244, 235, 215, 0.08)",
                border: "2px solid rgba(244, 235, 215, 0.2)",
                padding: "12px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "2px"
              }}>
                <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "1.5px", color: "rgba(244, 235, 215, 0.5)", fontWeight: "600" }}>
                  {text.swarm_members}
                </span>
                <span style={{ fontSize: "28px", fontFamily: "var(--font-condensed)", fontWeight: "bold", color: "var(--paper)", letterSpacing: "1.5px" }}>
                  {stats.memberCount.toLocaleString(language === "en" ? "en-IN" : "hi-IN")}
                </span>
              </div>
              <div style={{
                background: "rgba(244, 235, 215, 0.08)",
                border: "2px solid rgba(244, 235, 215, 0.2)",
                padding: "12px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "2px"
              }}>
                <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "1.5px", color: "rgba(244, 235, 215, 0.5)", fontWeight: "600" }}>
                  {text.complaints_filed}
                </span>
                <span style={{ fontSize: "28px", fontFamily: "var(--font-condensed)", fontWeight: "bold", color: "var(--paper)", letterSpacing: "1.5px" }}>
                  {stats.complaintCount.toLocaleString(language === "en" ? "en-IN" : "hi-IN")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FORM SECTION ============ */}
        <section className="contact" id="join-section" style={{ background: "var(--paper-2)", padding: "72px 0 64px", borderBottom: "3px solid var(--ink)" }}>
          <div className="container">
            <div className="contact-grid">
              {/* Left Column: Satirical Info */}
              <div className="contact-text">
                <span className="eyebrow" style={{ color: "var(--green)", marginBottom: "12px" }}>
                  {text.division_clearance}
                </span>
                <h2 className="display" style={{ fontSize: "36px", lineHeight: "1" }}>
                  {language === "en" ? (
                    <>Request<br />your <em>Swarm ID.</em></>
                  ) : (
                    <>अपनी <em>झुंड आईडी</em><br />का अनुरोध करें।</>
                  )}
                </h2>
                <p className="lead" style={{ fontSize: "15px", marginTop: "14px", color: "var(--ink-2)" }}>
                  {text.pledge_desc}
                </p>

                <ul className="contact-meta" style={{ marginTop: "28px" }}>
                  <li>
                    <span className="cm-label">{text.clearance_tier}</span>
                    <span className="cm-value" style={{ color: "var(--green)" }}>{text.certified_swarmer}</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.fee_breakdown}</span>
                    <span className="cm-value">{text.free_status}</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.swarm_privileges}</span>
                    <span className="cm-value">{text.rant_rights}</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.district_duty}</span>
                    <span className="cm-value">
                      {text.division_name}
                      <span className="cm-foot">{text.keep_growing}</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Join registration form */}
              <JoinForm onMemberAdded={handleMemberAdded} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
