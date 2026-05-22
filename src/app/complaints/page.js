"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComplaintForm from "@/components/ComplaintForm";
import ComplaintsWall from "@/components/ComplaintsWall";
import { fetchStats } from "@/lib/firebase";
import { useLanguage } from "@/context/LanguageContext";

const localDict = {
  en: {
    bureau: "Bureau of Frustrations",
    speak_truth: "Speak Truth",
    to_laziness: "to Laziness.",
    bureau_desc: "Welcome to the official Mirzapur District Grievance Center. Our administrative capacity is mathematically capped at zero percent response rate, but your complaints keep the swarm alive!",
    swarm_members: "SWARM MEMBERS",
    complaints_filed: "COMPLAINTS FILED",
    division_status: "Division Status",
    vent_frustration: "Vent your frustration.",
    frustration_desc: "Is the electricity gone again? Educational system crumbled? Inflation through the roof? Write it down. We promise to read it, print it, and file it in our Action Chamber. Venting keeps the spirit alive.",
    bureau_status_label: "Bureau Status",
    bureau_status_val: "OVERLOADED WITH RANTS",
    cjp_action_label: "CJP Action",
    cjp_action_val: "Every complaint is mathematically cataloged.",
    govt_ignoring_label: "Govt Ignoring",
    govt_ignoring_val: "100% Guaranteed",
    swarm_duty_label: "Swarm Duty",
    speak_truth_val: "Speak Truth to Laziness",
    keep_friction: "Keep the friction going."
  },
  hi: {
    bureau: "हताशा ब्यूरो",
    speak_truth: "सच्चाई कहें",
    to_laziness: "सुस्ती के सामने।",
    bureau_desc: "आधिकारिक मिर्ज़ापुर जिला शिकायत केंद्र में आपका स्वागत है। हमारी प्रशासनिक क्षमता गणितीय रूप से शून्य प्रतिशत प्रतिक्रिया दर पर सीमित है, लेकिन आपकी शिकायतें झुंड को जीवित रखती हैं!",
    swarm_members: "पंजीकृत सदस्य",
    complaints_filed: "दर्ज शिकायतें",
    division_status: "डिवीजन की स्थिति",
    vent_frustration: "अपनी भड़ास निकालें।",
    frustration_desc: "क्या बिजली फिर चली गई? शिक्षा व्यवस्था चरमरा गई? महंगाई आसमान छू रही है? इसे लिख लें। हम इसे पढ़ने, इसे प्रिंट करने और हमारे एक्शन चैंबर में दर्ज करने का वादा करते हैं। भड़ास निकालने से हौसला बना रहता है।",
    bureau_status_label: "ब्यूरो की स्थिति",
    bureau_status_val: "रेंट्स से ओवरलोडेड",
    cjp_action_label: "सीजेपी कार्रवाई",
    cjp_action_val: "हर शिकायत गणितीय रूप से सूचीबद्ध है।",
    govt_ignoring_label: "सरकार का नजरअंदाज करना",
    govt_ignoring_val: "१००% निश्चित",
    swarm_duty_label: "झुंड का कर्तव्य",
    speak_truth_val: "सुस्ती के सामने सच बोलना",
    keep_friction: "घर्षण जारी रखें।"
  }
};

export default function ComplaintsPage() {
  const { language } = useLanguage();
  const [refetchTrigger, setRefetchTrigger] = useState(0);
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

  const handleComplaintAdded = () => {
    setRefetchTrigger((prev) => prev + 1);
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
          borderBottom: "4px solid var(--blood)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Faint watermark grid in brutalist background */}
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
              {text.bureau}
            </span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              {text.speak_truth}<br />
              {language === "en" ? (
                <>to <em>Laziness.</em></>
              ) : (
                <>सुस्ती के <em>सामने।</em></>
              )}
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              {text.bureau_desc}
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
        <section className="contact" id="complaints" style={{ background: "var(--paper-2)", padding: "72px 0 64px", borderBottom: "3px solid var(--ink)" }}>
          <div className="container">
            <div className="contact-grid">
              {/* Left Column: Satirical Info */}
              <div className="contact-text">
                <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "12px" }}>
                  {text.division_status}
                </span>
                <h2 className="display" style={{ fontSize: "36px", lineHeight: "1" }}>
                  {language === "en" ? (
                    <>Vent your<br /><em>frustration.</em></>
                  ) : (
                    <>अपनी भड़ास<br /><em>निकालें।</em></>
                  )}
                </h2>
                <p className="lead" style={{ fontSize: "15px", marginTop: "14px", color: "var(--ink-2)" }}>
                  {text.frustration_desc}
                </p>

                <ul className="contact-meta" style={{ marginTop: "28px" }}>
                  <li>
                    <span className="cm-label">{text.bureau_status_label}</span>
                    <span className="cm-value" style={{ color: "var(--blood)" }}>{text.bureau_status_val}</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.cjp_action_label}</span>
                    <span className="cm-value">{text.cjp_action_val}</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.govt_ignoring_label}</span>
                    <span className="cm-value">{text.govt_ignoring_val}</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.swarm_duty_label}</span>
                    <span className="cm-value">
                      {text.speak_truth_val}
                      <span className="cm-foot">{text.keep_friction}</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Complaint filing form */}
              <ComplaintForm onComplaintAdded={handleComplaintAdded} />
            </div>

            {/* Dynamic Interactive wall at bottom */}
            <ComplaintsWall refetchTrigger={refetchTrigger} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
