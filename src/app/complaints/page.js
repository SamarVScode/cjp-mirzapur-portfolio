"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComplaintForm from "@/components/ComplaintForm";
import ComplaintsWall from "@/components/ComplaintsWall";
import { fetchStats } from "@/lib/firebase";

export default function ComplaintsPage() {
  const [refetchTrigger, setRefetchTrigger] = useState(0);
  const [stats, setStats] = useState({ memberCount: 1342, complaintCount: 412 });

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
            <span className="eyebrow" style={{ color: "var(--saffron-2)", marginBottom: "8px" }}>Bureau of Frustrations</span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              Speak Truth<br />to <em>Laziness.</em>
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              Welcome to the official Mirzapur District Grievance Center. Our administrative capacity is mathematically capped at zero percent response rate, but your complaints keep the swarm alive!
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
        <section className="contact" id="complaints" style={{ background: "var(--paper-2)", padding: "72px 0 64px", borderBottom: "3px solid var(--ink)" }}>
          <div className="container">
            <div className="contact-grid">
              {/* Left Column: Satirical Info */}
              <div className="contact-text">
                <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "12px" }}>Division Status</span>
                <h2 className="display" style={{ fontSize: "36px", lineHeight: "1" }}>Vent your<br /><em>frustration.</em></h2>
                <p className="lead" style={{ fontSize: "15px", marginTop: "14px", color: "var(--ink-2)" }}>
                  Is the electricity gone again? Educational system crumbled? Inflation through the roof? Write it down. We promise to read it, print it, and file it in our Action Chamber. Venting keeps the spirit alive.
                </p>

                <ul className="contact-meta" style={{ marginTop: "28px" }}>
                  <li>
                    <span className="cm-label">Bureau Status</span>
                    <span className="cm-value" style={{ color: "var(--blood)" }}>OVERLOADED WITH RANTS</span>
                  </li>
                  <li>
                    <span className="cm-label">CJP Action</span>
                    <span className="cm-value">Every complaint is mathematically cataloged.</span>
                  </li>
                  <li>
                    <span className="cm-label">Govt Ignoring</span>
                    <span className="cm-value">100% Guaranteed</span>
                  </li>
                  <li>
                    <span className="cm-label">Swarm Duty</span>
                    <span className="cm-value">
                      Speak Truth to Laziness
                      <span className="cm-foot">Keep the friction going.</span>
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
