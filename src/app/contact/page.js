"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
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
            <span className="eyebrow" style={{ color: "var(--saffron-2)", marginBottom: "8px" }}>Get in Touch</span>
            <h1 className="display" style={{ color: "var(--paper)", fontSize: "clamp(38px, 6vw, 68px)", lineHeight: "0.95" }}>
              Connect with <em>us.</em>
            </h1>
            <p className="lead" style={{ color: "rgba(244, 235, 215, 0.8)", maxWidth: "600px", marginTop: "16px", fontSize: "16px" }}>
              Want to join, volunteer, complain, or send a meme? We read everything. We reply to most things.
            </p>
          </div>
        </section>

        <section className="contact" style={{ padding: "72px 0 64px" }}>
          <div className="container">
            <div className="contact-grid">
              <div className="contact-text">
                <span className="eyebrow">Details</span>
                <h2 className="display" style={{ fontSize: "32px" }}>HQ &amp; Directory</h2>
                <ul className="contact-meta" style={{ marginTop: "24px" }}>
                  <li>
                    <span className="cm-label">Email</span>
                    <span className="cm-value">contact@cockroachjantaparty.org</span>
                  </li>
                  <li>
                    <span className="cm-label">Press</span>
                    <span className="cm-value">contact@cockroachjantaparty.org</span>
                  </li>
                  <li>
                    <span className="cm-label">Headquarters</span>
                    <span className="cm-value">Wherever the wifi works.</span>
                  </li>
                  <li>
                    <span className="cm-label">Founder</span>
                    <span className="cm-value">
                      Abhijeet Dipke
                      <span className="cm-foot">Founder &amp; Convenor</span>
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
                  <span className="eyebrow" style={{ color: "var(--green)" }}>Action / 01</span>
                  <h3 className="display" style={{ fontSize: "24px", margin: 0 }}>Register as a Member</h3>
                  <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.4" }}>
                    Become a certified chronically online, lazy swarmer and generate a custom 1:1 printable member card.
                  </p>
                  <Link href="/join" className="btn-primary" style={{ width: "fit-content", alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                    Join the Swarm
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
                  <span className="eyebrow" style={{ color: "var(--blood)" }}>Action / 02</span>
                  <h3 className="display" style={{ fontSize: "24px", margin: 0 }}>Vent Frustrations</h3>
                  <p style={{ fontSize: "14.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.4" }}>
                    Submit grievances against administrative lethargy. Watch your complaint join the official Swarm Wall.
                  </p>
                  <Link href="/complaints" className="btn-primary" style={{ width: "fit-content", alignSelf: "flex-start", marginTop: "8px", background: "var(--blood)", display: "inline-flex", gap: "8px", alignItems: "center" }}>
                    File a Complaint
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
