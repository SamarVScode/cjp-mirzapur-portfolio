"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
import ComplaintsWall from "@/components/ComplaintsWall";
import { joinBannerImage } from "@/lib/assets";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        
        {/* ============ SLOGAN MARQUEE ============ */}
        <div className="marquee">
          <div className="marquee-track">
            <span>Together We Survive</span><span className="dot">✦</span>
            <span>Stronger Together</span><span className="dot">✦</span>
            <span>Unity · Resilience · Progress</span><span className="dot">✦</span>
            <span>You Cannot Squash A Movement</span><span className="dot">✦</span>
            <span>Together We Survive</span><span className="dot">✦</span>
            <span>Stronger Together</span><span className="dot">✦</span>
            <span>Unity · Resilience · Progress</span><span className="dot">✦</span>
            <span>You Cannot Squash A Movement</span><span className="dot">✦</span>
          </div>
        </div>

        <Vision />
        
        <Manifesto />

        {/* ============ ELIGIBILITY ============ */}
        <section className="eligibility" id="join" data-screen-label="04 Eligibility">
          <div className="container">
            <div className="elig-head">
              <span className="eyebrow">Membership</span>
              <h2 className="display">Are you eligible<br />to <em>join?</em></h2>
              <p className="lead">
                We do not check religion, caste, or gender. We do, however, have four (4) standards.
              </p>
            </div>

            <ul className="checklist">
              <li>
                <span className="ck-num">REQ / 01</span>
                <span className="ck-title">Unemployed</span>
                <span className="ck-sub">By force, by choice, or by principle. We don't ask.</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">REQ / 02</span>
                <span className="ck-title">Lazy</span>
                <span className="ck-sub">Physically only. The brain may continue to spiral.</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">REQ / 03</span>
                <span className="ck-title">Chronically online</span>
                <span className="ck-sub">Minimum 11 hours a day, including bathroom breaks.</span>
                <span className="ck-tick">✓</span>
              </li>
              <li>
                <span className="ck-num">REQ / 04</span>
                <span className="ck-title">Can rant professionally</span>
                <span className="ck-sub">As long as the content is sharp, honest, and points at something that actually matters.</span>
                <span className="ck-tick">✓</span>
              </li>
            </ul>

            <div className="elig-cta">
              <Link href="/join" className="btn-primary btn-primary-lg">
                Join the Party
                <span className="arr">→</span>
              </Link>
              <p className="elig-fine">
                Membership is free, lifelong, and revocable only by you.<br />
                No fees. No selfies with the leader. No "missed call to register."
              </p>
            </div>
          </div>
        </section>

        {/* ============ COMPLAINTS WALL SECTION ============ */}
        <section style={{ 
          background: "var(--paper)", 
          padding: "72px 0 64px", 
          borderBottom: "3px solid var(--ink)"
        }}>
          <div className="container">
            <ComplaintsWall />
            
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/complaints" className="btn-primary btn-primary-lg" style={{ background: "var(--blood)", display: "inline-flex", gap: "10px", alignItems: "center" }}>
                Vent Your Frustrations Here
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
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
