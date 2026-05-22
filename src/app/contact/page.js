"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const localDict = {
  en: {
    get_in_touch: "Get in Touch",
    connect_with_us: "Connect with us.",
    connect_desc: "Want to join, volunteer, complain, or send a meme? We read everything. We reply to most things.",
    details: "Details",
    hq_directory: "HQ & Directory",
    email_label: "Email",
    press_label: "Press",
    hq_label: "Headquarters",
    hq_val: "Wherever the wifi works.",
    founder_label: "Founder",
    founder_name: "Abhijeet Dipke",
    founder_title: "Founder & Convenor",
    action_01: "Action / 01",
    register_member: "Register as a Member",
    member_desc: "Become a certified chronically online, lazy swarmer and generate a custom 1:1 printable member card.",
    join_swarm: "Join the Swarm",
    action_02: "Action / 02",
    vent_frustrations: "Vent Frustrations",
    vent_desc: "Submit grievances against administrative lethargy. Watch your complaint join the official Swarm Wall.",
    file_complaint: "File a Complaint"
  },
  hi: {
    get_in_touch: "संपर्क करें",
    connect_with_us: "हमसे संपर्क करें।",
    connect_desc: "शामिल होना चाहते हैं, स्वयंसेवा करना चाहते हैं, शिकायत करना चाहते हैं या मीम भेजना चाहते हैं? हम सब कुछ पढ़ते हैं। हम अधिकांश चीज़ों का उत्तर देते हैं।",
    details: "विवरण",
    hq_directory: "मुख्यालय और निर्देशिका",
    email_label: "ईमेल",
    press_label: "प्रेस",
    hq_label: "मुख्यालय",
    hq_val: "जहाँ भी वाई-फाई काम करे।",
    founder_label: "संस्थापक",
    founder_name: "अभिजीत दिपके",
    founder_title: "संस्थापक और संयोजक",
    action_01: "कार्रवाई / ०१",
    register_member: "सदस्य के रूप में पंजीकरण करें",
    member_desc: "एक प्रमाणित क्रॉनिकली ऑनलाइन, आलसी स्वार्मर बनें और कस्टमाइज्ड १:१ प्रिंट करने योग्य सदस्य कार्ड बनाएं।",
    join_swarm: "झुंड में शामिल हों",
    action_02: "कार्रवाई / ०२",
    vent_frustrations: "अपनी भड़ास निकालें",
    vent_desc: "प्रशासनिक सुस्ती के खिलाफ शिकायतें दर्ज करें। अपनी शिकायत को आधिकारिक शिकायत दीवार पर जुड़ते हुए देखें।",
    file_complaint: "शिकायत दर्ज करें"
  }
};

export default function ContactPage() {
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
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(var(--saffron) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.15,
            pointerEvents: "none"
          }}></div>
          <div className="container">
            <span className="eyebrow" style={{ color: "var(--saffron-2)", marginBottom: "8px" }}>
              {text.get_in_touch}
            </span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              {language === "en" ? (
                <>Connect with <em>us.</em></>
              ) : (
                <>हमसे संपर्क <em>करें।</em></>
              )}
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              {text.connect_desc}
            </p>
          </div>
        </section>

        <section className="contact" style={{ padding: "72px 0 64px" }}>
          <div className="container">
            <div className="contact-grid">
              <div className="contact-text">
                <span className="eyebrow">{text.details}</span>
                <h2 className="display" style={{ fontSize: "32px" }}>{text.hq_directory}</h2>
                <ul className="contact-meta" style={{ marginTop: "24px" }}>
                  <li>
                    <span className="cm-label">{text.email_label}</span>
                    <span className="cm-value">contact@cockroachjantaparty.org</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.press_label}</span>
                    <span className="cm-value">contact@cockroachjantaparty.org</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.hq_label}</span>
                    <span className="cm-value">{text.hq_val}</span>
                  </li>
                  <li>
                    <span className="cm-label">{text.founder_label}</span>
                    <span className="cm-value">
                      {text.founder_name}
                      <span className="cm-foot">{text.founder_title}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* CTA Card 1 */}
                <div style={{
                  background: "var(--paper-2)",
                  border: "3px solid var(--ink)",
                  padding: "28px",
                  boxShadow: "6px 6px 0px var(--ink)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                }}>
                  <span className="eyebrow" style={{ color: "var(--green)" }}>{text.action_01}</span>
                  <h3 className="display" style={{ fontSize: "24px", margin: 0 }}>{text.register_member}</h3>
                  <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.4" }}>
                    {text.member_desc}
                  </p>
                  <Link href="/join" className="btn-primary" style={{ width: "fit-content", alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                    {text.join_swarm}
                    <span className="arr">→</span>
                  </Link>
                </div>

                {/* CTA Card 2 */}
                <div style={{
                  background: "var(--paper-2)",
                  border: "3px solid var(--ink)",
                  padding: "28px",
                  boxShadow: "6px 6px 0px var(--ink)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                }}>
                  <span className="eyebrow" style={{ color: "var(--blood)" }}>{text.action_02}</span>
                  <h3 className="display" style={{ fontSize: "24px", margin: 0 }}>{text.vent_frustrations}</h3>
                  <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.4" }}>
                    {text.vent_desc}
                  </p>
                  <Link href="/complaints" className="btn-primary" style={{ width: "fit-content", alignSelf: "flex-start", marginTop: "8px", background: "var(--blood)", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                    {text.file_complaint}
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
