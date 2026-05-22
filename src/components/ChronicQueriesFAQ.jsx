"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ChronicQueriesFAQ() {
  const { t, language } = useLanguage();
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: t("faq_q1"),
      a: t("faq_a1")
    },
    {
      q: t("faq_q2"),
      a: t("faq_a2")
    },
    {
      q: t("faq_q3"),
      a: t("faq_a3")
    },
    {
      q: t("faq_q4"),
      a: t("faq_a4")
    },
    {
      q: t("faq_q5"),
      a: t("faq_a5")
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{
      background: "var(--paper)",
      padding: "80px 0 76px",
      borderBottom: "3px solid var(--ink)"
    }} id="faq" data-screen-label="05 FAQ">
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Notice Slip Header */}
        <div style={{
          background: "var(--paper-2)",
          border: "3px solid var(--ink)",
          boxShadow: "6px 6px 0 var(--ink)",
          padding: "32px 24px",
          textAlign: "center",
          marginBottom: "44px"
        }}>
          <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "4px" }}>{t("faq_eyebrow")}</span>
          <h2 className="display" style={{ fontSize: "38px", margin: "6px 0 12px", textTransform: "uppercase" }}>
            {language === "en" ? (
              <>Chronic <em>Queries</em></>
            ) : (
              t("faq_title")
            )}
          </h2>
          <p className="lead" style={{ fontSize: "14.5px", maxWidth: "600px", margin: "0 auto", color: "var(--ink-2)" }}>
            {t("faq_desc")}
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "var(--paper-2)",
                  border: "3px solid var(--ink)",
                  boxShadow: "4px 4px 0 var(--ink)",
                  transition: "transform 0.2s"
                }}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    background: isOpen ? "var(--paper-3)" : "transparent",
                    transition: "background 0.2s"
                  }}
                >
                  <span style={{
                    fontFamily: "var(--condensed)",
                    fontSize: "17px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "var(--ink)",
                    paddingRight: "16px"
                  }}>
                    {idx + 1}. {faq.q}
                  </span>
                  
                  <span style={{
                    fontFamily: "var(--mono)",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: isOpen ? "var(--blood)" : "var(--ink)"
                  }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div style={{
                    padding: "20px 24px",
                    borderTop: "3px solid var(--ink)",
                    background: "var(--paper)",
                    fontSize: "14.5px",
                    lineHeight: "1.6",
                    color: "var(--ink-2)",
                    animation: "slideDown 0.2s ease-out"
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
