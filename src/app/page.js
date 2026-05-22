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

export default function Home() {
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
                Vent Your Frustrations Here
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
              <span className="eyebrow" style={{ color: "var(--green)", marginBottom: "4px" }}>Visual Propaganda</span>
              <h2 className="display" style={{ fontSize: "38px", margin: "6px 0 12px", textTransform: "uppercase" }}>
                Swarm <em>Action</em> Posters
              </h2>
              <p className="lead" style={{ fontSize: "14.5px", maxWidth: "600px", margin: "0 auto", color: "var(--ink-2)" }}>
                Official campaign materials printed at our local underground presses. Download, print, and paste them in your neighborhood to spread the word of the swarm.
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
                  <span>Campaign Poster · No. 002</span>
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
                  <span className="eyebrow" style={{ color: "var(--saffron-deep)", marginBottom: 0, fontSize: "10px" }}>PROTEST / RALLY</span>
                  <h4 style={{ fontFamily: "var(--condensed)", fontSize: "20px", margin: 0, textTransform: "uppercase" }}>"You Cannot Squash A Swarm"</h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.45" }}>
                    Our official Mirzapur wing's launch poster. Features the resilient cockroach standing tall against administrative pressure.
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
                  <span>Chai stall banner · No. 003</span>
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
                  <span className="eyebrow" style={{ color: "var(--green)", marginBottom: 0, fontSize: "10px" }}>DISCUSSION / DEBATE</span>
                  <h4 style={{ fontFamily: "var(--condensed)", fontSize: "20px", margin: 0, textTransform: "uppercase" }}>"Tea Stall Summit"</h4>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-2)", margin: 0, lineHeight: "1.45" }}>
                    Panoramic graphic showcasing CJP members gathering for policy debates and chai across local stalls in the district.
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
                <span className="eyebrow">Get in touch</span>
                <h2 className="display">Connect<br />with us.</h2>
                <p className="lead">
                  Want to join, volunteer, complain, or send a meme? Use the form. We read everything. We reply to most things.
                </p>

                <ul className="contact-meta">
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
