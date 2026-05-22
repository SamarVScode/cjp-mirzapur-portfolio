"use client";

import React, { useState, useEffect } from "react";
import { fetchStats } from "@/lib/firebase";
import { useLanguage } from "@/context/LanguageContext";

export default function SwarmStatsDashboard() {
  const { t, language } = useLanguage();
  const [stats, setStats] = useState({ memberCount: 0, complaintCount: 0 });

  useEffect(() => {
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
    loadStats();
  }, []);

  const statCards = [
    {
      kicker: language === "en" ? "Coefficient / 01" : "गुणांक / ०१",
      value: t("stat_laziness_val"),
      label: t("stat_laziness_title"),
      desc: t("stat_laziness_desc"),
      color: "var(--saffron)"
    },
    {
      kicker: language === "en" ? "Fuel / 02" : "ईंधन / ०२",
      value: t("stat_chai_val"),
      label: t("stat_chai_title"),
      desc: t("stat_chai_desc"),
      color: "var(--green)"
    },
    {
      kicker: language === "en" ? "Finance / 03" : "वित्त / ०३",
      value: t("stat_funds_val"),
      label: t("stat_funds_title"),
      desc: t("stat_funds_desc"),
      color: "var(--blood)"
    },
    {
      kicker: language === "en" ? "Activity / 04" : "गतिविधि / ०४",
      value: t("stat_rants_val"),
      label: t("stat_rants_title"),
      desc: t("stat_rants_desc"),
      color: "var(--gold)"
    }
  ];

  return (
    <section style={{
      background: "var(--paper-2)",
      padding: "80px 0 72px",
      borderBottom: "3px solid var(--ink)"
    }}>
      <div className="container">
        {/* Header Slip Section */}
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
          <span className="eyebrow" style={{ color: "var(--saffron-deep)", marginBottom: "4px" }}>{t("stats_eyebrow")}</span>
          <h2 className="display" style={{ fontSize: "38px", margin: "6px 0 12px", textTransform: "uppercase" }}>
            {language === "en" ? (
              <>Swarm Dashboard of <em>Lethargy</em></>
            ) : (
              t("stats_title")
            )}
          </h2>
          <p className="lead" style={{ fontSize: "15px", maxWidth: "680px", margin: "0 auto", color: "var(--ink-2)" }}>
            {t("stats_desc")}
          </p>
        </div>

        {/* Dynamic Firebase Counters Banner */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "36px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          <div style={{
            background: "var(--paper)",
            border: "3px solid var(--ink)",
            boxShadow: "4px 4px 0 var(--ink)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px"
          }}>
            <span className="eyebrow" style={{ color: "var(--green)", marginBottom: 0, fontSize: "10px" }}>{t("stat_members_val")}</span>
            <span style={{ fontFamily: "var(--display)", fontSize: "28px" }}>
              {stats.memberCount ? stats.memberCount.toLocaleString(language === "en" ? "en-IN" : "hi-IN") : "4,289+"}
            </span>
          </div>
          <div style={{
            background: "var(--paper)",
            border: "3px solid var(--ink)",
            boxShadow: "4px 4px 0 var(--ink)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px"
          }}>
            <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: 0, fontSize: "10px" }}>{t("stat_complaints_val")}</span>
            <span style={{ fontFamily: "var(--display)", fontSize: "28px" }}>
              {stats.complaintCount ? stats.complaintCount.toLocaleString(language === "en" ? "en-IN" : "hi-IN") : "891+"}
            </span>
          </div>
        </div>

        {/* Dashboard Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "28px"
        }}>
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="stat-card"
              style={{
                background: "var(--paper)",
                border: "3px solid var(--ink)",
                boxShadow: "5px 5px 0 var(--ink)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "all 0.2s ease-out"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="eyebrow" style={{ color: card.color, marginBottom: 0, fontSize: "10px" }}>
                  {card.kicker}
                </span>
                <span style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: card.color,
                  border: "1px solid var(--ink)"
                }}></span>
              </div>
              
              <h3 style={{
                fontFamily: "var(--display)",
                fontSize: "42px",
                margin: 0,
                color: "var(--ink)",
                lineHeight: "1"
              }}>
                {card.value}
              </h3>
              
              <h4 style={{
                fontFamily: "var(--condensed)",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--ink)",
                margin: 0
              }}>
                {card.label}
              </h4>
              
              <p style={{
                fontSize: "13.5px",
                lineHeight: "1.45",
                color: "var(--ink-2)",
                margin: 0
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 8px 8px 0 var(--ink) !important;
        }
      `}</style>
    </section>
  );
}
