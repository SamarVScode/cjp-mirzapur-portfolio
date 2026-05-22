"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import { fetchStats } from "@/lib/firebase";

export default function JoinPage() {
  const [stats, setStats] = useState({ memberCount: 0, complaintCount: 0 });

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
            <span className="eyebrow" style={{ color: "var(--green-light)", marginBottom: "8px" }}>Swarm Headquarters</span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              Become a<br />
              Registered <em>Swarmer.</em>
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              Welcome to the official Swarm Swear-In. Register under our standard of chronicle onlineness, lazy labor, and exquisite complaining. Instantly obtain your printable 1:1 member swarm card.
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
                <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "1.5px", color: "rgba(244, 235, 215, 0.5)", fontWeight: "600" }}>SWARM MEMBERS</span>
                <span style={{ fontSize: "28px", fontFamily: "var(--font-condensed)", fontWeight: "bold", color: "var(--paper)", letterSpacing: "1.5px" }}>
                  {stats.memberCount.toLocaleString("en-IN")}
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
                <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "1.5px", color: "rgba(244, 235, 215, 0.5)", fontWeight: "600" }}>COMPLAINTS FILED</span>
                <span style={{ fontSize: "28px", fontFamily: "var(--font-condensed)", fontWeight: "bold", color: "var(--paper)", letterSpacing: "1.5px" }}>
                  {stats.complaintCount.toLocaleString("en-IN")}
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
                <span className="eyebrow" style={{ color: "var(--green)", marginBottom: "12px" }}>Division Clearance</span>
                <h2 className="display" style={{ fontSize: "36px", lineHeight: "1" }}>Request<br />your <em>Swarm ID.</em></h2>
                <p className="lead" style={{ fontSize: "15px", marginTop: "14px", color: "var(--ink-2)" }}>
                  By joining, you officially pledge allegiance to the ideals of general slacking and relentless, high-integrity venting against bad governance. You will receive a unique, high-resolution PNG ID card that you can download, print, or frame.
                </p>

                <ul className="contact-meta" style={{ marginTop: "28px" }}>
                  <li>
                    <span className="cm-label">Clearance Tier</span>
                    <span className="cm-value" style={{ color: "var(--green)" }}>CERTIFIED LAZY SWARMER</span>
                  </li>
                  <li>
                    <span className="cm-label">Fee Breakdown</span>
                    <span className="cm-value">₹0.00 (Lifelong Free Status)</span>
                  </li>
                  <li>
                    <span className="cm-label">Swarm Privileges</span>
                    <span className="cm-value">Access to endless rant rights</span>
                  </li>
                  <li>
                    <span className="cm-label">District Duty</span>
                    <span className="cm-value">
                      Mirzapur SWARM Division
                      <span className="cm-foot">Keep the swarm growing.</span>
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
